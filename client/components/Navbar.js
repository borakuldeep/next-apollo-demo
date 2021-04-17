import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
            <a><h1>Apollo-Next App</h1></a>
        </Link>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/users/">
        <a>
          <b>User's List</b>
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
