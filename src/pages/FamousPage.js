import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HEADER from '../components/Header'
import FamousList from '../components/FamousList'

import axios from 'axios'

export default class famousPage extends React.Component {

  
  /* CRIAÇAO DE UM STATE - ESTRUTURA DE DADOS DINAMICA  */
  constructor(props){

    super(props)

    this.state = {

      famosos : []

    }

  }

  componentDidMount(){

     /* REQUISIAÇÃO DO AXIOS */
     const axios = require("axios");

     axios({
         "method":"GET",
         "url":"https://andruxnet-random-famous-quotes.p.rapidapi.com/",
         "headers":{
         "content-type":"application/octet-stream",
         "x-rapidapi-host":"andruxnet-random-famous-quotes.p.rapidapi.com",
         "x-rapidapi-key":"46c42e9278msh072e361ded7f046p1fc2bcjsn20ec78c50729",
         "useQueryString":true
         },"params":{
         "cat":"famous",
         "count":"10"
         }
         })
         .then((response)=>{
           const { results } = response.data
 
            this.setState({

          famosos : results
         })
         .catch((error)=>{
           console.log("error")
         })
 
     })
    }
    render(){

        //TESTE DE NAVEGAÇÃO:
        //this.props.navigation.navigate('PeopleDetail')
    
        return (
          <View>
            {/* <HEADER /> */}
            {/* { this.renderList() } */}
            <FamousList famosos={ this.state.famosos } onPress={ 
        
             }></FamousList>
          </View>
        );
    }    
}