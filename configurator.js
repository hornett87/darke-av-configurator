// --- Tab/section switching ---
function showMultiroomMusicConfigurator() {
  document.getElementById("main-system-selection").style.display = "none";
  document.getElementById("music-step-1").style.display = "";
  document.getElementById("music-step-2").style.display = "none";
  document.getElementById("music-step-3").style.display = "none";
  resetConfigurator();
}
function hideMultiroomMusicConfigurator() {
  document.getElementById("main-system-selection").style.display = "";
  document.getElementById("music-step-1").style.display = "none";
  document.getElementById("music-step-2").style.display = "none";
  document.getElementById("music-step-3").style.display = "none";
}
function showStep(n) {
  document.getElementById('music-step-1').style.display = n === 1 ? '' : 'none';
  document.getElementById('music-step-2').style.display = n === 2 ? '' : 'none';
  document.getElementById('music-step-3').style.display = n === 3 ? '' : 'none';
}

// --- Configurator state ---
const allRooms = ["Hall", "Lounge", "Kitchen", "Bedroom", "Dining Room"];
let selectedRooms = [];
let roomOptions = {}; // { roomName: { option: '', extraPair: false } }
let expandedRoom = null;

function resetConfigurator() {
  selectedRooms = [];
  roomOptions = {};
  expandedRoom = null;
  renderRoomSelection();
}

// --- STEP 1: Room Selection ---
function renderRoomSelection() {
  const roomSelectionList = document.getElementById('room-selection-list');
  roomSelectionList.innerHTML = '';
  allRooms.forEach(room => {
    const btn = document.createElement("button");
    btn.textContent = room;
    btn.className = "room-btn";
    btn.classList.toggle("selected", selectedRooms.includes(room));
    btn.onclick = () => {
      btn.classList.toggle("selected");
      if (btn.classList.contains("selected")) {
        if (!selectedRooms.includes(room)) selectedRooms.push(room);
      } else {
        selectedRooms = selectedRooms.filter(r => r !== room);
      }
    };
    roomSelectionList.appendChild(btn);
  });
}
document.addEventListener('DOMContentLoaded', function() {
  // Attach event handlers after DOM is ready
  renderRoomSelection();
  if(document.getElementById('to-step-2')) {
    document.getElementById('to-step-2').onclick = () => {
      if (selectedRooms.length > 0) {
        showStep(2);
        renderRoomList();
      } else {
        alert("Please select at least one room.");
      }
    };
  }
  if(document.getElementById('back-to-step-1')) {
    document.getElementById('back-to-step-1').onclick = () => showStep(1);
  }
  if(document.getElementById('add-room-btn')) {
    document.getElementById('add-room-btn').onclick = () => {
      const name = prompt("Enter new room name:");
      if (name && !selectedRooms.includes(name)) {
        selectedRooms.push(name);
        renderRoomList();
      }
    };
  }
  if(document.getElementById('to-step-3')) {
    document.getElementById('to-step-3').onclick = () => {
      alert("Proceeding to next step with rooms: " + selectedRooms.join(", "));
    };
  }
  if(document.getElementById('back-to-step-2')) {
    document.getElementById('back-to-step-2').onclick = () => showStep(2);
  }
});

// --- STEP 2: Room List ---
function renderRoomList() {
  const roomList = document.getElementById('configured-room-list');
  roomList.innerHTML = "";
  selectedRooms.forEach(room => {
    const div = document.createElement("div");
    div.className = "room-card";
    div.innerHTML = `
      <span class="room-icon">🛋️</span>
      <span class="room-name">${room}</span>
      <button class="room-remove">REMOVE ROOM</button>
      <a href="#" class="room-configure">CONFIGURE</a>
      <button class="room-expand">+</button>
    `;
    // Remove
    div.querySelector(".room-remove").onclick = () => {
      selectedRooms = selectedRooms.filter(r => r !== room);
      renderRoomList();
    };
    // Expand room
    div.querySelector(".room-expand").onclick = () => {
      expandedRoom = room;
      showStep(3);
      renderRoomExpanded();
    };
    // Configure (same as expand for now)
    div.querySelector(".room-configure").onclick = e => {
      e.preventDefault();
      expandedRoom = room;
      showStep(3);
      renderRoomExpanded();
    };
    roomList.appendChild(div);
  });
}

