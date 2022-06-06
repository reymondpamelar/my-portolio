import React, {Component, useState} from 'react'
import { connect } from 'react-redux';
import Router from 'next/router'
import {getCurrentLoggedInUser} from "./user.service";

export default function withAuth(AuthComponent) {

    class Authenticated extends Component {
        constructor(props) {
            super(props)
            this.state = {
                isAuthenticated: false,
            }
        }
        componentDidMount() {
            const userToken = getCurrentLoggedInUser()
            if(!userToken) {
                return Router.push('/login');
            } else {
                this.setState({ isAuthenticated: true })
            }

        }
        render() {
            return (
                <>
                    { this.state.isAuthenticated && <AuthComponent {...this.props} /> }
                </>
            )
        }
    }

    function mapStateToProps(state) {
        return { isAuthenticated: state.userReducer.isAuthenticated };
    }

    return Authenticated; //return connect(mapStateToProps)(Authenticated);
}
