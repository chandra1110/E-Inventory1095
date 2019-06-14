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
          id_kategori:this.props.navigation.state.params.id_kategori
        };
    }

    componentDidMount(){
        axios.get('http://mhs.rey1024.com/apibudaya/getListBudaya.php?id_kategori='+this.state.id_kategori)
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
                 <Header judul={"Daftar Budaya"} />
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.nama_budaya}
                            leftAvatar={{
                                source: { uri:"http://wadaya.rey1024.com/api/uploads/"+item.url_gambar },
                            }}
                        />
                    )
                    }
                />
            </View>
    
        )
    }
}