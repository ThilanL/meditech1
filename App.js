/*
Auther : Thilan Lakshitha
Date : 06 th June 2022
*/

import React, { Component, useState } from 'react';
import {Text, StyleSheet, View, SafeAreaView, Image, TextInput} from 'react-native';

export default function App(){
  return(
    <SafeAreaView style={styles.view}>
      <View >
      <Image source={require("./assest/p222.jpg")} style={styles.logo} blurRadius={30}/>
      <View style={styles.upper}>
        <View style={styles.square10}>
        <Text style={{fontSize: 24, fontWeight: 'bold', marginTop:30, marginLeft:30, color: '#fff', shadowOpacity:.9}}>Token</Text><Text style={{fontSize: 30, fontWeight: 'bold', marginTop:2, marginLeft:40, color: '#fff', shadowOpacity:.9}}>#5</Text></View>
        <Image source={require("./assest/icon3.png")} style={styles.logo2} />
      <Image source={require("./assest/doc1.png")} style={styles.logo1} />
      <View style={styles.uppertext}>
      
      </View>
      
      </View>
      <View style={styles.upper1} ></View>
      <View style={styles.writeTaskWrapper}>
      
      <View style={styles.upper3} >

      <Text style={{fontSize: 16, fontWeight: 'bold', marginTop:15}}>Appointment schedule</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold', color:'#2D425A'}}>Select date and time of your Appointment</Text>
      
      <View style={{height:1, width:'90%', marginTop:20, backgroundColor:'#000000'}}></View>

      <Text style={{fontSize: 26, fontWeight: 'bold', marginTop:20}}>Steven Sun, M.D.</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Pediatrician</Text>
      <Image source={require("./assest/starb.png")} style={{width:75, height:18, marginTop:20}} />
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>4.8 Rating (28 Reviews)</Text>
      <Image source={require("./assest/logob.png")} style={{width:50, height:30, marginTop:20}} />
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Anaheim Regianal Hospital</Text>
     
      <View style={{height:1, width:'90%', marginTop:20, backgroundColor:'#000000'}}></View>
      
      <View style={{marginLeft:120, marginTop:30, marginBottom:30}}>
      <View style={styles.writeTaskWrapper}>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Token #</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>005</Text>
      </View>
      <View style={styles.writeTaskWrapper}>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Schedule Date</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>19 June 2021</Text>
      </View>
      <View style={styles.writeTaskWrapper}>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Schedule Time</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>04.30 PM</Text>
      </View>
      <View style={styles.writeTaskWrapper}>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Clinic Type</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Online Clinic</Text>
      </View>
      <View style={styles.writeTaskWrapper}>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Total Cost</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>$ 80</Text>
      </View>
      </View>
      

      <View style={styles.writeTaskWrapper1}>
        <View style={{height:50, width:170, backgroundColor:'#fff', borderRadius:30}}><Text style={{fontSize: 24, fontWeight: 'bold', marginTop:10, marginLeft:55}}>Close</Text></View>
        <View style={{height:50, width:170, backgroundColor:'#45DF2C', borderRadius:30, marginLeft:10}}><Text style={{fontSize: 24, fontWeight: 'bold', marginTop:10, marginLeft:23}}>My Booking</Text></View>
      </View>
      
      
      
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
  width: '48%',
  height: 45,
  backgroundColor: '#6181B8', 
  borderRadius:30,
  marginTop: 5,
  alignItems: 'center',
  
  
},

square2:{
  width: '48%',
  height: 45,
  backgroundColor: '#932AEF', 
  borderRadius:30,
  marginTop: 5,
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
  width: 375,
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

square6:{
  backgroundColor: '#fff',
  width:110,
  padding:8,
  marginTop: 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#c0c0c0',
  borderWidth: 1,
  borderRadius:30,
  flexDirection: 'row',
  justifyContent: "space-between",
  
},

square7:{
  backgroundColor: '#c0c0c0',
  width:30,
  height:30,
  borderRadius:30,
  
},

square8:{
  backgroundColor: '#fff',
  width:110,
  padding:8,
  marginTop: 10,
  marginLeft:20,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#c0c0c0',
  borderWidth: 1,
  borderRadius:30,
  flexDirection: 'row',
  justifyContent: "space-between",
  
},

square9:{
  backgroundColor: '#932AEF',
  width:30,
  height:30,
  borderRadius:30,
  
},

square10:{
  backgroundColor: '#c0c0c0',
  width:130,
  height:130,
  borderRadius:100,
  
  shadowOpacity:.5,
  marginLeft:240,
  marginTop:-60
},

input: {
  backgroundColor: '#fff',
  width:375,
  padding:12,
  marginTop: 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#c0c0c0',
  borderWidth: 1,
  borderRadius:30,
  fontWeight: "bold",
  textAlign: 'left',
  flexDirection: 'row',
  justifyContent: "space-between",
    
  
  
},

input1: {
  backgroundColor: '#fff',
  width:375,
  padding:8,
  marginTop: 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#c0c0c0',
  borderWidth: 1,
  borderRadius:30,
  fontWeight: "bold",
  textAlign: 'left',
  flexDirection: 'row',
  justifyContent: "space-between",
    
  
  
},

input2: {
  backgroundColor: '#fff',
  width:180,
  padding:12,
  
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#c0c0c0',
  borderWidth: 1,
  borderRadius:30,
  fontWeight: "bold",
  textAlign: 'left',
  flexDirection: 'row',
  justifyContent: "space-between",
    
  
  
},

writeTaskWrapper: {
  width: '70%',
  flexDirection: 'row',
  justifyContent: "space-between",
  alignItems: 'center',
  marginTop:10
  
  
},

writeTaskWrapper1: {
  marginTop:10,
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
  height: 305,
  resizeMode: 'stretch',
  marginTop:-83,
  marginLeft:80
  
  
},

logo2: {
  width: 70,
  height: 70,
  resizeMode: 'stretch',
  shadowOpacity: .5,
  marginLeft:330,
  marginTop:-150
  
},

logo3: {
  width: '65%',
  resizeMode: 'stretch',
  marginTop:-80
  
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
  height:585,
  borderRadius:45,
  marginTop:-150,
  alignItems: 'center',
  width:400,
  marginLeft:15,
  opacity:.4,
  borderColor: '#fff',
  borderWidth: 1,
  shadowOpacity:.9
  

  
  
},
upper3: {
  
  height:585,
  borderRadius:45,
  marginTop:-580,
  alignItems: 'center',
  width:400,
  marginLeft:15,
  

  
  
},

});