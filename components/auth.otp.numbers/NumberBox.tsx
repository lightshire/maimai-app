import React from 'react'
import styled from 'styled-components/native'
import colors from "../../utilities/branding/colors";

const Container = styled.View`
    height: 60px;
    width: 60px;
    border: 1px solid ${colors.gray};
    border-radius: 50px;
    margin-left: 5px;
    margin-right: 5px;
`

class NumberBox extends React.Component {
    render() {
        return (
            <Container>

            </Container>
        )
    }
}

export default NumberBox
