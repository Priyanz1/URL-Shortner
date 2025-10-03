import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to QuickShort</h1>
        <p className="text-gray-600 mb-6">
          Shorten your long URLs into clean, shareable links in seconds. 
          Manage, track, and simplify your links with ease.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            to="/api/Login"
            className="px-6 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            to="/api/Register"
            className="px-6 py-2 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
