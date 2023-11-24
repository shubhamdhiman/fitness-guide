import { Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import fitness from '../data/fitness'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const FitnessCards = () => {
    const navigation = useNavigation()
  return (
    <View style={{marginTop:80, marginBottom:40}}>
      {
        fitness.map((item)=>{
            return <Pressable onPress={()=>navigation.navigate('Workout',{
                image:item.image,
                exercises:item.excersises,
                id:item.id
            })} key={item.id} style={{ alignItems:'center',margin:10}}>
                <Image style={{width:'90%',height:140,borderRadius:4}} source={{uri:item.image}} />
                <Text style={{position:'absolute',color:'white',top:10,left:40,fontSize:18,fontWeight:'bold'}}>{item.name}</Text>
                <MaterialCommunityIcons name="lightning-bolt" style={{position:'absolute',bottom:15,left:40}} size={24} color="white" />
            </Pressable>
        })
      }
    </View>
  )
}

export default FitnessCards

const styles = StyleSheet.create({})