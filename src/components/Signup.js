import React, { Component } from 'react';
import Input from './common/Input';
import { Container, Row, Col} from 'reactstrap';

class Signup extends Component {
    state = { 
        first_name: '',
        last_name: '',
        birth_date: '',
        gender: '',
        email: '',
        password: '',
        profile_img: '',
    }

    handleInput = (e) => {
        const {id, value} = e.target
         this.setState({
            [id]:value
        });
        console.log(this.state);
    }

    render() { 
        return ( 
            <React.Fragment>
                <h1>Signup</h1>
                <Container 
                    style={{
                        padding: '1em',
                        borderRadius: '0.5em',
                        backgroundColor: '#bdbbbb',
                    }}
                    lassName='mt-4'>
                    <Row>
                        <Col>
                            <Input 
                            id='first_name'
                            name='Nombre(s)'
                            type='text' 
                            value={this.state.first_name}
                            setInput={this.handleInput}
                            required={true} />
                        </Col>
                        <Col>
                            <Input 
                            id='last_name'
                            name='Apellido(s)'
                            type='text' 
                            value={this.state.last_name}
                            setInput={this.handleInput}
                            required={true} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input 
                            id='birth_date'
                            name='Fecha de Nacimiento'
                            type='date' 
                            value={this.state.birth_date}
                            setInput={this.handleInput}
                            required={true} />
                        </Col>
                        <Col>
                            <Input 
                            id='email'
                            name='Email'
                            type='email' 
                            value={this.state.email}
                            setInput={this.handleInput}
                            required={true} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input 
                            id='password'
                            name='Contraseña'
                            type='password' 
                            value={this.state.password}
                            setInput={this.handleInput}
                            required={true} />
                        </Col>
                        <Col>
                            <Input 
                            id='profile_img'
                            name='Imagen de Perfil'
                            type='file' 
                            value={this.state.profile_img}
                            setInput={this.handleInput}
                            required={true} />
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}
 
export default Signup;