import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pizza, SearchPizzaParams } from "./types";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    "pizza/fetchPizzasStatus",
    async ({ order, sortBy, category, search, currentPage }) => {
      const { data } = await axios.get<Pizza[]>(
        `https://66d9f1944ad2f6b8ed5689b4.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`
      );
      return data;
    }
  );