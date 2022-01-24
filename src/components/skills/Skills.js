import SkillsHeader from "./SkillsHeader";

export default function Skills() {
    return (
        <div class="section-color skills" id="skills">
            <div class="container">
                <div class="columns is-multiline">
                    <SkillsHeader />
                    <div class="columns is-12">
                        <div
                            class="column is-4 has-text-centered"
                            data-aos="fade-in"
                            data-aos-easing="linear"
                        >
                            <i class="fab fa-react fa-3x"></i>
                            <hr />
                            <h2 class="skillsInfo">
                                React - Next.JS
                                <br />
                                • • • 
                                <br />
                                Currently refactoring my Heavy Things Tracker application into a React project.
                            </h2>
                        </div>
                        <div
                            class="column is-4 has-text-centered"
                            data-aos="fade-in"
                            data-aos-easing="linear"
                        >
                            <i class="fab fa-js-square fa-3x" alt="React Icon"></i>
                            <hr />
                            <h2 class="skillsInfo">
                                JavaScript/ES6 - EJS - JSX
                                <br /> 
                                • • • 
                                <br />
                                Able to use plain vanilla Javascript or with templating languages.
                            </h2>
                        </div>
                        <div
                            class="column is-4 has-text-centered"
                            data-aos="fade-in"
                            data-aos-easing="linear"
                        >
                            <i class="fab fa-node fa-3x" alt="Node.js Icon"></i>
                            <hr />
                            <h2 class="skillsInfo">
                                Node.JS - Express
                                <br /> 
                                • • • 
                                <br />
                                To handle routing, sessions, controllers, logic, API development, and views.
                            </h2>
                        </div>
                    </div>
                    <hr />
                    <div class="columns is-12">
                    <div
                            class="column is-4 has-text-centered"
                            data-aos="fade-in"
                            data-aos-easing="linear"
                        >
                            <i class="fas fa-database fa-3x" alt="Database Icon"></i>
                            <hr />
                            <h2 class="skillsInfo">
                                PostgreSQL - MongoDB
                                <br /> 
                                • • • 
                                <br />
                                What type of application I build determines which database I use. Typically use MongoDB Atlas for deployment.
                            </h2>
                        </div>
                        <div
                            class="column is-4 has-text-centered"
                            data-aos="fade-in"
                            data-aos-easing="linear"
                        >
                            <i class="fas fa-code fa-3x" alt="Coding Icon"></i>
                            <hr />
                            <h2 class="skillsInfo">
                                SEI Teaching Assistant
                                <br /> 
                                • • • 
                                <br />
                                Not only do I love to learn, but I love to teach and help others. I'm currently working as a Sofware Engineer Immersive Teaching Assistant.
                            </h2>
                        </div>
                        <div
                            class="column is-4 has-text-centered"
                            data-aos="fade-in"
                            data-aos-easing="linear"
                        >
                            <i class="far fa-heart fa-3x" alt="Heart Icon"></i>
                            <hr />
                            <h2 class="skillsInfo">
                                Fitness Trainer - Baker
                                <br /> 
                                • • • 
                                <br />
                                When I'm not coding, I'm a fitness trainer and baker. I'm a certified personal trainer and group fitness instructor that loves helping my clients achieve their goals.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
