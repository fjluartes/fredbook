import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import { Textarea } from "~/components/ui/textarea"

export default function Home() {
  const posts = [
    { id: 1, author: "John Doe", content: "Just had a great day at the beach!", likes: 15, comments: 3 },
    { id: 2, author: "Jane Smith", content: "Check out my new painting!", likes: 24, comments: 7 },
    { id: 3, author: "Bob Johnson", content: "Anyone up for a game night this weekend?", likes: 8, comments: 12 },
  ]

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <Textarea placeholder="What's on your mind?" className="flex-grow" />
          </div>
          <div className="mt-4 flex justify-end">
            <Button>Post</Button>
          </div>
        </CardContent>
      </Card>

      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={`/placeholder-avatar-${post.id}.jpg`} alt={post.author} />
                <AvatarFallback>{post.author[0]}</AvatarFallback>
              </Avatar>
              <CardTitle>{post.author}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p>{post.content}</p>
            <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
              <span>{post.likes} Likes</span>
              <span>{post.comments} Comments</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

