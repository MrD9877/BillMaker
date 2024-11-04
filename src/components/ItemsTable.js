
export default function ItemsTable({ items, totalItems, quantity, billTotal, removeItem }) {
    return (
        <div>
            <div style={{ maxWidth: "100vw" }}>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">

                            </th>
                        </tr>
                    </thead>
                    {items ? items.map((item, index) => {
                        return <tbody key={index}>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.productName}
                                </th>
                                <td className="px-6 py-4">
                                    {item.quantity}
                                </td>
                                <td className="px-6 py-4">
                                    {item.price}
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => removeItem(index)}>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/wpyrrmcq.json"
                                            trigger="hover"
                                        >
                                        </lord-icon>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    }) : ''}
                    <thead className='text-xs text-gray-700 uppercase bg-blue-200 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Total items
                            </th>
                            <th scope="col" className="px-6 py-3">
                                QTY
                            </th>
                            <th scope="col" className="px-6 py-3">
                                TOTAL
                            </th>
                            <th scope="col" className="px-6 py-3">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col" className="px-6 py-3 text-red-600">
                                {totalItems}
                            </th>
                            <th scope="col" className="px-6 py-3 text-green-800">
                                {quantity}
                            </th>
                            <th scope="col" className="px-6 py-3 text-green-800">
                                ₹{billTotal}
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
