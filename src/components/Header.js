import {Text, View} from 'react-native';
import React from 'react';
//test
const Header= (props) => {
    const{styleView, styleText} = styles;
    return(
        <View style={styleView}>
            <Text style={styleText}>
                {props.title}
            </Text>
        </View>
    );

};

const styles = {
    styleView: {
        padding: 15,
        backgroundColor: 'blue'
    },
    styleText:{
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
        
    }
}

export default Header;
