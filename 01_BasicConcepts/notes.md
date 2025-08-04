# 🌐 How the Internet Works – From Computer Connection to Hosting

## 1️⃣ How Do Two Computers Connect?

The internet is a vast network where millions of computers (devices) are connected. When you want to communicate with another device (like accessing a website), your computer sends a request that travels through multiple intermediate systems to reach the destination.

### 🔑 Key Terms:

- **Client**: Your device (e.g., laptop, mobile phone).
- **Server**: The remote machine that stores website content or services.
- **Internet**: A global network that connects all clients and servers using standardized rules (protocols).

---

## 2️⃣ What Happens When You Visit a Website?

Let's say you open your browser and type `www.google.com`. Here's what happens step-by-step:

1. **Domain Name Entry**: You type a human-readable domain name (like `www.google.com`).
2. **DNS Lookup**: Your computer contacts a **DNS server** to get the corresponding IP address.
3. **IP Address Returned**: The DNS server returns something like `142.250.190.4`.
4. **Request Sent via ISP**: Your request is sent to this IP via your **ISP** (Internet Service Provider).
5. **Server Receives Request**: The server at that IP receives your request.
6. **Server Responds**: The server sends back the web page content using **HTTP/HTTPS** protocol.
7. **Browser Displays Page**: Your browser renders the HTML, CSS, and JS received from the server.

---

## 3️⃣ Understanding the Core Components

### 🧠 ISP (Internet Service Provider)

- Connects your home/device to the internet.
- Assigns your device an **IP address** (can be temporary or static).
- Acts as a gateway between your local network and the public internet.

### 🧠 IP Address (Internet Protocol Address)

- A unique number assigned to every internet-connected device.
- Identifies both **clients** and **servers**.
- Example: `192.168.0.101` (IPv4), or newer `::1` (IPv6).

### 🧠 DNS (Domain Name System)

- Like the **phonebook** of the internet.
- Translates human-friendly domain names (like `amazon.in`) into machine-friendly IP addresses.
- Without DNS, you'd need to memorize numeric IPs for every site.

---

## 4️⃣ Protocols: How Data Travels

- **HTTP** (Hypertext Transfer Protocol) or **HTTPS** (secure version using SSL)
- Defines how data is structured and transmitted between client and server.
- Example: When you click a link, an HTTP request is sent; the server replies with an HTTP response.

---

## 5️⃣ Where Are Websites Stored? (Hosting)

### 🏠 What is Hosting?

Hosting means storing your website's files (HTML, CSS, JavaScript, media, etc.) on a **server** that is accessible via the internet.

### 🔁 Hosting Flow:

1. Developer builds a website.
2. Files are uploaded to a **hosting server**.
3. A domain is connected to that server’s IP.
4. When a user types the domain, the website is served to them.

### 🧳 Types of Hosting:

| Type              | Description                                          |
| ----------------- | ---------------------------------------------------- |
| Shared Hosting    | Multiple websites on one server (cheap, low control) |
| VPS Hosting       | Virtual slice of a physical server (moderate power)  |
| Dedicated Hosting | One server fully dedicated to your website           |
| Cloud Hosting     | Flexible, scalable; charged based on usage           |

---

## 6️⃣ Introduction to AWS (Amazon Web Services)

AWS is a leading cloud hosting platform that allows developers and companies to host apps, websites, and more with high scalability and global access.

### 🧩 Key AWS Services for Hosting:

| AWS Service    | Purpose                                               |
| -------------- | ----------------------------------------------------- |
| **EC2**        | Virtual machines for running apps/websites            |
| **S3**         | Storage for static files (images, videos, HTML, etc.) |
| **Route 53**   | DNS management and routing                            |
| **Lambda**     | Run backend code without managing servers             |
| **CloudFront** | Distribute content via CDN for faster access          |

---

# 🧩 Big Picture of a Web Application

A web application is an interactive system built using multiple layers like frontend, backend, APIs, and a database. Understanding how they communicate and serve users is crucial before diving deeper into development.

---

## 🏗️ Key Components of a Web Application

### 1️⃣ Frontend (Client Side)

- What the **user sees** and interacts with in the browser.
- Built with: **HTML, CSS, JavaScript**
- May use frameworks like: **React, Vue, Angular**
- Responsibilities:
  - UI design and rendering
  - Capturing user inputs (e.g., forms, clicks)
  - Making API calls to the backend
  - Displaying backend responses

### 2️⃣ Backend (Server Side)

- Handles the **business logic** and serves data to the frontend.
- Written in: **Node.js, Django (Python), Laravel (PHP), Ruby on Rails, etc.**
- Responsibilities:
  - Validating frontend data
  - Performing operations (like login, calculations)
  - Talking to the database
  - Sending back responses via APIs

### 3️⃣ API (Application Programming Interface)

- A structured **communication layer** between frontend and backend.
- Allows frontend to “ask” for data or “send” data to backend.
- Most APIs today are **RESTful** (based on HTTP methods like GET, POST, PUT, DELETE).
- Response format: typically **JSON** (JavaScript Object Notation).

### 4️⃣ Database

- Stores **persistent data** (e.g., users, products, blog posts).
- Two major types:
  - **Relational (SQL)**: MySQL, PostgreSQL (structured schema, tables, relations)
  - **NoSQL**: MongoDB, Firebase (flexible, JSON-like, unstructured)
- Backend queries the database to fetch, insert, update, or delete data.

---

## 🔄 How They Work Together (End-to-End Flow)

### Example: User Submits a Contact Form

1. User fills form and clicks "Submit" → Frontend captures data.
2. Frontend sends `POST` request to API: `/api/contact`
3. Backend receives data, validates it.
4. Backend stores it in a database or triggers an email.
5. Backend sends a response: `{ success: true, message: "Received" }`
6. Frontend shows success message to the user.

---

## 🛠 Technologies by Layer

| Layer     | Purpose                      | Tools & Examples                            |
| --------- | ---------------------------- | ------------------------------------------- |
| Frontend  | UI/UX                        | HTML, CSS, JavaScript, React, Vue, Tailwind |
| Backend   | Logic & processing           | Node.js, Express, Django, Laravel, Flask    |
| API       | Communication between layers | REST, GraphQL, JSON, Axios, Fetch API       |
| Database  | Store data                   | MongoDB, PostgreSQL, MySQL, Firebase        |
| Dev Tools | Testing, debugging, auth     | Postman, Thunder Client, JWT, OAuth         |

---

## 🧠 Additional Key Concepts (Expanded Foundation)

### 🔹 Client-Server Architecture

- Web follows a **client-server model**:
  - **Client**: sends requests (browser, mobile app)
  - **Server**: processes request and sends response
- Servers may handle multiple clients simultaneously.

### 🔹 HTTP Protocol

- Communication happens over **HTTP/HTTPS**.
- Common methods:
  - `GET`: Retrieve data
  - `POST`: Send new data
  - `PUT`: Update data
  - `DELETE`: Remove data
- Response includes:
  - **Status codes** (e.g., 200 OK, 404 Not Found, 500 Server Error)
  - **Body** (usually JSON)

### 🔹 Status Codes (Common Ones)

| Code | Meaning                    |
| ---- | -------------------------- |
| 200  | OK / Success               |
| 201  | Created (e.g., new record) |
| 400  | Bad Request                |
| 401  | Unauthorized               |
| 403  | Forbidden                  |
| 404  | Not Found                  |
| 500  | Internal Server Error      |

### 🔹 JSON

- Lightweight data format used to exchange data between frontend and backend.
- Example:

```json
{
  "name": "Ayush",
  "email": "ayush@email.com"
}
```
