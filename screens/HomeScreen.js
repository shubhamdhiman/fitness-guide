import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native'

import React from 'react'
import FitnessCards from '../components/FitnessCards'

const HomeScreen = ({navigation}) => {
    return (
        <>
        <StatusBar />
        <ScrollView >
            
            <View style={{ backgroundColor: '#4cc9f0', height: 200, width: '100%', padding: 20 }}>
                <Text style={{textAlign:'center', fontWeight: '900', fontSize: 25, color: 'black' }}>Home Workout</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <View>
                        <Text style={{ textAlign: 'center', fontWeight: '900', color: 'white',fontSize:20 }}>0</Text>
                        <Text style={{ marginTop: 6, fontWeight: '600' }}>WORKOUTS</Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: 'center', fontWeight: '900', color: 'white',fontSize:20 }}>0</Text>
                        <Text style={{ marginTop: 6, fontWeight: '600' }}>KCAL</Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: 'center', fontWeight: '900', color: 'white',fontSize:20 }}>0</Text>
                        <Text style={{ marginTop: 6, fontWeight: '600' }}>MINS</Text>
                    </View>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image
                        style={{
                            width: "90%",
                            height: 120,
                            marginTop: 20,
                            borderRadius: 7,
                        }}
                        source={{
                            uri: "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        }}
                    />
                </View>
            </View>

            <FitnessCards />
        </ScrollView>
        </>

    )
}

export default HomeScreen

const styles = StyleSheet.create({})

// import React from 'react';
// import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
// import FitnessCards from '../components/FitnessCards';

// const HomeScreen = () => {
//     return (
//         <SafeAreaView style={{ flex: 1}}>
//             <View style={{ height: 200, width: '100%', padding: 20, backgroundColor:'orange' }}>
//                 <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'white' }}>Home Workout</Text>
//                 <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
//                     <View>
//                         <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>0</Text>
//                         <Text style={{ marginTop: 6, fontWeight: 'bold' }}>WORKOUTS</Text>
//                     </View>
//                     <View>
//                         <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>0</Text>
//                         <Text style={{ marginTop: 6, fontWeight: 'bold' }}>KCAL</Text>
//                     </View>
//                     <View>
//                         <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>0</Text>
//                         <Text style={{ marginTop: 6, fontWeight: 'bold' }}>MINS</Text>
//                     </View>
//                 </View>
//                 <View style={{ justifyContent: "center", alignItems: "center" }}>
//                     <Image
//                         style={{
//                             width: "90%",
//                             height: 120,
//                             marginTop: 20,
//                             borderRadius: 7,
//                         }}
//                         source={{
//                             uri: "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                         }}
//                     />
//                 </View>
//             </View>

//             <ScrollView>
//                 <FitnessCards />
//             </ScrollView>
//         </SafeAreaView>
//     );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({});
