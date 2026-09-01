# Agent Safety Rules — Gestion des Missions

## 1. Database Safety & Migration Rules
- **No Destructive Operations**: Never execute `DROP TABLE`, `TRUNCATE`, `DROP DATABASE`, or destructive `ALTER TABLE` statements without explicit written permission from a senior developer.
- **Migration Approval Required**: Do not execute database migrations (`npx prisma migrate dev`, `npx prisma migrate deploy`, `npx prisma db push`, raw DDL scripts) in any environment without explicit senior review and approval.
- **No Direct Production Access**: Never connect to, query, or modify a production database directly. All production changes go through approved migration pipelines.
- **Seed Data Caution**: Never run seed scripts (`npx prisma db seed`) on production or staging environments without explicit approval.

## 2. Git & Version Control Governance
- **No Unapproved Commits**: Never run `git commit`, `git push`, `git merge`, `git rebase`, `git tag`, or `git push --force` without explicit permission from a senior developer.
- **Diff Inspection First**: Always summarize proposed code changes clearly before requesting permission to commit.
- **Branch Safety**: Never delete branches (`git branch -D`, `git push origin --delete`) without explicit approval.

## 3. General Safety
- **No Secret Exposure**: Never output, log, or commit production credentials, API keys, SMTP passwords, or JWT secrets to artifacts, chat, or version control.
- **No Unreviewed Deployments**: Never trigger production deployment scripts, CI/CD pipelines, or server restarts without explicit senior approval.
