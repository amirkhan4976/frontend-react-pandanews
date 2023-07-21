import React, { useContext, useEffect, useState } from 'react'
import NewsContext from '../context/NewsContext';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const navigate = useNavigate();

    const backend_url = "http://127.0.0.1:8000/";
    const context = useContext(NewsContext);
    const { setProgress } = context;
    const [accountInfo, setAccountInfo] = useState("");
    // Seperated Image and credentials from the same form as undefined behaviour occurs when image is upload and nothng changes was made to credentials
    const [selectedImage, setSelectedImage] = useState({ "profile_picture": null });
    const [credentials, setCredentials] = useState({
        "first_name": accountInfo.first_name,
        "last_name": accountInfo.last_name,
        "email": accountInfo.email,
    })

    const submit_update = async (element) => {
        element.preventDefault();
        setProgress(10);

        const formdata = new FormData();
        formdata.append("profile_picture", selectedImage.profile_picture);
        formdata.append("first_name", credentials.first_name);
        formdata.append("last_name", credentials.last_name);
        formdata.append("email", credentials.email);
        formdata.append("owner", accountInfo.owner.id);

        const url = `${backend_url}api/user/edit-profile/`;
        // eslint-disable-next-line
        const send_updated_data = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("access")
            },
            body: formdata,
        }).then(async (response) => {
            setProgress(40);
            const json = await response.json();
            setProgress(70);
            if (!json.errors) {
                navigate("/user-account");
                setProgress(100);
            } else {
                console.log(json);
                setProgress(100);
            }
        }).catch(error => {
            setProgress(65);
            console.log("Error: ", error);
            setProgress(100);
        })

    }

    const onchange = (element) => {
        setCredentials({ ...credentials, [element.target.name]: element.target.value });
    }

    const on_input_profile_picture = (element) => {
        setSelectedImage({ "profile_picture": element.target.files[0] });
    }

    const get_account_info = async () => {
        setProgress(10);
        const url = `${backend_url}api/user/edit-profile/`;
        try {
            setProgress(25);
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("access")
                }
            })
            setProgress(45);
            const json = await response.json();
            setProgress(70);
            setAccountInfo(json);
            setCredentials({
                "first_name": json.first_name,
                "last_name": json.last_name,
                "email": json.email,
            })
            setProgress(100);
        } catch (error) {
            setProgress(100);
            console.log("Error: ", error);
        }
    }

    useEffect(() => {
        get_account_info();
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container my-5 col-md-4">
            <div className="card p-4">
                {/* {error && <div className="alert alert-danger" role="alert">
                    Error: {error} </div>} */}

                <form method="post" onSubmit={submit_update} encType="multipart/form-data">

                    <h3 className="container my-4">Update your profile</h3>

                    <label htmlFor="profile_picture" className="form-label">Upload profile picture: </label>
                    <input className="form-control form-control-sm" onInput={on_input_profile_picture} name="profile_picture" id="profile_picture" type="file" />

                    <div className="my-3">
                        <label className="form-label" htmlFor="first_name">First Name</label>
                        <input type="text" name="first_name" value={credentials.first_name} id="first_name" onChange={onchange} className="form-control" />
                    </div>

                    <div className="my-3">
                        <label className="form-label" htmlFor="last_name">Last Name</label>
                        <input type="text" name="last_name" id="last_name" value={credentials.last_name} onChange={onchange} className="form-control" />
                    </div>

                    <div className="my-3">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={credentials.email} onChange={onchange} className="form-control" />
                    </div>

                    <button type="submit" className="btn btn-primary">Update</button>
                </form>

            </div>
        </div >
    )
}

export default EditProfile