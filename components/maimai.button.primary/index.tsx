import React from 'react'
import {ActivityIndicator, TouchableWithoutFeedback, TouchableWithoutFeedbackProps} from "react-native";
import styled from "styled-components/native";
import colors from "../../utilities/branding/colors";

interface Props extends TouchableWithoutFeedbackProps {
    isLoading: boolean,
    text: string,
    ghost: boolean
}

const Button = styled.View<{ ghost: boolean }>`
  
    border-radius: 30px;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    margin-right: 5px;
    height: 60px;
    
    ${props => {
        if (props.ghost) {
            return `
               background: #fff;
               border: 3px solid ${colors.maired};
            `
        }
        return `
            background: ${colors.maired};
        `    
    }}
`

const Text = styled.Text<{ ghost: boolean }>`
    font-family: Nunito-Black;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    font-size: 16px;
    letter-spacing: 2px;
    
    ${props => {
        if (props.ghost) {
            return `
                color: ${colors.maired};
            `
        }    
    }}
    
`

class MaimaiPrimaryButton extends React.Component<Props> {

    static defaultProps = {
        isLoading: false,
        ghost: false
    }

    render() {
        return (
            <TouchableWithoutFeedback disabled={this.props.isLoading} {...this.props}>
                <Button ghost={this.props.ghost}>
                    {!this.props.isLoading ? <Text ghost={this.props.ghost}>{this.props.text}</Text> : <ActivityIndicator color={"#fff"}/>}
                </Button>
            </TouchableWithoutFeedback>
        )
    }
}

export default MaimaiPrimaryButton
