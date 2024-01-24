import { View, Text, Image } from 'react-native'
import React from 'react'
import { IProduct } from '@/constants/types'
import { ScrollView } from 'react-native-gesture-handler'
import { useFetch } from '@/hooks'
import { Stack, useRouter } from 'expo-router'
import { AntDesign, Entypo, FontAwesome5, Fontisto } from '@expo/vector-icons'
import Swiper from 'react-native-swiper'
import Error from '../error-text'
import Colors from '@/constants/Colors'

import { styles } from './DetailsProduct.style'

interface IDetailsProductProps {
    id: number
}

const DetailsProduct = ({ id }: IDetailsProductProps) => {
    const router = useRouter()
    const { data, isLoading, error, refetch } = useFetch<IProduct>(`products/${id}`)
    const { data: otherProducts, isLoading: otherProductsLoading, error: otherProductsError, refetch: otherProductsRefetch } = useFetch<IProduct[]>(`products/`)
    if (error) {
        return <Error error={error} refetch={refetch} isLoading={isLoading} />
    }

    return (
        <>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Stack.Screen
                    options={{
                        title: data?.category ?? '',
                        headerLeft: () => <Entypo onPress={router.back} name="chevron-left" size={26} color={Colors.black} />,
                        headerRight: () => <AntDesign name="hearto" size={22} color={Colors.black} />,
                        headerTitleAlign: 'center',
                        headerShown: true
                    }}
                />
                {!isLoading && (
                    <>
                        <Swiper
                            style={styles.swiperWrapper}
                            paginationStyle={{ bottom: 8 }}
                            loop={false}
                            showsPagination
                            activeDotColor='#00dac6'
                            containerStyle={{ paddingBottom: 12, }}
                        >
                            <View style={styles.imageWrapper}>
                                <Image resizeMode='contain' source={{ uri: data?.image }} style={styles.productImage} />
                            </View>

                            <View style={styles.imageWrapper}>
                                <Image resizeMode='contain' source={{ uri: data?.image }} style={styles.productImage} />
                            </View>

                            <View style={styles.imageWrapper}>
                                <Image resizeMode='contain' source={{ uri: data?.image }} style={styles.productImage} />
                            </View>
                        </Swiper>

                        <View style={styles.detailsBox}>
                            <Text style={styles.title}>{data?.title}</Text>
                            <View style={styles.ratingBox}>
                                {(data?.rating?.rate ?? 1) < 2.5 ? <FontAwesome5 name="star" size={20} color="#F8C879" />
                                    : (data?.rating?.rate ?? 1) < 3.5 ? <FontAwesome5 name="star-half-alt" size={20} color="#F8C879" />
                                        : <Fontisto name="star" size={20} color="#F8C879" />}
                                <Text style={styles.rating}>{data?.rating.rate}</Text>
                                <Text style={styles.ratingCount}>{data?.rating.count} (views)</Text>
                            </View>
                            <Text style={styles.description}>{data?.description}</Text>
                        </View>
                    </>
                )}
            </ScrollView>
            <View style={styles.detailsBottom}>
                <View style={styles.bottomLeft}>
                    <Text style={styles.leftPriceText}>Price: </Text>
                    <Text style={styles.leftPrice}>{data?.price} uzs</Text>
                </View>
                <View style={styles.bottomRight}>
                    <View style={styles.buttonWrapper}>
                        <Text style={styles.buttonText}>Savatchaga qo'shish</Text>
                    </View>
                </View>
            </View>
        </>
        /*
            <FontAwesome5 name="star-half-alt" size={24} color="black" /> bosh
            <FontAwesome5 name="star" size={24} color="black" />
            <Fontisto name="star" size={24} color="black" /> toliq
        */
    )
}

export default DetailsProduct