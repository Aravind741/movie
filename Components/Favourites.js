import { StyleSheet, View, Image,Text, ScrollView, SafeAreaView, TouchableOpacity, Button,TouchableHighlight} from 'react-native';
import React from 'react'

export default function Favourites(props) {

    const removeFavourites = imdbID => {
        props.addFavourite.forEach((item, index) => {
            if (item.imdbID === imdbID) {
              props.setAddFavourite( props.addFavourite.splice(index,1))
                item.count = 1;
  
               
  
            }
        })
  
        props.setAddFavourite([...props.addFavourite]);
    }
  
        


  return (
    <SafeAreaView>
    <View style={{height:240, width:390, marginLeft:5, borderWidth:0.5, borderColor:'#dddddd', backgroundColor:"black"}}>
   
   <ScrollView horizontal={true} >
    {props.addFavourite.map((addfav, index) => 
    <TouchableOpacity  style={styles.buttonStyle}>
    <View style={styles.imagecontainer}>
    
        <ScrollView horizontal={true} >
        <TouchableOpacity  style={styles.buttonStyle}>
            <Image
               style={{flex:1, height:null, width:150, resizeMode: 'cover'}}
        source={{uri:addfav.Poster}} 
      />

</TouchableOpacity>
     </ScrollView>
     
     </View>
     <TouchableOpacity  style={styles.buttonStyle}>
     <TouchableHighlight onPress={() =>removeFavourites(addfav.imdbID)}>
        <View style={styles.button}>
          <Text>Remove To Favourites</Text>
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
    paddingTop:10
    
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