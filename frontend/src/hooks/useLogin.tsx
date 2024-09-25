import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

interface Props {
    username: string;
    password: string;
}

const useLogin = () => {
    const [loading, setLoading] = useState(false);

    const {setAuthUser} = useAuthContext();

    const login = async (inputs: Props) => {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                      'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)
            });

            const data = await res.json();
            if(!res.ok) throw new Error(data.error);

            setAuthUser(data);
        } catch (error: any) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return {loading, login}
}

export default useLogin;
