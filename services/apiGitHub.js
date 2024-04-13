const uri = "https://api.github.com/users/"; // URI for the GitHub API

export async function getGitHubUser(username) {
    const response = await fetch(uri + username);
    return await response.json();
}