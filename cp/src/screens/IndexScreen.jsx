import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import { Button, Checkbox, EmailInput, Flex, NumberInput, PhoneNumberInput, Radio, SearchInput, Section, Select, Spinner, Switch, Tabs, Text, TextInput } from "../components/atoms";
import Meter from "../components/atoms/Meter";
import { Card, ErrorBoundary, MediaPicker, Menu, Popover, Prompt, TagsInput } from "../components/molecules";
import { ComboBox, Datepicker, DateRangePicker, Form, MediaLibrary, Timepicker, UserPersonaMenu } from "../components/organisms";
// import Dashboard from "../components/organisms/Dashboard/Dashboard";
// import inputComponents from '../components/index'

// const Dashboard = dynamic(() => import( "../components/organisms/Dashboard/Dashboard" ), { ssr: false })

export default function IndexScreen({ ...props }) {
   // const formComponents = inputComponents
   return (
      <div>
         <ErrorBoundary>
            {/* {isBrowser() && (
            <Dashboard {...props} />
            )} */}
         </ErrorBoundary>
      </div>
   )
}
