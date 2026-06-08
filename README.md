# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/55f765f5-bef4-4be9-88d6-60c91d2d3a8b

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/55f765f5-bef4-4be9-88d6-60c91d2d3a8b) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Phase 1 guest payment portal

The Phase 1 portal uses Supabase Auth magic links and Supabase tables for manual payment tracking.

Routes:

```txt
/auth/callback
/guest-login
/portal/dashboard
/admin/payments
```

Required frontend environment variables:

```txt
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Database setup:

1. Create a Supabase project.
2. Run `supabase/migrations/20260607000000_phase1_payment_portal.sql` in the Supabase SQL editor or through the Supabase CLI.
3. Add at least one row to `admin_users` for the admin email that should access `/admin/payments`.
4. Create guest booking rows and payment installment rows through `/admin/payments`.

Payment workflow:

1. Admin manually creates Shopify payment links in Shopify.
2. Admin pastes those links into each payment installment in `/admin/payments`.
3. Guest logs in through `/guest-login` with the email used for their booking.
4. Guest opens the Shopify payment link from `/portal/dashboard` and pays on Shopify.
5. The portal tells guests that payment status may take up to 48 hours to update.
6. Admin checks Shopify and manually updates the installment status in `/admin/payments`.

There are no Shopify webhooks, Shopify Admin API calls, automatic draft order creation, or automatic paid-status updates in Phase 1.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/55f765f5-bef4-4be9-88d6-60c91d2d3a8b) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
