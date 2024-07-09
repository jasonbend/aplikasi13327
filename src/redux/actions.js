export const SET_NAME = "SET_NAME";
export const SET_NIM = "SET_NIM";

export const setName = (name) => ({
  type: SET_NAME,
  payload: name,
});

export const setNim = (nim) => ({
  type: SET_NIM,
  payload: nim,
});
