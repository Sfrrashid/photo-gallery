import React, { useState } from 'react';
import { Form, Input, Button, Label } from 'reactstrap';

const CommentForm = () => {
    const [author, setAuthor] = useState('')
    const [rating, setRating] = useState('')
    const [comment, setComment] = useState('')

    const handleSubmit = e => {
        // console.log(author);

        setAuthor({
            author: " "
        });
        setComment({
            comment: " "
        });
        setRating({
            rating: " "
        })
        e.preventDefault();

        console.log(author);
        console.log(comment);
        console.log(rating);
    }



    return (
        <Form onSubmit={e => handleSubmit(e)}>



            <Label>author</Label>
            <Input type='text'
                style={{ marginTop: "10px" }}
                name='author'
                value={author}
                placeholder='your name'
                onChange={e => setAuthor(e.target.value)}
                required />
            <br />
            <br />

            <Label>Rating</Label>
            <Input

                style={{ marginTop: "10px" }}
                type="select"
                name="rating"
                value={rating}
                onChange={e => setRating(e.target.value)}
                required >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>

            </Input>

            <br />
            <br />

            <Label>feedback</Label>

            <Input

                style={{ marginTop: "10px" }}
                type='textarea'
                name='comment'
                value={comment}
                placeholder='feedback here....'
                onChange={e => setComment(e.target.value)}
                required />

            <Button type='submit' className='btn btn-info' style={{ "marginTop": "10px" }}>Add Comment</Button>


        </Form>




    );
}

export default CommentForm;