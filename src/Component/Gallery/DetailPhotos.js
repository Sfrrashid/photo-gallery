import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
import LoadComments from '../Gallery/LoadComments';
import CommentForm from './CommentForm';





const PhotoDetails = props => {
    console.log(props);
    const token = props.token
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
                    <hr />


                    <LoadComments comments={props.comments} commentisLoading={props.commentisLoading} />
                    <hr />
                    {token === null ? <p style={{ textAlign: 'center' }}> <strong>Please SignUp or Login for for Add some feedback here !</strong></p> : <CommentForm picId={props.photos.id} Add_Comment={props.Add_Comment}
                        uid={props.uid} />}



                </CardBody>
            </Card>
        </div>
    );
}
export default PhotoDetails;