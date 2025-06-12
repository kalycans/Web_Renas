import type { NavItem, Project, SocialLink } from '@/types';
import { Home, User, Briefcase, Mail, Linkedin, Instagram, Github, MessageSquare, DownloadCloud } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About Me', href: '/about' },
  { title: 'Projects', href: '/projects' },
  { title: 'Contact', href: '/contact' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: "Kampanye Digital Anti Perundungan",
    description: "Proyek kampanye media sosial untuk meningkatkan kesadaran tentang bullying di kalangan remaja.",
    imageUrl: "/image/kampanye.jpg",
    imageAlt: "Poster kampanye anti perundungan",
    reflectiveNarrative:
      "Dalam proyek ini, saya belajar menyusun strategi komunikasi digital yang relevan dan menyentuh. Saya ikut merancang konten Instagram dan mengatur jadwal posting, sekaligus mengevaluasi hasilnya lewat insight dan engagement rate.",
    dataAiHint: "kampanye-komunikasi",
  },
  {
    id: '2',
    title: "Podcast 'Suara Mahasiswa'",
    description: "Podcast mingguan yang membahas isu-isu sosial dari perspektif mahasiswa.",
    imageUrl: "/image/podcast.png",
    imageAlt: "Ilustrasi mikrofon podcast",
    reflectiveNarrative:
      "Saya menjadi host sekaligus editor podcast. Dari proses ini, saya banyak belajar tentang pentingnya flow dalam percakapan, memilih narasumber yang relevan, dan menyunting audio agar tetap enak didengar.",
    dataAiHint: "podcast-komunikasi",
  },
  {
    id: '3',
    title: "Majalah Digital Kampus",
    description: "Menyusun dan merancang majalah digital edisi khusus kegiatan kampus.",
    imageUrl: "/image/majalah-digital.jpg",
    imageAlt: "Cover majalah digital kampus",
    reflectiveNarrative:
      "Saya bertanggung jawab sebagai editor konten. Proyek ini mengasah kemampuan saya dalam menyunting artikel, menulis feature story, dan bekerja sama dengan tim desain untuk menghasilkan layout yang menarik.",
    dataAiHint: "majalah-komunikasi",
  },
  {
    id: '4',
    title: "Liputan Video Kegiatan Sosial",
    description: "Pembuatan video dokumenter kegiatan sosial di wilayah pinggiran kota.",
    imageUrl: "/image/liputan-video.jpg",
    imageAlt: "Cuplikan video kegiatan sosial",
    reflectiveNarrative:
      "Saya menjadi juru kamera sekaligus editor. Tantangannya adalah menangkap momen yang spontan namun tetap bercerita. Dari sini saya belajar storytelling visual dan teknik pengambilan gambar yang efektif.",
    dataAiHint: "liputan-komunikasi",
  },
  {
    id: '5',
    title: "Pelatihan Public Speaking untuk Remaja",
    description: "Menjadi fasilitator dalam pelatihan berbicara di depan umum bagi pelajar SMA.",
    imageUrl: "/image/public-speaking.jpg",
    imageAlt: "Remaja presentasi di depan kelas",
    reflectiveNarrative: 
      "Saya menyusun materi, memandu sesi, dan memberikan umpan balik secara langsung. Dari pengalaman ini, saya belajar bahwa menjadi komunikator bukan hanya soal berbicara, tapi juga mendengarkan dengan empati.",
    dataAiHint: "public-speaking-kom",
  },
  {
    id: '6',
    title: "Pembuatan Konten TikTok Edukatif",
    description: "Membuat video pendek bertema edukasi komunikasi untuk platform TikTok.",
    imageUrl: "/image/buat-konten.jpg",
    imageAlt: "Thumbnail konten TikTok",
    reflectiveNarrative:
      "Saya memproduksi konten dari ide hingga editing. Tantangannya adalah menyampaikan pesan yang bermakna dalam durasi singkat. Proyek ini membuat saya sadar pentingnya relevansi dan gaya bahasa yang sesuai dengan audiens muda.",
    dataAiHint: "konten-komunikasi",
  },
];


export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Email', url: 'https://mail.google.com/mail/?view=cm&to=kalycasalwa04@gmail.com', icon: Mail },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: Linkedin },
  { name: 'Instagram', url: 'https://instagram.com/kalycanss', icon: Instagram },
  { name: 'GitHub', url: 'https://github.com/kalycans', icon: Github },
  { name: 'WhatsApp', url: 'https://wa.me/085692424494', icon: MessageSquare }, // Replace with actual WhatsApp number
];

export const CV_DOWNLOAD_LINK = 'For_RereCantik.pdf'; // User should place their CV here
