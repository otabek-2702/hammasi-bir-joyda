import { SIZES } from '@/constants';
import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';
// import cardBG from '@/assets/images/card-bg.png';

export const styles = StyleSheet.create({
  card: {
    padding: SIZES.small,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: Colors.lightWhite,
  },
  buttonWrapper: {
    backgroundColor: Colors.white,
    paddingVertical: SIZES.medium,
    width: 150,
    borderRadius: SIZES.xxLarge,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.darkGrey,
    fontSize: 16,
    fontWeight: 'bold',
  },
  circle: {
    width: 120,
    height: 120,
    backgroundColor: '#ff7400',
    borderRadius: 500,
    position: 'absolute',
    bottom: -60,
    right: -50,
  },
});
