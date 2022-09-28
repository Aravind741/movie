
import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MovieList from './android/components/MovieList';
import Search from './android/components/Search';
import MovieListHeading from './android/components/MovieListHeading';

export default function App() {

  const [movies,setMovies] = useState([]);
  const [searchValue,setSearchValue] = useState('avengers')

const getMovieRequest = async () => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=29fd1127`

  const response = await fetch (url);
  const responseJson= await response.json();


  if(responseJson.Search){
    setMovies(responseJson.Search);
  }
}

useEffect(()=>{
  getMovieRequest(searchValue);
},[searchValue])






  return (
  <SafeAreaView>
   
    <View style={styles.container}>

      <StatusBar style="auto" />

      <View >
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </View>
      
       <View>
       <MovieListHeading  heading="Movies"/>
       </View>


      <View>
      <MovieList movies={movies}/>
      </View>


 
    </SafeAreaView>
  
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 50
    backgroundColor: '#141414',

  },
});
