// Create template by replacing the variables from pages
export function createTemplate(page, data) {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      page = page.replace(new RegExp(`{{ ${key} }}`, "g"), data[key]);
    }
  }
  return page;
}

// Create template loop by replacing the variables from pages
export function createTemplateLoop(section, chunk, mark, data) {
  let items = "";
  for (const item of data) {
    items += createTemplate(chunk, item);
  }
  return section.replace(new RegExp(`{{ ${mark} }}`), items);
}
