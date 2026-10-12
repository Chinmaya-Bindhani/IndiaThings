function AuthLayout({ children }) {
  return (
    <div className="grid min-h-screen md:grid-cols-2">
      {/* Left side: company logo and text */}
      <div className="hidden flex-col items-center justify-center gap-4 bg-neutral-100 p-10 md:flex">
        <img src="/logo.png" alt="Cartwell logo" className="h-16 w-16" />
        <h1 className="text-4xl font-semibold">Cartwell</h1>
        <p className="max-w-sm text-center text-neutral-500">
          Shop the best in audio, gaming, wearables and more.
        </p>
      </div>

      {/* Right side: the form */}
      <div className="flex items-center justify-center p-6 bg-neutral-00">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  )
}

export default AuthLayout