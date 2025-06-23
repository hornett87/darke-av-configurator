// --- Specialty Option Functions ---

const cinemaOptions = (idx) => `
  <div class="specialty-options cinema-options" data-specialty-block="cinema">
    <strong>Acoustic Treatment:</strong>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Essential Panels"> Essential Panels</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Full Wall Treatment"> Full Wall Treatment</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Diffusion Panels"> Diffusion Panels</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Basic Soundproofing – door seals and carpet underlay"> Basic Soundproofing – door seals and carpet underlay</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Advanced Isolation – upgraded isolation for walls, floor, and door"> Advanced Isolation – upgraded isolation for walls, floor, and door</label>
    <br>
    <strong>Audio:</strong>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Multi-Room Audio"> Multi-Room Audio</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Standalone"> Standalone</label>
    <br>
    <strong>Speakers:</strong>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="In-wall"> In-wall</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="In-Ceiling"> In-Ceiling</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Surface-Mounted"> Surface-Mounted</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Wall-Mounted"> Wall-Mounted</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Floor Standing"> Floor Standing</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Plaster In"> Plaster In</label>
    <br>
    <strong>Speaker Finish:</strong>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Black"> Black</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="White"> White</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Custom"> Custom</label>
    <br>
    <strong>Audio Sources:</strong>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Radio (DAB/Internet)"> Radio (DAB/Internet)</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Streaming (e.g., Spotify, Apple Music etc.)"> Streaming (e.g., Spotify, Apple Music etc.)</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Local input"> Local input</label>
    <br>
    <strong>TV Type:</strong>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Wall-mounted TV"> Wall-mounted TV</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Free Standing TV"> Free Standing TV</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Projector"> Projector</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Hidden Screen"> Hidden Screen</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Automated Screen Lift"> Automated Screen Lift</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Motorised Mount"> Motorised Mount</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Modula LED Display"> Modula LED Display</label>
    <br>
    <strong>TV Size:</strong>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="85-100 inches"> 85-100 inches</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="100-150 inches"> 100-150 inches</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="150-200 inches"> 150-200 inches</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="200+ inches"> 200+ inches</label>
    <br>
    <strong>Video Sources:</strong>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Streaming (e.g., Netflix, Amazon Prime)"> Streaming (e.g., Netflix, Amazon Prime)</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Local Input (Games Console, Laptop etc.)"> Local Input (Games Console, Laptop etc.)</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Kaleidescape Movie Player"> Kaleidescape Movie Player</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Blu Ray Player"> Blu Ray Player</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="3D Blu Ray"> 3D Blu Ray</label>
    <br>
    <strong>Lighting & Climate:</strong>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Heating Control"> Heating Control</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="AC Control"> AC Control</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Ventilation"> Ventilation</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Lighting Control"> Lighting Control</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Motorized Blinds"> Motorized Blinds</label>
    <br>
    <strong>Security:</strong>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Interior Camera"> Interior Camera</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Video Intercom"> Video Intercom</label>
    <br>
    <strong>Control Option:</strong>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Handheld Remote"> Handheld Remote</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Touch Screen Tabletop"> Touch Screen Tabletop</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Touch Screen On-Wall"> Touch Screen On-Wall</label>
    <br>
    <strong>Seating:</strong>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Raised Seating Stage"> Raised Seating Stage</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Fixed Cinema Chairs (non-reclining, space-saving, classic look)"> Fixed Cinema Chairs (non-reclining, space-saving, classic look)</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Manual Recliners (lever or push-back, entry-level comfort)"> Manual Recliners (lever or push-back, entry-level comfort)</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Motorised Recliners (electric recline with push-button control)"> Motorised Recliners (electric recline with push-button control)</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Love Seats (two-seat design with shared armrest)"> Love Seats (two-seat design with shared armrest)</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Chaise End Seats (extended footrest section for lounging)"> Chaise End Seats (extended footrest section for lounging)</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Bean Bags / Soft Loungers (relaxed, casual seating option)"> Bean Bags / Soft Loungers (relaxed, casual seating option)</label>
    <br>
    <strong>Special Touches:</strong>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Backlit Wall Panels"> Backlit Wall Panels</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Star Ceiling"> Star Ceiling</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Live Movie Poster"> Live Movie Poster</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Movie Sync Whole Room Lighting"> Movie Sync Whole Room Lighting</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Motion Seating"> Motion Seating</label>
    <br>
    <strong>Data/Phone:</strong>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Dec Phone Systems"> Dec Phone Systems</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="BT Phone Point"> BT Phone Point</label>
    <label><input type="checkbox" name="cinema_features_${idx}[]" value="Data Point"> Data Point</label>
  </div>
`;

