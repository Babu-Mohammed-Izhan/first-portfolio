import { ProgressBar } from "react-bootstrap"


const Skills = () => {

    return (
        <section id="skills" class="skills section-bg">
            <div class="container">

                <div class="section-title">
                    <h2>Skills</h2>
                </div>

                <div class="row skills-content">

                    <div class="col-lg-6">

                        <div class="progress">
                            <span class="skill">HTML <i class="val">80%</i></span>
                            <ProgressBar now={80} />
                        </div>

                        <div class="progress">
                            <span class="skill">CSS <i class="val">75%</i></span>
                            <ProgressBar now={75} />
                        </div>

                        <div class="progress">
                            <span class="skill">JavaScript <i class="val">80%</i></span>
                            <ProgressBar now={80} />
                        </div>


                        <div class="progress">
                            <span class="skill">Python <i class="val">80%</i></span>
                            <ProgressBar now={80} />
                        </div>

                    </div>

                    <div class="col-lg-6">

                        <div class="progress">
                            <span class="skill">MongoDB <i class="val">70%</i></span>
                            <ProgressBar now={70} />
                        </div>

                        <div class="progress">
                            <span class="skill">Express <i class="val">70%</i></span>
                            <ProgressBar now={70} />
                        </div>

                        <div class="progress">
                            <span class="skill">React <i class="val">75%</i></span>
                            <ProgressBar now={75} />
                        </div>

                        <div class="progress">
                            <span class="skill">Nodejs <i class="val">70%</i></span>
                            <ProgressBar now={70} />
                        </div>

                    </div>

                </div>

            </div>
        </section >
    )
}

export default Skills
