import {
  BookOpen,
  PieChart,
  SquareTerminal,
} from "lucide-react"
import { checkUser } from "@/lib/auth"
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import { MainHead } from "./main-head"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavSingle } from "./nav-single"
import { NavGroup } from "./nav-group"

const data = {
  single:[
    {
      title: "Dashboard",
      icon: SquareTerminal,
      url:"/",
    }
  ],
  navMain: [
    {
      title: "Templates",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Templates",
          url: "/templates",
        },
      ],
    },
  ],
  billing:
  {
    title: "Billing",
    icon: PieChart,
    url: "/billing",
  }
}

export async function AppSidebar({ ...props }) {
  const user = await checkUser()
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <MainHead/>
      </SidebarHeader>
      <SidebarContent>
        <NavGroup items={data.single}/>
        <NavMain items={data.navMain} /> 
        <NavSingle item={data.billing} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user}/>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
