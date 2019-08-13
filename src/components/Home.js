import React, { Component } from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_USERS = gql`
  {
    getUsers {
        _id 
        email
        first_name
        last_name
    }
  }
`

export class Home extends Component {

    renderUsers = (users) => {
        return users.map( user => {
            return <div 
                    style={{
                        border: '2px solid black',
                        padding: '10px',
                        marginBottom: '6px',
                    }}
                    key={user._id}>
                        <h3> { `${user.first_name}  ${user.last_name}` }</h3>
                        <h4> <i> { `${user.email}` } </i> </h4>
                   </div>
        })
    }

    render() {       
        return (
            <Query query={GET_USERS}>
                {({ loading, error, data }) => {
                    if(loading) return <h1>Cargando...</h1>
                    if(error) return <h1>Hubo un error!</h1>
                    if (data) return this.renderUsers(data.getUsers);
                }}
            </Query>
        )
    }
}

export default Home
