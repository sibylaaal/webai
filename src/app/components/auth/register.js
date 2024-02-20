'use client'

import { useForm } from 'react-hook-form';
import AlertDanger from '../alerts/danger';
import usePost from '@/app/utils/usePost';
import Link from 'next/link';
import Loader from '../loaders/loader';
import Spinner from '../loaders/spinner';
import SuccessAlert from '../alerts/success';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Login } from '@/app/utils/redux/slices/AuthSlices';

export default function Register(){
  const { register, watch, formState: { errors } ,handleSubmit ,reset} = useForm();
 const dispatch=useDispatch()
 const router=useRouter()
  const {PostwithOutjson,Loading,data,error}=usePost()
  const onSubmit = () => {
    const formData = new FormData();
    formData.append("username", event.target.username.value);
    formData.append("email", event.target.email.value);
    formData.append("password", event.target.password.value);
    formData.append("file", event.target.file.files[0]);
    PostwithOutjson("register", formData);

    dispatch(Login(data))
    router.push("/")
  reset()
};
    return(

        <>
        
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
            <Link href="/Auth/login" className="underline font-medium text-black">
              Sign up now
      
          </Link>
          </div>
        </div>
        {/* Login box */}
        <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
          <div className="flex flex-col space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Sign up to account
            </h2>
            <p className="text-md md:text-xl">
             Make your new Brand account right now
            </p>
          </div>
          {Loading&&<Loader/>}     

          <div className="flex flex-col max-w-md space-y-5">
            <form   enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>

      
        <input
                  {...register("email",{required:true},{pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Please enter an email"})}
              type="text"
              placeholder="email"
              className="flex px-3 py-2 md:px-4  w-full md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
            />
                                      <div className='p-3'> {errors.email && <AlertDanger message={"please enter an valid email"}/>}
</div>
            
                <input
                  {...register("username",{required:true})}
              type="text"
              placeholder="username"
              className="flex px-3 py-2 mb-4 md:px-4   w-full md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
            />


<section className=" overflow-auto p-2 w-full flex flex-col">
  <header className="border-dashed border-2 border-gray-400 py-2 flex flex-col justify-center items-center">
    <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
      <span>Drag and drop your</span>&nbsp;<span className='font-bold'>Image</span>
    </p>
    <input                   {...register("file",{required:true})}
 id="hidden-input" type="file" multiple=""  />
   
  </header>
 
</section>
<div className='p-3'> {errors.file && <AlertDanger message={"please enter an valid file"}/>}</div>




<input
                  {...register("password",{required:true})}
              type="password"
              placeholder="password"
              className="flex px-3 py-2 md:px-4  w-full md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
            />

<div className='p-3'> {errors.password && <AlertDanger message={"password required"}/>}
</div>
                <input
 {...register("confirmPassword", {
  required: "You must confirm your password",
  validate: value =>
    value === watch('password') || "The passwords do not match"
})}
type="password"

              placeholder="confirme password"
              className="flex px-3 py-2 md:px-4  w-full md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
            />
            <div className='p-3'> {errors.confirmPassword && <AlertDanger message={"confirmPassword required"}/>}
</div>
<button className="flex items-center w-full justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
              {
                Loading?
                (<Spinner/>)
                :
                ('Sign-up')
              }
              
            </button>
            <div className="p-2">
            {data?.message?<AlertDanger message={"invalid "}/>:null}
            {data?.user?<SuccessAlert message={"welcome "}/>:null}
      </div>
            </form>
          
          </div>
        </div>
        {/* Footer */}
     
      </div>
    </div>
  </div>
        


        
        
        </>
    )
}