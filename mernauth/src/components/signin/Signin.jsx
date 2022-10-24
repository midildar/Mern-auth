import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signin = () => {
    const [error, seterror] = useState("")
    const [data, setdata] = useState({
      userEmail: "",
      userPass: ""
    })

    const handleChange = ({currentTarget: input}) => {
        setdata({...data,[input.name]: input.value})
      
      }
      
    const handleSubmit = async(event) =>{
      event.preventDefault()
      try {
        const url = "http://localhost:8080/api/auth"
        const {data: res} = await axios.post(url,data)
        localStorage.setItem("token",res.data)
        window.location = "/"
        console.log(res.message)
      } catch (error) {
        if (error.responce && error.responce.status>=400
          && error.responce.status<=500){
            seterror(error.responce.data.message)
          }
      }
      }
      
    return (
    <div class="flex items-center justify-center h-screen bg-emerald-600" >
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
  <form onSubmit={handleSubmit}>
    <div class="form-group mb-6">
      <label for="exampleInputEmail2" class="form-label inline-block mb-2 text-gray-700">Email address</label>
      <input type="email" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
        placeholder="Email Address" name='userEmail' value={data.userEmail} required onChange={handleChange}/>
    </div>
    <div class="form-group mb-6">
      <label for="exampleInputPassword2" class="form-label inline-block mb-2 text-gray-700">Password</label>
      <input type="password" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
        placeholder="Password" name='userPass' value={data.userPass} required onChange={handleChange}/>
    </div>
    
    <button type="submit" class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Sign in</button>
      {error && <p>{error}</p>}
    <p class="text-gray-800 mt-6 text-center">Already a member? <Link to="/signup"><p
        class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Signup</p></Link>
    </p>
  </form>
</div>
    </div>
  )
}

export default Signin