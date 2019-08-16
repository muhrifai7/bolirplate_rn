import { createStackNavigator } from "react-navigation";

// define props befor you using navigate
import Chat from "../screens/Chat/Chat";
// import ChatDetail from "../screens/Chat/ChatDetail";

const ChatNavigator = createStackNavigator({
  Chat: {
    screen: Chat,
    navigationOptions: {
      title: "Chat",
      headerStyle: { shadowColor: "transparent", elevation: 0 }
    }
  },
  // ChatDetail: {
  //   screen: ChatDetail,
  //   navigationOptions: {
  //     title: "Chat",
  //     headerStyle: { shadowColor: "transparent", elevation: 0 }
  //   }
  // }
});

ChatNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

export default ChatNavigator;
