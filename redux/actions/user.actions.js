import {
    USER_AUTH_FETCH,
    USER_AUTH_SET,
    USER_AUTH_UNSET,
    USER_BREACHES_FETCH,
    USER_EDUCATION_SET,
    USER_PROFILE_SET,
    USER_CERTIFICATIONS_SET,
    USER_EMPLOYMENT_SET,
    USER_SKILLS_SET,
    USER_ACCOMPLISHMENTS_SET, USER_METAMASK_AUTH
} from "../constants";

/**
 *
 * @param userCredentialsObject
 * @param {String} userCredentialsObject.emailAddress
 * @param {String} userCredentialsObject.password
 * @returns {{payload, type: string}}
 */
const authenticateUser = (userCredentialsObject) => {
    console.log('authenticateUser action');
    return {
        type: USER_AUTH_FETCH,
        payload: userCredentialsObject
    }
}

/**
 *
 * @param userAuthenticationObject
 * @param userAuthenticationObject.userId
 * @param userAuthenticationObject.token
 */
const setUserAuthentication = (userAuthenticationObject) => {
    return {
        type: USER_AUTH_SET,
        payload: userAuthenticationObject
    }
}

/**
 * unsets the user auth state
 * @returns {{type: string}}
 */
const unsetUserAuthentication = () => {
    return {
        type: USER_AUTH_UNSET
    }
}

/**
 * @param accountId
 * @param firstLoad
 * @param token
 * @returns {{payload, type: string}}
 */
const requestBreachesDiscovery = (accountId, token , firstLoad) => {
    return {
        type: USER_BREACHES_FETCH,
        payload: {token, accountId , firstLoad}
    }
}

/**
 *
 * @param userDetails
 * @param {String} userDetails.firstName
 * @param {String} userDetails.lastName
 * @param {String} userDetails.dateOfBirth
 * @param {String} userDetails.emailAddress
 * @param {String} userDetails.streetAddress
 * @param {String} userDetails.city
 * @param {String} userDetails.state
 * @param {String} userDetails.zip
 * @param {String} userDetails.country
 * @param {String} userDetails.twitterHandle
 * @param {String} userDetails.linkedInHandle
 * @param {String} userDetails.githubHandle
 * @param {String} userDetails.degreeMajor
 * @param token
 * @returns {{payload, type: string}}
 */
const updateUserProfile = (userDetails, token) => {
    return {
        type: USER_PROFILE_SET,
        payload: {token, userDetails}
    }
}

/**
 *
 * @param education
 * @param token
 * @returns {{payload, type: string}}
 */
const updateEducationProfile = (education, token) => {
    return {
        type: USER_EDUCATION_SET,
        payload: {token, education}
    }
}

/**
 *
 * @param certifications
 * @param token
 * @returns {{payload, type: string}}
 */
const updateCertificationsProfile = (certifications, token) => {
    return {
        type: USER_CERTIFICATIONS_SET,
        payload: {token, certifications}
    }
}

/**
 *
 * @param employment
 * @param token
 * @returns {{payload, type: string}}
 */
const updateEmploymentInfoProfile = (employment, token) => {
    return {
        type: USER_EMPLOYMENT_SET,
        payload: {token, employment}
    }
}

/**
 *
 * @param skills
 * @param token
 * @returns {{payload, type: string}}
 */
const updateSkillsProfile = (skills, token) => {
    return {
        type: USER_SKILLS_SET,
        payload: {token, skills}
    }
}

/**
 *
 * @param accomplishments
 * @param token
 * @returns {{payload, type: string}}
 */
const updateAccomplishmentsProfile = (accomplishments, token) => {
    return {
        type: USER_ACCOMPLISHMENTS_SET,
        payload: {token, accomplishments}
    }
}

const authUserWithAccessToken = (token) => {
    return {
        type: USER_METAMASK_AUTH,
        payload: token
    }
}

module.exports = {
    authenticateUser,
    setUserAuthentication,
    unsetUserAuthentication,
    requestBreachesDiscovery,
    updateUserProfile,
    updateEducationProfile,
    updateCertificationsProfile,
    updateEmploymentInfoProfile,
    updateSkillsProfile,
    updateAccomplishmentsProfile,
    authUserWithAccessToken
}

