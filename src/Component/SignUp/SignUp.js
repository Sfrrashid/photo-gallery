import React from 'react';
import { Formik } from 'formik';
import { Alert, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { auth } from '../../Redux/AuthActionCreator';





const mapstateToProps = (state) => {
    console.log(state)
    return {
        Auth_Loading: state.auth.Auth_Loading,
        Auth_Msg: state.auth.Auth_Msg
    }
}
const mapDispatchToProps = dispatch => {
    return {
        auth: (email, password, passwordConfirm) => dispatch(auth(email, password, passwordConfirm))
    }

}




const SignUp = props => {









    const loginView = () => {
        props.history.push('login')
    }





    let err = null;
    if (props.Auth_Msg !== null) {
        console.log(props.Auth_Msg)
        err = <Alert color="danger">{props.Auth_Msg}</Alert>
    }
    let form = null;
    if (props.Auth_Loading) {
        form = <p>LOADING......</p>
    }
    else {
        form = (

            <Formik
                initialValues={
                    {
                        email: '',
                        password: '',
                        passwordConfirm: ''


                    }


                }
                onSubmit={(values) => {
                    console.log(values);
                    props.auth(values.email, values.password, values.passwordConfirm)
                    // props.history.push('login')

                }

                }
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    else if (values.password.length < 6) {
                        errors.password = 'Must be atleast 6 characters!';
                    }

                    if (!values.passwordConfirm) {
                        errors.passwordConfirm = 'Required';
                    } else if (values.password !== values.passwordConfirm) {
                        errors.passwordConfirm = 'Password field does no match!';
                    }
                    return errors;
                }}
            >

                {({ values, handleSubmit, handleChange, errors }) => (
                    <div style={{
                        border: "1px grey solid",
                        padding: "15px",
                        borderRadius: "7px",
                        backgroundColor: "violet"

                    }}>
                        <strong> if you have an account then <Button onClick={loginView} color="link">click here</Button> for login
                            <br />
                            <br />
                            Or Sign Up here !
                        </strong>
                        <br />
                        <br />

                        <form onSubmit={handleSubmit}>

                            <input



                                name="email"
                                placeholder="email"
                                className="form-control"
                                onChange={handleChange}
                                value={values.email}
                            />
                            <span style={{ color: "red" }}>{errors.email}</span>
                            <input



                                name="password"
                                placeholder="password"
                                className="form-control"
                                onChange={handleChange}
                                value={values.password}
                            />
                            <span style={{ color: "red" }}>{errors.password}</span>
                            <input
                                name="passwordConfirm"
                                placeholder="passwordConfirm"
                                className="form-control"
                                onChange={handleChange}
                                value={values.passwordConfirm}

                            />
                            <span style={{ color: "red" }}>{errors.passwordConfirm}</span>






                            <button type="submit" className="btn btn-success" style={{ marginTop: "10px" }}>
                                Submit
                            </button>


                        </form>
                    </div>
                )}

            </Formik>
        );
    }




    return (
        <div>
            {err}
            {form}

        </div>


    );



}
export default connect(mapstateToProps, mapDispatchToProps)(SignUp);