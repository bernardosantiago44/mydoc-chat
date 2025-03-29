import React, { useState } from 'react';
import '../styles/SubmenuTabs.css';

const SubmenuTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'conversations' | 'calls'>('conversations');

  const handleConversationsClick = () => {
    setActiveTab('conversations');
  };

  const handleCallClick = () => {
    setActiveTab('calls')
  };

  return (
    <div className="submenu-tabs">
      <button
        className={activeTab === 'conversations' ? 'tab active' : 'tab'}
        onClick={ handleConversationsClick }
      >
        Conversaciones
      </button>
      <button
        className={activeTab === 'calls' ? 'tab active' : 'tab'}
        onClick={ handleCallClick }
      >
        Llamadas
      </button>
    </div>
  );
};

export default SubmenuTabs;