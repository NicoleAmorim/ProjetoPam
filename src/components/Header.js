import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

/* CSS */
const style = StyleSheet.create(

    {

        container : {

            marginTop : 30,
            backgroundColor : '#6ac2f7',
            alignItems : 'center',
            justifyContent : 'center',

        },

        title : {

            fontSize : 50,
            color : '#fff'

        }

    }

) 

const Header = (props) => (

        <View style={style.container}>   

            <Text style={style.title}>Famosos</Text>

        </View>

)

export default Header