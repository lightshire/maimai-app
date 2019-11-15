import React from 'react'
import styled from 'styled-components/native'
import colors from "../../utilities/branding/colors";
import {TextInputProps} from "react-native";

const Container = styled.View`
    height: 60px;
    width: 60px;
    border: 1px solid ${colors.gray};
    border-radius: 50px;
    margin-left: 5px;
    margin-right: 5px;
    align-items: center;
    justify-content: center;
`

const TextInput = styled.TextInput`
    font-family: Nunito-Bold;
    color: ${colors.gray};
    font-size: 18px;
`

interface Props extends TextInputProps {

}

class NumberBox extends React.Component<Props> {
    render() {
        return (
            <Container>
                <TextInput {...this.props} placeholder={"0"} maxLength={1} keyboardType={"numeric"} />
            </Container>
        )
    }
}

export default NumberBox
