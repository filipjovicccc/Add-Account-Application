import React, {useEffect, useState} from 'react';
import Card from './Card';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { updateUsers } from '../store/userSlice';

function EditAccount() {
    const [inputData, setInputData] = useState({name: "", phone: "", email: "", deposit: ""});
    const {users} = useSelector((state) => state.userStore)
    const redirect = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        setInputData(users.find(user => user.id === parseInt(id)))
    }, [])


    const inputHandler = (e) => {
        let copyInputData = {...inputData}
        copyInputData[e.target.name] = e.target.value
        setInputData(copyInputData)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUsers(inputData))
        redirect("/editDeleteAccount")
    }
    return (
        <Card title={"Edit account"}>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Name" name="name"
                    value={inputData.name}
                    onInput={inputHandler}
                />
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Email"
                    name="email"
                    value={inputData.email}
                    onInput={inputHandler}/>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Phone"
                    name="phone"
                    value={inputData.phone}
                    onInput={inputHandler}/>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Deposit"
                    name="deposit"
                    value={inputData.deposit}
                    onInput={inputHandler}/>
                <button className="btn btn-primary px-5">Save Changes</button>
            </form>
        </Card>
    );
}

export default EditAccount;