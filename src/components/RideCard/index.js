import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native';
import Styles from './styles';

const RideCard = () => {
  const data = [
    {
      id: '1',
      title: 'Standard',
      multiplierIndex: 1,
      image: require('assets/car_standard.png'),
    },
    {
      id: '2',
      title: 'Platinum',
      multiplierIndex: 1.2,
      image: require('assets/car_platinum.png'),
    },
    {
      id: '3',
      title: 'Gold',
      multiplierIndex: 1.5,
      image: require('assets/car_gold.png'),
    },
  ];

  const renderOptions = ({item: {title, image}}) => {
    return (
      <Styles.Wrapper>
        {({pressed}) => (
          <Styles.CarWrapper pressed={pressed}>
            <Styles.ImageComp source={image} resizeMode="contain" />
            <Styles.TextComp>{title}</Styles.TextComp>
          </Styles.CarWrapper>
        )}
      </Styles.Wrapper>
    );
  };

  return (
    <View>
      <Text>RideCard !</Text>
      <FlatList
        data={data}
        contentContainerStyle={{
          border: '21px solid blue',
          width: '100%',
          alignItems: 'center',
        }}
        keyExtractor={item => item.id}
        renderItem={renderOptions}
      />
    </View>
  );
};

export default RideCard;

const styles = StyleSheet.create({});
