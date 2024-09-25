import { useEffect, useState } from 'react';
import useGetConversations from '../../hooks/useGetConversations';
import Conversation from './Conversation';

interface Props{
    searchUser: string;
}

function ConversationList({searchUser}: Props) {
    const {loading, conversations} = useGetConversations();
    const [listConversation, setListConvesation] = useState<ConversationType[]>([]);
    
    useEffect(() => {
        if (searchUser) {
            const searchConversation = conversations.filter(
                (name) => name.fullName.toLocaleLowerCase().includes(searchUser.toLocaleLowerCase())
            );
            setListConvesation(searchConversation);
        } else {
            setListConvesation(conversations);
        }
    }, [conversations, searchUser]);

    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {listConversation.map((conversation) => (
                <Conversation key={conversation.id} conversation={conversation} />
            ))}
            {loading && <span className='loading loading-spinner mx-auto' />}
        </div>
    )
}

export default ConversationList