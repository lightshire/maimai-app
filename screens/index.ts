import AuthSignupScreen from "./auth.signup";
import AppHomeScreen from "./app.home";
import AuthOTPScreen from "./auth.otp";
import AuthHomeScreen from "./auth.home";
import AuthLoginScreen from "./auth.login";

export default [
    { screen:  AuthSignupScreen, name: "auth.signup" },
    { screen: AppHomeScreen, name: "app.home" },
    { screen: AuthOTPScreen, name: "auth.otp" },
    { screen: AuthHomeScreen, name: "auth.home" },
    { screen: AuthLoginScreen, name: "auth.login" }
];
