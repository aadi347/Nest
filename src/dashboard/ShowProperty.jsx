import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ShowProperty = () => {
 
  return (
    <div className="w-72 h-40 flex flex-col justify-center gap-2 bg-neutral-50 rounded-lg shadow p-2">
     <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Property Name</h1>
        <span className="text-sm text-neutral-500">Price</span>
        </div>
      
    </div>
  );
};

export default ShowProperty;
