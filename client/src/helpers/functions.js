import Axios from "axios";

function includedNumber(str) {
  const arr = Array.from(str);
  return arr.some((e) => !isNaN(e));
}
function isBigLetter(st) {
  return [...st].some((e) => "A" <= e && e <= "Z");
}
function isSmallLetter(st) {
  return [...st].some((e) => "a" <= e && e <= "z");
}
function isPasswordCorrect(pass, strlength = 8) {
  return (
    includedNumber(pass) &&
    pass.length >= strlength &&
    isBigLetter(pass) &&
    isSmallLetter(pass)
  );
}
function randomNumber(num) {
  return Math.floor(Math.random() * num) + 1;
}
function getRanomIndex(rangeOfNumbers, count) {
  const arr = [];

  for (let i = 0; i < count; ) {
    let num = Math.floor(Math.random() * rangeOfNumbers);

    while (!arr.some((e) => e === num)) {
      arr.push(num);
      i++;
    }
  }
  return arr;
}

function selectByRandomIndex(arr, indexArr) {
  const arrCopy = [...arr];
  const indexArrCopy = [...indexArr];
  return arrCopy.filter((element, index) =>
    indexArrCopy.some((item, i) => index === item)
  );
}
function isMailCorrect(mailAddress) {
  if (mailAddress === undefined) return 0;
  const indexOfAt = mailAddress.indexOf("@");

  if (indexOfAt < 0 || mailAddress.length === 0) return false;
  const slicedMail = mailAddress.slice(indexOfAt + 1);
  if (!slicedMail.includes(".")) return false;
  const indexDot = slicedMail.indexOf(".");
  const slicedFromDot = slicedMail.slice(indexDot);

  if (
    mailAddress.length - slicedMail.length > 3 &&
    slicedMail.length - slicedFromDot.length > 1 &&
    slicedFromDot.length > 2
  )
    return true;
}
const getAxios = async (url) => {
  return Axios({
    method: "GET",
    withCredentials: true,
    url: url,
  }).catch((error) => {
    console.log(error.response);
  });
};

const doFetch = (url, method = "POST", body) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Cache", "no-cache");
  const params = {
    method,
    headers,
    credentials: "include",
  };
  if (body) {
    params.body = body;
  }
  return fetch(url, params);
};
const fetchPost = async (url, body) => {
  return await fetch(url, {
    method: "POST",

    headers: { "Content-Type": "application/json", withCredentials: true },

    body: JSON.stringify(body),
  })
    .then((response) => {
      if (!response.ok) throw Error(response);
      return response.json();
    })

    .catch((error) => console.log("Blad:", error));
};
const fetchGet = async (url) => {
  return await fetch(url)
    .then((response) => {
      if (!response.ok) throw Error(response);
      return response.json();
    })
    .catch((error) => console.log("Blad:", error));
};
const fetchPut = async (url, body) => {
  return await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(body),
  })
    .then((response) => {
      if (!response.ok) throw Error(response);
      return response.json();
    })

    .catch((error) => console.log("Blad:", error));
};
const submitNewUser = (url, body) => {
  return fetchPut(url, body);
};
const validationUser = ({
  name,
  lastName,
  mail,
  password,
  confirmPassword,
}) => {
  return (
    name.length > 2 &&
    lastName.length > 2 &&
    isMailCorrect(mail) &&
    password === confirmPassword &&
    isPasswordCorrect(password)
  );
};
export {
  includedNumber,
  isBigLetter,
  isSmallLetter,
  isPasswordCorrect,
  randomNumber,
  getRanomIndex,
  selectByRandomIndex,
  isMailCorrect,
  getAxios,
  fetchPost,
  fetchGet,
  doFetch,
  fetchPut,
  submitNewUser,
  validationUser,
};
