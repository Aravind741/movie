
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MovieList from './Components/MovieList'
import Search from './Components/Search';
import MovieListHeading from './Components/MovieListHeading';
import Favourites from './Components/Favourites';

export default function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('Avengers')
  const [addFavourite, setAddFavourite] = useState([]);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=29fd1127`

    const response = await fetch(url);
    const responseJson = await response.json();


    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue])






  return (

    <SafeAreaView style={styles.container}>


      <View>
        <Text style={{ fontSize: 17, padding: 5, color: 'white' }}>
          Search Movies
        </Text>

      </View>
      <View >


        <Search searchValue={searchValue} setSearchValue={setSearchValue} movies={movies} setMovies={setMovies} />
      </View>

      <View>
        <MovieListHeading heading="Movies" />


      </View>

      <View style={styles.movielist}>

        <MovieList movies={movies} addFavourite={addFavourite} setAddFavourite={setAddFavourite} />
      </View>
      <View style={styles.fav}>
        <Text style={{ fontSize: 21, padding: 5, color: 'white' }}>
          Favourites Lists
        </Text>

      

      
        <Favourites addFavourite={addFavourite} setAddFavourite={setAddFavourite} />

      </View>



    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#141414',


  },
  movielist: {
    flex: 1,
  
    backgroundColor: '#141414'


  },
  fav: {
    flex: 1,
    paddingTop:-150,
  },

 

});
