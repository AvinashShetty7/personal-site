export interface PersonalInfo {
  name: string;
  tagline: string;
  profileImage: string;
  subtitle: string;
  education: string;
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
    whatsapp: string;
    resume: string;
  };
  about: string[];
  technologies: string;
}

export interface ResumeItem {
  text: string;
  link: string;
  title: string;
}

export interface Project {
  title: string;
  img: string;
  description: string[];
  techStack: string[];
  link: string;
}

export interface Experience {
  companyName: string;
  position: string;
  techStack: string[];
  duration: string;
  workDone: string[];
}


const personalInfo: PersonalInfo = {
  name: "Avinasha Shetty",
  tagline: "I like to build and deploy software  🚀💻🎯",
  profileImage: "/images/profilePic.png",
  subtitle: "Software Developer",
  education: "Master of Computer Applications",
  socialLinks: {
    github: "https://github.com/AvinashShetty7",
    linkedin: "https://www.linkedin.com/in/avinasha-shetty-15a486276",
    email: "mailto:avinashshetty2004@gmail.com",
    whatsapp: "https://wa.me/917975287481",
    resume:
      "https://drive.google.com/file/d/1pbH8VzhP6t0kCAwOYG6V5a9U9Pm6KXRa/view?usp=sharing",
  },
  about: [
    "Cloud and DevOps enthusiast with hands-on experience in AWS infrastructure automation, Infrastructure as Code (IaC), and container orchestration.",
    "Skilled in engineering automated CI/CD and GitOps pipelines utilizing GitHub Actions and Argo CD, alongside full-stack MERN development capabilities.",
    "My experience spans across various technologies and I'm always eager to learn new technologies and tackle challenging problems.",
  ],
  technologies:
    "I work with a wide range of technologies including React, Node.js, Python, AWS, Docker,kubernetes, Terraform , and many more. I'm particularly interested in building and deploying scalable web applications.",
};

const projects: Project[] = [
  {
    title: "Kubernetes-Based GitOps Deployment of OpsDesk on AWS EKS",
    img: "archfork8s.png",
    description: [
      "Containerized distributed frontend and backend services via multi-stage Docker builds, hosting cloud-native applicationsseamlessly on a managed AWS EKS cluster.",
      "Engineered an automated CI pipeline using GitHub Actions to build production-ready Docker artifacts, automatically pushingbuilds to registries and dynamically updating Helm chart values.",
      "Developed modular Helm charts to manage complex Kubernetes manifests incorporating Deployments, Services,ConfigMaps, Secrets, and Nginx Ingress controllers.",
      "Implemented a declarative GitOps continuous delivery loop using Argo CD, achieving real-time cluster synchronization andzero-downtime microservice updates.",
    ],
    techStack: [
      "AWS EKS",
      "Docker",
      "Kubernetes",
      "Argo CD",
      "Helm",
      "GitHub Actions",
      "NGINX",
    ],
    link: "https://github.com/AvinashShetty7/Kubernetes-Based-CI-CD-Deployment-of-OpsDesk-Application-on-AWS-EKS-",
  },
  {
    title: "AWS Infrastructure Automation using Terraform",
    img: "arch.png",
    description: [
      "Architected a highly available multi-AZ network topology on AWS featuring public subnets for external traffic and private subnets for secure resource isolation.",
      "Provisioned Application Load Balancers (ALB) and Auto Scaling Groups (ASG) using Terraform declarative configurations to enable dynamic scaling and faulttolerance.",
      "Secured cluster perimeters by engineering cross-subnet routing policies, deploying NAT Gateways for outbound privateinstances, and establishing restricted Bastion Hosts.",
      "Enforced robust infrastructure security barriers by implementing stateful Security Groups and networking policies regulating inbound and outbound traffic control.",
    ],
    techStack: ["AWS", "Terraform", "AWS VPC", "EC2", "ELB"],
    link: "https://github.com/AvinashShetty7/AWS-Infrastructure-Automation-using-Terraform",
  },
  {
    title: "AWS Cloud Cost Optimization Automation",
    img: "arch.png",
    description: [
      "Developed an automated solution to detect idle AWS resources and recommend cost-saving actions.",
      "Automated stopping unused EC2 instances and deletion of unattached EBS volumes.",
      "Configured S3 lifecycle rules to transition infrequently accessed data to lower-cost storage classes.",
      "Implemented cost monitoring dashboards and budget alerts for continuous expense tracking.",
      "Reduced manual cloud management through automation scripts.",
      "Tech Stack: AWS, Python, Lambda, EventBridge, CloudWatch, IAM, S3, EC2.",
    ],
    techStack: [
      "AWS",
      "Python",
      "Lambda",
      "EventBridge",
      "Cloudwatch",
      "IAM",
      "s3",
    ],
    link: "https://github.com/AvinashShetty7/AWS-Infrastructure-Automation-using-Terraform",
  },
  {
    title: "TruLeaf – Digital Food Traceability Platform",
    img: "dhanush.png",
    description: [
      "Engineered a production-grade supply chain visibility application using the MERN stack to track historical food logistics transparently from origin to marketplace.",
      "Implemented data confidentiality layers with Role-Based Access Control (RBAC) and cryptographically signed JSON Web Tokens (JWT) for secured multi-tenant authentication workflows.",
      "Configured a webhook-driven continuous deployment pipeline mapping source code version branches to Vercel (frontend) and Render (backend platform as a service).",
      "Integrated external open-data endpoints (data.gov.in) for localized data streams and integrated Cloudinary APIs to executeoptimized media uploads and content delivery network caching.",
    ],
    techStack: [
      "React",
      "Node js",
      "Express js",
      "MongoDB",
      "Vercel",
      "Render",
    ],
    link: "https://truleaf.vercel.app",
  },
];

