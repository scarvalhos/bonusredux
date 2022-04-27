import { AxiosResponse } from 'axios'
import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions'
import { IState } from '../..'
import api from '../../../services/api'

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

interface IStokeResponse {
    id: number;
    quantity: number;
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
    const { product } = payload

    const currentQuantityInCart: number = yield select((state: IState) => {
        return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
    })

    const availableStockResponse: AxiosResponse<IStokeResponse> = yield call(api.get, `stock/${product.id}`)

    if(availableStockResponse.data.quantity > currentQuantityInCart) {
        yield put(addProductToCartSuccess(product))
    } else {
        yield put(addProductToCartFailure(Number(product.id)))
    }
}

export default all([
    takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock)
])
