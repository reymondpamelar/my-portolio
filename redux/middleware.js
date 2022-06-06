import {
    SET_CONFIG,
    ERROR_AUTH, ERROR_REGISTER,
    USER_AUTH_FETCH,
    USER_ONBOARDING_SET,
    USER_INFO_SET,
    USER_BREACHES_FETCH,
    USER_BREACHES_SET,
    USER_PROFILE_SET,
    USER_REGISTER,
    USER_EDUCATION_SET,
    USER_EMPLOYMENT_SET,
    USER_CERTIFICATIONS_SET,
    USER_SKILLS_SET,
    USER_ACCOMPLISHMENTS_SET,
    USER_SENDER_SET,
    USER_OTP_SET,
    USER_GMAIL_DEAUTH,
    USER_DATAREMOVAL_SET,
    USER_MAILINBOX_SET,
    USER_DATADETAILS_SET,
    USER_WHITELIST_SET,
    USER_WHITELIST_UNSET,
    USER_METAMASK_AUTH,
    USER_ETHER_SET,
} from "./constants";
import {setUserAuthenticationToLocalStorage, clearLocalStorage} from "../services/user.service";
import React, {useState} from 'react'

import Router from "next/router";

import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import 'animate.css'
import Link from "next/link";

const successAlert = () => {
    Swal.fire({
        title: "<div class='text-gray-700'>Changes Applied!</div>",
        text: "The page will refresh in 3s...",
        icon: 'success',
        background: '#1F2937',
        confirmButtonColor: '#7ED957',
        iconColor: '#7ED957',
        allowOutsideClick : false,
        showConfirmButton : false

    });
    function refreshPage() {
        setTimeout(() => {
            window.location.reload(false);
        }, 3000);
    }
    refreshPage()
}

const successAlert1 = () => {
    Swal.fire({
        title: "<div class='text-gray-700'>Changes Applied!</div>",
        icon: 'success',
        background: '#1F2937',
        confirmButtonColor: '#7ED957',
        iconColor: '#7ED957'
    });
}

const errorAlert = () => {
    Swal.fire({
        title: 'Unable to Apply Changes!',
        icon: 'error'
    });
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function profilePicGen () {
    return "https://avatars.dicebear.com/api/gridy/"+ makeid(8) +".svg";
}

/**
 *
 * @param userCredentialsObject
 * @param {String} userCredentialsObject.emailAddress
 * @param {String} userCredentialsObject.password
 * @returns {Promise<{statusCode,body}>}
 */
const requestUserAuthenticationFromServer = async (userCredentialsObject) => {
    const {emailAddress, password} = userCredentialsObject;
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/user/auth`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailAddress: emailAddress,
            password: password
        })
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 *
 * @param token
 * @returns {Promise<{body: any, statusCode: number}>}
 */
const requestUserDetailsFromServer = async (token) => {
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/user/`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "privatyze-token": token
        }
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 * @param accountId
 * @param token
 * @returns {Promise<{body: any, statusCode: number}>}
 */
const requestBreachesDiscoveryFromServer = async (accountId, token) => {

    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/discovery/scan`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "privatyze-token": token
        },
        body: JSON.stringify({
            accountId: accountId,
        })
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 *
 * @param accountId
 * @param token
 * @returns {Promise<{body: any, statusCode: number}>}
 */
const requestUserBreachesFromServer = async (accountId, token) => {
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/breaches/` + accountId, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "privatyze-token": token
        },
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 *
 * @param breachObject
 * @param {String} breachObject.breachId
 * @param {String} breachObject.breachStatus
 * @param breachObject.resolvedItems
 * @param token
 * @returns {Promise<{body: any, statusCode: number}>}
 */
const updateUserBreachesFromServer = async (breachObject, token) => {
    const {breachId, breachStatus, resolvedItems} = breachObject;
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/breaches/resolve`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            "privatyze-token": token
        },
        body: JSON.stringify({
            breachId,
            breachStatus,
            resolvedItems
        })
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 *
 * @param userRegisterObject
 * @param {String} userRegisterObject.firstName
 * @param {String} userRegisterObject.lastName
 * @param {String} userRegisterObject.emailAddress
 * @param {String} userRegisterObject.password
 */
const requestUserRegisterToServer = async (userRegisterObject) => {
    const {firstName, lastName, emailAddress, password} = userRegisterObject;
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/user/create`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstName,
            lastName,
            emailAddress,
            password
        })
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 *
 * @param firstName
 * @param lastName
 * @param token
 * @returns {Promise<{body: any, statusCode: number}>}
 */
