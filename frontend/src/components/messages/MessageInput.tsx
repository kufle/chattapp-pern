import { Send } from 'lucide-react'
import { useState } from 'react';
import useSendMessage from '../../hooks/useSendMessage';

function MessageInput() {
    const [body, setBody] = useState("");
    
    const {loading, sendMessage} = useSendMessage();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!body.trim()) return;
        await sendMessage(body);
        setBody("");
    }
    return (
        <form className='px-4 mb-3 ' onSubmit={handleSubmit}>
            <div className='w-full relative'>
                <input
                    type='text'
                    className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
                    placeholder='Send a message'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <button 
                    type='submit' 
                    className='absolute inset-y-0 end-0 flex items-center pe-3'
                    disabled={loading}
                >
                    {loading ? (
                        <span className='loading loading-spinner mx-auto' />
                    ) : (<Send className='w-6 h-6 text-white' />) 
                    }
                </button>
            </div>
        </form>
    )
}

export default MessageInput