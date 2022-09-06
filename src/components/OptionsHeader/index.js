import React from 'react';
import {FlatList, TouchableOpacity, Text} from 'react-native';

const data = [
  {
    id: '1',
    title: 'Take ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },

  {
    id: '2',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];

const OptionsHeader = () => {
  const renderOptions = ({item}) => {
    <TouchableOpacity>
      <Text>{item.title}</Text>
    </TouchableOpacity>;
  };

  return <FlatList data={data} horizontal renderItem={renderOptions} />;
};

export default OptionsHeader;