const requestOnboardingFromServer = async (firstName, lastName, token) => {
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/user/onboard`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "privatyze-token": token
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName
        })
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
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
 * @param token
 * @returns {Promise<{body: any, statusCode: number}>}
 */
const updateUserDetailsFromServer = async (token, userDetails) => {
    const {firstName, lastName, dateOfBirth, streetAddress, emailAddress, city, state, zip, country, twitterHandle, linkedInHandle, githubHandle} = userDetails;
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/user/`, {
        method: 'PUT',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "privatyze-token": token
        },
        body: JSON.stringify({
            fields:{
                firstName,
                lastName,
                dateOfBirth,
                address:{
                    streetAddress,
                    city,
                    state,
                    zip,
                    country
                },
                emailAddress,
                twitterHandle,
                linkedInHandle,
                githubHandle,
            }
        })
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 *
 * @param education1
 * @param token
 * @returns {{payload, type: string}}
 */
const updateEducationDetailsFromServer = async (token, education1) => {
    const {education} = education1;
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/user/`, {
        method: 'PUT',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "privatyze-token": token
        },
        body: JSON.stringify({
            fields:{
                education
            }
        })
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}


/**
 *
 * @param certifications1
 * @param token
 * @returns {{payload, type: string}}
 */
const updateProfessionalCertificationsFromServer = async (token, certifications1) => {
    const {certifications} = certifications1;
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/user/`, {
        method: 'PUT',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "privatyze-token": token
        },
        body: JSON.stringify({
            fields:{
                certifications
            }
        })
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 *
 * @param employment1
 * @param token
 * @returns {{payload, type: string}}
 */
const updateEmploymentInfoFromServer = async (token, employment1) => {
    const {employment} = employment1;
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/user/`, {
        method: 'PUT',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "privatyze-token": token
        },
        body: JSON.stringify({
            fields:{
                employment,
            }
        })
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 *
 * @param skills1
 * @param token
 * @returns {{payload, type: string}}
 */
const updateSkillsFromServer = async (token, skills1) => {
    const {skills} = skills1;
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/user/`, {
        method: 'PUT',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "privatyze-token": token
        },
        body: JSON.stringify({
            fields:{
                skills,
            }
        })
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 *
 * @param accomplishments1
 * @param token
 * @returns {{payload, type: string}}
 */
const updateAccomplishmentsFromServer = async (token, accomplishments1) => {
    const {accomplishments} = accomplishments1;
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/user/`, {
        method: 'PUT',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "privatyze-token": token
        },
        body: JSON.stringify({
            fields:{
                accomplishments,
            }
        })
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 *
 * @param emailAddress
 * @returns {{payload, type: string}}
 */
const requestSenderFromServer = async (emailAddress) => {
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/protect/gmail/`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}


/**
 *
 * @param oneTimePassword
 * @param otp.userId
 * @param otp.accountId
 * @param otp.otp
 *
 */
const requestOneTimePasswordToServer = async (oneTimePassword) => {
    const {userId, accountId, otp} = oneTimePassword;
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/user/verify-email`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId,
            accountId,
            otp,
        })
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 *
 * @param accountId
 * @param token
 * @returns {Promise<{body: any, statusCode: number}>}
 */
const requestGmailDeauthorizationToServer = async (accountId, token) => {
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/user/gmail/deauthorize`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "privatyze-token": token
        },
        body: JSON.stringify({
            accountId: accountId
        })
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 *
 * @param dataRemovalObject
 * @param token
 * @returns {Promise<{body: any, statusCode: number}>}
 */
const requestDataRemovalToServer = async (dataRemovalObject, token) => {
    const {senderAccountId, dataBrokerId} = dataRemovalObject;
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/protect/data-removal/domain`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "privatyze-token": token
        },
        body: JSON.stringify({
            senderAccountId,
            dataBrokerId
        })
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 * @param accountId
 * @param token
 * @returns {Promise<{body: any, statusCode: number}>}
 */
const requestRequestsSentFromServer = async (accountId, token) => {
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/data-removal/requests/`+ accountId +'/sent', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "privatyze-token": token
        }
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 * @param token
 * @returns {Promise<{body: any, statusCode: number}>}
 */
const requestDataBrokersFromServer = async (token) => {
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/data-broker/list`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "privatyze-token": token
        },
        body: JSON.stringify({
            limit: 0,
            skip: 0,
        })
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 * @param accountId
 * @param token
 * @returns {Promise<{body: any, statusCode: number}>}
 */
const requestMailInboxScanFromServer = async ( accountId, token ) => {
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/user/gmail/scan-inbox`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "privatyze-token": token
        },
        body: JSON.stringify({
            accountId: accountId
        })
    })
    if(user.status === 401){
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            background: '#1F2937',
            confirmButtonColor: '#59981A',
            width: 650,
            showConfirmButton: false,
            showClass: {
                popup: 'animate__animated animate__zoomIn animate__faster',
            },
            hideClass: {
                popup: 'animate__animated animate__zoomOut animate__faster',
            },
            showCloseButton: true,
            closeButtonHtml: <img src='/close-window-icon.png'/>,
            html:
                <div className="text-black">
                    <div className="font-black pt-8">
                        Gmail Account Authorization
                    </div>
                    <div className="pt-4 text-sm">
                        You must first authorize Privatyze to access your gmail account to enable you to send email to multiple data brokers.
                    </div>
                    <div className="flex justify-center m-8">
                        <div onClick={() => window.open('https://api.privatyze.io/protect/gmail/', '_blank')} className=" relative gap-2 hover:text-white border-opacity-50 items-center shadow-xl cursor-pointer flex justify-center border rounded-xl active:nm-inset-pblue cursor-pointer p-1 pr-2 font-bold text-black bg-pblue hover:bg-pblue focus:outline-none active:outline-none">
                            <div className=" bg-white p-4 rounded-lg">
                                <img src="/google.png" className="w-4 h-4"/>
                            </div>
                            <div className="text-white text-sm">
                                Sign in with google
                            </div>
                        </div>
                    </div>
                    <div className="text-sm">
                        Before using this app, you can review Privatyze’s {' '}
                        <Link href="https://privatyze.io/terms-of-service/">
                            <a className="link">Terms of service</a>
                        </Link>{' '}
                        and{' '}
                        <Link href="https://privatyze.io/privacy-policy/">
                            <a className="link">Privacy policy</a>
                        </Link>
                    </div>
                </div>
        })
        return
    }
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 *
 * @param dataRemovalRequestObject
 */
