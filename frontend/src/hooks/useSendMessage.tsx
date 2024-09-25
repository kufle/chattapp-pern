import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const {setMessages, messages, selectedConversation} = useConversation();
    const sendMessage = async (body: string) => {
        setLoading(true);
        try {
            const res = await fetch(`api/messages/send/${selectedConversation?.id}`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
      				'Content-Type': 'application/json'
                },
                body: JSON.stringify({message: body})
            });
            const data = await res.json();
            if (!res.ok) throw Error(data.error);

            setMessages([...messages, data]);
        } catch (error: any) {
            console.log(error)
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return {loading, sendMessage}
}

export default useSendMessage;
