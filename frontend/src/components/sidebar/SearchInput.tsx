import { Search } from "lucide-react"

interface Props {
    searchUser: string;
    setSearchUser: (e: string) => void;
}

function SearchInput({searchUser, setSearchUser}: Props) {
    return (
        <form className='flex items-center gap-2'>
            <input
                type='text'
                placeholder='Search…'
                className='input-sm md:input input-bordered rounded-full sm:rounded-full w-full'
                value={searchUser}
                onChange={(e) => setSearchUser(e.target.value)}
            />
            <button type='submit' className='btn md:btn-md btn-sm btn-circle bg-sky-500 text-white  '>
                <Search className='w-4 h-4 md:w-6 md:h-6 outline-none' />
            </button>
        </form>
    )
}

export default SearchInput