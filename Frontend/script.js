
const form = document.getElementById('storyForm');
const loader = document.getElementById('loader');
const storyOutput = document.getElementById('storyOutput');
const resetBtn = document.getElementById('resetBtn');

form.addEventListener('submit', async function(e) {
  e.preventDefault();
  loader.classList.remove('hidden');
  storyOutput.textContent = '';

  const character = document.getElementById('characterName').value;
  const situation = document.getElementById('situation').value;
  const lines = document.getElementById('noOfLines').value;

  const response = await fetch('http://localhost:8000/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ character, situation, lines })
  });
  const data = await response.json();

  loader.classList.add('hidden');
  typeStory(data.story);
});

function typeStory(text) {
  let i = 0;
  storyOutput.textContent = '';
  const interval = setInterval(() => {
    storyOutput.textContent += text.charAt(i);
    i++;
    if (i > text.length) clearInterval(interval);
  }, 50);
}

resetBtn.addEventListener('click', () => {
  document.getElementById('characterName').value = '';
  document.getElementById('situation').value = '';
  document.getElementById('noOfLines').value = '';
  storyOutput.textContent = '';
});
