import './Chat.css'
import React, { useState, useCallback } from "react";

export function Chat({ userId, chats, setChats }) {
    // console.log(userId, chats)

    const [msg, setMsg] = useState("");

    const sendMessage = useCallback(() => {
        let newCHats = [...chats];

        newCHats.push({
            "id": userId,
            "message": msg
        });

        setChats(newCHats);
    }, [msg])

    //onClick={() => handleClick("user1", user1Msg)}
    return (
        <div className='chat'>
            <h1>Chat - {userId}</h1>

            <div className='message-box'>
                {chats.map((chat, i) => (
                    <p key={i} className={chat.userId === userId ? '' : 'textRight'}>{chat.message}</p>
                ))}
            </div>
            <div className="chat-box">
                <div className="chatbottom" >
                    <input type='text' onChange={e => setMsg(e.target.value)} value={msg} />
                    <button onClick={() => sendMessage()}>Send</button>
                </div>
            </div>
        </div>
    )
}

