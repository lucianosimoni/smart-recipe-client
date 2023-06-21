import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className="flex flex-row gap-2 items-stretch">
      <Link
        href="/dashboard"
        className="w-full rounded-md flex text-center justify-center items-center border-gray-200 dark:border-gray-500 border px-2"
      >
        Home
      </Link>
      <Link
        href="/dashboard/explore"
        className="w-full rounded-md flex text-center justify-center items-center border-gray-200 dark:border-gray-500 border px-2"
      >
        Explore
      </Link>
      <Link
        href="/dashboard/my-recipes"
        className="w-full rounded-md flex text-center justify-center items-center border-gray-200 dark:border-gray-500 border px-2"
      >
        My Recipes
      </Link>
      <Link
        href="/dashboard/profile"
        className="w-full rounded-md flex text-center justify-center items-center border-gray-200 dark:border-gray-500 border px-2"
      >
        Profile
      </Link>
    </div>
  );
}
