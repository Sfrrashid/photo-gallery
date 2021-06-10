import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FetchPhotos, FetchComments } from '../../Redux/Actioncreator';
import PhotoGallery from '../Gallery/PhotoGallery';
import PhotoDetails from '../Gallery/DetailPhotos';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';


const mapStateToProps = (state) => {
    //console.log(state.comments.comments.comments);

    return {
        photos: state.photos,
        comments: state.comments
    }

}
const mapDispatchToProps = dispatch => {
    return {


        FetchPhotos: () => dispatch(FetchPhotos()),
        FetchComments: () => dispatch(FetchComments())

    }



}







const Gallery = (props) => {
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
            const comments = props.comments.comments.comments.filter(comment => comment.picId === image.id
            )

            photobody = <PhotoDetails photos={image}
                comments={comments}
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