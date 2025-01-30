import React, { useState, useEffect } from "react";
import axios from "axios";

function Account() {
  const [account, setAccount] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await axios.get("http://localhost:3000/account", { withCredentials: true });
        setAccount(response.data);
      } catch (error) {
        setMessage(error.response?.data || "Error fetching account details");
      }
    };

    fetchAccount();
  }, []);

  if (message) return <p>{message}</p>;
  if (!account) return <p>Loading account details...</p>;

  return (
    <div>
      <h2>Account Details</h2>
      <p><strong>Name:</strong> {account.userId.name}</p>
      <p><strong>Email:</strong> {account.userId.email}</p>
      <p><strong>Account Type:</strong> {account.accountType}</p>
      <p><strong>Address:</strong> {account.details.address || "N/A"}</p>
      <p><strong>Contact Number:</strong> {account.details.contactNumber || "N/A"}</p>
    </div>
  );
}

export default Account;
