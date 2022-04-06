import React from 'react';
import st from './Footer.module.css';

const Footer = () => {
    return (
        <div className={st.footer}>
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