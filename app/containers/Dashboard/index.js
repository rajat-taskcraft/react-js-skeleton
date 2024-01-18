import { Menu, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { reactIcons } from '../../utils/icons';
import { links } from './../../utils/constants';

const Dashboard = () => {
  const { pathname } = useLocation();
  const [anchorUser, setAnchorUser] = useState(null);

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <div className="sticky flex-shrink-0 z-50 top-0 bg-white h-[70px] flex justify-between gap-6 items-center px-8 border-b-2 border-b-zinc-200">
        <Link className="font-36 font-semibold" to={'/dashboard'}>
          Template
        </Link>
        <div className="flex gap-2 items-center">
          <div className="flex gap-2 items-center">
            <div
              onClick={(event) => {
                setAnchorUser(event.currentTarget);
              }}
              className="w-12 h-12 rounded-full cursor-pointer bg-primary-50 flex-center"
            >
              <span className="text-18  text-primary-300 font-semibold capitalize">
                A
              </span>
            </div>
            <Menu
              id="profile-menu"
              aria-labelledby="profile-button"
              anchorEl={anchorUser}
              open={Boolean(anchorUser)}
              onClose={() => {
                setAnchorUser(null);
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                '& .MuiPaper-root': {
                  minWidth: 300,
                },
              }}
            >
              <div className="py-2 px-2">
                <header className="flex items-center justify-between gap-4 px-2 pl-4 ">
                  <h4 className="heading-4 capitalize">Amit Yadav</h4>
                  <div className="w-14 h-14 rounded-full cursor-pointer bg-primary-50 flex-center">
                    <span className="text-22  text-primary-300 font-semibold capitalize">
                      A
                    </span>
                  </div>
                </header>

                <nav className="w-full py-4 pt-2  border-b border-b-zinc-100">
                  <Link
                    tabIndex={1}
                    to="/"
                    className="py-2 w-full block text-14 px-4 text-black  hover:bg-zinc-100 rounded-sm"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/"
                    className="py-2 w-full block text-14 px-4 text-black  hover:bg-zinc-100 rounded-sm"
                  >
                    Settings
                  </Link>
                  <Link
                    to="/"
                    className="py-2 w-full block text-14 px-4 text-black  hover:bg-zinc-100 rounded-sm"
                  >
                    Workspaces
                  </Link>
                </nav>
              </div>
            </Menu>
          </div>
        </div>
      </div>
      <div className="h-[calc(100%-71px)] flex flex-1">
        <div className="w-[35px] md:w-[72px] bg-black  h-full flex flex-col items-center py-4 gap-3 overflow-y-auto">
          {links.map((link) => (
            <NavLink key={link.title} to={link.path}>
              <Tooltip
                placement="right-start"
                title={
                  <div className="text-16 px-4 py-2 font-poppins  font-semibold">
                    {link.title}
                  </div>
                }
                arrow
              >
                <span
                  className={`w-[30px] h-[30px] md:w-[50px] md:h-[50px] text-[16px] md:text-[32px] cursor-pointer flex-center hover:bg-gray-600 rounded-md md:rounded-lg text-white ${
                    pathname.includes(link.path) && 'bg-primary-300'
                  }`}
                >
                  {link.icon}
                </span>
              </Tooltip>
            </NavLink>
          ))}
        </div>
        <div className="flex-1 overflow-y-auto h-full " id="scrollableDiv">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
