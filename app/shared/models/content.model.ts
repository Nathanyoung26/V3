export interface Content {
    id: string;
    title: string;
    type: 'song' | 'story' | 'activity';
    category: string;
    imageUrl: string;
    duration?: string;
    ageRange?: string;
    language?: string;
    educational?: boolean;
}

export interface Playlist {
    id: string;
    playlistName: string;
    playlistImage: string;
    songCount: number;
    contents: Content[];
}

export interface Story {
    id: string;
    storyTitle: string;
    category: string;
    duration: string;
    content: string;
    isCustomized: boolean;
    childName?: string;
}

export interface LearningPath {
    id: string;
    title: string;
    description: string;
    progress: number;
    activities: Content[];
}

export interface ParentingTip {
    id: string;
    title: string;
    description: string;
    category: string;
}

export interface Creator {
    id: string;
    creatorName: string;
    creatorImage: string;
    specialty: string;
    content: Content[];
}