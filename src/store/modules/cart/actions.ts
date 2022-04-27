import { IProduct } from "./types";

export function addProductToCartRequest(product: IProduct) {
    return {
        type: 'ADD_PRODUCT_TO_CART_REQUEST',
        // Any additional informations needed
        payload: {
            product
        }
    }
}
export function addProductToCartSuccess(product: IProduct) {
    return {
        type: 'ADD_PRODUCT_TO_CART_SUCCESS',
        // Any additional informations needed
        payload: {
            product
        }
    }
}
export function addProductToCartFailure(productId: number) {
    return {
        type: 'ADD_PRODUCT_TO_CART_FAILURE',
        // Any additional informations needed
        payload: {
            productId
        }
    }
}