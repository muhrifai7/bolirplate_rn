import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Card, Title } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

import SearchInput from "./SearchInput";

// create a component
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: '' };  
      }  
      handleSearch = (e)=> {
        return alert('ok')
        }

  render() {
      console.log(Search,this)
    return (
      <View style={styles.container}>
        <Card>
          <Card.Content>
            <Title style={styles.searchText}>Mau cari kos dimana?</Title>
                            <View style={{backgroundColor:'white',height:50,paddingHorizontal:10}}>
                               <TextInput style={{borderColor:'gray',borderWidth:0.7,borderRadius:10}}
                                   placeholder='Searching'
                                   onChangeText={(text) => this.setState({text})}
                                    value={this.state.text}
                                    icon="ios-search"
                                    onSubmitEditing={this.handleSearch}
                               />
                            </View>
          </Card.Content>
        </Card>
      </View>
    );
  }
}

// define styles
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 25
  },
//   searchText: {
//     fontSize: 18
//   },
//   inputContainer: {
//     backgroundColor: "#d9ebf7",
//     borderTopRightRadius: 5,
//     borderBottomRightRadius: 5,
//     paddingHorizontal: 13,
//     flex: 1
//   },
//   searchContainer: {
//     flexDirection: "row",
//     marginTop: 10
//   },
//   searchIcon: {
//     padding: 12,
//     paddingRight: 0,
//     backgroundColor: "#d9ebf7",
//     borderTopLeftRadius: 5,
//     borderBottomLeftRadius: 5
//   }
});

//make this component available to the app
export default Search;