"use client";
import React from "react";

function MainComponent() {
  const [user, setUser] = useState(null);
  const [step, setStep] = useState("login");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [qrCode, setQrCode] = useState(null);
  const [orderStatus, setOrderStatus] = useState(null);

  const timeSlots = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM"];

  const menuItems = {
    Veg: [
      {
        id: 1,
        name: "Vegetable Curry",
        price: "8.99",
        image: "/veg-curry.jpg",
      },
      {
        id: 2,
        name: "Garden Salad",
        price: "6.99",
        image: "/garden-salad.jpg",
      },
    ],
    Egg: [
      { id: 3, name: "Egg Fried Rice", price: "9.99", image: "/egg-rice.jpg" },
      {
        id: 4,
        name: "Egg Sandwich",
        price: "7.99",
        image: "/egg-sandwich.jpg",
      },
    ],
    "Non-Veg": [
      {
        id: 5,
        name: "Chicken Biryani",
        price: "12.99",
        image: "/chicken-biryani.jpg",
      },
      { id: 6, name: "Fish Curry", price: "11.99", image: "/fish-curry.jpg" },
    ],
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setStep("menu");
  };

  const handleOrder = () => {
    if (selectedCategory && selectedTime) {
      setStep("confirmation");
      setQrCode("sample-qr-url");
      setOrderStatus("Order Received");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 font-roboto">
            🍽️ Smart Canteen Reservation
          </h1>
        </div>

        {step === "login" && (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        )}

        {step === "menu" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(menuItems).map(([category, items]) => (
                <div
                  key={category}
                  className={`bg-white p-6 rounded-lg shadow-lg cursor-pointer ${
                    selectedCategory === category ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <h2 className="text-xl font-semibold mb-4">{category}</h2>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-md object-cover"
                        />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-gray-600">${item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Select Time Slot</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    className={`p-2 rounded-md ${
                      selectedTime === time
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleOrder}
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors"
            >
              Confirm Order
            </button>
          </div>
        )}

        {step === "confirmation" && (
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="mb-6">
              <div className="text-2xl mb-2">🎉 Order Confirmed!</div>
              <div className="text-gray-600">Status: {orderStatus}</div>
            </div>
            <div className="mb-6">
              <img
                src={qrCode}
                alt="QR Code for order"
                className="mx-auto w-48 h-48"
              />
            </div>
            <div className="text-sm text-gray-600">
              Show this QR code when picking up your order
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainComponent;