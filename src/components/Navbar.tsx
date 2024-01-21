"use client";

import { useTheme } from "next-themes";

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const handleTheme = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
    }

    if (resolvedTheme === "dark") {
      setTheme("light");
    }
  };
  return (
    <header className="py-6 bg-white dark:bg-slate-900">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-slate-900 dark:text-white">ThemeContext</div>
        <div>
          <button
            onClick={handleTheme}
            className="px-5 py-2.5 bg-blue-500 rounded-md text-white dark:text-white"
          >
            {resolvedTheme}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
