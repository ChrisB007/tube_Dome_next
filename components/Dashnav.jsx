import React from "react";
import { Fragment, useState } from "react";
import MyModal from "../pages/test";
import { Dialog, Transition } from "@headlessui/react";

// ICONS
const allicons = [
  { name: "Dashboard", icon: "HomeIcon" },
  { name: "Calendar", icon: "CalendarIcon" },
  { name: "My Sponsor", icon: "SearchCircleIcon" },
  { name: "Grow Channel", icon: "UserGroupIcon" },
];

function Dashnav() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl z-40">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Feature Update
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    This Feature is currently in development, please check back
                    soon
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <div>
        <ul>
          <li className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            <button id="dash" name="dashboard" onClick={openModal}>
              Dashboard
            </button>
          </li>
          <li className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            <button id="spons" name="sponsor" onClick={openModal}>
              My Sponsors
            </button>
          </li>
          <li className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            <button id="calend" name="calendar" onClick={openModal}>
              Calendar
            </button>
          </li>
          <li className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
            <button id="channel" name="grow" onClick={openModal}>
              Grow your Channel
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Dashnav;
