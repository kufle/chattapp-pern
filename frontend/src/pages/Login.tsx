import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../hooks/useLogin";

function Login() {
	const [inputs, setInputs] = useState({
		username: "",
		password: "",
	});

	const {login, loading} = useLogin();
	const handleSubmit = (e : React.FormEvent) => {
		e.preventDefault();
		login(inputs);
	}

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-2xl bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
				<h1 className='text-3xl font-semibold text-center text-white'>
					Login
					<span className='text-green-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input 
							type='text' 
							placeholder='Enter username' 
							className='w-full input input-bordered h-10' 
							value={inputs.username}
							onChange={(e) => setInputs({...inputs, username: e.target.value})}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={inputs.password}
							onChange={(e) => setInputs({...inputs, password: e.target.value})}
						/>
					</div>

					<Link
						to={"/register"}
						className='text-sm  hover:underline text-white hover:text-blue-600 mt-2 inline-block'
					>
						{"Don't"} have an account?
					</Link>

					<div>
						<button 
							className='btn btn-block btn-sm mt-2'
							disabled={loading}
						>
							{loading ? "Loading..." : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login