# Ai Chat Application
This application allows users to interact with an AI model through a chat interface. The user can ask questions and receive responses from the AI model. As the conversation progresses, users are given opportunities to provide feedback at different stages.

Key features of the feedback system include:

- **Like/Dislike Buttons**: At each stage of the conversation, users can rate the AI model’s response by using floating thumbs up/thumbs down buttons that appear when the mouse hovers over the AI's answer.
- **5-Star Rating**: At the end of the conversation, users can rate their overall experience with the AI using a 5-star rating system.
- **Subjective Feedback**: Users can also provide additional subjective feedback in the form of written comments, allowing for more personalized insights on their experience.

## Key enhancements
- Lazy Loading components like SharePopup, ConversationFeedback, ConversationFeedbackSummary.
- Using React.memo for MessageInput component to prevent unnecessary re-renders.
- Use useCallback hook to memoize callback functions.
- Use redux store with redux-persist to store conversations in localStorage.
 
## Future improvements
Given more time, I'd like to add:
- Streaming animation for the chat bot's response
- Dark mode
- Markdown editor
- Keyboard shortcuts to start new conversations, end current conversation, open/close sidebar, etc.

## Libraries Used
- React
- Vite
- Chakra UI
- Redux
- React Router
- Axios

## Setup Instructions

### Prerequisites
- Node.js (v16+)
- Git

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/p1yu5h/ai-chat-app.git
   cd ai-chat-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the local development server:
```bash
npm run dev
```

### Build and Deploy

To build the app:
```bash
npm run build
```

To deploy to GitHub Pages:
```bash
npm run deploy
```

### Linting

Run the linter:
```bash
npm run lint
```

## Sreenshot

<img width="1440" alt="Screenshot 2025-02-01 at 6 34 11 PM" src="https://github.com/user-attachments/assets/771214f3-38d2-42bd-83d0-b43ea160e960" />

