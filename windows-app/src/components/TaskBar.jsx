import React from 'react'
import inicio from '../assets/icons/start.png'
import cmd from '../assets/icons/terminal.png'
import carpeta from '../assets/icons/explorer.png'
import discord from '../assets/icons/discord.png'
import telegram from '../assets/icons/telegram.png'
import whattsap from '../assets/icons/whatsapp.png'
import steam from '../assets/icons/steam.png'
import chrome from '../assets/icons/chrome.png'

export default function TaskBar() {
    return (
        <div className='bg-gray-900 bg-opacity-80 backdrop-blur-lg w-screen h-10 flex justify-center'>
            <div className='flex items-center'>
                <div className='h-8 flex justify-center items-center w-8 bg-white/20'>
                    <img src={inicio} alt='' className='h-6' />
                </div>
                <div className='h-8 flex justify-center items-center w-8 hover:bg-white/20 ml-7'>
                    <img src={cmd} alt='' className='h-5' />
                </div>
                <div className='ml-7 h-8 flex justify-center items-center w-8 hover:bg-white/20'>
                    <img src={carpeta} alt='' className='h-5' />
                </div>
                <div className='ml-7 h-8 flex justify-center items-center w-8 hover:bg-white/20'>
                    <img src={discord} alt='' className='h-6' />
                </div>
                <div className='ml-7 h-8 flex justify-center items-center w-8 hover:bg-white/20'>
                    <img src={telegram} alt='' className='h-6' />
                </div>
                <div className='ml-7 h-8 flex justify-center items-center w-8 hover:bg-white/20'>
                    <img src={whattsap} alt='' className='h-6' />
                </div>
                <div className='ml-7 h-8 flex justify-center items-center w-8 hover:bg-white/20'>
                    <img src={steam} alt='' className='h-6' />
                </div>
                <div className='ml-7 h-8 flex justify-center items-center w-8 hover:bg-white/20'>
                    <img src={chrome} alt='' className='h-6' />
                </div>
            </div>
        </div>
    )
}
