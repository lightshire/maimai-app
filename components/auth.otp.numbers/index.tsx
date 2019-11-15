import React from 'react'
import styled from 'styled-components/native'
import NumberBox from "./NumberBox";

const Container = styled.View`
    margin-top: 54px;
    margin-bottom: 88px;
    flex-direction: row;
`

class OTPNumbers extends React.Component {
    render() {
        return (
            <Container>
                <NumberBox />
                <NumberBox />
                <NumberBox />
                <NumberBox />
            </Container>
        )
    }
}

export default OTPNumbers
