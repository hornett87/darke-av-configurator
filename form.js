const cinemaHTML = `
<fieldset>
  <legend>Cinema Room Options</legend>

  <label><strong>Audio & Video:</strong></label>
  <label><input type="checkbox" name="cinema_audio[]" value="Dolby Atmos"> Dolby Atmos</label>
  <label><input type="checkbox" name="cinema_audio[]" value="Surround Sound"> Surround Sound</label>
  <label><input type="checkbox" name="cinema_audio[]" value="Acoustic Treatment"> Acoustic Treatment</label>
  <label><input type="checkbox" name="cinema_audio[]" value="Soundproofing"> Soundproofing</label>

  <label><input type="checkbox" name="cinema_audio[]" value="4K Projector"> 4K Projector</label>
  <label><input type="checkbox" name="cinema_audio[]" value="8K Projector"> 8K Projector</label>
  <label><input type="checkbox" name="cinema_audio[]" value="Motorised Screen"> Motorised Screen</label>
  <label><input type="checkbox" name="cinema_audio[]" value="Fixed Frame Screen"> Fixed Frame Screen</label>
  <label><input type="checkbox" name="cinema_audio[]" value="Ultra Short Throw Projector"> Ultra Short Throw Projector</label>
  <label><input type="checkbox" name="cinema_audio[]" value="MicroLED Display"> MicroLED Display</label>

  <label><strong>Seating & Decor:</strong></label>
  <label><input type="checkbox" name="cinema_audio[]" value="Cinema Seating"> Cinema Seating</label>
  <label><input type="checkbox" name="cinema_audio[]" value="Star Ceiling"> Star Ceiling</label>
  <label><input type="checkbox" name="cinema_audio[]" value="LED Step Lighting"> LED Step Lighting</label>
  <label><input type="checkbox" name="cinema_audio[]" value="Acoustic Panels"> Acoustic Panels</label>

  <label><strong>Lighting & Control:</strong></label>
  <label><input type="checkbox" name="cinema_audio[]" value="Lighting Control"> Lighting Control</label>
  <label><input type="checkbox" name="cinema_audio[]" value="Control System"> Control System</label>
  <label><input type="checkbox" name="cinema_audio[]" value="Touch Screen Control"> Touch Screen Control</label>
  <label><input type="checkbox" name="cinema_audio[]" value="Handheld Remote"> Handheld Remote</label>
  <label><input type="checkbox" name="cinema_audio[]" value="Voice Control"> Voice Control</label>

  <label><strong>Video Sources:</strong></label>
  <label><input type="checkbox" name="cinema_audio[]" value="Sky"> Sky</label>
  <label><input type="checkbox" name="cinema_audio[]" value="Apple TV"> Apple TV</label>
  <label><input type="checkbox" name="cinema_audio[]" value="Amazon Fire TV"> Amazon Fire TV</label>
  <label><input type="checkbox" name="cinema_audio[]" value="Streaming Services"> Streaming Services (Netflix, Disney+, etc)</label>
  <label><input type="checkbox" name="cinema_audio[]" value="Games Console"> Games Console</label>
  <label><input type="checkbox" name="cinema_audio[]" value="Disc Player (BluRay, DVD)"> Disc Player (BluRay, DVD)</label>
  <label><input type="checkbox" name="cinema_audio[]" value="Kaleidescape"> Kaleidescape</label>
</fieldset>
`;

