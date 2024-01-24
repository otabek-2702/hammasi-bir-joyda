import { SIZES } from '@/constants';
import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.small,
    width: '47%',
    backgroundColor: Colors.white,
    overflow: 'hidden',
    borderRadius: SIZES.medium,
    borderColor: Colors.borderColor,
    borderWidth: 1,
    elevation: 4,
  },
  imageWrapper: {
    width: 140,
    height: 160,
  },
  cardImg: {
    width: '100%',
    height: '100%',
  },
  cardTextBox: {
    width: '100%',
    paddingTop: SIZES.xSmall,
    paddingHorizontal: SIZES.xSmall,
    gap: SIZES.xSmall,
  },
  cardTitle: {
    fontSize: SIZES.medium,
    fontWeight: '600',
  },
  cardPrice: {
    fontSize: SIZES.medium - 2,
    fontWeight: 'bold',
  },
  cardPlusButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 40,
    width: 40,
    borderTopLeftRadius: SIZES.medium,
    backgroundColor: Colors.darkGrey,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
