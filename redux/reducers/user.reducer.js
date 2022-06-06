import {
    SET_CONFIG,
    USER_AUTH_SET,
    USER_AUTH_UNSET,
    USER_BREACHES_FETCH,
    USER_BREACHES_SET,
    USER_PROFILE_SET,
    USER_EDUCATION_SET,
    USER_EMPLOYMENT_SET,
    USER_CERTIFICATIONS_SET,
    USER_SKILLS_SET,
    USER_ACCOMPLISHMENTS_SET,
    USER_DATADETAILS_SET,
    USER_MAILINBOX_SET,
    USER_WHITELIST_SET,
} from "../constants";

const userState = {
    userDetails: {
        firstName: 'Azaz',
        lastName: 'Khan',

        emailAddresses: [
            {emailAddress: 'aeyzazkhan@gmail.com', type: 'primary'},
            {emailAddress: 'jondoe@gmail.com', type: 'secondary'}
        ],
        education: [{
            schoolCity: 'school',
        }]
    },
    breaches: [],
    education: [],
    certifications: [],
    employment: [],
    skills: [],
    accomplishments: [],

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
};

const userReducer = (state = userState, action) => {
    switch (action.type) {
        case SET_CONFIG: {
            return {
                ...state,
                config: {
                    ...state.config,
                    ...action.payload
                },
            }
        }
        case USER_AUTH_SET: {
            const {userId, token} = action.payload;
            return {
                ...state,
                userId: userId,
                isAuthenticated: true
            }
        }
        case USER_AUTH_UNSET: {
            return {
                userId: '',
                isAuthenticated: false
            }
        }
        case USER_PROFILE_SET: {
            return {
                ...state,
                userDetails: {
                    ...state.userDetails,
                    ...action.payload
                },
            }
        }
        case USER_EDUCATION_SET: {
            return {
                ...state,
                education: {
                    ...state.education,
                    ...action.payload
                },
            }
        }
        case USER_CERTIFICATIONS_SET: {
            return {
                ...state,
                certifications: {
                    ...state.certifications,
                    ...action.payload
                },
            }
        }
        case USER_EMPLOYMENT_SET: {
            return {
                ...state,
                employment: {
                    ...state.employment,
                    ...action.payload
                },
            }
        }
        case USER_SKILLS_SET: {
            return {
                ...state,
                skills: {
                    ...state.skills,
                    ...action.payload
                },
            }
        }
        case USER_ACCOMPLISHMENTS_SET: {
            return {
                ...state,
                accomplishments: {
                    ...state.accomplishments,
                    ...action.payload
                },
            }
        }
        case USER_BREACHES_SET: {
            return {
                ...state,
                breaches: action.payload,
                lastScanTime: action.lastScanTime
            }
            break;
        }
        case USER_DATADETAILS_SET: {
            return {
                ...state,
                dataDetails: action.payload
            }

            break;
        }
        case USER_MAILINBOX_SET: {
            return {
                ...state,
                mailInbox: action.payload
            }

            break;
        }
        case USER_WHITELIST_SET: {
            return {
                ...state,
                whitelist: action.payload
            }

            break;
        }
        default: {
            return state
        }
    }
}

export default userReducer;
