'use client';

import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Alert,
  Fade,
  Divider,
} from '@mui/material';

import ReactMarkdown from 'react-markdown';
import {
  Send as SendIcon,
  Psychology as PsychologyIcon,
  Person as PersonIcon,
  AutoAwesome as SparkleIcon,
} from '@mui/icons-material';
import { ChatMessage } from '@/types/chat';

interface ChatInterfaceProps {
  onSendMessage: (message: string) => Promise<void>;
  messages: ChatMessage[];
  isLoading: boolean;
}

const headerStyle = {
  bgcolor: 'background.paper',
  borderBottom: '1px solid',
  borderColor: 'divider',
  position: 'sticky' as const,
  top: 0,
  zIndex: 1000
};

const avatarStyle = {
  bgcolor: 'primary.main',
  width: 48,
  height: 48
};

const cardStyle = {
  maxWidth: 600,
  mx: 'auto',
  textAlign: 'center' as const
};

const chipOutlinedStyle = {
  borderColor: 'primary.main',
  color: 'primary.main',
  '&:hover': { bgcolor: 'rgba(74, 144, 164, 0.1)' }
};

const chipClickableStyle = {
  bgcolor: 'rgba(139, 157, 195, 0.2)',
  color: 'secondary.main',
  '&:hover': { bgcolor: 'rgba(139, 157, 195, 0.3)' }
};

const userMessageStyle = {
  bgcolor: 'rgba(139, 157, 195, 0.15)',
  border: '1px solid',
  borderColor: 'rgba(139, 157, 195, 0.3)',
};

const assistantMessageStyle = {
  bgcolor: 'background.paper',
  border: '1px solid',
  borderColor: 'divider',
};

const inputPaperStyle = {
  p: 2,
  bgcolor: 'background.paper',
  border: '1px solid',
  borderColor: 'divider',
  position: 'sticky' as const,
  bottom: 0,
};

