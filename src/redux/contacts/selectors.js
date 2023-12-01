import { createSelector } from "@reduxjs/toolkit";

export const selectGetContacts = state => state.contacts.contacts;
export const selectContactsFilter = state => state.filter.filter;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilteredContacts = createSelector(
  [selectGetContacts, selectContactsFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  }
);