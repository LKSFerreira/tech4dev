// test-extract.js
import { readFileSync, writeFileSync } from 'fs';

function extractDataFromBody(body) {
  const namePattern = /Nome Completo: \[(.*?)\]/;
  const githubPattern = /GitHub Username: \[(.*?)\]/;
  const rolePattern = /Role: \[(.*?)\]/;
  const linkedinPattern = /LinkedIn URL: \[(.*?)\]/;

  const nameMatch = body.match(namePattern);
  const githubMatch = body.match(githubPattern);
  const roleMatch = body.match(rolePattern);
  const linkedinMatch = body.match(linkedinPattern);

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

// Exemplo de corpo de issue para testar
const issueBodyExample = `
---

name: Profile feature
about: Para adicionar seu portfólio, basta preencher corretamente o template.
title: 'Adicione meu portfólio - [SEU_NOME_AQUI]'
labels: feature
assignees: ''

---

Por favor, preencha as informações abaixo para que possamos adicionar seu perfil ao repositório.

Exemplo:
\`\`\`md
Nome Completo: [Lucas Ferreira]
GitHub Username: [LKSFerreira]
Role: [Desenvolvedor Back-End]
LinkedIn URL: [https://www.linkedin.com/in/lucas-ferreira-developer/]
\`\`\`
Exemplos de Role: Desenvolvedor Java, Front-End Developer, Engenheiro de Software...
\`\`\`md
Nome Completo: [SEU_NOME_AQUI]
GitHub Username: [SEU_USUARIO_GITHUB_AQUI]
Role: [SUA_FUNCAO_AQUI] 
LinkedIn URL: [SEU_LINK_DO_LINKEDIN_AQUI]
\`\`\`
- [x] Autorizo a publicação desses dados no repositório de portfólios e entendo que eles serão visíveis para qualquer pessoa que acessar o repositório. Confirmo que todas as informações fornecidas são corretas e posso ser contatado(a) através delas. Estou ciente de que posso solicitar a remoção ou alteração dos meus dados a qualquer momento.
`;

// Testar a função

function updateDevsJson(profile) {
  const devsPath = './../../data/devs.json';
  const devs = JSON.parse(readFileSync(devsPath));
  devs.push(profile);
  writeFileSync(devsPath, JSON.stringify(devs, null, 2));
}

const profileData = extractDataFromBody(issueBodyExample);
if (profileData) {
  updateDevsJson(profileData);
}