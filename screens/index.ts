import AuthSignupScreen from "./auth.signup";
import AppHomeScreen from "./app.home";
import AuthOTPScreen from "./auth.otp";

export default [
    { screen:  AuthSignupScreen, name: "auth.signup" },
    { screen: AppHomeScreen, name: "app.home" },
    { screen: AuthOTPScreen, name: "auth.otp" }
];
