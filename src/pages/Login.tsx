import banner from "../assets/todo1.png"

function Login() {
    return (
        <>
            <h1>Welcome</h1>
            <img src={banner} alt="Desenho de uma menina escrevendo em um caderno" />
            <form action="">
                <input type="text" />
                <input type="text" />
                <button>Sign In</button>
            </form>
        </>
    )
}

export default Login