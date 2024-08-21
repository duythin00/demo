import './detail.css';
import {Link} from "react-router-dom";

export default function DetailProduct() {
    return (
        <>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 detail-all">
                    <h1>"Name Game"</h1>
                    <hr/>
                    <div>
                        <div><strong>Game Overview</strong>
                        </div>
                        <br/>
                        <p>A 2.5D casual platformer game where you play as an alien. You and your UFO buddies got stuck
                            on Earth in 2067 and want to go home, but you’ll need cash for those spaceship parts. How do
                            you earn the money? It is up to you.

                            The Player has many activities to choose from:

                            Do taxi missions (bring passengers from A to B as soon as possible, while completing
                            (optional) special requests for bonus
                            Complete special side quests and help the citizens or the other aliens out (abduct bad guys,
                            try to help a broken heart or solve a little mystery)
                            Explore the levels and search for collectibles (health upgrade, max turbo upgrade, money)…
                            who knows what else you will find…
                            This fun adventure takes 1,5 – 4 hours to complete.</p>
                    </div>

                    <img className="detail-img"
                         src="https://dotesports.com/wp-content/uploads/2023/07/riot-games-says-league-of-legends-new-mode-lol-arena-only-staying-if-enough-people-play.jpg"
                         alt=""/>

                    <div>
                        <br/>
                        <div><strong>Installation Instructions</strong></div>
                        <br/>
                        <p>Click the green button below to be redirected to UploadHaven.com.
                            Wait 15 seconds, then click on the “free download” button. Allow the file transfer to
                            complete (note that speeds may be slower with the free plan; upgrading to UploadHaven Pro
                            will increase speeds).
                            Once the transfer is complete, right-click the .zip file and select “Extract to UFO Taxi”
                            (To do this you must have 7-Zip, which you can get here).
                            Open the folder that you just extracted and run the game as administrator.
                            Enjoy the game! Ensure you run it as an administrator to avoid any issues. If you encounter
                            any missing DLL errors, check the Redist or _CommonRedist folder and install all necessary
                            programs.</p>
                    </div>

                    <div>
                        <br/>
                        <div><strong>Download Links</strong></div>
                        <br/>
                        <p>You can get the full version of this game from the links provided below. Running the game as
                            an administrator is recommended for optimal performance and to avoid save issues.</p>

                        <div className="detail-button-link-game">
                            <div>
                                DOWNLOAD NOW
                                <br/>
                                <em>size: 3.00 GB</em>
                            </div>
                        </div>
                        <div className="detail-title-left">
                            <p><strong>Easy Setup</strong> : Unless GOG specified, no installation is needed. If you
                                encounter missing DLL errors, check for a _Redist or _CommonRedist folder. Install
                                DirectX,
                                Vcredist, and all other necessary programs from that folder to ensure the game runs
                                smoothly.</p>
                            <p>
                                <strong>
                                    Helpful Tips:
                                </strong>
                                <ul>
                                    <li>For more detailed instructions, refer to the HOW TO RUN GAME!!.txt file
                                        included.
                                    </li>
                                    <li>Right-click the game’s executable file and choose “Run as administrator” if you
                                        experience
                                        issues saving your game.
                                    </li>
                                    <li>Disable your antivirus before extracting the game to prevent it from deleting
                                        essential
                                        crack files.
                                    </li>
                                    <li>Ensure your graphics card runs smoothly by updating your GPU drivers to the
                                        latest version.
                                        This can significantly enhance game performance and compatibility.
                                    </li>
                                </ul>
                            </p>
                            <p><strong>Need More </strong> Help? Visit our <strong> FAQ page </strong> for solutions to
                                frequently asked questions and common
                                issues.</p>
                        </div>

                    </div>
                    <div>
                        <div><strong>System Requirements</strong>
                            <div className="detail-title-left">
                                <p><strong>OS: </strong> Windows® 10 64-bit or newer</p>
                                <p><strong>Processor: </strong> Intel® Core™ i5-2500 @3.3 GHz / AMD FX-8320 @3.5 GHz</p>
                                <p><strong>Memory: </strong> 2 GB RAM</p>
                                <p><strong>Graphics: </strong>NVIDIA® GeForce® GTX 560 Ti / AMD Radeon™ HD 6870 (1GB
                                    VRAM)</p>
                                <p><strong>DirectX: </strong>Version 11</p>
                                <p><strong>Storage: </strong>5 GB available space</p>
                                <p><strong> Sound Card: </strong> DirectX® compatible</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div><strong>Screenshots</strong></div>
                        <div>
                            <img className="detail-img"
                                 src="https://dotesports.com/wp-content/uploads/2023/07/riot-games-says-league-of-legends-new-mode-lol-arena-only-staying-if-enough-people-play.jpg"
                                 alt=""/>
                            <img className="detail-img"
                                 src="https://dotesports.com/wp-content/uploads/2023/07/riot-games-says-league-of-legends-new-mode-lol-arena-only-staying-if-enough-people-play.jpg"
                                 alt=""/>
                            <img className="detail-img"
                                 src="https://dotesports.com/wp-content/uploads/2023/07/riot-games-says-league-of-legends-new-mode-lol-arena-only-staying-if-enough-people-play.jpg"
                                 alt=""/>
                        </div>
                    </div>
                    <hr/>

                    <div>
                        <div className="detail-comment-all">
                            <nav className="detail-comment-login-nav">
                                <div>"Count" Comments</div>
                                <div>
                                    <Link to={"/login"}>Login</Link>
                                </div>
                            </nav>
                            <div className="input-group mb-3">
                                <div className="detail-avatar-comment">AVT</div>
                                <div className="detail-writing-comment">
                                    <button>Submit</button>
                                </div>
                            </div>
                        </div>


                        <div className="input-group mb-3 detail-all-cmt">
                            <div className="detail-avatar-comment" style={{marginLeft: 20}}>AVT</div>
                            <div className="detail-detail-comment">
                                <div>
                                    <div style={{fontSize:20, fontWeight:600}}>Duy Con 00</div>
                                    <div style={{fontSize:12, fontWeight:400, alignItems:"flex-start", display:"flex"}}>18 hours ago</div>
                                </div>
                                <div style={{marginTop:10}}>It is product very very bad. Requirement manufacturer repairing right now</div>
                                <div style={{display: "flex"}}>
                                    <div style={{margin:10}}>
                                        <button style={{border:"none", background:"white"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                                                <path
                                                    d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                            </svg>
                                            "Number"
                                        </button>
                                    </div>
                                    <div style={{margin:10}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-ban" viewBox="0 0 16 16">
                                            <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div> <div className="input-group mb-3 detail-all-cmt">
                            <div className="detail-avatar-comment" style={{marginLeft: 20}}>AVT</div>
                            <div className="detail-detail-comment">
                                <div>
                                    <div style={{fontSize:20, fontWeight:600}}>Duy Con 00</div>
                                    <div style={{fontSize:12, fontWeight:400, alignItems:"flex-start", display:"flex"}}>18 hours ago</div>
                                </div>
                                <div style={{marginTop:10}}>It is product very very bad. Requirement manufacturer repairing right now</div>
                                <div style={{display: "flex"}}>
                                    <div style={{margin:10}}>
                                        <button style={{border:"none", background:"white"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                                                <path
                                                    d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                            </svg>
                                            "Number"
                                        </button>
                                    </div>
                                    <div style={{margin:10}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-ban" viewBox="0 0 16 16">
                                            <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div> <div className="input-group mb-3 detail-all-cmt">
                            <div className="detail-avatar-comment" style={{marginLeft: 20}}>AVT</div>
                            <div className="detail-detail-comment">
                                <div>
                                    <div style={{fontSize:20, fontWeight:600}}>Duy Con 00</div>
                                    <div style={{fontSize:12, fontWeight:400, alignItems:"flex-start", display:"flex"}}>18 hours ago</div>
                                </div>
                                <div style={{marginTop:10}}>It is product very very bad. Requirement manufacturer repairing right now</div>
                                <div style={{display: "flex"}}>
                                    <div style={{margin:10}}>
                                        <button style={{border:"none", background:"white"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                                                <path
                                                    d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                            </svg>
                                            "Number"
                                        </button>
                                    </div>
                                    <div style={{margin:10}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-ban" viewBox="0 0 16 16">
                                            <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div> <div className="input-group mb-3 detail-all-cmt">
                            <div className="detail-avatar-comment" style={{marginLeft: 20}}>AVT</div>
                            <div className="detail-detail-comment">
                                <div>
                                    <div style={{fontSize:20, fontWeight:600}}>Duy Con 00</div>
                                    <div style={{fontSize:12, fontWeight:400, alignItems:"flex-start", display:"flex"}}>18 hours ago</div>
                                </div>
                                <div style={{marginTop:10}}>It is product very very bad. Requirement manufacturer repairing right now</div>
                                <div style={{display: "flex"}}>
                                    <div style={{margin:10}}>
                                        <button style={{border:"none", background:"white"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                                                <path
                                                    d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                            </svg>
                                            "Number"
                                        </button>
                                    </div>
                                    <div style={{margin:10}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-ban" viewBox="0 0 16 16">
                                            <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>

        </>
    )
}