import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MovieCard({
    poster,
    title,
    type,
    year,
    id
}) {
    const moviePoster = poster || "";
    const movieTitle = title || "";
    const cardType = type || "";
    const movieYear = year || "";
    const cardId = id || -1;

    return (
        <Grid item key={cardId}>
            <Card 
                sx={{ 
                    width: 350,
                }}
            >
                <CardMedia
                    component="img"
                    alt={`${movieTitle} image`}
                    height="250"
                    image={moviePoster}
                />
                <CardContent
                    sx={{ 
                        minHeight: 100,
                    }}
                >
                    <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="div"
                    >
                        {movieTitle}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="text.secondary"
                    >
                        {movieYear}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">More Detail</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default MovieCard