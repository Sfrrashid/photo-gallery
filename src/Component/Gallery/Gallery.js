import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FetchPhotos } from '../../Redux/Actioncreator';
import { Card, CardImg, CardTitle, CardBody, Row, Col, Button, CardColumns } from 'reactstrap';


const mapStateToProps = (state) => {
    return {
        photos: state.photos
    }

}
const mapDispatchToProps = dispatch => {
    return {


        FetchPhotos: () => dispatch(FetchPhotos())

    }



}






const Gallery = (props) => {
    useEffect(() => {

        props.FetchPhotos()

    }, [])


    return (
        props.photos.map(item => {


            return (

                <div className="container" key={item.id}>
                    <div className="row">

                        <CardColumns>


                            <Card style={{ margin: "10px" }}>
                                <CardImg width="100%" src={item.image} alt="CardImage" />
                                <CardBody>
                                    <CardTitle>{item.name}</CardTitle>

                                    <Button>Details</Button>
                                </CardBody>
                            </Card>
                        </CardColumns>





                    </div>







                </div>
            )
        })





    );

}



export default connect(mapStateToProps, mapDispatchToProps)(Gallery);