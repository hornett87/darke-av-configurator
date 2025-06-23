// List your section HTML files here in the order you want them to appear.
// For multiple standard rooms, you can duplicate 'standard-room-section.html' with different legends if you wish.
const sections = [
  'cinema-section.html',
  'pool-section.html',
  'gym-section.html',
  'external-area-section.html',
  // Add more standard rooms as needed:
  'standard-room-section.html', // e.g. Living Room
  // 'standard-room-section.html', // e.g. Bedroom 1
  // 'standard-room-section.html', // etc.
];

window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('smart-home-options');
  Promise.all(
    sections.map(section =>
      fetch(section).then(res => res.text())
    )
  ).then(htmlBlocks => {
    htmlBlocks.forEach((block, idx) => {
      // Optionally, replace the legend for each standard room
      if (sections[idx] === 'standard-room-section.html') {
        // For example, auto-number standard rooms (Living Room, Bedroom 1, etc.)
        let roomName = 'Standard Room';
        if (idx === 4) roomName = 'Living Room';
        if (idx === 5) roomName = 'Bedroom 1';
        if (idx === 6) roomName = 'Bedroom 2';
        block = block.replace('<legend>Standard Room (e.g. Living, Kitchen, Bedroom, Dining, etc.)</legend>', `<legend>${roomName}</legend>`);
      }
      form.insertAdjacentHTML('beforeend', block);
    });
  });

  // Optional: Display selected options on submit
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = new FormData(form);
    let output = '<h2>Selected Options:</h2><ul>';
    for (const [key, value] of data.entries()) {
      output += `<li><strong>${key}:</strong> ${value}</li>`;
    }
    output += '</ul>';
    // Remove any previous output
    document.querySelectorAll('.results-output').forEach(el => el.remove());
    const div = document.createElement('div');
    div.className = 'results-output';
    div.innerHTML = output;
    form.parentNode.insertBefore(div, form.nextSibling);
    window.scrollTo({top: div.offsetTop, behavior: "smooth"});
  });
});
