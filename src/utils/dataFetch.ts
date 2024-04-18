import IProduct from '../interfaces/IProduct';
import IProductList from '../interfaces/IProductList';
import TCategories from '../interfaces/TCategories';

export async function fetchUtil<T>(url: string): Promise<T | undefined> {
    const result = await fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(`${res.status} 에러가 발생하였습니다.`);
            }
            return res.json();
        })
        .catch(error => console.error(error));
    return result;
}

export async function getAllProducts() {
    return await fetchUtil<IProductList>('https://dummyjson.com/products');
}

export async function getSingleProduct(id: number) {
    return await fetchUtil<IProduct>(`https://dummyjson.com/products/${id}`);
}

export async function getSearchedProduct(word: string) {
    return await fetchUtil<IProductList>(`https://dummyjson.com/products/search?q=${word}`);
}

export async function getLimitAndSkipProducts<T extends keyof IProduct>(
    limit: number,
    skip: number,
    select?: T[]
) {
    let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    if (select instanceof Array) {
        url += `&select=${select.join(',')}`;
    }
    return await fetchUtil<IProductList<Pick<IProduct, T>>>(url);
}

export async function getLimitAndSkipSearchedProducts<T extends keyof IProduct>(
    limit: number,
    skip: number,
    word: string,
    select?: T[]
) {
    let url = `https://dummyjson.com/products/search?q=${word}&limit=${limit}&skip=${skip}`;
    if (select instanceof Array) {
        url += `&select=${select.join(',')}`;
    }
    return await fetchUtil<IProductList<Pick<IProduct, T>>>(url);
}

export async function getCategories() {
    return fetchUtil<TCategories[]>('https://dummyjson.com/products/categories');
}
