import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Description() {
    const route = useRoute();
    const navigation = useNavigation();
    const data = route.params.pokemonData;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.button}>
                    <Text style={styles.text}>←</Text>
                </TouchableOpacity>
                <Image style={styles.pokeball}
                    source={require('../components/pokeball.png')} />
                <Text style={styles.headert}>My Pokedex</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.imageandnames}>
                    <Image
                        source={{ uri: data.sprites.front_shiny }}
                        style={styles.image} />
                    <Image
                        source={{ uri: data.sprites.back_shiny }}
                        style={styles.image} />
                    <Text style={styles.name}>
                        {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
                    </Text>
                </View>

                <View style={styles.info}>
                    <Text style={styles.type}>
                        Type: {data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1)}
                    </Text>
                    <Text style={styles.type}>Weight: {(data.weight) / 10} kg</Text>
                    <Text style={styles.type}>Height: {(data.height) / 10} m</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 50,
        justifyContent: 'flex-start'
    },
    headert: {
        marginLeft: 10,
        color: 'white',
        fontSize: 35
    },
    pokeball: {
        width: 100,
        height: 100
    },
    button: {
        position: 'absolute',
        top: 50,
        left: 20
    },
    text: {
        color: 'white',
        fontSize: 45,
    },
    body: {
        flexDirection: 'row',
        backgroundColor: 'gold',
        width: 350,
        height: 400,
        borderRadius: 12,
        padding: 10
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 5
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center'
    },
    imageandnames: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap:1
    },
    info: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10
    },
    type: {
        fontSize: 18,
        marginBottom: 10,
        color: 'black',
        flexWrap: 'wrap'
    }
});
