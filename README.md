# Thais Gibson Psychology Chatbot

A professional conversational AI assistant built with **authentic Thais Gibson teachings** from The Personal Development School. Features real-time streaming responses and a comprehensive knowledge base focused on attachment theory, core wound healing, and relationship psychology.

## ✨ Features

- **🎯 Authentic Thais Gibson Content** - Exclusively uses Thais Gibson's original methods and teachings
- **💬 Real-time Streaming Chat** - Live AI responses with smooth typing animation
- **🎨 Professional UI** - Material-UI design with responsive layout
- **📱 Mobile Responsive** - Works seamlessly on all devices
- **🧠 Attachment-focused Conversations** - Explore your attachment style and relationship patterns
- **💔 Core Wound Healing** - Thais Gibson's evidence-based reprogramming techniques
- **📋 Practical Exercises** - Step-by-step healing frameworks and therapeutic practices
- **🔄 Breakup & Grief Support** - Transform relationship endings into personal growth
- **⚖️ Relationship Evaluation** - "When to Leave" framework for healthy boundaries

## 📚 Knowledge Areas

### Attachment Theory
- **Secure** - Comfortable with intimacy and independence
- **Anxious** - Craves closeness but fears abandonment  
- **Avoidant** - Values independence over intimacy
- **Fearful Avoidant (Disorganized)** - Wants closeness but fears it

### Core Wounds & Healing
- "I am not worthy of love"
- "I am not safe" 
- "I cannot trust others"
- "I am not good enough"
- "I am helpless"
- Thais Gibson's reprogramming methodology with repetition and emotion

### Trauma Responses
- **Fight** - Aggressive response to perceived threat
- **Flight** - Escape response to danger
- **Freeze** - Immobilization when overwhelmed
- **Fawn** - People-pleasing to appease threats

### Relationship Tools
- Boundary setting practices
- Breakup healing framework (6-step process)
- Relationship evaluation ("When to Leave" method)
- Communication strategies for different attachment styles

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/FlorenceMawusi/thaisbot.git
   cd thaisbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```bash
   touch .env.local
   ```
   
   Add your OpenAI API key to `.env.local`:
   ```env
   OPENAI_API_KEY=your_actual_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Live Demo

Visit the live application: [https://github.com/FlorenceMawusi/thaisbot](https://github.com/FlorenceMawusi/thaisbot)

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Material-UI (MUI) with custom theme
- **AI**: OpenAI GPT-4o-mini API with streaming
- **State Management**: React hooks and context
- **Markdown**: react-markdown for formatted responses
- **Deployment**: Ready for Vercel, Netlify, or similar platforms

## 💡 Key Features Explained

### Streaming Chat Interface
- Real-time response streaming from OpenAI
- Smooth typing animation with blinking cursor
- Optimized re-renders to prevent UI flickering
- Mobile-responsive Material-UI design

### Authentic Content
- **Exclusively Thais Gibson's methods** - No techniques from other psychologists
- Curated knowledge base from The Personal Development School
- Evidence-based core wound reprogramming
- Attachment theory as the foundation for all guidance

### Practical Exercises
- **Core Wound Reprogramming** - 8-step daily practice
- **Breakup Healing Framework** - 6-step transformation process  
- **Relationship Evaluation** - "When to Leave" methodology
- **Nervous System Regulation** - Thais Gibson's trauma-informed approach

## 📖 Knowledge Base Structure

```
src/data/knowledge-base.ts
├── attachmentStyles[]     # 4 attachment styles with characteristics
├── coreWounds[]          # 5 major core wounds with healing strategies  
├── humanNeeds[]          # Fundamental emotional needs
├── traumaResponses[]     # Fight/flight/freeze/fawn responses
├── relationshipPatterns[] # Common relationship dynamics
└── exercises[]           # 9 therapeutic exercises and frameworks
```

## ⚠️ Important Disclaimer

**This is not a replacement for professional therapy.** This chatbot provides educational information and support based on Thais Gibson's psychological principles but should not be used as a substitute for professional mental health treatment. Always consult with qualified mental health professionals for serious psychological concerns.

## 🤝 Contributing

This project focuses exclusively on authentic Thais Gibson content. When contributing:
- Ensure all content references Thais Gibson's original teachings
- Cite sources from The Personal Development School
- Maintain the attachment theory foundation
- Follow the existing code structure and TypeScript conventions

## 📄 License

This project is for educational and research purposes. Content is based on publicly available teachings from Thais Gibson and The Personal Development School.

## 🙏 Acknowledgments

- **Thais Gibson** - Founder of The Personal Development School and creator of Integrated Attachment Theory
- **The Personal Development School** - Source of authentic psychological content and methodologies
- All the research and teachings that make healing accessible to everyone