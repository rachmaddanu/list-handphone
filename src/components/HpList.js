import {Text, View} from 'react-native';
import React, {Component} from 'react';
import axios from 'axios';

class HpList extends Component {

    state = {HP: []};

    componentWillMount(){
    axios.get('http://59ed560fff7d5d00128e085e.mockapi.io/api/HP')
        .then((response) => {
            this.setState({HP: response.data});

        });
    }

    renderLogic(){
        if(this.state.HP.length>0){
            return this.state.HP.map((data1) => {
                return(
                    <View>
                        <Text style={{fontSize: 15, padding: 5}}>{data1.id}. {data1.name}</Text>
                        <Text style={{fontSize: 10}}>   Price: USD {data1.price}</Text>
                        <Text style={{fontSize: 10}}>   Made in {data1.produksi}</Text>
                    </View>
                );
            });
        }
    }

    render(){
        console.log('render', this.state.HP);
        return(
            <View>
                {this.renderLogic()}
            </View>
        );
    }

}

export default HpList;