import { useState } from "react";
import CheckoutForm from "./CheckoutForm";

export const Premium = ({ isOpen, onClose }) => {
  const [plan, setPlan] = useState("yearly");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative">

        {/* Close */}
        <button 
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-400 hover:text-black"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-2xl font-semibold text-center">
          Go premium
        </h2>
        <p className="text-center text-sm text-gray-500 mt-1">
          ⭐⭐⭐⭐⭐ 4.8 out of 5
        </p>

        {/* Plans */}
        <div className="mt-6 space-y-3">
          
          {/* Yearly */}
          <div
            onClick={() => setPlan("yearly")}
            className={`flex items-center justify-between border rounded-xl p-3 cursor-pointer ${
              plan === "yearly"
                ? "border-purple-500 bg-purple-50"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-center gap-2">
              <input type="radio" checked={plan === "yearly"} readOnly />
              <div>
                <p className="font-medium">
                  Yearly 
                  <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                    Save 33%
                  </span>
                </p>
                <p className="text-xs text-gray-500">$26.99/year</p>
              </div>
            </div>
            <span className="font-semibold">$2.25/mo</span>
          </div>

          {/* Monthly */}
          <div
            onClick={() => setPlan("monthly")}
            className={`flex items-center justify-between border rounded-xl p-3 cursor-pointer ${
              plan === "monthly"
                ? "border-purple-500 bg-purple-50"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-center gap-2">
              <input type="radio" checked={plan === "monthly"} readOnly />
              <p className="font-medium">Monthly</p>
            </div>
            <span className="font-semibold">$3.49/mo</span>
          </div>
        </div>

        {/* Features */}
        <div className="mt-6 text-sm text-gray-600 space-y-2">
          <p>✔ 10,000+ premium designs</p>
          <p>✔ Ad-free experience</p>
          <p>✔ No watermark</p>
          <p>✔ Exclusive fonts</p>
          <p>✔ Unlimited Magic credits</p>
        </div>

        {/* Stripe Checkout */}
        <div className="mt-6">
          <CheckoutForm plan={plan} />
        </div>

        <p className="text-center text-xs text-gray-400 mt-2">
          Cancel anytime
        </p>

      </div>
    </Modal>
  );
}