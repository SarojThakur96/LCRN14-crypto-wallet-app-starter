import React from 'react'
import { View, Text,Image } from 'react-native'
import { COLORS, FONTS } from '../constants'

const TabIcon = ({focused,icon,iconStyle,isTrade,label}) => {
      
    if(isTrade){
         return (
            <View
              style={{
                  justifyContent:'center',
                  alignItems:'center',
                  backgroundColor:COLORS.black,
                  height:60,
                  width:60,
                  borderRadius:30
              }}
            >
                <Image
                 source={icon}
                 resizeMode='contain'
                 style={{
                     ...iconStyle,
                     tintColor: COLORS.white,

                 }}
                />
               <Text
                style={{
                      color:COLORS.white,
                      ...FONTS.h4
                    }}
               >{label}</Text>
            </View>
         )
    }

    else{
        return (
            <View
              style={{
                  justifyContent:'center',
                  alignItems:'center'
              }}
            >
                <Image
                  source={icon}
                  resizeMode='contain'
                  style={{
                      height: 25,
                      width: 25,
                      tintColor: focused ? COLORS.white : COLORS.secondary,
                    //   ...iconStyle 
                  }}
                />
                <Text
                  style={{
                      color: focused ? COLORS.white : COLORS.secondary,
                      ...FONTS.h4
                  }}
                >
                    {label}
                </Text>
            </View>
        )
    }

}

export default TabIcon
