import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo, corDeFundo}) => {
    const altPersonalizado = `imagem de ${nome}`
    return (
        <div className='Colaborador'>
            <div className='Cabecalho' style={{backgroundColor:corDeFundo}}>
                <img src={imagem} alt={altPersonalizado}></img>
            </div>
            <div className='Rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador