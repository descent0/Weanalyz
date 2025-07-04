# Weanalyz

This project is built with **React** and **Vite**, offering hot module replacement (HMR) and a minimal setup to get started quickly.

🔗 **Live Demo:** [weanalyz-omega.vercel.app](https://weanalyz-omega.vercel.app/)

---

## Available Routes

Depending on the login credentials, users are redirected to the appropriate dashboard:

| User Type            | Username            | Route Path                       |
|----------------------|---------------------|----------------------------------|
| Admin                | `admin`             | `/admin-dashboard`              |
| Operation Team       | `operationTeam`     | `/operation-dashboard`          |
| Technical Support    | `technicalSupport`  | `/technical-support-dashboard`  |
| Regular User         | (any other username)| `/user-dashboard`               |


Tech Stack
React

Vite

React Router

ESLint

SWC or Babel (via Vite plugin)

Tailwind CSS (if used)
