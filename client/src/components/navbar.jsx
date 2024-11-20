import React from "react";
import Link from "next/link";
import CartIcon from "./cart-icon-navbar";
import CartBadge from "./cart-badge";
import ClientNavbar from "./navbar-client";

const Navbar = async () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start"></div>
      <div className="sm:navbar-center">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Book Store
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className=" btn btn-ghost btn-circle mr-3"
          >
            <div className="indicator mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              <CartBadge />
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <CartIcon />
          </div>
        </div>
        <ClientNavbar />
      </div>
    </div>
  );
};

export default Navbar;
