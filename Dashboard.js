// Dashboard.js
// A colorful dashboard with four sections: My Website Links, Project Links, Technical, and Entertainment

const websiteLinks = [
  { name: 'Google', url: 'https://www.google.com' },
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'Stack Overflow', url: 'https://stackoverflow.com' },
  // Add more personal website links here
];

const projectLinks = [
  { name: 'GPT My App', url: 'https://criespin.github.io/my_app/' },
  { name: 'React App', url: 'https://github.com/yourusername/react-app' },
  { name: 'Node API', url: 'https://github.com/yourusername/node-api' },
  // Add more project links here
];

const entertainmentLinks = [
  { name: 'Gpt backend server', url: 'https://dashboard.render.com/web/srv-d0tjteje5dus73fvmrg0/logs' },
  { name: 'Open AI usage', url: 'https://platform.openai.com/settings/organization/usage' },
  // Add more entertainment links here
];

const technicalLinks = [
  { name: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
  { name: 'W3Schools', url: 'https://www.w3schools.com' },
  // Add more technical links here
];

const dashboardStyle = `
  body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }
  .dashboard-row {
    display: flex;
    gap: 32px;
    justify-content: space-between;
    margin-bottom: 32px;
    padding-left: 12px;
    padding-right: 12px;
  }
  .dashboard-row:last-child {
    margin-bottom: 0;
  }
  .dashboard-container {
    flex: 1;
    background: rgba(255,255,255,0.95);
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.10);
    padding: 40px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 0;
    margin: 0 12px; /* Add horizontal spacing between sections */
  }
  .section {
    width: 100%;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .section.personal {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  }
  .section.project {
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  }
  .section.entertainment {
    background: linear-gradient(135deg, #fcb69f 0%, #ffecd2 100%);
  }
  .section.technical {
    background: linear-gradient(135deg, #c2e9fb 0%, #81a4fd 100%);
  }
  h2 {
    color: #333;
    margin-bottom: 24px;
    font-size: 1.5em;
    letter-spacing: 1px;
  }
  ul.links-list {
    list-style: none;
    padding: 0;
    width: 100%;
  }
  ul.links-list li {
    margin: 16px 0;
    text-align: center;
  }
  ul.links-list a {
    text-decoration: none;
    color: #fff;
    font-size: 1.1em;
    padding: 12px 28px;
    border-radius: 8px;
    background: linear-gradient(90deg, #36d1c4 0%, #5b86e5 100%);
    box-shadow: 0 2px 8px rgba(91,134,229,0.10);
    transition: background 0.2s, transform 0.2s;
    display: inline-block;
    font-weight: 500;
  }
  .section.project ul.links-list a {
    background: linear-gradient(90deg, #f7971e 0%, #ffd200 100%);
    color: #333;
  }
  .section.entertainment ul.links-list a {
    background: linear-gradient(90deg, #ff5858 0%, #f09819 100%);
    color: #fff;
  }
  .section.technical ul.links-list a {
    background: linear-gradient(90deg, #43cea2 0%, #185a9d 100%);
    color: #fff;
  }
  ul.links-list a:hover {
    background: linear-gradient(90deg, #5b86e5 0%, #36d1c4 100%);
    transform: translateY(-2px) scale(1.04);
  }
  .section.project ul.links-list a:hover {
    background: linear-gradient(90deg, #ffd200 0%, #f7971e 100%);
  }
  .section.entertainment ul.links-list a:hover {
    background: linear-gradient(90deg, #f09819 0%, #ff5858 100%);
  }
  .section.technical ul.links-list a:hover {
    background: linear-gradient(90deg, #185a9d 0%, #43cea2 100%);
  }
  @media (max-width: 700px) {
    .dashboard-row {
      flex-direction: column;
      gap: 20px;
      margin-bottom: 20px;
      padding-left: 0;
      padding-right: 0;
    }
    .dashboard-container {
      padding: 24px 8px;
      margin: 8px 0;
    }
    .section {
      padding: 18px 6px;
      margin: 0;
    }
  }
`;

function renderDashboard() {
  document.head.insertAdjacentHTML('beforeend', `<style>${dashboardStyle}</style>`);
  document.body.innerHTML = `
    <div>
      <div class="dashboard-row">
        <div class="dashboard-container section personal">
          <h2>Website Links</h2>
          <ul class="links-list">
            ${websiteLinks.map(link => `<li><a href="${link.url}" target="_blank">${link.name}</a></li>`).join('')}
          </ul>
        </div>
        <div class="dashboard-container section project">
          <h2>My Projects</h2>
          <ul class="links-list">
            ${projectLinks.map(link => `<li><a href="${link.url}" target="_blank">${link.name}</a></li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="dashboard-row">
        <div class="dashboard-container section technical">
          <h2>server</h2>
          <ul class="links-list">
            ${technicalLinks.map(link => `<li><a href="${link.url}" target="_blank">${link.name}</a></li>`).join('')}
          </ul>
        </div>
        <div class="dashboard-container section entertainment">
          <h2>Servers & APIS</h2>
          <ul class="links-list">
            ${entertainmentLinks.map(link => `<li><a href="${link.url}" target="_blank">${link.name}</a></li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', renderDashboard);
