import React from 'react'
import steam from '../img/steamicon.png'
import discord from '../img/discordicon.png'

export default function Botones() {
    return (
        <div className='flex justify-center items-center h-1/2 bg-slate-900'>
            <div className='w-full flex justify-center'>
                <div className='bg-slate-800 items-center flex flex-row justify-center rounded-full'>
                    <div>
                        <a href='' className='text-white'>
                            Unirse al Grupo de Steam
                        </a>
                    </div>
                    <img src={steam} alt='' className='h-12' />
                </div>
            </div>
            <div className='bg-slate-800 w-16 h-16 items-center flex justify-center rounded-full ml-5'>
                <img src={discord} alt='' className='h-14' />
            </div>
        </div>
    )
}
