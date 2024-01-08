function Eventos(){

    function meuEvento(){
        console.log(`opa, fui ativado`)
    }


    return (
        <div>
            <p>clique para disparar um evento</p>
            <button onClick={meuEvento()}>Ativar!</button>
        </div>
    )

}

export default Eventos 