import React from 'react'
import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {TouchableWithoutFeedback} from "react-native";

const Button = styled.View`
    background: #DF4D50;
    border-radius: 30px;
    height: 60px;
    width: 60px;
    align-items: center;
    justify-content: center;
`

class AuthGoogleButton extends React.Component {
    render() {
        return (
            <TouchableWithoutFeedback>
                <Button>
                    <AntDesign name={"google"} size={30} color={"#fff"}/>
                </Button>
            </TouchableWithoutFeedback>
        )
    }
}

export default AuthGoogleButton
