import React from 'react'
import styled from "styled-components/native";
import Logo from "./Logo";

const SafeAreaView = styled.SafeAreaView`
    align-items: center;
    justify-content: center;
    flex: 1;
`

const Header = styled.View`
`


class AuthOTPScreen extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <Header>
                    <Logo />
                </Header>
            </SafeAreaView>
        )
    }
}

export default AuthOTPScreen
