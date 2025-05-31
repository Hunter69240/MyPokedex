import React,{useEffect, useState} from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Pokemon(){
    const route = useRoute(); //Share data from screen to screen
    const query=route.params.pokemonName //Get value from other screen
    const [pokemonData,SetpokemonData]=useState(null)
    const navigation = useNavigation();

    useEffect(()=>{
        const fetchPokemonData=async()=>{
            try{
                const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
                const data=await response.json()
                console.log(data)
                SetpokemonData(data)
                navigation.navigate('Description',{pokemonData:data})
            }
            catch (err){
                alert("Pokémon not found. Returning to the main screen.");
                navigation.navigate('Main');
            }
        }
        if(query) fetchPokemonData();
    },[query])

   
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Fetching Data...</Text>
        </View>
    )

}

const styles=StyleSheet.create({
    container:{
        flex:1
        
    },  
    text:{
        fontSize:50,
        color:'white',
        alignSelf:'center'
    }
})

