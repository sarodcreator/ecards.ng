import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/authSlice";
import { ShieldCheck } from "lucide-react";

export const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [loading, setLoading] = useState(false);

  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 🚨 Guard (if user comes directly)
  useEffect(() => {
    if (!state?.userId) {
      navigate("/signup");
    }
  }, []);

  // ⏱️ Countdown timer
  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // ✅ Verify OTP
  const verifyHandler = async () => {
    if (otp.length < 6) {
      return toast.error("Enter a valid 6-digit OTP");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "/verify-otp",
        {
          userId: state.userId,
          otp,
        },
        { withCredentials: true }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success("Account verified!");
        navigate("/dashboard");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // 🔁 Resend OTP
  const resendHandler = async () => {
    try {
      await axios.post(
        "/resend-otp",
        { userId: state.userId },
        { withCredentials: true }
      );

      toast.success("OTP resent");
      setTimer(60);
    } catch {
      toast.error("Failed to resend OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="w-full max-w-md p-6 rounded-2xl shadow-lg space-y-5">

        <div className="flex flex-col items-center space-y-2">
          <ShieldCheck className="w-8 h-8 text-green-400" />
          <h2 className="text-2xl font-bold">Verify OTP</h2>
          <p className="text-sm text-gray-400 text-center">
            Code sent to {state?.contact}
          </p>
        </div>

        {/* OTP Input */}
        <Input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter 6-digit OTP"
          maxLength={6}
          className="text-center tracking-[6px]"
        />

        {/* Verify Button */}
        <Button
          onClick={verifyHandler}
          disabled={loading}
          className="w-full"
        >
          {loading ? "Verifying..." : "Verify"}
        </Button>

        {/* Resend */}
        <div className="text-center">
          <button
            disabled={timer > 0}
            onClick={resendHandler}
            className="text-sm text-blue-400"
          >
            {timer > 0
              ? `Resend in ${timer}s`
              : "Resend OTP"}
          </button>
        </div>

      </div>
    </div>
  );
};