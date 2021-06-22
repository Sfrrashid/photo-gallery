import React from 'react';
import { Formik } from 'formik';
import { Alert, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { auth_login } from '../../Redux/AuthActionCreator';


const mapStateToProps = (state) => {
    return {
        Auth_Loading: state.auth.Auth_Loading,
        Auth_Msg: state.auth.Auth_Msg
    }
}

const mapDispatchToProps = dispatch => {
    return {
        auth_login: (email, password) => dispatch(auth_login(email, password))
    }
}

const Login = props => {




    const signupview = () => {
        props.history.push('signup')
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
                        password: ''



                    }


                }
                onSubmit={(values) => {
                    console.log(values);
                    props.auth_login(values.email, values.password)
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
                    return errors;
                }}
            >

                {({ values, handleSubmit, handleChange, errors }) => (
                    <div style={{
                        border: "1px grey solid",
                        padding: "15px",
                        borderRadius: "7px",

                    }}>
                        <strong> if you haven't  an account then <Button onClick={signupview} color="link">click here</Button> for SignUp
                            <br />
                            <br />
                            Or login here !
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);