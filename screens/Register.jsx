import { View, Text, TouchableOpacity, Button } from 'react-native'
import React, {useContext} from 'react'
import { PracticeContext } from '../global/PracticeContext'

const Register = ({navigation}) => {
  const {val,
    setVal,
    val1,
    setVal1,
    val2,
    setVal2, } = useContext(PracticeContext)
  return (
    <View style={{backgroundColor:"black"}}>
      <Text style={{color:"white", fontSize:30}}>Register</Text>

      <Text style={{color:"white", fontSize:20}}>{val}</Text>
      <Text style={{color:"white", fontSize:20}}>{val1}</Text>
      <Text style={{color:"white", fontSize:20}}>{val2}</Text>
      <Button title='Increase'
      onPress={()=> {
        setVal(val+1);
        setVal1(val1+1);
        setVal2(val2+1);
      }}
        />
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{height:50, width:200, backgroundColor:"#8b0000"}}>
        <Text style={{color:"white", fontSize:20}}>Register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register