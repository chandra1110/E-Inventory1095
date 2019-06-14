import React from 'react';
import { View,FlatList, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import Header from "./Header";

const list = [
    {
        name: 'Amy Farha',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        //avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },

]
const axios = require('axios');
export default class ListBudaya extends React.Component{
    static navigationOptions = {
        header: null
    } 
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
    }

    componentDidMount(){
        axios.get("http://mhs.rey1024.com/apibudaya/getListCategory.php")
        .then((response)=>{
          console.log(response.data);
          this.setState({ data:response.data });
        })
        .catch(function (error) {
        // handle error
        console.log(error);
      });
    
    }
    render() {
        return (
            <View>
                 <Header judul={"Warisan Budaya \n 1715051095"} />
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem onPress={()=>this.props.navigation.navigate("DetailBudaya",{id_kategori:item.kategori_id})}
                            title={item.nama}
                            leftAvatar={{
                                source: { uri:"http://wadaya.rey1024.com/upload/kategori/"+item.gambar },
                            }}
                        />
                    )
                    }
                />
            </View>
    
        )
    }
}