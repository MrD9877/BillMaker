import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function ItemsForm(props) {
    const {
        register,
        handleSubmit,
    } = useForm()

    return (
        <>
            <div>
                <form className="max-w-sm mx-auto bg-white p-12 " onSubmit={handleSubmit(props.onAdd)}>
                    <table>
                        <tr>
                            <td>Product:</td>
                            <td>Quantity:</td>
                            <td>Price:</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" {...register("productName")} required id="productName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="jeens" />
                            </td>
                            <td>
                                <input style={props.style} type="number" {...register("quantity")} required className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                            </td>
                            <td>
                                <input style={props.style} type="number" {...register("price")} required className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                            </td>
                        </tr>
                    </table>
                    <div className="w-full flex align-middle justify-center mt-2">
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add+</button>
                    </div>
                </form>
            </div>
        </>
    )
}