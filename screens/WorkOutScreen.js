import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable, ScrollView, StatusBar } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const WorkOutScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const { image, exercises } = route.params;
    return (
        <>
            <StatusBar />
            <ScrollView>
                <View style={{ alignItems: 'center' }}>

                    <Image style={{ width: '100%', height: 160, borderRadius: 4 }} source={{ uri: image }} />
                    <AntDesign onPress={() => navigation.goBack()} name="leftcircle" size={30} color="white" style={{ position: 'absolute', top: 20, left: 20 }} />
                    
                    {
                        exercises.map(item => {
                            return <TouchableOpacity onPress={()=>navigation.navigate("Zoom",{image:item.image})} key={item.id} style={{ marginTop: 20,padding:4,borderRadius:8, borderColor: '#4cc9f0', borderWidth: 2, borderStyle: 'solid', margin: 8 }} >
                                <View style={{ width: 280, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>

                                    <Image style={{ width: 90, height: 90}} source={{ uri: item.image }} />
                                    <View style={{ marginLeft: 8 }}>
                                        <Text style={{ fontWeight: '900', fontSize: 15 }}>{item.name}</Text>
                                        <Text >x{item.sets}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        })
                    }
                    <View style={{ alignItems: 'center', marginBottom: 20 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Fit', { exercises })}
                            style={{ alignItems: 'center', marginVertical: 12, justifyContent: 'center', width: 150, borderRadius: 4, paddingHorizontal: 16, paddingVertical: 8, backgroundColor: '#4cc9f0' }}
                        ><Text style={{ fontWeight: '900', fontSize: 25, color: 'white' }}>Start</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </>
    )
}

export default WorkOutScreen

const styles = StyleSheet.create({})