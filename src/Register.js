import React, {Component} from 'react';
import Campos from './Campos';

class Register extends Component {

    render(){
        let campos = ['Nombre/s', 'Apellido/s', 'e-Mail', 'Telefono']
        return (
            <div class='container'>
                <div class='box pt-4 my-3'>
                    <div class='my-2'>
                    <h2>Registro</h2>
                    <p>¡Registrese en nuestro registro!</p>
                    </div>
                    <hr></hr>
                    <Campos campos={campos}/>
                </div>
            </div>
        )
    }
}


export default Register;