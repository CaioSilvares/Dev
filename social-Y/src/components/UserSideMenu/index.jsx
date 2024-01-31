import { MenuOption } from "./MenuOption";
import { House, MagnifyingGlass, Bell, EnvelopeSimple, BookmarkSimple, User, DotsThreeOutline } from "@phosphor-icons/react";

export function UserSideMenu() {
    return (
        <aside>
            <MenuOption text="Home" selected>
                <House size={30} weight="bold" />
            </MenuOption>
            <MenuOption text="Explore">
                <MagnifyingGlass size={30} weight="bold" />
            </MenuOption>
            <MenuOption text="Notifications">
                <Bell size={30} weight="bold" />
            </MenuOption>
            <MenuOption text="Messages">
                <EnvelopeSimple size={30} weight="bold" />
            </MenuOption>
            <MenuOption text="Bookmarks">
                <BookmarkSimple size={30} weight="bold" />
            </MenuOption>
            <MenuOption text="Profile">
                <User size={30} weight="bold" />
            </MenuOption>
            <MenuOption text="More">
                <DotsThreeOutline size={30} />
            </MenuOption>
        </aside>
    )
}