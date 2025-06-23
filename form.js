const cinemaHTML = `
<fieldset>
  <legend>Cinema Room Options</legend>
  <label><input type="checkbox" name="cinema_acoustic[]" value="Essential Panels"> Essential Panels</label>
  <label><input type="checkbox" name="cinema_acoustic[]" value="Full Wall Treatment"> Full Wall Treatment</label>
  <label><input type="checkbox" name="cinema_acoustic[]" value="Diffusion Panels"> Diffusion Panels</label>
  <label><input type="checkbox" name="cinema_acoustic[]" value="Basic Soundproofing – door seals and carpet underlay"> Basic Soundproofing – door seals and carpet underlay</label>
  <label><input type="checkbox" name="cinema_acoustic[]" value="Advanced Isolation – upgraded isolation for walls, floor, and door"> Advanced Isolation – upgraded isolation for walls, floor, and door</label>
  <!-- Add the rest of your Cinema options here -->
</fieldset>
`;
const poolHTML = `
<fieldset>
  <legend>Pool Options</legend>
  <label><input type="checkbox" name="pool_audio[]" value="Multi-Room Audio"> Multi-Room Audio</label>
  <label><input type="checkbox" name="pool_audio[]" value="Standalone"> Standalone</label>
  <!-- Add the rest of your Pool options here -->
</fieldset>
`;
const gymHTML = `
<fieldset>
  <legend>Gym Options</legend>
  <label><input type="checkbox" name="gym_audio[]" value="Multi-Room Audio"> Multi-Room Audio</label>
  <label><input type="checkbox" name="gym_audio[]" value="Standalone"> Standalone</label>
  <!-- Add the rest of your Gym options here -->
</fieldset>
`;
const externalHTML = `
<fieldset>
  <legend>External Area Options</legend>
  <label><input type="checkbox" name="external_audio[]" value="Multi-Room Audio"> Multi-Room Audio</label>
  <label><input type="checkbox" name="external_audio[]" value="Standalone"> Standalone</label>
  <!-- Add the rest of your External Area options here -->
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
    <label><input type="checkbox" name="standard_audio_${idx}[]" value="Multi-Room Audio"> Multi-Room Audio</label>
    <label><input type="checkbox" name="standard_audio_${idx}[]" value="Standalone"> Standalone</label>
    <!-- Add the rest of your Standard Room options here -->
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
  const addRoomBtn = document.getElementById('add-standard-room-btn');
  let standardRoomCount = 0;

  // Area toggles
  document.querySelectorAll('.area-toggle').forEach(input => {
    input.addEventListener('change', function() {
      const area = this.dataset.area;
      const fieldsetDiv = document.getElementById(`${area}-fieldset`);
      if (this.checked) {
        fieldsetDiv.classList.add('active');
        if (fieldsetDiv.innerHTML.trim() === '' && area !== "standard") {
          if (area === "cinema") fieldsetDiv.innerHTML = cinemaHTML;
          if (area === "pool") fieldsetDiv.innerHTML = poolHTML;
          if (area === "gym") fieldsetDiv.innerHTML = gymHTML;
          if (area === "external") fieldsetDiv.innerHTML = externalHTML;
        }
        if (area === "standard") {
          addRoomBtn.style.display = "inline-block";
          if (standardRoomCount === 0) {
            addStandardRoomBlock();
          }
        }
      } else {
        fieldsetDiv.classList.remove('active');
        if (area === "standard") {
          addRoomBtn.style.display = "none";
          standardRoomBlocks.innerHTML = "";
          standardRoomCount = 0;
        }
      }
    })
  });

  // Handle Standard Room Add/Remove
  addRoomBtn.addEventListener('click', addStandardRoomBlock);

  function addStandardRoomBlock() {
    standardRoomCount += 1;
    standardRoomBlocks.insertAdjacentHTML('beforeend', standardRoomHTML(standardRoomCount));
  }

  // Delegate remove button for standard rooms
  standardRoomBlocks.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-standard-room-btn')) {
      e.target.closest('.standard-room-block').remove();
    }
  });

  // Show results on submit
  document.getElementById('smart-home-options').addEventListener('submit', function(e) {
    e.preventDefault();
    const data = new FormData(this);
    let output = '<h2>Submitted Information & Selections:</h2><ul>';
    for (const [key, value] of data.entries()) {
      output += `<li><strong>${key}:</strong> ${value}</li>`;
    }
    output += '</ul>';
    document.getElementById('results').innerHTML = output;
    window.scrollTo({top: document.getElementById('results').offsetTop, behavior: "smooth"});
  });
});
