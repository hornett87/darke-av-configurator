// ---- Standard Options Function ----
const standardOptions = (idx) => `
  <div class="standard-room-options">
    <strong>Audio:</strong>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Multi-Room Audio"> Multi-Room Audio</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Standalone"> Standalone</label>
    <br>
    <strong>Speaker:</strong>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="In-Ceiling"> In-Ceiling</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="In-wall"> In-wall</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Floor-standing"> Floor-standing</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Bookshelf Speakers"> Bookshelf Speakers</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Plaster In Speakers"> Plaster In Speakers</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Portable Speakers"> Portable Speakers</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Sonos Integration"> Sonos Integration</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="In-wall Subwoofer"> In-wall Subwoofer</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Free Standing Subwoofer"> Free Standing Subwoofer</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Hidden Subwoofer"> Hidden Subwoofer</label>
    <br>
    <strong>Audio Sources:</strong>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Radio (DAB/Internet)"> Radio (DAB/Internet)</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Streaming (e.g., Spotify, Apple Music etc.)"> Streaming (e.g., Spotify, Apple Music etc.)</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Bluetooth"> Bluetooth</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="CDs"> CDs</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Local Input"> Local Input</label>
    <br>
    <strong>Display Type:</strong>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Wall-mounted TV"> Wall-mounted TV</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Projector"> Projector</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Hidden Screen"> Hidden Screen</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Automated Screen Lift"> Automated Screen Lift</label>
    <br>
    <strong>TV Size:</strong>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="32-43 inches"> 32-43 inches</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="43-55 inches"> 43-55 inches</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="55-65 inches"> 55-65 inches</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="65-85 inches"> 65-85 inches</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="85-100 inches"> 85-100 inches</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="100+ inches"> 100+ inches</label>
    <br>
    <strong>Video Sources:</strong>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Sky"> Sky</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Freeview"> Freeview</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="BT TV"> BT TV</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Amazon Fire TV"> Amazon Fire TV</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Apple TV"> Apple TV</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Video Conferencing"> Video Conferencing</label>
    <br>
    <strong>Lighting & Climate:</strong>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Lighting Control"> Lighting Control</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Motorized Blinds"> Motorized Blinds</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Climate Control"> Climate Control</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Renewable Energy"> Renewable Energy</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Smart Radiators"> Smart Radiators</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Automated Window Tinting"> Automated Window Tinting</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Underfloor Heating Control"> Underfloor Heating Control</label>
    <br>
    <strong>Security:</strong>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Interior Camera"> Interior Camera</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Exterior Camera"> Exterior Camera</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Video Intercom"> Video Intercom</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Smart Locks"> Smart Locks</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Motion Sensors"> Motion Sensors</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Smart Doorbell"> Smart Doorbell</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Panic Button"> Panic Button</label>
    <br>
    <strong>Control Option:</strong>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Handheld Remote"> Handheld Remote</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Touch Screen Tabletop"> Touch Screen Tabletop</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Touch Screen On-Wall"> Touch Screen On-Wall</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Waterproof Remote"> Waterproof Remote</label>
    <br>
    <strong>Data/Phone:</strong>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Dec Phone Systems"> Dec Phone Systems</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="BT Phone Point"> BT Phone Point</label>
    <label><input type="checkbox" name="standard_features_${idx}[]" value="Data Point"> Data Point</label>
  </div>
`;

// ---- Specialty Options Functions ----
// (Use your previous specialty options for cinemaOptions, poolOptions, gymOptions, externalOptions)
// For brevity, only standard is fully shown here, but your current code has all the specialty functions.

// Here is a simple placeholder for specialty options for demo:
const cinemaOptions = idx => `<div class="specialty-options" data-specialty-block="cinema"><b>Cinema Options</b></div>`;
const poolOptions = idx => `<div class="specialty-options" data-specialty-block="pool"><b>Pool Options</b></div>`;
const gymOptions = idx => `<div class="specialty-options" data-specialty-block="gym"><b>Gym Options</b></div>`;
const externalOptions = idx => `<div class="specialty-options" data-specialty-block="external"><b>External Area Options</b></div>`;

// ---- Room Block ----
const roomAreaHTML = (idx = 1) => `
  <div class="room-area-block">
    <fieldset>
      <legend>Room/Area ${idx}</legend>
      <label>
        Room/Area Name:
        <input type="text" name="room_name_${idx}" placeholder="e.g. Cinema, Pool, Living Room, Kitchen" required>
      </label>
      <div class="specialty-toggles">
        <strong>Specialty Features (optional):</strong>
        <label><input type="checkbox" class="specialty-toggle" data-specialty="cinema" data-idx="${idx}"> Cinema Features</label>
        <label><input type="checkbox" class="specialty-toggle" data-specialty="pool" data-idx="${idx}"> Pool Features</label>
        <label><input type="checkbox" class="specialty-toggle" data-specialty="gym" data-idx="${idx}"> Gym Features</label>
        <label><input type="checkbox" class="specialty-toggle" data-specialty="external" data-idx="${idx}"> External Features</label>
      </div>
      <div class="room-specialty-options" id="room-specialty-options-${idx}"></div>
      ${standardOptions(idx)}
      <button type="button" class="remove-room-area-btn" style="margin-top:1em;">Remove Room/Area</button>
    </fieldset>
  </div>
`;

// ---- JS Logic ----
document.addEventListener('DOMContentLoaded', () => {
  const roomAreaBlocks = document.getElementById('room-area-blocks');
  const addRoomBtn = document.getElementById('add-room-btn');
  let roomAreaCount = 0;

  addRoomBtn.addEventListener('click', addRoomAreaBlock);

  function addRoomAreaBlock() {
    roomAreaCount += 1;
    roomAreaBlocks.insertAdjacentHTML('beforeend', roomAreaHTML(roomAreaCount));
  }

  roomAreaBlocks.addEventListener('change', function(e) {
    if (e.target.classList.contains('specialty-toggle')) {
      const specialty = e.target.dataset.specialty;
      const idx = e.target.dataset.idx;
      const block = e.target.closest('.room-area-block');
      const standardOptions = block.querySelector('.standard-room-options');
      const specialtyContainer = block.querySelector(`#room-specialty-options-${idx}`);

      // Only one specialty at a time
      if (e.target.checked) {
        block.querySelectorAll('.specialty-toggle').forEach(toggle => {
          if (toggle !== e.target) toggle.checked = false;
        });
        if (standardOptions) standardOptions.style.display = 'none';
        switch (specialty) {
          case "cinema":
            specialtyContainer.innerHTML = cinemaOptions(idx);
            break;
          case "pool":
            specialtyContainer.innerHTML = poolOptions(idx);
            break;
          case "gym":
            specialtyContainer.innerHTML = gymOptions(idx);
            break;
          case "external":
            specialtyContainer.innerHTML = externalOptions(idx);
            break;
        }
      } else {
        if (block.querySelectorAll('.specialty-toggle:checked').length === 0) {
          if (standardOptions) standardOptions.style.display = '';
          specialtyContainer.innerHTML = '';
        }
      }
    }
    if (e.target.classList.contains('remove-room-area-btn')) {
      e.target.closest('.room-area-block').remove();
    }
  });

  addRoomAreaBlock();
});
