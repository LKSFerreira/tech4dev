// .github/scripts/add-profile.js
import { readFileSync, writeFileSync } from 'fs';
const issueBody = process.argv[2];

function extractDataFromBody(body) {
    // Define a expressão regular para localizar o bloco JSON
    const jsonPattern = /```json\r?\n\{\r?\n"name": "(.*?)",\r?\n"github": "(.*?)",\r?\n"role": "(.*?)",\r?\n"linkedin": "(.*?)"\r?\n\}\r?\n```/;
    // Tenta encontrar o bloco JSON no corpo da issue
    const match = body.match(jsonPattern);

    // Se um bloco JSON for encontrado, cria um objeto JavaScript a partir dele
    if (match) {
        const profile = {
            name: match[1],
            github: match[2],
            role: match[3],
            linkedin: match[4]
        };
        return profile;
    }

    // Se nenhum bloco JSON for encontrado, retorna null
    return null;
}

function updateDevsJson(profile) {
    const devsPath = './data/devs.json';
    const devs = JSON.parse(readFileSync(devsPath));
    devs.push(profile);
    writeFileSync(devsPath, JSON.stringify(devs, null, 2));
}

const profileData = extractDataFromBody(issueBody);
if (profileData) {
    updateDevsJson(profileData);
}