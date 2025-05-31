import React,{useState} from "react";
import { Text,
    View,
    StyleSheet,
    Image,
   
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import PokemonAutoComplete from './PokemonAutoComplete';

export default function Main(){
    const [name,Setname]=useState("")
    const navigation=useNavigation()

   
    const  handlesubmit =()=>{
        navigation.navigate('Pokemon',{pokemonName:name}) //navigates to Pokemon screen and passes the name typed with variable pokemonName
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                    <Image style={styles.pokeball}
                    source={require('../components/pokeball.png')}/>
                    <Text style={styles.headert}>My Pokedex</Text>
            </View>

            <PokemonAutoComplete onSelect={(selectedName) => navigation.navigate('Pokemon', { pokemonName: selectedName })} />
            {/* <TextInput placeholder="Search..." style={styles.textinput} placeholderTextColor="white"
            onSubmitEditing={handlesubmit} onChangeText={Setname}></TextInput> */}

            <View style={styles.images}>
                    <Image style={styles.pointingup}
                    source={require('../components/pointing up -2.png')}/>
                    <Image style={styles.pointingup}
                    source={require('../components/pointing up -1.png')}/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        padding:50,
        justifyContent:'space-around'
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
    textinput:{
        color:'white',
        width:'100%'
    },
    images:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end'
    },
    pointingup:{
        height:150,
        width:150
    }
})