import { Observable } from '@nativescript/core';
import { TNSPlayer } from '@nativescript/audio';

export class AudioService extends Observable {
    private player: TNSPlayer;
    private _isPlaying: boolean = false;
    private _currentTime: number = 0;
    private _duration: number = 0;

    constructor() {
        super();
        this.player = new TNSPlayer();
        this.player.debug = false;
    }

    async initFromFile(audioPath: string): Promise<void> {
        await this.player.initFromFile({
            audioFile: audioPath,
            loop: false,
            completeCallback: () => {
                this._isPlaying = false;
                this.notify({ object: this, eventName: 'playbackComplete' });
            },
            errorCallback: (error) => {
                console.error('Audio error:', error);
            }
        });
    }

    async play(): Promise<void> {
        if (!this._isPlaying) {
            await this.player.play();
            this._isPlaying = true;
            this.startTimeTracking();
        }
    }

    async pause(): Promise<void> {
        if (this._isPlaying) {
            await this.player.pause();
            this._isPlaying = false;
        }
    }

    async seekTo(time: number): Promise<void> {
        await this.player.seekTo(time);
        this._currentTime = time;
    }

    private startTimeTracking(): void {
        setInterval(() => {
            if (this._isPlaying) {
                this._currentTime = this.player.currentTime;
                this._duration = this.player.duration;
                this.notify({
                    object: this,
                    eventName: 'timeUpdate',
                    data: {
                        currentTime: this._currentTime,
                        duration: this._duration
                    }
                });
            }
        }, 1000);
    }

    get isPlaying(): boolean {
        return this._isPlaying;
    }

    get currentTime(): number {
        return this._currentTime;
    }

    get duration(): number {
        return this._duration;
    }

    dispose(): void {
        this.player.dispose();
    }
}