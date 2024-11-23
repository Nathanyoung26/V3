import { Observable } from '@nativescript/core';
import { Content, Playlist, Story, LearningPath } from '../models/content.model';

export class ContentService extends Observable {
    private contents: Map<string, Content> = new Map();
    private playlists: Map<string, Playlist> = new Map();
    private stories: Map<string, Story> = new Map();
    private learningPaths: Map<string, LearningPath> = new Map();

    constructor() {
        super();
        this.initializeDemoData();
    }

    private initializeDemoData(): void {
        // Initialize with some demo content
        // In a real app, this would fetch from an API
        const demoContent: Content = {
            id: '1',
            title: 'ABC Song',
            type: 'song',
            category: 'Educational',
            imageUrl: '~/assets/abc.png',
            duration: '2:30',
            ageRange: '2-4',
            language: 'English',
            educational: true
        };
        this.contents.set(demoContent.id, demoContent);
    }

    getContent(id: string): Content | undefined {
        return this.contents.get(id);
    }

    searchContent(query: string, filters: any = {}): Content[] {
        return Array.from(this.contents.values()).filter(content => {
            let matches = content.title.toLowerCase().includes(query.toLowerCase());
            
            if (filters.ageRange && content.ageRange !== filters.ageRange) {
                matches = false;
            }
            if (filters.type && content.type !== filters.type) {
                matches = false;
            }
            if (filters.educational && !content.educational) {
                matches = false;
            }

            return matches;
        });
    }

    createPlaylist(name: string): Playlist {
        const playlist: Playlist = {
            id: Date.now().toString(),
            playlistName: name,
            playlistImage: '~/assets/playlist.png',
            songCount: 0,
            contents: []
        };
        this.playlists.set(playlist.id, playlist);
        return playlist;
    }

    addToPlaylist(playlistId: string, contentId: string): boolean {
        const playlist = this.playlists.get(playlistId);
        const content = this.contents.get(contentId);
        
        if (playlist && content) {
            playlist.contents.push(content);
            playlist.songCount = playlist.contents.length;
            this.playlists.set(playlistId, playlist);
            return true;
        }
        return false;
    }

    getCustomizedStory(storyId: string, childName: string): Story | undefined {
        const story = this.stories.get(storyId);
        if (story) {
            return {
                ...story,
                content: story.content.replace('[name]', childName),
                isCustomized: true,
                childName
            };
        }
        return undefined;
    }

    getLearningPath(ageRange: string): LearningPath | undefined {
        return Array.from(this.learningPaths.values())
            .find(path => path.activities.some(activity => 
                activity.ageRange === ageRange
            ));
    }
}