import { Card, OverlayTrigger, Tooltip } from "react-bootstrap"


const Skills = () => {


    const icons = [
        {
            name: "HTML",
            icon: "icons/html-5.png",
        },
        {
            name: "CSS",
            icon: "icons/css-3.png",
        },
        {
            name: "SCSS",
            icon: "icons/sass.png",
        },
        {
            name: "Bootstrap",
            icon: "icons/Bootstrap.png",
        },
        {
            name: "Javascript",
            icon: "icons/javascript.png",
        },
        {
            name: "React",
            icon: "icons/react.png",
        },
        {
            name: "Express",
            icon: "icons/expressjs.png",
        },
        {
            name: "NodeJS",
            icon: "icons/nodejs.png",
        },
        {
            name: "MongoDB",
            icon: "icons/mongodb.png",
        },
        {
            name: "Redux",
            icon: "icons/redux.png",
        },
        {
            name: "Python",
            icon: "icons/python.png",
        },
        {
            name: "Jest",
            icon: "icons/jest.png",
        },
    ]


    return (
        <section id="skills" className="skills section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Skills</h2>
                </div>
                <Card>
                    <Card.Body>
                        <div className="row skills-content">
                            {icons.map((icon) => {
                                return (
                                    <div className="col col-xs-6 align-content-center" key={icon.name} >
                                        <OverlayTrigger
                                            key={icon.name}
                                            placement="top"
                                            overlay={
                                                <Tooltip id="tooltip-top">
                                                    {icon.name}
                                                </Tooltip>
                                            }
                                        >
                                            <img id="icons" src={icon.icon} alt={icon.name} key={icon.name} />
                                        </OverlayTrigger>
                                    </div>
                                )
                            })}
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </section >
    )
}

export default Skills
