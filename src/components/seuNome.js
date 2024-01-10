function seuNome ({setNome}){
    return(

        <div>
          <p>digite seu nome:</p>
          <input type="text" placeholder="Qual é seu nome" onChange={(e)=> setNome(e.target.value)}></input>
        </div>
    )
}

export default seuNome