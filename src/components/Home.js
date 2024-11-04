import React, { useState } from 'react'
import ItemsForm from './ItemsForm.js'
import ItemsTable from './ItemsTable.js'
import { useDispatch } from 'react-redux'
import { setBill } from "../redux/slices/billSlice.js"
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [items, setItems] = useState([])
    const [totalItems, setTalItems] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [billTotal, setBilltotal] = useState(0)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const navigateWithDelay = (url, delay) => {
        setTimeout(() => {
            navigate(url)
        }, delay)
    }

    const printRecipt = () => {
        console.log("clicked")
        console.log(items)
        dispatch(setBill({ items, billTotal }))
        navigateWithDelay("/recipt", 1)
    }
    const removeItem = (index) => {
        const temp = items;
        temp.splice(index, 1)
        const qtn = temp.reduce((accumulator, currentValue) => {
            return accumulator + parseInt(currentValue.quantity)
        }, 0)
        const total = temp.reduce((accumulator, currentValue) => {
            const amount = parseInt(currentValue.quantity) * parseInt(currentValue.price)
            return accumulator + amount
        }, 0)
        setItems(temp)
        setTalItems(temp.length)
        setQuantity(qtn)
        setBilltotal(total)
    }
    const onAdd = (data) => {
        const temp = items;
        temp.push(data)
        setItems(temp)
        setTalItems(temp.length)
        setQuantity((pre) => pre + parseInt(data.quantity))
        setBilltotal((pre) => {
            const amount = data.quantity * data.price;
            return pre + amount
        })
    }
    return (
        <div>
            <ItemsForm onAdd={onAdd} />
            <ItemsTable items={items} totalItems={totalItems} quantity={quantity} billTotal={billTotal} removeItem={removeItem} />
            <div className="w-full flex align-middle justify-center mt-2">
                <button onClick={printRecipt} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Prient Recipt</button>
            </div>
        </div>
    )
}
