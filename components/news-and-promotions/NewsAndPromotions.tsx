import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

import { styles } from './NewsAndPromotions.style'
import PromotionCard from '../promotion-card'

const NewsAndPromotions = () => {


    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardWrapper}>
            {/* <Image source={require('@/assets/images/promotion.png')} style={styles.cardImage} /> */}
            <PromotionCard style={styles.card} />
            <View style={styles.card}>
                <Image source={require('@/assets/images/promotion.png')} style={styles.cardImage} />
            </View>
            <View style={styles.card}>
                <Image source={require('@/assets/images/sale.jpg')} style={styles.cardImage} />
            </View>
        </ScrollView>
    )
}

export default NewsAndPromotions