const poolOptions = (idx) => `
  <div class="specialty-options pool-options" data-specialty-block="pool">
    <strong>Audio:</strong>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Multi-Room Audio"> Multi-Room Audio</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Standalone"> Standalone</label>
    <br>
    <strong>Speakers:</strong>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="In-wall"> In-wall</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="In-Ceiling"> In-Ceiling</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Wall-Mount"> Wall-Mount</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Pendant"> Pendant</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Under Water"> Under Water</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Portable"> Portable</label>
    <br>
    <strong>Speaker Finish:</strong>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="White"> White</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Black"> Black</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Custom"> Custom</label>
    <br>
    <strong>Audio Sources:</strong>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Radio (DAB/Internet)"> Radio (DAB/Internet)</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Streaming (e.g., Spotify, Apple Music etc.)"> Streaming (e.g., Spotify, Apple Music etc.)</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Local input"> Local input</label>
    <br>
    <strong>TV Type:</strong>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Projector"> Projector</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Ceiling Mounted"> Ceiling Mounted</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Hidden Screen"> Hidden Screen</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Automated Screen Lift"> Automated Screen Lift</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Motorised Mount"> Motorised Mount</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Mirror TV"> Mirror TV</label>
    <br>
    <strong>TV Size:</strong>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="32-43 inches"> 32-43 inches</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="43-55 inches"> 43-55 inches</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="55-65 inches"> 55-65 inches</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="65-85 inches"> 65-85 inches</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="85-100 inches"> 85-100 inches</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="100+ inches"> 100+ inches</label>
    <br>
    <strong>Video Sources:</strong>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Sky Q"> Sky Q</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Sky Stream"> Sky Stream</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Freeview"> Freeview</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="BT TV"> BT TV</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Amazon Fire TV"> Amazon Fire TV</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Apple TV"> Apple TV</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Kaleidescape Movie Player"> Kaleidescape Movie Player</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Video Conferencing"> Video Conferencing</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Local Input (Games Console, Laptop etc.)"> Local Input (Games Console, Laptop etc.)</label>
    <br>
    <strong>Lighting & Climate:</strong>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Heating Control"> Heating Control</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="AC Control"> AC Control</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Ventilation"> Ventilation</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Lighting Control"> Lighting Control</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Motorized Blinds"> Motorized Blinds</label>
    <br>
    <strong>Security:</strong>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Interior Camera"> Interior Camera</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Smart Locks"> Smart Locks</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Motion Sensor"> Motion Sensor</label>
    <br>
    <strong>Control Option:</strong>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Handheld Remote"> Handheld Remote</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Touch Screen Tabletop"> Touch Screen Tabletop</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Touch Screen On-Wall"> Touch Screen On-Wall</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Waterproof Remote"> Waterproof Remote</label>
    <br>
    <strong>Data/Phone:</strong>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Dec Phone Systems"> Dec Phone Systems</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="BT Phone Point"> BT Phone Point</label>
    <label><input type="checkbox" name="pool_features_${idx}[]" value="Data Point"> Data Point</label>
  </div>
`;

