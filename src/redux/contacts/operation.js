import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getAllContacts = createAsyncThunk(
  'auth/getAllContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      Notiflix.Notify.failure('Oops. Something is wrong. Please try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'auth/addContacts',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      Notiflix.Notify.success(
        `${credentials.name} has been successfully added to contacts`
      );
      return data;
    } catch (error) {
      Notiflix.Notify.failure('Oops. Something is wrong. Please try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'auth/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      Notiflix.Notify.success(`This contact was successfully deleted`);
      return data;
    } catch (error) {
      Notiflix.Notify.failure('Oops. Something is wrong. Please try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
