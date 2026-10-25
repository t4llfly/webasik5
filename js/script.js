document.addEventListener('DOMContentLoaded', () => {
    // TASK 6
    let count = 0;
    const counterValue = document.getElementById('counterValue');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const resetBtn = document.getElementById('resetBtn');

    function updateCounter(newValue) {
        if (newValue < 0) {
            count = 0;
        } else {
            count = newValue;
        }
        counterValue.textContent = count;
    }

    increaseBtn.addEventListener('click', () => updateCounter(count + 1));
    decreaseBtn.addEventListener('click', () => updateCounter(count - 1));
    resetBtn.addEventListener('click', () => updateCounter(0));


    // TASK 7
    const textInput = document.getElementById('textInput');
    const previewOutput = document.getElementById('previewOutput');
    const charCount = document.getElementById('charCount');
    const clearBtn = document.getElementById('clearBtn');
    const defaultPlaceholder = 'Your text will appear here';

    textInput.addEventListener('input', () => {
        const text = textInput.value;
        charCount.textContent = `Characters: ${text.length}`;

        if (text.trim().length === 0) {
            previewOutput.textContent = defaultPlaceholder;
        } else {
            previewOutput.textContent = text;
        }
    });

    clearBtn.addEventListener('click', () => {
        textInput.value = '';
        previewOutput.textContent = defaultPlaceholder;
        charCount.textContent = 'Characters: 0';
        textInput.focus();
    });


    // TASK 8
    const imageSelect = document.getElementById('imageSelect');
    const displayImage = document.getElementById('displayImage');
    const imageCaption = document.getElementById('imageCaption');

    const imageMap = {
        sad: {
            src: 'images/image1.jpg',
            alt: 'sad brochacho',
            caption: 'idk thats funny'
        },
        kobo: {
            src: 'images/image2.jpg',
            alt: 'kobo',
            caption: 'from my friend'
        },
        weak: {
            src: 'images/image3.jpg',
            alt: 'roman clip that',
            caption: 'roman clip that'
        }
    };

    imageSelect.addEventListener('change', () => {
        const selected = imageMap[imageSelect.value];
        if (selected) {
            displayImage.src = selected.src;
            displayImage.alt = selected.alt;
            displayImage.width = 150;
            displayImage.height = 150;
            imageCaption.textContent = selected.caption;
        }
    });


    // TASK 9
    const keyForm = document.getElementById('keyForm');
    const keyboardInput = document.getElementById('keyboardInput');
    const keyDisplay = document.getElementById('keyDisplay');
    const committedResult = document.getElementById('committedResult');

    keyForm.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    keyboardInput.addEventListener('keydown', (event) => {
        keyDisplay.textContent = event.key === ' ' ? 'Space' : event.key;

        if (event.key === 'Enter') {
            event.preventDefault();
            const val = keyboardInput.value.trim();
            if (val.length > 0) {
                committedResult.textContent = val;
            } else {
                committedResult.textContent = '[Empty value not committed]';
            }
        } else if (event.key === 'Escape') {
            keyboardInput.value = '';
            committedResult.textContent = '[Cleared]';
            keyDisplay.textContent = 'Escape';
        }
    });


    // TASK 10
    const interactiveCard = document.getElementById('interactiveCard');
    const instructionText = document.getElementById('instructionText');
    const eventSource = document.getElementById('eventSource');

    function activate(eventName) {
        interactiveCard.classList.add('highlight');
        instructionText.textContent = 'Card is active! (Highlighted)';
        eventSource.textContent = eventName;
    }

    function deactivate(eventName) {
        interactiveCard.classList.remove('highlight');
        instructionText.textContent = 'Hover mouse over card or press Tab to focus.';
        eventSource.textContent = eventName;
    }

    interactiveCard.addEventListener('mouseenter', () => activate('mouseenter (Mouse hover)'));
    interactiveCard.addEventListener('mouseleave', () => deactivate('mouseleave (Mouse leave)'));

    interactiveCard.addEventListener('focus', () => activate('focus (Keyboard Tab)'));
    interactiveCard.addEventListener('blur', () => deactivate('blur (Keyboard unfocused)'));
});
