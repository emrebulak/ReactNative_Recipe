import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native';
import styles from './detailCard.style';

const detailCard = ({data}) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: data.strMealThumb}} />
      </View>
      <Text style={styles.title}>{data.strMeal}</Text>
      <Text style={styles.subtitle}>{data.strArea}</Text>
      <View style={styles.hr} />
      <Text style={styles.text}>{data.strInstructions}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => Linking.openURL(data.strYoutube)}>
        <Text style={styles.btn_text}>Watch on Youtube</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default detailCard;
