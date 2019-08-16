import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
class Search extends Component {
  render() {
    return (
      <View
        style={[
          styles.searchContainer,
          { margin: this.props.margin, height: 50, alignItems: "center" }
        ]}
      >
        <TouchableOpacity onPress={this.props.handleGoBack}>
          <Ionicons
            style={styles.searchIcon}
            name={this.props.icon}
            size={this.props.size}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.inputContainer}
          placeholder="Lokasi"
          returnKeyType="search"
          onSubmitEditing={this.props.onSubmit}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 13,
    flex: 1
  },
  searchContainer: {
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "#d9ebf7",
    borderRadius: 5
  },
  searchIcon: {
    paddingLeft: 15
  }
});

export default Search;