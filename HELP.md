# Project Nahan (نهان) - User Walkthrough

This guide will walk you through accessing and managing your deployed Nahan gateway.

## 1. Accessing the Dashboard

By default, your dashboard is mapped to the `/sync/dash` route. 
To access it, open your browser and navigate to:
`https://<YOUR_WORKER_DOMAIN>/sync/dash`

*(Note: If you visit the root domain or `/sync` via a web browser, the system will camouflage itself and show the specified maintenance websites to redirect network scanners).*

## 2. Authentication

When you open the dashboard, you will be greeted by the gateway login screen.
*   **Default Master Key:** `admin`
*   Enter your key and click **Authenticate**.

*(If you see a warning saying "⚠️ IOT_DB namespace missing!", it means you have not bound the `IOT_DB` KV namespace to your worker. Return to Cloudflare settings to bind it before attempting to save configuration updates).*

## 3. Using the Dashboard

The dashboard consists of 5 main sections:

### 📡 Endpoints (Info)
This is where you retrieve your connection strings to import into your client application.
*   **Profile Cards:** Your profiles (Default + Multi-User) are displayed as individual cards.
*   **Show QR Code:** Click the **Show QR Code** button on any card to open a modal with a scannable QR code for easy mobile setup.
*   **Cloud Sync URL:** The base API path for direct Sub/Config syncing. Use the copy button to grab the link.

### 📊 Metrics (Network)
Displays network properties regarding the processing Cloudflare edge node.
*   **Live Profile Usage:** Shows active connection counts and last activity time for your profiles (Note: resets if the worker restarts).
*   **Network Cards:** View Origin IP, executing Edge Node (Colo), and Regional data.
*   **Latency Diagnostics:** Click "Run Diagnostics" to measure real-time latency from your browser to your configured Clean IPs.

### ⚙️ System (Settings)
Configure core gateway profiles:
*   **Primary Display Mode:** Toggle between `Alpha Mode` (VLESS) and `Beta Mode` (Trojan).
*   **Device UUID:** Your connection identifier/password. Leaving this blank causes the system to auto-generate one based on your path.
*   **API Route:** Change this from `sync` to a hidden keyword (e.g., `my-secret-path`). Your dashboard will dynamically move to `/my-secret-path/dash`.
*   **Master Key:** Change the dashboard login password from `admin` to a secure custom passphrase.
*   **Backup & Restore:** Export your current dashboard parameters to a local `.json` file, or import a previously saved backup file to populate all inputs instantly.

### 🌐 Advanced (Network)
Fine-tune transport properties and integrations:
*   **Clean IPs (Multi-Generator):** Input your preferred clean Cloudflare IPs (comma or line separated). The subscription generator automatically multiplies configs for all IPs.
*   **Multi-Sensor Profiles:** Create separate profiles for different users. Format: `uuid:Name`. Users can access their specific config by appending `?sub=Name` to the Sync URL.
*   **Telegram Bot:** Enter your Bot Token and Chat ID to receive login alerts and manage the gateway remotely via Telegram commands (e.g., `/status`, `/pause`).
*   **Cloudflare Analytics:** Optional. Enter your Account ID and API Token to monitor daily Worker request usage (limit 100k/day).
*   **Kill Switch:** An emergency toggle to immediately pause all proxy traffic without deleting the worker.
*   **Secure Hello (ECH):** Toggle Encrypted Client Hello parameters in client configurations.

### 📋 Activity Logs
*   View a history of recent login attempts and configuration changes.

## 4. Applying Changes

After adjusting any inputs in the **System** or **Advanced** tabs:
1. Click the **Update Config** button at the bottom of the screen.
2. The indicator will show "Syncing..." and then reload automatically.
3. *Important:* If you changed the **API Route**, the page will automatically redirect you to the new URL (e.g., `/<new-route>/dash`). Please bookmark the new link for future access.
