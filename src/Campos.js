import './App.css';
import React, { Component } from 'react';

class Campos extends Component {
    constructor(props) {
        super(props)
    }

    render(props) {

        let campos = this.props.campos
        return (
            <div class='container pb-3'>
                <div class='container'>
                    <form name='registro'>
                        {campos.map(campo => <div><label>{campo}</label><input type='text' class='form-control'></input></div>)}
                        <div>
                            <label>Contraseña</label>
                            <input type='password' name='passwd' class='form-control'></input>
                        </div>
                        <div>
                            <label>Repetir contraseña</label>
                            <input type='password' name='repasswd' class='form-control'></input>
                        </div>
                        <hr></hr>
                        <div class='boton'>
                            <button type="button" class="btn btn-primary btn-lg btn-block">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default Campos;