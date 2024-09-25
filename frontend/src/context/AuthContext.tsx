import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

type AuthUserType = {
    id?: string;
    fullName: string;
    username: string;
    profilePic?: string;
    gender: string;
}

interface AuthInterface {
    authUser: AuthUserType | null
    setAuthUser: Dispatch<SetStateAction<AuthUserType | null>>
    isLoading: boolean
}

const AuthContext = createContext<AuthInterface>({
    authUser: null,
    setAuthUser: () => {},
    isLoading: true,
});

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({children}: {children: ReactNode}) => {
    const [authUser, setAuthUser] = useState<AuthUserType | null>(null);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("/api/auth/me");
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.error);
                }
                setAuthUser(data);
            } catch (error: any) {
                console.log(error);
                toast.error(error.message)
            } finally {
                setIsloading(false);
            }
        }

        fetchUser();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                authUser,
                setAuthUser,
                isLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}