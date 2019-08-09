import React, { Component } from 'react';
import Input from './common/Input';
import { Container, Row, Col, Button } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const SIGNUP = gql`
    mutation SIGNUP($data: UserCreateInput!){
        signup(data: $data){
            token
        }
    }
`

class Signup extends Component {
    state = { 
        first_name: '',
        last_name: '',
        birth_date: '',
        email: '',
        password: '',
        profile_img: '',
    }

    handleInput = (e) => {
        const {id, value} = e.target
         this.setState({
            [id]:value
        });
    }

    handleForm = (e, signup) => {
        e.preventDefault();
        console.log('Enviando formulario...');
        signup({variables: { data: { ...this.state }}})
    }

    catchData = (data) => {
        alert('Signup exitoso!');
        this.props.history.push('/login');
    }

     catchError = (error) => {
        console.log(error);
        alert('hubo un error...');
    }

    render() { 
        return (
            <Mutation mutation={SIGNUP}>
                {
                    (signup, {data, error, loading}) => {
                        if(data) this.catchData(data)
                        if(error) this.catchError(error)
                        return(
                            <React.Fragment>
                                <h1>Signup</h1>
                                <form onSubmit={e => this.handleForm(e, signup)}>
                                    <Container 
                                        style={{
                                            padding: '1em',
                                            borderRadius: '0.5em',
                                            backgroundColor: '#bdbbbb',
                                        }}
                                        className='mt-4'>
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
                                                setInput={this.handleInput} />
                                            </Col>
                                        </Row>
                                    </Container>
                                    <div className='d-flex flex-column mt-2'>
                                        <Button
                                            type='submit'
                                            color='primary' 
                                            className='mt-2'>
                                            Enviar
                                        </Button>
                                    </div>
                                </form>
                            </React.Fragment>
                        )

                    }
                }
            </Mutation>
        );
    }
}
 
export default Signup;