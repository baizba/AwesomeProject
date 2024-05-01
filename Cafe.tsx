import React from 'react';
import {Button, Text, View} from 'react-native';

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
  return (
    <View>
      <Text>I am {props.name}</Text>
    </View>
  );
};

const Cafe = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Cat name = "Mu"/>
      <Cat name = "Bu"/>
      <Button title="Go to Maps" onPress={() => navigation.navigate('Map')}/>
    </View>
  );
};

export default Cafe;