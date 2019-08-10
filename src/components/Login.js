import React, { Component } from 'react';
import Input from './common/Input';
import { Container, Row, Col, Button } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const LOGIN = gql`
    mutation LOGIN($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
        }
    }
`

class Login extends Component {
    state = { 
        email: '',
        password: '',
    }

    handleInput = (e) => {
        const {id, value} = e.target
         this.setState({
            [id]:value
        });
    }

    handleForm = (e, login) => {
        e.preventDefault();
        console.log('Enviando formulario...');
        login({variables: { 
            ...this.state
        }});
    }

    render() { 
        return (
            <Mutation mutation={LOGIN}>
                {
                    (login, {data, error, loading}) => {
                        if (loading) console.log(loading);
                        if (data) console.log(data);
                        if (error) console.log(error)
                        return ( 
                            <React.Fragment>
                                <h1>Login</h1>
                                <form onSubmit={e => this.handleForm(e, login)}>
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
                                                id='email'
                                                name='Email'
                                                type='email' 
                                                value={this.state.email}
                                                setInput={this.handleInput}
                                                required={true} />
                                            </Col>
                                            <Col>
                                                <Input 
                                                id='password'
                                                name='Contraseña'
                                                type='password' 
                                                value={this.state.password}
                                                setInput={this.handleInput}
                                                required={true} />
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
                        );
                    } 
                }
            </Mutation>
        )
    }
}
 
export default Login;