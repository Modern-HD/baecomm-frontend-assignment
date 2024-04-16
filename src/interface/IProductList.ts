import IProduct from './IProduct';

export default interface IProductList {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}
