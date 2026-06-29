<div align="center">

# CACTUS PANEL AI
### The Evolution of Intelligent Network Edge Management

**CACTUS PANEL AI** is a high-performance, request-based management solution running entirely on Cloudflare Workers. This fork redefines how you manage proxy connections by converting traditional data limits into request-based quotas and unifying multiple nodes into a single, powerful gateway.

[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

</div>

---

## 🌟 Why CACTUS PANEL AI?

We have re-engineered the original Nahan project for maximum control, speed, and aesthetics. With **Cloudflare D1** at its core, this panel provides a robust experience for managing complex, multi-node proxy setups.

* 🎯 **Request-Based Billing:** No more guessing data volume. Define your user's capacity in requests, and the panel handles the rest.
* 🔗 **All-Mode Unified Gateway:** Connect multiple Workers as "Slave Nodes" to a master panel and get a single, consolidated subscription link.
* 🤖 **Pro Telegram Bot:** Manage everything with a beautiful, glass-morphism designed Telegram interface.
* 🎨 **Immersive UI:** Enjoy a modern web dashboard with smooth animated backgrounds and responsive design.

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **📊 Smart Accounting** | Automatic conversion of usage into request counts. |
| **🔗 Multi-Node Sync** | Link multiple workers via the dedicated "Nodes" section. |
| **🌐 Subscription Web** | Dedicated sub-link page for easy configuration access in your browser. |
| **🛠️ Full User Control** | Edit names, expiry, and reset usage instantly via Web or Bot. |
| **🔐 Admin Access** | Add/Remove admins via Telegram numeric IDs for secure management. |
| **💾 D1 Power** | Persistent, high-speed storage using Cloudflare D1 Database. |

---

## 🚀 Quick Setup Guide

### 1. Database Initialization
1. Navigate to **Cloudflare Dashboard** → **Storage & Databases** → **D1 SQLite**.
2. Create a database (e.g., `xiron_db`).

### 2. Deployment & Binding
1. Create a new **Cloudflare Worker** and paste your code.
2. Go to **Settings** → **Bindings** → **Add Binding**.
3. **Crucial:**
   * **Type:** D1 Database
   * **Variable Name:** `XIRON` (Must be exactly this).
   * **Database:** Select your created database.
4. Deploy the worker.

### 3. Access Your Panel
1. Access your dashboard via: `https://<your-worker-url>.workers.dev/xiron/space`
2. **Login:** Use the default password `admin`.
3. **Setup:** Navigate to the **System** tab to set your Master Key, then use the **Nodes** section to configure your multi-node architecture.

---

## ⚠️ Source Integrity Note
The source code provided in this repository is obfuscated to protect the project's intellectual property. Please **do not** modify or re-obfuscate the code, as it may break the core functionality, D1 database binding (`XIRON`), and the required routing (`/xiron/space`). Use the file as-is for the best experience.

---

## 📖 Need Help?
For detailed instructions on configuring multi-node connections, setting up the Telegram bot, or managing your admins, please refer to the [User Guide](HELP.md).

---

<div align="center">
Made with ❤️ for the Proxy Community
CACTUS PANEL AI
CACTUS AI🌵
</div>
