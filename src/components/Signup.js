import React, { Component } from 'react';

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

    render() { 
        return ( 
            <React.Fragment>
                <h1>Signup</h1>
            </React.Fragment>
        );
    }
}
 
export default Signup;