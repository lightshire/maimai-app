import React from 'react'
import styled from "styled-components/native";
import Logo from "./Logo";
import AuthHeader from "../../components/auth.header";

const SafeAreaView = styled.SafeAreaView`
    align-items: center;
    justify-content: center;
    flex: 1;
`

class AuthOTPScreen extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <Logo />
                <AuthHeader headerText={"Verify Number"} subText={"You will receive an SMS containing the verification code."} />
            </SafeAreaView>
        )
    }
}

export default AuthOTPScreen
