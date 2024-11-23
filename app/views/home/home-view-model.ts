import { Observable } from '@nativescript/core';

export class HomeViewModel extends Observable {
    private _recentlyPlayed = [
        {
            title: "Twinkle Twinkle",
            subtitle: "Bedtime Songs",
            imageUrl: "~/assets/twinkle.png"
        },
        {
            title: "ABC's Adventure",
            subtitle: "Learning Time",
            imageUrl: "~/assets/abc.png"
        }
    ];

    private _dailyStory = {
        title: "The Friendly Dragon",
        description: "Join Alex on a magical adventure with a dragon who loves to sing!"
    };

    private _learningPlaylists = [
        {
            title: "Colors & Shapes",
            category: "Educational",
            imageUrl: "~/assets/colors.png"
        },
        {
            title: "Animal Sounds",
            category: "Interactive",
            imageUrl: "~/assets/animals.png"
        }
    ];

    constructor() {
        super();
    }

    get recentlyPlayed() {
        return this._recentlyPlayed;
    }

    get dailyStory() {
        return this._dailyStory;
    }

    get learningPlaylists() {
        return this._learningPlaylists;
    }

    onStoryTap() {
        // Handle story tap
        console.log("Story tapped");
    }
}