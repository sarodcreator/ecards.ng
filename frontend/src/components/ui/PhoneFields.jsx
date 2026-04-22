import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2/lib/PhoneInput";   // ← THIS IS THE FIX
import "react-phone-input-2/lib/style.css";
import { Phone } from "lucide-react";
import { isValidPhoneNumber } from "libphonenumber-js";
import { Label } from "@/components/ui/label";   // ← using shadcn Label for consistency

export const PhoneField = ({ value, onChange, error, setError }) => {
  const [country, setCountry] = useState("ng");

  // Auto-detect country based on IP
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

    // Validation
    if (!phone || !isValidPhoneNumber(`+${phone}`)) {
      setError("Invalid phone number");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <Label>Phone Number</Label>

      <div className="relative">
        <Phone className="absolute top-2 left-2 w-4 h-4 text-muted-foreground z-10" />

        <PhoneInput
          country={country}
          value={value}
          onChange={handleChange}
          enableSearch
          countryCodeEditable={false}
          containerClass="!w-full"
          inputClass={`
            !w-full !pl-12 !py-2 !bg-transparent !rounded-md border
            ${error ? "!border-red-500 focus:!border-red-500" : "!border-input"}
          `}
          buttonClass="!bg-transparent !border-0 !left-8"
          dropdownClass="!bg-popover !text-popover-foreground"
        />
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};