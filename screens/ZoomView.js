import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'

const ZoomView = () => {
    const route = useRoute()
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
         <AntDesign onPress={() => navigation.goBack()} name="leftcircle" size={30} color="black" style={{ position: 'absolute', top: 20, left: 20 }} />
      <Image style={{width:'100%', height:360}} source={{uri:route.params.image}}/>
    </View>
  )
}

export default ZoomView

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})