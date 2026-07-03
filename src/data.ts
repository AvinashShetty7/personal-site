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
  // technologies: string;
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

export interface Tech {
  technologyName: string;
  techImage: string;
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
  // technologies:
  //   "I work with a wide range of technologies including React, Node.js, Python, AWS, Docker,kubernetes, Terraform , and many more. I'm particularly interested in building and deploying scalable web applications.",
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
    img: "truleaf.png",
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

const tech: Tech[] = [
  {
    technologyName: "Linux",
    techImage: "/images/linux.png",
  },
  {
    technologyName: "Aws",
    techImage: "/images/aws.png",
  },
  {
    technologyName: "Docker",
    techImage: "/images/Docker.png",
  },
  {
    technologyName: "Kubernetes",
    techImage: "/images/k8s.png",
  },
  {
    technologyName: "Terraform",
    techImage: "/images/HashiCorp Terraform.png",
  },
  {
    technologyName: "Argo CD",
    techImage: "/images/Argo CD.png",
  },
  {
    technologyName: "Ansible",
    techImage: "/images/Ansible.png",
  },

  {
    technologyName: "Bash",
    techImage: "/images/Bash.png",
  },
  {
    technologyName: "GitHub Actions",
    techImage: "/images/GitHub Actions.png",
  },
  {
    technologyName: "Jenkins",
    techImage: "/images/Jenkins.png",
  },
  {
    technologyName: "prometheus",
    techImage: "/images/prom.png",
  },
  {
    technologyName: "Grafana",
    techImage: "/images/Grafana.png",
  },
  {
    technologyName: "NGINX",
    techImage: "/images/NGINX.png",
  },
  {
    technologyName: "helm",
    techImage: "/images/helm.png",
  },
    {
    technologyName: "Git",
    techImage: "/images/git.png",
  },
  {
    technologyName: "GitHub",
    techImage: "/images/github.png",
  },
  {
    technologyName: "java",
    techImage: "/images/Java.png",
  },


  {
    technologyName: "PHP",
    techImage: "/images/PHP.png",
  },

  {
    technologyName: "python",
    techImage: "/images/Python.png",
  },
  {
    technologyName: "HTML",
    techImage: "/images/html.png",
  },
  {
    technologyName: "CSS",
    techImage: "/images/css.png",
  },
    {
    technologyName: "JavaScript",
    techImage: "/images/javascript.png",
  },
      {
    technologyName: "React",
    techImage: "/images/reactjs.png",
  },
  {
    technologyName: "ExpressJS",
    techImage: "/images/express.png",
  },
  {
    technologyName: "NodeJS",
    techImage: "/images/nodejs.png",
  },
  {
    technologyName: "MongoDB",
    techImage: "/images/mongodb.png",
  },
  {
    technologyName: "MySQL",
    techImage: "/images/mysql.png",
  },

  {
    technologyName: "Tailwind",
    techImage: "/images/tailwind.png",
  },
];

export { personalInfo, projects, experience, tech };
