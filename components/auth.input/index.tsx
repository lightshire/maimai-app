import React, {ReactNode} from 'react'
import {TextInputProps} from "react-native";
import styled from "styled-components/native";
import colors from "../../utilities/branding/colors";

interface Props {
    inputProps: TextInputProps,
    icon: ReactNode,
}

const Container = styled.View<{ isFocused: boolean }>`
    margin-top: 12px;
    margin-bottom: 12px;
    padding: 20px 24px 20px 24px;
    border: 1px solid ${colors.gray};
    border-radius: 50px;
    background: #fff;
    flex-direction: row;
    
    ${(props) => props.isFocused ? `
        border: 1.5px solid ${colors.lightGray};
        box-shadow: 0px 9px 11px rgba(152, 152, 152, 0.1);
        shadow-color: #000;
        shadow-offset: 0px 7px;
        shadow-opacity: 0.11;
        shadow-radius: 9.11;
        elevation: 2;
    ` : ``}
`

const StyledInput = styled.TextInput`
    font-family: Nunito-Regular;
    font-size: 18px;
    flex: 1;
    margin-left: 12px;
`

interface State {
    isFocused: boolean
}

class AuthInputText extends React.Component<Props, State> {

    state = {
        isFocused: false
    }

    toggleFocus = () => {
        this.setState({ isFocused: !this.state.isFocused })
    }

    render() {
        return (
            <Container isFocused={this.state.isFocused}>
                {this.props.icon}
                <StyledInput {...this.props.inputProps} onFocus={this.toggleFocus} onBlur={this.toggleFocus} />
            </Container>
        )
    }
}

export default AuthInputText
