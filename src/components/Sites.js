import React from 'react'

const Sites = props => {
    return(
        <div class="container-fluid fundo-sites">
            <div style={{height: 140}}></div>
            <div className='row padding-row'>
                <div className='col-md-6 text-center'>
                    <img className='img-description' src='images/imagens_icones/site.png' alt='Sites' />
                </div>
                <div className='col-md-6 text-center padding-line'>
                    <img className='img-description' src='images/descricao_icones/sites.png' alt='Sites' />
                </div>
            </div>
        </div>
    )
}

export default Sites