import { useState } from "react";
import { Link } from "react-router-dom";
import Form from '../../utilities/Forms'

const Forgot1 = () => {

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [validate, setValidate] = useState({});

    const validateforgotPassword = () => {
        let isValid = true;

        let validator = Form.validator({
            phone: {
                value: phone,
                isRequired: true,
                isPhone: true
            },
            password: {
                value: password,
                isRequired: true,
                isPassword: true
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

    const forgotPassword = (e) => {
        e.preventDefault();

        const validate = validateforgotPassword();

        if (validate) {
            alert('Reset password link is sent to '+phone);
            setValidate({});
            setPhone('');
            setPassword('')
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
                        <p>Forgot Password</p>
                        <div className="auth-form-container text-start">
                            <form className="auth-form" method="POST" onSubmit={forgotPassword} autoComplete={'off'}>
                                <div className="phone mb-3">
                                    <input type="phone"
                                        className={`form-control ${validate.validate && validate.validate.phone ? 'is-invalid ' : ''}`}
                                        id="phone"
                                        name="phone"
                                        value={phone}
                                        placeholder="Phone Number"
                                        onChange={(e) => setPhone(e.target.value)}
                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.phone) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.phone) ? validate.validate.phone[0] : ''}
                                    </div>
                                </div>

                                <div className="password mb-3">
                                    <input type="password"
                                        className={`form-control ${validate.validate && validate.validate.password ? 'is-invalid ' : ''}`}
                                        id="password"
                                        name="password"
                                        value={password}
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.password) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.password) ? validate.validate.password[0] : ''}
                                    </div>
                                </div>
                                
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary w-100 theme-btn mx-auto">Update Password</button>
                                </div>
                            </form>

                            <hr />
                            <div className="auth-option text-center pt-2"><Link className="text-link" to="/login" >Back to Login</Link></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Forgot1;