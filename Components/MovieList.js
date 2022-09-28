
import { StyleSheet, View, Image, ScrollView, SafeAreaView} from 'react-native';
import React from 'react'

export default function MovieList(props) {
  return (
   <SafeAreaView>
    <View style={{height:200, width:390, marginLeft:5, borderWidth:0.5, borderColor:'#dddddd', backgroundColor:"black"}}>
   
   <ScrollView horizontal={true} >
    {props.movies.map((movie, index) => 
    <View style={{height:200, width:130, marginLeft:10, borderWidth:0.5, borderColor:'#dddddd'}}>
   
        <ScrollView horizontal={true} >
        
            <Image
               style={{flex:1, height:null, width:130, resizeMode: 'cover'}}
        source={{uri:movie.Poster}} 
      />
     
     </ScrollView>
     </View>
     )}
       </ScrollView>
     </View>
     </SafeAreaView>
      
       
    
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    paddingTop: 50
    },
  });
  