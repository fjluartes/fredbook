"use client"
import { useState } from "react"
import { X, Minus, Maximize2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Input } from "~/components/ui/input"

const RightSidebar = () => {
  const [openChats, setOpenChats] = useState<number[]>([])
  const chats = [
    { id: 1, name: "John Doe", message: "Hey, how are you?" },
    { id: 2, name: "Jane Smith", message: "Did you see the new post?" },
    { id: 3, name: "Bob Johnson", message: "Let's catch up soon!" },
  ]

  const toggleChat = (id: number) => {
    setOpenChats((prev) => (prev.includes(id) ? prev.filter((chatId) => chatId !== id) : [...prev, id]))
  }

  return (
    <div className="w-64 bg-white shadow-md p-4 hidden lg:block sticky top-16 h-[calc(100vh-4rem)]">
      <h2 className="text-lg font-semibold mb-4">Chats</h2>
      <ul className="space-y-2">
        {chats.map((chat) => (
          <li
            key={chat.id}
            className="flex items-center space-x-2 hover:bg-gray-100 rounded p-2 cursor-pointer"
            onClick={() => toggleChat(chat.id)}
          >
            <Avatar>
              <AvatarImage src={`/placeholder-avatar-${chat.id}.jpg`} alt={chat.name} />
              <AvatarFallback>{chat.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{chat.name}</p>
              <p className="text-sm text-gray-500 truncate">{chat.message}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Chat windows */}
      <div className="fixed bottom-0 right-0 flex space-x-2 mr-2">
        {openChats.map((chatId) => {
          const chat = chats.find((c) => c.id === chatId)
          if (!chat) return null
          return (
            <div key={chat.id} className="w-64 bg-white shadow-md rounded-t-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-2 flex justify-between items-center">
                <span>{chat.name}</span>
                <div className="flex space-x-2">
                  <Minus size={18} className="cursor-pointer" />
                  <Maximize2 size={18} className="cursor-pointer" />
                  <X size={18} className="cursor-pointer" onClick={() => toggleChat(chat.id)} />
                </div>
              </div>
              <div className="h-64 overflow-y-auto p-2">{/* Chat messages would go here */}</div>
              <div className="p-2 border-t">
                <Input type="text" placeholder="Type a message..." className="w-full" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RightSidebar

