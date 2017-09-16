import React from 'react';
import { Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './button';

const MusicDetail = ({ albumVar }) => {

    // deconstruct the props variable into props -> albumVar ->{title, artist, thumbnail_image}
    // since everything used in this program comes from albumVar
    const{
        title,
        artist,
        thumbnail_image,
        image,
        url
    } = albumVar;

    //deconstructing style
    const{
        titleTextStyle,
        artistTextStyle,
        thumbnailStyle,
        cardHeaderContentStyle,
        thumbnailContainerStyle,
        imageStyle
    } = styleObj;

    return(
        <Card>
            <CardSection>
                <View style = {thumbnailContainerStyle}>
                    <Image style= {thumbnailStyle}
                           source = {{ uri: thumbnail_image }}
                    />
                </View>
                <View style = {cardHeaderContentStyle}>
                    <Text style = {titleTextStyle}>
                        {title}
                    </Text>
                    <Text style = {artistTextStyle}>
                        {artist}
                    </Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style = {imageStyle}
                    source = {{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>

        </Card>
    );

};

const styleObj = {
    titleTextStyle: {
        color:'#ffffff',
        fontSize: 18
    },
    artistTextStyle:{
        color:'#ffffff'
    },
    cardHeaderContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    thumbnailStyle:{
        height:50,
        width:50
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:12,
        marginRight:10
    },
    imageStyle:{
        height:300,
        flex:1,
        width:null
    },
};


export default MusicDetail;