import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './mealsCard.style';

const MealsCard = ({data, onSelectMeal }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelectMeal}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: data.strMealThumb}} />
        <View style={styles.title_container}>
          <Text style={styles.title}>
            {data.strMeal.length > 22
              ? data.strMeal.slice(0, 22) + '...'
              : data.strMeal.slice(0, 22)}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealsCard;
