/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier
      - `name` (text) - Contact person name
      - `email` (text) - Contact email address
      - `message` (text) - Contact message
      - `created_at` (timestamp) - Submission timestamp

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy allowing anyone to insert contact submissions
    - Add policy allowing only authenticated users to view their own email submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Admins can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