// --- STEP 3: Room Expanded Config ---
function renderRoomExpanded() {
  const container = document.getElementById('expanded-room-config');
  container.innerHTML = "";
  if (!expandedRoom) return;
  const config = roomOptions[expandedRoom] || {};
  // Card container
  const card = document.createElement("div");
  card.className = "room-card expanded";
  // Header
  const header = document.createElement("div");
  header.className = "room-header";
  header.innerHTML = `
    <span class="room-icon">🛋️</span>
    <span class="room-name">${expandedRoom}</span>
    <button class="room-remove">REMOVE ROOM</button>
    <a href="#" class="room-configure">CONFIGURE</a>
    <button class="room-collapse">–</button>
  `;
  // Remove/collapse logic
  header.querySelector(".room-remove").onclick = () => {
    selectedRooms = selectedRooms.filter(r => r !== expandedRoom);
    expandedRoom = null;
    showStep(2);
    renderRoomList();
  };
  header.querySelector(".room-configure").onclick = e => e.preventDefault();
  header.querySelector(".room-collapse").onclick = () => {
    expandedRoom = null;
    showStep(2);
    renderRoomList();
  };
  card.appendChild(header);
  // Options grid
  const speakerOptions = [
    {
      name: "Pre Wired Only",
      desc: "If you want to future proof your home adding speaker cabling for future in ceiling speakers will allow the speakers and music streamer to be added at a later date without mess or disruption."
    },
    {
      name: "Bronze Quality",
      desc: "Sonance 6\" Bronze level in ceiling speakers provide great cost effective audio quality for small and medium sized rooms."
    },
    {
      name: "Silver Quality",
      desc: "Sonance 6\" Silver level in ceiling speakers deliver superb detailed and powerful sound."
    },
    {
      name: "Gold Quality",
      desc: "The Sonance 8\" Gold reference in ceiling speakers provide genuine reference quality audio for the best discrete in room sound possible."
    },
    {
      name: "External (Waterproof) Speakers",
      desc: "Add a pair of external speakers to outdoor areas. The Sonance Mariner speakers can cope with all weathers and sound superb in the open. Play music for any outdoor occasion."
    }
  ];
  const optionsGrid = document.createElement("div");
  optionsGrid.className = "speaker-options-grid";
  speakerOptions.forEach(opt => {
    const optDiv = document.createElement("div");
    optDiv.className = "speaker-option";
    optDiv.innerHTML = `
      <div class="option-title">${opt.name}</div>
      <div class="option-desc">${opt.desc}</div>
      <button class="option-select${config.option === opt.name ? " selected" : ""}">Select +</button>
    `;
    optDiv.querySelector(".option-select").onclick = function() {
      config.option = opt.name;
      roomOptions[expandedRoom] = { ...config };
      renderRoomExpanded();
    };
    optionsGrid.appendChild(optDiv);
  });
  card.appendChild(optionsGrid);
  // Additional options
  const addOptsDiv = document.createElement("div");
  addOptsDiv.className = "additional-options";
  addOptsDiv.innerHTML = `
    <div class="additional-title">Additional Options</div>
    <div class="additional-desc">
      For large or irregular spaces add a second pair of speakers to distribute the audio throughout the space evenly.
    </div>
    <button class="toggle-2nd-pair${config.extraPair ? " selected" : ""}">
      <span class="toggle-dot"></span>
      Add a 2nd pair of speakers
    </button>
  `;
  addOptsDiv.querySelector(".toggle-2nd-pair").onclick = function() {
    config.extraPair = !config.extraPair;
    roomOptions[expandedRoom] = { ...config };
    renderRoomExpanded();
  };
  card.appendChild(addOptsDiv);
  // Proceed to next room
  const proceedBtn = document.createElement("button");
  proceedBtn.className = "proceed-room";
  proceedBtn.textContent = "Proceed to next room →";
  proceedBtn.onclick = () => {
    expandedRoom = null;
    showStep(2);
    renderRoomList();
  };
  card.appendChild(proceedBtn);
  container.appendChild(card);
}
