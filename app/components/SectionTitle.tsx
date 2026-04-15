import { ScrollSection } from "./ScrollSection";

export function SectionTitle({ title }: { title: string }) {
  return (
    <div className="reveal-item mb-12">
      <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl">{title}</h2>
      <div className="section-line mt-4 h-1.5 w-24 rounded-full bg-gray-400" />
    </div>
  );
}
