import React from 'react';
import SubmenuTabs from './SubmenuTabs';
import ChatRequests from './ChatRequests';
import ActiveConversations from './ActiveConversations';
import '../styles/ChatSidebar.css';

const ChatSidebar: React.FC = () => {
  return (
    <aside className="chat-sidebar">
      <SubmenuTabs />
      <div className="chat-sidebar-content">
        <ChatRequests />
        <ActiveConversations />
      </div>
    </aside>
  );
};

export default ChatSidebar;