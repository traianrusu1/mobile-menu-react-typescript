export interface SideDrawerMenuItem {
  name: string;
  link: string | null;
  children: SideDrawerMenuItem[] | null;
}
