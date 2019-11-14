import React from 'react'
import styled from "styled-components/native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import {TouchableWithoutFeedback, ActivityIndicator} from "react-native";
import {AccessToken, GraphRequest, GraphRequestManager, LoginManager} from 'react-native-fbsdk'


const Button = styled.View`
    background: #3379E5;
    border-radius: 30px;
    height: 60px;
    width: 60px;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    margin-left: 16px;
`

interface Props {
    onLoggingIn: () => any,
    onFinished: (data: any) => any
}

interface State {
    isLoading: boolean
}

class AuthFacebookButton extends React.Component<Props, State> {

    state = {
        isLoading: false
    }

    getDataFromFacebook = async (fields: string, callback: Function) => {
        const accessData = await AccessToken.getCurrentAccessToken();

        if (!accessData) {
            return
        }

        const infoRequest = new GraphRequest('/me', {
            accessToken: accessData.accessToken,
            parameters: {
                fields: {
                    string: fields
                }
            }
        }, callback.bind(this))

        new GraphRequestManager().addRequest(infoRequest).start();
    }

    handleOnPress = async () => {
        try {
            this.props.onLoggingIn();
            this.setState({ isLoading: true })
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email'])
            this.getDataFromFacebook('id, email, picture.type(large), name', this.handleFacebookDataFinished)
        }catch(e) {
            console.log(e)
        }
    }

    handleFacebookDataFinished = (error: any, result: any) => {
        this.props.onFinished(result)
        this.setState({ isLoading: false })
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.handleOnPress}>
                <Button>
                    {this.state.isLoading ? <ActivityIndicator color={"#fff"} /> : <FontAwesome5Icon name={"facebook-f"} size={30} color={"#fff"}/>}
                </Button>
            </TouchableWithoutFeedback>
        )
    }
}

export default AuthFacebookButton
