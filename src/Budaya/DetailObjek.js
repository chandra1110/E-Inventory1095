import React from 'react';
import { View, FlatList, Text, ScrollView } from 'react-native';
import { ListItem, Card, Image } from 'react-native-elements';
import Header from "./Header";

const axios = require('axios');
export default class DetailObeject extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidMount() {
        axios.get("http://mhs.rey1024.com/apibudaya/getListCategory.php")
            .then((response) => {
                console.log(response.data);
                this.setState({ data: response.data });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

    }
    render() {
        return (
            <ScrollView>
                <Header judul={"Detail Budaya"} />

                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <View>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        source={{ uri: "http://wadaya.rey1024.com/upload/kategori/" + item.gambar }}
                                        style={{ width: 250, height: 250 }}
                                    />
                                </View>
                                <Card title="Detail Object Budaya">
                                    <Text>Nama : {item.nama}</Text>
                                    <Text>Deskripsi : {item.deskripsi}</Text>
                                    <Text>Created By : {item.created_by}</Text>
                                    
                                </Card>
                            </View>
                        )
                        }
                    />

            </ScrollView>

        )
    }
}