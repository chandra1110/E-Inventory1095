import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Tentang from "./Tentang";
import Home from "./Home";
import DaftarBarang from "./DaftarBarang";
import DetailBarang from "./DetailBarang";
import Login from "./Login";




const AppNavigator = createStackNavigator(
  {
    Utama: Home,
    DaftarBarang: DaftarBarang,
    DetailBarang: DetailBarang,
    Tentang: Tentang,
    Login:Login
    
  },

  {
      initialRouteName: "Utama"
  }
);

export default createAppContainer(AppNavigator);
