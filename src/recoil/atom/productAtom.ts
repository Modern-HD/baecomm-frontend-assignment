import { atom } from 'recoil';
import { TProductCard } from '../../interfaces/IProduct';
import IStatus from '../../interfaces/IStatus';

export const productListAtom = atom<TProductCard[] | undefined>({
    key: 'productListAtom',
    default: undefined,
});

export const statusAtom = atom<IStatus>({
    key: 'statusAtom',
    default: {
        limit: 10,
        current: 0,
        total: 0,
        word: undefined,
    },
});
