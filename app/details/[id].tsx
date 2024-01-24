import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import DetailsProduct from '@/components/details-product'

const Details = () => {
    const { id } = useLocalSearchParams()

    return (
        <DetailsProduct id={+id} />
    )
}

export default Details




/*
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useAppSelector } from '@/hooks'
import { IProduct } from '@/constants/types'
import Swiper from 'react-native-swiper'
import DetailsProduct from '@/components/details-product'

const Details = () => {
    const { id } = useLocalSearchParams()
    const { allProducts } = useAppSelector(state => state.products)
    const [otherProducts, setOtherProducts] = useState<IProduct[]>([])
    useEffect(() => {
        if (+id == 1) {
            setOtherProducts(allProducts.filter(p => p.id <= 5).map(p => p))
        }
        else if (+id !== 1 && +id < 5) {
            setOtherProducts(allProducts.filter(p => (p.id < +id) || (p.id <= (+id + 5))))
        } else if (+id >= 5) {
            setOtherProducts(allProducts.filter(p => (p.id < +id && p.id >= +id - 5) || (p.id <= (+id + 5))))
        }
    }, [])


    return (
        <Swiper showsButtons={false} showsPagination={false} loop={false}>
            {otherProducts.map(item => <DetailsProduct product={item} key={item.id} />)}
            <DetailsProduct withFetch={true} id={+id} />
        </Swiper>
    )
}

export default Details
*/