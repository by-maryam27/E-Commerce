import { FcGoogle } from "react-icons/fc"

export default function Signup(){
    return(
        <div className="grid grid-cols-2 gap-5 pl-8 mt-10">
           <img src="/dl.beatsnoop 1.png" alt="image" className="h-[550px] w-[1000px]" />
    <div className="flex justify-center items-center min-h-screen pb-10">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold text-center mb-4">Create an account</h2>
        <p className="text-sm text-gray-600 text-center mb-6">Enter your details below</p>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email or Phone Number
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="Email or Phone Number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
          >
            Create Account
          </button>
        </form>
        <div className="my-4 text-center text-sm text-gray-600">OR</div>
        <button className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-600 py-2 px-4 rounded-md hover:bg-gray-200">
          <FcGoogle className="h-5 w-5" />
          Sign up with Google
        </button>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-red-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
        </div>
    )
}