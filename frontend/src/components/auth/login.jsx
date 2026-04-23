import { useState, useEffect } from "react";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_ENDPOINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '@/redux/authSlice';
import '@/styles/main.css'
import image from '@/assets/loginImage.jpg'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { FcGoogle } from "react-icons/fc"
import { useGoogleLogin } from '@react-oauth/google'

export const Login = () => {

  const GoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.post(
          `${USER_API_ENDPOINT}/google-auth`,
          {
            token: tokenResponse.access_token,
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
    email: "",
    password: "",
  });

  const { loading, user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!input.email || !input.password) {
      return toast.error("All fields are required");
    }

    try {
      dispatch(setLoading(true));

      const res = await axios.post(
        `${USER_API_ENDPOINT}/login`,
        input,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(res.data);

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || error.message || "Login failed"
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user]);

  return (
    <div className='flex min-h-screen'>
      <div className="box-border caret-transparent h-[768px] w-[60%] overflow-hidden">
        <img
          alt="Happy stationery wares - thank you card for teacher"
          src={image}
          className="h-[auto] w-[100%] -mt-[280px]"
        />
    </div>
    <div className='w-[40%] p-[40px]'>
      <div className="flex items-center gap-2 mb-[64px]">
          <span className="font-bold text-1xl text-[#54acbf]">
            send<span className='text-[#00578dff]'>cards</span>
          </span>
      </div>
      <h2 className="!text-[32px] !mb-[8px] !text-left">Welcome back!</h2>
      <p className='text-left !mb-[24px]'>Sign in to access your dashboard and send Ecards <br/> to your family and friends</p>
      <form onSubmit={submitHandler} className='w-[100%]'>
        <div className="flex flex-col gap-0 items-left text-left bg-transparent">
          <Label className='text-[14px] font-bold' >Email</Label>
          <div className='relative items-center'>
            <Mail className='absolute my-auto top-2 w-[17px] ml-[8px]' />
            <Input
            type="email"
            name="email"
            value={input.email}
            onChange={changeEventHandler}
            placeholder="name@email.com"
            className='mb-[24px] !pl-[30px]'
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
        <div className='flex justify-between pb-[16px]'>
          <p className='font-bold  !text-right !text-[12px] w-[100%]'>
            <Link to="/forgotpassword" className='cursor-pointer text-[#54acbf] hover:font-underline'>Forgot Password</Link>
          </p>
        </div>

        <Button type="submit" className='w-[100%] mb-[16px] mt-[8px]'>
          {loading ? "Loading..." : "Login"}
        </Button>

        
      </form>
      <div className='flex justify-between items-center gap-[4px]'>
        <div className='h-[1px] border-[1px] w-[100%] border-solid border-[#282828]'>
        </div>
        <div>
          <p className='!text-[10px] text-bold font-600'>OR</p>
        </div>
        <div className='h-[1px] border-[1px] w-[100%] border-solid border-[#282828]'>
        </div>
      </div>
      <Button type="submit" onClick={() => GoogleLogin()} className='w-[100%] mb-[16px] mt-[8px] btn-outline'>
        <FcGoogle size={17} className='mr-[8px]' />
         Continue with Google 
         {/* <GoogleLogin onSuccess={(res) => console.log("Google Success:", res)} onError={() => console.log("Google Login Failed")} /> */}
      </Button>
      <div className='flex justify-between pb-[16px]'>
          <p className='font-bold !text-center !text-[12px] w-[100%]'>
            Don't have an account?
            <Link to="/signup" className=' !text-[#54acbf] hover:text-[#54acbf] hover:font-underline'> Sign Up</Link>
          </p>
        </div>
    </div>
  </div>
  );
}