import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Bmi from "./Bmi";
import Home from "./Home";
import TentangSaya from "./TentangSaya";
import Kurs from "./Kurs";



const AppContainer = createStackNavigator(
  {
    
    Utama: {
      screen: Home
    },
    Bmi: {
      screen: Bmi
    },    
    Kurs: {
      screen: Kurs
    },    
    TentangSaya: {
      screen: TentangSaya
    }

  },
  {
    initialRouteName: "Utama"
  },
  
);

const Menu = createAppContainer(AppContainer);

export default class App extends React.Component {
    render() {
        return <Menu />;
    }
}
