import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FetchPhotos, FetchComments, Add_Comment } from '../../Redux/Actioncreator';
import PhotoGallery from '../Gallery/PhotoGallery';
import PhotoDetails from '../Gallery/DetailPhotos';

import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';


const mapStateToProps = (state) => {
    console.log(state);

    return {
        photos: state.photos,
        comments: state.comments
    }

}
const mapDispatchToProps = dispatch => {
    return {

        Add_Comment: (picId, author, comment, rating, uid) => dispatch(Add_Comment(picId, author, comment, rating, uid)),
        FetchPhotos: () => dispatch(FetchPhotos()),
        FetchComments: () => dispatch(FetchComments())

    }



}







const Gallery = (props) => {
    let a = props.comments.comments.length;
    console.log(a);

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal)
    }

    const [image, setImage] = useState(null);

    const imageField = (image) => {
        setImage(
            {
                ...image,
                image: image,

            });
        setModal(!modal);
    }
    useEffect(() => {

        props.FetchPhotos();
        props.FetchComments();



    }, [])



    if (props.photos.isLoading) {

        return (

            <p> loading</p>
        );
    }

    else {

        const photo = props.photos.photos.map(item => {


            return (
                <PhotoGallery key={item.id}
                    photos={item}
                    selectedPhoto={() => imageField(item)} />




            )

        });

        let photobody = null;
        if (image != null) {
            const comments = props.comments.comments.filter(comment => comment.picId === image.id
            )

            photobody = <PhotoDetails photos={image}
                comments={comments}
                uid={props.comments.comments.length}
                Add_Comment={props.Add_Comment}
                commentisLoading={props.comments.isLoading} />

        }






        return (
            <div className="container">
                <div className="row">

                    <CardColumns>
                        {photo}
                    </CardColumns>
                    <Modal isOpen={modal}>

                        <ModalBody>
                            {photobody}
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={toggle}>close</Button>
                        </ModalFooter>



                    </Modal>

                </div>

            </div>




        );



    }






}


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);