const externalOptions = (idx) => `
  <div class="specialty-options external-options" data-specialty-block="external">
    <strong>Audio:</strong>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Multi-Room Audio"> Multi-Room Audio</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Standalone"> Standalone</label>
    <br>
    <strong>Speakers:</strong>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Surface-Mount / Wall-Mount Speakers"> Surface-Mount / Wall-Mount Speakers</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Landscape Satellite (Stake) Speakers"> Landscape Satellite (Stake) Speakers</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Rock"> Rock</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Bollard Speakers"> Bollard Speakers</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="In-Ground/Subwoofer Units"> In-Ground/Subwoofer Units</label>
    <br>
    <strong>Speaker Finish:</strong>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Black"> Black</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="White"> White</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Custom"> Custom</label>
    <br>
    <strong>Audio Sources:</strong>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Radio (DAB/Internet)"> Radio (DAB/Internet)</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Streaming (e.g., Spotify, Apple Music etc.)"> Streaming (e.g., Spotify, Apple Music etc.)</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="CDs"> CDs</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Turn Table"> Turn Table</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Local input"> Local input</label>
    <br>
    <strong>TV Type:</strong>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Wall-mounted TV"> Wall-mounted TV</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Projector"> Projector</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Hidden Screen"> Hidden Screen</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Automated Screen Lift"> Automated Screen Lift</label>
    <br>
    <strong>TV Size:</strong>
    <label><input type="checkbox" name="external_features_${idx}[]" value="32-43 inches"> 32-43 inches</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="43-55 inches"> 43-55 inches</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="55-65 inches"> 55-65 inches</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="65-85 inches"> 65-85 inches</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="85-100 inches"> 85-100 inches</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="100+ inches"> 100+ inches</label>
    <br>
    <strong>Video Sources:</strong>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Sky"> Sky</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Freeview"> Freeview</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="BT TV"> BT TV</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Amazon Fire TV"> Amazon Fire TV</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Apple TV"> Apple TV</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Video Conferencing"> Video Conferencing</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Local Input (Games Console, Laptop etc.)"> Local Input (Games Console, Laptop etc.)</label>
    <br>
    <strong>Lighting & Climate:</strong>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Lighting Control"> Lighting Control</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Motorized Blinds"> Motorized Blinds</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Heater Control"> Heater Control</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Renewable Energy"> Renewable Energy</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Smart Radiators"> Smart Radiators</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Automated Window Tinting"> Automated Window Tinting</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Underfloor Heating Control"> Underfloor Heating Control</label>
    <br>
    <strong>Security:</strong>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Interior Camera"> Interior Camera</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Exterior Camera"> Exterior Camera</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Video Intercom"> Video Intercom</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Smart Locks"> Smart Locks</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Motion Sensors"> Motion Sensors</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Smart Doorbell"> Smart Doorbell</label>
    <br>
    <strong>Control Option:</strong>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Handheld Remote"> Handheld Remote</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Touch Screen Tabletop"> Touch Screen Tabletop</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Touch Screen On-Wall"> Touch Screen On-Wall</label>
    <label><input type="checkbox" name="external_features_${idx}[]" value="Waterproof Remote"> Waterproof Remote</label>
  </div>
`;

