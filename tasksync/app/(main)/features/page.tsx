import Image from "next/image";

export default function FeaturesPage() {
  return (
    <section className="bg-transparent text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          {/* <h2 className="text-3xl font-bold sm:text-4xl">Our Features</h2> */}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <Image src="/tasks.svg" alt="tasks" width={"35"} height={"35"} />

            <h2 className="mt-4 text-xl font-bold text-white">
              Task Management
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Organize and track projects efficiently. Assign, prioritize, and
              monitor tasks to ensure timely completion and team productivity.
            </p>
          </a>

          <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <Image
              src="/calendar.svg"
              alt="calendar"
              width={"35"}
              height={"35"}
            />

            <h2 className="mt-4 text-xl font-bold text-white">
              Shared Calendar
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Coordinate schedules seamlessly. View and manage team events,
              deadlines, and availability in a centralized, collaborative
              calendar.
            </p>
          </a>

          <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">
              Live Collaboration
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Work together in real-time. Edit tasks, brainstorm ideas, and
              communicate instantly with team members, regardless of location.
            </p>
          </a>

          <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <Image
              src="/drag.svg"
              alt="Drag & Drop"
              width={"40"}
              height={"40"}
            />

            <h2 className="mt-4 text-xl font-bold text-white">Drag and Drop</h2>

            <p className="mt-1 text-sm text-gray-300">
              Simplify workflow organization. Easily move and arrange tasks,
              events, or elements within the interface for intuitive project
              management.
            </p>
          </a>

          <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <Image
              src="/user.svg"
              alt="User Management"
              width={"40"}
              height={"40"}
            />

            <h2 className="mt-4 text-xl font-bold text-white">
              User Management
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              User authentication to control access and roles. Add, remove, or
              modify user permissions to maintain security and streamline team
              member administration.
            </p>
          </a>

          <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <Image
              src="/search.svg"
              alt="Search Functionality"
              width={"40"}
              height={"40"}
            />

            <h2 className="mt-4 text-xl font-bold text-white">
              Search Functionality
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Locate your desired board instantly across vast workspaces with
              our lightning-fast, intelligent search function. Quickly pinpoint
              specific boards amidst numerous projects, streamlining your
              workflow and boosting productivity.
            </p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/pricing"
            className="inline-block rounded bg-pink-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-800 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
