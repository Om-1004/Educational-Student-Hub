
import Navbar, {NavbarItem} from "./components/Navbar";
import { Home, LayoutDashboard, StickyNote, Calendar, Flag, Settings, LifeBuoy} from "lucide-react";


export default function App() {
  return (
    // <Register />
    // <Login />
    <>
      <div className="flex">
        <Navbar>
          <NavbarItem icon={<Home size={20} />} text="Home" alert/>
          <NavbarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active/>
          <NavbarItem icon={<StickyNote size={20} />} text="Projects" />
          <NavbarItem icon={<Calendar size={20} />} text="Tasks" />
          <NavbarItem icon={<Flag size={20} />} text="Report" />
          <hr className="my-3" />
          <NavbarItem icon={<Settings size={20} />} text="Setting"/>
          <NavbarItem icon={<LifeBuoy size={20} />} text="Help"/>

        </Navbar>
      </div>
    </>
  );
}