export default function ChatInterface({ onSendMessage, messages, isLoading }: ChatInterfaceProps) {
  const [inputValue, setInputValue] = useState('');
  const [isUserAtBottom, setIsUserAtBottom] = useState(true);
  const [userHasScrolledUp, setUserHasScrolledUp] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const previousMessageCountRef = useRef(0);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const checkIfUserAtBottom = useCallback(() => {
    const container = messagesContainerRef.current;
    if (!container) return true;
    
    const threshold = 100; // pixels from bottom
    const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - threshold;
    setIsUserAtBottom(isAtBottom);
    return isAtBottom;
  }, []);

  const handleScroll = useCallback(() => {
    const wasAtBottom = checkIfUserAtBottom();
    
    // If user scrolled up manually, mark that they've scrolled up
    if (!wasAtBottom && !userHasScrolledUp) {
      setUserHasScrolledUp(true);
    }
  }, [checkIfUserAtBottom, userHasScrolledUp]);

  // Smart scroll logic
  useEffect(() => {
    const messageCountChanged = messages.length !== previousMessageCountRef.current;
    const isNewMessage = messageCountChanged && messages.length > previousMessageCountRef.current;
    
    // Update the ref
    previousMessageCountRef.current = messages.length;
    
    // Only auto-scroll in these cases:
    // 1. User just sent a new message and hasn't scrolled up manually
    // 2. User is at bottom and hasn't scrolled up manually
    if (isNewMessage && !userHasScrolledUp) {
      scrollToBottom();
    }
  }, [messages, scrollToBottom, userHasScrolledUp]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const message = inputValue.trim();
    setInputValue('');
    
    // Reset scroll state when user sends a new message
    setUserHasScrolledUp(false);
    setIsUserAtBottom(true);
    
    try {
      await onSendMessage(message);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }, [inputValue, isLoading, onSendMessage]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }, [handleSubmit]);

  const suggestedTopics = [
    'Help me process big emotions',
    'I\'m triggered - help me understand why',
    'What\'s my attachment style?',
    'Why do I struggle with setting boundaries?',
    'I keep attracting the same relationship patterns',
    'How do I reprogram my core wounds?'
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Paper elevation={2} sx={headerStyle}>
        <Container maxWidth="lg" sx={{ py: { xs: 1.5, sm: 3 }, px: { xs: 2, sm: 3 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, sm: 2 }, mb: { xs: 1, sm: 2 } }}>
            <Avatar sx={{
              ...avatarStyle,
              width: { xs: 40, sm: 48 },
              height: { xs: 40, sm: 48 }
            }}>
              <PsychologyIcon />
            </Avatar>
            <Box>
              <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '1.25rem', sm: '1.75rem' }, mb: 0.5 }}>
                Thais Gibson Psychology Assistant
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                Your supportive guide for attachment, trauma, and relationship insights
              </Typography>
            </Box>
          </Box>
          
          <Alert 
            severity="info" 
            variant="outlined"
            sx={{ bgcolor: 'background.paper' }}
          >
            This AI provides educational support based on psychological principles. 
            It&apos;s not a replacement for professional therapy.
          </Alert>
        </Container>
      </Paper>

      {/* Messages */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          flex: 1, 
          py: { xs: 1, sm: 3 }, 
          px: { xs: 1, sm: 3 },
          display: 'flex', 
          flexDirection: 'column' 
        }}
      >
        <Box 
          ref={messagesContainerRef}
          onScroll={handleScroll}
          sx={{ flex: 1, mb: 3, overflow: 'auto' }}
        >
          {messages.length === 0 && (
            <Fade in timeout={800}>
              <Card sx={cardStyle}>
                <CardContent sx={{ p: 4 }}>
                  <SparkleIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h3" component="h2" gutterBottom>
                    How can I support you today?
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    I&apos;m here to help you explore and understand:
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mb: 3 }}>
                    {[
                      'Emotional Processing',
                      'Communication Skills',
                      'Boundary Setting',
                      'Core Wound Healing',
                      'Attachment Styles',
                      'Relationship Conflicts'
                    ].map((topic) => (
                      <Chip
                        key={topic}
                        label={topic}
                        variant="outlined"
                        sx={chipOutlinedStyle}
                      />
                    ))}
                  </Box>

                  <Divider sx={{ my: 3 }} />
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Try starting with:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 0.5, sm: 1 }, justifyContent: 'center' }}>
                    {suggestedTopics.map((topic) => (
                      <Chip
                        key={topic}
                        label={topic}
                        clickable
                        onClick={() => setInputValue(topic)}
                        sx={{
                          ...chipClickableStyle,
                          fontSize: { xs: '0.75rem', sm: '0.875rem' },
                          height: { xs: 32, sm: 36 },
                          minHeight: 44, // Touch target
                          px: { xs: 1, sm: 1.5 }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Fade>
          )}

          <Box sx={{ space: 3 }}>
            {messages.map((message, index) => (
              <Fade in key={message.id} timeout={500} style={{ transitionDelay: `${index * 100}ms` }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                    mb: { xs: 2, sm: 4 },
                    px: { xs: 0.5, sm: 0 },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: { xs: 1, sm: 2 },
                      maxWidth: { xs: '90%', sm: '70%' },
                      flexDirection: message.role === 'user' ? 'row-reverse' : 'row',
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: message.role === 'user' ? 'secondary.main' : 'primary.main',
                        width: 36,
                        height: 36,
                        mt: 0.5,
                      }}
                    >
                      {message.role === 'user' ? <PersonIcon /> : <PsychologyIcon />}
                    </Avatar>
                    
                    <Paper
                      elevation={1}
                      sx={{
                        p: 3,
                        ...(message.role === 'user' ? userMessageStyle : assistantMessageStyle)
                      }}
                    >
                      <Box
                        sx={{
                          lineHeight: 1.6,
                          color: message.role === 'user' ? 'secondary.dark' : 'text.primary',
                          '& p': { margin: '0 0 12px 0', fontSize: '1rem' },
                          '& p:last-child': { marginBottom: 0 },
                          '& strong': { fontWeight: 600, color: 'primary.main' },
                          '& ul, & ol': { margin: '8px 0', paddingLeft: '20px' },
                          '& li': { marginBottom: '4px' },
                          '& h1, & h2, & h3': { color: 'primary.main', fontWeight: 500 },
                        }}
                      >
                        {message.role === 'user' ? (
                          <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                            {message.content}
                          </Typography>
                        ) : (
                          <>
                            <ReactMarkdown>{message.content}</ReactMarkdown>
                            {message.content === '' && isLoading && (
                              <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', ml: 1 }}>
                                <CircularProgress size={12} />
                              </Box>
                            )}
                          </>
                        )}
                      </Box>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ 
                          display: 'block', 
                          mt: 1, 
                          textAlign: message.role === 'user' ? 'right' : 'left' 
                        }}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </Typography>
                    </Paper>
                  </Box>
                </Box>
              </Fade>
            ))}


          </Box>

          <div ref={messagesEndRef} />
        </Box>

        {/* Input */}
        {useMemo(() => (
          <Paper elevation={3} sx={{
            ...inputPaperStyle,
            mx: { xs: 1, sm: 0 },
            mb: { xs: 1, sm: 0 }
          }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ 
                display: 'flex', 
                gap: { xs: 1, sm: 2 }, 
                alignItems: 'flex-end',
                p: { xs: 1, sm: 2 }
              }}
            >
              <TextField
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Share what's on your mind... (Press Enter to send, Shift+Enter for new line)"
                multiline
                maxRows={4}
                disabled={isLoading}
                sx={{ flex: 1 }}
                variant="outlined"
              />
              <Button
                type="submit"
                variant="contained"
                disabled={!inputValue.trim() || isLoading}
                sx={{ 
                  minWidth: { xs: 48, sm: 56 },
                  height: { xs: 48, sm: 56 },
                  borderRadius: 2,
                  minHeight: 44, // Minimum touch target
                }}
              >
                <SendIcon />
              </Button>
            </Box>
          </Paper>
        ), [inputValue, isLoading, handleSubmit, handleKeyDown])}
      </Container>
    </Box>
  );
}