/*
Auther : Thilan Lakshitha
Date : 06 th June 2022
Edited : 09 th June 2022
*/

import React, { Component, useState } from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import{useNavigation} from '@react-navigation/core';

import exStyle from '../style/exStyle';
import Bg from '../component/background';
import Summery from '../component/summery';

export default function App(){

  const navigation = useNavigation();

  return(
    <SafeAreaView style={exStyle.view}>
      <View >
      <Bg/>

      {/*  This is Header  */}
      <View style={exStyle.upper}>
        <View style={exStyle.square10}>
        <Text style={exStyle.Token}>Token</Text><Text style={exStyle.Tokentext}>#5</Text></View>
        <Image source={require("../assest/icon3.png")} style={exStyle.logo2} />
      <Image source={require("../assest/doc1.png")} style={exStyle.logo1} />
      <View style={exStyle.uppertext}>
      </View>
      </View>

      {/*  This is Main Panel */}
      <View style={exStyle.upper1} ></View>
      <View style={exStyle.writeTaskWrapper}>
      
      <View style={exStyle.upper3} >

      <Text style={exStyle.text2}>Appointment schedule</Text>
      <Text style={exStyle.text3}>Select date and time of your Appointment</Text>
      
      <View style={exStyle.line}></View>

      <Text style={exStyle.text4}>Steven Sun, M.D.</Text>
      <Text style={exStyle.text5}>Pediatrician</Text>
      <Image source={require("../assest/starb.png")} style={exStyle.logo4} />
      <Text style={exStyle.text5}>4.8 Rating (28 Reviews)</Text>
      <Image source={require("../assest/logob.png")} style={exStyle.logo5} />
      <Text style={exStyle.text5}>Anaheim Regianal Hospital</Text>
     
      <View style={exStyle.line}></View>
      
      <Summery/>
      
      {/*  This is Footer  */}
      <View style={exStyle.writeTaskWrapper1}>
        <View style={exStyle.Button1}><Text style={exStyle.text21}  onPress={() => navigation.navigate('new1')}>Close</Text></View>
        <View style={exStyle.Button2}><Text style={exStyle.text22}>My Booking</Text></View>
      </View>
      
      
      
      </View>
      </View>
        
      </View>
      
    </SafeAreaView>
  );
}