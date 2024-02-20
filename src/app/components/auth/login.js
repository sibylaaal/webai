
'use client'
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import Usepost from "@/app/utils/usePost";
import Loader from "../loaders/loader";
import Spinner from "../loaders/spinner";
import SuccessAlert from "../alerts/success";
import AlertDanger from '../alerts/danger';
import Link from "next/link";
import { Login } from "@/app/utils/redux/slices/AuthSlices";
import { useEffect } from "react";

export default function AuthlOG() {
  const { register, watch, formState: { errors }, handleSubmit } = useForm();
  const { Post, Loading, data2, error } = Usepost();
  const dispatch = useDispatch();
  const router = useRouter();


  const onSubmit=(data)=>{

    Post("login",data)
   
     
  }
 
    return(
        <>
        
        <>
  {/* Example */}
  <div className="flex min-h-screen bg-white">
    {/* Container */}
    <div className="flex flex-row w-full">
      {/* Sidebar */}
      <div className="hidden lg:flex flex-col justify-between bg-[#ffe85c] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
        <div className="flex items-center justify-start space-x-3">
          <span className="bg-black rounded-full w-8 h-8" />
          <a href="#" className="font-medium text-xl">
          <img className="h-[55px] w-[55px] rounded-xl " src="/logo.png" />

          </a>
        </div>
        <div className="space-y-5">
          <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
            Enter your account and discover new experiences
          </h1>
          <p className="text-lg">You do not have an account?</p>
         <Link href={"/Auth/register"}> <button className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
            Create account here
          </button></Link>
        </div>
        <p className="font-medium">© 2022 Company</p>
      </div>
      {/* Login */}
      <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
        <div className="flex lg:hidden justify-between items-center w-full py-4">
          <div className="flex items-center justify-start space-x-3">
            <span className="bg-black rounded-full w-6 h-6" />
            <img className="h-[55px] w-[55px] rounded-xl " src="/logo.png" />

          </div>
          <div className="flex items-center space-x-2">
            <span>Not a member? </span>
            <Link href={"/Auth/register"} className="underline font-medium text-black]">
              Sign up now
            </Link>
          </div>
        </div>
        {/* Login box */}
        <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
          <div className="flex flex-col space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Sign in to account
            </h2>
            <p className="text-md md:text-xl">
              Login to ur Account
            </p>
          </div>  
               {Loading&&<Loader/>}     

          <div className="flex flex-col max-w-md space-y-5">
            <form  onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("email",{required:true})}
              placeholder="Username"
              className="flex px-3 w-full py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
            />

<div className='p-3'> {errors.email && <AlertDanger message={"email required"}/>}
</div>
                 <input
              type="text"
              placeholder="password"
              {...register("password",{required:true})}

              className="flex w-full px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
            />
                               <div className='p-3'> {errors.password && <AlertDanger message={"password required"}/>}
</div>
            <button className="flex items-center w-full justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
              {
                Loading?
                (<Spinner/>)
                :
                ('Login')
              }
              
            </button>
            <div className="p-2">
            {data2?.message?<AlertDanger message={"invalid Email or password"}/>:null}
            {data2?.user?<SuccessAlert message={"welcome back"}/>:null}
      </div>
          </form>
          </div>
        </div>
     
      </div>
    </div>
  </div>
  {/* Example */}
</>


        
        </>
    )
}