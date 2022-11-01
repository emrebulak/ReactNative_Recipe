import React from 'react';
import {View} from 'react-native';
import styles from './detail.style';

import Config from '../../../../config';
import DetailCard from '../../components/detailCard';
import useFetch from '../../../hooks/useFetch/useFetch';
import Loading from '../../components/loading';
import Error from '../../components/error';

const Detail = ({route}) => {
  const {error, loading, value} = useFetch(
    Config.API_URI + '/lookup.php?i=' + route.params.item.idMeal,
  );
  
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <DetailCard data={value.meals[0]}/>
    </View>
  );
};

export default Detail;
