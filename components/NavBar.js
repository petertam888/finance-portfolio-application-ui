import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-900 py-4 mb-8">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href={`/portfolio`}>
            <button className="hover:bg-blue-400 bg-blue-600 text-white py-2 px-4 rounded-lg">Portfolio</button>
          </Link>
        </li>
        <li>
          <Link href={`/add_transaction`}>
            <button className="hover:bg-blue-400 bg-blue-600 text-white py-2 px-4 rounded-lg">Add Transaction Record</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

















