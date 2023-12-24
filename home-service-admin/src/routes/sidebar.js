/** Icons are imported separatly to reduce build time */
import BoltIcon from '@heroicons/react/24/outline/BoltIcon'
import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon'
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import TableCellsIcon from '@heroicons/react/24/outline/TableCellsIcon'
import CodeBracketSquareIcon from '@heroicons/react/24/outline/CodeBracketSquareIcon'
import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon'
import KeyIcon from '@heroicons/react/24/outline/KeyIcon'
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon'

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/app/dashboard',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Dashboard',
  },
  {
    path: '', //no url needed as this has submenu
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Pages', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/service',
        icon: <CodeBracketSquareIcon className={submenuIconClasses}/>,
        name: 'Serivce',
      },
      {
        path: '/app/category',
        icon: <TableCellsIcon className={submenuIconClasses}/>,
        name: 'Category',
      },
      {
        path: '/app/customer', //url
        icon: <UserIcon className={submenuIconClasses}/>, // icon component
        name: 'Customer', // name that appear in Sidebar
      },
      {
        path: '/app/provider', //url
        icon: <UserIcon className={submenuIconClasses}/>, // icon component
        name: 'Provider', // name that appear in Sidebar
      },
      {
        path: '/app/booking',
        icon: <DocumentTextIcon className={submenuIconClasses}/>,
        name: 'Booking',
      },
      {
        path: '/app/review',
        icon: <DocumentIcon className={submenuIconClasses}/>,
        name: 'Review',
      },
    ]
  },
]

export default routes


