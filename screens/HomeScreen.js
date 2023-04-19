import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native';






const HomeScreen = () => {

  const Navigation = useNavigation();

  useLayoutEffect(()=>{
    Navigation.setOptions({
      headerShown: false, 
    })
  },[]);

  return (
    <SafeAreaView className = "bg-[#BBD6B8] flex-1 relative">
      
      <View className ="px-6 mt-4 space-y-1">
      <Text className = "text-[#617143] text-[34px] font-semibold">Choose</Text>
        <Text className = "text-yellow-600  text-[34px] font-semibold">your premium trip here</Text>
        
      </View>

      <View className="flex-row px-8 mt-6 items-center space-x-4">
        
      <View>
        <Animatable.Image        
        animation="fadeIn"
        easing="ease-in-out" 
        source={require('../assets/view.png')} className = "w-[480px] h-20 rounded-full items-center justify-center"/>

        </View>
  
      </View>
      
      <View className = "w-[400px] h-[100px] bg-[#609966] rounded-full absolute bottom-72" ></View>
      <View className = "w-[400px] h-[100px] bg-[#AEC2B6] rounded-full absolute bottom-56" ></View>
      <View className = "w-[400px] h-[100px] bg-[#DBE4C6] rounded-full absolute bottom-36" ></View>
      <View className = "w-[400px] h-[100px] bg-white rounded-full absolute bottom-16" ></View>

      <View className="flex-1 relative items-center justify-center">
        
        <Animatable.Image 
        animation="fadeIn"
        easing="ease-in-out"
        source={require('../assets/hero.png')} className = "w-full h-full object-cover mt-24"/>
        
        
        <View className = "w-36 h-[72px] right-2 top-10 border-[#94AF9F] border-l-2 border-r-2 border-t-4 rounded-full absolute items-center justify-center"> 
        <TouchableOpacity
        onPress={() => Navigation.navigate("Discover")}>
          <Animatable.View className="w-32 h-[64px]  items-center justify-center rounded-full bg-[#94AF9F] ">
            <Text className = "text-[32px] text-[#40513B] font-semibold">Start</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
      
      </View>




    </SafeAreaView>
  )
}

export default HomeScreen