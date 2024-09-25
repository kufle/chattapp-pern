import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useMessages = () => {
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();
    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)
            try {
                const res = await fetch(`/api/messages/${selectedConversation?.id}`)
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.error || "An error occurred");
                }
                setMessages(data);
            } catch (error: any) {
                console.log(error)
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }

        getMessages();
    }, [selectedConversation?.id, setMessages]);

    return {loading, messages}
}

export default useMessages;