import React from 'react'
import styled from 'styled-components/native';
import colors from "../../utilities/branding/colors"

const HeaderText = styled.Text`
    font-family: Nunito-Bold;
    font-size: 30px;
    text-align: center;
    color: ${colors.mairoon};
`
const SubText = styled.Text`
    font-family: Nunito-Light;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: ${colors.gray};
    margin-top: 22px;
    font-weight: 300;
    padding-left: 30px;
    padding-right: 30px;
`

interface Props {
    headerText: string,
    subText: string
}

class AuthHeader extends React.Component<Props> {
    render() {
        return (
            <>
                <HeaderText>{this.props.headerText}</HeaderText>
                <SubText>{this.props.subText}</SubText>
            </>
        )
    }
}

export default AuthHeader
