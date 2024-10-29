import Button from "./Event/Button"

function Evento () {

    function clicado() {
        console.log('Fui disparado')
    }

    return (
        <div>
            <p>
                Clique para disparar um eventos
            </p>
            <Button event={clicado} text='Primeiro evento' />
        </div>
    )
}

export default Evento