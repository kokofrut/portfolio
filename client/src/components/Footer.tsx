import map from '../assets/map.webp'

function Footer() {
    return (
        <div className="footer-wr">
            <div className="footer-container">

                <div className="social-section">
                    <p><a href="http://github.com/kokofrut/portfolio">Project Github</a></p>
                    <p>My Telegram</p>
                </div>
                <div id='map'>
                    <img src={map} alt='map' />
                </div>
            </div>
        </div>
    )
}

export default Footer