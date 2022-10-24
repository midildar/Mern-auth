import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Signup = () => {
  const [error, seterror] = useState("")
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    userPass: ""
  })
const handleChange = ({currentTarget: input}) => {
  setdata({...data,[input.name]: input.value})

}

const navigate = useNavigate()


const handleSubmit = async(event) =>{
event.preventDefault()
try {
  const url = "http://localhost:8080/api/users"
  const {data: res} = await axios.post(url,data)
  navigate("/login")
  console.log(res.message)
} catch (error) {
  if (error.responce && error.responce.status>=400
    && error.responce.status<=500){
      seterror(error.responce.data.message)
    }
}
}


  return (
    <div class="flex items-center justify-center h-screen bg-slate-400">
      <div class="p-6 rounded-lg shadow-lg bg-white max-w-md ">
        <h1 class= "flex justify-center mb-6">Register</h1>
  <form onSubmit={handleSubmit}>
    <div class="grid grid-cols-2 gap-4">
      <div class="form-group mb-6">
        <input type="text" class="form-control
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="First Name" name='firstName' value={data.firstName} required onChange={handleChange} />
      </div>
      <div class="form-group mb-6">
        <input type="text" class="form-control
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
          placeholder="last Name" name='lastName' value={data.lastName} required onChange={handleChange}/>
      </div>
    </div>
    <div class="form-group mb-6">
      <input type="email" class="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
        placeholder="Email Address" name='userEmail' value={data.userEmail} required onChange={handleChange}/>
    </div>
    <div class="form-group mb-6">
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
        placeholder="Password" name='userPass' value={data.userPass} required onChange={handleChange}/>
    </div>
    <button type="submit" class="  
      w-full
      px-6
      py-2.5
      bg-slate-900
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
      ease-in-out">Sign up</button>
      {error && <p>{error}</p>}
      <p class="text-gray-800 mt-6 text-center">Already a member? <Link to="/login"><p
        class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Signin</p></Link>
    </p>
    
  </form>
</div>
    </div>
  )
}

export default Signup