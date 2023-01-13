import React, {useEffect, useState} from 'react'
import Countdown from 'react-countdown';
import $ from "jquery";


const Table = () => {
    const [ yes, setYes ] = useState(0)
    const [ maybe, setMaybe ] = useState(0)
    const [ no, setNo ] = useState(0)

    useEffect(() => {
        var numNo = $('.no').length
        var numYes = $('.yes').length
        var numMaybe = $('.maybe').length
        setMaybe(numMaybe)
        setNo(numNo)
        setYes(numYes)
    })
    return (
        <div className='sm:text-sm'>
            <div className='text-center text-5xl text-white flex flex-col sm:text-sm'>
                <h1>Float Trip July 28th, 2023</h1>
                <Countdown className='text-center' date='2023-07-28' />
                <a href='https://www.riverranchresort.com/cabins/lodge-cabins/' target='_blank' className='text-white text-center hover:text-red-600 pb-10'>https://www.riverranchresort.com/</a>

            </div>
            <table className="table-fixed bg-white w-full text-center">
                <thead>
                    <tr className='bg-black text-white underline text-3xl sm:text-sm'>
                        <th>Name</th>
                        <th>Going</th>
                        <th>Paid</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-gray-200'>
                        <td>Justin Hall</td>
                        <td className='yes'>Yes</td>
                        <td className='bg-green-300 font-bold'>Paid in Full</td>
                        <td className='bg-green-300'>$205</td>
                    </tr>
                    <tr>
                        <td>Ariel Hayworth</td>
                        <td className='yes'>Yes</td>
                        <td className='bg-green-300 font-bold'>Paid in Full</td>
                        <td className='bg-green-300'>$205</td>
                    </tr>
                    <tr className='bg-gray-200'>
                        <td>Tyler Carlisle</td>
                        <td className='yes'>Yes</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Sabrina Kiefer</td>
                        <td className='no'>No</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr className='bg-gray-200'>
                        <td>Alex Seimears</td>
                        <td className='yes'>Yes</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Daniel Nau</td>
                        <td className='yes'>Yes</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr className='bg-gray-200'>
                        <td>Kaylynn Nau</td>
                        <td className='yes'>Yes</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Jake Anderson</td>
                        <td className='maybe'>Maybe</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr className='bg-gray-200'>
                        <td>Michelle Anderson</td>
                        <td className='maybe'>Maybe</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Hunter Baijkowski</td>
                        <td className='yes'>Yes</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr className='bg-gray-200'>
                        <td>Kirstin Baijkowski</td>
                        <td className='maybe'>Maybe</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Kyle White</td>
                        <td className='yes'>Yes</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr className='bg-gray-200'>
                        <td>Andrea Matson</td>
                        <td className='yes'>Yes</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Nathan White</td>
                        <td className='yes'>Yes</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr className='bg-gray-200'>
                        <td>Tanner Pinkerton</td>
                        <td className='yes'>Yes</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Brett Kellogg</td>
                        <td className='yes'>Yes</td>
                        <td className='bg-red-600'>No</td>
                        <td>$0</td>
                    </tr>
                </tbody>
            </table>
            <h1 className='text-white text-center text-3xl font-medium'>For sure yes: <span className='text-6xl text-green-400'>{yes}</span></h1>
            <h1 className='text-white text-center text-3xl font-medium'>Maybe's: <span className='text-6xl text-green-400'>{maybe}</span></h1>
            <h1 className='text-white text-center text-3xl font-medium'>No's: <span className='text-6xl text-green-400'>{no}</span></h1>
        </div>
    )
}

export default Table