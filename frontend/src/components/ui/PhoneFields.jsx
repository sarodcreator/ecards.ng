import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";  
import "react-phone-input-2/lib/style.css";
import { Phone } from "lucide-react";
import { isValidPhoneNumber } from "libphonenumber-js";
import { Label } from "@/components/ui/label";

const PhoneField = ({ value, onChange, error, setError }) => {
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
    onChange?.(phone, countryData);

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

export default PhoneField;

import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Phone } from "lucide-react";
import { isValidPhoneNumber } from "libphonenumber-js";
import { Label } from "@/components/ui/label";

const PhoneField = ({ value, onChange, error, setError }) => {
  const [country, setCountry] = useState("ng");

  // 🌍 Auto-detect country
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

  // 📱 Handle change safely
  const handleChange = (phone, countryData) => {
    // Always update parent safely
    onChange?.(phone, countryData);

    try {
      if (!phone || !isValidPhoneNumber(`+${phone}`)) {
        setError?.("Invalid phone number");
      } else {
        setError?.("");
      }
    } catch {
      setError?.("Invalid phone number");
    }
  };

  return (
    <div className="space-y-1">
      <Label>Phone Number</Label>

      <div className="relative">
        {/* Icon */}
        <Phone className="absolute top-3 left-3 w-4 h-4 text-muted-foreground z-10" />

        <PhoneInput
          country={country}
          value={value}
          onChange={handleChange}
          enableSearch
          countryCodeEditable={false}
          disableDropdown={false}

          // ✅ Container styling
          containerClass="!w-full"

          // ✅ Input styling (matches your other inputs)
          inputClass={`
            !w-full !pl-12 !pr-3 !py-2 
            !bg-transparent !rounded-md 
            !text-sm
            border
            ${error ? "!border-red-500 focus:!border-red-500" : "!border-input focus:!border-ring"}
          `}

          // ✅ Flag button styling
          buttonClass="!bg-transparent !border-0 !left-9"

          // ✅ Dropdown styling
          dropdownClass="!bg-popover !text-popover-foreground"

          // ✅ Formatting
          enableAreaCodes
          enableTerritories
          masks={{ ng: "(...) ...-...." }} // optional Nigeria format
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default PhoneField;*/


import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Label } from "@/components/ui/label";
import { Phone } from "lucide-react";
import { isValidPhoneNumber } from "react-phone-number-input";

const PhoneField = ({ value, onChange, error, setError }) => {
  const [country, setCountry] = useState("NG"); // fallback

  // 🌍 Auto-detect user country
  useEffect(() => {
    const detectCountry = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        if (data?.country_code) {
          setCountry(data.country_code); // e.g. "NG"
        }
      } catch (err) {
        console.log("Country detection failed");
      }
    };

    detectCountry();
  }, []);

  // 📱 Handle input
  const handleChange = (phone) => {
    onChange?.(phone);

    if (!phone || !isValidPhoneNumber(phone)) {
      setError?.("Invalid phone number");
    } else {
      setError?.("");
    }
  };

  return (
    <div className="space-y-1">
      <Label>Phone Number</Label>

      <div className="relative">
        <Phone className="absolute top-3 left-3 w-4 h-4 text-muted-foreground z-10" />

        <PhoneInput
          international
          defaultCountry={country}   // 🔥 auto-detected
          value={value}
          onChange={handleChange}
          className={`
            w-full pl-10 pr-3 py-2 rounded-md border text-sm bg-transparent
            ${error ? "border-red-500" : "border-input"}
          `}
        />
      </div>

      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default PhoneField;