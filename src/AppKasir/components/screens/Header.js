import React, { Component} from 'react';
import {
    Text,
    View
} from 'react-native';

// const Header = (props) => {
//     const { textStyle, backFooter } = styles;
//     return (
//         <View style={backFooter}>
//             <Text style={textStyle}>{this.props.judul}</Text>
//         </View>
//     );
// };

class Header extends Component{
    render(){
        const { textStyle, backFooter } = styles;
         return (
        <View style={backFooter}>
            <Text style={textStyle}>{this.props.judul}</Text>
        </View>
    );
    }
};
const styles = {
  backFooter: {
    backgroundColor: "#096bba",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 10, 
    paddingTop: 10,
    position: "relative"
  },
  textStyle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center"
  }
};
export default Header;