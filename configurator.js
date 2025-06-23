// -- Multi-step Configurator Logic --

// --- STEP 1: Property Details ---
const propertyStep = `
  <div class="step-section" data-step="1">
    <div class="step-header">
      <div class="step-number">1.</div>
      <div class="step-title">Property Details</div>
      <button class="step-collapse" aria-label="Collapse"><span>–</span></button>
    </div>
    <a class="step-info-link" href="#">MORE INFO &gt;</a>
    <label for="size-house">Size of house <span style="font-weight:normal;color:#7d8ca6">(Sq ft)</span></label>
    <select id="size-house" class="config-input">
      <option>Please select</option>
      <option>&lt; 1500</option>
      <option>1500–2500</option>
      <option>2500–3500</option>
      <option>3500–5000</option>
      <option>5000+</option>
    </select>
    <label for="postcode">Postcode</label>
    <span class="help-text">Please detail the postcode of the property you would like you a smart system installing in</span>
    <input type="text" id="postcode" class="config-input" placeholder="Postcode">
    <label for="project-type">Project Type</label>
    <span class="help-text">Type of home project will your smart system be installed in to</span>
    <select id="project-type" class="config-input">
      <option>Please select</option>
      <option>Renovation</option>
      <option>Self Build</option>
      <option>Extension</option>
      <option>Retrofit</option>
      <option>Apartment Fit-out</option>
    </select>
    <div class="config-row">
      <div>
        <label>Property Type</label>
        <div class="config-btn-group inline" id="property-type-group">
          <button type="button" class="config-btn" data-value="House">House</button>
          <button type="button" class="config-btn" data-value="Apartment">Apartment</button>
        </div>
      </div>
      <div>
        <label>Are you able to install new wiring as required?</label>
        <div class="config-btn-group inline" id="wiring-group">
          <button type="button" class="config-btn" data-value="Yes">Yes</button>
          <button type="button" class="config-btn" data-value="No">No</button>
        </div>
      </div>
    </div>
    <div class="config-row">
      <div>
        <label for="floors">No. of floors</label>
        <select id="floors" class="config-input">
          <option>Please select</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4+</option>
        </select>
      </div>
      <div>
        <label for="broadband">Broadband Supplier</label>
        <input type="text" id="broadband" class="config-input" placeholder="Broadband Supplier">
      </div>
    </div>
    <button class="next-step-btn" id="step1-next">I'm finished, next step <span style="font-size:1.3rem;">&#x25BC;</span></button>
  </div>
`;

// --- STEP 2: Room Information ---
const defaultRooms = [
  "Hall", "Lounge", "Kitchen Dining living", "Utility", "Cinema room", "Garage",
  "Master Bed", "Master Ensuite", "Bed 2", "Bed 2 Ensuite", "Bed 3", "Bed 3 Ensuite",
  "Bed 4", "Bed 5", "House Bathroom", "Garden"
];
const roomStep = `
  <div class="step-section" data-step="2">
    <div class="step-header">
      <div class="step-number">2.</div>
      <div class="step-title">Room Information</div>
      <button class="step-collapse" aria-label="Collapse"><span>–</span></button>
    </div>
    <div class="step-title" style="font-size:1.1rem;color:#2787e2;font-weight:700;margin-bottom:0.1rem;">Room Information</div>
    <span class="help-text" style="margin-bottom:0.6rem;">Please specify all the rooms names in your house (including front & rear gardens where applicable)</span>
    <a class="step-info-link" href="#">MORE INFO &gt;</a>
    <div class="room-tags-grid" id="room-tags">
      <!-- Room tags will be rendered here -->
    </div>
    <button class="add-room-btn" id="add-room-btn">Add new room +</button>
    <button class="next-step-btn" id="step2-next">I'm finished, next step <span style="font-size:1.3rem;">&#x25BC;</span></button>
  </div>
`;

// --- STEP 3: Central Equipment Hub ---
const hubStep = `
  <div class="step-section" data-step="3">
    <div class="step-header">
      <div class="step-number">3.</div>
      <div class="step-title">Central Smart System Equipment Hub</div>
      <button class="step-collapse" aria-label="Collapse"><span>–</span></button>
    </div>
    <a class="step-info-link" href="#">MORE INFO &gt;</a>
    <label for="hub-room" style="color:#2787e2;">Which room would you like your Smart Home Equipment Hub to be located in?</label>
    <select id="hub-room" class="config-input">
      <option>Please select</option>
    </select>
    <label for="equipment-rack" style="color:#2787e2;">Central Equipment Rack</label>
    <span class="help-text">Select the most suitable type of central equipment rack to fit the space available</span>
    <select id="equipment-rack" class="config-input">
      <option>Please select</option>
      <option>Full Height (42U)</option>
      <option>Half Height (22U)</option>
      <option>Wall Mounted</option>
      <option>Free Standing Cabinet</option>
      <option>No Central Rack Required</option>
    </select>
    <button class="next-step-btn" id="step3-next">I'm finished, next step <span style="font-size:1.3rem;">&#x25BC;</span></button>
  </div>
`;

