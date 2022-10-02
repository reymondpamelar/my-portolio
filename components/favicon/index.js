import React from "react";

const Favicon = () => {
    return (
        <>
            <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png"/>
            <link rel="manifest" href="/public/site.webmanifest"/>
            <link rel="mask-icon" href="/public/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>
        </>
    );
}

export default Favicon;