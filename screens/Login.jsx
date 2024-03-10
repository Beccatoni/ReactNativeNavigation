import { View, Text, TouchableOpacity } from 'react-native'
import React,  { useState, useContext }from 'react'
import { TextInput } from 'react-native-paper'
import Context from '../components/Context'

const Login = ({navigation}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // const {setDark} = useContext(Context)

   
  return (
    <View style={{backgroundColor:"black"}}>
      <Text style={{color:"white", fontSize:30}}>Login</Text>
      <TextInput
          placeholder="e.g johndoe@gmail.com"
          mode="outlined"
          textColor="white"
          style={{ backgroundColor: "transparent" }}
          value={username}
          theme={{
            colors: {
              primary: "white",
              placeholder: "white",
              text: "white",
              underlineColor: "transparent",
            },
          }}
          
          left={<TextInput.Icon icon={"email-outline"} color="grey" />}
        />
        <TextInput
          placeholder="password"
          mode="outlined"
          textColor="white"
          value={password}
          style={{ backgroundColor: "transparent" }}
          theme={{
            colors: {
              primary: "white",
              placeholder: "white",
              text: "white",
              underlineColor: "transparent",
            },
          }}
          left={<TextInput.Icon icon={"lock-outline"} color="grey" />}
        />
      <TouchableOpacity style={{height:50, width:200, backgroundColor:"#8b0000"}}>
        <Text style={{color:"white", fontSize:16}}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login