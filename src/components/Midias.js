import React from 'react'

const Midias = props => {
    return(
        <div class="container-fluid fundo-midias">
            <div style={{height: 140}}></div>
            <div className='row padding-row'>
                <div className='col-md-6 text-center'>
                    <img className='img-description' src='images/imagens_icones/midias.png' alt='Midias' />
                </div>
                <div className='col-md-6 text-center padding-line'>
                    <img className='img-description' src='images/descricao_icones/midias.png' alt='Midias' />
                </div>
            </div>
        </div>
    )
}

export default Midias