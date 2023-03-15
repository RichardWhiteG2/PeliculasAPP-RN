import React from 'react'
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';

interface Props{
    title?:String;
    movies: Movie[]
}

export const HorizontalSlider = ({title,movies}: Props) => {
  return(
    <View style={{
        
        // sino se envia el titulo sera 220 de altura
        height: (title)?260 : 220 
    }}>

        {/* si viene el titulo lo muestrs  */}

        {
            title && <Text style={{fontSize:30, fontWeight:'bold', marginLeft: 10, marginBottom:10}}>{title}</Text>
        }
        <FlatList
            data={movies}
            renderItem={({item}: any )=> (
              <MoviePoster movie={item } width={140} height={200}/>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    </View>   
  )
  
}
