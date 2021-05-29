import React from 'react';
import Navigation from './Navigation';
import img from '../../assets/image/MyBackground.jpg';

const Home = () => {

    return (

        <div>

            <Navigation />
            <img src={img} alt="img" width='100%' height='auto' img-fluid />

        </div>



    );


}
export default Home;