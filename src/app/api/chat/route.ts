import { NextRequest } from 'next/server';
import { getChatCompletionStream } from '@/lib/openai';
import { ChatMessage } from '@/types/chat';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, conversationHistory } = body;

    if (!message || typeof message !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Message is required and must be a string' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Convert conversation history to string format for the prompt
    let historyString = '';
    if (conversationHistory && Array.isArray(conversationHistory)) {
      historyString = conversationHistory
        .map((msg: ChatMessage) => `${msg.role}: ${msg.content}`)
        .join('\n');
    }

    const stream = await getChatCompletionStream(message, historyString);

    // Create a ReadableStream for streaming response
    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) {
              const data = `data: ${JSON.stringify({ content })}\n\n`;
              controller.enqueue(encoder.encode(data));
            }
          }
          // Send end signal
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          console.error('Stream error:', error);
          controller.error(error);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error('Chat API error:', error);
    
    // Handle specific OpenAI errors
    let errorMessage = 'Failed to get AI response';
    if (error instanceof Error) {
      if (error.message.includes('insufficient_quota')) {
        errorMessage = 'OpenAI API quota exceeded. Please check your billing and usage limits.';
      } else if (error.message.includes('model_not_found')) {
        errorMessage = 'The requested AI model is not available. Please try again later.';
      } else if (error.message.includes('OPENAI_API_KEY')) {
        errorMessage = 'OpenAI API key is not configured. Please set up your API key.';
      } else {
        errorMessage = error.message;
      }
    }
    
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}