import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import ProjectHeader from './ProjectsHeader';

const HeaderWrapper = ({ onToggle, showNavbar }) => {
    const location = useLocation();

    return (
        <>
            {location.pathname === "/projects" ? (
                <ProjectHeader onToggle={onToggle} showNavbar={showNavbar} />
            ) : (
                <Header onToggle={onToggle} showNavbar={showNavbar} />
            )}
        </>
    );
};

export default HeaderWrapper;