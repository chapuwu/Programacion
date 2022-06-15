import React from 'react'

export default function MoreInfo({ ip, playerList }) {
    return (
        <div className='bg-blue-900 flex flex-col h-full w-auto'>
            {ip}
            {playerList}
        </div>
    )
}
