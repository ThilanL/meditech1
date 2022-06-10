
import React from 'react'
import { View, Text} from 'react-native'
import exStyle from '../style/exStyle';

export default function Cal() {
return(
    <View style={exStyle.writeTaskWrapper3}>
        <View style={exStyle.Day1}><Text style={exStyle.text10}>Mo</Text><View style={exStyle.square12}><Text style={exStyle.text12}>1</Text></View></View>
        <View style={exStyle.Day1}><Text style={exStyle.text10}>Tu</Text><View style={exStyle.square12}><Text style={exStyle.text12}>2</Text></View></View>
        <View style={exStyle.Day1}><Text style={exStyle.text10}>We</Text><View style={exStyle.square12}><Text style={exStyle.text12}>3</Text></View></View>
        <View style={exStyle.square11}><Text style={exStyle.text11}>Th</Text><Text style={exStyle.text11}>4</Text></View>
        <View style={exStyle.Day1}><Text style={exStyle.text10}>Fr</Text><View style={exStyle.square12}><Text style={exStyle.text12}>5</Text></View></View>
        <View style={exStyle.Day1}><Text style={exStyle.text10}>Sa</Text><View style={exStyle.square12}><Text style={exStyle.text12}>6</Text></View></View>
        <View style={exStyle.Day1}><Text style={exStyle.text10}>Su</Text><View style={exStyle.square12}><Text style={exStyle.text12}>7</Text></View></View>
      </View>
)
}