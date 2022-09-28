
import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import MovieList from './Components/MovieList'
import Search from './Components/Search';
import MovieListHeading from './Components/MovieListHeading';

export default function App() {

  const [movies,setMovies] = useState([]);
  const [searchValue,setSearchValue] = useState('Avengers')

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
    
  <SafeAreaView style={styles.container}>
  

   <View>
       <MovieListHeading  heading="Movies"/>
       </View>
    <View >

     
    <Search searchValue={searchValue} setSearchValue={setSearchValue} movies={movies} setMovies={setMovies}  />
 </View>
 <View style={styles.container}>
     
      <MovieList movies={movies}  />
      </View>


  
    </SafeAreaView>
  
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  paddingTop:40,
    backgroundColor: '#141414',
    
    
  },
 
  
});
