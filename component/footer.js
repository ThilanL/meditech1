import React from 'react'
import { View, Text} from 'react-native'
import exStyle from '../style/exStyle';
import{useNavigation} from '@react-navigation/core';

export default function Footer1() {
  const navigation = useNavigation();
return(
    <View style={exStyle.square5}>
        <View style={exStyle.Button3}><Text style={exStyle.text15}>$ 80.00</Text></View>
        <Text style={exStyle.text16} onPress={() => navigation.navigate('new2')}>Next </Text>
      </View>
)
}

