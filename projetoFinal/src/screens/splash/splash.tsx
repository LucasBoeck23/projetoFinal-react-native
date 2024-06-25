import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const splash = () => {
  return (
    <View>
      <LottieView source={require("./../../../assets/image/Splash.json")} autoPlay loop />
    </View>
  )
}

export default splash