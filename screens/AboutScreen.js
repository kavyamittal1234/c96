import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, Image, Linking} from 'react-native';

export default class HomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      weather:''
    }
  }
  

  render(){
      
      
      return(

      <SafeAreaView style = {styles.containers}>
        <View style = {styles.container}>
          <Text style = {styles.aboutTitleText}>
            About
          </Text>
          <Text style = {styles.name}>Kavya Mittal</Text>
          <Image source = {require("../assets/Dak12logo.jpg")} style = {styles.image}/>
          <TouchableOpacity onPress={() => {
            Linking.openURL("https://www.youtube.com/channel/UCDwAqxXSCNIyV9Z191Fq6uA")
          }} style = {styles.youtubebutton}>
          <Text style = {styles.youtubetext}>Check out my YouTube channel</Text>
          </TouchableOpacity>

          <Text style={styles.aboutMe}>  My name is kavya mittal,I am 14 years old,and i really like playing badminton and athletics </Text>
          <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate("HomeScreen")
           } }

           style={styles.backButton}>
<Text style={styles.backText}>  Back</Text>
             
           </TouchableOpacity>
          </View>
          </SafeAreaView>
      );
        }
      }
      const styles=StyleSheet.create({
        container:{
          alignItems:'center'
           },
        aboutTitleText:{
          fontFamily:'monoSpace',
          fontSize:40,
          marginTop:15,
          fontWeight:'bolder'
        },

        name:{
          fontSize:30,
          color:'green',
          marginTop:20,
          fontFamily:'monoSpace'
        },
        image:{
          width:300,
          height:300
        },
        youtubetext:{
          color:'white',
          marginTop:4,
          fontFamily:'monoSpace'
        },
        youtubebutton:{
          backgroundColor:'greeen',
          borderRadius:100,
          width:250,
          height:25,
          alignItems:'center'
        },
        aboutMe:{
          textAlign:'center',
          marginTop:10,
          fontFamily:'monoSpace',
          fontSize:15
        },
        backButton:{
          backgroundColor:'yellow',
          alignItems:'center',
          borderRadius:50,
          width:50,
          height:20,
          marginTop:10
        },
        
        backText:{
          color:'black',
          fontFamily:'monoSapce',
          marginTop:4
        },
           
      });