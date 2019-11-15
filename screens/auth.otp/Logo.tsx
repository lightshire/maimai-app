import React from 'react'
import styled from "styled-components/native";

const Container = styled.View`
    width: 108px;
    height: 108px;
    border-radius: 129px;
    background: #fff;
    align-items: center;
    justify-content: center;
    shadow-color: rgba(233, 35, 58, 0.16);
    shadow-offset: 0 12px;
    shadow-opacity: 0.58;
    shadow-radius: 16px;
    elevation: 24;    
    margin-bottom: 24px;
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
