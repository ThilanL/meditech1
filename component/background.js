import React from 'react'
import { Image} from 'react-native'
import exStyle from '../style/exStyle';

export default function Bg() {
return(
    <Image source={require("../assest/p222.jpg")} style={exStyle.bg} blurRadius={30}/>
)
}