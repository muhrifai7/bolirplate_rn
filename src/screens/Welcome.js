// import { createStore } from 'redux'//ngumpulin
import React, { Component } from 'react';
import {View,Text,Button} from 'react-native'
import { connect } from 'react-redux';


import { actionIncrement } from '../_actions/counter';
import { getUsers, getUsersPending } from '../_actions/users'


const Welcome = (props) =>  {
    console.log(props);
     
        return ( <View>
            <Text>{props.counter.label}</Text>
            <Text>{props.counter.number}</Text>
            <Button title="INC" onPress={() => props.dispatch(actionIncrement())} />

            <Button title="users" onPress={() => props.dispatch(getUsers(state.users))} />
          </View> );
    
}
 //state//callback global
const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        users:state.users
    }
}
export default connect(mapStateToProps)(Welcome); //hoc

