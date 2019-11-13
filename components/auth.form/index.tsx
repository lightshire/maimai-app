import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
    width: 90%;
    margin-top: 57px;
    margin-bottom: 51px;
`

class AuthForm extends React.Component {
    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        )
    }
}

export default AuthForm
