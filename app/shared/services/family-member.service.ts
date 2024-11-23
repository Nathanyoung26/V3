import { Observable } from '@nativescript/core';
import { LocalNotifications } from '@nativescript/local-notifications';

export interface FamilyMember {
    id: string;
    name: string;
    role: 'child' | 'parent' | 'guardian';
    photo: string;
    voiceRecording?: string;
    canNarrate?: boolean;
    ageRange?: string;
}

export class FamilyMemberService extends Observable {
    private members: Map<string, FamilyMember> = new Map();

    async showAddMemberDialog(): Promise<FamilyMember | null> {
        // In a real app, this would show a modal dialog
        // For demo, return a mock family member
        return {
            id: Date.now().toString(),
            name: 'New Member',
            role: 'child',
            photo: '~/assets/default-avatar.png',
            canNarrate: false
        };
    }

    async saveFamilyMembers(members: FamilyMember[]): Promise<void> {
        members.forEach(member => {
            this.members.set(member.id, member);
        });
        // In a real app, this would save to a backend or local storage
    }

    getFamilyMember(id: string): FamilyMember | undefined {
        return this.members.get(id);
    }

    getAllFamilyMembers(): FamilyMember[] {
        return Array.from(this.members.values());
    }

    getNarrators(): FamilyMember[] {
        return Array.from(this.members.values())
            .filter(member => member.canNarrate);
    }

    async updateVoiceRecording(memberId: string, recordingPath: string): Promise<void> {
        const member = this.members.get(memberId);
        if (member) {
            member.voiceRecording = recordingPath;
            this.members.set(memberId, member);
        }
    }
}