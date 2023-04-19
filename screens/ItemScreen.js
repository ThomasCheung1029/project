import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ItemScreen = ({route}) => {
    const Navigation  = useNavigation();

    const data = route?.params?.param;

    useLayoutEffect(()=>{
        Navigation.setOptions({
          headerShown: false, 
        })
      },[]);


  return (
    <SafeAreaView className = "bg-[#BBD6B8] flex-1 relative">
    <ScrollView className = "flex-1 px-4 py-6">
    <View className = "relative bg-[#BBD6B8] top-3">
      <Image source={{
                        uri: data?.photo?.images?.large?.url?
                        data?.photo?.images?.large?.url:
                        "https://aubankaitis.files.wordpress.com/2014/04/search_600.jpg?w=300&resize=300%2C298"
                    }} 
                    className = "w-full h-72 object-cover rounded-2xl"/>

        <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">  
            <TouchableOpacity onPress={()=>Navigation.navigate("Discover")}
            className = "w-10 h-10 rounded-md items-center justify-center bg-[#BBD6B8]">
            <Entypo name="chevron-left" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity className = "w-10 h-10 rounded-md items-center justify-center bg-[#BBD6B8]">
            <AntDesign name="heart" size={24} color="black" />
            </TouchableOpacity>
        </View>

        <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
            <View className="flex-row space-x-2 items-center"> 
            <Text className="text-[12px] font-bold text-gray-100">
                    {data?.price_level}
            </Text>
            <Text className="text-[24px] font-bold bg-black text-gray-100">
                    {data?.price}
            </Text>
            </View>
        </View>
    </View>

    <View className = "mt-6">
    <Text className="text-[24px] font-bold text-[#617143]">
                    {data?.name}
    </Text>
    <FontAwesome name="map-marker" size={20} color="black" />
    <Text className="text-[20px] font-bold text-[#617143]">
                    {data?.location_string}
    </Text>

    </View>

    <View className="mt-4 flex-row items-center justify-between">
  {data?.rating && (
    <View className="flex-row items-center space-x-2">
        <View className = "w-24 h-24  bg-red-100 items-center justify-center shadow-md">
      <Text className="text-[24px] font-bold text-[#617143]">Rating</Text>
      <Text className="text-[20px] text-[#617143]">{data?.rating}</Text>
      </View>
    </View>
  )}

{data?.price_level && (
    <View className="flex-row items-center space-x-2">
        <View className = "w-24 h-24  bg-red-100 items-center justify-center shadow-md">
      <Text className="text-[24px] font-bold text-[#617143]">Price level</Text>
      <Text className="text-[20px] text-[#617143]">{data?.price_level}</Text>
      </View>
    </View>
  )}

{data?.open_now_text && (
    <View className="flex-row items-center space-x-2">
        <View className = "w-24 h-24  bg-red-100 items-center justify-center shadow-md">
      <Text className="text-[24px] font-bold text-[#617143]">Open?</Text>
      <Text className="text-[20px] text-[#617143]">{data?.open_now_text}</Text>
      </View>
    </View>
  )}

{data?.description && (

      <Text className="text-[#617143]">{data?.price_level}</Text>

  )} 
</View>

<View className="space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">


</View>

{data?.phone && (
    <View className="flex-row items-center space-x-2">
        <View className = "items-center flex-row space-x-6">
        <AntDesign name="phone" size={24} color="black" />
      <Text className="text-[20px] text-[#617143]">{data?.phone}</Text>
      </View>
    </View>
  )}


{data?.address && (
    <View className="flex-row items-center space-x-2">
        <View className = "items-center flex-row space-x-6">
        <Entypo name="address" size={24} color="black" />
      <Text className="text-[20px] text-[#617143]">{data?.address}</Text>
      </View>
    </View>
  )}

{data?.email && (
    <View className="flex-row items-center space-x-2">
        <View className = "items-center flex-row space-x-6">
        <MaterialIcons name="email" size={24} color="black" />
      <Text className="text-[20px] text-[#617143]">{data?.email}</Text>
      </View>
    </View>
  )}





    </ScrollView>
        

    </SafeAreaView>

  )
}

export default ItemScreen