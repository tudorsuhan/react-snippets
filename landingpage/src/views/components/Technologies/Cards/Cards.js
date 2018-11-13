import React, { Component } from 'react';
import './Cards.css';

import BootstrapIcon from '../../../../assets/images/technologies/bootstrap.svg';
import Css3Icon from '../../../../assets/images/technologies/css3.svg';
import GulpIcon from '../../../../assets/images/technologies/gulp.svg';
import Html5Icon from '../../../../assets/images/technologies/html5.svg';
import JavascriptIcon from '../../../../assets/images/technologies/javascript.svg';
import JqueryIcon from '../../../../assets/images/technologies/jquery.svg';
import MariaDBIcon from '../../../../assets/images/technologies/mariadb.svg';
import MochaIcon from '../../../../assets/images/technologies/mocha.svg';
import MysqlIcon from '../../../../assets/images/technologies/mysql.svg';
import NpmIcon from '../../../../assets/images/technologies/npm.svg';
import PhpIcon from '../../../../assets/images/technologies/php.svg';
import PugIcon from '../../../../assets/images/technologies/pug.svg';
import ReactIcon from '../../../../assets/images/technologies/react.svg';
import ReduxIcon from '../../../../assets/images/technologies/redux.svg';
import SassIcon from '../../../../assets/images/technologies/sass.svg';
import SymfonyIcon from '../../../../assets/images/technologies/symfony.svg';
import WordpressIcon from '../../../../assets/images/technologies/wordpress.svg';

export default class Cards extends Component {
    render() {

        const names = [
            'Bootstrap4',
            'CSS3',
            'Gulp',
            'HTML5',
            'Javascript / ES6 / ES7',
            'jQuery',
            'MariaDB',
            'Mocha',
            'MySQL',
            'NPM',
            'PHP',
            'Pug',
            'React',
            'Redux',
            'SASS',
            'Symfony',
            'Wordpress'
        ];

        const icons = [
            BootstrapIcon,
            Css3Icon,
            GulpIcon,
            Html5Icon,
            JavascriptIcon,
            JqueryIcon,
            MariaDBIcon,
            MochaIcon,
            MysqlIcon,
            NpmIcon,
            PhpIcon,
            PugIcon,
            ReactIcon,
            ReduxIcon,
            SassIcon,
            SymfonyIcon,
            WordpressIcon
        ];

        return (
            <div className="technologies">
                {
                    names.map((i, j) => {
                        return <figure className="tech-card" key={names[j]}>
                            <div className="tech-card__logo">
                                <img src={icons[j]} alt={names[j]} />
                            </div>
                            <div className="tech-card__name">{i}</div>
                        </figure>
                    })
                }
            </div>
        );
    }
}
