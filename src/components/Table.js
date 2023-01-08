import React from 'react'
import Countdown from 'react-countdown';


const Table = () => {
    return (
        <div>

            <table className="table-fixed bg-white w-full text-center">
                <thead>
                    <tr className='bg-black text-white text-3xl'>
                        <th>Name</th>
                        <th>Paid</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-gray-200'>
                        <td>Justin Hall</td>
                        <td className='bg-green-300 font-bold'>Paid in Full</td>
                        <td>$205</td>
                    </tr>
                    <tr>
                        <td>Ariel Hayworth</td>
                        <td className='bg-green-300 font-bold'>Paid in Full</td>
                        <td>$205</td>
                    </tr>
                    <tr className='bg-gray-200'>
                        <td>Tyler Carlisle</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Sabrina Kiefer</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr className='bg-gray-200'>
                        <td>Alex Seimears</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Daniel Nau</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr className='bg-gray-200'>
                        <td>Kaylynn Nau</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Jake Anderson</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr className='bg-gray-200'>
                        <td>Michelle Anderson</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Hunter Baijkowski</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr className='bg-gray-200'>
                        <td>Kirstin Baijkowski</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Tyler Jerome</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr className='bg-gray-200'>
                        <td>Brandi Jerome</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Kyle White</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr className='bg-gray-200'>
                        <td>Andrea Matson</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Nathan White</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr className='bg-gray-200'>
                        <td>Tanner Pinkerton</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Brett Kellogg</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                </tbody>
            </table>
            <div className='text-center text-5xl pt-20 text-white'>
                <Countdown className='text-center' date='2023-07-28' />
            </div>
        </div>
    )
}

export default Table