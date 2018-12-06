import React, { Component } from 'react';
import './RequestOffer.css';

export default class RequestOffer extends Component {
    render() {
        return (
            <div class="offer-request">
                <button class="offer-request__brief">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" width="512px" height="512px">
                        <g>
                            <g>
                                <path d="M447.933,103.629c-0.034-3.076-1.224-6.09-3.485-8.352L352.683,3.511c-0.004-0.004-0.007-0.005-0.011-0.008    C350.505,1.338,347.511,0,344.206,0H89.278C75.361,0,64.04,11.32,64.04,25.237v461.525c0,13.916,11.32,25.237,25.237,25.237    h333.444c13.916,0,25.237-11.32,25.237-25.237V103.753C447.96,103.709,447.937,103.672,447.933,103.629z M356.194,40.931    l50.834,50.834h-49.572c-0.695,0-1.262-0.567-1.262-1.262V40.931z M423.983,486.763c0,0.695-0.566,1.261-1.261,1.261H89.278    c-0.695,0-1.261-0.566-1.261-1.261V25.237c0-0.695,0.566-1.261,1.261-1.261h242.94v66.527c0,13.916,11.322,25.239,25.239,25.239    h66.527V486.763z" fill="#FFFFFF"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M362.088,164.014H149.912c-6.62,0-11.988,5.367-11.988,11.988c0,6.62,5.368,11.988,11.988,11.988h212.175    c6.62,0,11.988-5.368,11.988-11.988C374.076,169.381,368.707,164.014,362.088,164.014z" fill="#FFFFFF"></path>

                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M362.088,236.353H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.62,5.368,11.988,11.988,11.988h212.175    c6.62,0,11.988-5.368,11.988-11.988C374.076,241.721,368.707,236.353,362.088,236.353z" fill="#FFFFFF"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M362.088,308.691H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.621,5.368,11.988,11.988,11.988h212.175    c6.62,0,11.988-5.367,11.988-11.988C374.076,314.06,368.707,308.691,362.088,308.691z" fill="#FFFFFF"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M256,381.031H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.621,5.368,11.988,11.988,11.988H256    c6.62,0,11.988-5.367,11.988-11.988C267.988,386.398,262.62,381.031,256,381.031z" fill="#FFFFFF"></path>
                            </g>
                        </g>
                    </svg>
                    <span>Request an offer</span>
                </button>
                <div class="offer-request__phone">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 485.213 485.212">
                        <g>
                            <path d="M242.607,0C108.629,0,0.001,108.628,0.001,242.606c0,133.976,108.628,242.606,242.606,242.606   c133.978,0,242.604-108.631,242.604-242.606C485.212,108.628,376.585,0,242.607,0z M370.719,353.989l-19.425,19.429   c-3.468,3.463-13.623,5.624-13.949,5.624c-61.452,0.536-120.621-23.602-164.095-67.08c-43.593-43.618-67.759-102.998-67.11-164.657   c0-0.028,2.224-9.892,5.689-13.324l19.424-19.427c7.108-7.141,20.762-10.368,30.327-7.168l4.086,1.363   c9.537,3.197,19.55,13.742,22.185,23.457l9.771,35.862c2.635,9.743-0.919,23.604-8.025,30.712l-12.97,12.972   c12.734,47.142,49.723,84.138,96.873,96.903l12.965-12.975c7.141-7.141,20.997-10.692,30.719-8.061l35.857,9.806   c9.717,2.67,20.26,12.62,23.456,22.154l1.363,4.145C381.028,333.262,377.826,346.913,370.719,353.989z" fill="#464f5c"></path>
                        </g>
                    </svg>
                    <span>+40 742 104 540</span>
                </div>
            </div>
        );
    }
}