// --- STEP 4: Home Network ---
const homeNetworkStep = `
  <div class="step-section" data-step="4">
    <div class="step-header">
      <div class="step-number">4.</div>
      <div class="step-title">Home Network</div>
      <button class="step-collapse" aria-label="Collapse"><span>–</span></button>
    </div>
    <div style="margin-bottom:1.1rem;">
      <span style="color:#222;font-size:1.07rem;">
        A high quality wired and wireless home network to provide WiFi throughout your home and a robust hard wired network backbone to your smart system is absolutely essential and is included with every SMS system along with a professional Smart Equipment hub rack which ensures your smart home system performs as it should and that your family have reliable WiFi throughout the house.
      </span>
    </div>
    <img class="step4-img" src="https://smarthomesmadesimple.co.uk/wp-content/uploads/2022/10/Wifi-coverage-graphic.png" alt="Home Network Example">
    <button class="next-step-btn" id="step4-next">I'm finished, next step <span style="font-size:1.3rem;">&#x25BC;</span></button>
  </div>
`;

// --- STEP 5: System Configuration ---
const configSystems = [
  {
    id: "music",
    title: "Multiroom Music Systems",
    icon: "https://cdn-icons-png.flaticon.com/512/727/727245.png",
    image: "https://www.sony.com/image/sony-music.jpg"
  },
  {
    id: "tv",
    title: "TV Systems",
    icon: "https://cdn-icons-png.flaticon.com/512/1792/1792892.png",
    image: "https://www.sony.com/image/sony-tv.jpg"
  },
  {
    id: "gate",
    title: "Gate and Door Entry Systems",
    icon: "https://cdn-icons-png.flaticon.com/512/483/483356.png",
    image: "https://www.2n.cz/en_GB/images/product/2n-ipu-m-compact.png"
  },
  {
    id: "heating",
    title: "Smart Heating and Hot Water Control Systems",
    icon: "https://cdn-icons-png.flaticon.com/512/3076/3076923.png",
    image: "https://www.hivehome.com/images/hive-thermostat.jpg"
  },
  {
    id: "lighting",
    title: "Smart Lighting Control Systems",
    icon: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
    image: "https://www.lutron.com/images/home-automation-lighting-control.jpg"
  },
  {
    id: "blinds",
    title: "Electric Blinds and Curtains",
    icon: "https://cdn-icons-png.flaticon.com/512/860/860829.png",
    image: "https://www.somfysystems.com/img/blinds.jpg"
  },
  {
    id: "cctv",
    title: "CCTV Systems",
    icon: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
    image: "https://www.hikvision.com/content/dam/hikvision/en/products/cameras/network-cameras/2mp/DS-2CD1027G0-L/DS-2CD1027G0-L.png"
  },
  {
    id: "cinema",
    title: "Cinema and Media Room Systems",
    icon: "https://cdn-icons-png.flaticon.com/512/727/727245.png",
    image: "https://cdn.pixabay.com/photo/2017/01/06/19/15/home-theater-1954369_1280.jpg"
  },
  {
    id: "control4",
    title: "Control4 Touch panels, Remotes and Smart phone/tablet Control",
    icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    image: "https://www.control4.com/images/remote-control.jpg"
  }
];
let selectedConfigs = configSystems.map(s => s.id);

const configStep = `
  <div class="step-section" data-step="5">
    <div class="step-header">
      <div class="step-number">Step 2</div>
      <div class="step-title">Configuration</div>
      <button class="step-collapse" aria-label="Collapse"><span>–</span></button>
    </div>
    <span style="color:#2787e2;font-size:1.15rem;font-weight:700;display:block;margin-bottom:0.2rem;">Configuration</span>
    <span class="help-text" style="margin-bottom:0.6rem;">
      Just click on the system you want to configure. If you do not want to configure a system simply remove it. You can add it back at any time.
    </span>
    <a class="step-info-link" href="#">MORE INFO &gt;</a>
    <div class="config-system-grid" id="config-system-grid"></div>
  </div>
`;

// -- RENDER LOGIC --
const configurator = document.getElementById("configurator");
let currentStep = 1;
let roomNames = [...defaultRooms];

