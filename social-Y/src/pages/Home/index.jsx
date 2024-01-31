import { UserSideMenu } from "../../components/UserSideMenu";
import { TrendsSidebar } from "../../components/TrendsSidebar";
import { NewPost } from "../../components/Post/NewPost";
import { PostFeed } from "../../components/Post/PostFeed";

import style from "./style.module.css";

export function Home() {
    return (
        <div className={style.homeLayout}>
            <UserSideMenu />
            <main >
                <NewPost />
                <PostFeed />
            </main >
            <TrendsSidebar />
        </div >
    )
}