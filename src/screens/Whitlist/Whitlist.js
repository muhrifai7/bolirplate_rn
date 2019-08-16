import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Wishlist extends Component {
  render() {
    return (
      <View container={styles.container}>
        <Text>Wishlist</Text>
      </View>
    );
  }
}

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    color:'red'
  }
});
