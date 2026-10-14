
import React from "react";

type User = {
  id: number
  name: string
  age: number
  location: string
}

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
};

const InfoDialog = ({ open, setOpen, user }: Props) => {
  if (!user) return null;

  return (
    <dialog open={open}>
      <h2>Info</h2>

      <h3>Name: {user.name}</h3>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
      <p>ID: {user.id}</p>

      <button
        type="button"
        onClick={() => setOpen(false)}
      >
        Close
      </button>
    </dialog>
  );
};

export default InfoDialog;
