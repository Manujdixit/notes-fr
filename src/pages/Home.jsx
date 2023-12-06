import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../assets/components/Spinner";
import BooksTable from "../assets/components/home/BooksTable";
import BooksCard from "../assets/components/home/BooksCard";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("card");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/notes")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 bg-yellow-300 " style={{ minHeight: "91.5vh" }}>
      <div className="flex justify-center items-center gap-x-4 mb-4">
        <button
          className={`bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg ${
            showType === "card" && "bg-sky-600 text-white"
          }`}
          onClick={() => setShowType("card")}
        >
          Card
        </button>
        <button
          className={`bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg ${
            showType === "table" && "bg-sky-600 text-white"
          }`}
          onClick={() => setShowType("table")}
        >
          Table
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <Link
          to="/books/create"
          className="flex items-center space-x-2 text-sky-800 hover:text-sky-600"
        >
          <MdOutlineAddBox className="text-4xl" />
          <h1 className="text-lg font-semibold">Add Note</h1>
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : showType === "card" ? (
        <BooksCard books={books} />
      ) : (
        <BooksTable books={books} />
      )}
    </div>
  );
};

export default Home;
