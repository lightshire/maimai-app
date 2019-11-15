import React from 'react'
import styled from "styled-components/native";

const Container = styled.View`
    width: 108px;
    height: 108px;
    border-radius: 129px;
    background: #fff;
    align-items: center;
    justify-content: center;
`

const Image = styled.Image`
    width: 61px;
    height: 52px;
`

class Logo extends React.Component {
    render() {
        return (
            <Container>
                <Image source={require('../../icons/maimai-icon.png')}  />
            </Container>
        )
    }
}

export default Logo
