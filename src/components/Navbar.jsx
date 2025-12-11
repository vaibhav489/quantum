import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useThemeContext } from '../contextapi/themeContext/themeContext'
import { useAuthContext } from '../contextapi/authContext/authContext'
function Navbar() {
    const { theme, darkMode, lightMode } = useThemeContext()
    const { isLogin, logoutFun } = useAuthContext()



    const toggleTheme = () => {
        if (theme === 'light') {
            darkMode()
        } else {
            lightMode()
        }
    }

    return (
        <div className="bg-gray-800 dark:bg-gray-700 fixed top-0 left-0 z-50 w-full">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <Link to="/" aria-label="Company" title="Company" className="inline-flex items-center">
                        <svg className="w-8 text-teal-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2"
                            stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="white">
                            <rect x="3" y="1" width="7" height="12"></rect>
                            <rect x="3" y="17" width="7" height="6"></rect>
                            <rect x="14" y="1" width="7" height="6"></rect>
                            <rect x="14" y="11" width="7" height="12"></rect>
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">Quantum IT innovation</span>
                    </Link>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li><NavLink to="/" aria-label="Our product" title="Our product"
                            className={({ isActive }) => `font-medium tracking-wide ${isActive ? 'relative transition-all duration-300 ease-linear bottom-2 pb-2 border-b-orange-100 border-b-2 text-orange-600' : 'text-gray-100'} transition-colors duration-200 hover:text-teal-accent-400`}>Home</NavLink>
                        </li>
                       
                    </ul>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li className='text-white text-xl' onClick={toggleTheme}>
                            {theme == 'dark' ? <i className="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i>}
                        </li>
                        <li>
                            { isLogin ?
                               <button onClick={logoutFun}
                                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                                    Logout
                                </button>
                                : <Link to="/login"
                                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                    aria-label="Sign up" title="Sign up">
                                    Login
                                </Link>}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
