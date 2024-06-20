import pc from '../img/pc_transparent.png'
export default function About() {
    return (
        <div className="about-container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="about">
                        <p className="about-head">OUR MISSION</p>
                        <p className="about-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.
                            A diam maecenas sed enim ut. Nunc lobortis mattis aliquam faucibus. Ut morbi tincidunt augue interdum velit euismod in. Ultrices tincidunt arcu non sodales neque sodales ut. Diam sollicitudin tempor id eu nisl nunc. Enim praesent elementum facilisis
                            leo vel. Sed id semper risus in hendrerit gravida rutrum. At volutpat diam ut venenatis tellus in.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 text-center">
                    <img className="pc" src={ pc } alt="pc"/>
                </div>
            </div>
        </div>
    );
}