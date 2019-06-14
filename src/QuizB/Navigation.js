import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HalamanUtama from './HalamanUtama';
import AplikasiKasir from './AplikasiKasir';
import TentangSaya from './TentangSaya';



const AppNavigator = createStackNavigator(
  {
    HalamanUtama: HalamanUtama,
    AplikasiKasir: AplikasiKasir,
    TentangSaya: TentangSaya,
    
  },

  {
      initialRouteName: "MenuQuizB"
  }
);

export default createAppContainer(AppNavigator);
