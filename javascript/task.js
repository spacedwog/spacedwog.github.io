const repoOwner = "nome-do-dono"; // Dono do repositório
const repoName = "nome-do-repositorio"; // Nome do repositório
const issuesList = document.getElementById("issues-list");

// URL da API do GitHub para as Issues
const apiURL = `https://api.github.com/repos/${repoOwner}/${repoName}/issues`;

// Substituir "SEU_TOKEN_AQUI" pelo token de autenticação do GitHub
// Configurações para a API
const headers = {
    Authorization: `token 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`
};

// Função para buscar e exibir as Issues
async function fetchIssues() {
    try {
        const response = await fetch(apiURL, { headers });
        if (!response.ok) {
            throw new Error(`Erro ao buscar tarefas: ${response.statusText}`);
        }
        const issues = await response.json();

        // Renderizar cada tarefa na lista
        issues.forEach(issue => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
            <strong>${issue.title}</strong>
            <p>${issue.body || "Sem descrição."}</p>
            <a href="${issue.html_url}" target="_blank">Ver no GitHub</a>`;
            issuesList.appendChild(listItem);
        });
    }
    catch (error) {
        console.error(error);
        issuesList.innerHTML = "<p>Não foi possível carregar as tarefas.</p>";
    }
}

// Chamar a função ao carregar o script
fetchIssues();
