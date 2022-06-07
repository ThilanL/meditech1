import React, { Component, useState } from 'react';
import {Linking ,Text, StyleSheet, View, SafeAreaView, Image, TouchableWithoutFeedback, Button, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard, Touchable} from 'react-native';

export default function App(){
  return(
    <SafeAreaView style={styles.view}>
      <View>
      <Image source={require("./assest/p222.jpg")} style={styles.logo} blurRadius={30}/>
      <View style={styles.upper}>
      <Image source={require("./assest/doc.png")} style={styles.logo1} />
      <View style={styles.uppertext}>
      <Text style={{fontSize: 26, fontWeight: 'bold', color:'#fff'}}>Steven Sun, M.D.</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold', color:'#fff'}}>Pediatrician</Text>
      <Image source={require("./assest/star.png")} style={{width:75, height:18, marginLeft:125, marginTop:-17}} />
      <Image source={require("./assest/logo.png")} style={{width:50, height:30, marginTop:95, marginLeft:150}} />
      <Text style={{fontSize: 14, fontWeight: 'bold', color:'#fff', marginLeft:20}}>Anaheim Regianal Hospital</Text>
      </View>
      
      </View>
      <View style={styles.upper1}>
      <Text style={{fontSize: 16, fontWeight: 'bold', marginTop:15}}>Appointment schedule</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold', color:'#2D425A'}}>Select date and time of your Appointment</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold', color:'#2D425A', marginTop:20}}>Augest 2021</Text>
      
      
      <View style={styles.writeTaskWrapper}>
        <View style={{alignItems:'center', marginTop:10}}><Text style={{fontSize: 18, fontWeight: 'bold', color: '#A0A1A3'}}>Mo</Text><View style={styles.square1}><Text style={{fontSize: 18, fontWeight: 'bold', marginTop:15}}>1</Text></View></View>
        <View style={{alignItems:'center', marginTop:10}}><Text style={{fontSize: 18, fontWeight: 'bold', color: '#A0A1A3'}}>Tu</Text><View style={styles.square1}><Text style={{fontSize: 18, fontWeight: 'bold', marginTop:15}}>2</Text></View></View>
        <View style={{alignItems:'center', marginTop:10}}><Text style={{fontSize: 18, fontWeight: 'bold', color: '#A0A1A3'}}>We</Text><View style={styles.square1}><Text style={{fontSize: 18, fontWeight: 'bold', marginTop:15}}>3</Text></View></View>
        <View style={styles.square2}><Text style={{fontSize: 18, fontWeight: 'bold', marginTop:15, color:'#fff'}}>Th</Text><Text style={{fontSize: 18, fontWeight: 'bold', marginTop:15, color:'#fff'}}>4</Text></View>
        <View style={{alignItems:'center', marginTop:10}}><Text style={{fontSize: 18, fontWeight: 'bold', color: '#A0A1A3'}}>Fr</Text><View style={styles.square1}><Text style={{fontSize: 18, fontWeight: 'bold', marginTop:15}}>5</Text></View></View>
        <View style={{alignItems:'center', marginTop:10}}><Text style={{fontSize: 18, fontWeight: 'bold', color: '#A0A1A3'}}>Sa</Text><View style={styles.square1}><Text style={{fontSize: 18, fontWeight: 'bold', marginTop:15}}>6</Text></View></View>
        <View style={{alignItems:'center', marginTop:10}}><Text style={{fontSize: 18, fontWeight: 'bold', color: '#A0A1A3'}}>Su</Text><View style={styles.square1}><Text style={{fontSize: 18, fontWeight: 'bold', marginTop:15}}>7</Text></View></View>
        

      </View>

      <View style={{height:1, width:'90%', backgroundColor:'#969FA9', marginTop:30}}></View>

      <View style={styles.writeTaskWrapper}>
      <View style={styles.square3}><Image source={require("./assest/icon2.png")} style={{width:70, height:70, resizeMode: 'stretch',marginTop:10}} /><Text style={{fontSize: 24, fontWeight: 'bold', marginTop:5, color: '#fff'}}>08.30</Text><Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>Physical</Text><Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>Clinic</Text></View>
      <View style={styles.square3}><Image source={require("./assest/icon3.png")} style={{width:70, height:70, resizeMode: 'stretch',marginTop:10}} /><Text style={{fontSize: 24, fontWeight: 'bold', marginTop:5, color: '#fff'}}>10.30</Text><Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>Online</Text><Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>Clinic</Text></View>
      <View style={styles.square4}><Image source={require("./assest/icon2.png")} style={{width:70, height:70, resizeMode: 'stretch',marginTop:10}} /><Text style={{fontSize: 24, fontWeight: 'bold', marginTop:5, color: '#fff'}}>16.30</Text><Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>Physical</Text><Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>Clinic</Text></View>
      <View style={styles.square3}><Image source={require("./assest/icon3.png")} style={{width:70, height:70, resizeMode: 'stretch',marginTop:10}} /><Text style={{fontSize: 24, fontWeight: 'bold', marginTop:5, color: '#fff'}}>19.30</Text><Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>Online</Text><Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>Clinic</Text></View>
      </View>

      <Text style={{fontSize: 14, fontWeight: 'bold', color:'#2D425A', marginTop:20}}>you selected Appointment</Text>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>4th Augest 2022, 16.30 Physical Clinic</Text>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>Number : 005</Text>

      <View style={styles.square5}>
        <View style={{height:45, width:130, backgroundColor:'#fff', borderRadius:30, marginLeft:10}}><Text style={{fontSize: 24, fontWeight: 'bold', marginTop:7, marginLeft:19}}>$ 80.00</Text></View>
        <Text style={{fontSize: 24, fontWeight: 'bold', marginRight:20}}>Next ></Text>
      </View>
      
      </View>
      <View>
      
      </View>
        
      </View>
      <View>

      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view : {
    flex: 1,
    backgroundColor: '#fff',
    
},


square1:{
  width: 50,
  height: 50,
  backgroundColor: '#A0A1A3', 
  borderRadius:10,
  marginTop: 20,
  marginLeft: 2,
  marginRight:2,
  alignItems: 'center',
  
  
},

square2:{
  width: 50,
  height: 100,
  backgroundColor: '#2C3F52', 
  borderRadius:10,
  marginTop: 10,
  marginLeft: 2,
  marginRight:2,
  alignItems: 'center',
  
},

square3:{
  width: 90,
  height: 170,
  backgroundColor: '#6181B8', 
  borderRadius:50,
  marginTop: 20,
  marginLeft: 2,
  marginRight:2,
  alignItems: 'center',
  
},

square4:{
  width: 90,
  height: 170,
  backgroundColor: '#932AEF', 
  borderRadius:50,
  marginTop: 20,
  marginLeft: 2,
  marginRight:2,
  alignItems: 'center',
  
},

square5:{
  width: '90%',
  height: 60,
  backgroundColor: '#45DF2C', 
  borderRadius:50,
  marginTop: 20,
  marginLeft: 2,
  marginRight:2,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: "space-between",
  
},

writeTaskWrapper: {
  width: '90%',
  flexDirection: 'row',
  justifyContent: "space-between",
  alignItems: 'center',
  
  
},

logo: {
  width: '100%',
  height: 970,
  resizeMode: 'stretch',
  
  
},

logo1: {
  width:260,
  height: 310,
  resizeMode: 'stretch',
  marginTop:-90,
  marginLeft:-40
  
},

text1: {
  fontSize: 14, 
  fontWeight: 'bold',  
  
  marginLeft:100
},

upper: {
  
  height:300,
  marginTop:-850
  
},
uppertext: {
  
  height:200,
  marginTop:-280,
  marginLeft:190
  
},
upper1: {
  backgroundColor: '#fff', 
  height:650,
  borderRadius:45,
  marginTop:-150,
  alignItems: 'center',
  
  
  
},

});