const gymOptions = (idx) => `
  <div class="specialty-options gym-options" data-specialty-block="gym">
    <strong>Audio:</strong>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Multi-Room Audio"> Multi-Room Audio</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Standalone"> Standalone</label>
    <br>
    <strong>Speakers:</strong>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="In-wall"> In-wall</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="In-Ceiling"> In-Ceiling</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Wall-Mount"> Wall-Mount</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Pendant"> Pendant</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Plaster In"> Plaster In</label>
    <br>
    <strong>Speaker Finish:</strong>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Black"> Black</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="White"> White</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Custom"> Custom</label>
    <br>
    <strong>Audio Sources:</strong>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Radio (DAB/Internet)"> Radio (DAB/Internet)</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Streaming (e.g., Spotify, Apple Music etc.)"> Streaming (e.g., Spotify, Apple Music etc.)</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Local input"> Local input</label>
    <br>
    <strong>TV Type:</strong>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Wall-mounted TV"> Wall-mounted TV</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Projector"> Projector</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Ceiling Mounted"> Ceiling Mounted</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Hidden Screen"> Hidden Screen</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Automated Screen Lift"> Automated Screen Lift</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Motorised Mount"> Motorised Mount</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Mirror TV"> Mirror TV</label>
    <br>
    <strong>TV Size:</strong>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="32-43 inches"> 32-43 inches</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="43-55 inches"> 43-55 inches</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="55-65 inches"> 55-65 inches</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="65-85 inches"> 65-85 inches</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="85-100 inches"> 85-100 inches</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="100+ inches"> 100+ inches</label>
    <br>
    <strong>Video Sources:</strong>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Sky"> Sky</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Freeview"> Freeview</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="BT TV"> BT TV</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Amazon Fire TV"> Amazon Fire TV</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Apple TV"> Apple TV</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Kaleidescape Movie Player"> Kaleidescape Movie Player</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Video Conferencing"> Video Conferencing</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Local Input (Games Console, Laptop etc.)"> Local Input (Games Console, Laptop etc.)</label>
    <br>
    <strong>Lighting & Climate:</strong>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Lighting Control"> Lighting Control</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Ventilation Control"> Ventilation Control</label>
    <br>
    <strong>Security:</strong>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Interior Camera"> Interior Camera</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Smart Locks"> Smart Locks</label>
    <br>
    <strong>Control Option:</strong>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Handheld Remote"> Handheld Remote</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Touch Screen Tabletop"> Touch Screen Tabletop</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Touch Screen On-Wall"> Touch Screen On-Wall</label>
    <br>
    <strong>Data/Phone:</strong>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Dec Phone Systems"> Dec Phone Systems</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="BT Phone Point"> BT Phone Point</label>
    <label><input type="checkbox" name="gym_features_${idx}[]" value="Data Point"> Data Point</label>
  </div>
`;

// --- Room Area HTML Template ---

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
      <div class="standard-room-options">
        <!-- Insert all standard options here -->
        <label><input type="checkbox" name="standard_feature_${idx}[]" value="Standard Feature 1"> Standard Feature 1</label>
        <label><input type="checkbox" name="standard_feature_${idx}[]" value="Standard Feature 2"> Standard Feature 2</label>
        <!-- ... more standard options ... -->
      </div>
      <button type="button" class="remove-room-area-btn" style="margin-top:1em;">Remove Room/Area</button>
    </fieldset>
  </div>
`;

// --- Specialty Option Toggle Logic ---

document.addEventListener('DOMContentLoaded', () => {
  const roomAreaBlocks = document.getElementById('room-area-blocks');
  const addRoomBtn = document.getElementById('add-room-btn');
  let roomAreaCount = 0;

  addRoomBtn.addEventListener('click', addRoomAreaBlock);

  function addRoomAreaBlock() {
    roomAreaCount += 1;
    roomAreaBlocks.insertAdjacentHTML('beforeend', roomAreaHTML(roomAreaCount));
  }

  // Handle specialty toggles and removal
  roomAreaBlocks.addEventListener('change', function(e) {
    if (e.target.classList.contains('specialty-toggle')) {
      const specialty = e.target.dataset.specialty;
      const idx = e.target.dataset.idx;
      const block = e.target.closest('.room-area-block');
      const standardOptions = block.querySelector('.standard-room-options');
      const specialtyContainer = block.querySelector(`#room-specialty-options-${idx}`);

      // Only one specialty at a time: uncheck others
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
        // If all unchecked, restore standard options and clear specialty
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

  // Add the first block by default
  addRoomAreaBlock();
});
