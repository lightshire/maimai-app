/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import screens from "./screens"
import App from './App';
import AsyncStorage from '@react-native-community/async-storage'

if(__DEV__) {
    import('./utilities/reactotron').then(() => console.log('Reactotron Configured'))
}
Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);


screens.forEach(screen => {
    Navigation.registerComponent(screen.name, () => screen.screen)
})


Navigation.events().registerAppLaunchedListener(async () => {

    const data = await AsyncStorage.getItem('@access_token')
    const isVerified = await AsyncStorage.getItem('@is_verified')

    const component = !data ? "auth.home" : (isVerified ? "app.home" : "auth.otp");

    Navigation.setRoot({
        root: {
            stack: {
                options: {
                    topBar: {
                        visible: false
                    }
                },
                children: [
                    {
                        component: {
                            name: component
                        }
                    }
                ]
            }
        }
    });
});
