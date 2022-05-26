import React from "react";
import st from './About.module.css';

const About = () => {
    return (
        <div className={st.about__wrapper}>
            <h1 className={st.about__title}>About site</h1>
            <hr />
            <div className={st.about__body}>
                <h2>This site was made as a learning project.</h2>
                <div className={st.about__technology}>
                    <ul>The technology stack that was used to create this site:
                        <li>React JS</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Redux</li>
                        <li>Axios</li>
                    </ul>
                </div>

                <div className={st.about__links}>
                    <p>
                        All data for the site was taken from the open API
                        <a href="https://www.themoviedb.org"> https://www.themoviedb.org</a>
                    </p>
                    <p>
                        All code is in the public domain <br />
                        <a href="https://github.com/Wrx246/Films">https://github.com/Wrx246/Films</a>
                    </p>
                    <ul>
                        <h3>My contacts:</h3>
                        <li>
                            LinkedIn - 
                            <a href="https://www.linkedin.com/in/mkuzmianok/">https://www.linkedin.com/in/mkuzmianok/
                            </a>
                        </li>
                        <li>
                            Telegram -
                            <a href="https://t.me/jstwrx">https://t.me/jstwrx
                            </a>
                        </li>
                        <li>
                            Email - jst.wrx@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;