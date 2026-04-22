import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Phone } from "lucide-react";
import { isValidPhoneNumber } from "libphonenumber-js";

const PhoneField = ({ value, onChange, error, setError }) => {
  const [country, setCountry] = useState("ng");

  // Auto-detect country
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data?.country_code) {
          setCountry(data.country_code.toLowerCase());
        }
      })
      .catch(() => {});
  }, []);

  const handleChange = (phone, countryData) => {
    onChange(phone, countryData);

    // validation
    if (!phone || !isValidPhoneNumber(`+${phone}`)) {
      setError("Invalid phone number");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <label className="text-sm font-semibold">Phone Number</label>

      <div className="relative">
        <Phone className="absolute top-2 left-2 w-4 z-10 text-gray-400" />

        <PhoneInput
          country={country}
          value={value}
          onChange={handleChange}
          enableSearch
          countryCodeEditable={false}

          format="(....) ...-...."

          containerClass="!w-full"
          inputClass={`
            !w-full !pl-[48px] !py-2 !bg-transparent !rounded-md
            ${error ? "!border-red-500" : "!border-gray-300"}
          `}
          buttonClass="!bg-transparent !border-none !left-[28px]"
          dropdownClass="!bg-white !text-black"
        />
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default PhoneField;