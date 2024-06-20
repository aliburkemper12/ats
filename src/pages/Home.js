import { Parallax } from "react-scroll-parallax";
import { Fade } from "react-awesome-reveal";
import pc from '../img/pc_transparent.png'

export default function Home() {
    return (
        <div className="container-fluid">
            <div className='gradient'>
                <div className="img">
                    <div className='row'>
                        <div className='col-12'>
                            <div className="home">
                                <Parallax scale={[1.1, .8]}>
                                    <p className="header"><span className="font-link"><a id="first">LOREM</a> IPSUM</span></p>
                                    <div className="row">
                                        <div className="col-3">
                                            <p className="header-small"><span className="font-link">Lorem Ipsum</span></p>
                                        </div>
                                        <div className="col-4 mt-3 w-50">
                                            <hr style={{
                                                color: 'rgb(237, 238, 240)',
                                                backgroundColor: 'rgb(237, 238, 240)',
                                                height: 5,
                                                opacity: 0.9,
                                                borderColor: 'rgb(237, 238, 240)'
                                            }}/>
                                        </div>
                                    </div>
                                </Parallax>
                                <div className="row">
                                    <div className="col-6-md col-12">
                                        <p className="cta">Powerful solutions for your tech needs.</p>
                                    </div>
                                </div>
                                <Parallax translateX={[0, -40]}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="bg-header">
                                                <p>SOLUTIONS</p>
                                            </div>
                                        </div>
                                    </div>
                                </Parallax>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-6 col-12'>
                        <Parallax speed={[10]}>
                            <p className='home-body'>
                                <Fade>
                                    <p className='home-text'><span className="font-link">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.
                                    A diam maecenas sed enim ut. Nunc lobortis mattis aliquam faucibus. Ut morbi tincidunt augue interdum velit euismod in. Ultrices tincidunt arcu non sodales neque sodales ut. Diam sollicitudin tempor id eu nisl nunc. Enim praesent elementum facilisis
                                    leo vel. Sed id semper risus in hendrerit gravida rutrum. At volutpat diam ut venenatis tellus in.</span>
                                    </p>
                                </Fade>
                            </p>
                        </Parallax>
                    </div>
                    <div className="col-md-6 col-12">
                        <img className="pc" src={ pc } alt="pc"/>
                    </div>
                </div>
                        <div className="col-md-6 col-12">
                            <Parallax translateX={[-20, 100]}>
                                    <hr style={{
                                        color: 'rgb(237, 238, 240)',
                                        backgroundColor: 'rgb(237, 238, 240)',
                                        height: 5,
                                        opacity: 0.9,
                                        borderColor: 'rgb(237, 238, 240)'
                                        }}/>
                            </Parallax>
                        </div>
                    <div className="col-12">
                        <p className="bg-section">WHAT WE DO</p>
                    </div>
                    <div className="wwd">
                        <div className="row">
                            <div className='col-md-4 col-12'>
                                <Fade>
                                    <p className="home-text-section">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.
                                        A diam maecenas sed enim ut. Nunc lobortis mattis aliquam faucibus.
                                    </p>
                                </Fade>
                            </div>
                            <div className="col-md-4 col-12">
                                <Fade>
                                    <p className="home-text-section">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.
                                        A diam maecenas sed enim ut. Nunc lobortis mattis aliquam faucibus.
                                    </p>
                                </Fade>
                            </div>
                            <div className="col-md-4 col-12">
                                <Fade>
                                    <p className="home-text-section">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.
                                        A diam maecenas sed enim ut. Nunc lobortis mattis aliquam faucibus.
                                    </p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}