import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './categories.style';

//Components
import CategoriesCard from '../../components/categoriesCard';
import Config from '../../../../config';
import useFetch from '../../../hooks/useFetch/useFetch';
import Loading from '../../components/loading';
import Error from '../../components/error';

const Categories = ({navigation}) => {
  const {error, loading, value} = useFetch(Config.API_URI + '/categories.php');

  const renderCategory = ({item}) => (
    <CategoriesCard data={item} onSelect={() => handleSelect(item)} />
  );

  const handleSelect = item => {
    navigation.navigate('Meals', {item});
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.idCategory}
        data={value.categories}
        renderItem={renderCategory}
      />
    </View>
  );
};

export default Categories;