const poolHTML = `
<fieldset>
  <legend>Pool Options</legend>

  <label><strong>Audio & Visual:</strong></label>
  <label><input type="checkbox" name="pool_audio[]" value="Pool Speakers"> Pool Speakers</label>
  <label><input type="checkbox" name="pool_audio[]" value="Underwater Audio"> Underwater Audio</label>
  <label><input type="checkbox" name="pool_audio[]" value="Garden Speakers"> Garden Speakers</label>
  <label><input type="checkbox" name="pool_audio[]" value="Portable Speakers"> Portable Speakers</label>
  <label><input type="checkbox" name="pool_audio[]" value="Outdoor TV"> Outdoor TV</label>
  <label><input type="checkbox" name="pool_audio[]" value="Projector Screen"> Outdoor Projector/Screen</label>

  <label><strong>Lighting & Ambiance:</strong></label>
  <label><input type="checkbox" name="pool_audio[]" value="Lighting Control"> Lighting Control</label>
  <label><input type="checkbox" name="pool_audio[]" value="Color Changing LEDs"> Color Changing LEDs</label>
  <label><input type="checkbox" name="pool_audio[]" value="Fibre Optic Lighting"> Fibre Optic Lighting</label>

  <label><strong>Control/Integration:</strong></label>
  <label><input type="checkbox" name="pool_audio[]" value="Control System"> Control System</label>
  <label><input type="checkbox" name="pool_audio[]" value="Touch Screen"> Touch Screen</label>
  <label><input type="checkbox" name="pool_audio[]" value="Waterproof Remote"> Waterproof Remote</label>
  <label><input type="checkbox" name="pool_audio[]" value="Voice Control"> Voice Control</label>

  <label><strong>Environment & Safety:</strong></label>
  <label><input type="checkbox" name="pool_audio[]" value="Heating Control"> Heating Control</label>
  <label><input type="checkbox" name="pool_audio[]" value="Automated Pool Cover"> Automated Pool Cover</label>
  <label><input type="checkbox" name="pool_audio[]" value="Climate Control"> Climate Control</label>
  <label><input type="checkbox" name="pool_audio[]" value="Security Cameras"> Security Cameras</label>
  <label><input type="checkbox" name="pool_audio[]" value="Gate Intercom"> Gate Intercom</label>
</fieldset>
`;

const gymHTML = `
<fieldset>
  <legend>Gym Options</legend>

  <label><strong>Audio & Visual:</strong></label>
  <label><input type="checkbox" name="gym_audio[]" value="Gym Speakers"> Gym Speakers</label>
  <label><input type="checkbox" name="gym_audio[]" value="Subwoofer"> Subwoofer</label>
  <label><input type="checkbox" name="gym_audio[]" value="Wall TV"> Wall TV</label>
  <label><input type="checkbox" name="gym_audio[]" value="Video Wall"> Video Wall</label>
  <label><input type="checkbox" name="gym_audio[]" value="Streaming Audio"> Streaming Audio</label>
  <label><input type="checkbox" name="gym_audio[]" value="Bluetooth Input"> Bluetooth Input</label>
  <label><input type="checkbox" name="gym_audio[]" value="Games Console"> Games Console</label>

  <label><strong>Lighting & Ambiance:</strong></label>
  <label><input type="checkbox" name="gym_audio[]" value="Lighting Control"> Lighting Control</label>
  <label><input type="checkbox" name="gym_audio[]" value="Color Changing LEDs"> Color Changing LEDs</label>
  <label><input type="checkbox" name="gym_audio[]" value="Window Tint Control"> Window Tint Control</label>

  <label><strong>Control/Integration:</strong></label>
  <label><input type="checkbox" name="gym_audio[]" value="Control System"> Control System</label>
  <label><input type="checkbox" name="gym_audio[]" value="Touch Screen"> Touch Screen</label>
  <label><input type="checkbox" name="gym_audio[]" value="Voice Control"> Voice Control</label>
  <label><input type="checkbox" name="gym_audio[]" value="Handheld Remote"> Handheld Remote</label>

  <label><strong>Environment:</strong></label>
  <label><input type="checkbox" name="gym_audio[]" value="Climate Control"> Climate Control</label>
  <label><input type="checkbox" name="gym_audio[]" value="Security Cameras"> Security Cameras</label>
</fieldset>
`;

