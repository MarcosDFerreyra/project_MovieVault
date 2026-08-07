
function renderWithTemplate(template, parentElement, data, callback) {
    parentElement.innerHTML = template;
    if (callback) {
        callback(data)
    }
}

async function loadTemplate(path) {
    const res = await fetch(path);
    const template = await res.text();
    return template
}

export async function loadHeaderFooter() {
    const header_template = await loadTemplate("/partials/header.html");
    const main_header = document.querySelector("#main-header");
    renderWithTemplate(header_template, main_header);

    const footer_template = await loadTemplate("/partials/footer.html");
    const main_footer = document.querySelector("#main-footer");
    renderWithTemplate(footer_template, main_footer);
}

export function footerInfo() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
}
