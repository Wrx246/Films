import React from 'react';
import st from './Footer.module.css';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className={st.footer}>
            <div>
                <SocialIcon
                    url="https://www.linkedin.com/in/maxim-kuzmianok-01013b200/"
                    style={{ height: 35, width: 35 }} />
                <SocialIcon
                    url='https://github.com/Wrx246/Films'
                    style={{ marginLeft: 10, height: 35, width: 35 }}
                    network='github' />
                <SocialIcon
                    // url='https://t.me/jstwrx'
                    style={{ marginLeft: 10, height: 35, width: 35 }}
                    network='telegram' />
                <SocialIcon
                    // url='https://t.me/jstwrx'
                    style={{ marginLeft: 10, height: 35, width: 35 }}
                    network='instagram' />
            </div>
            <p>© 2022 TheMovieDB Learn Project</p>
        </div>
    )
}

export default Footer;