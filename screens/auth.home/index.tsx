import React from 'react'
import styled from 'styled-components/native'
import { Dimensions } from "react-native";

import AuthHeader from "../../components/auth.header";
import MaimaiPrimaryButton from "../../components/maimai.button.primary";
import colors from "../../utilities/branding/colors";
import AuthFacebookButton from "../../components/auth.button.facebook";
import AuthGoogleButton from "../../components/auth.button.google";
import {Navigation} from "react-native-navigation";

const { height } = Dimensions.get("window")

console.log(height)

const Container = styled.View`
    justify-content: space-around;
    flex: 1;
    ${() => {
        if (height <= 568) {
            return `margin-top: 24px;`
        }
        if (height <= 667) {
            return `margin-top: 64px;`
        }
         if (height >= 896) {
             return `margin-top: 128px;`
         }
    }}
`

const SafeAreaView = styled.SafeAreaView`
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
    margin-top: 24px;
`

const SocialMediaGroup = styled.View`
    align-items: center;
    flex: 1;
    margin-top: 24px;
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
    margin-bottom: 24px;
`

const GroupContainer = styled.View`
    flex: 5;
`

const AuthHeaderContainer = styled.View`
    margin-top: 24px;
`

interface Props {
    componentId: string
}

class AuthHomeScreen extends React.Component<Props> {

    handleLogin = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "auth.login"
            }
        })
    }

    handleRegister = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "auth.signup"
            }
        });
    }

    render() {
        return (
            <SafeAreaView>
                <Container>
                    <Artwork>
                        <ArtworkImage source={require('../../assets/images/signup-home.png')}/>
                    </Artwork>
                    <GroupContainer>
                        <AuthHeaderContainer>
                            <AuthHeader headerText={"Welcome"}
                                        subText={"Reimagine your selling tactics! Learn how to make the most of MaiMai's selling platform and start earning."}/>
                        </AuthHeaderContainer>
                        <ButtonGroup>
                            <MaimaiPrimaryButton text={"Login"} onPress={this.handleLogin} />
                            <MaimaiPrimaryButton text={"Sign Up"} ghost onPress={this.handleRegister}/>
                        </ButtonGroup>
                        <SocialMediaGroup>
                            <SocialMediaText>or via social media</SocialMediaText>
                            <SocialMediaButtonGroup>
                                <AuthFacebookButton onLoggingIn={() => {
                                }} onFinished={() => {
                                }}/>
                                <AuthGoogleButton/>
                            </SocialMediaButtonGroup>
                        </SocialMediaGroup>
                    </GroupContainer>
                </Container>
            </SafeAreaView>
        )
    }
}

export default AuthHomeScreen
