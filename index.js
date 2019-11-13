/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import screens from "./screens"
import App from './App';

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);


screens.forEach(screen => {
    Navigation.registerComponent(screen.name, () => screen.screen)
})


Navigation.events().registerAppLaunchedListener(() => {
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
                            id: "auth.signup",
                            name: "auth.signup"
                        }
                    }
                ]
            }
        }
    });
});
