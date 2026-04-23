/*import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_ENDPOINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '@/redux/authSlice';
import image from '@/assets/loginImage.jpg';

import { Mail, Lock, Eye, EyeOff, User, Phone, Globe } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';

export const Signup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
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
    onError: () => console.log("Login Failed"),
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
        `${USER_API_ENDPOINT}/register`,
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
    <div className="min-h-screen flex flex-row-reverse items-center justify-center bg-inherit">

     
      <div className="h-[768px] w-[60%] overflow-hidden">
        <img src={image} className="w-full -mt-[280px]" />
      </div>

      
      <div className="w-full max-w-md rounded-2xl shadow-lg p-6 space-y-5">

        <h1 className="text-3xl text-right">Create Account</h1>

        <form onSubmit={submitHandler} className="space-y-4">

          
          <div>
            <Label>Full Name</Label>
            <div className="relative">
              <User className="absolute top-2 left-2 w-4" />
              <Input name="name" onChange={changeEventHandler} className="pl-8" />
            </div>
          </div>

          
          <div>
            <Label>Email</Label>
            <div className="relative">
              <Mail className="absolute top-2 left-2 w-4" />
              <Input name="email" type="email" onChange={changeEventHandler} className="pl-8" />
            </div>
          </div>

          
          <div>
            <Label>Phone Number</Label>
            <div className="relative">
              <Phone className="absolute top-2 left-2 w-4" />
              <Input name="phoneNumber" type="tel" placeholder="+234..." onChange={changeEventHandler} className="pl-8" />
            </div>
          </div>

          
          <div>
            <Label>Country</Label>
            <div className="relative">
              <Globe className="absolute top-2 left-2 w-4" />
              <Input name="country" onChange={changeEventHandler} className="pl-8" />
            </div>
          </div>

         
          <div>
            <Label>Date of Birth</Label>
            <Input type="date" name="dob" value={input.dob} onChange={changeEventHandler} />
          </div>

          
          <div>
            <Label>Password</Label>
            <div className="relative">
              <Lock className="absolute top-2 left-2 w-4" />
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                value={input.password}
                onChange={changeEventHandler}
                className="pl-8"
                maxLength={24}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2">
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

         
          <div>
            <Label>Confirm Password</Label>
            <div className="relative">
              <Lock className="absolute top-2 left-2 w-4" />
              <Input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={input.confirmPassword}
                onChange={changeEventHandler}
                className="pl-8"
                maxLength={24}
              />
            </div>
          </div>

         
          <Button disabled={loading} className="w-full">
            {loading ? "Loading..." : "Create Account"}
          </Button>

        </form>

        
        <div className="flex items-center gap-2">
          <div className="flex-1 border"></div>
          <span className="text-xs">OR</span>
          <div className="flex-1 border"></div>
        </div>

       
        <Button onClick={() => googleLogin()} className="w-full">
          <FcGoogle className="mr-2" />
          Continue with Google
        </Button>

        
        <p className="text-center text-sm">
          Already have an account?
          <Link to="/login" className="text-blue-400 ml-1">Login</Link>
        </p>

      </div>
    </div>
  );
};*/

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import image from "@/assets/loginImage.jpg";

import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";

import PhoneField from "@/components/ui/PhoneFields";

