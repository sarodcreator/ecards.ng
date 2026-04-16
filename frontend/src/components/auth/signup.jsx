import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '@/redux/authSlice';
import { GoogleLogin } from '@react-oauth/google';

export const Signup = () => {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-5">

        <h1 className="text-2xl font-bold text-center text-gray-800">
          Create Account
        </h1>

        <form onSubmit={submitHandler} className="space-y-4">

          <Input name="name" placeholder="Full Name" onChange={changeEventHandler} />

          <Input name="email" type="email" placeholder="Email" onChange={changeEventHandler} />

          <Input name="phoneNumber" type="tel" placeholder="+234..." onChange={changeEventHandler} />

          <Input name="country" placeholder="Country" onChange={changeEventHandler} />

          <Input name="dob" type="date" onChange={changeEventHandler} />

          <Input name="password" type="password" placeholder="Password" onChange={changeEventHandler} />

          <Input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={changeEventHandler} />

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
        <div className="flex items-center gap-2">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={(res) => console.log("Google Success:", res)}
            onError={() => console.log("Google Login Failed")}
          />
        </div>

        {/* Canva Button */}
        <button
          type="button"
          className="w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition"
          onClick={() => alert("Canva login coming soon")}
        >
          Continue with Canva
        </button>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};