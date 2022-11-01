import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './categoriesCard.style';

const CategoriesCard = ({data, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={{uri: data.strCategoryThumb}} />
        </View>
        <View style={styles.container_text}>
          <Text style={styles.text}>{data.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoriesCard;
