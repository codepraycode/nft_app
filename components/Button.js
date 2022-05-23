import { TouchableOpacity, View, Text, Image } from 'react-native'
import React from 'react'
import {COLORS, SIZES , FONTS, SHADOWS} from '../constants';

export const CircleButton = ({imgUrl,handlePress, ...props}) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      style={{
        width:40,
        height:40,
        backgroundColor:COLORS.white,
        position:"absolute",
        borderRadius:SIZES.extraLarge,
        alignItems:'center',
        justifyContent:'center',
        ...SHADOWS.light,
        ...props
      }}
    >
      <Image 
        source={imgUrl}
        resizeMode="contain"
        style={{width:24, height:24}}
      />
    </TouchableOpacity>
  )
}


export const RectButton = ({minWidth, fontSize, handlePress,...props})=>{
  return(
    <TouchableOpacity 
      onPress={handlePress}
      style={{
        backgroundColor:COLORS.primary,
        borderRadius:SIZES.extraLarge,
        minWidth,
        padding:SIZES.small,
        ...props
      }}
    >
      <Text
        style={{
          fontFamily:FONTS.semiBold,
          fontSize,
          color:COLORS.white,
          textAlign:'center'
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  )
}