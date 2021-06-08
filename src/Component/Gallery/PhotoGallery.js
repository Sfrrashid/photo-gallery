import React from 'react';
import { Card, CardImg, CardTitle, CardBody, Button } from 'reactstrap';


const PhotoGallery = props => {

    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardImg width="100%" src={props.photos.image} alt="CardImage" />
                <CardBody>
                    <CardTitle>{props.photos.name}</CardTitle>

                    <Button onClick={props.selectedPhoto}>Details</Button>
                </CardBody>
            </Card>

        </div>
    );

}

export default PhotoGallery;