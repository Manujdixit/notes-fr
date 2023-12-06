import React, { useEffect, useState } from "react";
import BackButton from "../assets/components/BackButton";
import Spinner from "../assets/components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { enqueueSnackbar, useSnackbar } from "notistack";

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const handleDeleteBook = () => {
    console.log("Deleting note...");
    // setLoading(true);
    axios
      .delete(`https://books-b-d.onrender.com/notes/${id}`)
      .then(() => {
        console.log("Note deleted successfully");
        // setLoading(false);
        enqueueSnackbar("Note deleted successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        console.error("Error deleting note", error);
        // setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Note</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are You Sure You Want to delete this note</h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes, delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBooks;
