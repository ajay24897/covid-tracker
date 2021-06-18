import React, {useState} from 'react';
import {View, Text, Button, TouchableHighlight, Dimensions} from 'react-native';
import BottomSheet from 'react-native-simple-bottom-sheet';
import {WebView} from 'react-native-webview';
import {text1, text2, WHOLink} from '../../Constants';

import styles from './style';

function Report() {
  const [onClickOpen, setIsOpenClick] = useState(false);

  const {width, height} = Dimensions.get('window');

  return (
    <View style={styles.flex}>
      <BottomSheet isOpen enabledContentGestureInteraction={false}>
        <View>
          <Text>{text1}</Text>
          <TouchableHighlight
            onPress={() => setIsOpenClick(true)}
            style={styles.whoBtn}>
            <Button title="Open W.H.O website" />
          </TouchableHighlight>
          <Text style={{fontSize: 12}}>{text2} </Text>
          <TouchableHighlight style={styles.cancleBtn}>
            <Button color={'grey'} title="Cancle" />
          </TouchableHighlight>
        </View>
      </BottomSheet>

      {/* {onClickOpen && ( */}
      <WebView
        source={{
          uri: WHOLink,
        }}
        startInLoadingState={true}
        scalesPageToFit={true}
        style={{
          width: width,
          height: height,
        }}
      />
      {/* )} */}
    </View>
  );
}
export default Report;
