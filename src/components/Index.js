import React from 'react'
import Header from './Header'
import { HashLink as Link } from 'react-router-hash-link'

const Index = props => {
    return(
        <div class="container-fluid fundo-index">
            <Header />
            <div className='row padding-row'>
                <div className='col-md-6 text-center'>
                    <Link to='/#sites'>
                        <img className='img-description' src='images/imagens_icones/midias_sociais.png' alt='Midias Sociais' />
                    </Link>
                </div>
                <div className='col-md-6 text-center'>
                    <Link to='/#midias'>
                        <img className='img-description' src='images/imagens_icones/sites.png' alt='Midias Sociais' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Index