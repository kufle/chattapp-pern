import useConversation from "../../zustand/useConversation"
import MessageInput from "./MessageInput"
import MessageList from "./MessageList"
import NoChatSelected from "./NoChatSelected";

function MessageContainer() {
    const {selectedConversation} = useConversation();
    
    return (
        <div className='w-full flex flex-col'>
            {!selectedConversation ? (
                <NoChatSelected />
            ):(
                <>
                {/* Header */}
                <div className='bg-slate-500 px-4 py-2 mb-2'>
                    <span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
                </div>

                <MessageList />
                <MessageInput />
                </>
            )}
        </div>
    )
}

export default MessageContainer