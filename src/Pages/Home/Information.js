import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';

import styles from './style';

function Information({route}) {
  // the data of perticular country only
  const {item} = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.homeCnt}>
      <TouchableOpacity onPress={() => navigation.goBack(null)}>
        <Text style={styles.backBtn}> &lt; Back</Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.flexCenter}>
          {getCardsUI('Country', item.Country)}
          {getCardsUI('Confirmed', item.TotalConfirmed)}
          {getCardsUI('Recovered', item.TotalRecovered)}
          {getCardsUI('Deaths', item.TotalDeaths)}
          {getCardsUI('Updated Date', item.Date.slice(0, 10))}
        </View>
      </ScrollView>
    </View>
  );
}
export default Information;

function getCardsUI(title, value) {
  return (
    <View style={[styles.infoCnt, styles.boxShdow2]}>
      <Text style={[styles.infoCardText, styles.bold]}>{title}</Text>
      <Text style={styles.infoCardText}>{value}</Text>
    </View>
  );
}
