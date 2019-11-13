import React from 'react'
import styled from "styled-components/native";
import colors from "../../utilities/branding/colors";
import {TouchableWithoutFeedback} from "react-native";

const Button = styled.View`
    background: ${colors.maired};
    border-radius: 30px;
    padding: 20px 0;
    flex: 1;
`

const Text = styled.Text`
    font-family: Nunito-Black;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    font-size: 16px;
    letter-spacing: 2px;
`

class AuthSubmitButton extends React.Component {
    render() {
        return (
            <TouchableWithoutFeedback>
                <Button>
                    <Text>Sign Up</Text>
                </Button>
            </TouchableWithoutFeedback>
        )
    }
}

export default AuthSubmitButton
