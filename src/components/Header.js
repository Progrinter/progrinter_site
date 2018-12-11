import React from 'react'
//import {Link} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const Header = props => {
    return(
        <div className='navbar navbar-expand-md fundo-menu navbar-collapse'>
            <Link className='navbar-brand' to='/'>
                <img className='logo' src='images/logo.png' alt='logo'/>
            </Link>
            <button className='navbar-toggler collapsed' id='button-collapse' type='button' data-toggle='collapse' data-target='#navbar-menu' aria-controls='navbarsExample01' aria-expanded='false' aria-label='Toggle navigation'>
                <i className='icon ion-md-menu'></i>
            </button>
            <div className='navbar-collapse collapse' id='navbar-menu' style={{marginTop:-9+'px'}}>
                <ul className='navbar-nav mx-auto'>
                    <li className='nav-item active'>
                        <Link className='nav-item nav-link padding-link' style={{paddingRight:4.5+'rem'}} to='/' >Início <span className='sr-only'>(current)</span></Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-item nav-link padding-link' style={{paddingRight:4.5+'rem'}} to='/#sites'>Portfólio</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-item nav-link padding-link' style={{paddingRight:4.5+'rem'}} to='/#contato'>Contato</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header