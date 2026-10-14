import { create } from "zustand";
import axios from "axios";
import { api } from "../utils/api";

export const useData = create((set, get) => ({
  data: [],
  loading: false,
  error: null,

  get: async () => {
    set({ loading: true, error: null });

    try {
      let { data } = await axios.get(api);
      set({ data });
    } catch (error) {
      set({ error });
    } finally {
      set({ loading: false });
    }
  },

  postUser: async (newUser) => {
    try {
      await axios.post(api, newUser);
      await get().get();
      return true;
    } catch (error) {
      set({ error });
      return false;
    }
  },


  editUser: async (id, updatedUser) => {
    try {
      await axios.put(`${api}/${id}`, updatedUser);
      await get().get();
      return true;
    } catch (error) {
      set({ error });
      return false;
    }
  },
}));