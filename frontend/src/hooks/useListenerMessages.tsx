import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sounds/notification.mp3";

const useListenerMessages = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            //shouldShake untuk animasi saat ada chat baru
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();

            setMessages([...messages, newMessage]);
        });

        //cleaner useEffect
        return () => {
            socket?.off("newMessage");
        }
    }, [messages, setMessages, socket]);
}

export default useListenerMessages;