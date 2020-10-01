import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import { Card, Button, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

function VideoCard() {
    return(
        <Card
            title="COVID-19 Transmission">
        <Text style={styles.cardRow}>
            Watch this Video and learn something today!
        </Text>
        </Card>
    )
}

class Videos extends Component {

    static navigationOptions = {
        title: 'Videos'
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInUp' duration={2000} delay={1000}>
                    <VideoCard />
                    <Video
                        source={{ uri: 'http://druescloud.com/media/cv19-trans.mp4' }}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay
                        isLooping
                        style={{ margin: 10, height: 300 }}
                    />
                </Animatable.View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20,
    },
    cardItem: {
        flex: 1,
        margin: 10
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    }
})

export default Videos;