const externalHTML = `
<fieldset>
  <legend>External Area Options</legend>

  <label><strong>Audio & Visual:</strong></label>
  <label><input type="checkbox" name="external_audio[]" value="Garden Speakers"> Garden Speakers</label>
  <label><input type="checkbox" name="external_audio[]" value="Patio Speakers"> Patio Speakers</label>
  <label><input type="checkbox" name="external_audio[]" value="Portable Speakers"> Portable Speakers</label>
  <label><input type="checkbox" name="external_audio[]" value="Outdoor TV"> Outdoor TV</label>
  <label><input type="checkbox" name="external_audio[]" value="Outdoor Projector"> Outdoor Projector</label>

  <label><strong>Lighting & Ambiance:</strong></label>
  <label><input type="checkbox" name="external_audio[]" value="Lighting Control"> Lighting Control</label>
  <label><input type="checkbox" name="external_audio[]" value="Color Changing LEDs"> Color Changing LEDs</label>
  <label><input type="checkbox" name="external_audio[]" value="Fibre Optic Lighting"> Fibre Optic Lighting</label>
  <label><input type="checkbox" name="external_audio[]" value="Landscape Lighting"> Landscape Lighting</label>

  <label><strong>Control/Integration:</strong></label>
  <label><input type="checkbox" name="external_audio[]" value="Control System"> Control System</label>
  <label><input type="checkbox" name="external_audio[]" value="Touch Screen"> Touch Screen</label>
  <label><input type="checkbox" name="external_audio[]" value="Voice Control"> Voice Control</label>
  <label><input type="checkbox" name="external_audio[]" value="Waterproof Remote"> Waterproof Remote</label>

  <label><strong>Environment & Safety:</strong></label>
  <label><input type="checkbox" name="external_audio[]" value="Outdoor WiFi"> Outdoor WiFi</label>
  <label><input type="checkbox" name="external_audio[]" value="Heating Control"> Heating Control</label>
  <label><input type="checkbox" name="external_audio[]" value="Gate Intercom"> Gate Intercom</label>
  <label><input type="checkbox" name="external_audio[]" value="Security Cameras"> Security Cameras</label>
  <label><input type="checkbox" name="external_audio[]" value="Automated Gates"> Automated Gates</label>
  <label><input type="checkbox" name="external_audio[]" value="Irrigation Control"> Irrigation Control</label>
</fieldset>
`;

