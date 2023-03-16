import { ActivityIndicator, Dimensions, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel'; 
import { HorizontalSlider } from '../components/HorizontalSlider';

const {width: windowWidth }= Dimensions.get('window'); 
//const windowWidth = Dimensions.get('window').width; 

export const HomeScreen = () => {
  
  const { nowPlaying, popular, topRated,upcoming, isLoading } = useMovies();
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
            data={nowPlaying } //la informacion viene en peliculasEnCine
            renderItem={ ({item}: any )=> <MoviePoster movie={item }/> }
            sliderWidth={windowWidth }
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
  
        </View>
          <HorizontalSlider title="Populares" movies={popular}/>
          <HorizontalSlider title="Mejor Calificadas" movies={topRated}/>
          <HorizontalSlider title="Proximamente" movies={upcoming}/>
        </View>
    </ScrollView>
    
    
  )
}
