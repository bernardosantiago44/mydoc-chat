import React from 'react';
import '../styles/MessageBubble.css';

interface MessageBubbleProps {
  sender: 'patient' | 'doctor';
  text: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ sender, text }) => {
  const isDoctor = sender === 'doctor';

  return (
    <div className={`message-bubble ${isDoctor ? 'doctor' : 'patient'}`}>
      <p>{text}</p>
    </div>
  );
};

export default MessageBubble;