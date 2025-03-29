import React from "react";

interface ChatRequestProps {
    sender: string;
    phone: string;
}

/*
const ChatRequest: React.FC<ChatRequestProps> = ({ sender, phone }) => {
    return (
      <div className="chat-request">
        <span className="sender-name">{ sender }</span>
        <button className="secondary">Ignorar</button>
        <button className="primary">Aceptar</button>
      </div>
    );
};
*/

const ChatRequest: React.FC<ChatRequestProps> = ({ sender, phone }) => {
    return (
      <div className="chat-request">
        <span className="sender-information">
            <div className="sender-name">{ sender }</div>
            <div className="sender-phone">{ phone }</div>
        </span>
        <button className="secondary">Ignorar</button>
        <button className="primary">Aceptar</button>
      </div>
    );
};

const ChatRequests = () => (
    <div style={{ marginBottom: '16px' }}>
      <h4>Solicitudes</h4>
      <ChatRequest sender="Nombre desconocido" phone="+52 222-222-2222" />
      <ChatRequest sender="Paola Reyes" phone="+52 222-222-2222" />
      <ChatRequest sender="Nombre del paciente" phone="+52 222-222-2222" />
    </div>
  );
  
  export default ChatRequests;