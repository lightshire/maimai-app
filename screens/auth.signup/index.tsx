
import React from 'react'
import { Formik } from "formik";
import styled from "styled-components/native";

import AuthHeader from "../../components/auth.header";
import AuthForm from "../../components/auth.form";
import AuthInputText from "../../components/auth.input";
import UserIcon from "../../components/icon.user";
import PhoneIcon from "../../components/icon.phone";
import LockIcon from "../../components/icon.lock";
import AuthSubmitButton from "../../components/auth.button.submit";
import AuthFacebookButton from "../../components/auth.button.facebook";
import AuthGoogleButton from "../../components/auth.button.google";
import {ActivityIndicator, TouchableWithoutFeedback} from "react-native";
import colors from "../../utilities/branding/colors";
import loginByFacebook from "../../utilities/requests/loginByFacebook";

const StyledSafeAreaView = styled.KeyboardAvoidingView`
    justify-content: center;
    align-items: center;
    flex: 1;
`

const SubmitButtons = styled.View`
    flex-direction: row;
    margin-top: 50px;
`

const Footer = styled.View`
`

const FooterLink = styled.Text`
    text-align: center;
    font-family: Nunito-Light;
    font-size: 16px;
    color: ${colors.gray};
    text-decoration: underline;
`

interface Values {
    name: string,
    phone_number: string,
    password: string,
    source: string,
    email: string
}

class AuthSignupScreen extends React.Component {

    initialValues = {
        name: "",
        phone_number: "",
        password: "",
        source: "api",
        email: ""
    }

    render() {
        return (
            <StyledSafeAreaView enabled behavior={"padding"}>
                <AuthHeader headerText={"Sign Up"} subText={"Sell Products to your friends and generate earnings. Register using your facebook and google account for an easier set up"} />
                <AuthForm>
                    <Formik
                        initialValues={this.initialValues}
                        onSubmit={async (values: Values, actions) => {
                            actions.setSubmitting(true)
                            const data = await loginByFacebook(values)
                            console.log(data.data)
                        }}
                    >
                        {(props) => {
                            return (
                                <>
                                {!props.isSubmitting ? <>
                                    <AuthInputText inputProps={{ value: props.values.name, placeholder: "Name" }} icon={<UserIcon />} />
                                    <AuthInputText inputProps={{ value: props.values.phone_number, placeholder: "Mobile No" }} icon={<PhoneIcon />} />
                                    <AuthInputText inputProps={{ value: props.values.password, placeholder: "Password" }} icon={<LockIcon />} />
                                    </> : <ActivityIndicator />}
                                    <SubmitButtons>
                                        <AuthSubmitButton />
                                        <AuthFacebookButton
                                            onFinished={(result: any) => {
                                                props.setFieldValue('name', result.name)
                                                props.setFieldValue('email', result.email)
                                                props.setFieldValue('source', "facebook")
                                                props.submitForm()
                                            }}
                                            onLoggingIn={() => {

                                            }}
                                        />
                                        <AuthGoogleButton />
                                    </SubmitButtons>
                                </>
                            )
                        }}
                    </Formik>
                </AuthForm>
                <Footer>
                    <TouchableWithoutFeedback>
                        <FooterLink>I'm already a MaiSeller</FooterLink>
                    </TouchableWithoutFeedback>
                </Footer>
            </StyledSafeAreaView>
        )
    }
}

export default AuthSignupScreen
