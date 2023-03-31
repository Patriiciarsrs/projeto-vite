import './Login.css'

export function Login() {
    return (
        <div className='container-login'>
            <h1 className='h1-login'>Hello Login</h1>
            <input type="text" />
            <input type="text" />
           <div className='gruop-btn'>
            <button>Entrar</button>
            <button>Cadastrar</button>
           </div>
        </div>
    )
    
}