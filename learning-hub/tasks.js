(function () {
  "use strict";

  const app = document.getElementById("app");
  const taskFilesDay1 = ["Task1.html", "Task2.html", "Task3.html", "Task4.html", "Task5.html", "Task6.html", "Task7.html", "Task8.html", "Task9.html", "Task10.html"];
  const taskFilesDay3 = ["Task1.html", "Task2.html", "Task3.html", "Task4.html", "Task5.html", "Task6.html", "Task7.html", "Task8.html", "Task9.html", "Task10.html", "Task11.html", "Task12.html", "Task13.html", "Task14.html", "Task15.html"];
  const taskFilesDay5 = ["Task1.html", "Task2.html", "Task3.html", "Task4.html", "Task5.html", "Task6.html", "Task7.html", "Task8.html", "Task9.html", "Task10.html"];
  const taskFilesDay7 = ["Task1.html", "Task2.html", "Task3.html", "Task4.html", "Task5.html", "Task6.html"];

  // This registry reflects the task files actually present in JS/. Update it when new files are added.
  const technologies = [
    {
      id: "javascript",
      name: "JavaScript",
      symbol: "JS",
      description: "Core language practice, one task at a time.",
      days: [
        { id: "Day1", label: "Day 1", tasks: taskFilesDay1 },
        { id: "Day3", label: "Day 3", tasks: taskFilesDay3 },
        { id: "Day5", label: "Day 5", tasks: taskFilesDay5 },
        { id: "Day7", label: "Day 7", tasks: taskFilesDay7 }
      ]
    },
    {
      id: "react",
      name: "React",
      symbol: "R",
      description: "Component-based user interface practice.",
      days: [
        {
          id: "Day1",
          label: "Day 1",
          tasks: [
            { id: "Day1.txt", label: "Day 1 notes", filename: "Day1.txt", path: "../REACT/Day1/Day1.txt", kind: "text" }
          ]
        },
        {
          id: "Day2",
          label: "Day 2",
          tasks: [
            { id: "Day2.png", label: "Day 2 screenshot", filename: "Day2.png", path: "../REACT/Day2/Day2.png", kind: "image" }
          ]
        },
        {
          id: "Day4",
          label: "Day 4",
          tasks: [
            {
              id: "React Router Practice",
              label: "React Router Practice",
              filename: "Existing Vite React project",
              path: "../REACT/Day4/day4/",
              kind: "react-project",
              previewUrl: "http://127.0.0.1:5173/",
              startCommand: "Set-Location 'D:\\Backend\\REACT\\Day4\\day4'; npm run dev -- --host 127.0.0.1 --port 5173 --strictPort"
            }
          ]
        }
      ]
    },
    { id: "nodejs", name: "Node.js", symbol: "N", description: "Runtime and server-side JavaScript practice.", days: [] },
    { id: "expressjs", name: "Express.js", symbol: "Ex", description: "Web framework exercises and API practice.", days: [] },
    { id: "mongodb", name: "MongoDB", symbol: "DB", description: "Database and data modeling practice.", days: [] }
  ];

  let renderVersion = 0;
  let activePreview = null;
  const taskTotal = technologies.reduce(function (sum, tech) {
    return sum + tech.days.reduce(function (daySum, day) { return daySum + day.tasks.length; }, 0);
  }, 0);

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function makeLink(label, href, className) {
    const link = element("a", className, label);
    link.href = href;
    return link;
  }

  function techPath(id) { return "#/technology/" + encodeURIComponent(id); }
  function dayPath(techId, dayId) { return techPath(techId) + "/day/" + encodeURIComponent(dayId); }
  function taskPath(techId, dayId, filename) { return dayPath(techId, dayId) + "/task/" + encodeURIComponent(filename); }

  function parseRoute() {
    const raw = window.location.hash.replace(/^#\/?/, "");
    if (!raw) return { type: "home" };
    let parts;
    try { parts = raw.split("/").filter(Boolean).map(decodeURIComponent); }
    catch (error) { return { type: "invalid" }; }
    if (parts.length === 2 && parts[0] === "technology") return { type: "technology", techId: parts[1] };
    if (parts.length === 4 && parts[0] === "technology" && parts[2] === "day") {
      return { type: "day", techId: parts[1], dayId: parts[3] };
    }
    if (parts.length === 6 && parts[0] === "technology" && parts[2] === "day" && parts[4] === "task") {
      return { type: "task", techId: parts[1], dayId: parts[3], filename: parts[5] };
    }
    return { type: "invalid" };
  }

  function addBreadcrumbs(items) {
    const nav = element("nav", "breadcrumb");
    nav.setAttribute("aria-label", "Breadcrumb");
    items.forEach(function (item, index) {
      if (index) nav.appendChild(element("span", "breadcrumb-separator", "›"));
      if (item.href) nav.appendChild(makeLink(item.label, item.href, ""));
      else nav.appendChild(element("span", "breadcrumb-current", item.label));
    });
    return nav;
  }

  function addPageHeading(title, subtitle, backHref, backLabel) {
    const row = element("div", "page-heading");
    const copy = element("div", "");
    copy.appendChild(element("h1", "", title));
    if (subtitle) copy.appendChild(element("p", "", subtitle));
    row.appendChild(copy);
    if (backHref) row.appendChild(makeLink("← " + backLabel, backHref, "back-link"));
    return row;
  }

  function renderHome() {
    const hero = element("section", "hero");
    const heroCopy = element("div", "");
    heroCopy.appendChild(element("p", "eyebrow", "YOUR PRACTICE SPACE"));
    heroCopy.appendChild(element("h1", "", "Build your backend skills"));
    heroCopy.appendChild(element("p", "hero-copy", "Choose a technology to explore the learning tasks currently available in your project."));
    hero.appendChild(heroCopy);
    const stat = element("div", "hero-stat");
    stat.appendChild(element("strong", "", String(taskTotal)));
    stat.appendChild(element("span", "", "available JavaScript tasks"));
    hero.appendChild(stat);
    app.appendChild(hero);

    const sectionHeading = element("div", "section-heading");
    sectionHeading.appendChild(element("h2", "", "Choose a technology"));
    sectionHeading.appendChild(element("p", "section-caption", "Only existing tasks are shown."));
    app.appendChild(sectionHeading);

    const grid = element("div", "technology-grid");
    technologies.forEach(function (tech) {
      const total = tech.days.reduce(function (sum, day) { return sum + day.tasks.length; }, 0);
      const card = makeLink("", techPath(tech.id), "tech-card");
      const iconClass = "tech-icon" + (tech.id === "nodejs" ? " tech-icon--node" : tech.id === "expressjs" ? " tech-icon--express" : tech.id === "mongodb" ? " tech-icon--mongo" : "");
      card.appendChild(element("span", iconClass, tech.symbol));
      card.appendChild(element("h3", "", tech.name));
      card.appendChild(element("p", "", tech.description));
      card.appendChild(element("span", "card-count" + (total ? "" : " card-count--soon"), total ? total + " tasks available" : "Coming soon"));
      card.appendChild(element("span", "card-arrow", "↗"));
      grid.appendChild(card);
    });
    app.appendChild(grid);
  }

  function renderTechnology(tech) {
    app.appendChild(addBreadcrumbs([{ label: "Technologies", href: "#/" }, { label: tech.name }]));
    app.appendChild(addPageHeading(tech.name, "Select an available learning day.", "#/", "All technologies"));
    if (!tech.days.length) {
      const empty = element("section", "empty-state");
      empty.appendChild(element("strong", "", "Coming soon"));
      empty.appendChild(element("p", "", "There are no " + tech.name + " task files in this project yet. This section will appear here when real tasks are added."));
      app.appendChild(empty);
      return;
    }
    const grid = element("div", "day-grid");
    tech.days.forEach(function (day) {
      const card = makeLink("", dayPath(tech.id, day.id), "day-card");
      card.appendChild(element("span", "day-index", day.id.replace("Day", "D")));
      card.appendChild(element("h3", "", day.label));
      card.appendChild(element("p", "", day.tasks.length + (day.tasks.length === 1 ? " task" : " tasks")));
      grid.appendChild(card);
    });
    app.appendChild(grid);
  }

  function taskLabel(filename) {
    const match = filename.match(/^Task(\d+)\.html$/i);
    return match ? "Task " + match[1] : filename;
  }

  function taskId(task) { return typeof task === "string" ? task : task.id; }
  function taskName(task) { return typeof task === "string" ? taskLabel(task) : task.label; }
  function taskFilename(task) { return typeof task === "string" ? task : task.filename; }

  function renderDay(tech, day) {
    app.appendChild(addBreadcrumbs([
      { label: "Technologies", href: "#/" },
      { label: tech.name, href: techPath(tech.id) },
      { label: day.label }
    ]));
    app.appendChild(addPageHeading(day.label, tech.name + " tasks found in this day folder.", techPath(tech.id), "All " + tech.name + " days"));
    const grid = element("div", "task-grid");
    day.tasks.forEach(function (task) {
      const card = makeLink("", taskPath(tech.id, day.id, taskId(task)), "task-card");
      const title = element("div", "");
      title.appendChild(element("strong", "", taskName(task)));
      title.appendChild(element("span", "", taskFilename(task)));
      card.appendChild(title);
      card.appendChild(element("span", "task-arrow", "→"));
      grid.appendChild(card);
    });
    app.appendChild(grid);
  }

  function handlePreviewMessage(event) {
    const preview = activePreview;
    if (!preview || event.source !== preview.frame.contentWindow) return;
    const data = event.data;
    if (!data || data.__backendLearningHub !== true || !Array.isArray(data.values)) return;
    if (preview.emptyMessage.parentNode) preview.emptyMessage.remove();
    const item = element("li", "console-entry" + (data.method === "warn" ? " console-entry--warn" : data.method === "error" ? " console-entry--error" : ""));
    item.textContent = data.values.join(" ");
    preview.list.appendChild(item);
    while (preview.list.children.length > 100) preview.list.removeChild(preview.list.firstChild);
    preview.list.scrollTop = preview.list.scrollHeight;
  }
  window.addEventListener("message", handlePreviewMessage);

  function addTaskHeading(tech, day, task) {
    app.appendChild(addBreadcrumbs([
      { label: "Technologies", href: "#/" },
      { label: tech.name, href: techPath(tech.id) },
      { label: day.label, href: dayPath(tech.id, day.id) },
      { label: task.label }
    ]));
    const heading = element("div", "page-heading viewer-title-row");
    const copy = element("div", "");
    copy.appendChild(element("p", "eyebrow", tech.name + " • " + day.label));
    copy.appendChild(element("h1", "", task.label));
    copy.appendChild(element("p", "", task.filename));
    heading.appendChild(copy);
    const actions = element("div", "viewer-actions");
    actions.appendChild(makeLink("← Back to tasks", dayPath(tech.id, day.id), "back-link"));
    heading.appendChild(actions);
    app.appendChild(heading);
    return heading;
  }

  async function renderReactResource(tech, day, task, version) {
    addTaskHeading(tech, day, task);
    const loading = element("div", "loading-state", "Loading the existing React learning material…");
    app.appendChild(loading);
    try {
      const response = await fetch(task.path);
      if (!response.ok) throw new Error("The task file returned HTTP " + response.status + ".");
      if (version !== renderVersion) return;
      loading.remove();

      const panel = element("section", "panel react-material");
      const header = element("div", "panel-header");
      const title = element("div", "panel-heading");
      title.appendChild(element("strong", "", task.kind === "text" ? "Existing notes" : "Existing screenshot"));
      title.appendChild(element("span", "", task.filename));
      header.appendChild(title);
      panel.appendChild(header);

      if (task.kind === "text") {
        const content = await response.text();
        if (version !== renderVersion) return;
        panel.appendChild(element("article", "react-notes", content));
      } else {
        const figure = element("figure", "react-image-preview");
        const image = element("img", "", null);
        image.src = task.path;
        image.alt = "Existing React Day 2 project screenshot";
        figure.appendChild(image);
        panel.appendChild(figure);
      }
      app.appendChild(panel);
    } catch (error) {
      if (version !== renderVersion) return;
      loading.className = "error-state";
      loading.replaceChildren(element("strong", "", "React learning material could not be loaded"), document.createTextNode(error.message + " Make sure the hub is served over HTTP and the task path exists."));
    }
  }

  function renderReactProject(tech, day, task, version) {
    addTaskHeading(tech, day, task);
    const instructions = element("div", "instructions");
    instructions.appendChild(element("span", "", "ⓘ"));
    const copy = element("div", "");
    copy.appendChild(element("strong", "", "Open the existing Vite React project. "));
    copy.appendChild(document.createTextNode("The project uses Vite to compile its JSX. Its source files and dependencies are left in place."));
    instructions.appendChild(copy);
    app.appendChild(instructions);

    const panel = element("section", "panel react-project-panel");
    const header = element("div", "panel-header");
    const title = element("div", "panel-heading");
    title.appendChild(element("strong", "", "Day 4 React Router Practice"));
    title.appendChild(element("span", "", "Existing project: " + task.path));
    header.appendChild(title);
    panel.appendChild(header);
    const content = element("div", "react-project-content");
    const status = element("p", "project-status", "Checking whether the Vite server is running…");
    content.appendChild(status);
    const actions = element("div", "viewer-actions");
    const openLink = makeLink("Open React project ↗", task.previewUrl, "button button-primary");
    openLink.target = "_blank";
    openLink.rel = "noopener noreferrer";
    actions.appendChild(openLink);
    content.appendChild(actions);
    content.appendChild(element("p", "command-caption", "If the project does not open, run this exact command in PowerShell:"));
    const command = element("pre", "command-block");
    command.appendChild(element("code", "", task.startCommand));
    content.appendChild(command);
    panel.appendChild(content);
    app.appendChild(panel);

    fetch(task.previewUrl, { cache: "no-store" }).then(function (response) {
      if (version !== renderVersion) return;
      if (!response.ok) throw new Error("HTTP " + response.status);
      status.className = "project-status project-status--ready";
      status.textContent = "Vite responded at " + task.previewUrl + " The project link is ready.";
    }).catch(function () {
      if (version !== renderVersion) return;
      status.className = "project-status project-status--stopped";
      status.textContent = "The Vite server is not responding at " + task.previewUrl + ". Run the command below, then open the project link.";
    });
  }

  function buildPreviewDocument(source) {
    const csp = "<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data: blob:; font-src data:; media-src data: blob:; connect-src https://jsonplaceholder.typicode.com https://dummyjson.com; form-action 'none'; base-uri 'none'; object-src 'none'; frame-src 'none'\">";
    const capture = [
      "(function(){",
      "function stringify(value){if(typeof value==='string')return value;try{var result=JSON.stringify(value);return result===undefined?String(value):result;}catch(error){return String(value);}}",
      "function send(method,args){var values=Array.prototype.map.call(args,stringify);parent.postMessage({__backendLearningHub:true,method:method,values:values},'*');}",
      "['log','info','warn','error'].forEach(function(method){var original=console[method].bind(console);console[method]=function(){send(method,arguments);original.apply(console,arguments);};});",
      "window.addEventListener('error',function(event){send('error',[event.message||'Script error']);});",
      "window.addEventListener('unhandledrejection',function(event){send('error',['Unhandled promise rejection',event.reason]);});",
      "})();"
    ].join("");
    const bootTag = "<script>" + capture + "</scr" + "ipt>";
    const headPattern = /<head\b[^>]*>/i;
    if (headPattern.test(source)) return source.replace(headPattern, function (head) { return head + csp + bootTag; });
    return "<!doctype html><html><head>" + csp + bootTag + "</head><body>" + source + "</body></html>";
  }

  async function renderTask(tech, day, filename, version) {
    const registeredTask = day.tasks.find(function (item) { return taskId(item) === filename; });
    const task = typeof registeredTask === "string"
      ? { label: taskLabel(registeredTask), filename: registeredTask, path: "../JS/" + day.id + "/" + registeredTask, kind: "html" }
      : registeredTask;
    if (task.kind === "text" || task.kind === "image") return renderReactResource(tech, day, task, version);
    if (task.kind === "react-project") return renderReactProject(tech, day, task, version);

    const heading = addTaskHeading(tech, day, task);

    const actions = element("div", "viewer-actions");
    const originalLink = makeLink("Open original ↗", task.path, "button");
    originalLink.target = "_blank";
    originalLink.rel = "noopener noreferrer";
    actions.appendChild(originalLink);
    heading.appendChild(actions);
    app.appendChild(heading);

    const instructions = element("div", "instructions");
    instructions.appendChild(element("span", "", "ⓘ"));
    const instructionText = element("div", "");
    instructionText.appendChild(element("strong", "", "Instructions "));
    instructionText.appendChild(document.createTextNode("No separate instructions file exists for this task. Review the source and run its preview."));
    instructions.appendChild(instructionText);
    app.appendChild(instructions);

    const loading = element("div", "loading-state", "Loading the original task source…");
    app.appendChild(loading);
    try {
      const response = await fetch(task.path);
      if (!response.ok) throw new Error("The task file returned HTTP " + response.status + ".");
      const sourceText = await response.text();
      if (version !== renderVersion) return;
      loading.remove();

      const grid = element("div", "viewer-grid");
      const sourcePanel = element("section", "panel");
      const sourceHeader = element("div", "panel-header");
      const sourceHeading = element("div", "panel-heading");
      sourceHeading.appendChild(element("strong", "", "Task source"));
      sourceHeading.appendChild(element("span", "", "Original HTML, displayed as text"));
      sourceHeader.appendChild(sourceHeading);
      sourcePanel.appendChild(sourceHeader);
      const pre = element("pre", "source-code");
      const code = element("code", "");
      code.textContent = sourceText;
      pre.appendChild(code);
      sourcePanel.appendChild(pre);
      grid.appendChild(sourcePanel);

      const previewPanel = element("section", "panel");
      const previewHeader = element("div", "panel-header");
      const previewHeading = element("div", "panel-heading");
      previewHeading.appendChild(element("strong", "", "Live preview"));
      previewHeading.appendChild(element("span", "", "Runs inside a sandboxed iframe"));
      previewHeader.appendChild(previewHeading);
      const runButton = element("button", "button button-primary", "▶ Run preview");
      runButton.type = "button";
      previewHeader.appendChild(runButton);
      previewPanel.appendChild(previewHeader);

      const previewWrap = element("div", "preview-wrap");
      const placeholder = element("div", "preview-placeholder");
      placeholder.appendChild(element("strong", "", "Preview is ready"));
      placeholder.appendChild(element("span", "", "Run the original HTML and JavaScript in the isolated preview frame."));
      previewWrap.appendChild(placeholder);
      const frame = element("iframe", "preview-frame");
      frame.title = task.label + " sandboxed preview";
      frame.setAttribute("sandbox", "allow-scripts");
      frame.srcdoc = "<!doctype html><html><body></body></html>";
      previewWrap.appendChild(frame);
      previewPanel.appendChild(previewWrap);

      const consolePanel = element("div", "console-panel");
      const consoleTitle = element("div", "console-title", "Task console output");
      const list = element("ol", "console-list");
      const emptyMessage = element("li", "console-empty", "No output yet. Run the preview to execute this task’s JavaScript.");
      list.appendChild(emptyMessage);
      consolePanel.appendChild(consoleTitle);
      consolePanel.appendChild(list);
      previewPanel.appendChild(consolePanel);
      grid.appendChild(previewPanel);
      app.appendChild(grid);

      activePreview = { frame: frame, list: list, emptyMessage: emptyMessage };
      runButton.addEventListener("click", function () {
        list.replaceChildren();
        list.appendChild(emptyMessage);
        placeholder.hidden = true;
        frame.srcdoc = buildPreviewDocument(sourceText);
      });
    } catch (error) {
      if (version !== renderVersion) return;
      loading.className = "error-state";
      loading.replaceChildren(element("strong", "", "Task source could not be loaded"), document.createTextNode(error.message + " Make sure the hub is served over HTTP and the task path exists."));
    }
  }

  function renderNotFound() {
    app.appendChild(addBreadcrumbs([{ label: "Technologies", href: "#/" }, { label: "Not found" }]));
    app.appendChild(addPageHeading("Page not found", "This technology, day, or task is not in the current task registry.", "#/", "All technologies"));
  }

  function render() {
    const version = ++renderVersion;
    activePreview = null;
    app.replaceChildren();
    const route = parseRoute();
    if (route.type === "home") { renderHome(); return; }
    if (route.type === "invalid") { renderNotFound(); return; }
    const tech = technologies.find(function (item) { return item.id === route.techId; });
    if (!tech) { renderNotFound(); return; }
    if (route.type === "technology") { renderTechnology(tech); return; }
    const day = tech.days.find(function (item) { return item.id === route.dayId; });
    if (!day) { renderNotFound(); return; }
    if (route.type === "day") { renderDay(tech, day); return; }
    if (route.type === "task") {
      if (!day.tasks.some(function (task) { return taskId(task) === route.filename; })) { renderNotFound(); return; }
      renderTask(tech, day, route.filename, version);
      return;
    }
    renderNotFound();
  }

  window.addEventListener("hashchange", render);
  render();
})();
