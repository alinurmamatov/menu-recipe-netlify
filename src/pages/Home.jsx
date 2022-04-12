import Form from '../components/Form';
import Recipes from '../components/Recipes';
import DrawerMenu from '../components/Drawer';

function Home() {
    return (
        <>
            <DrawerMenu/>
            <Form/>
            <Recipes/>
        </>
    )
}

export default Home;