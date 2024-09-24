import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native'
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const passwordSchema = Yup.object().shape({
    PasswordLength: Yup.number()
        .required('Password length is required')
        .min(4, 'Password length must be at least 4')
        .max(32, 'Password length cannot exceed 32'),
});

const PasswordMain = () => {
    const [password, SetPassword] = useState('');
    const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [upperCase, setupperCase] = useState(false);
    const [number, setnumbers] = useState(true);
    const [specialCharacters, setSpecialCharacters] = useState(false);

    const generatePasswordString = (passwordLength: number) => {
        let charactersList = "";
        const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
        const nums = '0123456789';
        const splchars = '!@#$%^&';
        if (upperCase) {
            charactersList += upperCharacters;
        }
        if (lowerCase) {
            charactersList += lowerCharacters;
        }
        if (number) {
            charactersList += nums;
        }
        if (specialCharacters) {
            charactersList += splchars;
        }
        SetPassword(createPassword(charactersList, passwordLength));
        setIsPasswordGenerated(true);
    }
    const createPassword = (characters: String, passwordLength: number) => {
        let result = "";
        for (let i = 0; i < passwordLength; i++) {
            const characterIndex = Math.round(Math.random() * characters.length);
            result += characters.charAt(characterIndex);
        }
        return result;
    }
    const resetPasswordState = () => {
        setIsPasswordGenerated(false);
        SetPassword('');
        setLowerCase(false);
        setupperCase(false);
        setSpecialCharacters(false);
        setnumbers(true);
    }
    const theme = useColorScheme() == 'dark';
    const colorfront = theme ? styles.whiteColor : styles.blackColor;
    const backColor = theme ? styles.blackBackgrund : styles.whiteBackground;
    const borderColour = theme ? styles.whiteBorder : styles.blackBorder;
    return (
        <ScrollView keyboardShouldPersistTaps="handled">
            <SafeAreaView style={[backColor]}>
                <View>
                    <Text style={[styles.heading, colorfront]}>Password Generator</Text>
                    <Formik
                        initialValues={{ PasswordLength: '' }}
                        validationSchema={passwordSchema}
                        onSubmit={values => {
                            generatePasswordString(+values.PasswordLength)//later
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            isValid,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                            handleReset,
                            /* and other goodies */
                        }) => (
                            <>
                                <View>
                                    <View style={[styles.inputContiner]}>
                                        <View>
                                            <Text style={[colorfront, { fontSize: 20, paddingLeft: 10, fontStyle: 'italic', fontWeight: 500 }]} >Password Length : </Text>

                                        </View>
                                        <View>
                                            <TextInput
                                                style={[styles.inputbox, colorfront, borderColour]}
                                                value={values.PasswordLength}
                                                onChangeText={handleChange('PasswordLength')}
                                                placeholder='Exampl 8'
                                                keyboardType='numeric'
                                                placeholderTextColor={theme ? "white" : 'black'}
                                            />

                                        </View>
                                    </View>
                                    {
                                        touched.PasswordLength && errors.PasswordLength && (
                                            <Text style={[{ color: 'red', paddingHorizontal:30 }]}>{errors.PasswordLength}</Text>
                                        )
                                    }
                                </View>
                                <View style={[styles.checkBoxContainer, { marginTop: 25 }]}>
                                    <Text style={[colorfront, styles.checkboxText]}>Include Lower Case</Text>
                                    <BouncyCheckbox
                                        disableText
                                        isChecked={lowerCase}
                                        onPress={() => setLowerCase(prev => !prev)}
                                        fillColor='#29AB87'
                                    />
                                </View>
                                <View style={[styles.checkBoxContainer, { marginTop: 25 }]}>
                                    <Text style={[colorfront, styles.checkboxText]}>Include Upper Case</Text>
                                    <BouncyCheckbox
                                        disableText
                                        isChecked={upperCase}
                                        onPress={() => setupperCase(prev => !prev)}
                                        fillColor='#29AB87'

                                    />
                                </View>

                                <View style={[styles.checkBoxContainer, { marginTop: 25 }]}>
                                    <Text style={[colorfront, styles.checkboxText]}>Include Numbers</Text>
                                    <BouncyCheckbox
                                        disableText
                                        isChecked={number}
                                        onPress={() => setnumbers(prev => !prev)}
                                        fillColor='#29AB87'

                                    />
                                </View>

                                <View style={[styles.checkBoxContainer, { marginTop: 25 }]}>
                                    <Text style={[colorfront, styles.checkboxText]}>Include Symbols</Text>
                                    <BouncyCheckbox
                                        disableText
                                        isChecked={specialCharacters}
                                        onPress={() => setSpecialCharacters(prev => !prev)}
                                        fillColor='#29AB87'
                                    />
                                </View>
                                <View style={[styles.btnContainer]}>
                                    <TouchableOpacity
                                        disabled={!isValid}
                                        style={[styles.btn]}
                                        onPress={() =>
                                            handleSubmit()
                                        }
                                    ><Text style={[colorfront, { textAlign: 'center', fontWeight: 500 }]}>Generate</Text></TouchableOpacity>
                                    <Pressable
                                        onPress={() => {
                                            handleReset();
                                            resetPasswordState();
                                        }}
                                        style={[styles.btn2]}><Text style={[colorfront, { textAlign: 'center', fontWeight: 500 }]}>Reset</Text></Pressable>
                                </View>
                            </>
                        )}
                    </Formik>
                </View>
                {isPasswordGenerated ? (
                    <View style={[styles.passwordContainer,{backgroundColor:theme?"white":'black',flex:1,justifyContent:'center'}]}>
                        <Text selectable={true} style={[{color:theme?'black':'white',fontSize:16,textAlign:'center'}]} >{password}</Text>
                    </View>
                ) : ''}
            </SafeAreaView>
        </ScrollView>
    )
}

export default PasswordMain

const styles = StyleSheet.create({

    whiteColor: {
        color: 'white'
    },
    blackColor: {
        color: 'black'
    },
    whiteBackground: {
        backgroundColor: 'white'
    },
    blackBackgrund: {
        backgroundColor: 'black'
    },
    blackBorder: {
        borderColor: 'black'
    },
    whiteBorder: {
        borderColor: 'white'
    },

    inputbox: {
        height: 40,
        width: 125,
        marginHorizontal: 15,
        borderWidth: 2,
        padding: 1,
        paddingLeft: 10,
        borderRadius: 10
    },

    btn: {
        backgroundColor: 'rgba(0,255,0,0.5)',
        width: 110,
        margin: 1,
        padding: 10,
        borderRadius: 20,
    },
    btn2: {
        backgroundColor: 'rgba(158,50,255,0.5)',
        width: 110,
        margin: 1,
        padding: 10,
        borderRadius: 20,

    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginTop: 25
    }
    ,
    heading: {
        fontWeight: 500,
        fontSize: 30,
        paddingVertical: 10,
        paddingBottom: 20,
        paddingHorizontal: 5,
        margin: 5,
    },
    inputContiner: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    checkBoxContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    checkboxText: {
        fontFamily: 'italic',
        paddingHorizontal: 10,
        fontSize: 20,
        fontWeight: 500
    },
    passwordContainer:{
        width:'100%',
        height:100,
        marginVertical:10,
    }
})