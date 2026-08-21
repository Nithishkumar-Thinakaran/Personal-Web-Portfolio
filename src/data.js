import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/js.png";
import Tools4 from "/assets/tools/nodejs.png";
import Tools5 from "/assets/tools/github.png";
import Tools6 from "/assets/tools/ai.png";
import Tools7 from "/assets/tools/canva.png";
import Tools8 from "/assets/tools/html.png";
import Tools9 from "/assets/tools/css.png";
import Tools10 from "/assets/tools/php.png";
import Tools11 from "/assets/tools/mysql.png";
import Tools12 from "/assets/tools/mongodb_atlas.png";
import Tools13 from "/assets/tools/python.png";
import Tools14 from "/assets/tools/restapi.png";
import Tools15 from "/assets/tools/claude.png";
import Tools16 from "/assets/tools/networking.png";
import Tools17 from "/assets/tools/linux.png";





export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools13,
    nama: "Python",
    ket: "Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools3,
    nama: "Javascript",
    ket: "Language",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools8,
    nama: "HTML",
    ket: "Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools9,
    nama: "CSS",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools10,
    nama: "PHP",
    ket: "Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools4,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools14,
    nama: "RESTAPI",
    ket: "Web Service",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools11,
    nama: "MySql",
    ket: "Database ",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools12,
    nama: "MongoDB Atlas",
    ket: "Cloud Database ",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools5,
    nama: "Github",
    ket: "Repositories",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools7,
    nama: "Canva",
    ket: "Design App",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools15,
    nama: "Claude",
    ket: "AI Assistant",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools16,
    nama: "Networking",
    ket: "Communication Systems",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools17,
    nama: "Linux Terminal",
    ket: "System Administration",
    dad: "1600",
  },

  
 
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpg";
import Proyek6 from "/assets/proyek/proyek6.png";

export const listProyek = [
  {
    id: 6,
    image: Proyek6,
    title: "AI-Powered CSV Importer",
    subtitle: "Designed to simplify the processing of diverse CSV files by using AI to...",
    fullDescription:"Designed to simplify the processing of diverse CSV files by using AI to automatically identify, map, and transform lead data into a standardized CRM-ready format. It supports flexible data structures, validation, batch processing, and seamless integration for faster and more efficient lead management.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Nithishkumar-Thinakaran/AI-csv-importer",
    liveUrl: "https://groweasy-csv-importer.netlify.app/",
    dad: "600",
  },
  {
    id: 1,
    image: Proyek1,
    title: "VisitDesk – Smart Visitor Management",
    subtitle: "Designed to streamline visitor registration, check-in/check-out...",
    fullDescription:"Designed to streamline visitor registration, check-in/check-out, and digital pass generation through a centralized platform. It enables real-time visitor tracking, secure role-based access, and efficient management of visitor activities while reducing manual processes and improving overall security.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Nithishkumar-Thinakaran/Visitor-pass-management-system",
    liveUrl: "https://visitorpassport.netlify.app/login",
    dad: "100",
  },
  {
    id: 5,
    image: Proyek5,
    title: "NoteVault – Collaborative Note Hub",
    subtitle: "A web-based collaborative note management application designed...",
    fullDescription:"A web-based collaborative note management application designed to help users create, organize, edit, and share notes through a centralized platform. It provides a user-friendly interface for managing personal and shared notes, enabling real-time collaboration, efficient organization, and secure access to information.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Nithishkumar-Thinakaran/notes-app",
    liveUrl: "https://note-apy.netlify.app/login",
    dad: "500",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Hyper Service Marketplace",
    subtitle: "A full-stack web application designed to simplify service discovery...",
    fullDescription:"A full-stack web application designed to simplify service discovery, appointment scheduling, and booking management through a centralized digital platform. The system enables users to browse available services, book appointments, and manage their bookings seamlessly, while an integrated admin dashboard facilitates service management, booking monitoring, and report generation.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Nithishkumar-Thinakaran/Hyperlocal-Service-Marketplace",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Biomimetic Prosthetic Advancement",
    subtitle: "A smart healthcare solution that combines biomechanical principles...",
    fullDescription:"A smart healthcare solution that combines biomechanical principles, intelligent design, and data-driven analysis to develop prosthetic limbs that closely mimic natural human movement. By integrating artificial intelligence and biomedical engineering, it enhances mobility, comfort, and functionality, contributing to improved rehabilitation outcomes and quality of life for users.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Nithishkumar-Thinakaran/Biomimetic_Prosthetics",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Amazon Echo Reviews Using NLP",
    subtitle: "Customer reviews of Amazon Echo devices are analyzed using...",
    fullDescription:"Customer reviews of Amazon Echo devices are analyzed using Natural Language Processing (NLP) techniques to uncover sentiment, identify frequently discussed topics, and extract meaningful insights from user feedback. By processing large volumes of textual data, the solution helps understand customer satisfaction, recognize product strengths and weaknesses, and support data-driven decisions for product improvement and customer experience enhancement.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Nithishkumar-Thinakaran/Amazon-Echo-NLP",
    dad: "400",
  },
    
 
];
