import React from 'react'
import styled from "styled-components/native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import {TouchableWithoutFeedback} from "react-native";

const Button = styled.View`
    background: #3379E5;
    border-radius: 30px;
    height: 60px;
    width: 60px;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    margin-left: 16px;
`

class AuthFacebookButton extends React.Component {
    render() {
        return (
            <TouchableWithoutFeedback>
                <Button>
                    <FontAwesome5Icon name={"facebook-f"} size={30} color={"#fff"}/>
                </Button>
            </TouchableWithoutFeedback>
        )
    }
}

export default AuthFacebookButton
