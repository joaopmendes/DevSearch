
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  Main from "./pages/main-page/main.page"
import  Profile from "./pages/profile-page/profile.page"

export const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: "DevRadar"
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: "Github Profile"
            }
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: "#FFF",
            headerStyle: {
                backgroundColor: "#7d40e7",
            }
        }
    })
)