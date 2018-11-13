import React, { Component } from 'react';
import './Cards.css';

// Web Development
import WebDevelopmentBaloon from '../../../../assets/images/services/baloon/webdevelopment.svg';
import WebDevelopmentIcon from '../../../../assets/images/services/icon/webdevelopment.svg';
import WebDevelopmentLines from '../../../../assets/images/services/lines/webdevelopment.svg';

// Webapp Development
import WebAppDevelopmentBaloon from '../../../../assets/images/services/baloon/webappdevelopment.svg';
import WebAppDevelopmentIcon from '../../../../assets/images/services/icon/webappdevelopment.svg';
import WebAppDevelopmentLines from '../../../../assets/images/services/lines/webappdevelopment.svg';

// Website Administration
import WebsiteAdministrationBaloon from '../../../../assets/images/services/baloon/websiteadministration.svg';
import WebsiteAdministrationIcon from '../../../../assets/images/services/icon/websiteadministration.svg';
import WebsiteAdministrationLines from '../../../../assets/images/services/lines/websiteadministration.svg';

// Debugging & Solutions
import DebuggingSolutionsBaloon from '../../../../assets/images/services/baloon/debuggingsolutions.svg';
import DebuggingSolutionsIcon from '../../../../assets/images/services/icon/debuggingsolutions.svg';
import DebuggingSolutionsLines from '../../../../assets/images/services/lines/debuggingsolutions.svg';

// Technical Consulting
import TechnicalConsultingBaloon from '../../../../assets/images/services/baloon/technicalconsulting.svg';
import TechnicalConsultingIcon from '../../../../assets/images/services/icon/technicalconsulting.svg';
import TechnicalConsultingLines from '../../../../assets/images/services/lines/technicalconsulting.svg';

// Performance & Optimization
import PerformanceOptimizationBaloon from '../../../../assets/images/services/baloon/performanceoptimization.svg';
import PerformanceOptimizationIcon from '../../../../assets/images/services/icon/performanceoptimization.svg';
import PerformanceOptimizationLines from '../../../../assets/images/services/lines/performanceoptimization.svg';

// Interface Design
import InterfaceDesignBaloon from '../../../../assets/images/services/baloon/interfacedesign.svg';
import InterfaceDesignIcon from '../../../../assets/images/services/icon/interfacedesign.svg';
import InterfaceDesignLines from '../../../../assets/images/services/lines/interfacedesign.svg';

// Mobile App Design
import MobileAppDesignBaloon from '../../../../assets/images/services/baloon/mobileappdesign.svg';
import MobileAppDesignIcon from '../../../../assets/images/services/icon/mobileappdesign.svg';
import MobileAppDesignLines from '../../../../assets/images/services/lines/mobileappdesign.svg';

export default class Cards extends Component {

    render() {

        const baloons = [
            WebDevelopmentBaloon,
            WebAppDevelopmentBaloon,
            WebsiteAdministrationBaloon,
            DebuggingSolutionsBaloon,
            TechnicalConsultingBaloon,
            PerformanceOptimizationBaloon,
            InterfaceDesignBaloon,
            MobileAppDesignBaloon
        ];
        
        const icons = [
            WebDevelopmentIcon,
            WebAppDevelopmentIcon,
            WebsiteAdministrationIcon,
            DebuggingSolutionsIcon,
            TechnicalConsultingIcon,
            PerformanceOptimizationIcon,
            InterfaceDesignIcon,
            MobileAppDesignIcon
        ];
        
        const lines = [
            WebDevelopmentLines,
            WebAppDevelopmentLines,
            WebsiteAdministrationLines,
            DebuggingSolutionsLines,
            TechnicalConsultingLines,
            PerformanceOptimizationLines,
            InterfaceDesignLines,
            MobileAppDesignLines
        ];

        const names = [
            'Web Developmeent',
            'Webapp Development',
            'Website Administration',
            'Debugging & Solutions',
            'Technical Consulting',
            'Performance Optimization',
            'Interface Design',
            'Mobile App Design'
        ];

        const classes = [
            'card-service__title title-webdevelopment',
            'card-service__title title-appdevelopment',
            'card-service__title title-administration',
            'card-service__title title-solutions',
            'card-service__title title-support',
            'card-service__title title-performance',
            'card-service__title title-interfacedesign',
            'card-service__title title-appdesign'
        ];

        return (
            <div className="services-content">
                {
                    names.map((i, j) => {
                        return <figure className="card-service" key={i} >
                            <div className={classes[j]}>{i}</div>
                            <div className="card-service__logo">
                                <img src={lines[j]} className="fancy-lines" alt="" />
                                <img src={baloons[j]} className="baloon" alt="" />
                                <div className="icon">
                                    <img src={icons[j]} alt="" />
                                </div>
                            </div>
                        </figure>
                    })
                }
            </div>
        );
    }
}
