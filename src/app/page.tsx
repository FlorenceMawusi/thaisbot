'use client';

import { useState, useCallback } from 'react';
import { Box, Snackbar, Alert } from '@mui/material';
import ChatInterface from '@/components/ChatInterface';
import { ChatMessage, ChatSession } from '@/types/chat';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [currentSession, setCurrentSession] = useState<ChatSession>({
    id: uuidv4(),
    messages: [],
    createdAt: new Date(),
    lastActivity: new Date(),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);

  const sendMessage = useCallback(async (messageContent: string) => {
    if (!messageContent.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: uuidv4(),
      role: 'user',
      content: messageContent,
      timestamp: new Date(),
    };

    // Add user message immediately
    setCurrentSession(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      lastActivity: new Date(),
    }));

    setIsLoading(true);
    setError(null);
    setShowError(false);

    // Create assistant message placeholder for streaming
    const assistantMessageId = uuidv4();
    const assistantMessage: ChatMessage = {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      timestamp: new Date(),
    };

    // Add empty assistant message for streaming
    setCurrentSession(prev => ({
      ...prev,
      messages: [...prev.messages, assistantMessage],
      lastActivity: new Date(),
    }));

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageContent,
          conversationHistory: currentSession.messages,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      if (!response.body) {
        throw new Error('No response body');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let streamedContent = '';

      while (true) {
        const { done, value } = await reader.read();
        
        if (done) break;
        
        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');
        
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            
            if (data === '[DONE]') {
              setIsLoading(false);
              return;
            }
            
            try {
              const parsed = JSON.parse(data);
              if (parsed.content) {
                streamedContent += parsed.content;
                
                // Set loading to false once we start receiving content
                if (streamedContent.length > 0) {
                  setIsLoading(false);
                }
                
                // Update the assistant message with streamed content
                setCurrentSession(prev => ({
                  ...prev,
                  messages: prev.messages.map(msg => 
                    msg.id === assistantMessageId 
                      ? { ...msg, content: streamedContent }
                      : msg
                  ),
                  lastActivity: new Date(),
                }));
              }
            } catch (parseError) {
              // Ignore parse errors for malformed chunks
            }
          }
        }
      }

    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setError(errorMessage);
      setShowError(true);
      
      // Update the assistant message with error
      setCurrentSession(prev => ({
        ...prev,
        messages: prev.messages.map(msg => 
          msg.id === assistantMessageId 
            ? { 
                ...msg, 
                content: 'I apologize, but I\'m having trouble responding right now. Please try again in a moment. If the problem persists, please check your internet connection or ensure your OpenAI API key is properly configured.' 
              }
            : msg
        ),
        lastActivity: new Date(),
      }));
    } finally {
      setIsLoading(false);
    }
  }, [currentSession.messages, isLoading]);

  const handleCloseError = () => {
    setShowError(false);
    setError(null);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <ChatInterface
        onSendMessage={sendMessage}
        messages={currentSession.messages}
        isLoading={isLoading}
      />
      
      <Snackbar 
        open={showError} 
        autoHideDuration={6000} 
        onClose={handleCloseError}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseError} 
          severity="error" 
          variant="filled"
          sx={{ width: '100%' }}
        >
          <strong>Connection Error:</strong> {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}