import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ShowProperty = () => {
  const [property, setProperty] = useState(null);  // Initialize property as null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // For handling errors
  const { id } = useParams();  // Extract the ID from the URL

  useEffect(() => {
    if (!id) {
      setError("Property ID is missing.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null); // Reset error before making the request

    axios
      .get(`http://localhost:3000/flatregistration/${id}`)
      .then((res) => {
        console.log(res.data);  // Log the response data to check if it's correct
        setProperty(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error); // Log the error if fetching fails
        setError("Error fetching the property details");
        setLoading(false);
      });
  }, [id]);  // The effect will run whenever `id` changes

  // Show loading state or error message
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;  // Display error message
  }

  // Render the property details once the data is fetched
  if (!property) {
    return <div>No property found.</div>;
  }

  return (
    <div className="w-72 h-40 flex flex-col justify-center gap-2 bg-neutral-50 rounded-lg shadow p-2">
      <div className="flex gap-2">
        {/* Display property image if available */}
        <img
          className="bg-neutral-500 w-24 h-24 shrink-0 rounded-lg"
          src={property.imageURL || '/path/to/default-image.jpg'}  // Provide a fallback image if imageURL is not available
          alt={property.houseName || 'Property Image'}
        />
        <div className="flex flex-col">
          <span className="font-bold text-black italic">{property.rent}</span>
          <span className="line-clamp-3 text-black">{property.location}</span>
        </div>
      </div>
      <button className="hover:bg-indigo-700 bg-indigo-500 font-bold text-neutral-50 rounded p-2">
        See more
      </button>
    </div>
  );
};

export default ShowProperty;
