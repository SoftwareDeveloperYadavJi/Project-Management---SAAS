# Project Management Tool - Your Next Generation Project Management Tool


A real-time project management application built with Next.js, Express, WebSocket, and Prisma.

## Features

- Real-time task and project updates using WebSocket
- User authentication and authorization
- Project creation and management
- Task creation, assignment, and tracking
- Team collaboration tools
- Activity timeline and notifications
- File attachments and sharing
- Custom project dashboards

## Tech Stack

### Frontend
- Next.js 14
- TailwindCSS
- Socket.io-client
- React Query
- React Hook Form

### Backend
- Express.js
- Socket.io
- Prisma ORM
- PostgreSQL
- JSON Web Tokens

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- pnpm (package manager)

## Project Structure

```
├── .turbo/
├── .vscode/
├── apps/
│   ├── http-backend/     # Express HTTP API server
│   ├── web/             # Next.js frontend application
│   └── ws-backend/      # WebSocket server
├── packages/
│   ├── DB/             # Database configurations and models
│   ├── eslint-config/  # Shared ESLint configuration
│   ├── typescript-config/ # Shared TypeScript configuration
│   ├── ui/             # Shared UI components
│   └── zod-schemas/    # Shared validation schemas
├── .gitignore
├── .npmrc
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
└── turbo.json
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/SoftwareDeveloperYadavJi/Project-Management---SAAS.git
cd project-management-tool
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:

Create `.env` files in the respective app directories:

`apps/web/.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_WS_URL=ws://localhost:3001
```

`apps/http-backend/.env`:
```
DATABASE_URL="postgresql://username:password@localhost:5432/dbname"
JWT_SECRET="your-secret-key"
PORT=3001
```

`apps/ws-backend/.env`:
```
DATABASE_URL="postgresql://username:password@localhost:5432/dbname"
JWT_SECRET="your-secret-key"
WS_PORT=3002
```

4. Set up the database:
```bash
cd packages/DB
pnpm prisma migrate dev
```

5. Start the development servers:
```bash
pnpm dev
```

## API Documentation

API documentation is available at `/api/docs` when running the HTTP backend server.

## Contributing

We welcome contributions to improve the project! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Run tests (`pnpm test`)
5. Commit your changes (`git commit -am 'Add new feature'`)
6. Push to the branch (`git push origin feature/improvement`)
7. Create a Pull Request

### Contributing Guidelines

- Follow the existing code style and naming conventions
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR
- Follow the pull request template

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, please open an issue or contact the maintainers:

- Project Owner: [Nitin Yadav](https://github.com/yourusername)
- Email: [nitiny1524@gmail.com](mailto:nitiny1524@gmail.com)
