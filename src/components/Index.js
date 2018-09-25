import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Index = props => {
    return(
        <div class="container-fluid fundo-index">
            <Header />
            <div className='row padding-row'>
                <div className='col-md-6 text-center'>
                    <a href='/midias'>
                        <img className='img-description' src='images/imagens_icones/midias_sociais.png' alt='Midias Sociais' />
                    </a>
                </div>
                <div className='col-md-6 text-center'>
                    <a href='/sites'>
                        <img className='img-description' src='images/imagens_icones/sites.png' alt='Midias Sociais' />
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Index