import { SIZES } from '@/constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardWrapper: {
    marginTop: SIZES.small,
  },
  card: {
    width: 290,
    height: 160,
    overflow: 'hidden',
    borderRadius: SIZES.medium,
    backgroundColor: '#fff',
    marginRight: SIZES.medium,
    elevation: 4,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
});
