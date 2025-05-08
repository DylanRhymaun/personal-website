function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Hide all sub-navs
    const subNavs = document.querySelectorAll('.sub-nav');
    subNavs.forEach(subNav => {
        subNav.style.display = 'none';
    });
}
// #######################################################################################################
function loadArticle(articlePath) {
    const contentDiv = document.getElementById('article-content'); // Selects the content area
    if (!contentDiv) {
        console.error("Element with id 'article-content' not found.");
        return; // Prevent further execution if the element is missing
    }

    fetch(articlePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load article');
            }
            return response.text();
        })
        .then(data => {
            // Automatically add <p> tags to separate paragraphs
            const formattedContent = data
                .split(/\n\s*\n/) // Split at blank lines (paragraph breaks)
                .map(para => `<p>${para.trim()}</p>`) // Wrap each in <p> tags
                .join(""); // Rejoin the array into a single string
            contentDiv.innerHTML = formattedContent; // Insert the formatted content

            // Smoothly scroll to the article content (only on mobile)
            if (window.innerWidth <= 1540) { // Adjust breakpoint if needed
                contentDiv.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        })
        .catch(error => {
            contentDiv.innerHTML = `<p>Error loading article: ${error.message}</p>`;
        });
}
// #######################################################################################################
document.querySelector('.logo').addEventListener('click', function() {
    this.style.animation = 'none'; // Reset animation
    void this.offsetWidth; // Force reflow to restart it
    this.style.animation = 'fontCycle 0.5s steps(1) 3 forwards'; // Restart animation
});
// #######################################################################################################

function goBackToIndex() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
// #######################################################################################################
document.getElementById("theme-toggle").addEventListener("click", function () {
    const body = document.body;
    const icon = document.getElementById("theme-icon");

    body.classList.toggle("light-mode");

    // Toggle between sun and moon icons
    if (body.classList.contains("light-mode")) {
        icon.classList.replace("fa-moon", "fa-sun"); // Show sun in light mode
    } else {
        icon.classList.replace("fa-sun", "fa-moon"); // Show moon in dark mode
    }
});
