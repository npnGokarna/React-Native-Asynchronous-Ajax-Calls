import React, { Component } from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from 'axios';
import MusicDetail from './MusicDetail';


class GroupList extends Component{

    state = {music: []};


    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({music: response.data}));
    }

    renderMusic(){
        return this.state.music.map(album =>
            <MusicDetail key={album.title} albumVar = {album}/>
        );
    }

    render() {
        //console.log(this.state);
        return (
            <ScrollView>
                    {this.renderMusic()}
            </ScrollView>
        );
    }
}

export default GroupList;