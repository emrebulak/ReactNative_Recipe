import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    width: '100%',
    height:300,
    borderRadius:10,
  },
  title:{
    color:'#A52A2A',
    fontSize:25,
    fontWeight:'bold'
  },
  subtitle:{
    color:'#A52A2A',
    fontSize:20,
    fontWeight:'bold'
  },
  hr:{
    flex: 1, 
    height: 1,
    backgroundColor: 'gray'
  },
  text:{
    color:'black'
  },
  btn:{
    margin:8,
    padding:10,
    borderWidth:1,
    backgroundColor:'red',
    borderRadius:5,
    borderColor:'red',
   
  },
  btn_text:{
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:17
  }
});
