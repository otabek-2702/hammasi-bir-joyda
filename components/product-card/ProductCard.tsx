import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { IProduct } from '@/constants/types'

import { styles } from './ProductCard.style'
import Colors from '@/constants/Colors'

interface IProductCardProps {
    product: IProduct
}

const ProductCard = ({ product }: IProductCardProps) => {
    const router = useRouter()

    return (
        <Pressable style={styles.card} onPress={() => router.push(`/details/${product.id}`)}>
            <View style={styles.imageWrapper}>
                <Image resizeMode='contain' source={{ uri: product.image }} style={styles.cardImg} />
            </View>
            <View style={styles.cardTextBox}>
                <Text style={styles.cardTitle} numberOfLines={1}>{product.title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Text style={styles.cardPrice}>{product.price} uzs</Text>
                </View>
            </View>
            <Pressable style={styles.cardPlusButton}>
                <AntDesign name="hearto" size={22} color={Colors.lightGrey} />
            </Pressable>
        </Pressable>
    )
}

export default ProductCard