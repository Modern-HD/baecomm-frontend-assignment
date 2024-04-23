import TCategories from './TCategories';

export default interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: TCategories;
    thumbnail: string;
    images: string[];
}

export type TProductCard = Pick<IProduct, 'id' | 'thumbnail' | 'brand' | 'title' | 'price'>;
