import {
  ChevronsUpDown,
  Sparkles,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { createClient } from "@/utils/supabase/server";
import { NavUser } from "./nav-user";

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  const user = {
    name: data.user?.user_metadata.name as string,
    email: data.user?.email as string,
  }
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Sparkles />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Pictoria</span>
          </div>
          <ChevronsUpDown className="ml-auto" />
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain/>
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter><NavUser user={user!} /></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
