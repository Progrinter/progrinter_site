import React from 'react'
import Header from './Header'
import Footer from './Footer';

const Sites = props => {
    return(
        <div class="container-fluid fundo-sites">
            <Header />
            <div className='row padding-row'>
                <div className='col-md-6 text-center'>
                    <img className='img-description' src='images/imagens_icones/site.png' alt='Sites' />
                </div>
                <div className='col-md-6 text-center padding-line'>
                    <img className='img-description' src='images/descricao_icones/sites.png' alt='Sites' />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Sites