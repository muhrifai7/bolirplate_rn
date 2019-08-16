import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Auth from '../Auth'


class Login extends Component {
  static navigationOptions = {
    header:null
}
  state = {
    login: {
      email: "",
      password: ""
    }
  };

  render() {
    const { replace, navigate } = this.props.navigation;
    return (
      
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.text}
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
         
          <TextInput
            style={styles.text}
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => navigate("Home")}
          >
            Login
          </Button>
        </View>
        <View>
          <Text style={styles.text}>
            Don't Have an account?{" "}
            <Text onPress={() => navigate("Auth")} style={styles.text1}>
              Signup Here
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}
const createNavigation = createStackNavigator({
    Login:{
        screen : Login
    },
    Auth: {
        screen : Auth
    }
})
export default createAppContainer(createNavigation);
// export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 40
  },
  textContainer: {
    height: 20,
    justifyContent: "center",
    flexGrow: 1
  },
  text: {
    borderColor: "#000",
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    justifyContent: "flex-end"
  },
  text1: {
    borderColor: "#000",
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    justifyContent: "flex-end",
    color: "#2980b9"
  },
  button: {
    borderColor: "#000",
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    color: "white",
    backgroundColor: "#2980b9"
  }
});

