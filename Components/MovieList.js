
import { StyleSheet, View, Image,Text, ScrollView, SafeAreaView, TouchableOpacity, Button,TouchableHighlight, Alert} from 'react-native';
import React from 'react'

export default function MovieList(props) {
  
  const addFavourites =(movie) => { 

    
    const newobjects ={
      Poster : movie.Poster,
      Title : movie.Title,
      imdbID: movie.imdbID
    }
    
    props.setAddFavourite([...props.addFavourite,newobjects])

  } 
  
  
 
    
   
  


  return (
    <SafeAreaView>
    <View style={{height:240, width:390, marginLeft:5, borderWidth:0.5, borderColor:'#dddddd', backgroundColor:"black"}}>
   
   <ScrollView horizontal={true} >
    {props.movies.map((movie, index) => 
    <TouchableOpacity  style={styles.buttonStyle}>
    <View style={styles.imagecontainer}>
    
        <ScrollView horizontal={true} >
        <TouchableOpacity  style={styles.buttonStyle}>
            <Image
               style={{flex:1, height:null, width:150, resizeMode: 'cover'}}
        source={{uri:movie.Poster}} 
      />

</TouchableOpacity>
     </ScrollView>
     
     </View>
     <TouchableOpacity  style={styles.buttonStyle}>
     <TouchableHighlight onPress={() =>addFavourites(movie)}>
        <View style={styles.button}>
          <Text>Add To Favourites</Text>
        </View>
        </TouchableHighlight>
        </TouchableOpacity>
        </TouchableOpacity>

     
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
  imagecontainer: {
    height:200,
     width:150,
     borderWidth:1,
     borderColor:'#dddddd',
     position:'relative',
  
     
  },
  buttonStyle: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#141414',
    width: 150
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});