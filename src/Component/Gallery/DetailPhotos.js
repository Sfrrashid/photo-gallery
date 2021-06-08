import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';


const PhotoDetails = props => {
    console.log(props)
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardImg top width="50%" src={props.photos.image.image} alt={props.photos.image} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle tag="h2">{props.photos.name}</CardTitle>
                    <CardText tag="h5">
                        {props.photos.catagory}
                    </CardText>
                    <CardText>
                        {props.photos.description}
                    </CardText>


                </CardBody>
            </Card>
        </div>
    );
}
export default PhotoDetails;