import React, { useState } from "react";
import { Chat } from "../Chat/Chat";
import './ChatRoom.css'

const USERS = ["USER_1", "USER_2"];
const CHATS = [
    {
        userId: "USER_1",
        message: "Hi"
    },
    {
        userId: "USER_2",
        message: "Hello"
    }
];

export function ChatRoom() {
    const [chats, setChats] = useState(CHATS);

    return (
        <>
            <h1>Chat Room</h1>
            <div className="chats">
                {USERS.map((user, index) =>
                    <Chat userId={user} key={index} chats={chats} setChats={setChats}/>
                )}
            </div>

        </>
    )
}

