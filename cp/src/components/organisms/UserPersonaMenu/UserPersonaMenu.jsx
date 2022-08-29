import { Menu, Popover } from "../../molecules";

export default function UserPersonaMenu() {
   const { user } = {}
   return (
      <Popover>
         <Menu onAction={globalThis.alert}>
            <Menu.Item key={'user/profile'} children={'Profile'} />
            <Menu.Item key={'user/settings'} children={'Settings'} />
            <Menu.Item key={'user/billing'} children={'Billing'} />
         </Menu>
      </Popover>
   )
}
