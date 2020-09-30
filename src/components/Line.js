import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
const Line = ({label, content}) => {
 
 return(
 
 <View style={style.line}>
 
 <Text style={[style.cell, style.label]}>{label}</Text>
 <Text style={style.cell}>{content}</Text>
 
 </View>
 
 )
 
}
 
const style = StyleSheet.create({
 
 line:{
 flexDirection: 'row',
 paddingTop: 3,
 borderRightWidth: 1,
 borderColor: '#c5c5c5'
 },
 cell:{
 fontSize: 18,
 paddingLeft: 3
 },
 label:{
 fontWeight: 'bold',
 
 }
 
})

export default Line