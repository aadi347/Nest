import React from 'react';

const blogData = [
  {
    title: 'React Mastery',
    image: 'https://media.istockphoto.com/id/537692968/photo/capturing-the-beauty-of-nature.jpg?s=612x612&w=0&k=20&c=V1HaryvwaOZfq80tAzeVPJST9iPoGnWb8ICmE-lmXJA=',
  },
  {
    title: 'Tailwind Magic',
    image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Next.js Power',
    image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'JavaScript Deep Dive',
    image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  },
];

const BlogHighlights = () => {
  return (
    <div className="w-full px-4 py-8 space-y-10 bg-black">
      {blogData.reduce((rows, item, index) => {
        if (index % 2 === 0) {
          rows.push([item]);
        } else {
          rows[rows.length - 1].push(item);
        }
        return rows;
      }, []).map((pair, idx) => (
        <div
          key={idx}
          className="grid grid-cols-5 gap-4 px-14"
        >
          {idx % 2 === 0 ? (
            <>
              {/* 60% left */}
              <BlogCard data={pair[0]} colSpan="col-span-3" />
              <BlogCard data={pair[1]} colSpan="col-span-2" />
            </>
          ) : (
            <>
              {/* 40% left */}
              <BlogCard data={pair[1]} colSpan="col-span-2" />
              <BlogCard data={pair[0]} colSpan="col-span-3" />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

const BlogCard = ({ data, colSpan }) => {
  if (!data) return null;
  return (
    <div className={`${colSpan} relative rounded-lg overflow-hidden shadow-md`}>
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-80 object-cover transform duration-300 ease-in-out hover:scale-95 rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h2 className="text-white text-xl font-bold text-left px-4">{data.title}</h2>
        <p className="text-white text-sm mt-2 px-4">
         {data.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        </p>

      </div>
    </div>
  );
};

export default BlogHighlights;
