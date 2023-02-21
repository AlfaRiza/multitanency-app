import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import { Link } from '@inertiajs/react';
import {useState} from 'react';
import Notify from '../Components/Notify';
import ProfileImg from '../Components/ProfileImg';
import ItemMenu from './ItemMenu';

const Sidebar = ({ auth, header, children }) => {
  const array = [
    {
      title: "Overview",
      url: 'dashboard',
      icon: "fa fa-gauge-high"
    },
    {
      title: "Transasctions",
      url: 'transaction',
      icon: "fa-sharp fa-solid fa-paper-plane"
    },
    {
      title: "Account",
      url: 'profile',
      icon: "fa-solid fa-user"
    },
    {
      title: "Reports",
      url: 'report',
      icon: "fa-solid fa-file"
    },
    {
      title: "Setting",
      url: 'setting',
      icon: "fa-solid fa-gear"
    },
  ]
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

  return (
    <>
    <div id="header">
      <div id="headerContent" className='flex justify-between w-screen h-[100px] px-[70px]'>
        <div className='flex justify-center items-center'>
        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
        </div>
        <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="ml-3 relative">
                <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex justify-center items-center rounded-md">
                            <Notify />
                            <ProfileImg />
                            <button
                                type="button"
                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                            >
                                {auth.user.name}

                                <svg
                                    className="ml-2 -mr-0.5 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content >
                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                        <Dropdown.Link href={route('logout')} method="post" as="button">
                            Log Out
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            </div>
        </div>
      </div>
    </div>
  
  <div id="page">
    <div id="sideBar">
      <div className='flex justify-center py-[32px] text-[#00466C]'>
      Manage your money in 
      one view
      </div>
      {
        array.map(item => {
          return (
            <ItemMenu title={item.title} icon={item.icon} key={item.icon} url={item.url} />
          )
        })
      }
    </div>
    <div id="content" className='overflow-scroll'>
      { children }
    </div>
  </div>
    </>
  )
}

export default Sidebar;
