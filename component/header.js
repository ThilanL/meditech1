import React from 'react'
import { View, Text,Image} from 'react-native'
import exStyle from '../style/exStyle';

export default function Header() {
return(
    <View>
      <Image source={require("../assest/doc.png")} style={exStyle.logo} />
      <View style={exStyle.uppertext}>
      <Text style={exStyle.text6}>Steven Sun, M.D.</Text>
      <Text style={exStyle.text7}>Pediatrician</Text>
      <Image source={require("../assest/star.png")} style={exStyle.logo6} />
      <Image source={require("../assest/logo.png")} style={exStyle.logo7} />
      <Text style={exStyle.text8}>Anaheim Regianal Hospital</Text>
      </View>
      </View>
)
}