# Teacher Soundboard 🎵

A simple, keyboard-controlled soundboard designed for teachers to use during classroom activities.

## Features

- 9 different classroom sounds mapped to keyboard keys 1-9
- Click buttons or use keyboard shortcuts
- Modern, responsive design
- Stop all sounds functionality
- No external dependencies - works offline

## Usage

1. Open `index.html` in your web browser
2. Click the buttons or press keys 1-9 to play sounds
3. Use "Stop All Sounds" to silence everything

### Keyboard Shortcuts

- **1** - Jeopardy Theme
- **2** - Applause
- **3** - Correct Answer
- **4** - Wrong Answer
- **5** - Drumroll
- **6** - School Bell
- **7** - Whistle
- **8** - Ta-da!
- **9** - Timer Beep

## Development

```bash
npm install
npm start
```

This will start a local server at http://localhost:3000

## Audio Sources

**Note**: You need to add the following audio files to the `audio/` directory:

### Required Audio Files:
- `jeopardy.mp3` - Jeopardy theme music
- `applause.mp3` - Applause sound effect
- `correct.mp3` - Correct answer sound (ding/chime)
- `wrong.mp3` - Wrong answer sound (buzzer)
- `drumroll.mp3` - Drumroll sound effect
- `bell.mp3` - School bell sound
- `whistle.mp3` - Whistle sound
- `tada.mp3` - Ta-da celebration sound
- `timer.mp3` - Timer beep sound

### Suggested Sources for Audio Files:

1. **Freesound.org** (Creative Commons licensed)
   - https://freesound.org/search/?q=jeopardy+theme
   - https://freesound.org/search/?q=applause
   - https://freesound.org/search/?q=correct+answer+ding
   - https://freesound.org/search/?q=wrong+buzzer
   - https://freesound.org/search/?q=drumroll
   - https://freesound.org/search/?q=school+bell
   - https://freesound.org/search/?q=whistle
   - https://freesound.org/search/?q=tada+celebration
   - https://freesound.org/search/?q=timer+beep

2. **Zapsplat.com** (Free with registration)
   - High-quality sound effects for educational use

3. **YouTube Audio Library** (Royalty-free)
   - https://www.youtube.com/audiolibrary

4. **BBC Sound Effects Library** (Free for educational use)
   - https://sound-effects.bbcrewind.co.uk/

### License Notes:
- Ensure any audio files you download are licensed for your intended use
- For classroom use, most Creative Commons and educational licenses should be appropriate
- Keep track of attribution requirements for any sounds you use

## Deployment

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

## File Structure

```
teacher-soundboard/
├── index.html          # Main HTML file
├── style.css           # Styling
├── script.js           # JavaScript functionality
├── package.json        # NPM configuration
├── audio/              # Audio files directory
│   ├── jeopardy.mp3
│   ├── applause.mp3
│   ├── correct.mp3
│   ├── wrong.mp3
│   ├── drumroll.mp3
│   ├── bell.mp3
│   ├── whistle.mp3
│   ├── tada.mp3
│   └── timer.mp3
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Pages deployment
```

## Browser Compatibility

Works in all modern browsers that support:
- HTML5 Audio API
- ES6 Classes
- CSS Grid

## License

MIT License - Feel free to use and modify for educational purposes.