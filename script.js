class TeacherSoundboard {
    constructor() {
        this.sounds = {};
        this.currentlyPlaying = [];
        this.init();
    }

    init() {
        this.loadSounds();
        this.setupEventListeners();
    }

    loadSounds() {
        const soundFiles = {
            'jeopardy': 'audio/jeopardy.mp3',
            'applause': 'audio/applause.mp3',
            'correct': 'audio/correct.mp3',
            'wrong': 'audio/wrong.mp3',
            'drumroll': 'audio/drumroll.mp3',
            'bell': 'audio/bell.mp3',
            'whistle': 'audio/whistle.mp3',
            'tada': 'audio/tada.mp3',
            'timer': 'audio/timer.mp3'
        };

        Object.keys(soundFiles).forEach(key => {
            this.sounds[key] = new Audio(soundFiles[key]);
            this.sounds[key].preload = 'auto';
        });
    }

    setupEventListeners() {
        // Button clicks
        document.querySelectorAll('.sound-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const soundKey = btn.dataset.sound;
                this.playSound(soundKey, btn);
            });
        });

        // Keyboard events
        document.addEventListener('keydown', (e) => {
            const key = e.key;
            if (key >= '1' && key <= '9') {
                const btn = document.querySelector(`[data-key="${key}"]`);
                if (btn) {
                    const soundKey = btn.dataset.sound;
                    this.playSound(soundKey, btn);
                }
            } else {
                this.stopAllSounds();
            }
        });

        // Stop all button
        document.getElementById('stopAll').addEventListener('click', () => {
            this.stopAllSounds();
        });
    }

    playSound(soundKey, buttonElement) {
        if (this.sounds[soundKey]) {
            // Stop the sound if it's already playing
            this.sounds[soundKey].currentTime = 0;
            
            // Play the sound
            this.sounds[soundKey].play().catch(e => {
                console.warn(`Could not play sound ${soundKey}:`, e.message);
            });

            // Visual feedback
            buttonElement.classList.add('playing');
            this.currentlyPlaying.push(this.sounds[soundKey]);

            // Remove visual feedback when sound ends
            this.sounds[soundKey].addEventListener('ended', () => {
                buttonElement.classList.remove('playing');
                this.currentlyPlaying = this.currentlyPlaying.filter(s => s !== this.sounds[soundKey]);
            });

            // Remove visual feedback after 300ms for short sounds
            setTimeout(() => {
                buttonElement.classList.remove('playing');
            }, 300);
        }
    }

    stopAllSounds() {
        Object.values(this.sounds).forEach(sound => {
            sound.pause();
            sound.currentTime = 0;
        });
        
        document.querySelectorAll('.sound-btn').forEach(btn => {
            btn.classList.remove('playing');
        });
        
        this.currentlyPlaying = [];
    }
}

// Initialize the soundboard when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new TeacherSoundboard();
});