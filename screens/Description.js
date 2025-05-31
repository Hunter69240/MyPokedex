import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity

} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Description(){
    const route=useRoute()
    const navigation=useNavigation()
    const data=route.params.pokemonData;
    
    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> navigation.navigate('Main')} style={styles.button}>
                    <Text style={styles.text}>←</Text>
                </TouchableOpacity>
                <Image style={styles.pokeball}
                source={require('../components/pokeball.png')}/>
                <Text style={styles.headert}>My Pokedex</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.imageandnames}>
                    <Image
                    source={{uri:data.sprites.front_shiny}}
                    style={styles.image}/>
                    <Image
                    source={{uri:data.sprites.back_shiny}}
                    style={styles.image}/>
                    <Text style={styles.name}>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</Text>
                </View>

                <View style={styles.info}>
                    <Text style={styles.type}>Type: {data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1) }</Text>
                    <Text style={styles.type}>Weight:{(data.weight)/10} kg</Text>
                    <Text style={styles.type}>Height:{(data.height)/10} m</Text>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        alignItems:'center',
       
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        padding:50,
        justifyContent:'flex-start'
    },
    headert:{
        margin:'auto',
        color:'white',
        fontSize:35
    },
    pokeball:{
        width:100,
        height:100
    },
    button:{
        width:50,
        height:50,
        opacity:1,
        alignSelf:'flex-start',
        position:'absolute',
        top:50
    },
    text:{
        color:'white',
        fontSize:45,
    },
    body:{
        justifyContent: 'flex-start',   // Centers content vertically
        alignItems:'flex-start',
        backgroundColor:'gold',
        width:350,
        height:400,
        margin:'auto',
        flexDirection:'row'
        
    },
    image:{
        width:200,
        height:300,
        marginTop: -70,     // Optional: Add some spacing from the top
        marginLeft: -30,  
        justifyContent:'space-evenly'
    },
    name:{
        marginTop:-90,
        marginRight:55,
        fontStyle:'Helvetica',
        fontSize:30

    },
    imageandnames:{
        alignItems:'center',
        justifyContent:'center'
    },
    info:{
        
        // justifyContent:'flex-end',
        // alignItems:'flex-end'
    },
    type:{
        color:'black',
        fontStyle:'Helvetica',
        fontSize:30,
        marginTop:10,
        marginLeft:-20
    }


})