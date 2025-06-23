// List your static specialty section files here
const sections = [
  'cinema-section.html',
  'pool-section.html',
  'gym-section.html',
  'external-area-section.html'
];

window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('smart-home-options');
  const dynamicRoomsContainer = document.getElementById('dynamic-rooms-container');
  const addRoomBtn = document.getElementById('add-room-btn');

  // Load specialty (fixed) sections
  Promise.all(
    sections.map(section =>
      fetch(section).then(res => res.text())
    )
  ).then(htmlBlocks => {
    htmlBlocks.forEach(block => {
      form.insertAdjacentHTML('afterbegin', block);
    });
  });

  // Add the first room section by default
  addRoomSection();

  addRoomBtn.addEventListener('click', addRoomSection);

  function addRoomSection() {
    fetch('standard-room-section.html')
      .then(res => res.text())
      .then(block => {
        // Ensure every room fieldset has a unique legend/title
        const roomNumber = dynamicRoomsContainer.children.length + 1;
        block = block.replace(
          '<legend>Room Options</legend>',
          `<legend>Room ${roomNumber} Options</legend>`
        );
        // Create a wrapper div so we can support easy removal if needed
        const div = document.createElement('div');
        div.className = 'standard-room-block';
        div.innerHTML = block;
        // Optionally add a remove button for each room except the first
        if (roomNumber > 1) {
          const removeBtn = document.createElement('button');
          removeBtn.type = 'button';
          removeBtn.textContent = 'Remove Room';
          removeBtn.className = 'remove-room-btn';
          removeBtn.onclick = () => div.remove();
          div.querySelector('fieldset').appendChild(removeBtn);
        }
        dynamicRoomsContainer.appendChild(div);
      });
  }

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
