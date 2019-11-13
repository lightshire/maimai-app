import React from 'react'
import styled from 'styled-components/native'

const HeaderText = styled.Text`
    font-family: Nunito-Bold;
    font-size: 30px;
    text-align: center;
`

class AuthHeader extends React.Component {
    render() {
        return (
            <>
                <HeaderText>Sign Up</HeaderText>
            </>
        )
    }
}

export default AuthHeader
