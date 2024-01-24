import { SIZES } from '@/constants';
import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: SIZES.small,
  },
  swiperWrapper: {
    height: 300,
  },
  imageWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: 380,
    height: 280,
    borderRadius: SIZES.medium,
  },
  detailsBox: {
    flex: 1,
    gap: SIZES.xSmall / 2,
    backgroundColor: Colors.lightGrey, //#FCF8FF
    paddingVertical: SIZES.xLarge,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.xLarge,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  rating: {
    color: Colors.black,
  },
  ratingCount: {
    color: Colors.grey,
  },
  description: {
    marginVertical: SIZES.xSmall,
    color: Colors.grey,
  },

  // bottom
  detailsBottom: {
    flexDirection: 'row',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: Colors.darkGrey,
    paddingHorizontal: SIZES.large,
    paddingVertical: SIZES.xLarge,
    borderTopEndRadius: SIZES.large,
    borderTopStartRadius: SIZES.large,
  },
  bottomLeft: {},
  leftPriceText: {
    color: Colors.grey,
  },
  leftPrice: {},
  bottomRight: {},
  buttonWrapper: {},
  buttonText: {},
});
