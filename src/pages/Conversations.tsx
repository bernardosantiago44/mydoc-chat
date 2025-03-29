import ChatSidebar from '../components/ChatSidebar';
import ChatWindow from '../components/ChatWindow'; // we'll build this next!
import '../styles/Conversations.css';

const Conversations = () => {
  return (
    <div className="conversations-page">
      <ChatSidebar />
      <ChatWindow />
    </div>
  );
};

export default Conversations;