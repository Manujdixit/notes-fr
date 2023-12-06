import React, { useEffect, useState } from "react";
import BackButton from "../assets/components/BackButton";
import Spinner from "../assets/components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { enqueueSnackbar, useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [text, settext] = useState("");
  const [finishtill, setfinishtill] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/notes/${id}`)
      .then((response) => {
        setfinishtill(response.data.finishtill);
        settext(response.data.text);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("check console");
        console.log(error);
      });
  }, [id]);
  const handleEditBook = () => {
    const data = {
      title,
      text,
      finishtill,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/notes/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Note edited successfully", { variant: "success" });
        navigate("/mynotes");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Note</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => settext(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Finish Till</label>
          <input
            type="text"
            value={finishtill}
            onChange={(e) => setfinishtill(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
};
export default EditBook;
