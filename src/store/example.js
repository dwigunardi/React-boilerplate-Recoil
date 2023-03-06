import { appConfig } from "../config/appConfig";
import axios from "axios";
import { atom, selector, DefaultValue } from "recoil";

export const themeState = atom({
  key: "get-theme",
  default: "dark",
});
export const validateAtom = atom({
  key: "validate-selector",
  default: false,
});
export const testSelector = selector({
  key: "selector-post",
  get: async ({ get }) => {
    const validate = get(validateAtom);
    let post = null;
    if (validate == "allow me") {
      post = await axios
        .get(appConfig.apiUrl + `/posts`)
        .then((res) => res)
        .catch((err) => err);
    } else {
      post = null;
    }

    return post || null;
  },
  set: ({ set }, newValue) => {
    set(validateAtom, newValue instanceof DefaultValue ? newValue : "test");
  },
});

export const counterState = atom({
    key: 'Counter-state',
    default: 0,
})

export const Auth = atom({
    key:'Auth-state',
    default: false,
})

export const AuthSelector = selector({
    key: 'Auth-selector',
    get:({get}) => {
      const status  = get(Auth)
    },
    set:({set, get}) => {
        console.log(get);
    }
})