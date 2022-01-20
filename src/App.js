import React from "react";
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import './components/button.css'
import './components/count.css'
import './components/customers.css'
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {addCashAction, getCashAction} from "./store/cashReducer";
import {fetchCustomers} from "./asyncAction/customers";

function App() {
    const dispatch = useDispatch()
    // useSelector() - принимает состояние State и мы из состояния получаем нужную переменную
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const addCash = (cash) => {
        dispatch(
            addCashAction(cash)
        )
    }

    const getCash = (cash) => {
        dispatch(
            getCashAction(cash)
        )
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(
            addCustomerAction(customer)
        )
    }

    const removeCustomer = (customer) => {
        dispatch(
            removeCustomerAction(customer.id)
        )
    }

    const addListCustomers = () => {
        dispatch(
            fetchCustomers()
        )

    }



    return(
        <div className={'App'}>
            <div className={'count'}>Баланс: {cash}</div>
            <div className={'buttons'}>
                <button className={'button'} onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
                <button className={'button'} onClick={() => getCash(Number(prompt()))}>Снять со счет</button>
                <button className={'button'} onClick={() => addCustomer(prompt())}>Добавить клиента</button>
                <button className={'button'} onClick={() => addListCustomers()}>Список пользователей</button>
            </div>
            {
                customers.length > 0
                    ? <div className={'customers'}>
                        {customers.map(customer =>
                            <div className={'customers'}>{customer.name}
                                <div className={'customers__rem'} onClick={()=>removeCustomer(customer)}>Удалить</div>
                            </div>)}
                    </div>
                    : <div className={'customers'}>Клиенты отсутствуют!</div>
            }
        </div>
    )
}

export default App;

