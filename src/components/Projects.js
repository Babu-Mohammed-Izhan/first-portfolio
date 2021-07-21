import { Col, Container, Row, Card, } from "react-bootstrap"

const Projects = () => {

    const projects = [
        {
            name: "Web Dev Diaries",
            description: "This is a mini-blog website that uses the MERN stack, JWT for authentication, it allows users to submit blogs and it will display them. The blogs can only be deleted by the user that created them. This project has been tested using jest and cypress.",
            url: "https://web-dev-diaries.herokuapp.com/",
            img: "lmsfalmalfsma"
        },
        {
            name: "Full Stack Phone Book Website",
            description: "This project is a full-stack website created using the MERN stack. The number and name of a person is entered using a form that will be stored in a MongoDB database. This will then be displayed on the website. The user can delete any number that is entered.",
            url: "https://mighty-mesa-69898.herokuapp.com/",
            img: "fdsdsf"
        },
        {
            name: "Weathery",
            description: "Weathery is a small weather application created using react and OpenWeatherMap API. The data is fetched using Axios and is displayed in real-time. It is hosted using Netlify",
            url: "https://quizzical-swanson-0cf2d5.netlify.app/",
            img: "dsfdsfd"
        },
        {
            name: "Webbey",
            description: "Webbey is a web hosting landing page in which users can see and purchase web hosting servers as well as domains using the stripe payment API",
            url: "#",
            img: "dfsdfs"
        }
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
                    <Col className="individual-cards">
                        <Card border="indigo" className="project-cards">
                            <Card.Img variant="top" />
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                                <Card.Link href={project.url} style={{ 'color': "rgb(108,99,255)" }}>Website Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Projects
