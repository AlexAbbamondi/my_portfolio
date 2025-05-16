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
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .projects-flex-container + a {
        color: #e67e22;
        font-size: 18px;
        font-weight: 500;
        text-decoration: none;
        background-image: linear-gradient(to bottom, #e67e22 0%, #e67e22 100%);
        background-position: 0 100%;
        background-repeat: repeat-x;
        background-size: 100% 2px;
        transition: color 0.05s, background-image 0.3s;
        width: fit-content;
        margin: 20px auto 0 auto;
    }

    @media screen and (min-width: 768px) {
        .projects-flex-container + a {
            margin-top: 40px;
        }
    }

    @media screen and (min-width: 1000px) {
        .project {
            width: 31%;
        }

        .projects-flex-container + a:hover {
            color: #1abc9c;
            background-image: linear-gradient(to bottom, #1abc9c 0%,#1abc9c 100%);
        }
    }

    @media screen and (min-width: 1250px) {
        .project {
            width: 23%;
        }

        .projects-flex-container + a {
            margin-top: 50px;
        }
    }
`;


export default ProjectsSection;