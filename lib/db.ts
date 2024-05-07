export type Project = {
  order: number;
  title: string;
  description: string;
  tech: string[];
  icon: string;
  live?: string;
  repo?: string;
  images?: {
    name: string;
    url: string;
  }[];
};

export const PROJECTS: Project[] = [
  {
    order: 1,
    title: "Tabula Notlar",
    description:
      "Tabula Notlar, kişisel kullanım için oluşturulmuş markdown esintili bir not alma uygulamasıdır. Not tutarak çalışmak benim için vazgeçilmez bir alışkanlık ve kullandığım hiçbir markdown düzenleyici tam ihtiyaçlarımı karşılamıyordu. Bu sebeple Tabula'yı oluşturdum. Aynı defter sayfaları gibi yana ve aşağı doğru ilerleme özelliğiyle ihtiyaçlarım için ideal. Bu uygulama yalnızca benim ihtiyaçlarımı karşılamak için oluşturuldu. İlerleyen zamanlarda belki başka kullanıcılara açık hale getirebilirim. İlgilenenler siteden davet isteği yollayabilirler.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    icon: "/icons/tabulaicon.svg",
    live: "https://tabula-notes.vercel.app",
    repo: "https://github.com/ozanArslan2424/tabula-notes",
    images: [
      { name: "Kütüphane sayfası", url: "/images/tabula1.png" },
      { name: "Kitap sayfası karanlık", url: "/images/tabula2.png" },
      { name: "Kitap sayfası aydınlık", url: "/images/tabula3.png" },
    ],
  },
  {
    order: 3,
    title: "TPÖÇG Kart Sitesi",
    description:
      "TPÖÇG Kart, TPÖÇG Sponsorluk Ekibi ve Mali İşler Koordinatörlüğü'nün ortak bir çalışmasıdır. TPÖÇG üyelerine anlaşmalı işletmelerde indirim sağlaması amacını taşır. Kart, bildiğim kadarıyla hiçbir zaman fiziksel hale getirilmese de kartı tanıtmak ve dijital versiyonunu oluşturmak amacıyla, sorumlu ekip arkadaşım tarafından görevlendirilmiştim ve bu siteyi de bu sebeple oluşturdum. Saf HTML, CSS ve JavaScript kullanmanın yanında html2canvas CDN'ini kullanarak kart sahiplerinin kendilerine özel kart görselini kaydedebilmesini amaçladım.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    icon: "/icons/cardicon.svg",
    repo: "https://github.com/ozanArslan2424/tpocgkart",
    live: "https://ozanarslan2424.github.io/tpocgkart/",
    images: [
      { name: "Giriş animasyonu", url: "/images/card1.png" },
      { name: "Ana sayfa 1", url: "/images/card2.png" },
      { name: "Ana sayfa 2", url: "/images/card3.png" },
    ],
  },
  {
    order: 2,
    title: "TPÖÇG Blog Makinesi v2",
    description:
      'İlk versiyonunu HTML, CSS ve JavaScript ile yaptığım Blog Makinesi\'nin Vite + React ile oluşturulmuş ikinci versiyonu. Tasarımı daha güzel olmasının yanında React ile yapıldığı için daha hızlı ve güvenilir bir uygulama. Ayrıca yeni eklediğim "sıfırla", "karanlık mod" ve diğer blog paylaşımı şablonları ile daha kullanışlı bir hal aldı.',
    tech: ["Vite", "React", "JavaScript", "NextUI", "GitHub Pages"],
    icon: "/icons/blogicon.svg",
    repo: "https://github.com/ozanArslan2424/blogmachine-v2",
    live: "https://ozanarslan2424.github.io/blogmachine-v2/",
    images: [
      { name: "Ana sayfa karanlık mod", url: "/images/blogv2dark1.png" },
      { name: "Ana sayfa aydınlık mod", url: "/images/blogv2light.png" },
      { name: "Diğer blog türü 1", url: "/images/blogv2dark2.png" },
      { name: "Diğer blog türü 2", url: "/images/blogv2dark3.png" },
    ],
  },
  {
    order: 4,
    title: "TPÖÇG Blog Makinesi v1",
    description:
      "Sadece HTML, CSS ve JavaScript kullanarak yapılmış bu web uygulaması benim ilk projem. Türk Psikoloji Öğrencileri Çalışma Grubu (TPÖÇG) Yayın Tasarım Ekibi'nde 1 sene boyunca liderlik yaparken en sık ve hızlı halletmemiz gereken iş Instagram gönderileri için blog yazılarının şablonunu hazırlamaktı. Bunun gibi basit bir iş için bizden her seferinde Photoshop kullanmamız bekleniyordu. Büyük bir zaman kaybı olduğunu düşündüm ve bu durumu çözmek için bu uygulamayı yaptım. Bu proje uzun sürmeden yetersiz kaldı ve 2. versiyonunu yapmaya başladım.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    icon: "/icons/blogicon.svg",
    repo: "https://github.com/ozanArslan2424/Blog-Machine/tree/main-edits",
    live: "https://ozanarslan2424.github.io/Blog-Machine/",
  },
  {
    order: 5,
    title: "Portfolyo",
    description:
      "Şu anda bulunduğumuz site. Bu proje, benim kendimi tanıtmak ve yaptığım işleri sergilemek amacıyla oluşturduğum bir portfolyo sitesi. Tasarım konusunda oldukça minimalist bir yaklaşım sergiledim ve içeriklerin ön planda olmasını sağladım.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    icon: "/ozan.jpg",
    live: "https://ozanarslan.vercel.app",
    repo: "https://github.com/ozanArslan2424/portfolio",
  },
];
