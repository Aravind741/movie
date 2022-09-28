import {  StyleSheet, View, Text, TextInput, SafeAreaView} from 'react-native'
import React from 'react'


export default function Search(props) {


  return (
    <SafeAreaView>
            <View  >
      <TextInput  style={{ height: 50, borderColor: 'red', borderWidth: 2,width:380, textAlign:'center',backgroundColor:'white',marginLeft:5,borderRadius:5 }}
				placeholder='Type to search movies..'
       
        onChangeText={(val) => props.setSearchValue(val)}
         />
       

     
    </View>

    </SafeAreaView> 

  )
}

