// .github/scripts/add-profile.js
import { readFileSync, writeFileSync } from 'fs';

const issueBody = process.argv[2];

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