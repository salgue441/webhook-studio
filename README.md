<div align="center">
  
# 🪝 WebhookStudio

### The Modern Webhook Testing Platform

**Debug, test, and monitor webhooks with a beautiful interface**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[Demo](https://webhookstudio.dev) · [Documentation](https://docs.webhookstudio.dev) · [Report Bug](https://github.com/salgue441/webhookstudio/issues) · [Request Feature](https://github.com/salgue441/webhookstudio/issues)

![WebhookStudio Banner](./public/banner.png)

</div>

---

## ✨ Features

<table>
  <tr>
    <td>
      <h3>🎯 Instant Webhook URLs</h3>
      <p>Get a unique, persistent URL in seconds. No signup required for testing.</p>
    </td>
    <td>
      <h3>📊 Beautiful Request Inspector</h3>
      <p>View headers, body, and metadata with syntax highlighting and search.</p>
    </td>
  </tr>
  <tr>
    <td>
      <h3>🔄 Replay & Transform</h3>
      <p>Resend webhooks with modifications to test edge cases and error handling.</p>
    </td>
    <td>
      <h3>⚡ Real-time Updates</h3>
      <p>See webhooks arrive instantly with WebSocket-powered live updates.</p>
    </td>
  </tr>
  <tr>
    <td>
      <h3>🎭 Mock Endpoints</h3>
      <p>Create fake webhook endpoints with custom responses for frontend testing.</p>
    </td>
    <td>
      <h3>👥 Team Collaboration</h3>
      <p>Share webhook logs securely with temporary, password-protected links.</p>
    </td>
  </tr>
</table>

---

## 🏗️ Architecture

```mermaid
graph TB
    subgraph "Client Layer"
        A[Next.js Frontend]
        B[React Components]
        C[shadcn/ui]
    end
    
    subgraph "API Layer"
        D[Next.js API Routes]
        E[WebSocket Server]
        F[Webhook Receiver]
    end
    
    subgraph "Data Layer"
        G[(PostgreSQL)]
        H[(Redis Cache)]
    end
    
    subgraph "External Services"
        I[Email Service]
        J[Analytics]
    end
    
    A --> B
    B --> C
    A --> D
    A --> E
    D --> F
    D --> G
    D --> H
    E --> G
    F --> G
    D --> I
    D --> J
    
    style A fill:#0070f3
    style D fill:#10b981
    style G fill:#3b82f6
```