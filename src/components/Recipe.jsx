import {TabPanel, TabList, TabContext} from '@mui/lab';
import {Grid, Tab, CardMedia} from '@mui/material';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RecipiesContext } from '../context/GeneralContext';
import DrawerMenu from './Drawer';

function Recipe() {
    const [value, setValue] =useState('1');
    const {recipe} = useParams();
    const {allRecipes} = useContext(RecipiesContext);
    const meal = allRecipes.filter((el) => el.recipe.label === recipe);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Grid container spacing={2}>
            <DrawerMenu/>
            <Grid item xs={12} md={6}>
                <h2>{recipe}</h2>
                <CardMedia component="img" image={meal[0].recipe.image} alt={recipe} />
            </Grid>
            <Grid item xs={12} md={6}>
                <TabContext value={value}>
                    <TabList onChange={handleChange} aria-label="Description">
                        <Tab label="Ingredients" value="1"></Tab>
                        <Tab label="Nutrients" value="2"></Tab>
                        <Tab label="Calories" value="3"></Tab>
                    </TabList>
                    <TabPanel value="1">Panel 1</TabPanel>
                    <TabPanel value="2">Panel 2</TabPanel>
                    <TabPanel value="3">Panel 3</TabPanel>
                </TabContext>
            </Grid>
        </Grid>
    )
}

export default Recipe;