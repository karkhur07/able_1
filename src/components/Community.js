import React from 'react'
import Button from '@mui/material/Button';

const Community = () => {
  return (
    <div className='flex justify-center m-28'>
      <Button variant="outlined" className='m-8 p-8 w-96 h-10 shadow p-3 mb-5 bg-[#333] rounded' style={{backgroundColor:"#DCFFAF", borderRadius:"100px",}}><img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png?20200503174721" alt='' className="flex justify-evenly" style={{height:'30px',width:'30px'}}/><b>Whatsapp Community</b></Button>
      <Button variant="outlined" className='m-8 p-8 w-96 h-10 shadow p-3 mb-5 bg-[#333] rounded' style={{backgroundColor:"#D2F7FF", borderRadius:"100px", marginLeft:"25px"}}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/768px-Telegram_logo.svg.png " alt='' className="flex justify-evenly" style={{height:'30px',width:'30px'}}/><b>Telegram Community</b></Button>
    </div>
  )
}

export default Community
