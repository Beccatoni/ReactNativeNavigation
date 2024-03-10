import { View, Text, TouchableOpacity, Button } from 'react-native'
import React, {useContext} from 'react'
import { PracticeContext, PracticeProvider } from '../global/PracticeContext'

const Home = ({navigation}) => {
  const {val,
    setVal,
    val1,
    setVal1,
    val2,
    setVal2, darker} = useContext(PracticeContext)
  return (
    <View style={[{backgroundColor: val?"magenta":'crimson'}]}>
      <Text style={{color:"white", fontSize:30}}>Home</Text>
      <Text style={{color:"white", fontSize:20}}>{val}</Text>
      <Text style={{color:"white", fontSize:20}}>{val1}</Text>
      <Text style={{color:"white", fontSize:20}}>{val2}</Text>
      <Button title='Increase'
      onPress={()=> {
        darker();
        // setVal1(val1+1);
        // setVal2(val2+1);
      }}
        />
      <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{height:50, width:200, backgroundColor:"#8b0000"}}>
        <Text style={{color:"white", fontSize:16}}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home