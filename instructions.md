## Prerequisites
- Node.js (v14+)
- npm (v6+)
- A running backend at `http://localhost:8000` (see backend instructions)

## Setup

1. **Clone the repo & install dependencies**
   ```bash
   git clone git@github.com:<your-user>/mover-website.git
   cd mover-website
   npm install
   ```

2. **Create environment file**
   - At the project root, create a file named `.env.local` with the following line:
     ```env
     REACT_APP_API_BASE_URL=http://localhost:8000
     ```
   - Restart the dev server after editing `.env.local`.

3. **Start the development server**
   ```bash
   npm start
   ```
   - Your app will open at `http://localhost:3000`.
   - Any changes to files in `src/` will hot-reload.

---

## Production Build

1. Build the app:
   ```bash
   npm run build
   ```
2. Install `serve` if needed and serve the build folder:
   ```bash
   npm install -g serve
   serve -s dist   # or `serve -s build` if you did not rename `build` to `dist`
   ```

---

## Features & Testing

1. **Login Flow**
   - Navigate to `/login`.
   - **Incorrect credentials** → an alert appears and you stay on the login page.
   - **Correct credentials** (`test` / `xxx`) → redirects you to `/quote`.

2. **Protected Routes**
   - Accessing `/quote` while logged out redirects to `/login`.
   - After logging in, you can access `/quote` directly.

3. **Quote Submission**
   - On `/quote`, fill out the origin and destination fields and submit.
   - An alert displays your estimate returned from the backend.

4. **Distance Calculator**
   - Below the quote form is the Distance Calculator component.
   - Enter two addresses and click **Calculate Distance** → displays the returned distance.

5. **General Navigation**
   - Navbar links: Home/Services, Reviews, About & Contact, Get a Quote.
   - Visiting any unknown path shows the 404 page.

