import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, Image} from 'react-native';

export default class HomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      weather:''
    }
  }
  
  fetchWeather = () => {
    var api = 'https://fcc-weather-api.glitch.me/api/current?lat=21&lon=78';
    return fetch(api)
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        weather:responseJson,
      });
    })
    .catch(error => {
      console.log(error);
    });
  };
  componentDidMount=()=>{
    this.fetchWeather();
  }

  render(){
    if(this.state.weather == ''){
      return(
        <Text style = {styles.loading}>Loading.....</Text>
      );
    }else{
      var  temp = Math.floor(this.state.weather.main.temp)
      var shouldItakeUmbrella = temp < 27 ? 'You should take your UMBRELLA' : 'No Need to carry an UMBRELLA' ;
      var image = shouldItakeUmbrella == 'You should take your UMBRELLA' ? <Image source={require('../assets/umbrella.png')} style = {styles.umbrellaImage}/> : <Image source={require('../assets/noUmbrella.png')} style = {styles.umbrellaImage}/>
      
      
      return(

      <SafeAreaView style = {styles.containers}>
        <View style = {styles.container}>
          <Text style = {styles.weatherTitleText}>
            Weather
          </Text>
          <Text style = {styles.weatherDisplay}>{temp}&deg;C</Text>
          <Text style = {styles.situ}>{shouldItakeUmbrella}</Text>
          {image}
          <TouchableOpacity onPress = {() => {
            this.props.navigation.navigate("HomeScreen")
          }} style = {styles.backButton}>
          <Text style = {styles.backText}>Back</Text>
          
          </TouchableOpacity>
          

        </View>
      </SafeAreaView>
    );
    }
    
  }
}
const styles = StyleSheet.create({
    container:{
    alignItems:'center',
    height:10000,
    width:Dimensions.get('window').width,
    backgroundColor:'yellow'
  },
  weatherTitleText:{
    fontFamily:'monospace',
    fontSize:40,
    marginTop:15,
    fontWeight:'bolder'
  },
  weatherDisplay:{
    marginTop:15,
    fontSize:60,
    fontFamily:'monospace',
    fontWeight:'bold'
  },
  situ:{
    fontSize:30,
    textAlign:'center',
    marginTop:20,
    fontFamily:'monospace',
  },
  umbrellaImage:{
    width:200,
    height:200,
    marginTop:30
  },
  backButton:{
    marginTop:10,
    width:50,
    height:30,
    backgroundColor:'#00AEFF',
    borderRadius:15,
    textAlign:'center'
  },
  backText:{
    fontSize:15,
    fontFamily:'monospace',
    marginTop:5
  },
  loading:{
    marginTop:200,
    alignSelf:'center',
    fontSize:50
  }

  
});