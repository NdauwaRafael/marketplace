/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 8/29/2020 at 12:51 PM
 **/
import React, {Fragment} from 'react';
import TextInput from "../../common/form/Input";
import Textarea from "../../common/form/Textarea";
import {NavLink} from "react-router-dom";

const RegisterForm = ({user: { username, email, first_name, last_name,
    id_no, phone, password, cpassword, bio, is_farmer, is_buyer, is_admin}, onSave, onChange, errors}) => {
    return (
        <Fragment>
            <form onSubmit={onSave}>
                <TextInput
                    type='text'
                    name='username'
                    label="Username"
                    value={username}
                    error={errors.username}
                    onChange={onChange}/>

                <TextInput
                    type='email'
                    name='email'
                    label="Email"
                    value={email}
                    error={errors.email}
                    onChange={onChange}/>

                <TextInput
                    type='text'
                    name='first_name'
                    label="First Name"
                    value={first_name}
                    error={errors.first_name}
                    onChange={onChange}/>

                <TextInput
                    type='text'
                    name='last_name'
                    label="Last Name"
                    value={last_name}
                    error={errors.last_name}
                    onChange={onChange}/>

                <TextInput
                    type='text'
                    name='username'
                    label="Username"
                    value={username}
                    error={errors.username}
                    onChange={onChange}/>

                <TextInput
                    type='text'
                    name='id_no'
                    label="Id Number / Passport"
                    value={id_no}
                    error={errors.id_no}
                    onChange={onChange}/>

                <TextInput
                    type='number'
                    name='phone'
                    label="Phone"
                    value={phone}
                    error={errors.phone}
                    onChange={onChange}/>

                <Textarea
                    rows="3"
                    name='bio'
                    label="Bio"
                    value={bio}
                    error={errors.bio}
                    onChange={onChange} />

                <TextInput
                    type='password'
                    name='password'
                    label="Password"
                    value={password}
                    error={errors.password}
                    onChange={onChange}/>

                <TextInput
                    type='cpassword'
                    name='cpassword'
                    label="Confirm Password"
                    value={cpassword}
                    error={errors.cpassword}
                    onChange={onChange}/>

                <div className="row">
                    <div className="col">
                        <button type="submit" className="btn btn-primary" style={{marginRight: 20}}>Sign Up</button>
                        <NavLink to="/login" className="btn btn-secondary">Sign In</NavLink>
                    </div>
                </div>

            </form>
        </Fragment>
    )
}
export default RegisterForm;
