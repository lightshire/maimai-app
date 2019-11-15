import React from 'react'
import styled from "styled-components/native";
import colors from "../../utilities/branding/colors";
import {ActivityIndicator, TouchableWithoutFeedback} from "react-native";

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

interface Props {
    isLoading: boolean,
    onPress: any
}

class AuthSubmitButton extends React.Component<Props> {
    render() {
        return (
            <TouchableWithoutFeedback disabled={this.props.isLoading} onPress={this.props.onPress}>
                <Button>
                    {!this.props.isLoading ? <Text>Sign Up</Text> : <ActivityIndicator color={"#fff"} />}
                </Button>
            </TouchableWithoutFeedback>
        )
    }
}

export default AuthSubmitButton
