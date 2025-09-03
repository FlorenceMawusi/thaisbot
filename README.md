# Thais Gibson Psychology Chatbot POC

A conversational AI assistant inspired by Thais Gibson's approach to psychology, focusing on attachment theory, trauma healing, and relationship psychology.

## Features

- **Attachment-focused conversations** - Explore your attachment style and relationship patterns
- **Trauma-informed responses** - Understanding of trauma responses and healing strategies  
- **Core wound exploration** - Identify and work with deep emotional wounds
- **Needs assessment** - Understand and address your fundamental human needs
- **Relationship guidance** - Navigate relationship challenges with psychological insights

## Knowledge Areas

- Attachment styles (secure, anxious, avoidant, disorganized)
- Core wounds and healing strategies
- Trauma responses (fight, flight, freeze, fawn)
- Human needs and emotional regulation
- Relationship patterns and communication

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd thaisbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Add your OpenAI API key to `.env.local`:
   ```
   OPENAI_API_KEY=your_actual_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenAI GPT-4 API
- **State Management**: React hooks

## Important Notes

⚠️ **This is not a replacement for professional therapy.** This chatbot provides educational information and support based on psychological principles but should not be used as a substitute for professional mental health treatment.

## Development

The chatbot uses a curated knowledge base of Thais Gibson's psychological frameworks and approaches. The knowledge is structured around:

- Attachment theory and styles
- Core wounds and trauma responses
- Human needs and emotional regulation
- Relationship patterns and solutions
- Therapeutic exercises and strategies

## License

This project is for educational and research purposes.