import { Image, Modal, Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useState } from 'react';
import contactUsers from '../component-data/contsctList-data';

const ContactList = () => {
    const theme = useColorScheme() == 'dark';
    const [showModel, setShowModel] = useState(false);
    const [imgUri, setImgUri] = useState({});

    const textColor = theme ? styles.whiteColor : styles.blackColor;
    const backgroundcolors = theme ? styles.whiteBackground : styles.blackBackground;
    const trnsback = !theme ? { backgroundColor: 'rgba(255,255,255,0.5)' } : { backgroundColor: 'rgba(0,0,0,0.4)' }


    const closeModal = () => {
        setShowModel(false);
    }
    const handlePressicon = (imageurl, name) => {
        setImgUri({ imageurl, name })
        setShowModel(true);
    }

    return (
        <View style={[styles.container]}>
            <Text style={[{ fontSize: 24, padding: 15, fontWeight: 400 }, textColor]}>Contact List</Text>
            {contactUsers.map(({ name, message, imageUrl }, index) => (
                <View key={index} style={[styles.listContainer]}>
                    <View style={[styles.imageWrapper]}>
                        <Pressable onPress={() => handlePressicon(imageUrl, name)}>
                            <Image style={[styles.cardImg]} source={{ uri: imageUrl }} />
                        </Pressable>
                    </View>
                    <View style={[styles.contactInfoContainer]}>
                        <View>
                            <Text style={[styles.contactName, textColor]}>{name}</Text>
                        </View>
                        <View>
                            <Text style={[styles.chatMessage, textColor]}>{message}</Text>
                        </View>
                    </View>
                </View>
            ))}

            <Modal
                animationType='fade'
                transparent={true}
                visible={showModel}
                onRequestClose={closeModal}

            >
                <Pressable onPress={closeModal} style={[{ flex: 1 },trnsback]}>
                    <View >
                        <Pressable onPress={() => { }} style={[styles.modelContainer]} >
                            <View style={[styles.modelView]}>
                                <View style={[styles.abs, { width: 250, height: 30 }]}>
                                    <Text style={[styles.blackColor, { fontSize: 20, textAlign: 'center' }]}>{imgUri.name}</Text>
                                </View>
                                <Image style={[styles.modelImage]} source={{ uri: imgUri.imageurl }} />
                            </View>
                            <View style={[backgroundcolors, styles.modelBottomBar]}>

                                <View style={[styles.modelViewBottomIconsContainer]}>

                                    <Text style={[{ fontSize: 25 }]}>
                                        📞
                                    </Text>
                                    <Text style={[{ fontSize: 25 }]}>
                                        ✉️
                                    </Text>
                                    <Text style={[{ fontSize: 25 }]}>
                                        ❤️
                                    </Text>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                </Pressable>
            </Modal>
        </View>
    )
}

export default ContactList

const styles = StyleSheet.create({
    whiteColor: {
        color: 'white'
    },
    blackColor: {
        color: 'black'
    },
    whiteBackground: {
        backgroundColor: 'white',

    },
    blackBackground: {
        backgroundColor: '#6B7280'
    },
    cardImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    container: {
        padding: 10
    },
    listContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        gap: 20,
        paddingHorizontal: 10,
        marginVertical: 5
    },
    imageWrapper: {
        paddingHorizontal: 5,
        paddingVertical: 5,

    },
    contactName: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 5
    },
    chatMessage: {
        fontSize: 14,
        paddingHorizontal: 5
    },
    contactInfoContainer: {
        flex: 1,
        gap: 5
    },
    modelContainer: {
        flex: 1,
        alignItems: 'center',
        elevation: 5,
    },
    modelView: {
        backgroundColor: 'white',
        width: 250,
        height: 250,
        marginHorizontal: 25,
        marginTop: 75,
        // borderRadius: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    modelImage: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },
    abs: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        backgroundColor: 'rgba(255,255,255,0.4)',
        fontWeight: 'bold'
    },
    modelBottomBar: {
        height: 40,
        width: 250,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    modelViewBottomIconsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 10
    }

});

