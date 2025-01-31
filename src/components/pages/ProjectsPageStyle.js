import styled from 'styled-components';

const ProjectsSection = styled.section`


    h1 {
        font-size: clamp(40px, 6vw, 60px);
        margin-bottom: 20px;
    }

    .projects-content {
        flex-direction: column;
        padding-top: 100px;
    }

    .projects-text-container {
        width: 100%;
    }

    .projects-flex-container {
        width: 100%;
        justify-content: center;
    }
`;


export default ProjectsSection;