export const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const [input, setInput] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dob: "",
    country: "",
  });

  const { loading, user } = useSelector((store) => store.auth);

  // Google login
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.post(`${USER_API_ENDPOINT}/google-auth`, {
          token: tokenResponse.access_token,
        });

        if (res.data.success) {
          dispatch(setUser(res.data.user));
          navigate("/dashboard");
        }
      } catch (err) {
        console.log(err);
      }
    },
    onError: () => console.log("Login Failed"),
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!input.name || !input.email || !input.password) {
      return toast.error("Please fill all required fields");
    }

    if (phoneError) {
      return toast.error("Enter a valid phone number");
    }

    if (input.password !== input.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      dispatch(setLoading(true));

      const res = await axios.post(`${USER_API_ENDPOINT}/register`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success("OTP sent");

        // Redirect to OTP page
        navigate("/verify-otp", {
          state: {
            userId: res.data.userId,
            contact: input.email || input.phoneNumber,
          },
        });
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
    <div className="min-h-screen flex flex-row-reverse items-center justify-center">
      {/* Image */}
      <div className="h-[768px] w-[60%] overflow-hidden">
        <img src={image} className="w-full -mt-[280px]" />
      </div>

      {/* Form */}
      <div className="w-full max-w-md rounded-2xl shadow-lg p-6 space-y-5">
        <div className="w-[40%] p-[40px]">
          <div className="flex items-center gap-2 mb-[64px]">
            <span className="font-bold text-1xl text-[#54acbf]">
              send<span className="text-[#00578dff]">cards</span>
            </span>
          </div>
        </div>
        <h1 className="!text-[32px] !mb-[8px] !text-left">Create Account</h1>

        <form onSubmit={submitHandler} className="space-y-4">
          {/* Name */}
          <div>
            <Label>Full Name</Label>
            <div className="relative">
              <User className="absolute top-2 left-2 w-4" />
              <Input
                name="name"
                onChange={changeEventHandler}
                className="pl-8"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <Label>Email</Label>
            <div className="relative">
              <Mail className="absolute top-2 left-2 w-4" />
              <Input
                name="email"
                type="email"
                onChange={changeEventHandler}
                className="pl-8"
              />
            </div>
          </div>

          <PhoneField
            value={input.phoneNumber}
            onChange={(phone, countryData) =>
              setInput({
                ...input,
                phoneNumber: phone,
                country: countryData?.name || "",
              })
            }
            error={phoneError}
            setError={setPhoneError}
          />

          {/* DOB */}
          <div>
            <Label>Date of Birth</Label>
            <Input
              type="date"
              name="dob"
              value={input.dob}
              onChange={changeEventHandler}
            />
          </div>

          {/* Password */}
          <div>
            <Label>Password</Label>
            <div className="relative">
              <Lock className="absolute top-2 left-2 w-4" />
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                value={input.password}
                onChange={changeEventHandler}
                className="pl-8"
                maxLength={24}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Confirm Password (FIXED) */}
          <div className='flex flex-col gap-0 items-left text-left'>
            <Label className='text-[14px] font-bold'>Confirm Password</Label>
            <div className='relative items-center'>
              <Lock className="absolute top-2 left-2 w-4" />
              <Input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={input.confirmPassword}
                onChange={changeEventHandler}
                className="pl-8"
                maxLength={24}
              />
            </div>
          </div>

          {/* Submit */}
          <Button disabled={loading} className="w-full">
            {loading ? "Loading..." : "Create Account"}
          </Button>
        </form>

        {/* Divider */}
        <div className="flex justify-between items-center gap-[4px]">
          <div className="h-[1px] border-[1px] w-[100%] border-solid border-[#282828]"></div>
          <div>
            <p className="!text-[10px] text-bold font-600">OR</p>
          </div>
          <div className="h-[1px] border-[1px] w-[100%] border-solid border-[#282828]"></div>
        </div>

        {/* Google */}
        <Button
          type="submit"
          onClick={() => GoogleLogin()}
          className="w-[100%] mb-[16px] mt-[8px] btn-outline"
        >
          <FcGoogle size={17} className="mr-[8px]" />
          Continue with Google
          {/* <GoogleLogin onSuccess={(res) => console.log("Google Success:", res)} onError={() => console.log("Google Login Failed")} /> */}
        </Button>
        <div className="flex justify-between pb-[16px]">
          <p className="font-bold !text-center !text-[12px] w-[100%]">
            Already have an account?
            <Link
              to="/login"
              className=" !text-[#54acbf] hover:text-[#54acbf] hover:font-underline"
            >
              {" "}
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
