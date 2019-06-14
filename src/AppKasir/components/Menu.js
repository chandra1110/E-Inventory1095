import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Kasir from "./screens/Kasir";
import Home from "./screens/Home";
import Barang from "./screens/DataBarang";
import Tentang from "./screens/tentang";
//import DataBarang from"./screens/DataBarang";


const AppContainer = createStackNavigator(
  {
    Utama: {
      screen: Home
    },
    Penjualan: {
      screen: Kasir
    },
    Barang: {
      screen: Barang
    },
    Tentang: {
      screen: Tentang
    },
  },
  {
    initialRouteName: "Utama"
  }
);

const Menu = createAppContainer(AppContainer);

export default class App extends React.Component {
    render() {
        return <Menu />;
    }
}
