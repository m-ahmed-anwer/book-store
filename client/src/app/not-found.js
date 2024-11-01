// src/404.js

import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-base-200">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl">Page Not Found</h2>
      <p className="mt-2">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-5 btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
};

export default Custom404;
