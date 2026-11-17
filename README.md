# demo-story

A **Harry Potter (Series 1)** 10-episode daily-release web app built with **Next.js (App Router) + React + Tailwind CSS**—designed as a hands-on practice project for **GitHub workflows** and **multi-agent AI collaboration**.

> [!NOTE]
> Read [AGENTS.md](./AGENTS.md) for multi-agent rules and [plan/roadmap.md](./plan/roadmap.md) for the full phased execution plan.

---

## What This Project Practices
- **Git & GitHub Workflows:** Branches, conventional commits, Issues, Pull Requests, code reviews, external contributor PRs, and GitHub Actions CI (`lint`, `test`, `build`).
- **Multi-Agent Collaboration:** Working simultaneously with **Antigravity**, **Claude Code**, **Codex**, and **GitHub Copilot** using isolated `git worktree`s and `Co-authored-by` commit attribution.
- **Intentional Merge Conflicts:** Resolving real conflicts across shared files (`CHARACTERS.md`, `TIMELINE.md`, `README.md`) between parallel episode waves.
- **Agentic Tooling:** Custom Antigravity **skills**, **subagents**, **plugins**, and automated **code/lore review agents**.
- **Simple Web App:** A clean Next.js + Tailwind CSS site that reads `episodes/*.md` and unlocks episodes daily by `releaseDate`.

---

## Episode Schedule (Series 1)

| Ep | Title | Status |
| :--- | :--- | :--- |
| 01 | The Boy Who Lived | Released (2026-11-17) |
| 02 | Letters from No One | Planned |
| 03 | Diagon Alley | Planned |
| 04 | Platform 9¾ | Planned |
| 05 | The Sorting Hat | Planned |
| 06 | Potions and Flying | Planned |
| 07 | The Midnight Duel & Troll | Planned |
| 08 | Quidditch and the Mirror | Planned |
| 09 | The Forbidden Forest | Planned |
| 10 | Through the Trapdoor | Planned |

---

## Local Development *(available after Phase 1)*

```bash
npm install
npm run dev      # Start local Next.js server at http://localhost:3000
npm test         # Run Vitest unit & component tests
npm run lint     # Run ESLint
npm run build    # Verify production build
```
