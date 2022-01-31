const Header = () => {
    return (
        <header
            className="
      m-6
      text-3xl text-center
      dark:text-[#cdd9e5]
      flex
      items-center
      justify-between
    "
        >
            <div></div>
            <h1>
                App De Gifs By{" "}
                <a
                    className="
          transition
          duration-200
          hover:text-[#3c40c6]
          dark:hover:text-[#fcd34d]
        "
                    target="_blank"
                    href="https://twitter.com/gustavocadev"
                >
                    @gustavocadev
                </a>
            </h1>

            <div>
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    // onClick={handleToggle}
                >
                    <div>
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        ></path>
                    </div>

                    <div>
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                    </div>
                </svg>
            </div>
        </header>
    );
};

export default Header;
