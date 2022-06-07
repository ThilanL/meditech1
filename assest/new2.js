/*
Auther : Thilan Lakshitha
Date : 06 th June 2022
*/

import React, { Component, useState } from 'react';
import {Text, StyleSheet, View, SafeAreaView, Image, TextInput} from 'react-native';

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
      <Text style={{fontSize: 14, fontWeight: 'bold', color:'#2D425A', marginTop:20}}>Appointment for</Text>
      
      <View style={styles.writeTaskWrapper}>
        <View style={styles.square1}><Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff', marginTop:10}}>For Me</Text></View>
        <View style={styles.square2}><Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff', marginTop:10}}>For other person</Text></View>
      </View>
      <View style={{alignItems: 'center', backgroundColor:'#E7E8EC', marginTop:10, width:'100%', height:470 }}>
      
      <View >
      <Text style={{fontSize: 14, fontWeight: 'bold', color:'#2D425A', marginTop:10}}>Relationship to the patient</Text>
      <TextInput style={styles.input} placeholder={'Spouse'} />
      <Text style={{fontSize: 14, fontWeight: 'bold', color:'#2D425A', marginTop:20}}>Patient Full Name</Text>
                <TextInput style={styles.input} placeholder={'Enter Patent Name'} />
                <Text style={{fontSize: 14, fontWeight: 'bold', color:'#2D425A', marginTop:20}}>Phone Number</Text>
                <View style={styles.input1}><Image source={require("./assest/flag.png")} style={styles.logo2} /><TextInput placeholder={ '> + 01                                                                          '} /></View>
                <Text style={{fontSize: 14, fontWeight: 'bold', color:'#2D425A', marginTop:20}}>Gender</Text>
                <View style={styles.writeTaskWrapper1}>
                  <View style={styles.square6}><View style={styles.square7}></View><Text style={{fontSize: 14, fontWeight: 'bold', color:'#2D425A'}}>Male   </Text></View>
                  <View style={styles.square8}><View style={styles.square9}></View><Text style={{fontSize: 14, fontWeight: 'bold', color:'#2D425A'}}>Female </Text></View>
                  <View style={styles.square8}><View style={styles.square7}></View><Text style={{fontSize: 14, fontWeight: 'bold', color:'#2D425A'}}>Other   </Text></View>
                </View>
                

      </View>
      
      <View style={styles.square5}>
        <View style={{height:45, width:130, backgroundColor:'#fff', borderRadius:30, marginLeft:10}}><Text style={{fontSize: 24, fontWeight: 'bold', marginTop:7, marginLeft:19}}>$ 80.00</Text></View>
        <Text style={{fontSize: 24, fontWeight: 'bold', marginRight:20}}>Next ></Text>
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

writeTaskWrapper: {
  width: '90%',
  flexDirection: 'row',
  justifyContent: "space-between",
  alignItems: 'center',
  
  
},

writeTaskWrapper1: {
  width: '90%',
  flexDirection: 'row',
  
  
  
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

logo2: {
  width: 25,
  height: 25,
  resizeMode: 'stretch',
  
  
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