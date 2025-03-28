import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import ProjectHeader from './ProjectsHeader';

const HeaderWrapper = ({ onToggle, showNavbar }) => {
    const location = useLocation();

    useEffect(() => {
        if (showNavbar) {
            onToggle();
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    return (
        <>
            {(location.pathname === "/projects" || location.pathname === "/privacy-policy") ? (
                <ProjectHeader onToggle={onToggle} showNavbar={showNavbar} />
            ) : (
                <Header onToggle={onToggle} showNavbar={showNavbar} />
            )}
        </>
    );
};

export default HeaderWrapper;