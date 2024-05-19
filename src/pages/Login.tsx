import { ChangeEvent, FormEvent, useContext, useState } from "react"
import banner from "../assets/inicialApp.png"
import { useNavigate } from "react-router-dom"
import Context from "../Context/Context";

function Login() {
    const [input, setInput] = useState({
        userName: "",
        password: ""
    });
    const navigate = useNavigate();
    const {onLogin} = useContext(Context)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value
        }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onLogin(input.userName)
        navigate("/todo");
    }

    return (
        <>
            <h1>Welcome</h1>
            <img src={banner} alt="Desenho de uma menina escrevendo em um caderno" />
            <form onSubmit={handleSubmit}>
                <input type="text" name="userName" id="userName" placeholder="Enter your usernamer" value={input.userName} onChange={handleChange}/>
                <input type="password" name="password" id="password" placeholder="Enter your password" value={input.password} onChange={handleChange}/>
                <button type="submit">Sign In</button>
            </form>
        </>
    )
}

export default Login