import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import axios from 'axios';

import styles from './style';
import {covidApi} from '../../Constants';
import {black, lightBlack} from '../../Constants/colorConst';

function Home() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [searchedText, setSearchedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {height} = Dimensions.get('window');

  useEffect(async () => {
    setIsLoading(true);
    let apiResponse = await axios.get(covidApi);
    setData(apiResponse.data.Countries);
    setIsLoading(false);
  }, []);

  const gotoTestStackScreen = singleItem => {
    navigation.navigate('Information', {item: singleItem});
  };

  return (
    <View style={styles.homeCnt}>
      <TextInput
        style={[styles.input, styles.boxShdow]}
        onChangeText={text => setSearchedText(text)}
        placeholderTextColor={lightBlack}
        placeholder="Search country"
        underlineColorAndroid="transparent"
        borderWidth={0}
      />
      {data.length == 0 && (
        <Text style={{textAlign: 'center'}}>No data found</Text>
      )}

      <TouchableWithoutFeedback>
        <ScrollView style={{flex: 1, marginTop: 10}}>
          {data.length > 0 &&
            data
              .filter(item => {
                /// filter by Country
                if (searchedText == '') {
                  return item;
                } else if (
                  item.Country.toLowerCase().includes(
                    searchedText.toLowerCase(),
                  )
                ) {
                  return item;
                }
              })
              .map((item, index) => {
                return (
                  <TouchableHighlight
                    onPress={() => gotoTestStackScreen(item)}
                    underlayColor={'transparent'}
                    key={index}>
                    <View style={[styles.listCnt, styles.boxShdow]}>
                      <Text style={{color: black, fontSize: 18}}>
                        {item.Country}
                      </Text>
                      <Text>Total Confirmed : {item.TotalConfirmed}</Text>
                      <Text>Total Recovered : {item.TotalRecovered}</Text>
                      <Text>
                        Total Deaths {'      '} : {item.TotalDeaths}
                      </Text>
                    </View>
                  </TouchableHighlight>
                );
              })}
          {isLoading && (
            <View style={({height: height}, styles.flexCenter)}>
              <ActivityIndicator size="large" color={black} />
            </View>
          )}
        </ScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
}
export default Home;
