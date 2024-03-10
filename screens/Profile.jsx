import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <View style={{backgroundColor:"black"}}>
      <Text style={{color:"white", fontSize:30}}>Profile</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{height:50, width:200, backgroundColor:"#8b0000"}}>
        <Text style={{color:"white", fontSize:20}}>Welcome!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile