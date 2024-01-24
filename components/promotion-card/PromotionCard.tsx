import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { SIZES } from '@/constants'
import { useRouter } from 'expo-router'


import { styles } from './PromotionCard.style'

const PromotionCard = ({ style }: { style: object }) => {
    const router = useRouter()

    return (
        <ImageBackground source={require('@/assets/images/card-bg.png')} resizeMode='cover' blurRadius={3} style={[style, styles.card]}>
            <Text style={styles.cardTitle}>Birinchi yetkazib berish mutlaqo bepul!</Text>
            <Pressable onPress={() => router.push('/(tabs)/basket')} style={styles.buttonWrapper}>
                <Text style={styles.buttonText}>Buyurtma berish</Text>
            </Pressable>
            <MaterialCommunityIcons name="truck-fast-outline" size={80} color={Colors.lightWhite} style={{ position: 'absolute', bottom: 0, right: SIZES.small, zIndex: 2 }} />
            <View style={styles.circle}></View>
        </ImageBackground>
    )
}

export default PromotionCard