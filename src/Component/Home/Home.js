import React, { useEffect, } from 'react';
import Navigation from './Navigation';
import img from '../../assets/image/MyBackground.jpg';
import { FetchPhotos } from '../../Redux/Actioncreator';
import { connect } from "react-redux";

import Gallery from '../Gallery/Gallery';




const mapStateToProps = state => {
    return {
        photos: state.photos
    }

}

const mapDispatchToProps = dispatch => {
    return {
        FetchPhotos: () => dispatch(FetchPhotos())
    }

}

const Home = (props) => {
    useEffect(() => {
        props.FetchPhotos();
    }, [])













    return (


        <div>

            <Navigation />
            <img src={img} alt="img" width='100%' height='auto' />





        </div>



    );


}
export default connect(mapStateToProps, mapDispatchToProps)(Home);