
export const selectContacts = (state) => state.phonebook.contacts.items;
    
export const selectFilter = (state) => state.filter.filters;

export const selectIsLoading = (state) => state.phonebook.contacts.isLoading;
