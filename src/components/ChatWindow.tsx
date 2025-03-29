import React from 'react';
import MessageBubble from './MessageBubble';
import '../styles/ChatWindow.css';

type Message = {
    sender: 'patient' | 'doctor';
    text: string;
};

const ChatWindow: React.FC = () => {
  const messages: Message[] = [
    { sender: 'patient', text: 'Hola, Médico. Me duele mucho la cabeza desde hace unas horas.' },
    { sender: 'doctor', text: 'Hola. ¿Puedes describir el dolor? ¿Es punzante, opresivo o late como un pulso?' },
    { sender: 'patient', text: 'Es como una presión en la frente y las sienes.' },
    { sender: 'doctor', text: 'Entiendo. ¿Has dormido bien? ¿Has comido o hidratado adecuadamente hoy?' },
    { sender: 'patient', text: 'No he dormido mucho estos días y creo que no he tomado suficiente agua.' },
  ];

  return (
    <section className="chat-window">
      <header className="chat-header">
        <div>
          <strong>Adrian Rodriguez</strong>
          <div className="chat-meta">+52 222-222-2222</div>
        </div>
        <div className="chat-actions">
          <button>Registrar consulta</button>
          <button>Finalizar conversación</button>
        </div>
      </header>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <MessageBubble key={index} sender={msg.sender} text={msg.text} />
        ))}
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Escribe un mensaje..." />
        <button>Enviar</button>
      </div>
    </section>
  );
};

export default ChatWindow;