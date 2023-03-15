import React, { useEffect } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel'; 
import { FlatList } from 'react-native';

const {width: windowWidth }= Dimensions.get('window'); 
//const windowWidth = Dimensions.get('window').width; 

export const HomeScreen = () => {
  
  const { peliculasEnCine, isLoading } = useMovies();
  //console.log(peliculasEnCine[0]?.title)

  const { top }= useSafeAreaInsets(); 
  if( isLoading){
    return(
      <View style={{flex: 1, justifyContent:'center', alignContent:'center'}}>
        <ActivityIndicator color={"red"} size={100}/>
      </View>
    )
  }
  return (
    <ScrollView>
      <View style={{marginTop:top+20}}>
        {/* <MoviePoster
          movie={peliculasEnCine[0]}
        /> */}
        <View style={{
          height:440
        }}>
          {/* muestra el carrusel de poster de peliculas */}
          <Carousel 
            data={peliculasEnCine } //la informacion viene en peliculasEnCine
            renderItem={ ({item}: any )=> <MoviePoster movie={item }/> }
            sliderWidth={windowWidth }
            itemWidth={300}
            
          />
  
        </View>

        {/* Peliculas Populares */}
        <View
          style={{backgroundColor:'red', height:260}}
        >
          <Text style={{fontSize:30, fontWeight:'bold'}}>Peliculas Populares</Text>
          <FlatList
            data={peliculasEnCine}
            renderItem={({item}: any )=> (
              <MoviePoster movie={item } width={140} height={200}/>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

        </View>   
      </View>
    </ScrollView>
    
    
  )
}
