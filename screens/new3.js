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
import Footer1 from '../component/footer2';

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
      <Text style={exStyle.text2}>Payment Information</Text>
      <Text style={exStyle.text3}>Use our secured payment option</Text>
      
      
      <View style={exStyle.panel1}>
      
      <Image source={require("../assest/card1.png")} style={exStyle.logo3} />
      
      {/*  This is Form  */}
      <View>
      <Text style={exStyle.text18}>Credit Card Number</Text>
      <View style={exStyle.input3}><TextInput placeholder={ '    ****   ****   ****   ****'} /><Image source={require("../assest/card.png")} style={exStyle.logo2} /></View>
      <Text style={exStyle.text18}>Name on the Card</Text>
                <TextInput style={exStyle.input} placeholder={'Enter Name'} />
                <View styles={exStyle.writeTaskWrapper4}>
                
                <View style={exStyle.writeTaskWrapper1}>
                <Text style={exStyle.text18}>Valid Through</Text>
                <Text style={exStyle.text18}>CVV                                       </Text>
                </View>
                <View style={exStyle.writeTaskWrapper1}>
                <TextInput style={exStyle.input2} placeholder={'MM/YYYY'} />
                <TextInput style={exStyle.input2} placeholder={'       ***'} />
                </View>
                </View>    
      </View>

      {/*  This is Footer */}
      <Footer1/>
      </View>
      
      </View>
      
        
      </View>
     
      
    </SafeAreaView>
  );
}