import { useState } from "react"

function Condicional(){
    const [email,setEmail] = useState()
    const [userEmail,setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(e){
        setUserEmail("")
    }

    return (
        <div>
            <h2>cadastre seu E-mail</h2>
            <form action="">
              <input type="email" placeholder="digite seu E-mail" onChange={(e)=>setEmail(e.target.value)}></input>  
            </form>
            <button onClick={enviarEmail}>enviar E-mail</button>
            {userEmail &&(
                <div>
                    <p>o E-mail do usuário é {userEmail}</p>
                    <button onClick={limparEmail}>limpar</button>
                </div>
            )}
        </div>
    )

}

export default Condicional