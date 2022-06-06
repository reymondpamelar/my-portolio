/**
 *
 * @param userAuthenticationObject
 * @param userAuthenticationObject.userId
 * @param userAuthenticationObject.token
 */
const setUserAuthenticationToLocalStorage = (userAuthenticationObject) => {
    localStorage.setItem('privatyze-user', JSON.stringify(userAuthenticationObject));
}

/**
 * clears the user token from local storage
 */
const clearLocalStorage = () => {
    localStorage.removeItem('privatyze-user');
}
/**
 *
 * @returns {{userId: string, token: String}}
 */
const getCurrentLoggedInUser = () => {
    const currentUser = localStorage.getItem('privatyze-user');
    return JSON.parse(currentUser);
}

module.exports = {
    setUserAuthenticationToLocalStorage,
    clearLocalStorage,
    getCurrentLoggedInUser
}
