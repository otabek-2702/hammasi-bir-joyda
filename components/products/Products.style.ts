import { SIZES } from '@/constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: SIZES.medium,
    columnGap: SIZES.large,
    gap: SIZES.large,
  },
});
