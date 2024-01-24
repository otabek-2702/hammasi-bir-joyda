import { View, Text, TextInput, Pressable } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'
import React, { useRef } from 'react'
import BottomModal from '../bottom-modal'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import Colors from '@/constants/Colors'

import { styles } from './CustomHeader.styles'

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null)

  const openModal = () => {
    bottomSheetRef.current?.present()
  }

  return (
    <View style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.searchWrapper}>
          <Feather name="search" size={24} color={Colors.black} />
          <TextInput style={styles.searchInput} placeholder='Mahsulot nomini kiriting' />
        </View>
        <Pressable style={styles.filterWrapper} onPress={openModal}>
          <Ionicons name='options' size={26} color={Colors.black} />
        </Pressable>
      </View>
      <BottomModal ref={bottomSheetRef} />
    </View>
  )
}

export default CustomHeader