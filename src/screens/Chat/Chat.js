import React, { Component } from "react";
import { View, StyleSheet, FlatList,Text,TextInput } from "react-native";


class Chat extends Component {
    constructor() {
      super();
      this.state = {
        chat: [
          {
            id: "1",
            name: "Username",
            message: "lorem ipsum dolor insubmit"
          },
          {
            id: "2",
            name: "Username",
            message: "lorem ipsum dolor insubmit"
          }
        ]
      };
    }
    render() {
      
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.chat}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            
            keyExtractor={item => item.id}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ecf0f1",
      padding: 30,
      paddingHorizontal:50,
      
    }
  });
  
  //make this component available to the app
  export default Chat;