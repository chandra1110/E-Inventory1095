import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Tentang from "./Tentang";
import DaftarBarang from "./DaftarBarang";
import Login from "./Login";
import DetailBarang from "./DetailBarang";
import Tambah from "./Tambah";
import Update from "./Update";

const AppContainer = createStackNavigator(
  {
    
    Tentang: {
      screen: Tentang
    },   
    Login: {
      screen: Login
    },    
    DaftarBarang: {
        screen: DaftarBarang
      },
      DetailBarang: {
        screen: DetailBarang
      },
      Tambah: {
        screen: Tambah
      },
      Update: {
        screen: Update
      }
  },
  {
    initialRouteName: "Login"
  },
  
);

const Menu = createAppContainer(AppContainer);

export default class App extends React.Component {
    render() {
        return <Menu />;
    }
}
