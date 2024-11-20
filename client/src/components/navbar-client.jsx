"use client";
import { getCurrentUser, getUserId, signout } from "@/store/userSlice";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";

function ClientNavbar() {
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const userId = useSelector(getUserId);
  return (
    <div className="flex items-center space-x-4">
      {user ? (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar "
          >
            <div className="w-10 rounded-full">
              <Image
                width={150}
                height={150}
                alt="Profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
          >
            <li>
              <Link
                href={`/user/${userId}`}
                className="justify-between text-lg"
              >
                Profile
              </Link>
            </li>

            <li>
              <button
                className="mt-5 btn btn-error h-8 text-white"
                onClick={() => {
                  dispatch(signout());
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <Link href={"/auth/login"} className="btn btn-primary mr-3">
          Login
        </Link>
      )}

      {/* <LoginButton /> */}
      <ThemeToggle />
    </div>
  );
}

export default ClientNavbar;
