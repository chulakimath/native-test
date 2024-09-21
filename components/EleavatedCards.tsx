import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    Button,
    Alert,
    useColorScheme,
    TouchableOpacity,
} from 'react-native';

const EleavatedCards = () => {
    const colors = ["red", "pink", 'yellow', 'green', 'blue', 'black', 'brown', 'gray'];
    const [number, setNumber] = useState(0);
    const theme = useColorScheme() == 'dark';

    return (
        <View>
            <Text
                style={[{ fontWeight: 'bold', fontStyle: 'italic', padding: 10, fontSize: 24 }, theme ? styles.whiteColor : styles.blackColor]}>
                EleavatedCards {number}
            </Text>
            <ScrollView horizontal={true}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={(e)=>{
                        setNumber(prev=>prev+1);
                        
                        }}>
                        <View style={[styles.card2, { backgroundColor: 'yellow' }]}>
                            <Text style={[{ color: 'black',fontSize:24 }]}>
                                {number}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {colors.map((item, id) => (
                        <View key={id} style={[{ backgroundColor: item }, styles.card]}>
                            <Text>
                                {item}
                            </Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View style={[styles.buttonContainer]}>
                <Button title='Increment' onPress={() => {
                    setNumber(prev => prev + 1);
                }}></Button>
                <Button title='Decrement' onPress={() => {
                    if (number <= 0) {
                        Alert.alert(
                            `The Number is \t\t${number}`,
                            `Are You Sure That Want to decrement it`,
                            [{
                                text: 'Cancle',
                                onPress: () => console.log('cancle'),
                                style: 'cancel'
                            },
                            {
                                text: 'OK',
                                onPress: () => setNumber(prev => prev - 1),
                            }
                            ],
                            { cancelable: true }
                        )
                    }
                    else {
                        setNumber(prev => prev - 1)
                    }
                }}></Button>
            </View>
        </View>
    )
}

export default EleavatedCards

const styles = StyleSheet.create({
    whiteColor: {
        color: "white"
    },
    blackColor: {
        color: 'black'
    },
    container: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
    },
    card: {
        width: 100,
        height: 100,
        elevation: 5,
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowRadius: 5,
        shadowColor: 'white',
        opacity: 1,
        borderRadius: 10,
        margin: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    card2: {
        width: 100,
        height: 100,
        shadowRadius: 5,
        shadowColor: 'white',
        borderRadius: 10,
        margin: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    textstyl: {
        fontWeight: "bold",
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        marginVertical: 10
    }
})