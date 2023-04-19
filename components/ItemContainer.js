import { View, Text, Image  } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ItemContainer = ( {imageSrc, title, location, data}) => {
    const navigation = useNavigation();
    
  return (
    <TouchableOpacity 
    onPress = {() => navigation.navigate("ItemScreen", {param: data})}
    className = "rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[172px] my-2">
    <Image source = {{uri: imageSrc}} className = "w-full h-40 rounded-md object-cover"></Image>
    <Text className = "text-[#428288] text-[18px] font-bold">
        
        {title?.length > 14 ?`${title.slice(0,14)}..`:title}
    </Text>
    
    <View className = "flex-row items-center space-x-1">
    <FontAwesome name="map-marker" size={20} color="black" />
    <Text className = "text-[#428288] text-[14px] font-bold">
        
        {location?.length > 18 ?`${location.slice(0,14)}..`:location}
    </Text>
    </View>

    </TouchableOpacity>
  )
}

export default ItemContainer