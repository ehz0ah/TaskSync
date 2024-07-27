import FeatureCard from './featurecard';

const FeaturesList: React.FC = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        imgSrc="/tasks.svg"
        imgAlt="tasks"
        imgWidth={30}
        imgHeight={30}
        title="Task Management"
        description="Organize and track projects efficiently. Assign, prioritize, and monitor tasks to ensure timely completion and team productivity."
      />
      <FeatureCard
        imgSrc="/calendar.svg"
        imgAlt="calendar"
        imgWidth={30}
        imgHeight={30}
        title="Shared Calendar"
        description="Coordinate schedules seamlessly. View and manage team events, deadlines, and availability in a centralized, collaborative calendar."
      />
      <FeatureCard
        imgSrc=""
        imgAlt="Live Collaboration"
        imgWidth={0}
        imgHeight={0}
        title="Live Collaboration"
        description="Work together in real-time. Edit tasks, brainstorm ideas, and communicate instantly with team members, regardless of location."
        isSvg = {true}
        svgContent = {
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-pink-500"
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
              d="M12 14l9-5-9-5-9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        }
      />
      <FeatureCard
        imgSrc="/drag.svg"
        imgAlt="Drag & Drop"
        imgWidth={30}
        imgHeight={30}
        title="Drag and Drop"
        description="Simplify workflow organization. Easily move and arrange tasks, events, or elements within the interface for intuitive project management."
      />
      <FeatureCard
        imgSrc="/user.svg"
        imgAlt="User Management"
        imgWidth={30}
        imgHeight={30}
        title="User Management"
        description="User authentication to control access and roles. Add, remove, or modify user permissions to maintain security and streamline team member administration."
      />
      <FeatureCard
        imgSrc="/search.svg"
        imgAlt="Search Functionality"
        imgWidth={30}
        imgHeight={30}
        title="Search Functionality"
        description="Locate your desired board instantly across vast workspaces with our lightning-fast, intelligent search function. Quickly pinpoint specific boards amidst numerous projects, streamlining your workflow and boosting productivity."
      />
    </div>
  );
};

export default FeaturesList;
