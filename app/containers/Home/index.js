import React from 'react';
import { reactIcons } from './../../utils/icons';

const Home = () => {
  return (
    <>
      <div></div>
      {/* <div className="grid grid-cols-2 gap-6 p-10">
        <div className="p-6 rounded-xl border-2 border-zinc-200">
          <header>
            <h4 className="text-18 font-semibold">Recent sales </h4>
            <p className="text-14 text-primary-gray font-medium ">
              Last 7 days
            </p>
            <div className="text-40 mt-4">&#8377;00.00</div>
            <div className="mb-4 mt-6">
              <div>
                <span className="font-medium text-14 text-primary-gray">
                  Appointments{' '}
                </span>
                <strong className="font-semibold">0</strong>
              </div>
              <div>
                <span className="font-medium text-14 text-primary-gray">
                  Appointments Value{' '}
                </span>
                <strong className="font-semibold">&#8377;00</strong>
              </div>
            </div>
          </header>
        </div>
        <div className="p-6 rounded-xl border-2 border-zinc-200">
          <header>
            <h4 className="text-18 font-semibold">Upcoming appointments </h4>
            <p className="text-14 text-primary-gray font-medium ">
              Next 7 days
            </p>
          </header>
          <div className="text-center py-20">
            <div className="flex justify-center items-center text-center flex-col ">
              <div className="text-7xl  text-primary-gray ">
                {reactIcons.empty}
              </div>
              <h6 className="text-20 font-semibold my-3">
                Your schedule is empty{' '}
              </h6>
              <p className=" text-primary-gray  ">
                Make some appointments for schedule data to appear
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border-2 border-zinc-200">
          <header className="p-6 ">
            <h4 className="text-18 font-semibold">Appointments activity </h4>
          </header>
          <ul className="max-h-[300px] overflow-y-auto">
            {Array(8)
              .fill('2')
              .map((_item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center gap-4 p-6 hover:bg-zinc-100"
                >
                  <div className="flex-1 flex items-center gap-6">
                    <div className="text-center">
                      <div className="font-semibold text-17">25</div>
                      <div className="text-14">May</div>
                    </div>
                    <div>
                      <p className="text-primary-gray text-14">
                        Thu, 25 May 2023 9:00am{' '}
                        <span className="text-red-500 text-14 uppercase font-semibold">
                          Cancelled
                        </span>{' '}
                      </p>
                      <strong className="font-semibold">Haircut</strong>
                      <p className="text-primary-gray text-14">
                        Walk-In, 45min with Rishabh
                      </p>
                    </div>
                  </div>
                  <div>
                    <strong className="font-semibold">&#8377;30</strong>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className="p-6 rounded-xl border-2 border-zinc-200">
          <header>
            <h4 className="text-18 font-semibold">
              Today&apos;s next appointments{' '}
            </h4>
          </header>
          <div className="text-center py-20">
            <div className="flex justify-center items-center text-center flex-col ">
              <div className="text-7xl  text-primary-gray calendar-events">
                {reactIcons.timeCalendar}
              </div>
              <h6 className="text-20 font-semibold my-3">
                No Appointments Today
              </h6>
              <p className=" text-primary-gray  ">
                Visit the{' '}
                <a
                  className="text-primary-300 underline"
                  href="www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  calendar
                </a>{' '}
                section to add some appointments
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border-2 border-zinc-200">
          <header className="p-6 ">
            <h4 className="text-18 font-semibold">Top Services </h4>
          </header>
          <table className="w-full">
            <thead>
              <tr className="border-b border-b-zinc-200">
                <th className="text-left w-1/2 py-4 px-2 pl-6 text-15 font-semibold">
                  Service
                </th>
                <th className="text-center py-4 px-2 text-15 font-semibold">
                  This month
                </th>
                <th className="text-center py-4 px-2 text-15 font-semibold">
                  Last month
                </th>
              </tr>
            </thead>
            <tbody>
              {Array(3)
                .fill('2')
                .map((_item, index) => (
                  <tr
                    key={index}
                    className="border-b border-b-zinc-200 last:border-b-0"
                  >
                    <td className="py-4 text-14  w-1/2 px-2 pl-6">
                      Haircut & Beard Trim
                    </td>
                    <td className="py-4 text-14 px-2 text-center">1</td>
                    <td className="py-4 text-14 px-2 text-center">0</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-xl border-2 border-zinc-200">
          <header className="p-6 ">
            <h4 className="text-18 font-semibold">Top team member</h4>
          </header>
          <table className="w-full">
            <thead>
              <tr className="border-b border-b-zinc-200">
                <th className="text-left w-1/2 py-4 px-2 pl-6 text-15 font-semibold">
                  Team Member
                </th>
                <th className="text-center py-4 px-2 text-15 font-semibold">
                  This month
                </th>
                <th className="text-center py-4 px-2 text-15 font-semibold">
                  Last month
                </th>
              </tr>
            </thead>
            <tbody>
              {Array(3)
                .fill('2')
                .map((_item, index) => (
                  <tr
                    key={index}
                    className="border-b border-b-zinc-200 last:border-b-0"
                  >
                    <td className="py-4 text-14  w-1/2 px-2 pl-6">
                      Rishabh Sharma
                    </td>
                    <td className="py-4 text-14 px-2 text-center">1</td>
                    <td className="py-4 text-14 px-2 text-center">0</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </>
  );
};

export default Home;
