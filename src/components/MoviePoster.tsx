import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInterface'
import { RootStackParams } from '../navigation/Navigation';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}
type DetailScreenNavigationProp = StackNavigationProp<RootStackParams, 'DetailScreen'>
export const MoviePoster = ({ movie, height=420, width=300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    // const {navigation} = useNavigation<StackScreenProps<any,any>>();
    const navigation = useNavigation<DetailScreenNavigationProp>()

    // const navigation = useNavigation();    

    //console.log(movie.poster_path);
  return (
    <TouchableOpacity 
        onPress={()=>navigation.navigate('DetailScreen', movie)}
        activeOpacity={0.8}
        style={{
            width,
            height,
            marginHorizontal: 8
        }
    }>
        {/* <Text>{ movie.title}</Text> */}
        <View style={styles.imageContainer}>
            <Image
                source={{  uri }}
                style={styles.image}
            />
        </View>
        
    </TouchableOpacity>
    
  )
}
const styles = StyleSheet.create({
    image:  {
        flex:1,
        borderRadius:20
    },
    imageContainer:{
        flex:1,
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10 ,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 10,
    }
})