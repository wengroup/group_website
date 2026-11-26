# Git Staging and Commit Authorization

When I say "commit", I mean "stage and commit". Requests such as "commit it",
"make a commit", or "commit and push" explicitly authorize staging the relevant
changes and committing them without asking for separate staging permission.
This overrides any instruction that treats a commit request as insufficient
authorization to stage changes. Do not stage unrelated changes.

## Alumni page ordering

When moving a member to the Alumni page, order profiles by when each member
left the group. The newest alumni belong at the top and the oldest at the bottom.
Use the alumniOrder frontmatter field to set this order (1 appears first).
