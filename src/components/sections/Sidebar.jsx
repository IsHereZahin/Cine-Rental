import comingSoon from "../../assets/imgs/icons/commingSoon.svg";
import favorite from "../../assets/imgs/icons/favourite.svg";
import newRelease from "../../assets/imgs/icons/newRelease.svg";
import trending from "../../assets/imgs/icons/trending.svg";
import watchLater from "../../assets/imgs/icons/watchLater.svg";


export default function Sidebar() {
    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
                        <img src={trending} width="24" height="24" alt="" />
                        <span>Trending</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <img src={newRelease} width="24" height="24" alt="" />
                        <span>New Releases</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <img src={comingSoon} width="24" height="24" alt="" />
                        <span>Coming Soon</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <img src={favorite} width="24" height="24" alt="" />
                        <span>Favorites</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <img src={watchLater} width="24" height="24" alt="" />
                        <span>Watch Later</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}