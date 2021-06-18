import {StyleSheet} from 'react-native';
import {black, white} from '../../Constants/colorConst';

export default StyleSheet.create({
  homeCnt: {
    paddingHorizontal: '4%',
    paddingVertical: 10,
    flex: 1,
  },
  input: {
    height: 40,
    borderWidth: 1,
    color: black,
    backgroundColor: white,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  listCnt: {
    marginVertical: 5,
    padding: '2.5%',
    backgroundColor: white,
    borderWidth: 1,
    borderColor: white,
    borderRadius: 10,
  },
  boxShdow: {
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },

  infoCnt: {
    height: 100,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 5,
    padding: '2.5%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
  },
  boxShdow2: {
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBtn: {fontSize: 18, height: 30},
  infoCardText: {
    fontSize: 20,
    color: '#000',
  },
  bold: {
    fontWeight: 'bold',
  },
});
