export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.contacts.filter;
export const selectName = state => state.user.user.name;
export const selectEmail = state => state.user.user.email;
export const selectAuth = state => state.user.isAuth;
export const selectTokenValue = state => state.user.token;
export const selectUser = state => state.user.user;
export const selectRefresh = state => state.user.isRefreshing;
