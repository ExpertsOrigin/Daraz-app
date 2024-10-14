import React, { useState } from 'react'
import '../Assets/Style/Addproduct.css'
import axios from 'axios'

export default function Addproduct() {
  const [data, setdata] = useState({})


  const handleinput = (e) => {
    setdata({
      ...data, [e.target.name]: e.target.value
    })
  }


  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', () => {
      setdata({ ...data, blogimage: reader.result })
    })
  }


  const Addproduct = () => {
    if (data.catagory !== undefined && data.detail !== undefined && data.price !== undefined) {
      axios.post("http://localhost:4000/addproduct", { data }).then((res) => {
        alert(res.data.msg)
        window.location.reload();

      }).catch((error) => {
        console.log(error)
      })
    } else {
      alert("please add data")
    }
  }


  return (
    <>
      <div className="addproduct">
        <select name="catagory" id="" onChange={handleinput} >
          <option>Select Catagory</option>
          <option value="electronics">Electronics</option>
          <option value="grocery">Grocery</option>
          <option value="cosmetics">Cosmetics</option>
          <option value="accessories">Accessories</option>
          <option value="bathitem">Bathitems</option>
        </select>
        <input className='inputs' name='detail' type="text" placeholder='product details' onChange={handleinput} />
        <input className='inputs' name='price' type="text" placeholder='product price' onChange={handleinput} />
        <input type="file" name='image' onChange={handleImage} />
        {/* <label htmlFor="myfile" className='formh3'>Select image &nbsp;&nbsp;&nbsp; </label> */}
        {/* <input className='imgbtn' type="file" name='image' onChange={handleImage} /> */}
        {/* <label className='inputs' htmlFor="">img 1 <input type="file" name='image' onChange={handleimage} /></label> */}
        {/* <label className='inputs' htmlFor="">img 2 <input type="file" name='image2' onChange={handleimage} /></label>
        <label className='inputs' htmlFor="">img 3 <input type="file" name='image3' onChange={handleimage} /></label>
        <label className='inputs' htmlFor="">img 4 <input type="file" name='image4' onChange={handleimage} /></label> */}
        <button onClick={Addproduct} className='addbtn' >Submit</button>
      </div>




    </>
  )
}
