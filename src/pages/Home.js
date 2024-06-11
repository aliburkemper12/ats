import pic from '../img/anon_profile.jpg'
export default function Home() {
    return (
        <div className="container-fluid">
            <div className='gradient'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="home">
                            <p className="header"><span className="font-link"><a id="first">Lorem</a> Ipsum</span></p>
                            <p className="header-small"><span className="font-link">Lorem Ipsum</span></p>
                        </div>
                    </div>
                </div>
                <p className='home-body'>
                    {/* <img className="pic" src={ pic } alt="Headshot" /> */}
                    <p className='home-text'><span className="font-link">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.
                        A diam maecenas sed enim ut. Nunc lobortis mattis aliquam faucibus. Ut morbi tincidunt augue interdum velit euismod in. Ultrices tincidunt arcu non sodales neque sodales ut. Diam sollicitudin tempor id eu nisl nunc. Enim praesent elementum facilisis
                        leo vel. Sed id semper risus in hendrerit gravida rutrum. At volutpat diam ut venenatis tellus in.</span></p>
                </p>
            </div>
        </div>
    );
}