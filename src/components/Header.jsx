import React, { useEffect, useState } from "react";
import AddDialog from "./AddDialog";
import EditDialog from "./EditDialog"
import { useData } from "../store/zustand";
import CircularProgress from "@mui/material/CircularProgress";

const Header = () => {
  const { data, loading, get } = useData();
  const [editOpen, setEditOpen] = useState(false)
const [selectedUser, setSelectedUser] = useState(null)
  const [open, setOpen] = useState(false);


  useEffect(() => {
    get();
  }, [get]);

  const handleAdd = () => {
    setSelectedUser(null);
    setOpen(true);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  return (
    <>
      <button onClick={handleAdd}>Add User</button>

      <div className="p-20">
        {loading ? (
          <CircularProgress />
        ) : (
          data.map((el) => (
            <div key={el.id}>
              <img style={{width:'50px', borderRadius:"50%"}} src={el.avatar} alt="" />
              <h1>{el.fullname}</h1>
              <p>{el.age}</p>
              <p>{el.status ? "Active" : "Inactive"}</p>

             <button
  onClick={() => {
    setSelectedUser(el)
    setEditOpen(true)
  }}
>
  Edit
</button>
            </div>
          ))
        )}
      </div>

      <AddDialog
        open={open}
        setOpen={setOpen}
        selectedUser={selectedUser}
      />
      <EditDialog
  open={editOpen}
  setOpen={setEditOpen}
  user={selectedUser}
/>
    </>
  );
};

export default Header;