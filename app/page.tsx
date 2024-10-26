import FileUploader from '@/components/FileUploader';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        File Upload Demo
      </h1>
      <FileUploader />
      <Toaster />
    </main>
  );
}