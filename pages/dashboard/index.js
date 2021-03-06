import { Fragment, useState } from "react";
import { useSession, getSession } from "next-auth/client";
import { Dialog, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  CogIcon,
  HomeIcon,
  MenuIcon,
  SearchCircleIcon,
  UserGroupIcon,
  CollectionIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  ChevronLeftIcon,
  FilterIcon,
  MailIcon,
  PhoneIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import Dashnav from "../../components/Dashnav";
import PopUp from "../../components/Popup";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: false },
  {
    name: "Calendar",
    href: "",
    icon: CalendarIcon,
    current: false,
  },
  { name: "My Sponsors", href: "#", icon: SearchCircleIcon, current: false },
  {
    name: "Grow your Channel",
    href: "#",
    icon: UserGroupIcon,
    current: false,
  },
];
const secondaryNavigation = [
  { name: "Be a Sponsor", href: "#", icon: CollectionIcon },
  { name: "My Account", href: "#", icon: CogIcon },
];
const tabs = [
  { name: "Profile", href: "#", current: true },
  { name: "Campaign", href: "#", current: false },
  { name: "Contract", href: "#", current: false },
];
const profile = {
  name: "Anthony Cooper",
  image: "/images/executive.jpg",
  coverimage:
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  about: `
    <p>You do not have any contact in your account yet. This is an example list and profile, it will be replaced with actual contacts and profiles as you continue to build your list.</p>
  `,
  fields: {
    Phone: "(555) 123-4567",
    Email: "coop@example.com",
    Title: "Executive",
    Team: "Marketing",
    Location: "San Francisco",
    "Campaign Budget": "$145,000",
    "Start Date": "TBD",
  },
};
const directory = {
  A: [
    {
      id: 1,
      name: "Anthony Cooper",
      role: "Brand Marketing Exec",
      image: "/images/executive.jpg",
    },
  ],
  B: [],
  C: [],
  D: [],
  E: [],
  F: [],
  G: [],
  H: [],
  I: [],
  J: [],
  K: [],
  L: [],
  M: [],
  N: [],
  O: [],
  P: [],
  R: [],
  S: [],
  T: [],
  U: [],
  V: [],
  W: [],
  X: [],
  Y: [],
  Z: [],
};
const team = [
  {
    name: "Leslie Alexander",
    handle: "lesliealexander",
    role: "Co-Founder / CEO",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Foster",
    handle: "michaelfoster",
    role: "Co-Founder / CTO",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MoodMovie({ session }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loginSession, loading] = useSession();
  let [isOpen, setIsOpen] = useState(false);
  const user = loginSession.user;

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="relative h-screen flex overflow-hidden bg-white">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>

              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <nav aria-label="Sidebar" className="mt-5">
                  <div className="px-2 space-y-1">
                    <Dashnav />
                  </div>
                  <hr
                    className="border-t border-gray-200 my-5"
                    aria-hidden="true"
                  />
                  <div className="px-2 space-y-1">
                    {secondaryNavigation.map((item) => (
                      <a
                        key={item.name}
                        onClick={openModal}
                        className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md "
                      >
                        <item.icon
                          className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* PopUp start */}

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

      {/* End of PopUp */}

      {/* Static sidebar for DESKTOP*/}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <a href="#" className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src={user.image}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                        {user.name}
                      </p>
                      <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <nav className="mt-5 flex-1" aria-label="Sidebar">
                <div className="px-2 space-y-1">
                  <Dashnav />
                </div>
                <hr
                  className="border-t border-gray-200 my-5"
                  aria-hidden="true"
                />
                <div className="flex-1 px-2 space-y-1 cursor-pointer">
                  {secondaryNavigation.map((item) => (
                    <a
                      key={item.name}
                      onClick={openModal}
                      className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    >
                      <item.icon
                        className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div className="lg:hidden">
          <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
            <div>
              <button
                type="button"
                className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            {/* Breadcrumb */}
            <nav
              className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
              aria-label="Breadcrumb"
            >
              <a
                href="#"
                className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
              >
                <ChevronLeftIcon
                  className="-ml-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>Sponsors Lists</span>
              </a>
            </nav>

            <article>
              {/* Profile header */}
              <div>
                <div>
                  <img
                    className="h-32 w-full object-cover lg:h-48"
                    src={profile.coverimage}
                    alt=""
                  />
                </div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                    <div className="flex">
                      <img
                        className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                        src={profile.image}
                        alt=""
                      />
                    </div>
                    <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                      <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                        <h1 className="text-2xl font-bold text-gray-900 truncate">
                          {profile.name}
                        </h1>
                      </div>
                      <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <button
                          onClick={openModal}
                          type="button"
                          className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                          <MailIcon
                            className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span>Message</span>
                        </button>
                        <button
                          type="button"
                          onClick={openModal}
                          className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                          <PhoneIcon
                            className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span>Call</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                    <h1 className="text-2xl font-bold text-gray-900 truncate">
                      {profile.name}
                    </h1>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="mt-6 sm:mt-2 2xl:mt-5">
                <div className="border-b border-gray-200">
                  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                      {tabs.map((tab) => (
                        <a
                          key={tab.name}
                          onClick={openModal}
                          className={classNames(
                            tab.current
                              ? "border-pink-500 text-gray-900"
                              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                            "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                          )}
                          aria-current={tab.current ? "page" : undefined}
                        >
                          {tab.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>

              {/* Description list */}
              <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  {Object.keys(profile.fields).map((field) => (
                    <div key={field} className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        {field}
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {profile.fields[field]}
                      </dd>
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd
                      className="mt-1 max-w-prose text-sm text-gray-900 space-y-5"
                      dangerouslySetInnerHTML={{ __html: profile.about }}
                    />
                  </div>
                </dl>
              </div>

              {/* Team member list */}
              <div className="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
                <h2 className="text-sm font-medium text-gray-500">
                  Team members
                </h2>
                <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {team.map((person) => (
                    <div
                      key={person.handle}
                      className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
                    >
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={person.image}
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <a href="#" className="focus:outline-none">
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          <p className="text-sm font-medium text-gray-900">
                            {person.name}
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            {person.role}
                          </p>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </main>
          <aside className="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
            <div className="px-6 pt-6 pb-4">
              <h2 className="text-lg font-medium text-gray-900">
                Sponsors Lists
              </h2>
              <p className="mt-1 text-sm text-gray-600">Search</p>
              <form className="mt-6 flex space-x-4" action="#">
                <div className="flex-1 min-w-0">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      type="search"
                      name="search"
                      id="search"
                      className="focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={openModal}
                  className="inline-flex justify-center px-3.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  <FilterIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Search</span>
                </button>
              </form>
            </div>
            {/* Directory list */}
            <nav
              className="flex-1 min-h-0 overflow-y-auto"
              aria-label="Directory"
            >
              {Object.keys(directory).map((letter) => (
                <div key={letter} className="relative">
                  <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                    <h3>{letter}</h3>
                  </div>
                  <ul
                    role="list"
                    className="relative z-0 divide-y divide-gray-200"
                  >
                    {directory[letter].map((person) => (
                      <li key={person.id}>
                        <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                          <div className="flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={person.image}
                              alt=""
                            />
                          </div>
                          <div className="flex-1 min-w-0 cursor-pointer">
                            <a
                              onClick={openModal}
                              type="button"
                              className="focus:outline-none"
                            >
                              {/* Extend touch target to entire panel */}
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              />
                              <p className="text-sm font-medium text-gray-900">
                                {person.name}
                              </p>
                              <p className="text-sm text-gray-500 truncate">
                                {person.role}
                              </p>
                            </a>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: { session },
  };
}

export default MoodMovie;
