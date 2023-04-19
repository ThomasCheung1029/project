import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const MenuContainer = ({title, type, setType}) => {

    const handlePress = () => {
        setType(title.toLowerCase())
    }

  return (
    <TouchableOpacity className = "items-center justify-center space-y-2" onPress={handlePress}>
        <View className = {`w-30 h-[30px] border-black border-l-2 border-r-2 border-t-4 rounded-full  items-center justify-center px-4 mt-4
         ${type===title.toLowerCase()? "bg-[#609966]": ""}`}>
        </View>
        <Text className=" text-[#617143] text-xl font- semibold">{title}</Text>
    </TouchableOpacity>
  )
}

export default MenuContainer