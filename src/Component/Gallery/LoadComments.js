import React from 'react';


const LoadComments = (props) => {
    if (props.commentisLoading) {
        return (
            <p>loading</p>
        )
    }
    else {
        return (
            props.comments.map(comment => {

                return (
                    <div key={comment.id}>
                        <h5>{comment.author}</h5>
                        <p>{comment.comment}</p>
                        <p>{comment.rating}</p>




                    </div>
                );



            })


        );


    }



}

export default LoadComments;