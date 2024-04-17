import IProduct from './IProduct';

export default interface IProductList<T = IProduct> {
    products: T[];
    total: number;
    skip: number;
    limit: number;
}
