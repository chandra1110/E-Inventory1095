import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HalamanUtama from './HalamanUtama';
import AplikasiKasir from './AplikasiKasir';
import TentangSaya from './TentangSaya';
import Header from "./Header";

const AppContainer = createStackNavigator(
  {
    HalamanUtama:{
      screen: HalamanUtama
    },
    
    AplikasiKasir: {
      screen: AplikasiKasir
    },
    TentangSaya: {
      screen: TentangSaya
    },
    
  },
  {
    initialRouteName: "HalamanUtama"
  }
);

const MenuQuizB = createAppContainer(AppContainer);

export default class App extends React.Component {
    render() {
        return <MenuQuizB />;
    }
}
