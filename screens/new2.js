/*
Auther : Thilan Lakshitha
Date : 06 th June 2022
Edited : 09 th June 2022
*/

import React, { Component, useState } from 'react';
import {Text, View, SafeAreaView, Image, TextInput} from 'react-native';
import{useNavigation} from '@react-navigation/core';

import exStyle from '../style/exStyle';
import Bg from '../component/background';
import Header from '../component/header';
import Footer1 from '../component/footer1';


export default function App(){

  const navigation = useNavigation();

  return(
    <SafeAreaView style={exStyle.view}>
      <View>
      <Bg/>

      {/*  This is Header  */}
      <View style={exStyle.upper}>
      <Header/>
      </View>

      {/*  This is Main Panel  */}
      <View style={exStyle.upper4}>
      <Text style={exStyle.text2}>Appointment schedule</Text>
      <Text style={exStyle.text3}>Select date and time of your Appointment</Text>
      <Text style={exStyle.text9}>Appointment</Text>
      
      {/*  This is Buttons */}
      <View style={exStyle.writeTaskWrapper2}>
        <View style={exStyle.square13}><Text style={exStyle.text17}>For Me</Text></View>
        <View style={exStyle.square14}><Text style={exStyle.text17}>For other person</Text></View>
      </View>

      {/*  This is form  */}
      <View style={exStyle.panel}>
      <View >
      <Text style={exStyle.text18}>Relationship to the patient</Text>
      <TextInput style={exStyle.input} placeholder={'Spouse'} />
      <Text style={exStyle.text19}>Patient Full Name</Text>
                <TextInput style={exStyle.input} placeholder={'Enter Patent Name'} />
                <Text style={exStyle.text19}>Phone Number</Text>
                <View style={exStyle.input1}><Image source={require("../assest/flag.png")} style={exStyle.logo9} /><TextInput placeholder={ '> + 01                                                                          '} /></View>
                <Text style={exStyle.text19}>Gender</Text>
                <View style={exStyle.writeTaskWrapper1}>
                  <View style={exStyle.square6}><View style={exStyle.square7}></View><Text style={exStyle.text20}>Male   </Text></View>
                  <View style={exStyle.square8}><View style={exStyle.square9}></View><Text style={exStyle.text20}>Female </Text></View>
                  <View style={exStyle.square8}><View style={exStyle.square7}></View><Text style={exStyle.text20}>Other   </Text></View>
                </View>
                

      </View>
      
      {/*  This is Footer  */}
      <Footer1/>
      
      </View>
      
      </View>
      
      </View>
      
      
    </SafeAreaView>
  );
}