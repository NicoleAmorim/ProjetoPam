import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const FamousListItem = props => {

    const { famoso, onPress } = props

    const {quote, author, category} = famoso

    console.log(quote)

    return( 

        <TouchableOpacity onPress={ () => {console.log('Clicou!!!!'); onPress({ famoso })} }>

            <View style= {styles.line} key={ quote }>
                
                 <Text style= {styles.lineText}>{ quote }</Text>

            </View>

        </TouchableOpacity>
    
    )

}

const styles = StyleSheet.create({

    line: {

        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row'

    },
    lineText: {

        fontSize: 20,
        paddingLeft: 15,
        flex: 7

    },
    avatar: {

        aspectRatio: 1,
        width: 50,
        flex: 1,
        borderRadius: 50,
        marginLeft: 10

    }

})

export default FamousListItem

