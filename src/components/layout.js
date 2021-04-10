import React from "react"

import Header from "./header"

import '../styles/index.scss'
import * as layoutStyles from "../components/layout.module.scss"

const Layout = ( props ) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                { props.children }
            </div>
        </div>
    )
}

export default Layout