function renderStep(step) {
  configurator.innerHTML = "";
  switch(step) {
    case 1:
      configurator.innerHTML = propertyStep;
      setupStep1();
      break;
    case 2:
      configurator.innerHTML = roomStep;
      renderRoomTags();
      setupStep2();
      break;
    case 3:
      configurator.innerHTML = hubStep;
      setupStep3();
      break;
    case 4:
      configurator.innerHTML = homeNetworkStep;
      setupStep4();
      break;
    case 5:
      configurator.innerHTML = configStep;
      renderConfigSystems();
      setupStep5();
      break;
  }
  document.querySelector(".step-collapse").onclick = () => {
    const section = document.querySelector(".step-section");
    if(section.style.maxHeight) {
      section.style.maxHeight = "";
    } else {
      section.style.maxHeight = section.offsetHeight + "px";
      setTimeout(() => section.style.maxHeight = "56px", 50);
    }
  };
}

// STEP 1 EVENTS
function setupStep1() {
  // Toggle group logic
  document.querySelectorAll("#property-type-group .config-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll("#property-type-group .config-btn").forEach(b=>b.classList.remove("selected"));
      btn.classList.add("selected");
    };
  });
  document.querySelectorAll("#wiring-group .config-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll("#wiring-group .config-btn").forEach(b=>b.classList.remove("selected"));
      btn.classList.add("selected");
    };
  });
  document.getElementById("step1-next").onclick = () => renderStep(2);
}

// STEP 2 EVENTS
function renderRoomTags() {
  const grid = document.getElementById("room-tags");
  grid.innerHTML = "";
  roomNames.forEach((room, i) => {
    const tag = document.createElement("div");
    tag.className = "room-tag";
    tag.innerHTML = `${room} <button class="remove-tag" title="Remove room" data-i="${i}">&times;</button>`;
    grid.appendChild(tag);
  });
  grid.querySelectorAll(".remove-tag").forEach(btn => {
    btn.onclick = e => {
      const idx = Number(btn.dataset.i);
      roomNames.splice(idx, 1);
      renderRoomTags();
    };
  });
}
function setupStep2() {
  renderRoomTags();
  document.getElementById("add-room-btn").onclick = () => {
    const room = prompt("Enter new room name:");
    if(room && room.trim().length > 0 && !roomNames.includes(room.trim())) {
      roomNames.push(room.trim());
      renderRoomTags();
    }
  };
  document.getElementById("step2-next").onclick = () => renderStep(3);
}

// STEP 3 EVENTS
function setupStep3() {
  const select = document.getElementById("hub-room");
  roomNames.forEach(room => {
    const opt = document.createElement("option");
    opt.value = room;
    opt.text = room;
    select.appendChild(opt);
  });
  document.getElementById("step3-next").onclick = () => renderStep(4);
}

// STEP 4 EVENTS
function setupStep4() {
  document.getElementById("step4-next").onclick = () => renderStep(5);
}

// STEP 5 EVENTS
function renderConfigSystems() {
  const grid = document.getElementById("config-system-grid");
  grid.innerHTML = "";
  configSystems.forEach(system => {
    if (!selectedConfigs.includes(system.id)) return;
    const card = document.createElement("div");
    card.className = "config-system-card";
    card.innerHTML = `
      <div class="config-system-image"><img src="${system.icon}" alt=""></div>
      <div class="config-system-main">
        <div class="config-system-title">${system.title}</div>
        <div class="config-system-actions">
          <a href="#" class="configure-link" data-id="${system.id}">CONFIGURE</a>
          <a href="#" class="remove-link" data-id="${system.id}">Remove &times;</a>
        </div>
      </div>
      <div class="config-system-arrow">&gt;</div>
    `;
    grid.appendChild(card);
  });
  // Add back removed systems
  configSystems.forEach(system => {
    if (selectedConfigs.includes(system.id)) return;
    const card = document.createElement("div");
    card.className = "config-system-card";
    card.style.opacity = "0.6";
    card.innerHTML = `
      <div class="config-system-image"><img src="${system.icon}" alt=""></div>
      <div class="config-system-main">
        <div class="config-system-title">${system.title}</div>
        <div class="config-system-actions">
          <a href="#" class="configure-link" data-id="${system.id}">Add back</a>
        </div>
      </div>
      <div class="config-system-arrow">&gt;</div>
    `;
    grid.appendChild(card);
  });
}
function setupStep5() {
  const grid = document.getElementById("config-system-grid");
  grid.addEventListener("click", function(e) {
    if(e.target.classList.contains("remove-link")) {
      e.preventDefault();
      const id = e.target.dataset.id;
      selectedConfigs = selectedConfigs.filter(sid => sid !== id);
      renderConfigSystems();
    } else if(e.target.classList.contains("configure-link")) {
      e.preventDefault();
      alert("Configuration form for: " + e.target.closest(".config-system-card").querySelector(".config-system-title").textContent);
    }
  });
}

// -- INITIALIZE --
renderStep(currentStep);
