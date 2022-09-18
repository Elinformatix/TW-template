import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/SUNSETWALLET.png';
import './header.css';
import { ConnectWallet } from "@thirdweb-dev/react";
import Card from '../../components/Card';


const Header = () => (
  <div className="gpt3__header section__padding" id="Header">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Enroll in our students NFT Program</h1>
      <p>Earn rewards every time you book a service with sunset kiteboarding. Rewards are received in Sunset tokens ($SUN).
When you get the tokens needed to unlock your first Sunset NFT you will be able to join the program..</p>

      <div class="overflow-x-auto mt-10 relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-[#040C18] dark:text-gray-100">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        SERVICE
                    </th>
                    <th scope="col" class="py-3 px-6">
                        DURATION
                    </th>
                    <th scope="col" class="py-3 px-6">
                        REWARDS
                    </th>
                    
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-slate-400">
                        BEGGINER LESSONS
                    </th>
                    <td class="py-4 px-6">
                        2h
                    </td>
                    <td class="py-4 px-6">
                        $SUN 350
                    </td>

                </tr>
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-slate-400">
                        ADVANCED LESSONS
                    </th>
                    <td class="py-4 px-6">
                        2h
                    </td>
                    <td class="py-4 px-6">
                      <div>
                        <h3>$SUN 350</h3>
                        <h3>$JUBA 150</h3>
                      </div>
                    </td>

                </tr>
                <tr class="bg-white border-b dark:border-gray-800 dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-slate-400">
                        RENTALS
                    </th>
                    <td class="py-4 px-6">
                        1 day
                    </td>
                    <td class="py-4 px-6">
                      $SUN 400
                    </td>

                </tr>
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-slate-400">
                        DOWNWINDS
                    </th>
                    <td class="py-4 px-6">
                        5h
                    </td>
                    <td class="py-4 px-6">
                        $SUN 650
                    </td>

                </tr>
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-slate-400">
                        KITE TRIPS
                    </th>
                    <td class="py-4 px-6">
                        One Day
                    </td>
                    <td class="py-4 px-6">
                    <div>
                        <h3>$SUN 650</h3>
                        <h3>$JUBA 350</h3>
                      </div>
                    </td>

                </tr>
                
            </tbody>
        </table>
    </div>


    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
