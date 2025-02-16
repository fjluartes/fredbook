import Link from "next/link"
import { Home, Users, LogOut } from "lucide-react"

const LeftSidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md p-4 hidden md:block sticky top-16 h-[calc(100vh-4rem)]">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 rounded p-2">
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/friends" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 rounded p-2">
              <Users size={20} />
              <span>Friends</span>
            </Link>
          </li>
          <li>
            <button className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 rounded p-2 w-full text-left">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default LeftSidebar

