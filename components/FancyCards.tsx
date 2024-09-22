import { Button, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react';
import catCards from '../component-data/cats';

const FancyCards = () => {
    const theme = useColorScheme() == 'dark';
    const textColor = theme ? styles.whiteColor : styles.blackColor;

    function openwebsite(link: string) {
        Linking.openURL(link);
    }
    return (
        <View >
            <Text style={[styles.headingText, theme ? styles.whiteColor : styles.blackColor]}>Trending</Text>
            <ScrollView style={[styles.contaier, { margin: 10 }]}>
                <View style={[styles.card, styles.elevated]}>
                    <Image
                        source={{
                            uri: 'https://images.pexels.com/photos/18998608/pexels-photo-18998608/free-photo-of-top-view-of-a-body-of-water-and-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

                        }}
                        style={[styles.cardImg]}
                    />
                    <View style={[styles.cardBody]}>
                        <Text style={[styles.cardTitle, {color:'white'}]}>Nature</Text>
                        <Text style={[styles.CardLabel, {color:'white'}]}>Wild life Craziest Place Ever</Text>
                        <Text style={[styles.description, {color:'white'}]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, atque. </Text>
                        <Text style={[styles.CardFooter, {color:'white'}]}>Lorem ipsum dolor sit amet. </Text>
                        <TouchableOpacity onPress={() => openwebsite("https://images.pexels.com/photos/18998608/pexels-photo-18998608/free-photo-of-top-view-of-a-body-of-water-and-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")}>
                            <Text style={[{color:'white'}]}>open url</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    catCards.map((item, index) => (
                        <View key={index} style={[styles.card, styles.elevated]}>
                          <TouchableOpacity onPress={()=>openwebsite(item.imageUrl)}>
                          <Image
                                source={{
                                    uri: item.imageUrl,

                                }}
                                style={[styles.cardImg]}
                            />
                          </TouchableOpacity>
                            <View style={[styles.cardBody]}>
                                <Text style={[styles.cardTitle, {color:'white'}]}>{item.cardTitle}</Text>
                                <Text style={[styles.CardLabel, {color:'white'}]}>{item.cardLabel}</Text>
                                <Text style={[styles.description, {color:'white'}]}>{item.cardDescription} </Text>
                                <Text style={[styles.CardFooter, {color:'white'}]}>{item.cardFooter} </Text>
                                {/* <TouchableOpacity>  */}
                                <Text onPress={() => openwebsite(item.imageUrl)} style={[styles.opnButton]}>Open - image</Text>
                                {/* </TouchableOpacity> */}
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>

    )
}

export default FancyCards

const styles = StyleSheet.create({
    whiteColor: {
        color: 'white'
    },
    blackColor: {
        color: 'black'
    },
    contaier: {
        // flex: 1,
        // flexDirection: 'row',
        // gap:20
    },
    headingText: {
        padding: 10,
        fontSize: 24,
        fontStyle: "italic",
        fontWeight: 600,
        letterSpacing: 5,
        shadowOffset: {
            width: 10, height: 10
        },
        shadowColor: 'red',
    },
    card: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#13315c',
        borderRadius: 10
    },
    elevated: {

    },
    cardImg: {
        height: 200,
        width: 300,
        borderRadius: 10,
        margin: 10
    },
    cardBody: {
        margin: 10,
    },
    cardTitle: {
        paddingVertical: 5,
        fontSize: 18,
        fontWeight: 500,
        letterSpacing: 1,
        textDecorationLine: 'underline',
        fontStyle: "italic",

    },
    CardLabel: {
        fontSize: 16,
        fontWeight: 400,
    },
    description: {
        fontSize: 14,
        textAlign: 'justify',
        width: 300,
    },
    CardFooter: {
        fontSize: 16,
        paddingTop: 2,
        fontWeight: 'bold'
    },
    opnButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'white',
        color: "black",
        width: 110,
        borderRadius: 25, marginVertical: 10,
        cursor:'pointer'
    }
})