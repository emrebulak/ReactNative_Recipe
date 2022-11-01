import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderTopLeftRadius: 70,
    borderBottomLeftRadius: 70,
    backgroundColor: '#ECEFF1',
    borderColor: 'gray',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  container_text: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:7
  },
  text: {
    fontSize:20,
    color:'black'
  },
});
