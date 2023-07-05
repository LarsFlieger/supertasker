import { ApplicationState, ApplicationDispatch } from './store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;
export const useAppDispatch: () => ApplicationDispatch = useDispatch;
