
import React from 'react'
import AuthHeader from "../../components/auth.header";
import styled from "styled-components/native";

const StyledSafeAreaView = styled.SafeAreaView`
    justify-content: center;
    align-items: center;
    flex: 1;
`

class AuthSignupScreen extends React.Component {
    render() {
        return (
            <StyledSafeAreaView>
                <AuthHeader headerText={"Sign Up"} subText={"Sell Products to your friends and generate earnings. Register using your facebook and google account for an easier set up"} />
            </StyledSafeAreaView>
        )
    }
}

export default AuthSignupScreen
