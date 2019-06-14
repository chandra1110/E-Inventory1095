import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Bmi from "./Bmi";
import Home from "./Home";
import TentangSaya from "./TentangSaya";
import Kurs from "./Kurs";





const AppNavigator = createStackNavigator(
  {
    Utama: Home,
    Bmi: Bmi,
    Kurs: Kurs,
    TentangSaya: TentangSaya,
    
  },

  {
      initialRouteName: "Utama"
  }
);

export default createAppContainer(AppNavigator);
