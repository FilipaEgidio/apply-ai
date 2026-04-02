# apply-ai
AI-powered job application tool - tailored cover letter, ATS-ready CV, and honest gap analysis. Built with Anthropic API + Vercel.

Your CV deserves to be read. apply.ai tailors your cover letter 
and CV to each role, formats it to pass screening software, and 
tells you honestly where you fall short — and how to close the gap.

## What it does

- Tailored cover letter based on your CV and the job description
- ATS-ready CV with standard section headers, single column, 
  no tables or images
- Honest gap analysis with severity levels and concrete next steps
- No invented experience. No fluff. Honest narrative only.

## Why I built it

Most CVs never reach a human — they get filtered before anyone 
reads them. I built apply.ai to fix that, and to demonstrate 
how product thinking, UX decisions, and AI can combine into 
something genuinely useful.

## Tech stack

- Static HTML, CSS, vanilla JS — no framework
- Vercel serverless function to proxy Anthropic API calls securely
- Client-side .docx generation via docx.js
- No database, no backend storage, no user data retained

## Privacy

Your CV is never stored by this app. It is sent to Anthropic's 
API only to generate output and discarded immediately after. 
Anthropic may retain inputs for up to 30 days under their own 
privacy policy.

## Features

- PDF CV upload or LinkedIn PDF export
- Job description via paste or URL fetch
- Tone selector: Confident, Warm, Formal
- Language selector: English, Portuguese PT, Portuguese BR, 
  Spanish, French, German, Italian
- Download outputs as .docx or .txt
- Mobile-friendly

## Deployment

Built to deploy on Vercel. Requires one environment variable:
ANTHROPIC_API_KEY=your_key_here

## Built by

Filipa Egidio Loureiro — Product Manager
[LinkedIn](your-linkedin-url)
