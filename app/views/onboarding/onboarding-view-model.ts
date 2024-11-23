import { Observable } from '@nativescript/core';
import { AudioService } from '../../shared/services/audio.service';

export class OnboardingViewModel extends Observable {
    private audioService: AudioService;
    private _currentStep = 1;
    private _isRecording = false;
    private _hasRecording = false;
    private _recordingStatus = '';
    private _familyMembers = [];
    private _poemText = "Twinkle, twinkle, little star\nHow I wonder what you are\nUp above the world so high\nLike a diamond in the sky";

    constructor() {
        super();
        this.audioService = new AudioService();
        this._familyMembers = [];
    }

    get currentStep(): number {
        return this._currentStep;
    }

    get isRecording(): boolean {
        return this._isRecording;
    }

    get hasRecording(): boolean {
        return this._hasRecording;
    }

    get recordingStatus(): string {
        return this._recordingStatus;
    }

    get familyMembers(): any[] {
        return this._familyMembers;
    }

    get poemText(): string {
        return this._poemText;
    }

    onAddMember() {
        // Add new family member
        this._familyMembers.push({
            name: "New Member",
            role: "Child",
            photo: "~/assets/default-avatar.png",
            canNarrate: true
        });
        this.notifyPropertyChange('familyMembers', this._familyMembers);
    }

    onRemoveMember(args) {
        const index = this._familyMembers.indexOf(args.object.bindingContext);
        if (index > -1) {
            this._familyMembers.splice(index, 1);
            this.notifyPropertyChange('familyMembers', this._familyMembers);
        }
    }

    async onToggleRecording() {
        if (!this._isRecording) {
            // Start recording
            this._isRecording = true;
            this._recordingStatus = 'Recording in progress...';
            // Start 15-second timer
            setTimeout(() => {
                this.stopRecording();
            }, 15000);
        } else {
            await this.stopRecording();
        }
        this.notifyPropertyChange('isRecording', this._isRecording);
        this.notifyPropertyChange('recordingStatus', this._recordingStatus);
    }

    private async stopRecording() {
        this._isRecording = false;
        this._hasRecording = true;
        this._recordingStatus = 'Recording completed!';
        this.notifyPropertyChange('hasRecording', this._hasRecording);
    }

    async onPlayRecording() {
        if (this._hasRecording) {
            this._recordingStatus = 'Playing recording...';
            this.notifyPropertyChange('recordingStatus', this._recordingStatus);
            
            // Simulate playback
            setTimeout(() => {
                this._recordingStatus = '';
                this.notifyPropertyChange('recordingStatus', this._recordingStatus);
            }, 3000);
        }
    }

    onNextStep() {
        if (this._currentStep < 3) {
            this._currentStep++;
            this.notifyPropertyChange('currentStep', this._currentStep);
        }
    }

    onPreviousStep() {
        if (this._currentStep > 1) {
            this._currentStep--;
            this.notifyPropertyChange('currentStep', this._currentStep);
        }
    }

    onCompleteSetup() {
        // Handle completion and navigation to main app
        console.log('Setup completed');
    }
}