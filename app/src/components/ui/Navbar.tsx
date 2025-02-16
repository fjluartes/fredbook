import { Search } from "lucide-react"
import { Input } from "~/components/ui/input"

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">f</div>
        <div className="flex-grow mx-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search Facebook"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:bg-white"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        <div className="flex items-center space-x-4">{/* Add profile picture or other navbar items here */}</div>
      </div>
    </nav>
  )
}

export default Navbar

