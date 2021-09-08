

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer__left">
                    <div className="footer__left__item">
                        <h3>Pages</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Product</a></li>
                            <li><a href="/">Pricing</a></li>
                        </ul>
                    </div>
                    <div className="footer__left__item">
                        <h3>Tomothy </h3>
                        <ul>
                            <li><a href="/">Eleanor Edwards</a></li>
                            <li><a href="/">Ted Robertson</a></li>
                            <li><a href="/">Annette Russell</a></li>
                        </ul>
                    </div>
                    <div className="footer__left__item">
                        <h3>Jane Black</h3>
                        <ul>
                            <li><a href="/">Philip Jones</a></li>
                            <li><a href="/">Product</a></li>
                            <li><a href="/">Colleen Russell</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    <div className="footer__right__item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>7480 Mockingbird Hill undefined</span>
                    </div>
                    <div className="footer__right__item">
                        <i className="fas fa-mobile-alt"></i>
                        <span>(239) 555-0108</span>
                    </div>
                    <div className="footer__right__icons">
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}
