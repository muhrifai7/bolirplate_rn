import { createStackNavigator,createAppContainer } from "react-navigation";


// import Root from "../screens/Auth/index"
import Login from "../screens/Auth/Login"
import Auth from "../screens/Auth/Auth"
// import Profile from "../screens/Auth/Profile"

const ProfileNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },Register: {
    screen: Auth,
    navigationOptions: {
      header: null
    }
  },
  // Profile: {
  //   screen: Profile,
  //   navigationOptions: {
  //     header: null
  //   }
  // }
});

export default createAppContainer(ProfileNavigator);