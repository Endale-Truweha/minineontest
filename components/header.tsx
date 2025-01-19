"use client";

export default function Header() {
  const companyName = "Your Company"; // Define the company name
  const userName = "John Doe"; // Define the user name

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-ethBlack-600  text-white shadow-md">
      {/* Company Name */}
      <div className="text-lg font-bold">{companyName}</div>

      {/* User Name */}
      <div className="text-sm font-medium">
        Welcome, <span className="font-semibold">{userName}</span>
      </div>
    </header>
  );
}
