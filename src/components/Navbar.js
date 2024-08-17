import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg all-navbar text-white">
                        <Link to={'/'} className="navbar-brand text-white">Home</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item navbar-menu-item">
                                    <Link to={'/detail'} className="nav-link text-white">All Games (A-Z)</Link>
                                </li>
                                <li className="nav-item dropdown navbar-menu-item">
                                    <Link to={'#'} className="nav-link dropdown-toggle text-white" role="button"
                                          data-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </Link>
                                    <div className="dropdown-menu">
                                        <Link to={'/category/pubg'} className="dropdown-item">PUBG</Link>
                                        <Link to={'/category/pubg'} className="dropdown-item">PUBG</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link to={'/category/gunny'} className="dropdown-item">Gunny</Link>
                                        <Link to={'/category/gunny'} className="dropdown-item">Gunny</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link to={'/category/lol'} className="dropdown-item">LOL</Link>
                                        <Link to={'/category/lol'} className="dropdown-item">LOL</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/contact'} className="nav-link navbar-menu-item text-white">Contact
                                        US</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/faq'} className="nav-link navbar-menu-item text-white">FAQ</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/help'} className="nav-link navbar-menu-item text-white">Help</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/invalid-games'} className="nav-link navbar-menu-item text-white">Invalid
                                        Games List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/latest-news'} className="nav-link navbar-menu-item text-white">Latest
                                        News</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'#'} className="nav-link disabled text-white">Disabled</Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <Link to={'/login'} className="btn btn-outline-success my-2 my-sm-0"
                                      type="submit">Login</Link>
                            </form>
                        </div>
                    </nav>
                    <div className="text-navbar text-white">
                        <div className="text-navbar-1">GET FREE STEAM GAMES</div>
                        <div className="text-navbar-2">Pre-Installed for PC</div>
                        <div className="text-navbar-3">Steam Unlocked allows you to download your favorite games pre-installed on steam without the cost.</div>
                        <input type="text" className="input-navbar"/>
                    </div>
                </div>
            </div>
        </>
    )
}
