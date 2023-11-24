import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const RestScreen = () => {
    const [count,setCount] = useState(10)
    const navigate = useNavigation()
    useEffect(()=>{
        const timer = setInterval(()=>{
            
            setCount(prev=>{
                if(prev>0){
                    return prev-1;
                }else{
                    clearInterval(timer)
                    navigate.goBack()
                }
            })
        },1000)
        return ()=>clearInterval(timer)
    },[])

  return (
    <View style={{flex: 1,
    justifyContent:'center',
    alignItems:'center',}}>
        <StatusBar />
      <Text style={{ fontWeight: '900', fontSize: 25, textAlign: 'center', marginTop: 30 }}>Break Time</Text>
      <Text style={{ fontWeight: '900', fontSize: 30, textAlign: 'center', marginTop: 30 }}>{count}</Text>
      <View style={{alignItems:'center'}}>
      <TouchableOpacity onPress={()=>navigate.goBack()}
      style={{marginTop:20, alignItems: 'center', marginVertical: 12, justifyContent: 'center', width: 150, borderRadius: 4, paddingHorizontal: 16, paddingVertical: 20, backgroundColor: '#faa307' }}
      >
            <Text style={{color:'white',fontWeight:'800',fontSize:20}}>End Break</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default RestScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
      },
})