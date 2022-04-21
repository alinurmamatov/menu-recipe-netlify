import {Card, CardHeader, CardContent, Divider, CardMedia, Grid, Button, Box} from '@mui/material';
import {useContext} from 'react';
import { RecipiesContext } from '../context/GeneralContext';
import {Link} from 'react-router-dom';
import Pagination from './Pagination';

function Recipes() {
    const {allRecipes, howManyElPerPage, pageNow} = useContext(RecipiesContext);
    const start = pageNow * howManyElPerPage;
    const end = start + howManyElPerPage;
    const recipesToShow = allRecipes.slice(start, end);

    const styleHeader = {
        height: 50
    }

    return (
        <>
        <h1>Recipes</h1>
        <Grid container spacing={2} style={styleHeader}>
            {
                recipesToShow.map((recipe) => (
                    <Grid item xs={6} md={3}>
                        <Card>
                            <CardHeader title={recipe.recipe.label}/>
                            <Divider />
                            <CardContent>
                                <CardMedia component="img" height="200" image={recipe.recipe.image}/>
                            </CardContent>
                        </Card>
                        <Button><Link to={`/Recipe/${recipe.recipe.label}`}>See More</Link></Button>
                    </Grid>
                ))
            }
            <Grid item xs={12} >
                <Pagination/>
            </Grid>
        </Grid>
        </>
    )
}

export default Recipes;