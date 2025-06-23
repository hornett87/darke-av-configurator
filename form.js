// --- Specialty option blocks (reused in every room/area) ---

const cinemaOptions = (idx) => `
  <div class="specialty-options cinema-options" data-specialty-block="cinema">
    <strong>Cinema Features:</strong>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Dolby Atmos"> Dolby Atmos</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Surround Sound"> Surround Sound</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Acoustic Treatment"> Acoustic Treatment</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Soundproofing"> Soundproofing</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="4K Projector"> 4K Projector</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="8K Projector"> 8K Projector</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Motorised Screen"> Motorised Screen</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Fixed Frame Screen"> Fixed Frame Screen</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Ultra Short Throw Projector"> Ultra Short Throw Projector</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="MicroLED Display"> MicroLED Display</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Cinema Seating"> Cinema Seating</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Star Ceiling"> Star Ceiling</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="LED Step Lighting"> LED Step Lighting</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Acoustic Panels"> Acoustic Panels</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Lighting Control"> Lighting Control</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Control System"> Control System</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Touch Screen Control"> Touch Screen Control</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Handheld Remote"> Handheld Remote</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Voice Control"> Voice Control</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Sky"> Sky</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Apple TV"> Apple TV</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Amazon Fire TV"> Amazon Fire TV</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Streaming Services"> Streaming Services</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Games Console"> Games Console</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Disc Player (BluRay, DVD)"> Disc Player (BluRay, DVD)</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Kaleidescape"> Kaleidescape</label>
  </div>
`;
const poolOptions = (idx) => `
  <div class="specialty-options pool-options" data-specialty-block="pool">
    <strong>Pool Features:</strong>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Pool Speakers"> Pool Speakers</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Underwater Audio"> Underwater Audio</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Garden Speakers"> Garden Speakers</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Portable Speakers"> Portable Speakers</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Outdoor TV"> Outdoor TV</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Outdoor Projector/Screen"> Outdoor Projector/Screen</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Lighting Control"> Lighting Control</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Color Changing LEDs"> Color Changing LEDs</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Fibre Optic Lighting"> Fibre Optic Lighting</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Control System"> Control System</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Touch Screen"> Touch Screen</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Waterproof Remote"> Waterproof Remote</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Voice Control"> Voice Control</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Heating Control"> Heating Control</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Automated Pool Cover"> Automated Pool Cover</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Climate Control"> Climate Control</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Security Cameras"> Security Cameras</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Gate Intercom"> Gate Intercom</label>
  </div>
`;
const gymOptions = (idx) => `
  <div class="specialty-options gym-options" data-specialty-block="gym">
    <strong>Gym Features:</strong>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Gym Speakers"> Gym Speakers</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Subwoofer"> Subwoofer</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Wall TV"> Wall TV</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Video Wall"> Video Wall</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Streaming Audio"> Streaming Audio</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Bluetooth Input"> Bluetooth Input</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Games Console"> Games Console</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Lighting Control"> Lighting Control</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Color Changing LEDs"> Color Changing LEDs</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Window Tint Control"> Window Tint Control</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Control System"> Control System</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Touch Screen"> Touch Screen</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Voice Control"> Voice Control</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Handheld Remote"> Handheld Remote</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Climate Control"> Climate Control</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Security Cameras"> Security Cameras</label>
  </div>
`;
const externalOptions = (idx) => `
  <div class="specialty-options external-options" data-specialty-block="external">
    <strong>External Area Features:</strong>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Garden Speakers"> Garden Speakers</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Patio Speakers"> Patio Speakers</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Portable Speakers"> Portable Speakers</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Outdoor TV"> Outdoor TV</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Outdoor Projector"> Outdoor Projector</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Lighting Control"> Lighting Control</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Color Changing LEDs"> Color Changing LEDs</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Fibre Optic Lighting"> Fibre Optic Lighting</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Landscape Lighting"> Landscape Lighting</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Control System"> Control System</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Touch Screen"> Touch Screen</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Voice Control"> Voice Control</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Waterproof Remote"> Waterproof Remote</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Outdoor WiFi"> Outdoor WiFi</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Heating Control"> Heating Control</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Gate Intercom"> Gate Intercom</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Security Cameras"> Security Cameras</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Automated Gates"> Automated Gates</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Irrigation Control"> Irrigation Control</label>
  </div>
`;

