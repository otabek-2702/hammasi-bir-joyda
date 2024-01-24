import { AppDispatch, RootState } from '@/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export { default as useFetch } from './useFetch'
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector