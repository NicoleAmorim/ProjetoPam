import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import FamousListItem from './FamousListItem'

const FamousList = (props) => {
    /*ALTERAR AQUI - ADICIONAR onPress*/
    const { famosos, onPress } = props

    const items = famosos.map(famoso => {
        /*ALTERAR AQUI - ADICIONAR onPress*/
        return <FamousListItem key={ famoso } famoso={ famoso } onPress={ onPress }/>

    })

      return (

        <View style= {styles.container}>

            { items }

        </View>

      )

}

const styles = StyleSheet.create({

    container: {

        backgroundColor: '#e2f9ff'

    },
    line: {

        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row'

    },
    lineText: {

        fontSize: 20,
        paddingLeft: 15

    }

})

export default FamousList