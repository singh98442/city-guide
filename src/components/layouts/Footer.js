import React from 'react'

const Footer = () => {
    return (
        <div className='main-footer bg-dark text-white'>
            <div className="container pt-3">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h3>Lorem, ipsum dolor.</h3>
                        <ul className='list-unstyled'>
                            <li>lorem sir</li>
                            <li>lorem sir</li>
                            <li>lorem sir</li>
                            <li>lorem sir</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 colorprob">
                        <h4>Lorem, ipsum dolor</h4>
                        <ul className='list-unstyled'>
                            <li><a href="/">hello sir</a></li>
                            <li><a href="/">hello sir</a></li>
                            <li><a href="/">hello sir</a></li>
                            <li><a href="/">hello sir</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 colorprob">
                        <h4>Lorem, ipsum dolor</h4>
                        <ul className='list-unstyled'>
                            <li><a href="/">hello sir</a></li>
                            <li><a href="/">hello sir</a></li>
                            <li><a href="/">hello sir</a></li>
                            <li><a href="/">hello sir</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 colorprob">
                        <h4>Lorem, ipsum dolor</h4>
                        <ul className='list-unstyled'>
                            <li><a href="/">hello sir</a></li>
                            <li><a href="/">hello sir</a></li>
                            <li><a href="/">hello sir</a></li>
                            <li><a href="/">hello sir</a></li>
                        </ul>
                    </div>


                </div>
                <div className="footer-bottom pt-3 pb-2">
                    <p className='text-xs-center'>&copy;{new Date().getFullYear()} all rithts are reserved for city-guide</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;
