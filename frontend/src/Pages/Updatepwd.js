import React , {useState }from 'react'

import axios from 'axios'

export default function Updatepwd() {

    const [data, setdata] = useState([]);

    const handleinput = (e) => {
        setdata({
            ...data, [e.target.name]: e.target.value
        })
    }

    const Update = () => {
        if (data.email !== undefined && data.password !== undefined && data.newpassword !== undefined) {
            axios.post("http://localhost:4000/updatepassword", { data }).then((res) => {
                alert(res.data)
                window.location.reload()
            }).catch((error) => {
                console.log(error)
            })
        } else {
            alert("please insert data")
        }
    }



    return (
        <>
            <section className="update-password">
                <div className="login-div">
                    <label className='login-label' htmlFor="email">Email <br /><input name='email' type="text" className="sign-up-input login-input" placeholder='Please enter email' onChange={handleinput} /></label>


                    {/* <label className='login-label' htmlFor="role">Login as <br />
          <select name="role" id="" className="sign-up-input login-input" onChange={handleinput}>
            <option>Select role</option>
            <option value="customer">Customer</option>
            <option value="seller">Seller</option>
          </select>
          
          </label> */}

                    {/* <input name='role' type="text" className="sign-up-input login-input" placeholder='Seller or Customer' onChange={handleinput} /> */}

                    <label className='login-label' htmlFor="password">Password <br /><input name='password' type="text" className="sign-up-input login-input" placeholder='Please enter old password' onChange={handleinput} /></label>
                    <label className='login-label' htmlFor="password">New Password <br /><input name='newpassword' type="text" className="sign-up-input login-input" placeholder='Please enter new password' onChange={handleinput} /></label>

                    <button className="update-password" onClick={Update}>Update</button>
                </div>
            </section>

        </>
    )

}
