import BackButtonDemo from '@/components/backButton';
import React from 'react';

const ChatPage: React.FC = () => {
  return (
    <div className="p-6">
         <BackButtonDemo />
      <h1 className="text-2xl font-bold mb-4">Chat Conversation</h1>
      <p className="text-gray-600">Start your conversation here.</p>
    </div>
  );
};

export default ChatPage;
