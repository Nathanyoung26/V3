import ContinueListening from '../components/ContinueListening';
import DailyStory from '../components/DailyStory';
import LearningSongs from '../components/LearningSongs';
import AIContentSection from '../components/AIContentSection';

const aiGeneratedContent = {
  songs: [
    {
      title: "Bedtime in the Stars",
      description: "AI-composed lullaby with gentle melodies and soothing space themes",
      image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=400&auto=format&fit=crop&q=60",
      type: "song" as const,
      duration: "3:15"
    },
    {
      title: "Colors of the Rainbow",
      description: "Interactive song teaching colors through playful melodies",
      image: "https://images.unsplash.com/photo-1507908708918-778587c9e563?w=400&auto=format&fit=crop&q=60",
      type: "song" as const,
      duration: "2:45"
    },
    {
      title: "Animal Friends Adventure",
      description: "Learn about animals through fun, catchy tunes",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&auto=format&fit=crop&q=60",
      type: "song" as const,
      duration: "3:30"
    }
  ],
  stories: [
    {
      title: "The Magic Garden",
      description: "An interactive story about friendship and growing together",
      image: "https://images.unsplash.com/photo-1581985673473-0784a7a44e39?w=400&auto=format&fit=crop&q=60",
      type: "story" as const,
      duration: "5 mins"
    },
    {
      title: "Space Explorer Sarah",
      description: "Join Sarah on her journey through the solar system",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&auto=format&fit=crop&q=60",
      type: "story" as const,
      duration: "7 mins"
    },
    {
      title: "The Friendly Dragon",
      description: "A heartwarming tale about overcoming fears",
      image: "https://images.unsplash.com/photo-1599689018034-48e2ead82951?w=400&auto=format&fit=crop&q=60",
      type: "story" as const,
      duration: "6 mins"
    }
  ],
  videos: [
    {
      title: "Dance & Learn: Numbers",
      description: "Interactive dance video teaching numbers 1-10",
      image: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=400&auto=format&fit=crop&q=60",
      type: "video" as const,
      duration: "4:30"
    },
    {
      title: "Alphabet Adventures",
      description: "Fun animations and songs for learning the alphabet",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&auto=format&fit=crop&q=60",
      type: "video" as const,
      duration: "5:15"
    },
    {
      title: "Shapes in Nature",
      description: "Discover shapes in the world around us",
      image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=400&auto=format&fit=crop&q=60",
      type: "video" as const,
      duration: "3:45"
    }
  ]
};

export default function HomePage() {
  return (
    <div className="pb-16 px-4">
      <ContinueListening />
      <DailyStory />
      <LearningSongs />
      
      <AIContentSection
        title="AI-Generated Songs"
        description="Personalized melodies created just for your little ones"
        items={aiGeneratedContent.songs}
      />
      
      <AIContentSection
        title="AI-Generated Stories"
        description="Unique stories that adapt to your child's interests"
        items={aiGeneratedContent.stories}
      />
      
      <AIContentSection
        title="Interactive Learning Videos"
        description="AI-powered videos that make learning fun"
        items={aiGeneratedContent.videos}
      />
    </div>
  );
}