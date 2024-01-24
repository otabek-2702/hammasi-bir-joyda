import { SIZES } from '@/constants';
import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeAreaView: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: Colors.lightGrey,
  },
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.medium,
    backgroundColor: Colors.lightGrey,
    paddingHorizontal: SIZES.small,
    paddingBottom: SIZES.small,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
    borderRadius: SIZES.medium,
    borderColor: Colors.lightGrey,
    elevation: 1,
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: SIZES.small,
  },
  filterWrapper: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: SIZES.medium,
    borderColor: Colors.lightGrey,
    elevation: 1,
    borderWidth: 1,
  },
});
