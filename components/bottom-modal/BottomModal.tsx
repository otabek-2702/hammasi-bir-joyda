import { View, StyleSheet, Text } from 'react-native'
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet'
import React, { forwardRef, useCallback, useMemo } from 'react'
import { SIZES } from '@/constants'

export type Ref = BottomSheetModal

const BottomSheet = forwardRef<Ref>((props, ref) => {
    const snapPoints = useMemo(() => ['60%', '80%'], [])
    const renderBackdrop = useCallback((props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, [])
    const { dismiss } = useBottomSheetModal()


    return (
        <View>
            <BottomSheetModal
                backgroundStyle={{ borderRadius: SIZES.xLarge, backgroundColor: '#FCF8FF' }}
                handleIndicatorStyle={{ width: 60, justifyContent: 'center', borderColor: '#000' }}

                overDragResistanceFactor={0}
                backdropComponent={renderBackdrop}
                snapPoints={snapPoints}
                ref={ref}
            >
                <View style={styles.contentContainer}>
                    <Text>Hello test</Text>
                </View>
            </BottomSheetModal>
        </View>
    )
})

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        // justifyContent: 'space-between',
        gap: 20
    },

})

export default BottomSheet