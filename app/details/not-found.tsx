import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const NotFound = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>NotFound</Text>
            <Link href='/(tabs)/home'>Home Page</Link>
        </View>
    )
}

export default NotFound