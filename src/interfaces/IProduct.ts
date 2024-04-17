import TCategories from './TCategories';

export default interface IProduct {
    id: number;
    title: string;
    description: string;
    price: 549;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: TCategories;
    thumbnail: string;
    images: string[];
}
