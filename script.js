async function loadGitHubRepos() {
    const container = document.getElementById('repo-container');

    try {
        const response = await fetch('https://api.github.com/users/bvales01/repos');
        const data = await response.json();

        container.innerHTML = '';

        data.forEach(repo => {
            const card = document.createElement('div');
            card.className = 'project-card';

            card.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || "No description provided."}</p>
            <div class="repo-stats">
            </div>
            <a href="${repo.html_url}" target="_blank" class="btn">View Source</a>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching repos:', error);
        document.getElementById('repo-container').innerHTML = "<p>Failed to load projects.</p>";
    }
};

loadGitHubRepos();
