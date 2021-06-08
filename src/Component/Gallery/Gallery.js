import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FetchPhotos } from '../../Redux/Actioncreator';
import PhotoGallery from '../Gallery/PhotoGallery';
import PhotoDetails from '../Gallery/DetailPhotos';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';


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

        props.FetchPhotos()

    }, [])





    const photo = props.photos.map(item => {
        return (
            <PhotoGallery key={item.id}
                photos={item}
                selectedPhoto={() => imageField(item)} />




        )

    });

    let photobody = null;
    if (image != null) {

        photobody = <PhotoDetails photos={image} />

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


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);