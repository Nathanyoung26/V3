import { SparklesIcon } from '@heroicons/react/24/solid';
import RecommendationCard from './RecommendationCard';

interface AIContentSectionProps {
  title: string;
  description?: string;
  items: {
    title: string;
    description: string;
    image: string;
    type: 'song' | 'story' | 'video';
    duration?: string;
  }[];
}

export default function AIContentSection({ title, description, items }: AIContentSectionProps) {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <SparklesIcon className="w-5 h-5 text-purple-500" />
      </div>
      {description && (
        <p className="text-zinc-400 text-sm mb-4">{description}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <RecommendationCard 
            key={index}
            {...item}
            aiGenerated={true}
          />
        ))}
      </div>
    </section>
  );
}