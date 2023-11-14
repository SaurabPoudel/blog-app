"use client";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  return (
    <nav className="flex w-full justify-center border-b-2 border-dotted border-b-green-500 pt-3">
      <div className=" flex justify-center gap-3 md:max-w-6xl">
        <Link href="/" className="my-auto">
          <span className=" px-7 text-3xl">Logo</span>
        </Link>
        <span className="flex-grow"></span>
        <SearchBar />
        <button
          type="button"
          className="my-4 rounded-lg border border-green-700 px-3 py-1 text-center text-sm font-medium text-green-700 hover:bg-green-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-600 dark:hover:text-white dark:focus:ring-green-800"
        >
          Create
        </button>

        <span className="flex-grow"></span>
        {isSignedIn && (
          <div className="text-bold item-center flex justify-center text-xl">
            <div className="flex flex-col items-center pr-3">
              <Link href="/user-profile">
                <img className="h-14 w-14 rounded-full" src={user.imageUrl} />
              </Link>
              <span className="mr-2 text-sm">./{user.username}</span>
            </div>
            <SignOutButton />
          </div>
        )}
        {!isSignedIn && <SignInButton />}
      </div>
    </nav>
  );
};

const SearchBar = () => {
  return (
    <form className="my-auto w-full md:w-[685px]">
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-green-500 dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            className="h-4 w-4 text-green-500 dark:text-green-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="dark:text-green block w-full rounded-lg border border-green-300 bg-slate-50 p-4 ps-10 text-sm text-green-900 focus:border-green-500 focus:ring-green-500 dark:border-green-600 dark:bg-black dark:placeholder-green-400 dark:focus:border-green-500 dark:focus:ring-green-500"
          placeholder="Search Blogs.."
          required
        />
        <button
          type="submit"
          className="absolute bottom-2.5 end-2.5 rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Navbar;
