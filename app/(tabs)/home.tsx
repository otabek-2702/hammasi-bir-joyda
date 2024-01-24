import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch, useFetch } from '@/hooks'
import { SIZES } from '@/constants'
import { RefreshControl, ScrollView } from 'react-native-gesture-handler'
import NewsAndPromotions from '@/components/news-and-promotions'
import { IProduct } from '@/constants/types'
import { setAllProducts } from '@/store/slices/products.slice'
import Products from '@/components/products'
import Colors from '@/constants/Colors'
import Error from '@/components/error-text'

const Home = () => {
    const { data, isLoading, error, refetch } = useFetch<IProduct[]>('products/')
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(setAllProducts(data ?? []))
    }, [data])

    if (error) {
        return <Error error={error} refetch={refetch} isLoading={isLoading} />
    }

    return (
        <View style={styles.safeAreaView} >
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl
                    refreshing={isLoading}
                    onRefresh={() => refetch()}
                    colors={['#99E6E6', '#6666FF']}
                />}>
                {/* News */}
                <Text style={styles.newsHeader}>Yangilik va Aksiyalar:</Text>
                <NewsAndPromotions />

                {/* Products */}
                <Text style={[styles.newsHeader, { marginTop: SIZES.medium }]}>Mahsulotlar:</Text>
                {data && <Products />}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {
        paddingTop: 60,
        flex: 1,
        backgroundColor: Colors.lightGrey
    },
    container: {
        paddingHorizontal: SIZES.small
    },

    // news
    newsHeader: {
        fontSize: SIZES.large,
        fontWeight: 'bold',
        color: Colors.black
    }
})

export default Home