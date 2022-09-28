import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function Search(props) {


  return (
    <View>
      <TextInput  style={{ height: 40, borderColor: 'white',color:'white',marginTop:140, borderWidth: 2,width:400,textAlign:'center' }}
				placeholder='Type to search movies..'
        value={props.value}
        onChange={(event) =>props.setSearchValue(event.target.value)}

      ></TextInput>
    </View>
  )
}