// --- Room/Area block builder ---
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

    <label><strong>Audio:</strong></label>
    <label><input type="checkbox" name="audio_${idx}[]" value="Multi-Room Audio"> Multi-Room Audio</label>
    <label><input type="checkbox" name="audio_${idx}[]" value="Standalone"> Standalone</label>
    <label><input type="checkbox" name="audio_${idx}[]" value="Sonos Integration"> Sonos Integration</label>
    <label><input type="checkbox" name="audio_${idx}[]" value="Portable Speakers"> Portable Speakers</label>

    <label><strong>Speakers:</strong></label>
    <label><input type="checkbox" name="speaker_${idx}[]" value="In-Ceiling"> In-Ceiling</label>
    <label><input type="checkbox" name="speaker_${idx}[]" value="In-wall"> In-wall</label>
    <label><input type="checkbox" name="speaker_${idx}[]" value="Floor-standing"> Floor-standing</label>
    <label><input type="checkbox" name="speaker_${idx}[]" value="Bookshelf Speakers"> Bookshelf Speakers</label>
    <label><input type="checkbox" name="speaker_${idx}[]" value="Plaster In Speakers"> Plaster In Speakers</label>
    <label><input type="checkbox" name="speaker_${idx}[]" value="In-wall Subwoofer"> In-wall Subwoofer</label>
    <label><input type="checkbox" name="speaker_${idx}[]" value="Free Standing Subwoofer"> Free Standing Subwoofer</label>
    <label><input type="checkbox" name="speaker_${idx}[]" value="Hidden Subwoofer"> Hidden Subwoofer</label>

    <label><strong>Audio Sources:</strong></label>
    <label><input type="checkbox" name="audio_source_${idx}[]" value="Radio (DAB/Internet)"> Radio (DAB/Internet)</label>
    <label><input type="checkbox" name="audio_source_${idx}[]" value="Streaming"> Streaming (e.g., Spotify, Apple Music)</label>
    <label><input type="checkbox" name="audio_source_${idx}[]" value="Bluetooth"> Bluetooth</label>
    <label><input type="checkbox" name="audio_source_${idx}[]" value="CDs"> CDs</label>
    <label><input type="checkbox" name="audio_source_${idx}[]" value="Local Input"> Local Input</label>

    <label><strong>Display Type:</strong></label>
    <label><input type="checkbox" name="display_type_${idx}[]" value="Wall-mounted TV"> Wall-mounted TV</label>
    <label><input type="checkbox" name="display_type_${idx}[]" value="Projector"> Projector</label>
    <label><input type="checkbox" name="display_type_${idx}[]" value="Hidden Screen"> Hidden Screen</label>
    <label><input type="checkbox" name="display_type_${idx}[]" value="Automated Screen Lift"> Automated Screen Lift</label>

    <label><strong>TV Size:</strong></label>
    <label><input type="checkbox" name="tv_size_${idx}[]" value="32-43 inches"> 32-43 inches</label>
    <label><input type="checkbox" name="tv_size_${idx}[]" value="43-55 inches"> 43-55 inches</label>
    <label><input type="checkbox" name="tv_size_${idx}[]" value="55-65 inches"> 55-65 inches</label>
    <label><input type="checkbox" name="tv_size_${idx}[]" value="65-85 inches"> 65-85 inches</label>
    <label><input type="checkbox" name="tv_size_${idx}[]" value="85-100 inches"> 85-100 inches</label>
    <label><input type="checkbox" name="tv_size_${idx}[]" value="100+ inches"> 100+ inches</label>

    <label><strong>Video Sources:</strong></label>
    <label><input type="checkbox" name="video_source_${idx}[]" value="Sky"> Sky</label>
    <label><input type="checkbox" name="video_source_${idx}[]" value="Freeview"> Freeview</label>
    <label><input type="checkbox" name="video_source_${idx}[]" value="BT TV"> BT TV</label>
    <label><input type="checkbox" name="video_source_${idx}[]" value="Amazon Fire TV"> Amazon Fire TV</label>
    <label><input type="checkbox" name="video_source_${idx}[]" value="Apple TV"> Apple TV</label>
    <label><input type="checkbox" name="video_source_${idx}[]" value="Video Conferencing"> Video Conferencing</label>

    <label><strong>Lighting & Climate:</strong></label>
    <label><input type="checkbox" name="lighting_climate_${idx}[]" value="Lighting Control"> Lighting Control</label>
    <label><input type="checkbox" name="lighting_climate_${idx}[]" value="Motorized Blinds"> Motorized Blinds</label>
    <label><input type="checkbox" name="lighting_climate_${idx}[]" value="Climate Control"> Climate Control</label>
    <label><input type="checkbox" name="lighting_climate_${idx}[]" value="Renewable Energy"> Renewable Energy</label>
    <label><input type="checkbox" name="lighting_climate_${idx}[]" value="Smart Radiators"> Smart Radiators</label>
    <label><input type="checkbox" name="lighting_climate_${idx}[]" value="Automated Window Tinting"> Automated Window Tinting</label>
    <label><input type="checkbox" name="lighting_climate_${idx}[]" value="Underfloor Heating Control"> Underfloor Heating Control</label>

    <label><strong>Security:</strong></label>
    <label><input type="checkbox" name="security_${idx}[]" value="Interior Camera"> Interior Camera</label>
    <label><input type="checkbox" name="security_${idx}[]" value="Exterior Camera"> Exterior Camera</label>
    <label><input type="checkbox" name="security_${idx}[]" value="Video Intercom"> Video Intercom</label>
    <label><input type="checkbox" name="security_${idx}[]" value="Smart Locks"> Smart Locks</label>
    <label><input type="checkbox" name="security_${idx}[]" value="Motion Sensors"> Motion Sensors</label>
    <label><input type="checkbox" name="security_${idx}[]" value="Smart Doorbell"> Smart Doorbell</label>
    <label><input type="checkbox" name="security_${idx}[]" value="Panic Button"> Panic Button</label>

    <label><strong>Control Option:</strong></label>
    <label><input type="checkbox" name="control_${idx}[]" value="Handheld Remote"> Handheld Remote</label>
    <label><input type="checkbox" name="control_${idx}[]" value="Touch Screen Tabletop"> Touch Screen Tabletop</label>
    <label><input type="checkbox" name="control_${idx}[]" value="Touch Screen On-Wall"> Touch Screen On-Wall</label>
    <label><input type="checkbox" name="control_${idx}[]" value="Waterproof Remote"> Waterproof Remote</label>

    <label><strong>Data/Phone:</strong></label>
    <label><input type="checkbox" name="data_${idx}[]" value="Dec Phone Systems"> Dec Phone Systems</label>
    <label><input type="checkbox" name="data_${idx}[]" value="BT Phone Point"> BT Phone Point</label>
    <label><input type="checkbox" name="data_${idx}[]" value="Data Point"> Data Point</label>

    <button type="button" class="remove-room-area-btn" style="margin-top:1em;">Remove Room/Area</button>
  </fieldset>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
  const roomAreaBlocks = document.getElementById('room-area-blocks');
  const addRoomBtn = document.getElementById('add-room-btn');
  let roomAreaCount = 0;

  // Add Room/Area block
  addRoomBtn.addEventListener('click', addRoomAreaBlock);

  function addRoomAreaBlock() {
    roomAreaCount += 1;
    roomAreaBlocks.insertAdjacentHTML('beforeend', roomAreaHTML(roomAreaCount));
  }

  // Specialty toggles within each room/area
  roomAreaBlocks.addEventListener('change', function(e) {
    if (e.target.classList.contains('specialty-toggle')) {
      const specialty = e.target.dataset.specialty;
      const idx = e.target.dataset.idx;
      const container = document.getElementById(`room-specialty-options-${idx}`);
      if (e.target.checked) {
        if (specialty === "cinema") container.insertAdjacentHTML('beforeend', cinemaOptions(idx));
        if (specialty === "pool") container.insertAdjacentHTML('beforeend', poolOptions(idx));
        if (specialty === "gym") container.insertAdjacentHTML('beforeend', gymOptions(idx));
        if (specialty === "external") container.insertAdjacentHTML('beforeend', externalOptions(idx));
      } else {
        // Remove only the relevant block
        container.querySelectorAll(`[data-specialty-block="${specialty}"]`).forEach(el => el.remove());
      }
    }
    if (e.target.classList.contains('remove-room-area-btn')) {
      e.target.closest('.room-area-block').remove();
    }
  });

  // Start with one room/area block by default
  addRoomAreaBlock();

  // Handle submit as before
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
