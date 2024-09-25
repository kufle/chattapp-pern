import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";

interface Props {
    fullName: string;
    username: string;
    password: string;
    confirmPassword: string;
    gender: string;
}

const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
    
    const register = async (inputs: Props) => {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/register",  {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
      				'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error);
            setAuthUser(inputs);
        } catch (error: any) {
            console.log(error.message);
            //toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }

    return {loading, register}
}

export default useRegister;