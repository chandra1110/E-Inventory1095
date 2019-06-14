import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, ActivityIndicator, Image } from 'react-native';

import Header from './Header';
import Footer from "./Footer";

const windIcon = require('./img/wind.png');
const tempIcon = require('./img/temp.png');
const mainIcon = require('./img/main.png');
const descIcon = require('./img/desc.png');
const seaIcon = require('./img/sea.png');
const sunsetIcon = require ('./img/sunset.png');
const sunriseIcon = require ('./img/sunrise.png');
const pressIcon = require('./img/press.png');
const humadityIcon = require('./img/humadity.png');
const groundIcon = require('./img/ground.png');

export default class Cuaca2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            forecast: {
                main: '',
                description: '',
                temp: 0,
                sunrise: 0,
                sunset: 0,
                pressure: 0,
                humadity: 0,
                sea_level: 0,
                grnd_level: 0,
                speed: 0,
                loading: false,
            }
        };
    }
    async getWeather() {

        try {
            this.setState({loading: true });
            let response = await fetch(
                'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=bdc2f33294d9692d70b176995ab33a1c&units=metric'
            );

            let responseJson = await response.json();
            return this.setState({
                loading: false,
                forecast: {
                    main: responseJson.weather[0].main,
                    description: responseJson.weather[0].description,
                    temp: responseJson.main.temp,
                    sunrise: responseJson.sys.sunrise,
                    sunset: responseJson.sys.sunset,
                    pressure: responseJson.main.pressure,
                    humidity: responseJson.main.humadity,
                    sea_level: responseJson.main.sea_level,
                    grnd_level: responseJson.main.grnd_level,
                    speed: responseJson.wind.speed
                }
            });
        } catch (error) {
            console.error(error);
            this.setState({loading: false });
        }
    }


    render() {
        return (
            <View style={styles.containerMain}>
                <Header judul={"Prakiraan Cuaca"} />
                <View style={styles.box1}>
                    <Text style={styles.textKota}> Masukan Nama Kota </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder=" Masukan Nama kota "
                        onChangeText={(city) => this.setState({ city })}
                    />
                    <TouchableHighlight
                        style={styles.buttonStyle}
                        onPress={() => this.getWeather()}
                    >
                        {
                            this.state.loading ? <ActivityIndicator color="#fff" size="large" style={styles.loadingStyle} />
                                : <Text style={{ color: '#fff' }}>Cari</Text>
                        }
                    </TouchableHighlight>
                </View>

                <View style={styles.box2}>
                    <View style={styles.boxHasil}>
                    <View style={styles.iconContainer}>
                            <Image source={tempIcon} style={styles.icon} />
                        </View>
                        <Text> Temp : {this.state.forecast.temp} </Text>
                    </View>

                    <View style={styles.boxHasil}>
                    <View style={styles.iconContainer}>
                            <Image source={windIcon} style={styles.icon} />
                        </View>
                        <Text> Wind Speed : {this.state.forecast.speed} </Text>
                    </View>
                </View>

                <View style={styles.box2}>
                    <View style={styles.boxHasil}>
                    <View style={styles.iconContainer}>
                            <Image source={mainIcon} style={styles.icon} />
                        </View>
                        <Text> Main : {this.state.forecast.main} </Text>
                    </View>
                    
                    <View style={styles.boxHasil}>
                    <View style={styles.iconContainer}>
                            <Image source={descIcon} style={styles.icon} />
                        </View>
                        <Text> Main Desc : {this.state.forecast.description} </Text>
                    </View>
                </View>

                <View style={styles.box2}>
                    <View style={styles.boxHasil}>
                    <View style={styles.iconContainer}>
                            <Image source={sunriseIcon} style={styles.icon} />
                        </View>
                        <Text> Sunrise : {this.state.forecast.sunrise} </Text>
                    </View>
                    <View style={styles.boxHasil}>
                    <View style={styles.iconContainer}>
                            <Image source={sunsetIcon} style={styles.icon} />
                        </View>
                        <Text> Sunset : {this.state.forecast.sunset} </Text>
                    </View>
                </View>

                <View style={styles.box2}>
                    <View style={styles.boxHasil}>
                    <View style={styles.iconContainer}>
                            <Image source={pressIcon} style={styles.icon} />
                        </View>
                        <Text> Pressure : {this.state.forecast.pressure} </Text>
                    </View>
                    <View style={styles.boxHasil}>
                    <View style={styles.iconContainer}>
                            <Image source={humadityIcon} style={styles.icon} />
                        </View>
                        <Text> Humadity : {this.state.forecast.humadity} </Text>
                    </View>
                </View>
                <View style={styles.box2}>
                    <View style={styles.boxHasil}>
                    <View style={styles.iconContainer}>
                            <Image source={seaIcon} style={styles.icon} />
                        </View>
                        <Text> Sea Level : {this.state.forecast.sea_level} </Text>
                    </View>
                    <View style={styles.boxHasil}>
                    <View style={styles.iconContainer}>
                            <Image source={groundIcon} style={styles.icon} />
                        </View>
                        <Text> Ground Level : {this.state.forecast.grnd_level} </Text>
                    </View>
                </View>
                
                <Footer judul={"Copyright @Chandra Wijayanti"} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    containerMain: {
        backgroundColor: '#b3ffb3',
        flex: 1,
    },

    box1: {
        flex: 1,
        backgroundColor: '#009900',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20,
        paddingBottom: 15,
    },

    box2: {
        flex: 0.4,
        backgroundColor: '#53c653',
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },

    boxHasil: {
        width: 130,
        height: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingRight: 25,
        
    },
    buttonStyle: {
        backgroundColor: '#5c85d6',
        height: 40,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textKota: {
        textAlign: 'center',
        paddingTop: 15,
        fontSize: 20,
        color: 'black',
    },
    textInput: {
        height: 40,
        color: 'white',
        borderWidth: 1,
        color: 'white',
        paddingLeft: 10,
    },
      loadingStyle: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },

  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#feb401',
    borderColor: '#feaf12',
    //borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    height: 40,
    width: 30,
},
icon: {
  
    height: 20,
    width: 20,
},
});