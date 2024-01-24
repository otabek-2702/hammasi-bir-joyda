import { View, Text, ScrollView, RefreshControl } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const Error = ({ error, refetch, isLoading }: { error: string, refetch: () => void, isLoading: boolean }) => {
    return (
        <ScrollView
            refreshControl={<RefreshControl
                refreshing={isLoading}
                onRefresh={() => refetch()}

                colors={['#99E6E6', '#6666FF']}
            />}
            contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                marginTop: 50,
            }}
            style={{
                backgroundColor: '#fff',
            }}>
            <Text style={{ marginTop: 15, fontSize: 20, fontWeight: 'bold', color: 'red', textAlign: 'center' }}>Xatolik yuz berdi {"\n"}{error}</Text>
            <Text style={{ marginTop: 15, fontSize: 20, fontWeight: 'bold' }}>Yangilash uchun pastga torting <AntDesign name="arrowdown" size={24} color="black" /></Text>
        </ScrollView>
    )
}

export default Error