import React from 'react'

export default function MoreInfo({ ip, playerList, showMoreInfo }) {
    return (
        <div className={`bg-blue-900 py-2 flex flex-col w-full${showMoreInfo ? '' : 'h-0'}`}>
            <p className='ml-2'>{ip}</p>
            <p className='ml-2'>{playerList}</p>
        </div>
    )
}
