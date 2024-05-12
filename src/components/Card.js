import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CustomTabPanel from './Tabs'
import acc from '../assets/acc.png'

export default function MediaCard() {
  return (
    <Card style={{ maxWidth: 5000, height: 650}}>
      <CardMedia/>
      <div className='flex'>
             <img className="w-20 m-6 mb-3 rounded-t-lg shadow p-3 mb-5 bg-gray rounded" src={acc} alt=""/><b className='mt-12 text-xl'>ACCENTURE</b>
      </div>
      <CardContent>
        <Typography>
            <CustomTabPanel/>
        </Typography>
      </CardContent>
      <CardActions>
      <div class="flex justify-center m-12">
                <button type="button" class="w-32 shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-black hover:bg-black-700 focus:outline-none">
                  Apply Now
                </button>
              </div>
      </CardActions>
    </Card>
  );
}

