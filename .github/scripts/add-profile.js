import { readFileSync, writeFileSync } from 'fs';

const eventPayload = JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'));
const issueBody = eventPayload.issue.body;


function extractDataFromBody(body) {
  // Dividir o corpo da issue em seções
  const sections = body.split('```');
  // Encontrar a seção que contém os dados do usuário
  const userDataSection = sections.find(section =>
    section.includes('Nome Completo:') &&
    section.includes('GitHub Username:') &&
    section.includes('Role:') &&
    section.includes('LinkedIn URL:')
  );

  // Se não encontrar uma seção com os dados do usuário, retorna null
  if (!userDataSection) return null;

  // Padrões de regex para extrair os dados
  const namePattern = /Nome Completo: \[(.*?)\]/;
  const githubPattern = /GitHub Username: \[(.*?)\]/;
  const rolePattern = /Role: \[(.*?)\]/;
  const linkedinPattern = /LinkedIn URL: \[(.*?)\]/;

  // Extrair os dados usando os padrões de regex
  const nameMatch = userDataSection.match(namePattern);
  const githubMatch = userDataSection.match(githubPattern);
  const roleMatch = userDataSection.match(rolePattern);
  const linkedinMatch = userDataSection.match(linkedinPattern);

  // Se todos os dados forem encontrados, cria o objeto profile
  if (nameMatch && githubMatch && roleMatch && linkedinMatch) {
    const profile = {
      name: nameMatch[1].trim(),
      github: githubMatch[1].trim(),
      role: roleMatch[1].trim(),
      linkedin: linkedinMatch[1].trim()
    };
    return profile;
  }
  return null;
}

function updateDevsJson(profile) {
  // O caminho deve ser relativo ao diretório raiz do repositório onde o GitHub Actions está executando
  const devsPath = './data/devs.json'; // Ajuste o caminho conforme necessário
  const devs = JSON.parse(readFileSync(devsPath));
  devs.push(profile);
  writeFileSync(devsPath, JSON.stringify(devs, null, 2));
}

const profileData = extractDataFromBody(issueBody);
if (profileData) {
  updateDevsJson(profileData);
}