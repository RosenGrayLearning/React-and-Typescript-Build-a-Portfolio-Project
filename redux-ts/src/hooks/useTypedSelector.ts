import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';

export const useTypedselector: TypedUseSelectorHook<RootState> = useSelector;
