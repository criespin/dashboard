// Dashboard.js
// A simple dashboard to display your website links

const links = [
  { name: 'Google', url: 'https://www.google.com' },
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'Stack Overflow', url: 'https://stackoverflow.com' },
  // Add more links here
];

const dashboardStyle = `
  body {
    font-family: Arial, sans-serif;
    background: #f4f6fa;
    margin: 0;
    padding: 0;
  }
  .dashboard-container {
    max-width: 600px;
    margin: 40px auto;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    padding: 32px 24px;
  }
  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 32px;
  }
  ul.links-list {
    list-style: none;
    padding: 0;
  }
  ul.links-list li {
    margin: 16px 0;
    text-align: center;
  }
  ul.links-list a {
    text-decoration: none;
    color: #1976d2;
    font-size: 1.2em;
    padding: 10px 24px;
    border-radius: 6px;
    background: #e3f2fd;
    transition: background 0.2s;
    display: inline-block;
  }
  ul.links-list a:hover {
    background: #bbdefb;
  }
`;

function renderDashboard() {
  document.head.insertAdjacentHTML('beforeend', `<style>${dashboardStyle}</style>`);
  document.body.innerHTML = `
    <div class="dashboard-container">
      <h1>My Website Links</h1>
      <ul class="links-list">
        ${links.map(link => `<li><a href="${link.url}" target="_blank">${link.name}</a></li>`).join('')}
      </ul>
    </div>
  `;
}

// If running in browser, render the dashboard
document.addEventListener('DOMContentLoaded', renderDashboard);