const requestDataRemovalRequestUpdateToServer = async (dataRemovalObject) => {
    const {dataRemovalRequestId, brokerId, accountId, action} = dataRemovalObject;
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/data-removal/requests/`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            dataRemovalRequestId: dataRemovalRequestId,
            brokerId: brokerId,
            accountId: accountId,
            action: action
        })
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 *
 * @param dataBrokerWhitelistObject
 * @param token
 * @returns {Promise<{body: any, statusCode: number}>}
 */
const requestDataBrokerWhitelistToServer = async (dataBrokerWhitelistObject, token) => {
    const {accountId, brokerId} = dataBrokerWhitelistObject;
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/user/whitelist`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "privatyze-token": token
        },
        body: JSON.stringify({
            accountId: accountId,
            brokerId: brokerId,
        })
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 *
 * @param dataBrokerWhitelistObject
 * @param token
 * @returns {Promise<{body: any, statusCode: number}>}
 */
const requestWhitelistRemovalToServer = async (dataBrokerWhitelistObject, token) => {
    const {accountId, brokerId} = dataBrokerWhitelistObject;
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/user/whitelist`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "privatyze-token": token
        },
        body: JSON.stringify({
            accountId: accountId,
            brokerId: brokerId,
        })
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 * @param etherAddress
 * @param token
 * @returns {Promise<{body: any, statusCode: number}>}
 */
const updateEtherAddressToServer = async (etherAddress, token) => {
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/user/blockchain_address/eth`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "privatyze-token": token
        },
        body: JSON.stringify({
            etherAddress
        })
    })
    return {
        statusCode: user.status,
        body: await user.json()
    };
}

