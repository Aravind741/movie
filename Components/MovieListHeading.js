import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function MovieListHeading(props) {


  return (
    <SafeAreaView >

    <View>
    <Text style={{fontSize:25, padding: 5, color:'white'}}>
      {props.heading}
      </Text>
      
    </View>
    </SafeAreaView>
  )
}
