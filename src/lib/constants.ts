import type { NavItem, Project, SocialLink } from '@/types'
import { Mail, Instagram, MessageSquare } from 'lucide-react'

export const NAV_ITEMS: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About Me', href: '/about' },
  { title: 'Projects', href: '/projects' },
  { title: 'Contact', href: '/contact' },
]

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: "Asisten Dosen - Agama Islam",
    description: "Saya dipercaya menjadi asisten dosen dalam mata kuliah Pendidikan Agama Islam.",
    imageUrl: "/image/asdos-rere.jpg",
    imageAlt: "Poster Asisten Dosen",
    reflectiveNarrative:
      "Dalam peran ini, saya membantu rekapitulasi nilai, membimbing mahasiswa tingkat bawah dalam proses belajar, serta terlibat aktif dalam kegiatan sosial seperti kajian dan diskusi keagamaan. Peran ini memberi saya pemahaman mendalam tentang tanggung jawab akademik sekaligus memperkuat nilai-nilai spiritual dalam komunikasi sehari-hari.",
    dataAiHint: "Asisten Dosen",
  },
  {
    id: '2',
    title: "News Anchor - Magang di Untirta TV",
    description: "Dalam program magang di Untirta TV, saya berperan sebagai news anchor.",
    imageUrl: "/image/asdos-rere.jpg",
    youtubeEmbedUrl: "https://www.youtube.com/embed/0nT1ByA_vv8", 
    imageAlt: "Video Magang Untirta TV",
    reflectiveNarrative:
      "Dalam program magang di Untirta TV, saya berperan sebagai news anchor yang membawakan berita terbaru secara langsung di platform YouTube nya Untirta TV. Pengalaman ini memperluas wawasan saya di bidang jurnalistik dan media siar, sekaligus mengasah kemampuan public speaking, penampilan di depan kamera, dan penulisan naskah berita secara profesional.",
    dataAiHint: "News Anchor",
  },
  {
    id: '3',
    title: "Volunteer - Desa Energi Berdikari Sobat Bumi",
    description: "Saya terlibat sebagai volunteer dalam program Desa Energi Berdikari yang diselenggarakan oleh para penerima Beasiswa Sobat Bumi Pertamina Foundation.",
    imageUrl: "/image/rere-relawan.jpeg",
    imageAlt: "Kegiatan relawan Sobat Bumi",
    reflectiveNarrative:
      "Program ini berfokus pada pembangunan desa berbasis energi bersih dan terbarukan serta pemberdayaan masyarakat sebagai bagian dari upaya pencapaian tujuan SDGs (Sustainable Development Goals). Dalam peran ini, saya turun langsung ke masyarakat, membantu pelaksanaan program, serta berinteraksi dengan warga desa untuk mendukung penerapan solusi berkelanjutan. Pengalaman ini mengajarkan saya tentang pentingnya komunikasi lapangan yang empatik, kolaboratif, dan berorientasi pada perubahan nyata.",
    dataAiHint: "Volunteer",
  },
  {
    id: '4',
    title: "Kepala Departemen Pengabdian Masyarakat - HIMA Ilmu Komunikasi",
    description: "Sebagai Kepala Departemen Pengabdian Masyarakat di HIMA Ilmu Komunikasi",
    imageUrl: "/image/himakom-rere.jpeg", 
    imageAlt: "Remaja presentasi di depan kelas",
    reflectiveNarrative:
      "Saya memegang keputusan strategis terkait bentuk kegiatan, menyusun rencana kerja, serta mengoordinasikan tim pelaksana dalam menjalankan kegiatan sosial yang berdampak. Peran ini menantang sekaligus memperkuat kemampuan saya dalam kepemimpinan, manajemen program, dan komunikasi lintas struktur organisasi.",
    dataAiHint: "Himpunan Mahasiswa Ilmu Komunikasi",
  },
  {
    id: '5',
    title: "Humas & Tiketing - The Power of Communication",
    description: "Humas sekaligus penanggung jawab Tiketing di acara tahunan HiMaKom.",
    imageUrl: "/image/depoc-rere1.jpg",
    imageAlt: "The Power of Communication (2023)",
    reflectiveNarrative:
      "Sebagai Kepala Departemen Pengabdian Masyarakat di Himpunan Mahasiswa Ilmu Komunikasi, saya bertanggung jawab atas arah dan pelaksanaan seluruh program pengabdian. Saya memegang keputusan strategis terkait bentuk kegiatan, menyusun rencana kerja, serta mengoordinasikan tim pelaksana dalam menjalankan kegiatan sosial yang berdampak. Peran ini menantang sekaligus memperkuat kemampuan saya dalam kepemimpinan, manajemen program, dan komunikasi lintas struktur organisasi.",
    dataAiHint: "Humas & Tiketing",
  },
  {
    id: '6',
    title: "KOMEDI (Komunikasi Mengabdi)",
    description: "Sebagai ketua pelaksana acara KOMEDI, saya memimpin seluruh proses perencanaan hingga pelaksanaan kegiatan pengabdian masyarakat yang melibatkan mahasiswa Ilmu Komunikasi. ",
    imageUrl: "public/image/depoc-rere1.jpg",
    imageAlt: "The Power of Communication (2023)",
    reflectiveNarrative:
      "Saya bertanggung jawab atas koordinasi tim, alur kegiatan, dan keberhasilan acara secara keseluruhan. Pengalaman ini membentuk kepemimpinan saya dalam konteks nyata dan memperkuat semangat kolaboratif untuk menciptakan program yang berdampak langsung pada masyarakat.",
    dataAiHint: "KOMEDI ",
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Email', url: 'https://mail.google.com/mail/?view=cm&to=renastasyap@gmail.com', icon: Mail },
  { name: 'Instagram', url: 'https://instagram.com/nstsyaptrii_', icon: Instagram },
  { name: 'WhatsApp', url: 'https://wa.me/6285716569714', icon: MessageSquare },
]

export const CV_DOWNLOAD_LINK = '/CV_RenasTasyaPutri.pdf'