// Standard Room block as before (unchanged)
const standardRoomHTML = (idx = 1) => `
<div class="standard-room-block">
  <fieldset>
    <legend>Standard Room ${idx}</legend>
    <label>
      Room Name/Type:
      <input type="text" name="room_name[]" placeholder="e.g. Living Room, Bedroom 1, Kitchen" required>
    </label>
    <label><strong>Audio:</strong></label>
    <label><input type="checkbox" name="standard_audio_${idx}[]" value="Multi-Room Audio"> Multi-Room Audio</label>
    <label><input type="checkbox" name="standard_audio_${idx}[]" value="Standalone"> Standalone</label>
    <label><input type="checkbox" name="standard_audio_${idx}[]" value="Sonos Integration"> Sonos Integration</label>
    <label><input type="checkbox" name="standard_audio_${idx}[]" value="Portable Speakers"> Portable Speakers</label>

    <label><strong>Speakers:</strong></label>
    <label><input type="checkbox" name="standard_speaker_${idx}[]" value="In-Ceiling"> In-Ceiling</label>
    <label><input type="checkbox" name="standard_speaker_${idx}[]" value="In-wall"> In-wall</label>
    <label><input type="checkbox" name="standard_speaker_${idx}[]" value="Floor-standing"> Floor-standing</label>
    <label><input type="checkbox" name="standard_speaker_${idx}[]" value="Bookshelf Speakers"> Bookshelf Speakers</label>
    <label><input type="checkbox" name="standard_speaker_${idx}[]" value="Plaster In Speakers"> Plaster In Speakers</label>
    <label><input type="checkbox" name="standard_speaker_${idx}[]" value="In-wall Subwoofer"> In-wall Subwoofer</label>
    <label><input type="checkbox" name="standard_speaker_${idx}[]" value="Free Standing Subwoofer"> Free Standing Subwoofer</label>
    <label><input type="checkbox" name="standard_speaker_${idx}[]" value="Hidden Subwoofer"> Hidden Subwoofer</label>

    <label><strong>Audio Sources:</strong></label>
    <label><input type="checkbox" name="standard_audio_source_${idx}[]" value="Radio (DAB/Internet)"> Radio (DAB/Internet)</label>
    <label><input type="checkbox" name="standard_audio_source_${idx}[]" value="Streaming"> Streaming (e.g., Spotify, Apple Music)</label>
    <label><input type="checkbox" name="standard_audio_source_${idx}[]" value="Bluetooth"> Bluetooth</label>
    <label><input type="checkbox" name="standard_audio_source_${idx}[]" value="CDs"> CDs</label>
    <label><input type="checkbox" name="standard_audio_source_${idx}[]" value="Local Input"> Local Input</label>

    <label><strong>Display Type:</strong></label>
    <label><input type="checkbox" name="standard_display_type_${idx}[]" value="Wall-mounted TV"> Wall-mounted TV</label>
    <label><input type="checkbox" name="standard_display_type_${idx}[]" value="Projector"> Projector</label>
    <label><input type="checkbox" name="standard_display_type_${idx}[]" value="Hidden Screen"> Hidden Screen</label>
    <label><input type="checkbox" name="standard_display_type_${idx}[]" value="Automated Screen Lift"> Automated Screen Lift</label>

    <label><strong>TV Size:</strong></label>
    <label><input type="checkbox" name="standard_tv_size_${idx}[]" value="32-43 inches"> 32-43 inches</label>
    <label><input type="checkbox" name="standard_tv_size_${idx}[]" value="43-55 inches"> 43-55 inches</label>
    <label><input type="checkbox" name="standard_tv_size_${idx}[]" value="55-65 inches"> 55-65 inches</label>
    <label><input type="checkbox" name="standard_tv_size_${idx}[]" value="65-85 inches"> 65-85 inches</label>
    <label><input type="checkbox" name="standard_tv_size_${idx}[]" value="85-100 inches"> 85-100 inches</label>
    <label><input type="checkbox" name="standard_tv_size_${idx}[]" value="100+ inches"> 100+ inches</label>

    <label><strong>Video Sources:</strong></label>
    <label><input type="checkbox" name="standard_video_source_${idx}[]" value="Sky"> Sky</label>
    <label><input type="checkbox" name="standard_video_source_${idx}[]" value="Freeview"> Freeview</label>
    <label><input type="checkbox" name="standard_video_source_${idx}[]" value="BT TV"> BT TV</label>
    <label><input type="checkbox" name="standard_video_source_${idx}[]" value="Amazon Fire TV"> Amazon Fire TV</label>
    <label><input type="checkbox" name="standard_video_source_${idx}[]" value="Apple TV"> Apple TV</label>
    <label><input type="checkbox" name="standard_video_source_${idx}[]" value="Video Conferencing"> Video Conferencing</label>

    <label><strong>Lighting & Climate:</strong></label>
    <label><input type="checkbox" name="standard_lighting_climate_${idx}[]" value="Lighting Control"> Lighting Control</label>
    <label><input type="checkbox" name="standard_lighting_climate_${idx}[]" value="Motorized Blinds"> Motorized Blinds</label>
    <label><input type="checkbox" name="standard_lighting_climate_${idx}[]" value="Climate Control"> Climate Control</label>
    <label><input type="checkbox" name="standard_lighting_climate_${idx}[]" value="Renewable Energy"> Renewable Energy</label>
    <label><input type="checkbox" name="standard_lighting_climate_${idx}[]" value="Smart Radiators"> Smart Radiators</label>
    <label><input type="checkbox" name="standard_lighting_climate_${idx}[]" value="Automated Window Tinting"> Automated Window Tinting</label>
    <label><input type="checkbox" name="standard_lighting_climate_${idx}[]" value="Underfloor Heating Control"> Underfloor Heating Control</label>

    <label><strong>Security:</strong></label>
    <label><input type="checkbox" name="standard_security_${idx}[]" value="Interior Camera"> Interior Camera</label>
    <label><input type="checkbox" name="standard_security_${idx}[]" value="Exterior Camera"> Exterior Camera</label>
    <label><input type="checkbox" name="standard_security_${idx}[]" value="Video Intercom"> Video Intercom</label>
    <label><input type="checkbox" name="standard_security_${idx}[]" value="Smart Locks"> Smart Locks</label>
    <label><input type="checkbox" name="standard_security_${idx}[]" value="Motion Sensors"> Motion Sensors</label>
    <label><input type="checkbox" name="standard_security_${idx}[]" value="Smart Doorbell"> Smart Doorbell</label>
    <label><input type="checkbox" name="standard_security_${idx}[]" value="Panic Button"> Panic Button</label>

    <label><strong>Control Option:</strong></label>
    <label><input type="checkbox" name="standard_control_${idx}[]" value="Handheld Remote"> Handheld Remote</label>
    <label><input type="checkbox" name="standard_control_${idx}[]" value="Touch Screen Tabletop"> Touch Screen Tabletop</label>
    <label><input type="checkbox" name="standard_control_${idx}[]" value="Touch Screen On-Wall"> Touch Screen On-Wall</label>
    <label><input type="checkbox" name="standard_control_${idx}[]" value="Waterproof Remote"> Waterproof Remote</label>

    <label><strong>Data/Phone:</strong></label>
    <label><input type="checkbox" name="standard_data_${idx}[]" value="Dec Phone Systems"> Dec Phone Systems</label>
    <label><input type="checkbox" name="standard_data_${idx}[]" value="BT Phone Point"> BT Phone Point</label>
    <label><input type="checkbox" name="standard_data_${idx}[]" value="Data Point"> Data Point</label>

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
