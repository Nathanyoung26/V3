import LiveVideos from '../components/LiveVideos';
import TrendingTopics from '../components/TrendingTopics';
import ParentingTips from '../components/ParentingTips';

export default function CommunityPage() {
  return (
    <div className="p-4 pb-20">
      <LiveVideos />
      <TrendingTopics />
      <ParentingTips />
    </div>
  );
}