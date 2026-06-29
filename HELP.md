# CACTUS PANEL AI - User Guide

This guide provides comprehensive instructions on how to access, configure, and manage your pArSa ULtrA pAnEL gateway.

## 1. Smart Usage Management (Request-Based)
This panel replaces traditional volume-based (GB) accounting with an advanced **Request-Based** system.
* **Mechanism:** Using precise mathematical formulas, the system converts your allocated volume (MB) into a specific request quota. This ensures highly accurate and efficient resource management on the Cloudflare Edge infrastructure.

## 2. Multi-Node Integration (Slave Architecture)
To manage multiple workers centrally, follow these steps:
1. **Generate Secret Key:** In your Master panel, navigate to **Advanced** and generate a unique "Secret Key."
2. **Configure Slave Node:** In your second (Slave) panel, go to the same section and input the Master's Secret Key.
3. **Request Connection:** In the Slave panel, assign a name to the node, enter the Master's full URL (e.g., `https://your-worker.dev/xiron`), and click **Send Request**.
4. **Approve:** Return to your Master panel, go to the **Nodes** section, and approve the connection request. Ensure the **Slave Node** toggle is enabled to complete the sync.



## 3. All-Mode (Smart Failover & Load Balancing)
All-Mode provides high availability by merging all your nodes into one connection.
* **Mechanism:** It aggregates your Master and Slave nodes into a single file. Your client periodically checks the connection stability every minute.
* **Smart Switching:** If the current node is stable, the connection remains active. In case of latency or connection loss, the client automatically switches to the node with the lowest ping, ensuring an uninterrupted and optimized connection.
* **How to Use:** Download the All-Mode configuration from the **Endpoints** section or your subscription link and import it into your client (e.g., V2rayNG, Shadowrocket).

## 4. Telegram Bot & Admin Management
The panel features a sleek Telegram bot with a glass-morphism UI.
* **Setup:** Register your Bot Token and Master Admin Numeric ID in the **Advanced** section.
* **Admin Access:** In the **Admins** section, add numeric Telegram IDs to grant management access to your team.

### Bot Commands:
* `/status`: Display server health, connected nodes, and real-time usage.
* `/users`: List active users with direct management buttons.
* `/pause [UserID]`: Suspend a specific user's access.
* `/reset [UserID]`: Reset a user's consumed quota.

## 5. Subscription Web
Easily access your configurations without complex client setup. Open your Subscription Web URL in any browser to view, copy, or import your entire configuration list instantly.

## 6. Advanced User Management
In the **Users** section, you have full control:
* **Edit:** Modify usernames, allocated quota, and expiration dates.
* **Reset:** Instantly set a user's consumed usage back to zero.

## 7. Security & Access Paths
* **Access URL:** Always use the `/xiron/space` path to access your panel (e.g., `https://your-worker.dev/xiron/space`).
* **API Path:** If you change the API path in settings, append the new path to your Worker URL: `YOUR_API/space`.
* **Integrity Warning:** The source code is obfuscated to protect intellectual property. Please **do not** modify or re-obfuscate the code, as it may break the D1 (`XIRON`) bindings and routing.

---

### 🛠️ Troubleshooting
* **D1 Database Error:** Ensure the `XIRON` binding is correctly defined in your Cloudflare Workers settings.
* **Missing Configs:** Verify that the Slave Node has been successfully approved in the Master panel.
* **Bot Not Responding:** Double-check the Admin Numeric ID and Bot Token in the **Advanced** settings.
