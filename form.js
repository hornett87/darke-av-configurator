// HTML partials for each area (you can fetch from files if you want modularity)
const cinemaHTML = `
<fieldset>
  <legend>Cinema Room Options</legend>
  <!-- Add the full Cinema Room options here -->
  <label><input type="checkbox" name="cinema_audio" value="Multi-Room Audio"> Multi-Room Audio</label>
  <!-- ... (rest of cinema options) ... -->
</fieldset>
`;
const poolHTML = `
<fieldset>
  <legend>Pool Options</legend>
  <!-- Add the full Pool options here -->
  <label><input type="checkbox" name="pool_audio" value="Standalone"> Standalone</label>
  <!-- ... (rest of pool options) ... -->
</fieldset>
`;
const gymHTML = `
<fieldset>
  <legend>Gym Options</legend>
  <!-- Add the full Gym options here -->
  <label><input type="checkbox" name="gym_audio" value="Standalone"> Standalone</label>
  <!-- ... (rest of gym options) ... -->
</fieldset>
`;
const externalHTML = `
<fieldset>
  <legend>External Area Options</legend>
  <!-- Add the full External Area options here -->
  <label><input type="checkbox" name="external_audio" value="Multi-Room Audio"> Multi-Room Audio</label>
  <!-- ... (rest of external area options) ... -->
</fieldset>
`;
const standardRoomHTML = (idx = 1) => `
<div class="standard-room-block">
  <fieldset>
    <legend>Standard Room ${idx}</legend>
    <label>
      Room Name/Type:
      <input type="text" name="room_name[]" placeholder="e.g. Living Room, Bedroom 1, Kitchen" required>
    </label>
    <!-- (All standard room tick options go here) -->
    <label><input type="checkbox" name="standard_audio_${idx}[]" value="Multi-Room Audio"> Multi-Room Audio</label>
    <!-- ... (rest of standard room options) ... -->
    <button type="button" class="remove-standard-room-btn" style="margin-top:1em;">Remove Room</button>
  </fieldset>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
  // Fieldset containers
  const cinemaFieldset = document.getElementById('cinema-fieldset');
  const poolFieldset = document.getElementById('pool-fieldset');
  const gymFieldset = document.getElementById('gym-fieldset');
  const externalFieldset = document.getElementById('external-fieldset');
  const standardFieldset = document.getElementById('standard-fieldset');
  const standardRoomBlocks = document.getElementById('standard-room-blocks');
  let standardRoomCount = 0;

  // Area toggles
  document.querySelectorAll('.area-toggle').forEach(input => {
    input.addEventListener('change', function() {
      const area = this.dataset.area;
      const fieldsetDiv = document.getElementById(`${area}-fieldset`);
      if (this.checked) {
        fieldsetDiv.classList.add('active');
        // Insert HTML if not already
        if (fieldsetDiv.innerHTML.trim() === '') {
          if (area === "cinema") fieldsetDiv.innerHTML = cinemaHTML;
          if (area === "pool") fieldsetDiv.innerHTML = poolHTML;
          if (area === "gym") fieldsetDiv.innerHTML = gymHTML;
          if (area === "external") fieldsetDiv.innerHTML = externalHTML;
          // Standard handled separately
        }
      } else {
        fieldsetDiv.classList.remove('active');
        if (area === "standard") {
          // Remove all standard room blocks
          standardRoomBlocks.innerHTML = "";
          standardRoomCount = 0;
        }
      }
    })
  });

  // Handle Standard Room Add/Remove
  document.getElementById('add-standard-room-btn').addEventListener('click', () => {
    standardRoomCount += 1;
    standardRoomBlocks.insertAdjacentHTML('beforeend', standardRoomHTML(standardRoomCount));
  });

  // Delegate remove button for standard rooms
  standardRoomBlocks.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-standard-room-btn')) {
      e.target.closest('.standard-room-block').remove();
    }
  });

  // Optional: Show results on submit
  document.getElementById('smart-home-options').addEventListener('submit', function(e) {
    e.preventDefault();
    const data = new FormData(this);
    let output = '<h2>Selected Options:</h2><ul>';
    for (const [key, value] of data.entries()) {
      output += `<li><strong>${key}:</strong> ${value}</li>`;
    }
    output += '</ul>';
    document.querySelectorAll('.results-output').forEach(el => el.remove());
    const div = document.createElement('div');
    div.className = 'results-output';
    div.innerHTML = output;
    this.parentNode.insertBefore(div, this.nextSibling);
    window.scrollTo({top: div.offsetTop, behavior: "smooth"});
  });
});
