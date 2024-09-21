import { SafeAreaView, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

const FlatCard = () => {
    const lis = ['gray', 'pink', 'black','blue','pink','brown','orange'];
    const theme=useColorScheme()=='dark';
    return (
        <SafeAreaView>

            <View>
                <Text style={[styles.text_head,theme?styles.whiteColor:styles.blackColor]}>
                    List cards
                </Text>
              
                <ScrollView horizontal={true}>
                    <View style={styles.cards}>
                        {lis.map((item, id) => (
                            <View key={id} style={[styles.container, {backgroundColor:item}]}>
                                <Text style={styles.text_center}>
                                    {item}
                                </Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

export default FlatCard

const styles = StyleSheet.create({
    whiteColor:{
        color:'white'
    },
    blackColor:{
        color:"black"
    },
    container: {
        width: 100,
        height: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: 'pink',
    },
    text_center: {
        color: 'white'

    },
    text_head: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
        color:'white'
    },
    cards: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        gap: 5
    },
    card1: {
        backgroundColor: 'red'
    },
    card2: {
        backgroundColor: "green"
    },
    card3: {
        backgroundColor: "blue"
    }
})