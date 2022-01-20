
// action = {type:'', payload:''}

const defaultState = {
    customers: [],
}

const ADD_CUSTOMERS = 'ADD_CUSTOMERS'
const ADD_LIST_CUSTOMERS = 'ADD_LIST_CUSTOMERS'
const REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS'

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CUSTOMERS:
            return {...state, customers: [...state.customers, action.payload]}
        case ADD_LIST_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}
        case REMOVE_CUSTOMERS:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        default:
            return state
    }
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMERS, payload})
export const addListCustomerAction = (payload) => ({type: ADD_LIST_CUSTOMERS, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMERS, payload})