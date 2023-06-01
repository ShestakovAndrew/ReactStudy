import {Login} from "./Login"
import React from "react";
import {ProfilePropsType} from "./Profile";

type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfilePropsType>
}

export const Private = ({isLoggedIn, component: Component}: PrivateProps) => {
    if (isLoggedIn) {
        return <Component name='Андрей'/>
    }
    else {
        return <Login />
    }
}
