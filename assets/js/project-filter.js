document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("project-search");
  const rows = Array.from(document.querySelectorAll(".project-row"));
  const groups = Array.from(document.querySelectorAll("[data-group]"));
  const status = document.getElementById("search-status");
  if (!input || !status) return;
  input.addEventListener("input", () => {
    const query = input.value.toLocaleLowerCase().trim();
    let visible = 0;
    for (const row of rows) {
      const match = !query || (row.dataset.search || "").includes(query);
      row.hidden = !match;
      if (match) visible += 1;
    }
    for (const group of groups) {
      const shown = group.querySelectorAll(".project-row:not([hidden])").length;
      group.hidden = shown === 0;
      const count = group.querySelector(".count");
      if (count) count.textContent = String(shown);
    }
    status.textContent = query ? visible + " matching project" + (visible === 1 ? "" : "s") : "";
  });
});
