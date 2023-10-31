import { useState } from "react";
import { Link } from "react-router-dom";
import Form from '../../utilities/Forms'

const Register = () => {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDOB] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [validate, setValidate] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validateRegister = () => {
        let isValid = true;

        let validator = Form.validator({
            firstname: {
                value: firstname,
                isRequired: true,
            },
            lastname: {
                value: lastname,
                isRequired: true,
            },
            phone: {
                value: phone,
                isRequired: true,
            },
            dob: {
                value: dob,
                isRequired: true,
            },
            gender: {
                value: gender,
                isRequired: true,
            },
            password: {
                value: password,
                isRequired: true,
                minLength: 6
            }
        });

        if (validator !== null) {
            setValidate({
                validate: validator.errors
            })

            isValid = false
        }
        return isValid;
    }

    const register = (e) => {
        e.preventDefault();

        const validate = validateRegister();

        if (validate) {
            setValidate({});
            setFirstName('');
            setLastName('');
            setPhone('');
            setDOB('');
            setGender('');
            setPassword('');
            alert('Successfully Register User');
        }
    }

    const togglePassword = (e) => {
        if (showPassword) {
            setShowPassword(false);
        } else {
            setShowPassword(true)
        }
    }

    return (
        <div className="row g-0 auth-wrapper">
            <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                <div className="auth-background-holder"></div>
                <div className="auth-background-mask"></div>
            </div>

            <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
                <div className="d-flex flex-column align-content-end">
                    <div className="auth-body mx-auto">
                        <p>Create your Account</p>
                        <div className="auth-form-container text-start">
                            <form className="auth-form" method="POST" onSubmit={register} autoComplete={'off'}>

                                <div className="firstname mb-3">
                                    <input type="text"
                                        className={`form-control ${validate.validate && validate.validate.firstname ? 'is-invalid ' : ''}`}
                                        id="firstname"
                                        name="firstname"
                                        value={firstname}
                                        placeholder="firstname"
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.firstname) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.firstname) ? validate.validate.firstname[0] : ''}
                                    </div>
                                </div>


                                <div className="lastname mb-3">
                                    <input type="text"
                                        className={`form-control ${validate.validate && validate.validate.lastname ? 'is-invalid ' : ''}`}
                                        id="lastname"
                                        name="lastname"
                                        value={lastname}
                                        placeholder="lastname"
                                        onChange={(e) => setLastName(e.target.value)}
                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.lastname) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.lastname) ? validate.validate.lastname[0] : ''}
                                    </div>
                                </div>

                                <div className="dob mb-3">
                                    <input type="dob"
                                        className={`form-control ${validate.validate && validate.validate.dob ? 'is-invalid ' : ''}`}
                                        id="dob"
                                        name="dob"
                                        value={dob}
                                        placeholder="Date Of Birth"
                                        onChange={(e) => setDOB(e.target.value)}
                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.dob) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.dob) ? validate.validate.dob[0] : ''}
                                    </div>
                                </div>
                                <div className="gender mb-3">
                                    <input type="gender"
                                        className={`form-control ${validate.validate && validate.validate.gender ? 'is-invalid ' : ''}`}
                                        id="gender"
                                        name="gender"
                                        value={gender}
                                        placeholder="Date Of Birth"
                                        onChange={(e) => setGender(e.target.value)}
                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.gender) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.gender) ? validate.validate.gender[0] : ''}
                                    </div>
                                </div>

                                <div className="phone mb-3">
                                    <input type="phone"
                                        className={`form-control ${validate.validate && validate.validate.phone ? 'is-invalid ' : ''}`}
                                        id="phone"
                                        name="phone"
                                        value={phone}
                                        placeholder="phone number"
                                        onChange={(e) => setPhone(e.target.value)}
                                    />

<div className={`invalid-feedback text-start ${(validate.validate && validate.validate.phone) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.phone) ? validate.validate.phone[0] : ''}
                                    </div>
                                </div>

                                <div className="password mb-3">
                                    <div className="input-group">
                                        <input type={showPassword ? 'text' : 'password'}
                                            className={`form-control ${validate.validate && validate.validate.password ? 'is-invalid ' : ''}`}
                                            name="password"
                                            id="password"
                                            value={password}
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />

                                        <button type="button" className="btn btn-outline-primary btn-sm" onClick={(e) => togglePassword(e)} ><i className={showPassword ? 'far fa-eye' : 'far fa-eye-slash'} ></i> </button>

                                        <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.password) ? 'd-block' : 'd-none'}`} >
                                            {(validate.validate && validate.validate.password) ? validate.validate.password[0] : ''}
                                        </div>
                                    </div>

                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary w-100 theme-btn mx-auto">Sign Up</button>
                                </div>
                            </form>

                            <hr />
                            <div className="auth-option text-center pt-2">Have an account? <Link className="text-link" to="/login" >Sign in</Link></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Register;