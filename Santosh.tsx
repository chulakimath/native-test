import React, { useState } from "react";
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    useColorScheme,
    Button
} from "react-native";

function Santosh(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const [num, setNum] = useState(4);
    const arr = [1, 2, 3, 4, 5]
    const [number, setNumber] = useState(1);

    return (
        <View style={styles.container}>
            <Text
                style={isDarkMode ? styles.textBack : styles.textback2}>
                {number.toString()}
            </Text>
            <Text>{number}</Text>
            {arr.map((item, index) => (<Text style={styles.fontcol} key={index}>{item}</Text>))}
            <Button title="Update" onPress={() => {
                console.log("Before update:", number);
                setNumber(prev => prev + 1);
                console.log("After update:", number);
            }} />
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBack: {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 50,
        padding: 10
    },
    textback2: {
        backgroundColor: 'black',
        color: 'white',
        padding: 10,
        borderRadius: 50
    },
    fontcol: {
        color: "red",
        backgroundColor: "yellow",
        padding: 10,
        paddingHorizontal: 20,
        // width:25,
        // height:25,
        fontSize: 20,
        margin: 5,
        borderRadius: 50
    }


});
export default Santosh;