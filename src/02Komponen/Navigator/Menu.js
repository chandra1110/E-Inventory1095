import React from "react";
import { View, Text,Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Screen1 from './Screen1.js';
import Screen2 from './Screen2.js';
import MainScreen from './Main.js';

const AppNavigator = createStackNavigator(
    {
    Utama: MainScreen,
    Layar1: Screen1,
    Layar2: Screen2,
    },
{
    initialRouteName: "Utama"
}
);
export default createAppContainer(AppNavigator);