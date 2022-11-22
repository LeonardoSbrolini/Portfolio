import Colaborador from '../Colaborador/Index'
import './Time.css'

const Time = (props) => {

    const corPrimaria = { borderColor: props.corPrimaria }
    const corSecundaria = { backgroundColor: props.corSecundaria }

    return (
        (props.colaboradores.length > 0) && <section className='Time' style={corSecundaria}>
            <h3 style={corPrimaria} >{props.nomeTime}</h3>
            <div className='Colaboradores'>
                {props.colaboradores.map(colaborador =>
                <Colaborador corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} key={colaborador.nome}></Colaborador>)}    
            </div>
            </section>
    )
}

export default Time