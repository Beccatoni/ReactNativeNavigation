import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Register = () => {
  return (
    <View style={{backgroundColor:"black"}}>
      <Text style={{color:"white", fontSize:30}}>Register</Text>
      <TouchableOpacity style={{height:50, width:200, backgroundColor:"#8b0000"}}>
        <Text style={{color:"white", fontSize:20}}>Register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register