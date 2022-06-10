/*
Auther : Thilan Lakshitha
Date : 06 th June 2022
Edited : 09 th June 2022
*/

import React, { Component, useState } from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import{useNavigation} from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import exStyle from '../style/exStyle';
import Bg from '../component/background';
import Header from '../component/header';
import Footer1 from '../component/footer';
import Cal from '../component/calander';
import Session from '../component/session';



const App = () => {

  const navigation = useNavigation();

  return(
    <SafeAreaView style={exStyle.view}>
      <View>
      <Bg/>
      
      {/*  This is Header  */}
      <View style={exStyle.upper}>
      <Header/>
      </View>

      {/*  This is Main panel  */}
      <View style={exStyle.upper4}>
      <Text style={exStyle.text2}>Appointment schedule</Text>
      <Text style={exStyle.text3}>Select date and time of your Appointment</Text>
      <Text style={exStyle.text9}>Augest 2021</Text>
      
      {/*  This is Calander  */}
      <Cal/>

      <View style={exStyle.line}></View>

      {/*  This is Clinic session buttons  */}
      <Session/>

      {/*  This is summery */}
      <Text style={exStyle.text9}>you selected Appointment</Text>
      <Text style={exStyle.text2}>4th Augest 2022, 16.30 Physical Clinic</Text>
      <Text style={exStyle.text3}>Number : 005</Text>

      {/*  This is Footer  */}
      <Footer1/>
      
      </View>
        
      </View>
      
    </SafeAreaView>
  );
}

export default App;