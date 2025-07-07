// Store quotes in localStorage if not already present
const quotesByMood = {
    sad: [
        "Tears come from the heart and not from the brain.",
        "Every human walks around with a certain kind of sadness.",
        "Sadness flies away on the wings of time.",
        "The word 'happy' would lose its meaning if it were not balanced by sadness.",
        "Sometimes, you have to know sadness to appreciate happiness.",
        "Behind every sweet smile, there is a bitter sadness that no one can ever see and feel."
    ],
    good: [
        "Every day may not be good, but there is something good in every day.",
        "Good things take time.",
        "Do good and good will come to you.",
        "Wherever there is a human being, there is an opportunity for kindness.",
        "Goodness is the only investment that never fails.",
        "Be the reason someone believes in the goodness of people."
    ],
    motivational: [
        "The best way to get started is to quit talking and begin doing.",
        "Don’t let yesterday take up too much of today.",
        "It’s not whether you get knocked down, it’s whether you get up.",
        "If you are working on something exciting, it will keep you motivated.",
        "Success is not in what you have, but who you are.",
        "Push yourself, because no one else is going to do it for you."
    ],
    romantic: [
        "Love is composed of a single soul inhabiting two bodies.",
        "You are the source of my joy, the center of my world and the whole of my heart.",
        "Every love story is beautiful, but ours is my favorite.",
        "I love you not only for what you are, but for what I am when I am with you.",
        "You are my today and all of my tomorrows.",
        "I have found the one whom my soul loves."
    ]
};

if (!localStorage.getItem('quotesByMood')) {
    localStorage.setItem('quotesByMood', JSON.stringify(quotesByMood));
}

document.getElementById('quoteButton').addEventListener('click', function() {
    const mood = document.getElementById('moodSelect').value;
    if (!mood) {
        alert('Please select a mood!');
        return;
    }
    localStorage.setItem('selectedMood', mood);
    window.location.href = 'quotes.html';
});
