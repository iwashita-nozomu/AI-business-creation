/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text) - applicant's full name
      - `email` (text) - applicant's email address
      - `company` (text) - company or organization name (optional)
      - `message` (text) - message or inquiry content
      - `type` (text) - 'apply' for early access signup, 'inquiry' for general contact
      - `created_at` (timestamptz) - submission timestamp

  2. Security
    - Enable RLS on `contact_submissions`
    - Allow anonymous INSERT (public contact form submissions)
    - No SELECT policy for unauthenticated users (data is private)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  message text NOT NULL,
  type text NOT NULL DEFAULT 'inquiry',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
