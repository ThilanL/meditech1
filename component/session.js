import React from 'react'
import { View, Text,Image} from 'react-native'
import exStyle from '../style/exStyle';

export default function Session() {
return(
    <View style={exStyle.writeTaskWrapper2}>
      <View style={exStyle.square3}><Image source={require("../assest/icon2.png")} style={exStyle.logo8} /><Text style={exStyle.text13}>08.30</Text><Text style={exStyle.text14}>Physical</Text><Text style={exStyle.text14}>Clinic</Text></View>
      <View style={exStyle.square3}><Image source={require("../assest/icon3.png")} style={exStyle.logo8}  /><Text style={exStyle.text13}>10.30</Text><Text style={exStyle.text14}>Online</Text><Text style={exStyle.text14}>Clinic</Text></View>
      <View style={exStyle.square4}><Image source={require("../assest/icon2.png")} style={exStyle.logo8}  /><Text style={exStyle.text13}>16.30</Text><Text style={exStyle.text14}>Physical</Text><Text style={exStyle.text14}>Clinic</Text></View>
      <View style={exStyle.square3}><Image source={require("../assest/icon3.png")} style={exStyle.logo8}  /><Text style={exStyle.text13}>19.30</Text><Text style={exStyle.text14}>Online</Text><Text style={exStyle.text14}>Clinic</Text></View>
      </View>
)
}