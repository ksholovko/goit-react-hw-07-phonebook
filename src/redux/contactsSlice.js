import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts } from './operations'
import { addContact } from './operations'
import { deleteContact } from './operations'

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null },
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
 
  extraReducers: {
  
  [fetchContacts.pending](state) {
    state.contacts.isLoading = true;
  },
  [fetchContacts.fulfilled](state, action) {
    state.contacts.isLoading = false;
    state.contacts.error = null;
    state.contacts.items = action.payload;
  },
  [fetchContacts.rejected](state, action) {
    state.contacts.isLoading = false;
    state.contacts.error = action.payload;
  },


   [addContact.pending](state) {
    state.contacts.isLoading = true;
  },
  
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
     state.contacts.items = [action.payload, ...state.contacts.items];    
  },
    [addContact.rejected](state, action) {
    state.contacts.isLoading = false;
    state.contacts.error = action.payload;
  },
     
     
    [deleteContact.pending](state) {
    state.contacts.isLoading = true;
  },
  [deleteContact.fulfilled](state, action) {
    state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload.id);
    state.contacts.isLoading = false;
    state.contacts.error = null;
  },
     [deleteContact.rejected](state, action) {
    state.contacts.isLoading = false;
    state.contacts.error = action.payload;
    },
     
  },
  },
)

export default contactsSlice.reducer;


