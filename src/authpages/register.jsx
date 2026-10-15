import { Link } from 'react-router-dom'
import AuthLayout from './AuthLayout'

function Register() {
  return (
    <AuthLayout>
      <h2 className="mb-6 text-2xl font-semibold">Create account</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full name"
          className="h-11 border border-neutral-300 px-4 outline-none focus:border-black"
        />
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
          Register
        </button>
      </form>
      <p className="mt-4 text-sm text-neutral-500">
        Already have an account?{' '}
        <Link to="/login" className="text-black underline">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  )
}

export default Register