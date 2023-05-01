import { View, Text, Image,ActivityIndicator } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { ScrollView } from 'react-native';
import MenuContainer from '../components/MenuContainer';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { getPlacesData } from '../api';
import ItemContainer from '../components/ItemContainer';


const Discover = () => {
    const Navigation = useNavigation();

    const [type,setType] = useState("restaurants")
    const [isLoading,setisLoading] = useState(false)
    const [mainData,setmainData] = useState([])
    const [bl_lat, setbl_lat] = useState(null)
    const [bl_lng, setbl_lng] = useState(null)
    const [tr_lat, settr_lat] = useState(null)
    const [tr_lng, settr_lng] = useState(null)
    
    useLayoutEffect(()=>{
      Navigation.setOptions({
        headerShown: false, 
      })
    },[]);    

    useEffect(() =>{
        setisLoading(true);
        getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then(data => {
            setmainData(data);
            setInterval(() => {
                setisLoading(false)
            }, 2000)
        })

    },[bl_lat, bl_lng, tr_lat, tr_lng, type])


  return (
    <SafeAreaView className = "bg-[#BBD6B8] flex-1 relative">
        <View className="flex-row items-center justify-between ">
            <View className ="px-6 mt-4 space-y-1">
                <Text className = "text-[#617143] text-[30px] font-semibold">TripSearcher.com</Text>
                <Text className = "text-[#0B646B] text-[20px]">Discover the world</Text>        
            </View>
            <View className="w-16 h-16 bg-green-400 rounded-md items-center justify-center right-8 top-2">
            <Animatable.Image 
                animation="fadeIn"
                easing="ease-in-out"
                source={require('../assets/cover.png')} className = "w-full h-full object-cover rounded-md"/>
            </View>
        </View>
        <View className = "flex-row item-center  mx-4 rounded-xl py-1 px-4 mt-6">
        <Text className = "text-[#0B646B] text-[20px] py-2 ">Keyword: </Text>
        <GooglePlacesAutocomplete
            GooglePlacesSearchQuery={{fields: "geometry"}}
      placeholder='Search'
      fetchDetails = {true}

      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(details?.geometry?.viewport);
        setbl_lat(details?.geometry?.viewport?.southwest?.lat)
        setbl_lng(details?.geometry?.viewport?.southwest?.lng)
        settr_lat(details?.geometry?.viewport?.northeast?.lat)
        settr_lng(details?.geometry?.viewport?.northeast?.lng)
      }}
      query={{
        key: 'AIzaSyB8rjb0-AL2pKKFTJDSZSAKW_iRV_SQvm8',
        language: 'en',
      }}
    />
        </View>
            
        <View>
            <ScrollView style={{ height: 1000 }}>
                <View className = "flex-row items-center justify-between py-4 px-4 mt-2">

                <MenuContainer
                        key={"restaurants"}
                        title = "Restaurants"
                        type={type}
                        setType = {setType}
                    />
                <MenuContainer
                        key={"attractions"}
                        title = "Attractions"
                        type={type}
                        setType = {setType}
                    />   

                <MenuContainer
                        key={"hotels"}
                        title = "Hotels"
                        type={type}
                        setType = {setType}
                    />                                                 
                </View>

                <View>
                    <View className="flex-row items-center py-2 px-2 mt-2">
                        <Text className='text-2xl text-[#617143]'>Suggestion</Text>

                    </View>
                </View>

            {isLoading? (<View className = "flex-1 items-center justify-center">

            <ActivityIndicator
               color = '#bc2b78'
               size = "large"/>
            </View>):(                
                <View className="flex-wrap flex-row items-center justify-evenly px-4 mt-4">
                    {mainData?.map((data,i) => 
                    <ItemContainer 
                    key={i} 
                    imageSrc = {
                        data?.photo?.images?.medium?.url?
                        data?.photo?.images?.medium?.url:
                        "https://aubankaitis.files.wordpress.com/2014/04/search_600.jpg?w=300&resize=300%2C298"
                    }
                     title = {data?.name }
                     location = {data?.location_string}
                     data = {data}
                     />)
                     }
                     

                    
                </View>
                )}

            </ScrollView>
            
        </View>
        
    </SafeAreaView>
  )
}

export default Discover