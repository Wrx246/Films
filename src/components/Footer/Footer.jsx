import React from 'react';
import st from './Footer.module.css';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className={st.footer}>
            {/* <div>
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
            </div> */}
            <div className={st.footer__social}>
                <a href="https://github.com/Wrx246/Films" title="Facebook" target="_blank"><i className="fa fa-github"></i></a>
                <a href="https://www.instagram.com/wrx.maxim/" title="Twitter" target="_blank"><i className="fa fa-instagram"></i></a>
                <a href="#" title="Google+" target="_blank"><i className="fa fa-google"></i></a>
                <a href="https://www.linkedin.com/in/mkuzmianok/" title="LinkedIn+" target="_blank"><i className="fa fa-linkedin"></i></a>
            </div>
            <p>© 2022 TheMovieDB Learn Project</p>
        </div>
    )
}

export default Footer;