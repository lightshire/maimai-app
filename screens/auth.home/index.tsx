import React from 'react'
import styled from 'styled-components/native'
import AuthHeader from "../../components/auth.header";
import MaimaiPrimaryButton from "../../components/maimai.button.primary";
import colors from "../../utilities/branding/colors";
import AuthFacebookButton from "../../components/auth.button.facebook";
import AuthGoogleButton from "../../components/auth.button.google";

const Container = styled.SafeAreaView`
    justify-content: space-around;
    flex: 1;
`


const ArtworkImage = styled.Image`
    resizeMode: contain;
    width: 261px;
    flex: 1;
`

const Artwork = styled.View`
    flex: 2;
    align-items: center;
`

const ButtonGroup = styled.View`
    flex-direction: row;
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 43px;
    flex: 1;
`

const SocialMediaGroup = styled.View`
    justify-content: space-around;
    align-items: center;
    flex: 1;
`

const SocialMediaButtonGroup = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const SocialMediaText = styled.Text`
    font-family: Nunito-Light;
    color: ${colors.gray};
    font-size: 16px;
`

const GroupContainer = styled.View`
    flex: 2;
`

class AuthHomeScreen extends React.Component {
    render() {
        return (
            <Container>
                    <Artwork>
                        <ArtworkImage source={require('../../assets/images/signup-home.png')}/>
                    </Artwork>
                    <AuthHeader headerText={"Welcome"}
                                subText={"Reimagine your selling tactics! Learn how to make the most of MaiMai's selling platform and start earning."}/>
                    <GroupContainer>
                        <ButtonGroup>
                            <MaimaiPrimaryButton text={"Login"}/>
                            <MaimaiPrimaryButton text={"Sign Up"} ghost/>
                        </ButtonGroup>
                        <SocialMediaGroup>
                            <SocialMediaText>or via social media</SocialMediaText>
                            <SocialMediaButtonGroup>
                                <AuthFacebookButton onLoggingIn={() => {}} onFinished={() => {}} />
                                <AuthGoogleButton />
                            </SocialMediaButtonGroup>
                        </SocialMediaGroup>
                    </GroupContainer>
            </Container>
        )
    }
}

export default AuthHomeScreen
