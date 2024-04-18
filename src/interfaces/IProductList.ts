import IProduct from './IProduct';

export default interface IProductList<T extends Partial<IProduct> = IProduct> {
    products: T[];
    total: number;
    skip: number;
    limit: number;
}
