# Pixel-Motion Portfolio | Sabbella Laharika

A premium, high-performance personal portfolio built with Next.js, tailored for a **Software Engineer** specializing in Backend Systems, Distributed Architectures, and Scalable Solutions.

## 🚀 Live Demo
View the live project here: [https://sabbella-laharika-portfolio.vercel.app/](https://sabbella-laharika-portfolio.vercel.app/)

## ✨ Key Features
- **Modern UI/UX**: Clean, minimal design with a focus on professional "glassmorphism" aesthetics.
- **Horizontal Project Navigation**: A custom-built, touch-optimized horizontal carousel with detailed project expansion panels.
- **Dynamic Content**: In-depth architecture challenges and outcome metrics for all featured projects.
- **Responsive & Theme-Aware**: Fully responsive layout with seamless Light/Dark mode transitions.
- **Contact Integration**: Integrated with EmailJS for direct messaging and optimized contact cards for Call/WhatsApp.

## 🛠️ Technology Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons
- **Deployment**: Vercel
- **Contact Service**: EmailJS

## 💻 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/SabbellaLaharika/pixel-motion-portfolio.git
   cd pixel-motion-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add your EmailJS and personal details:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_PERSONAL_EMAIL=your_email@example.com
   NEXT_PUBLIC_PERSONAL_GITHUB=your_github_url
   NEXT_PUBLIC_PERSONAL_LINKEDIN=your_linkedin_url
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the project:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. **Push your code to GitHub.**
2. **Import the project into Vercel:**
   - Log in to your Vercel account.
   - Click **"New Project"**.
   - Select your `pixel-motion-portfolio` repository.
3. **Configure Environment Variables:**
   - During the import process, expand the **Environment Variables** section.
   - Add all the keys from your `.env.local` (e.g., `NEXT_PUBLIC_PERSONAL_EMAIL`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`, etc.).
4. **Deploy:**
   - Click **"Deploy"**. Vercel will automatically build and host your portfolio.
   - Any future pushes to your GitHub `main` branch will trigger an automatic redeployment.

## 📄 License
This project is for personal portfolio purposes. Feel free to use the structure as inspiration for your own work!
