import { View, Text,Image, ScrollView } from 'react-native'
import React from 'react'

export default function MovieList(props) {


  return (
    <View>
      
      <ScrollView>
        {props.movies.map((movie,index)=>(
          <Image 
           style={{width: 180, height: 280,margin:20}}
          source={{uri:movie.Poster }} />

        ))}
      
      </ScrollView>
    </View>
  )
}