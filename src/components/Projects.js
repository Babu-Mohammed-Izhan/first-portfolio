import { Col, Container, Row, Card, } from "react-bootstrap"

const Projects = () => {

    const projects = [
        {
            name: "Quizz Me Not",
            description: "Quizz Me Not is a full stack quiz website. In this you can enter your name and play the quiz. The scores for it are displayed at the end in a leaderboard.",
            url: "https://quizz-me-not.herokuapp.com/",
            github: "https://github.com/Babu-Mohammed-Izhan/Quiz-App-Frontend"
        },
        {
            name: "AnimeList",
            description: "AnimeList is a website that lists all the anime in order of popularity and it uses a third party API (Jikan API) to fetch the data of the anime",
            url: "https://frosty-mcnulty-ca0128.netlify.app/",
            github: "https://github.com/Babu-Mohammed-Izhan/animelist"
        },
        {
            name: "Webbey",
            description: "Webbey is landing page for a web hosting startup company.It is created using react and is hosted on Netlify",
            url: "https://pensive-ardinghelli-322dad.netlify.app/",
            github: "https://github.com/Babu-Mohammed-Izhan/web-hosting-landing-page"
        },
        {
            name: "ChatApp",
            description: "This webapp is a chat app created using the MERN stack and it uses socket.io for the chatting feature.You can chat with anyone in real time It stores all the previous chats in a mongodb database.  ",
            url: "https://breathe-chatapp.herokuapp.com/",
            github: "https://github.com/Babu-Mohammed-Izhan/breatheChatApp"
        },
        {
            name: "Web Dev Diaries",
            description: "This is a mini-blog website that uses the MERN stack, JWT for authentication, it allows users to submit blogs and it will display them. The blogs can only be deleted by the user that created them. This project has been tested using jest and cypress.",
            url: "https://web-dev-diaries.herokuapp.com/",
            github: "https://github.com/Babu-Mohammed-Izhan/BlogList"
        },
        {
            name: "Weathery",
            description: "Weathery is a small weather application created using react and OpenWeatherMap API. The data is fetched using Axios and is displayed in real-time. It is hosted using Netlify",
            url: "https://quizzical-swanson-0cf2d5.netlify.app/",
            github: "https://github.com/Babu-Mohammed-Izhan/Weathery"
        },
        {
            name: "Full Stack Phone Book Website",
            description: "This project is a full-stack website created using the MERN stack. The number and name of a person is entered using a form that will be stored in a MongoDB database. This will then be displayed on the website. The user can delete any number that is entered.",
            url: "https://mighty-mesa-69898.herokuapp.com/",
            github: "https://github.com/Babu-Mohammed-Izhan/PhoneBook-Backend"
        },
        {
            name: "Firegram",
            description: "This is an online Gallery created using React as the frontend and Firebase for the Backend.",
            url: "https://crickeet-152e9.web.app/",
            github: "https://github.com/Babu-Mohammed-Izhan/fire-gram"
        },

    ]

    return (
        <Container id="projects" bg="light" >
            <Row>
                <Col className="title">
                    <h1>Projects</h1>
                </Col>
            </Row>
            <Row xs={1} md={2} className="g-4">
                {projects.map((project) => (
                    <Col className="individual-cards" key={project.name}>
                        <Card border="indigo" className="project-cards h-100">
                            <Card.Img variant="top" />
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                                <Card.Link href={project.url} style={{ 'color': "rgb(108,99,255)" }} target="_blank">Website Link</Card.Link>
                                <Card.Link href={project.github} style={{ 'color': "rgb(108,99,255)" }} target="_blank">Github Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Projects
