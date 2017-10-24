import {Text, View} from 'react-native';
import React from 'react';
import Header from "./src/components/Header";
import HpList from "./src/components/HpList";

const App = () => {
  return(
    <View>
      <Header title={"List Handphone"}/>
      < HpList />
    </View>
  );
};

export default App;