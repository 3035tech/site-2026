import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-[#0F172A] text-white min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <p className="text-[#A78BFA] text-sm font-bold uppercase tracking-widest">404</p>
          <h1 className="mt-4 text-3xl font-serif">Page not found</h1>
          <p className="mt-4 text-white/55">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/en"
            className="inline-flex mt-10 items-center justify-center rounded-xl bg-[#7C3AED] text-white px-8 py-3 font-medium"
          >
            Go to homepage
          </Link>
        </div>
      </body>
    </html>
  )
}
