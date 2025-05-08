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
    const contentDiv = document.getElementById('article-content'); 
    const writingSection = document.getElementById('writing');
    const allLists = writingSection.querySelectorAll('ul'); // Select all <ul> inside #writing
    const allHeadings = writingSection.querySelectorAll('h2.betterH2'); // Select all <h2 class="betterH2">

    if (!contentDiv) {
        console.error("Element with id 'article-content' not found.");
        return;
    }

    // Hide all the lists and headings
    allLists.forEach(list => {
        list.style.display = 'none';
    });
    allHeadings.forEach(heading => {
        heading.style.display = 'none';
    });

    fetch(articlePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load article');
            }
            return response.text();
        })
        .then(data => {
            const formattedContent = data
                .split(/\n\s*\n/)
                .map(para => `<p>${para.trim()}</p>`)
                .join("");
            contentDiv.innerHTML = formattedContent;

            if (window.innerWidth <= 1540) {
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
    const contentDiv = document.getElementById('article-content');
    const writingSection = document.getElementById('writing');
    const allLists = writingSection.querySelectorAll('ul');
    const allHeadings = writingSection.querySelectorAll('h2.betterH2');

    // Clear article content
    contentDiv.innerHTML = '';

    // Show all the lists and headings again
    allLists.forEach(list => {
        list.style.display = 'block';
    });
    allHeadings.forEach(heading => {
        heading.style.display = 'block';
    });

    // Optionally scroll back to the top
    writingSection.scrollIntoView({ behavior: "smooth", block: "start" });
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
