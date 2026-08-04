export const mockCategories = [
  {
    slug: "assistencia-tecnica",
    name: "Assistência técnica",
    description: "Computadores, celulares, impressoras e equipamentos.",
    icon: "Wrench",
  },
  {
    slug: "eletricista",
    name: "Eletricista",
    description: "Instalações, manutenção e serviços elétricos.",
    icon: "Zap",
  },
  {
    slug: "desenvolvimento-web",
    name: "Desenvolvimento web",
    description: "Sites, sistemas, lojas virtuais e suporte digital.",
    icon: "Code2",
  },
  {
    slug: "seguranca-eletronica",
    name: "Segurança eletrônica",
    description: "Câmeras, alarmes e controle de acesso.",
    icon: "ShieldCheck",
  },
  {
    slug: "ar-condicionado",
    name: "Ar-condicionado",
    description: "Instalação, limpeza e manutenção preventiva.",
    icon: "Snowflake",
  },
  {
    slug: "servicos-residenciais",
    name: "Serviços residenciais",
    description: "Manutenção, reparos e melhorias para sua casa.",
    icon: "House",
  },
];

export const mockProfessionals = [
  {
    slug: "joao-silva-informatica",
    initials: "JS",
    name: "João Silva",
    category: "Técnico em informática",
    location: "Penedo, AL",
    rating: 4.9,
    reviews: 38,
    available: true,
    services: ["Formatação", "Redes Wi-Fi", "Backup", "Suporte remoto"],
  },
  {
    slug: "marcos-eletricista",
    initials: "ME",
    name: "Marcos Oliveira",
    category: "Eletricista residencial",
    location: "Maceió, AL",
    rating: 4.8,
    reviews: 25,
    available: true,
    services: ["Instalações", "Quadros elétricos", "Manutenção", "Emergências"],
  },
  {
    slug: "ana-design-web",
    initials: "AD",
    name: "Ana Duarte",
    category: "Desenvolvedora web",
    location: "Atendimento remoto",
    rating: 5,
    reviews: 17,
    available: false,
    services: ["Sites", "Landing pages", "Manutenção", "Lojas virtuais"],
  },
];
