# Orbital AY2324 - TaskSync

## Introduction

Welcome to TaskSync, a visual collaboration tool designed to empower teams in managing any type of project, workflow, or task tracking. TaskSync organizes your projects into intuitive boards, providing a clear overview of ongoing tasks, team responsibilities, and process stages. With a robust set of collaboration features, TaskSync makes cross-functional teamwork effortless and efficient. Experience real-time collaboration that creates a collective virtual presence, enabling team members to edit documents simultaneously with conflict-free storage.

## Features

- **Task Management**: Create, edit, and delete tasks in real-time within your project team.
- **User Authentication**: Secured user authentication using Next-Auth.js via Google OAuth.
- **Time Tree**: Easily track your teammates' schedules and constraints for hassle-free collaboration.
- **Real-Time Collaboration**: See updates, comments, and their presence in real-time.
- **Drag & Drop**: Intuitive drag-and-drop interface for rearranging tasks and moving them between categories effortlessly.
- **List of Updates**: Show all changes within the user's workspace upon entering.
- **Search Tasks**: Quickly navigate to any of your countless projects with no time wasted.

## Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/NextAuth.js-FFFFFF?style=for-the-badge&logo=next.js&logoColor=000000" alt="NextAuth.js">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/LiveBlocks-000000?style=for-the-badge&logo=liveblocks&logoColor=white" alt="LiveBlocks">
  <img src="https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</p>

## Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)
- MongoDB Atlas & LiveBlocks account
- Google OAuth and LiveBlocks credentials

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ehz0ah/Orbital
    cd tasksync
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    NEXT_PUBLIC_MONGODB_URI = your_mongodb_uri
    NEXT_PUBLIC_GOOGLE_CLIENT_ID = your_google_client_id
    NEXT_PUBLIC_GOOGLE_CLIENT_SECRET = your_google_client_secret
    LIVEBLOCKS_SECRET_KEY = your_liveblocks_secret_key
    LIVEBLOCKS_public_KEY = your_liveblocks_public_key
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Create a Board**: Start by creating a board for your project.
2. **Add Tasks**: Add tasks to your board, assigning team members and setting deadlines.
3. **Collaborate**: Use real-time collaboration features to work with your team.
4. **Track Progress**: Monitor task progress and update statuses as needed.

## Contribution

We welcome contributions to TaskSync! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

TaskSync is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or feedback, please contact us at [haozhe4547@gmail.com](mailto:haozhe4547@gmail.com).

---

Thank you for using TaskSync! Happy collaborating!

