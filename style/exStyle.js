import React, {} from 'react';
import { StyleSheet } from 'react-native';
import{myColours} from './controller';

const exStyle = StyleSheet.create({

    view: {
        flex: 1,
        backgroundColor: '#fff',

    },


    square1: {
        width: '48%',
        height: 45,
        backgroundColor: '#6181B8',
        borderRadius: 30,
        marginTop: 5,
        alignItems: 'center',


    },

    square2: {
        width: '48%',
        height: 45,
        backgroundColor: '#932AEF',
        borderRadius: 30,
        marginTop: 5,
        alignItems: 'center',

    },

    square3: {
        width: 90,
        height: 170,
        backgroundColor: myColours.clinicButNormal,
        borderRadius: 50,
        marginTop: 20,
        marginLeft: 2,
        marginRight: 2,
        alignItems: 'center',

    },

    square4: {
        width: 90,
        height: 170,
        backgroundColor: myColours.clinicButSelect,
        borderRadius: 50,
        marginTop: 20,
        marginLeft: 2,
        marginRight: 2,
        alignItems: 'center',

    },

    square5: {
        width: 375,
        height: 60,
        backgroundColor: myColours.footerPanelBut,
        borderRadius: 50,
        marginTop: 20,
        marginLeft: 2,
        marginRight: 2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-between",

    },

    square6: {
        backgroundColor: myColours.inputBg,
        width: 110,
        padding: 8,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c0c0c0',
        borderWidth: 1,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: "space-between",

    },

    square7: {
        backgroundColor: myColours.genderButNormal,
        width: 30,
        height: 30,
        borderRadius: 30,

    },

    square8: {
        backgroundColor: myColours.inputBg,
        width: 110,
        padding: 8,
        marginTop: 10,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c0c0c0',
        borderWidth: 1,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: "space-between",

    },

    square9: {
        backgroundColor: myColours.genderButSelect,
        width: 30,
        height: 30,
        borderRadius: 30,

    },

    square10: {
        backgroundColor: myColours.tokenPanel,
        width: 130,
        height: 130,
        borderRadius: 100,
        shadowOpacity: .5,
        marginLeft: 240,
        marginTop: -60
    },

    square11: {
        width: 50,
        height: 100,
        backgroundColor: myColours.calanderSelect,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 2,
        marginRight: 2,
        alignItems: 'center',

    },

    square12: {
        width: 50,
        height: 50,
        backgroundColor: myColours.calanderNormal,
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 2,
        marginRight: 2,
        alignItems: 'center',


    },

    square13: {
        width: '48%',
        height: 45,
        backgroundColor: myColours.clinicButNormal,
        borderRadius: 30,
        marginTop: 5,
        alignItems: 'center',


    },

    square14: {
        width: '48%',
        height: 45,
        backgroundColor: myColours.clinicButSelect,
        borderRadius: 30,
        marginTop: 5,
        alignItems: 'center',

    },

    input: {
        backgroundColor: myColours.inputBg,
        width: 375,
        padding: 12,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c0c0c0',
        borderWidth: 1,
        borderRadius: 30,
        fontWeight: "bold",
        textAlign: 'left',
        flexDirection: 'row',
        justifyContent: "space-between",



    },

    input1: {
        backgroundColor: myColours.inputBg,
        width: 375,
        padding: 8,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c0c0c0',
        borderWidth: 1,
        borderRadius: 30,
        fontWeight: "bold",
        textAlign: 'left',
        flexDirection: 'row',
        justifyContent: "space-between",



    },

    input2: {
        backgroundColor: myColours.inputBg,
        width: 180,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c0c0c0',
        borderWidth: 1,
        borderRadius: 30,
        fontWeight: "bold",
        textAlign: 'left',
        flexDirection: 'row',
        justifyContent: "space-between",



    },

    input3: {
        backgroundColor: myColours.inputBg,
        width: 375,
        padding: 12,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c0c0c0',
        borderWidth: 1,
        borderRadius: 30,
        fontWeight: "bold",
        textAlign: 'left',
        flexDirection: 'row',
        justifyContent: "space-between",
    },

    writeTaskWrapper: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 10


    },

    writeTaskWrapper1: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',



    },

    writeTaskWrapper2: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',


    },

    writeTaskWrapper3: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',


    },

    writeTaskWrapper4: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',


    },

    bg: {
        width: '100%',
        height: 970,
        resizeMode: 'stretch',


    },

    logo: {
        width: 260,
        height: 310,
        resizeMode: 'stretch',
        marginTop: -90,
        marginLeft: -40

    },

    logo1: {
        width: 260,
        height: 305,
        resizeMode: 'stretch',
        marginTop: -83,
        marginLeft: 80


    },

    logo2: {
        width: 70,
        height: 70,
        resizeMode: 'stretch',
        shadowOpacity: .5,
        marginLeft: 330,
        marginTop: -150

    },

    logo3: {
        width: '65%',
        resizeMode: 'stretch',
        marginTop: -80

    },

    logo4: {
        width: 75,
        height: 18,
        marginTop: 20
    },

    logo5: {
        width: 50,
        height: 30,
        marginTop: 20
    },

    logo6: {
        width: 75,
        height: 18,
        marginLeft: 125,
        marginTop: -17
    },

    logo7: {
        width: 50,
        height: 30,
        marginTop: 95,
        marginLeft: 150
    },

    logo8: {
        width: 70,
        height: 70,
        resizeMode: 'stretch',
        marginTop: 10
    },

    logo9: {
        width: 25,
        height: 25,
        resizeMode: 'stretch',


    },

    line: {
        height: 1,
        width: '90%',
        marginTop: 20,
        backgroundColor: '#000000'
    },

    text1: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 100
    },

    text2: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15
    },

    text3: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2D425A'
    },

    text4: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 20
    },

    text5: {
        fontSize: 14,
        fontWeight: 'bold'
    },

    text6: {
        fontSize: 26,
        fontWeight: 'bold',
        color: myColours.headerPanelText,
    },

    text7: {
        fontSize: 14,
        fontWeight: 'bold',
        color: myColours.headerPanelText
    },

    text8: {
        fontSize: 14,
        fontWeight: 'bold',
        color: myColours.headerPanelText,
        marginLeft: 20
    },

    text9: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2D425A',
        marginTop: 20
    },

    text10: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#A0A1A3'
    },

    text11: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
        color: '#fff'
    },

    text12: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15
    },

    text13: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
        color: myColours.clinicButText
    },

    text14: {
        fontSize: 18,
        fontWeight: 'bold',
        color: myColours.clinicButText
    },

    text15: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 7,
        marginLeft: 19
    },

    text16: {
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 20
    },

    text17: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 10
    },

    text18: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2D425A',
        marginTop: 10
    },

    text19: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2D425A',
        marginTop: 20
    },

    text20: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2D425A',
    },

    text21:{
        fontSize: 24, 
        fontWeight: 'bold', 
        marginTop:10, 
        marginLeft:55
    },

    text22:{
        fontSize: 24, 
        fontWeight: 'bold', 
        marginTop:10, 
        marginLeft:23
    },

    text23: {
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 20,
        color: '#fff',
    },


    panel: {
        alignItems: 'center',
        backgroundColor: myColours.bgpanel,
        marginTop: 10, width: '100%',
        height: 470
    },

    panel1: {
        alignItems: 'center',
        backgroundColor: myColours.bgpanel,
        marginTop: 100,
        width: '100%',
        height: 470
    },

    Token: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 30,
        color: myColours.tokenText,
        shadowOpacity: .9
    },

    Tokentext: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 2,
        marginLeft: 40,
        color: myColours.tokenText,
        shadowOpacity: .9
    },

    detail:{
        marginLeft:120, 
        marginTop:30, 
        marginBottom:30
    },

    Button1: {
        height: 50,
        width: 170,
        backgroundColor: myColours.footerNorBut,
        borderRadius: 30
    },

    Button2: {
        height: 50,
        width: 170,
        backgroundColor: myColours.footerPanelBut,
        borderRadius: 30,
        marginLeft: 10
    },

    Button3: {
        height: 45,
        width: 130,
        backgroundColor: myColours.footerNorBut,
        borderRadius: 30,
        marginLeft: 10
    },

    Day1: {
        alignItems: 'center',
        marginTop: 10
    },

    upper: {

        height: 300,
        marginTop: -850

    },
    uppertext: {

        height: 200,
        marginTop: -280,
        marginLeft: 190

    },
    upper1: {
        backgroundColor: '#fff',
        height: 585,
        borderRadius: 45,
        marginTop: -150,
        alignItems: 'center',
        width: 400,
        marginLeft: 15,
        opacity: .4,
        borderColor: '#fff',
        borderWidth: 1,
        shadowOpacity: .9




    },
    upper3: {

        height: 585,
        borderRadius: 45,
        marginTop: -580,
        alignItems: 'center',
        width: 400,
        marginLeft: 15,




    },
    upper4: {
        backgroundColor: '#fff',
        height: 650,
        borderRadius: 45,
        marginTop: -150,
        alignItems: 'center',
        shadowOpacity: .3


    },

})

export default exStyle;