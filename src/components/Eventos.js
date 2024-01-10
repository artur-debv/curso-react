import Button from "./evento/Button"

function Eventos(){

    function meuEvento(){
        console.log(`ativando primeiro evento!`)
    }

    function segundoEvento(){
        console.log("ativando o segundo evento")
    }

    return (
        <div>
            <p>clique para disparar um evento</p>
            < Button text="primeiro evento"/>
            <button onClick={meuEvento()}>primeiro evento!</button>
            <button onClick={segundoEvento()}>segundo Evento !</button>
        </div>
    )

}

export default Eventos 