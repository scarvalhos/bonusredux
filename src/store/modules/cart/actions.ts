import { ActionTypes, IProduct } from "./types";

export function addProductToCartRequest(product: IProduct) {
    return {
        type: ActionTypes.addProductToCartRequest,
        // Any additional informations needed
        payload: {
            product
        }
    }
}
export function addProductToCartSuccess(product: IProduct) {
    return {
        type: ActionTypes.addProductToCartSuccess,
        // Any additional informations needed
        payload: {
            product
        }
    }
}
export function addProductToCartFailure(productId: number) {
    return {
        type: ActionTypes.addProductToCartFailure,
        // Any additional informations needed
        payload: {
            productId
        }
    }
}