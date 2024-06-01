"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import Settings from '@/components/options';
import Sidebar from '@/components/sidebar';

/**
 * SettingsPage is a functional component that renders the settings page for a specific board.
 * It fetches the board name from the URL parameters and renders a Sidebar component along with the Settings component.
 */
const SettingsPage: React.FC = () => {
  // Fetch the board name from the URL parameters using the useParams hook.
  const params = useParams();
  const { boardName } = params;

  // If the board name is not available or is not a string, display a loading message.
  if (!boardName || typeof boardName !== 'string') {
    return <div>Loading...</div>;
  }

  // Render the SettingsPage component.
  return (
    <div className="flex items-center justify-center pt-[25vh]">
      {/* Render the Sidebar component. */}
      <Sidebar />
      {/* Render the Settings component, passing the boardName as a prop. */}
      <div className="ml-5">
        <Settings boardName={boardName} />
      </div>
    </div>
  );
};

export default SettingsPage;
