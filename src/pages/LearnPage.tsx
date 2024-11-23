import LearningTopics from '../components/LearningTopics';
import LanguageLessons from '../components/LanguageLessons';
import InteractiveExercises from '../components/InteractiveExercises';
import DailyProgress from '../components/DailyProgress';
import AIContentSection from '../components/AIContentSection';

const aiLearningContent = {
  languageLessons: [
    {
      title: "Spanish Adventure",
      description: "Learn basic Spanish words through interactive stories",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&auto=format&fit=crop&q=60",
      type: "video" as const,
      duration: "5:00"
    },
    {
      title: "French for Kids",
      description: "Fun French phrases with music and animation",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&auto=format&fit=crop&q=60",
      type: "video" as const,
      duration: "4:30"
    },
    {
      title: "Mandarin Stories",
      description: "Learn Mandarin through engaging tales",
      image: "https://images.unsplash.com/photo-1533062618053-d51e617307ec?w=400&auto=format&fit=crop&q=60",
      type: "video" as const,
      duration: "6:00"
    }
  ],
  mathLessons: [
    {
      title: "Counting with Animals",
      description: "Learn numbers 1-10 with friendly animals",
      image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=400&auto=format&fit=crop&q=60",
      type: "video" as const,
      duration: "4:15"
    },
    {
      title: "Shape Adventures",
      description: "Discover shapes in everyday objects",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&auto=format&fit=crop&q=60",
      type: "video" as const,
      duration: "3:45"
    },
    {
      title: "Pattern Play",
      description: "Learn patterns through music and games",
      image: "https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?w=400&auto=format&fit=crop&q=60",
      type: "video" as const,
      duration: "5:30"
    }
  ]
};

export default function LearnPage() {
  return (
    <div className="p-4 pb-20">
      <DailyProgress />
      <div className="mb-8">
        <LearningTopics />
      </div>
      <LanguageLessons />
      <InteractiveExercises />
      
      <AIContentSection
        title="AI Language Lessons"
        description="Personalized language learning experiences"
        items={aiLearningContent.languageLessons}
      />
      
      <AIContentSection
        title="Math Made Fun"
        description="Interactive math lessons adapted to your child's level"
        items={aiLearningContent.mathLessons}
      />
    </div>
  );
}