import useChatScroll from '../../hooks/useChatScroll';
import useListenerMessages from '../../hooks/useListenerMessages';
import useMessages from '../../hooks/useMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';
import Message from './Message'

function MessageList() {
    const {loading, messages} = useMessages();
    useListenerMessages();
    const ref = useChatScroll(messages) as React.MutableRefObject<HTMLDivElement>;
    return (
        <div className='px-4 flex-1 overflow-auto' ref={ref}>
            {loading && [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}
            
            {/* if messages exists */}
            {!loading && messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}

            {/* if messages not exists */}
            {!loading && messages.length === 0 && (
                <div><p className='text-center text-white'>Send a messages to start the conversation</p></div>
            )}
        </div>
    )
}

export default MessageList