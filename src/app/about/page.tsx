import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const skills = [
  "Public Speaking", "Strategic & Interpersonal Communication", 
  "Leadership Communication", "Community Engagement"
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">About Me</h1>
      </header>

      <div className="space-y-12">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent>
            <br />
            <p className="text-foreground/90 leading-relaxed text-balance">
              Saya adalah mahasiswa Ilmu Komunikasi yang memiliki ketertarikan tinggi terhadap kegiatan sosial dan pemberdayaan masyarakat. Sejak lama, saya menyadari bahwa dunia sosial memberi ruang bagi saya untuk tumbuh sebagai pribadi yang komunikatif, aktif, dan peduli terhadap lingkungan sekitar. Sebagai individu yang ekstrovert, saya menemukan energi terbesar saya justru ketika berinteraksi langsung dengan masyarakat, mendengar cerita mereka, memahami kebutuhan mereka, dan mencari solusi melalui komunikasi yang menyentuh dan bermakna.
            </p>
            <br />
            <p className="text-foreground/90 leading-relaxed text-balance">
              Keterlibatan saya dalam berbagai program sosial, organisasi, dan kegiatan kampus bukan hanya bentuk kontribusi, tetapi juga ruang belajar untuk terus berkembang. Bagi saya, komunikasi bukan sekadar menyampaikan pesan, melainkan membangun hubungan, menjembatani perbedaan, dan menciptakan dampak nyata. Melalui website ini, saya ingin merekam dan membagikan perjalanan saya sebagai seorang mahasiswa yang berusaha untuk tetap relevan, adaptif, dan penuh semangat dalam menghidupkan nilai-nilai Komunikasi, Kolaborasi, dan Kontribusi nyata untuk bangsa.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Communication Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center space-x-2 text-foreground/90">
                  <CheckCircle className="h-5 w-5 text-accent-foreground flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
