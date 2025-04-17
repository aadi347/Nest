import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts'

const blogData = [
  {
    title: 'React Basics',
    views: 3500,
    likes: 1200,
    comments: 150
  },
  {
    title: 'Advanced React Patterns',
    views: 4200,
    likes: 1800,
    comments: 300
  },
  {
    title: 'JavaScript Tips',
    views: 2700,
    likes: 900,
    comments: 90
  },
  {
    title: 'Node.js Guide',
    views: 3900,
    likes: 1300,
    comments: 200
  }
]

const BlogStatic = () => {
  return (
    <div className="w-full p-4 bg-white shadow rounded-md">
      <h2 className="text-xl font-semibold mb-4">Blog Performance Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={blogData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="views"
            fill="#8884d8"
            name="Views"
            animationDuration={1000}
            animationEasing="ease-out"
          />
          <Bar
            dataKey="likes"
            fill="#82ca9d"
            name="Likes"
            animationDuration={1200}
            animationEasing="ease-out"
          />
          <Bar
            dataKey="comments"
            fill="#ffc658"
            name="Comments"
            animationDuration={1400}
            animationEasing="ease-out"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BlogStatic
