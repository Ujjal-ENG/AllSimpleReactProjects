/* eslint-disable react/jsx-indent-props */
/* eslint-disable max-len */
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Home from './components/pages/Home';

const App = () => {
    return (
        <>
            <Home />
            <div className="flex flex-col gap-5 md:flex-row items-center justify-evenly mt-10">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image="https://images.pexels.com/photos/9139846/pexels-photo-9139846.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        className="h-60"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="p" className="text-red-500 font-bold">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://images.pexels.com/photos/16148497/pexels-photo-16148497.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        className="h-60 object-fill"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </>
    );
};

export default App;
