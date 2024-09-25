import { useState } from "react"
import ConversationList from "./ConversationList"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

function Sidebar() {
  const [searchUser, setSearchUser] = useState("");
  return (
    <div className='border-r border-slate-500 p-1 md:p-4 flex flex-col w-44 md:w-1/2'>
        <SearchInput searchUser={searchUser} setSearchUser={setSearchUser} />
        <div className='divider px-3' />
        <ConversationList searchUser={searchUser} />
        <LogoutButton />
    </div>
  )
}

export default Sidebar