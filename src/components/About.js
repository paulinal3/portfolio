import React from 'react';

export default function About() {
    return (
        <div class="section-light about-me" id="about-me">
            <div class="container">
                <div class="column is-12 about-me">
                    <h1 class="title has-text-centered section-title">About Me</h1>
                </div>
                <div class="columns is-multiline">
                    <div
                        class="column is-6 has-vertically-aligned-content"
                        data-aos="fade-right"
                    >
                        <p class="is-larger">
                            <strong>Paulina Le</strong>
                        </p>
                        <br />
                        <p>
                            I am a full stack software developer who strives to provide efficient and functional products. I am passionate about using technology to create a healthy space for users. My previous experience as a personal trainer has given me a creative outlook on how to approach different challenges and the patience to find effective solutions.
                        </p>
                        <br />
                        <div class="is-divider"></div>
                        <div class="columns about-links">
                            <div class="column">
                                <p class="heading">
                                    <strong>Give me a ring</strong>
                                </p>
                                <p class="subheading">
                                    123-456-7890
                                </p>
                            </div>
                            <div class="column">
                                <p class="heading">
                                    <strong>Email Me</strong>
                                </p>
                                <p class="subheading">
                                    paulinal3@outlook.com
                                </p>
                            </div>
                            <div class="column">
                                <p class="heading">
                                    <strong>Linkedin</strong>
                                </p>
                                <p class="subheading">
                                    linkedin.com/in/paulinal3/
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="column is-6 right-image " data-aos="fade-left">
                        <img
                            class="is-rounded"
                            src="https://picsum.photos/id/366/600/375"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
