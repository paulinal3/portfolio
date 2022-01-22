import React from 'react';

export default function Resume() {
    return (
        <div class="section-dark resume">
            <div class="container">
                <div
                    class="columns is-multiline"
                    data-aos="fade-in"
                    data-aos-easing="linear"
                >
                    <div class="column is-12 about-me">
                        <h1 class="title has-text-centered section-title">
                            View My Resume
                        </h1>
                    </div>
                    <div class="column is-10 has-text-centered is-offset-1">
                        <h2 class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et doloremagna aliqua
                        </h2>
                        <form action="example.docs">
                            <button class="button">
                                Download Resume&emsp;<i class="fad fa-download fa-lg"></i>
                                {/* <!-- https://drive.google.com/file/d/1xQzqtUl2A4-rXFiKAguJKU-lFqA8fwL7/view?usp=sharing --> */}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
