import { SafeAreaView, StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'

import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const FitScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const { exercises } = route.params;
    const [index, setIndex] = useState(0)
    const totalLength = exercises.length;
    const current = exercises[index]

    function handleExcerciseNext() { // handle skip button action
        if (index < totalLength - 1) {
            setTimeout(() => {
                setIndex(prev => prev + 1)
            }, 700)
        }
    }
    function handleExcerciseSkip() { // handle skip button action
        if (index < totalLength - 1) {
            setIndex(prev => prev + 1)
        }
    }
    function handleExcercisePrev() { //handle previous button action
        if (index <= 0) {
            return;
        }
        setIndex(prev => prev - 1)
    }

    return (
        <SafeAreaView>
            <StatusBar />
            <View>
                <Image style={{ width: '100%', height: 300 }} source={{ uri: current.image }} />
                <AntDesign onPress={() => navigation.goBack()} name="leftcircle" size={30} color="black" style={{ position: 'absolute', top: 20, left: 20 }} />
                <Text style={{ fontWeight: '900', fontSize: 20, textAlign: 'center', marginTop: 30 }}>{current.name}</Text>
                <Text style={{ fontWeight: '900', fontSize: 25, textAlign: 'center' }}>x{current.sets}</Text>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <TouchableOpacity
                        style={{ alignItems: 'center', marginVertical: 12, justifyContent: 'center', width: 150, borderRadius: 4, paddingHorizontal: 16, paddingVertical: 12, backgroundColor: '#4cc9f0' }}
                        onPress={() => {
                            handleExcerciseNext()
                            navigation.navigate('Rest')
                        }}><Text style={{ color: 'white', fontWeight: '800', fontSize: 15 }}>Done</Text></TouchableOpacity>
                    <TouchableOpacity
                        style={{ alignItems: 'center', marginVertical: 12, justifyContent: 'center', width: 150, borderRadius: 4, paddingHorizontal: 16, paddingVertical: 12, backgroundColor: '#faa307' }}
                        onPress={() => handleExcerciseSkip()}><Text style={{ color: 'white', fontWeight: '800', fontSize: 15 }}>Skip</Text></TouchableOpacity>
                    <TouchableOpacity
                        style={{ alignItems: 'center', marginVertical: 12, justifyContent: 'center', width: 150, borderRadius: 4, paddingHorizontal: 16, paddingVertical: 12, backgroundColor: '#3d5a80' }}
                        onPress={() => handleExcercisePrev()}><Text style={{ color: 'white', fontWeight: '800', fontSize: 15 }}>Prev</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default FitScreen

const styles = StyleSheet.create({})