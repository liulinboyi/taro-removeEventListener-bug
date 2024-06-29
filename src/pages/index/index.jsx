import { View, Text } from '@tarojs/components'
import { useState } from 'react'

export default function Index() {
  const [flag, setFlag] = useState(true)

  return (
    <View className='index'>
      <View className='wrapper'>
        {
          flag ?
            <Text className='box' onClick={() => setFlag(prev => !prev)}>Demo {flag ? '1' : '0'}</Text> :
            <Text className='box'>Other {flag ? '1' : '0'}</Text>
        }
      </View>
    </View>
  )
}
