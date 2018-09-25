import React from 'react'
import Header from './Header';

const Contact = props => {
    return(
        <div className='container-fluid fundo-contato'>
            <Header />
            <div className='row padding-row'>
                <div className='col-md-2 text-center'>&nbsp;</div>
                <div className='col-md-8'>
                    <div className='col-md-6' style={{color:'white'}}>
                        <form>
                            <h5>Entre em Contato</h5>
                            <div className='col-md-12'>
                                <label>Motivo:</label>
                                <select className='form-control'>
                                    <option>Sugestão</option>
                                    <option>Reclamação</option>
                                </select>
                            </div>
                            <div className='col-md-12'>
                                <label>Nome:</label>
                                <input type='text' name='nome' className='form-control' />
                            </div>
                            <div className='col-md-12'>
                                <label>E-mail:</label>
                                <input type='email' name='email' className='form-control' />
                            </div>
                            <div className='col-md-12'>
                                <label>Telefone:</label>
                                <input type='text' name='telefone' className='form-control' />
                            </div>
                            <div className='col-md-12'>
                                <label>Mensagem:</label>
                                <textarea cols='7' rows='2' className='form-control' name='mensagem'></textarea>
                            </div><br />
                            <div className='col-md-12'>
                                <button type='submit' className='btn btn-primary'>Enviar</button>
                            </div>
                        </form>
                    </div>
                    </div>
                <div className='col-md-2'>&nbsp;</div>
            </div>
        </div>
    )
}

export default Contact