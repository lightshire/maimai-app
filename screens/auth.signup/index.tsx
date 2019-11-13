
import React from 'react'
import { Formik } from "formik";
import styled from "styled-components/native";

import AuthHeader from "../../components/auth.header";
import AuthForm from "../../components/auth.form";
import AuthInputText from "../../components/auth.input";
import UserIcon from "../../components/icon.user";
import PhoneIcon from "../../components/icon.phone";
import LockIcon from "../../components/icon.lock";

const StyledSafeAreaView = styled.KeyboardAvoidingView`
    justify-content: center;
    align-items: center;
    flex: 1;
`

class AuthSignupScreen extends React.Component {

    handleSubmit = () => {

    }

    initialValues = {
        name: "",
        mobile_number: "",
        password: ""
    }

    render() {
        return (
            <StyledSafeAreaView enabled behavior={"padding"}>
                <AuthHeader headerText={"Sign Up"} subText={"Sell Products to your friends and generate earnings. Register using your facebook and google account for an easier set up"} />
                <AuthForm>
                    <Formik initialValues={this.initialValues} onSubmit={this.handleSubmit}>
                        {(props) => {
                            return (
                                <>
                                    <AuthInputText inputProps={{ value: props.values.name, placeholder: "Name" }} icon={<UserIcon />} />
                                    <AuthInputText inputProps={{ value: props.values.name, placeholder: "Mobile No" }} icon={<PhoneIcon />} />
                                    <AuthInputText inputProps={{ value: props.values.name, placeholder: "Password" }} icon={<LockIcon />} />
                                </>
                            )
                        }}
                    </Formik>
                </AuthForm>
            </StyledSafeAreaView>
        )
    }
}

export default AuthSignupScreen