const experience: Experience[] = [
  {
    companyName: "PAT Technologies pvt ltd (Edutainer)",
    position: "Web developer intern",
    techStack: ["React", "Node js", "MongoDB", "Python"],
    duration: "feb 2026 - May 2026",
    workDone: [
      "Collaborated on building responsive full-stack applications using the MERN stack, leveraging component-based architecture in ReactJS to optimize frontend performance.",
      "Designed and integrated secure RESTful APIs executing database-driven CRUD operations to handle high-throughput client- server requests.",
      "Optimized backend application logic with Node.js and ExpressJS, facilitating seamless workflow transitions and improving application response times.",
    ],
  },
];

// const achievementNotes: AchievementNote[] = [
//   {
//     id: "achievement-1",
//     title: "ETHIndia 2023 Winner",
//     preview: "Winner of ETHIndia 2023 + 3 track prizes",
//     image: "ethindia-2023.jpeg",
//     achievementTitle: "ETHIndia 2023 - 3Transform",
//     content: [
//       "Empowers beginners with hands-on smart contract integration.",
//       "Helps enterprises adopt Web3 efficiently.",
//       "🏆 Winner of ETHIndia 2023, the world's biggest Ethereum hackathon.",
//       "🏅 Won 3 track prizes - Filecoin, Okto, and Scroll.",
//     ],
//     date: "December 2023",
//     link: "https://devfolio.co/projects/transform-014b",
//   },
//   {
//     id: "achievement-2",
//     title: "Kavach 2023 Winner",
//     preview: "Government integration of crime detection tool",
//     image: "kavach-2023.jpeg",
//     achievementTitle: "Kavach 2023 - FundTrail",
//     content: [
//       "Developed a fund trail analysis tool to detect cybercrime.",
//       "Winner of Kavach 2023, a national-level government hackathon.",
//       "Project selected for integration into current government systems.",
//     ],
//     date: "August 2023",
//     link: "https://www.youtube.com/watch?v=PQmar1DG5eI",
//   },
//   {
//     id: "achievement-3",
//     title: "ETHIndia 2024 Honoree",
//     preview: "Quadratic prize winner + Honorable mention",
//     image: "ethindia-2024.jpeg",
//     achievementTitle: "ETHIndia 2024 - ThreeDrive",
//     content: [
//       "A decentralized Google Drive-like filesystem powered by the Walrus protocol.",
//       "Provides intuitive nested folders, real-time collaboration, and SDK integration.",
//       "🏅 Honorable Mention in Walrus Protocol track.",
//       "🏆 Won share of Quadratic Voting prize pool.",
//     ],
//     date: "December 2024",
//     link: "https://devfolio.co/projects/threedrive-0f13",
//   },
//   {
//     id: "achievement-4",
//     title: "Unfold 2024 - Best Agentic Project",
//     preview: "Crypto-reward GitHub bot wins 3 prizes",
//     image: "unfold-2024.jpeg",
//     achievementTitle: "Unfold 2024 - OpenFund",
//     content: [
//       "Empowering open source innovation with crypto rewards.",
//       "AI-driven GitHub bot bridges contributions and incentives.",
//       "🏅 Won 'Best Agentic Project' from Nethermind and 2 other prizes.",
//       "Tackles contributor burnout with automated crypto rewards.",
//     ],
//     date: "December 2024",
//     link: "https://devfolio.co/projects/openfund-8ef2",
//   },
//   {
//     id: "achievement-5",
//     title: "Prakalp 2025 Winner",
//     preview: "Best software project for Parity Protocol",
//     image: "prakalp-2025.jpeg",
//     achievementTitle: "Prakalp 2025 - Parity Protocol",
//     content: [
//       "National-level project presentation competition.",
//       "Won best software project for presenting Parity Protocol - an open-source decentralized compute platform.",
//     ],
//     date: "April 2025",
//   },
//   {
//     id: "achievement-6",
//     title: "JPMC Secure Code Warrior - 2nd Place",
//     preview: "Ranked 2nd among interns across India & Singapore",
//     image: "jpmc-2024.png",
//     achievementTitle: "Secure Code Warrior 2024",
//     content: [
//       "Internal CTF-style cybersecurity contest by JPMC.",
//       "Involved solving real-world hacking challenges and quizzes.",
//       "🏅 Secured 2nd place across all interns in India + Singapore.",
//     ],
//     date: "July 2024",
//   },
//   {
//     id: "achievement-7",
//     title: "Hackerstellar Blockchain 2023 Winner",
//     preview: "Escrow + logistics dApp with KYC verification",
//     image: "hackerstellar-2023.jpeg",
//     achievementTitle: "Hackerstellar - ThreeChain",
//     content: [
//       "Secured goods transfer with ERC721 tokens and escrow service.",
//       "Integrated logistics transparency and Aadhaar QR-based KYC.",
//     ],
//     date: "April 2023",
//     link: "https://devfolio.co/projects/three-chain-97b3",
//   },
//   {
//     id: "achievement-8",
//     title: "BitnBuild 2023 Winner",
//     preview: "Tokenized real estate using Polygon",
//     image: "bitnbuild-2023.jpeg",
//     achievementTitle: "BitnBuild - Bricks",
//     content: [
//       "Streamlined property transactions using NFTs on Polygon.",
//       "Improved transparency and security with blockchain tech.",
//     ],
//     date: "January 2023",
//     link: "https://devfolio.co/projects/bricks-731e",
//   },
//   {
//     id: "achievement-9",
//     title: "X-Tract Datathon - 3rd Place",
//     preview: "Ranked 3rd in ML + data cleaning competition",
//     image: "xtract-2022.jpeg",
//     achievementTitle: "X-Tract 2022 Datathon",
//     content: [
//       "Solved end-to-end challenges using data cleaning & ML models.",
//       "Ranked 3rd overall by solving full trail with accurate predictions.",
//     ],
//     date: "March 2022",
//   },
//   {
//     id: "achievement-10",
//     title: "Bid by Bit 2022 Champion",
//     preview: "DSA-based gamified contest win",
//     image: "",
//     achievementTitle: "Bid by Bit 2022",
//     content: [
//       "State-level competitive programming contest.",
//       "Used DSA to earn points and unlock new problem sets.",
//     ],
//     date: "November 2022",
//   },
// ];

export { personalInfo, projects, experience };
