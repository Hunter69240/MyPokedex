import React,{useState,useEffect} from "react";
import {View,StyleSheet,TextInput,FlatList,TouchableOpacity,Text} from 'react-native';

export default function PokemonAutoComplete({onSelect}){
    const POKE_API = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
    const [pokemonList,SetpokemonList]=useState([])
    const [input,Setinput]=useState("")
    const [suggestions, setSuggestions] = useState([]);

    useEffect(()=>{
        const fetchpokemonNames= async()=>{
            try{
                const res=await fetch(POKE_API);
                const data=await res.json();
                const names=data.results.map(p=>p.name)
                SetpokemonList(names)
            }catch(error){
                console.error('Failed to fetch pokemon list')
            }
        };
        fetchpokemonNames();
    },[]);

    const handleChange =(value)=>{
        Setinput(value)
        const matches=pokemonList.filter(name=>name.toLowerCase().startsWith(value.toLowerCase()))
        setSuggestions(matches.slice(0,10));
    }

    const handleSelect=(name)=>{
        Setinput(name)
        setSuggestions([])
        onSelect(name)
    }
    
    return (
        <View style={styles.container}>
      <TextInput
        value={input}
        onChangeText={handleChange}
        placeholder="Search Pokémon"
        style={styles.input}
      />

      {suggestions.length > 0 && (
        <FlatList
          data={suggestions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.suggestion}
              onPress={() => handleSelect(item)}
            >
              <Text style={styles.suggestionText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      paddingHorizontal: 16,
      width: '100%',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 6,
      padding: 10,
      fontSize: 16,
      color:'white'
    },
    suggestion: {
      paddingVertical: 10,
      paddingHorizontal: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      
    },
    suggestionText: {
      fontSize: 16,
      textTransform: 'capitalize',
      color:'white'
    },
  });