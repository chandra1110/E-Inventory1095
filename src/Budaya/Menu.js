import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ListBudaya from './ListBudaya';
import DetailBudaya from './DetailBudaya';
import DetailObjek from './DetailObjek';
import Home from './Home';
import TambahBudaya from './TambahBudaya';


const AppContainer = createStackNavigator(
  {
    Home: {
     screen: Home
     },
    ListBudaya: {
      screen: ListBudaya
    },
    DetailBudaya: {
      screen: DetailBudaya
    },
    Tambahbudaya: {
      screen: TambahBudaya
    },

  },
  {
    initialRouteName: "Home"
  }
);


const Menu = createAppContainer(AppContainer);

export default class App extends React.Component {
    render() {
        return <Menu />;
    }
  }
