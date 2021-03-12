export const localStorageSet = (key, value) => {
    if (!value || !key) console.log('Must have key and value')
    if (window) {
        let formated = (typeof value === 'object' || value.isArray) ? JSON.stringify(value) : value
        window.localStorage.setItem(key, formated);
        return {
            [key]: formated
        }
    } else {
        console.log("Not on browser")
    }
}

export const localStorageGet = (key) => {
    if (!key) console.log('Must have key')
    if (window) {
        const value = window.localStorage.getItem(key);
        let parsed = null
        try {
            parsed = JSON.parse(value);
        } catch (e) {
            parsed = value;
        }
        return {
            [key]: parsed
        }
    } else {
        console.log("Not on browser")
    }
}

export const localStorageDelete = (key) => {
    if (!key) console.log('Must have key')
    if (window) {
        return window.localStorage.removeItem(key);
    } else {
        console.log("Not on browser")
    }
}