/**
 *
 * @param store
 * @returns {function(*): function(*=): void}
 * @constructor
 */
export const APIServiceMiddleware = (store) => (next) => async (action) => {

    const updateLocalUserInfo = async (token) => {
        const userDetails = await requestUserDetailsFromServer(token);

        if (userDetails.body.profile.profileImage === undefined || userDetails.body.profile.profileImage === null){
            userDetails.body.profile.profileImage = profilePicGen()
        }

        const score = userDetails.body.profileCompletionScore;

        let address = {
            unitNumber: '',
            streetAddress: '',
            city: '',
            state: '',
            zip: '',
            country: ''
        };
        if(userDetails.body.profile.hasOwnProperty('address')) {
            address = userDetails.body.profile.address
        }

        next({
            type: SET_CONFIG,
            payload:{
                collapsed: true,
                layout: 'layout-1',
                direction: 'ltr',
                toggleRightSidebar: false,
                leftSidebar: {
                    showButtonText: true,
                    showSectionTitle: true,
                    showLogo: true,
                    showCard: true,
                    showAccountLinks: false,
                    showProjects: true,
                    showTags: true,
                    card: 1
                },
            }
        })

        next({
            type: USER_PROFILE_SET,
            payload: {
                emailAddresses: [{
                    emailAddress: userDetails.body.emailAddress,
                    type: 'primary',
                }],
                accounts: userDetails.body.accounts,
                firstName: userDetails.body.profile.firstName,
                lastName: userDetails.body.profile.lastName,
                profileImage: userDetails.body.profile.profileImage,
                dateOfBirth: userDetails.body.profile.dateOfBirth,
                streetAddress: address.streetAddress,
                city: address.city,
                state: address.state,
                zip: address.zip,
                country: address.country,
                twitterHandle: userDetails.body.profile.twitterHandle,
                linkedInHandle: userDetails.body.profile.linkedInHandle,
                githubHandle: userDetails.body.profile.githubHandle,
                education : userDetails.body.profile.education,
                certifications: userDetails.body.profile.certifications,
                employment: userDetails.body.profile.employment,
                skills: userDetails.body.profile.skills,
                accomplishments: userDetails.body.profile.accomplishments,
                profileCompletionScore: score,
                plan: userDetails.body.plan,
                etherAddress: userDetails.body.etherAddress
            }
        });
        const requests = await requestRequestsSentFromServer(userDetails.body.accounts[0]._id, token);
        const dataBrokers = await requestDataBrokersFromServer(token);
        next({
            type: USER_DATADETAILS_SET,
            payload: {
                requests: requests.body,
                dataBrokers: dataBrokers.body,
            },
        });
    }
    switch (action.type) {
        case USER_AUTH_FETCH: {
            const {emailAddress, password} = action.payload;
            const user = await requestUserAuthenticationFromServer({emailAddress, password});
            if (user.statusCode === 401){
                Router.push('/user/email/verify/'+user.body.userId+'/'+user.body.primaryAccountId);
            }
            if (user.statusCode === 200) {
                setUserAuthenticationToLocalStorage(user.body);

                let userDetails = await requestUserDetailsFromServer(user.body.token);
                console.log(user)

                if (userDetails.body.profile.profileImage === undefined || userDetails.body.profile.profileImage === null){
                    userDetails.body.profile.profileImage = profilePicGen()
                }
                const score = userDetails.body.profileCompletionScore;
                let address = {
                    unitNumber: '',
                    streetAddress: '',
                    city: '',
                    state: '',
                    zip: '',
                    country: ''
                };
                if(userDetails.body.profile.hasOwnProperty('address')) {
                    address = userDetails.body.profile.address
                }

                next({
                    type: SET_CONFIG,
                    payload:{
                        collapsed: true,
                        layout: 'layout-1',
                        direction: 'ltr',
                        toggleRightSidebar: false,
                        leftSidebar: {
                            showButtonText: true,
                            showSectionTitle: true,
                            showLogo: true,
                            showCard: true,
                            showAccountLinks: false,
                            showProjects: true,
                            showTags: true,
                            card: 1
                        },
                    }
                })

                next({
                    type: USER_PROFILE_SET,
                    payload: {
                        emailAddresses: [{
                            emailAddress: userDetails.body.emailAddress,
                            type: 'primary',
                        }],
                        accounts: userDetails.body.accounts,
                        firstName: userDetails.body.profile.firstName,
                        lastName: userDetails.body.profile.lastName,
                        dateOfBirth: userDetails.body.profile.dateOfBirth,
                        streetAddress: address.streetAddress,
                        city: address.city,
                        state: address.state,
                        zip: address.zip,
                        country: address.country,
                        twitterHandle: userDetails.body.profile.twitterHandle,
                        linkedInHandle: userDetails.body.profile.linkedInHandle,
                        githubHandle: userDetails.body.profile.githubHandle,
                        education : userDetails.body.profile.education,
                        certifications: userDetails.body.profile.certifications,
                        employment: userDetails.body.profile.employment,
                        skills: userDetails.body.profile.skills,
                        accomplishments: userDetails.body.profile.accomplishments,
                        profileImage: userDetails.body.profile.profileImage,
                        profileCompletionScore: score,
                        plan: userDetails.body.plan,
                        etherAddress: userDetails.body.etherAddress,
                    }
                });


                const requests = await requestRequestsSentFromServer(userDetails.body.accounts[0]._id,user.body.token);
                const dataBrokers = await requestDataBrokersFromServer( user.body.token);
                next({
                    type: USER_DATADETAILS_SET,
                    payload: {
                        requests: requests.body,
                        dataBrokers: dataBrokers.body,
                    },
                });
                const dataBrokerWhitelistObject = {
                    accountId: userDetails.body.accounts[0]._id,
                    brokerId: null
                }
                const whitelistRemoval = await requestWhitelistRemovalToServer(dataBrokerWhitelistObject, user.body.token);
                next({
                    type: USER_WHITELIST_SET,
                    payload: whitelistRemoval.body.whitelistedBrokers
                });

                Router.push('/dashboard');
            } else {
                clearLocalStorage();
                next({type: ERROR_AUTH});
                //next(unsetUserAuthentication());
                //next();
            }
            break;
        }
        case USER_INFO_SET: {
            const {token} = action.payload
            let userDetails = await requestUserDetailsFromServer(token);
            const userAthenticationObject = {
                userId: userDetails.body.userId,
                token: token
            }
            setUserAuthenticationToLocalStorage(userAthenticationObject);
            updateLocalUserInfo(token)
            break;
        }
        case USER_ONBOARDING_SET: {
            const {firstName, lastName, token} = action.payload
            let onboarding = await requestOnboardingFromServer(firstName, lastName, token);
            let userDetails = await requestUserDetailsFromServer(token);
            const userAthenticationObject = {
                userId: userDetails.body.userId,
                token: token
            }
            setUserAuthenticationToLocalStorage(userAthenticationObject);
            updateLocalUserInfo(token)
            Router.push('/dashboard')
            break;
        }
        case USER_BREACHES_FETCH: {
            const {accountId} = action.payload
            const MySwal = withReactContent(Swal)
            let breaches = await requestUserBreachesFromServer(action.payload.accountId, action.payload.token);
            if (action.payload.firstLoad === false) {
                next({
                    type: USER_BREACHES_SET,
                    payload: breaches.body
                });
                break;
            }
            const Toast = MySwal.mixin({
                toast: true,
                position: 'bottom-right',
                background: '#374151',
                customClass: {
                    popup: 'colored-toast'
                },
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true
            })
            await Toast.fire({
                timer: 3000,
                iconHtml: <div className="scale-110">
                    <img src="/scan-animation.gif" className="bg-gray-800 w-9 h-9 scale-150 rounded-full"/>
                </div>,
                title: <div className="text-white font-poppins">Scanning for breaches... </div>
            })
            const breachesDiscovered = await requestBreachesDiscoveryFromServer(action.payload.accountId, action.payload.token);
            if (breachesDiscovered.statusCode === 200){
                Toast.fire({
                    icon: 'warning',
                    title: <div className="text-white font-poppins">{breachesDiscovered.body.breaches.length} new breaches found! </div>
                })
            }
            breaches = await requestUserBreachesFromServer(action.payload.accountId, action.payload.token);
            next({
                type: USER_BREACHES_SET,
                payload: breaches.body,
            });
            updateLocalUserInfo(action.payload.token);
            break;
        }
        case USER_BREACHES_SET:{
            const {breachObject, currentLoggedInUser, accountId} = action.payload
            const updateBreaches = await updateUserBreachesFromServer(breachObject, currentLoggedInUser);
            const breaches = await requestUserBreachesFromServer(action.payload.accountId, currentLoggedInUser);
            next({
                type: USER_BREACHES_SET,
                payload: breaches.body
            });
            break;
        }
        case USER_REGISTER: {
            const {firstName, lastName, emailAddress, password} = action.payload;
            const createdUser = await requestUserRegisterToServer({
                firstName,
                lastName,
                emailAddress,
                password
            })
            if (createdUser.statusCode === 201) {
                await Router.push('/user/email/verify/'+createdUser.body.userId+'/'+createdUser.body.primaryAccountId);
            } else {
                next({
                    type: ERROR_REGISTER
                })
            }
            break;
        }
        case USER_DATAREMOVAL_SET: {
            let {dataBrokerObject, token} = action.payload;
            const dataRemove = await requestDataRemovalToServer(dataBrokerObject, token);
            console.log(dataRemove)
            if (dataRemove.statusCode === 201 || dataRemove.statusCode === 200) {
                Swal.fire({
                    title: "<div class='text-gray-700'>Data Removal Request Sent!</div>",
                    html: "<div class='text-gray-700'>An email has been sent from your email address!</div>",
                    icon: 'success',
                    confirmButtonColor: '#7ED957',
                    iconColor: '#7ED957'
                });
                const requests = await requestRequestsSentFromServer(dataBrokerObject.senderAccountId, token);
                const dataBrokers = await requestDataBrokersFromServer(token);

                if(requests.body.length > 0){
                    next({
                        type: USER_DATADETAILS_SET,
                        payload: {
                            requests: requests.body,
                            dataBrokers: dataBrokers.body
                        },
                    });
                }
            }
            else if( dataRemove.statusCode === 409) {
                Swal.fire({
                    title: "<div class='text-gray-700 text-md'>Unable To Request Data Removal</div>",
                    html: "<div class='text-gray-700'>Request Already Sent</div>",
                    icon: 'error',
                    width: 600,
                    confirmButtonColor: '#0979ff',
                });
                next({
                    type: ERROR_REGISTER
                })
            }
            else {
                Swal.fire({
                    title: "<div class='text-gray-700 text-md'>Unable To Request Data Removal</div>",
                    html: "<div class='text-gray-700'></div>",
                    icon: 'error',
                    width: 600,
                    confirmButtonColor: '#0979ff',
                });
            }
            Router.push('/dashboard/data-removal?tab=1');
            break;
        }
        case USER_WHITELIST_SET: {
            let {dataBrokerWhitelistObject, token} = action.payload;
            const whitelist = await requestDataBrokerWhitelistToServer(dataBrokerWhitelistObject, token);
            if (whitelist.statusCode === 200 || whitelist.statusCode === 201) {
                next({
                    type: USER_WHITELIST_SET,
                    payload: whitelist.body.whitelistedBrokers
                });
            }
            break;
        }
        case USER_WHITELIST_UNSET: {
            let {dataBrokerWhitelistObject, token} = action.payload;
            const whitelistRemoval = await requestWhitelistRemovalToServer(dataBrokerWhitelistObject, token);
            if (whitelistRemoval.statusCode === 200 || whitelistRemoval.statusCode === 201) {
                next({
                    type: USER_WHITELIST_SET,
                    payload: whitelistRemoval.body.whitelistedBrokers
                });
            }
            break;
        }
        case USER_MAILINBOX_SET: {
            let {accountId, token} = action.payload;
            const mailInbox = await requestMailInboxScanFromServer(accountId, token);
            if(mailInbox !== undefined){
                next({
                    type: USER_MAILINBOX_SET,
                    payload: {
                        total: mailInbox.body.total,
                        senders: mailInbox.body.senders,
                    },
                });
                const MySwal = withReactContent(Swal)
                const Toast = MySwal.mixin({
                    toast: true,
                    position: 'bottom-right',
                    background: '#374151',
                    timer: 1500,
                    customClass: {
                        popup: 'colored-toast'
                    },
                    showConfirmButton: false,
                })
                Toast.fire({
                    icon: "success",
                    iconColor: "7ED957",
                    title: <div className="text-white flex font-poppins">{mailInbox.body.total} Companies Found! </div>
                })
                break;
            }
        }
        case USER_DATADETAILS_SET: {
            let {accountId, token} = action.payload;

            const requests = await requestRequestsSentFromServer(accountId, token);
            const dataBrokers = await requestDataBrokersFromServer({token});

            if(requests.body.length > 0){
                next({
                    type: USER_DATADETAILS_SET,
                    payload: {
                        requests: requests.body,
                        dataBrokers: dataBrokers.body
                    },
                });
            }
            break;
        }
        case USER_OTP_SET: {
            const createdUser = await requestOneTimePasswordToServer(action.payload)
            if (createdUser.body.statusCode === 200) {
                await Router.push('/login');
                Swal.fire({
                    title: "<div class='text-gray-700'>One-Time Password Successful!</div>",
                    html: "<div class='text-gray-700'>Please log back in...</div>",
                    icon: 'success',
                    confirmButtonColor: '#7ED957',
                    iconColor: '#7ED957'
                });
            } else {
                next({
                    type: ERROR_REGISTER
                })
            }
            break;
        }
        case USER_GMAIL_DEAUTH: {
            let {accountId, token} = action.payload;
            const gmailDeauth = await requestGmailDeauthorizationToServer(accountId,token)
            window.open(gmailDeauth.body.redirectLink, '_blank');
            updateLocalUserInfo(token)
            break;
        }
        case USER_PROFILE_SET: {
            const {firstName, lastName, dateOfBirth, streetAddress, emailAddress, city, state, zip, country, twitterHandle, linkedInHandle, githubHandle} = action.payload.userDetails;
            const updatedUserDetails = await updateUserDetailsFromServer(action.payload.token, {
                firstName,
                lastName,
                dateOfBirth,
                streetAddress,
                emailAddress,
                city,
                state,
                zip,
                country,
                twitterHandle,
                linkedInHandle,
                githubHandle,
            })
            if (updatedUserDetails.statusCode === 200) {
                successAlert1();
                updateLocalUserInfo(action.payload.token);
            } else {
                errorAlert();
                clearLocalStorage();
                //next(unsetUserAuthentication());
                //next();
            }
            break;
        }
        case USER_EDUCATION_SET: {
            const updatedEducationDetails = await updateEducationDetailsFromServer(action.payload.token, action.payload)
            if (updatedEducationDetails.statusCode === 200) {
                successAlert();
                updateLocalUserInfo(action.payload.token);
            } else {
                errorAlert();
                clearLocalStorage();
                //next(unsetUserAuthentication());
                //next();
            }
            break;
        }
        case USER_CERTIFICATIONS_SET: {
            const updatedProfessionalCertificationsDetails = await updateProfessionalCertificationsFromServer(action.payload.token, action.payload)
            if (updatedProfessionalCertificationsDetails.statusCode === 200) {
                successAlert();
                updateLocalUserInfo(action.payload.token);
            } else {
                errorAlert();
                clearLocalStorage();
                //next(unsetUserAuthentication());
                //next();
            }
            break;
        }
        case USER_EMPLOYMENT_SET: {
            const updatedEmploymentInfoDetails = await updateEmploymentInfoFromServer(action.payload.token, action.payload)
            if (updatedEmploymentInfoDetails.statusCode === 200) {
                successAlert();
                updateLocalUserInfo(action.payload.token);
            } else {
                errorAlert();
                clearLocalStorage();
                //next(unsetUserAuthentication());
                //next();
            }
            break;
        }
        case USER_SKILLS_SET: {
            const updatedSkillsDetails = await updateSkillsFromServer(action.payload.token, action.payload)
            if (updatedSkillsDetails.statusCode === 200) {
                successAlert1();
                updateLocalUserInfo(action.payload.token);
            } else {
                errorAlert();
                clearLocalStorage();
                //next(unsetUserAuthentication());
                //next();
            }
            break;
        }
        case USER_ACCOMPLISHMENTS_SET: {
            const updatedAccomplishmentsDetails = await updateAccomplishmentsFromServer(action.payload.token, action.payload)
            if (updatedAccomplishmentsDetails.statusCode === 200) {
                successAlert1();
                updateLocalUserInfo(action.payload);
            } else {
                errorAlert();
                clearLocalStorage();
                //next(unsetUserAuthentication());
                //next();
            }
            break;
        }
        case USER_SENDER_SET: {
            const update = updateLocalUserInfo(action.payload);
            break;
        }
        case USER_METAMASK_AUTH: {
            const tokenObject = action.payload
            setUserAuthenticationToLocalStorage(tokenObject);
            let userDetails = await requestUserDetailsFromServer(tokenObject.token);

            if (userDetails.body.profile.profileImage === undefined || userDetails.body.profile.profileImage === null){
                userDetails.body.profile.profileImage = profilePicGen()
            }
            const score = userDetails.body.profileCompletionScore;
            let address = {
                unitNumber: '',
                streetAddress: '',
                city: '',
                state: '',
                zip: '',
                country: ''
            };
            if(userDetails.body.profile.hasOwnProperty('address')) {
                address = userDetails.body.profile.address
            }

            next({
                type: SET_CONFIG,
                payload:{
                    collapsed: false,
                    layout: 'layout-1',
                    direction: 'ltr',
                    toggleRightSidebar: false,
                    leftSidebar: {
                        showButtonText: true,
                        showSectionTitle: true,
                        showLogo: true,
                        showCard: true,
                        showAccountLinks: false,
                        showProjects: true,
                        showTags: true,
                        card: 1
                    },
                }
            })

            next({
                type: USER_PROFILE_SET,
                payload: {
                    emailAddresses: [{
                        emailAddress: userDetails.body.emailAddress,
                        type: 'primary',
                    }],
                    accounts: userDetails.body.accounts,
                    firstName: userDetails.body.profile.firstName,
                    lastName: userDetails.body.profile.lastName,
                    dateOfBirth: userDetails.body.profile.dateOfBirth,
                    streetAddress: address.streetAddress,
                    city: address.city,
                    state: address.state,
                    zip: address.zip,
                    country: address.country,
                    twitterHandle: userDetails.body.profile.twitterHandle,
                    linkedInHandle: userDetails.body.profile.linkedInHandle,
                    githubHandle: userDetails.body.profile.githubHandle,
                    education : userDetails.body.profile.education,
                    certifications: userDetails.body.profile.certifications,
                    employment: userDetails.body.profile.employment,
                    skills: userDetails.body.profile.skills,
                    accomplishments: userDetails.body.profile.accomplishments,
                    profileImage: userDetails.body.profile.profileImage,
                    profileCompletionScore: score,
                    plan: userDetails.body.plan
                }
            });

            const requests = await requestRequestsSentFromServer(userDetails.body.accounts[0]._id,tokenObject.token);
            const dataBrokers = await requestDataBrokersFromServer({
                token: tokenObject.token,
            });

            next({
                type: USER_DATADETAILS_SET,
                payload: {
                    requests: requests.body,
                    dataBrokers: dataBrokers.body,
                },
            });
            Router.push('/dashboard');
        }
        case USER_ETHER_SET: {
            const {etherAddress, token} = action.payload
            const updateEtherAddress = await updateEtherAddressToServer(etherAddress, token);
            const update = updateLocalUserInfo(token);
            break;
        }
        default : {
            next(action);
        }
    }
}
