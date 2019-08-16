import { createStackNavigator } from "react-navigation";

import Home from "../screens/Home/Home"
// import Kos from "../screens/Kos/KosList"
// import KosDetail from "../screens/Kos/KosDetail";
import Login from "../screens/Auth/Login"
// import Iklan from "../screens/Iklan/Iklan";
// import Filter from "../screens/Filter/Filter";
// import Urutkan from "../screens/Urutkan/Urutkan";

// const KosList = createStackNavigator({
//   Kos: {
//     screen: Kos,
//     navigationOptions: {
//       header: null
//     }
//   },
//   KosDetail: {
//     screen: KosDetail,
//     navigationOptions: {
//       header: null
//     }
//   },
//   Filter: {
//     screen: Filter,
//     navigationOptions: {
//       header: null
//     }
//   },
//   Urutkan: {
//     screen: Urutkan,
//     navigationOptions: {
//       header: null
//     }
//   }
// });

const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  // Kos: {
  //   screen: KosList,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
//   Iklan: {
//     screen: Iklan,
//     navigationOptions: {
//       header: null
//     }
//   }
});

HomeNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};
 
export default HomeNavigator;

