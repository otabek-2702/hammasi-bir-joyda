import { View } from 'react-native'
import React from 'react'
import { useAppSelector } from '@/hooks'
import ProductCard from '@/components/product-card'

import { styles } from './Products.style'

const Products = () => {
    const { allProducts } = useAppSelector(state => state.products)

    return (
        <View style={styles.container}>
            {allProducts.map(product => (
                <ProductCard product={product} key={product.id} />
            ))}
        </View>
    )






    // <FlatList
    //     contentContainerStyle={styles.container}
    //     scrollEnabled={false}
    //     data={allProducts}
    //     keyExtractor={(item) => item.id.toString()}
    //     renderItem={({ item }) => {
    //         return (
    //             <View style={styles.card}>
    //                 <Image resizeMode='contain' source={{ uri: item.image }} style={styles.cardImg} />
    //                 <View style={styles.cardTextBox}>
    //                     <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>
    //                 </View>
    //             </View>
    //         )
    //     }}
    // />

}

export default Products