import Axios from 'axios';
import { UserValiadationData, Mode } from '../types/types';
import { Item } from '../../../shared/types/commonTypes';

function includedNumber(str: string): boolean {
    const arr = Array.from(str);
    return arr.some((e) => !isNaN(Number(e)));
}

function isBigLetter(str: string): boolean {
    return [...str].some((e) => e === e.toUpperCase() && e !== e.toLowerCase());
}

function isSmallLetter(str: string): boolean {
    return [...str].some((e) => 'a' <= e && e <= 'z');
}

function isPasswordCorrect(password: string, strlength = 8) {
    return (
        includedNumber(password) &&
        password.length >= strlength &&
        isBigLetter(password) &&
        isSmallLetter(password)
    );
}

function randomNumber(value: number) {
    return Math.floor(Math.random() * value) + 1;
}

function getRandomIndex(rangeOfNumbers: number, count: number) {
    if (rangeOfNumbers <= 0 || count <= 0 || count > rangeOfNumbers) {
        return [];
    }

    const arr: number[] = [];

    while (arr.length < count) {
        let num = Math.floor(Math.random() * rangeOfNumbers);

        if (!arr.includes(num)) {
            arr.push(num);
        }
    }

    return arr;
}

function selectByRandomIndex(arr: Item[], indexArr: number[]) {
    const arrCopy = arr.slice();
    const indexArrCopy = indexArr.slice();
    return arrCopy.filter((element, index) =>
        indexArrCopy.some((item) => index + 1 === item),
    );
}

function isMailCorrect(mailAddress: string) {
    if (mailAddress === undefined) return 0;
    const indexOfAt = mailAddress.indexOf('@');

    if (indexOfAt < 0 || mailAddress.length === 0) return false;
    const slicedMail = mailAddress.slice(indexOfAt + 1);
    if (!slicedMail.includes('.')) return false;
    const indexDot = slicedMail.indexOf('.');
    const slicedFromDot = slicedMail.slice(indexDot);

    if (
        mailAddress.length - slicedMail.length > 3 &&
        slicedMail.length - slicedFromDot.length > 1 &&
        slicedFromDot.length > 2
    )
        return true;
}
const getAxios = async (url: string) => {
    return Axios({
        method: 'GET',
        withCredentials: true,
        url: url,
    }).catch((error) => {
        console.log(error.response);
    });
};
//todo types
const doFetch = (url: string, method: string = 'POST', body: any = null) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('pragma', 'no-cache');

    const params: RequestInit = {
        method,
        headers,
        credentials: 'include' as RequestCredentials, // Konwersja na RequestCredentials
    };

    if (body !== null && body !== undefined) {
        params.body = JSON.stringify(body);
    }

    return fetch(url, params);
};

const fetchPost = async (url: string, body: Record<string, unknown>) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Błąd:', error);
    }
};


const fetchGet = async (url: string) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
    }

    return await response.json();
};


const fetchPut = async (url: string, body: Record<string, unknown>) => {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Błąd:', error);
    }
};

const submitNewUser = (url: string, body: {}) => {
    return fetchPut(url, body);
};

const validationUser = ({
    name,
    lastName,
    mail,
    password,
    confirmPassword,
}: UserValiadationData) => {
    return (
        name.length > 2 &&
        lastName.length > 2 &&
        isMailCorrect(mail) &&
        password === confirmPassword &&
        isPasswordCorrect(password)
    );
};

const getPreferredTheme = (): Mode => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
};

export {
    includedNumber,
    isBigLetter,
    isSmallLetter,
    isPasswordCorrect,
    randomNumber,
    getRandomIndex,
    selectByRandomIndex,
    isMailCorrect,
    getAxios,
    fetchPost,
    fetchGet,
    doFetch,
    fetchPut,
    submitNewUser,
    validationUser,
    getPreferredTheme,
};
