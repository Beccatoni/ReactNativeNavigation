import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={{backgroundColor:"black"}}>
      <Text style={{color:"white", fontSize:30}}>Login</Text>
      <TouchableOpacity style={{height:50, width:200, backgroundColor:"#8b0000"}}>
        <Text style={{color:"white", fontSize:16}}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login