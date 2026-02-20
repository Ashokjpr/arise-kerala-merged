import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl  text-red-700"><i>404</i></h1>

      <p className="mt-4 text-lg text-gray-600">
        Oops! This page doesn’t exist.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
