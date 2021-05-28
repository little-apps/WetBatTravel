import React from 'react';
import FontAwesome from "react-fontawesome";

interface ISidebarLink {
    icon?: React.ReactNode;
    text: string;
    link: string;
}

const SidebarLinks: ISidebarLink[] = [
    {
        icon: <FontAwesome name="home" />,
        text: 'Dashboard',
        link: '/dashboard'
    },
    {
        icon: <FontAwesome name="usd" />,
        text: 'Quotes',
        link: '/quotes'
    },
    {
        icon: <FontAwesome name="list" />,
        text: 'Leads',
        link: '/leads'
    },
    {
        icon: <FontAwesome name="paper-plane" />,
        text: 'Tours',
        link: '/tours'
    }
];

export { SidebarLinks };
