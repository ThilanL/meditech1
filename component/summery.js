import React from 'react'
import { View, Text} from 'react-native'
import exStyle from '../style/exStyle';

export default function Summery() {
return(
    
    
    <View style={exStyle.detail}>
      <View style={exStyle.writeTaskWrapper}>
      <Text style={exStyle.text5}>Token #</Text>
      <Text style={exStyle.text5}>005</Text>
      </View>
      <View style={exStyle.writeTaskWrapper}>
      <Text style={exStyle.text5}>Schedule Date</Text>
      <Text style={exStyle.text5}>19 June 2021</Text>
      </View>
      <View style={exStyle.writeTaskWrapper}>
      <Text style={exStyle.text5}>Schedule Time</Text>
      <Text style={exStyle.text5}>04.30 PM</Text>
      </View>
      <View style={exStyle.writeTaskWrapper}>
      <Text style={exStyle.text5}>Clinic Type</Text>
      <Text style={exStyle.text5}>Online Clinic</Text>
      </View>
      <View style={exStyle.writeTaskWrapper}>
      <Text style={exStyle.text5}>Total Cost</Text>
      <Text style={exStyle.text5}>$ 80</Text>
      </View>
      </View>
)
}