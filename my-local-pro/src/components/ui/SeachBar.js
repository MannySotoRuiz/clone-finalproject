"use client";

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';


export default function SearchBar() {
    const router = useRouter();
    
    return (
        <Paper
            component="form"
            sx={{ p: '10px 5px', display: 'flex', alignItems: 'center', width: 500 }}
        >
            <InputBase
                sx={{ flex: 1 }}
                placeholder="What's on your to-do list?"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton 
                onClick={() => router.push('/search/painting')}
                type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
  }