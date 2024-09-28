import { Send } from 'lucide-react'
import { useEffect, useRef, useState } from 'react';
import useSendMessage from '../../hooks/useSendMessage';
import { resizeTextarea } from '../../utils/resizeTextarea';

function MessageInput() {
    const [body, setBody] = useState("");
    const textareaRef = useRef(null);
    
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.target.value);
        resizeTextarea(textareaRef);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }

        if (e.key === "Enter" && e.shiftKey) {
            e.preventDefault();
            setBody(body+"\n");
        }
    }
    
    const {loading, sendMessage} = useSendMessage();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!body.trim()) return;
        await sendMessage(body);
        setBody("");
    }

    useEffect(() => {
        resizeTextarea(textareaRef);
    }, [body]);

    return (
        <form className='px-4 mb-3 ' onSubmit={handleSubmit}>
            <div className='w-full relative flex items-end'>
                <textarea
                    ref={textareaRef}
                    autoComplete='off'
                    rows={1}
                    className='flex-1 mr-3 border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white resize-none overflow-auto'
                    placeholder='Send a message'
                    value={body}
                    onKeyDown={handleKeyDown}
                    onChange={handleInputChange}
                />
                <div>
                    <button 
                        type='submit' 
                        className='flex items-center justify-center bg-blue-500 p-1.5 rounded-lg'
                        disabled={loading}
                    >
                        {loading ? (
                            <span className='loading loading-spinner mx-auto' />
                        ) : (<Send className='w-6 h-6 text-white' />) 
                        }
                    </button>
                </div>
            </div>
        </form>
    )
}

export default MessageInput