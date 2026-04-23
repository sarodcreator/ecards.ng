import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Label } from "@/components/ui/label";
import { Phone } from "lucide-react";
import { isValidPhoneNumber } from "react-phone-number-input";

const PhoneField = ({ value, onChange, error, setError }) => {
  const [country, setCountry] = useState("NG"); // fallback


  useEffect(() => {
    const detectCountry = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        if (data?.country_code) {
          setCountry(data.country_code); // e.g. "NG"
        }
      } catch (error) {
        console.log(error);
      }
    };

    detectCountry();
  }, []);

  const handleChange = (phone) => {
    onChange?.(phone);

    if (!phone || !isValidPhoneNumber(phone)) {
      setError?.("Invalid phone number");
    } else {
      setError?.("");
    }
  };

  return (
    <div className="flex flex-col gap-0 items-left text-left">
      {/* <Label className="text-[14px] !w-[100px] font-bold !text-left"> */}
      {/* Phone Number */}
      {/* </Label> */}

      <div className="relative">
        {/* <Phone className="absolute top-3 left-3 w-4 h-4 text-muted-foreground z-10" /> */}

        <PhoneInput
          international
          defaultCountry={country}
          value={value}
          onChange={handleChange}
          className={`
            w-full pl-[8px] pr-3 py-2 rounded-md border text-sm bg-transparent
            ${
              error
                ? "border-red-500 text-red-400"
                : "border-input"
            }
          `}
        />
      </div>

      {error && <p className="!text-red-500 !text-[12px]">{error}</p>}
    </div>
  );
};

export default PhoneField;