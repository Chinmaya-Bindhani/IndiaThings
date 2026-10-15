import { Link } from 'react-router-dom'
import AuthLayout from './AuthLayout'

function Login() {
  return (
    <AuthLayout>
      <h2 className="mb-6 text-2xl font-semibold">Sign in</h2>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="h-11 border border-neutral-300 px-4 outline-none focus:border-black"
        />
        <input
          type="password"
          placeholder="Password"
          className="h-11 border border-neutral-300 px-4 outline-none focus:border-black"
        />
        <button
          type="submit"
          className="h-11 bg-[#0a0a0a] font-mono text-sm uppercase tracking-widest text-white hover:bg-neutral-800"
        >
          Sign in
        </button>
      </form>
      <p className="mt-4 text-sm text-neutral-500">
        Don't have an account?{' '}
        <Link to="/register" className="text-black underline">
          Register
        </Link>
      </p>
    </AuthLayout>
  )
}

export default Login