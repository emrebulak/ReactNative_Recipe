import React, {useEffect, useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import Config from '../../../../config';
import styles from './meals.style';

//Componenets
import MealsCard from '../../components/mealsCard';
import useFetch from '../../../hooks/useFetch/useFetch';
import Loading from '../../components/loading';
import Error from '../../components/error';

const Meals = ({route,navigation}) => {
  const renderMeals = ({item}) => (
    <MealsCard data={item} onSelectMeal={() => handleSelect(item)} />
  );

  const {error, loading, value} = useFetch(
    Config.API_URI + '/filter.php?c=' + route.params.item.strCategory,
  );

  function handleSelect(item) {
    navigation.navigate('Detail', {item});
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.idMeal}
        data={value.meals}
        renderItem={renderMeals}
      />
    </View>
  );
};

export default Meals;
