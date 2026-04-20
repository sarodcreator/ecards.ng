import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_ENDPOINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '@/redux/authSlice';
import { GoogleLogin } from '@react-oauth/google';
import image from '@/assets/loginImage.jpg'
// import '@/styles/main.css'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { FcGoogle } from "react-icons/fc"
import { useGoogleLogin } from '@react-oauth/google'

export const Signup = () => {

  const GoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/google-auth`,
          {
            token: tokenResponse.accees_token,
          }
        );

        if (res.data.success) {
          dispatch(setUser(res.data.user));
          navigate("/dashboard");
        }
      } catch (err) {
        console.log(err);
      }
    },
    onError: () => {
      console.log("Login Failed")
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const [input, setInput] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    dob: '',
    country: '',
  });

  const { loading, user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!input.name || !input.email || !input.password) {
      return toast.error("Please fill all required fields");
    }

    if (input.password !== input.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      dispatch(setLoading(true));

      const res = await axios.post(
        `${USER_API_END_POINT}/register`,
        input,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        navigate("/jobs");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user]);

  return (
    <div className="min-h-screen flex flex-row-reverse items-center justify-center bg-inherit ">
      <div className="box-border caret-transparent h-[768px] w-[60%] overflow-hidden">
        <img
          alt="Happy stationery wares - thank you card for teacher"
          src={image}
          className="h-[auto] w-[100%] -mt-[280px]"
        />
      </div>
      <div className="w-full max-w-md bg-inherit rounded-2xl shadow-lg p-6 space-y-5">

        <h1 className="!text-[32px] !mb-[8px] !text-right">
          Create Account
        </h1>

        <form onSubmit={submitHandler} className="space-y-4">

          <Input name="name" placeholder="Full Name" onChange={changeEventHandler} />

          <Input name="email" type="email" placeholder="Email" onChange={changeEventHandler} />

          <Input name="phoneNumber" type="tel" placeholder="+234..." onChange={changeEventHandler} />

          <Input name="country" placeholder="Country" onChange={changeEventHandler} />

          <div className="flex flex-col gap-0 items-left text-left">
            <Label className='text-[14px] font-bold'>Date of Birth</Label>
            <div className='relative items-center'>
              <Input
              type='date'
              name="dob"
              value={input.dob}
              onChange={changeEventHandler}
              className='mb-[4px] !pl-[8px] !placeholder:flex-row-reverse !justify-between'
            />
          </div>
        </div>

          <div className="flex flex-col gap-0 items-left text-left">
            <Label className='text-[14px] font-bold'>Password</Label>
            <div className='relative items-center'>
              <Lock className='absolute my-auto top-2 w-[17px] ml-[8px]' />
              <Input
              type={showPassword ? "text" : "password"}
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="********"
              className='mb-[4px] !pl-[30px]'
              maxLength={24}
            />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2 text-gray-400">
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
          </div>
        </div>

          <div className="flex flex-col gap-0 items-left text-left">
          <Label className='text-[14px] font-bold'>Confirm Password</Label>
          <div className='relative items-center'>
            <Lock className='absolute my-auto top-2 w-[17px] ml-[8px]' />
            <Input
            type={showPassword ? "text" : "password"}
            name="password"
            value={input.password}
            onChange={changeEventHandler}
            placeholder="********"
            className='mb-[4px] !pl-[30px]'
            maxLength={24}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2 text-gray-400">
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
          </div>
        </div>
          {loading ? (
            <Button disabled className="w-full">
              Loading...
            </Button>
          ) : (
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          )}

        </form>

        {/* Divider */}
        <div className="flex justify-between items-center gap-[4px]">
          <div className="h-[1px] border-[1px] w-[100%] border-solid border-[#282828]"></div>
          <span className="!text-[10px] text-bold font-600">OR</span>
          <div className="h-[1px] border-[1px] w-[100%] border-solid border-[#282828]"></div>
        </div>

        {/* Google Login */}
        <Button type="submit" onClick={() => GoogleLogin()} className='w-[100%] mb-[16px] mt-[8px] btn-outline'>
        <FcGoogle size={17} className='mr-[8px]' />
         Continue with Google 
         {/* <GoogleLogin onSuccess={(res) => console.log("Google Success:", res)} onError={() => console.log("Google Login Failed")} /> */}
      </Button>
      <div className='flex justify-between pb-[16px]'>
        <p className='font-bold !text-center !text-[12px] w-[100%]'>
          Already have an account?
          <Link to="/login" className=' !text-[#54acbf] hover:text-[#54acbf] hover:font-underline'> Login</Link>
        </p>
      </div>

        {/* Canva Button */}
        {/* <button
          type="button"
          className="w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition"
          onClick={() => alert("Canva login coming soon")}
        >
          Continue with Canva
        </button> */}
      </div>
    </div>
  );
};