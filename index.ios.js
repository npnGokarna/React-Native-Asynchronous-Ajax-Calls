// index.ios.js place code here for ios application

//import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import GroupList from './src/components/GroupList';

//create a component
const App = () => (
    <View style={{ flex: 1, backgroundColor:  '#655D63'}}>
        <Header headerText={'Recommended Music'} />
        <GroupList/>
    </View>
);


//render it to the device

AppRegistry.registerComponent('albums', () => App);