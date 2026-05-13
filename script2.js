// Initial workout data (Default Template) with weeks and exercise library
const defaultWorkoutData = {
  weeks: [
    {
      sessions: {
        A: [
          { name: "Hack Squat", sets: 3, repsMin: 8, repsMax: 12, category: "quads" },
          { name: "Lat Pulldown", sets: 3, repsMin: 8, repsMax: 12, category: "lats" },
          { name: "Leg Extension", sets: 2, repsMin: 10, repsMax: 15, category: "quads" },
          { name: "Chest Supported Row", sets: 3, repsMin: 8, repsMax: 12, category: "upper back" },
          { name: "EZ-Bar Curl", sets: 3, repsMin: 10, repsMax: 15, category: "biceps" },
          { name: "Wrist Curl", sets: 3, repsMin: 15, repsMax: 20, category: "forearms" },
          { name: "Wrist Extension", sets: 3, repsMin: 15, repsMax: 20, category: "forearms" },
          { name: "Neck Extension", sets: 3, repsMin: 15, repsMax: 20, category: "neck" },
          { name: "Reverse Cable Fly", sets: 4, repsMin: 8, repsMax: 12, category: "rear delts" }
        ],
        B: [
          { name: "Incline Machine Press", sets: 3, repsMin: 8, repsMax: 12, category: "chest" },
          { name: "Overhead Tricep Extension", sets: 2, repsMin: 10, repsMax: 15, category: "triceps" },
          { name: "Cable Fly", sets: 3, repsMin: 10, repsMax: 15, category: "chest" },
          { name: "Machine Lateral Raise", sets: 3, repsMin: 10, repsMax: 15, category: "side delts" },
          { name: "Back Extensions", sets: 2, repsMin: 10, repsMax: 15, category: "lower back" },
          { name: "Seated Leg Curl", sets: 3, repsMin: 8, repsMax: 12, category: "hamstrings" },
          { name: "Standing Leg Curl", sets: 2, repsMin: 8, repsMax: 12, category: "hamstrings" },
          { name: "Neck Curl", sets: 3, repsMin: 15, repsMax: 20, category: "neck" },
          { name: "Wrist Curl", sets: 3, repsMin: 15, repsMax: 20, category: "forearms" },
          { name: "Wrist Extension", sets: 3, repsMin: 15, repsMax: 20, category: "forearms" }
        ],
        C: [
          { name: "Bulgarian Split Squats (Smith Machine)", sets: 3, repsMin: 8, repsMax: 12, category: "quads" },
          { name: "Wide-Grip Pulldown", sets: 3, repsMin: 8, repsMax: 12, category: "lats" },
          { name: "Machine Shoulder Press", sets: 3, repsMin: 8, repsMax: 12, category: "front delts" },
          { name: "Lat Prayer", sets: 2, repsMin: 10, repsMax: 15, category: "lats" },
          { name: "Hammer Curl", sets: 3, repsMin: 10, repsMax: 15, category: "biceps" },
          { name: "Wrist Curl", sets: 3, repsMin: 15, repsMax: 20, category: "forearms" },
          { name: "Wrist Extension", sets: 3, repsMin: 15, repsMax: 20, category: "forearms" },
          { name: "Neck Extension", sets: 3, repsMin: 15, repsMax: 20, category: "neck" },
          { name: "Dumbbell Shrug", sets: 4, repsMin: 12, repsMax: 15, category: "traps" }
        ],
        D: [
          { name: "Cable Row", sets: 3, repsMin: 8, repsMax: 12, category: "upper back" },
          { name: "Slight Incline Dumbbell Press", sets: 3, repsMin: 8, repsMax: 12, category: "chest" },
          { name: "Overhead Tricep Extension", sets: 2, repsMin: 8, repsMax: 12, category: "triceps" },
          { name: "Lateral Raise Machine", sets: 2, repsMin: 8, repsMax: 12, category: "side delts" },
          { name: "Wrist Curl", sets: 3, repsMin: 15, repsMax: 20, category: "forearms" },
          { name: "Wrist Extension", sets: 3, repsMin: 15, repsMax: 20, category: "forearms" },
          { name: "Neck Curl", sets: 3, repsMin: 15, repsMax: 20, category: "neck" },
          { name: "Reverse Machine Fly", sets: 4, repsMin: 8, repsMax: 12, category: "rear delts" }
        ],
        E: [
          { name: "Leg Press", sets: 3, repsMin: 6, repsMax: 8, category: "quads" },
          { name: "Close Grip Lat Pulldown", sets: 3, repsMin: 10, repsMax: 15, category: "lats" },
          { name: "Seated Dumbbell Press", sets: 2, repsMin: 10, repsMax: 15, category: "front delts" },
          { name: "Dumbbell Curl", sets: 3, repsMin: 8, repsMax: 12, category: "biceps" },
          { name: "Wrist Curl", sets: 3, repsMin: 15, repsMax: 20, category: "forearms" },
          { name: "Wrist Extension", sets: 3, repsMin: 15, repsMax: 20, category: "forearms" },
          { name: "Seated Leg Curl", sets: 3, repsMin: 8, repsMax: 12, category: "hamstrings" },
          { name: "Standing Leg Curl", sets: 3, repsMin: 8, repsMax: 12, category: "hamstrings" },
          { name: "Neck Extension", sets: 3, repsMin: 15, repsMax: 20, category: "neck" }
        ],
        F: [
          { name: "Back Extensions", sets: 2, repsMin: 10, repsMax: 15, category: "lower back" },
          { name: "Chest Supported Row", sets: 3, repsMin: 8, repsMax: 12, category: "upper back" },
          { name: "Overhead Tricep Extension", sets: 2, repsMin: 10, repsMax: 15, category: "triceps" },
          { name: "Dumbbell Lateral Raise", sets: 2, repsMin: 10, repsMax: 15, category: "side delts" },
          { name: "Machine Fly", sets: 3, repsMin: 8, repsMax: 12, category: "chest" },
          { name: "Neck Curl", sets: 3, repsMin: 15, repsMax: 20, category: "neck" },
          { name: "Wrist Curl", sets: 3, repsMin: 15, repsMax: 20, category: "forearms" },
          { name: "Wrist Extension", sets: 3, repsMin: 15, repsMax: 20, category: "forearms" },
          { name: "Dumbbell Shrug", sets: 4, repsMin: 12, repsMax: 15, category: "traps" }
        ]
      }
    }
  ],
  categories: ["front delts", "rear delts", "side delts", "triceps", "biceps", "hamstrings", "quads", "calves", "neck", "forearms", "chest", "lats", "upper back", "lower back", "traps"],
  exerciseLibrary: {}
};


// Load from localStorage or use default
let workoutData = JSON.parse(localStorage.getItem('workoutSplitData')) || JSON.parse(JSON.stringify(defaultWorkoutData));

// Migration: wrap old {sessions} into weeks
if (!workoutData.weeks) {
  const oldSessions = workoutData.sessions || {};
  workoutData = {
    weeks: [{ sessions: oldSessions }],
    categories: workoutData.categories || JSON.parse(JSON.stringify(defaultWorkoutData.categories)),
    exerciseLibrary: {}
  };
}

let currentWeekIndex = parseInt(localStorage.getItem('currentWeekIndex') || '0', 10);
if (isNaN(currentWeekIndex) || currentWeekIndex < 0 || currentWeekIndex >= workoutData.weeks.length) currentWeekIndex = 0;

let currentSession = null;
let currentExerciseIndex = null; // for editing
let currentExerciseName = null; // for category change
let pickerSelected = { name: null, category: null };
let swapMode = false;       // true when picker is opened for swapping
let swapExerciseIndex = null; // index of the exercise being swapped

// Escape user-controlled strings before inserting them into HTML via innerHTML.
// Use for visible text (inside spans, divs, etc.).
function escapeHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Encode user-controlled strings as a safe JS string literal for use inside
// inline event handler attributes, e.g. onclick="foo(${jsAttr(name)}, 1)".
// JSON.stringify quotes + escapes JS metachars; escapeHtml then makes the result
// safe as an HTML attribute value. The HTML parser decodes &quot; back to ", so
// the JS sees a valid double-quoted string regardless of what's inside `s`.
function jsAttr(s) {
  return escapeHtml(JSON.stringify(String(s == null ? '' : s)));
}

// Validate sets/reps fields. Returns null if OK, or an error message string.
function validateExercise(input) {
  const s = Number(input.sets);
  const rmin = Number(input.repsMin);
  const rmax = Number(input.repsMax);
  if (!Number.isInteger(s) || s < 1) return 'Sets must be a whole number of 1 or more.';
  if (!Number.isInteger(rmin) || rmin < 1) return 'Reps Min must be a whole number of 1 or more.';
  if (!Number.isInteger(rmax) || rmax < 1) return 'Reps Max must be a whole number of 1 or more.';
  if (rmin > rmax) return 'Reps Min cannot be greater than Reps Max.';
  return null;
}

// Save to localStorage helper
function saveToLocalStorage() {
  try {
    localStorage.setItem('workoutSplitData', JSON.stringify(workoutData));
    localStorage.setItem('currentWeekIndex', String(currentWeekIndex));
  } catch (err) {
    if (err && (err.name === 'QuotaExceededError' || err.code === 22 || err.code === 1014)) {
      alert('Browser storage is full. Export your workout to CSV and use "Reset Default" to free up space, then try again.');
    } else {
      alert('Could not save changes: ' + (err && err.message ? err.message : err));
    }
  }
}

// Initialize exercise library from weeks' sessions and existing library
function initializeExerciseLibrary() {
  if (!workoutData.exerciseLibrary) workoutData.exerciseLibrary = {};
  // Ensure keys
  workoutData.categories.forEach(cat => {
    if (!workoutData.exerciseLibrary[cat]) workoutData.exerciseLibrary[cat] = [];
  });
  const setMap = {};
  workoutData.categories.forEach(cat => setMap[cat] = new Set(workoutData.exerciseLibrary[cat] || []));
  workoutData.weeks.forEach(week => {
    Object.values(week.sessions || {}).forEach(list => {
      list.forEach(ex => {
        if (setMap[ex.category]) setMap[ex.category].add(ex.name);
      });
    });
  });
  Object.keys(setMap).forEach(cat => {
    workoutData.exerciseLibrary[cat] = Array.from(setMap[cat]).sort((a, b) => a.localeCompare(b));
  });
}

// Reset to default
function resetToDefault() {
  if (confirm('This will erase all your custom changes and restore the default template. Are you sure?')) {
    workoutData = JSON.parse(JSON.stringify(defaultWorkoutData));
    initializeExerciseLibrary();
    currentWeekIndex = 0;
    saveToLocalStorage();
    renderWeeksTabs();
    renderSessions();
    renderCategories();
    updateCategoryDropdowns();
  }
}

// Render sessions of current week
function renderSessions() {
  const grid = document.getElementById('sessionsGrid');
  grid.innerHTML = '';
  const sessionsObj = workoutData.weeks[currentWeekIndex].sessions || {};
  Object.keys(sessionsObj).forEach(session => {
    const sessionExercises = sessionsObj[session];
    const sessionVolume = sessionExercises.reduce((total, ex) => total + (parseInt(ex.sets) || 0), 0);

    const card = document.createElement('div');
    card.className = 'session-card';
    card.dataset.session = session;

    card.innerHTML = `
      <div class="session-header">
        <div class="session-label">SESSION ${escapeHtml(session)} <span class="session-volume">${sessionVolume}</span></div>
        <div style="display: flex; align-items: center;">
          <button class="add-exercise-btn" onclick="openAddExerciseModal(${jsAttr(session)})">+ Add Exercise</button>
          <button class="btn-delete-session" onclick="deleteSession(${jsAttr(session)})" title="Delete Session">×</button>
        </div>
      </div>
      <ul class="exercise-list" data-session="${escapeHtml(session)}">
        ${sessionExercises.map((ex, idx) => `
          <li class="exercise-item" draggable="true" data-session="${escapeHtml(session)}" data-index="${idx}">
            <div class="exercise-content">
              <div class="exercise-name">${escapeHtml(ex.name)}</div>
              <div class="exercise-details"><span class="sets">${escapeHtml(ex.sets)} sets</span> × ${escapeHtml(ex.repsMin)}-${escapeHtml(ex.repsMax)} reps</div>
              <div class="exercise-category">${escapeHtml(ex.category)}</div>
            </div>
            <div class="exercise-controls">
              <button class="swap-btn" onclick="openSwapExercise(${jsAttr(session)}, ${idx})" title="Swap exercise">Swap</button>
              <button class="edit-btn" onclick="editExercise(${jsAttr(session)}, ${idx})">Edit</button>
              <button class="delete-btn" onclick="deleteExercise(${jsAttr(session)}, ${idx})">Delete</button>
            </div>
          </li>
        `).join('')}
      </ul>
    `;

    grid.appendChild(card);
  });
  addDragListeners();
}

// Render categories (for current week)
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  grid.innerHTML = '';
  workoutData.categories.forEach(category => {
    const exercises = getAllExercisesByCategory(category);
    const categoryVolume = getCategoryVolume(category);

    const card = document.createElement('div');
    card.className = 'category-card';
    card.dataset.category = category;

    card.innerHTML = `
      <div class="category-header">
        <div class="category-header-content">
          <span class="category-volume">(${categoryVolume} SETS)</span>
          ${escapeHtml(category)}
          <button class="btn-delete-category" onclick="deleteCategory(${jsAttr(category)})" title="Delete Category">×</button>
        </div>
      </div>
      <ul class="category-exercises">
        ${exercises.map(ex => {
      const exerciseVolume = getExerciseVolume(ex.name);
      return `
            <li class="category-exercise-item">
              <div class="category-exercise-info">
                <span class="exercise-volume">${exerciseVolume}</span>
                <span>${escapeHtml(ex.name)}</span>
              </div>
              <div class="category-exercise-actions">
                <button class="add-to-session-btn" onclick="openAddToSessionModal(${jsAttr(ex.name)}, ${jsAttr(ex.category)})">Add to</button>
                <button class="edit-category-btn" onclick="openCategoryModal(${jsAttr(ex.name)}, ${jsAttr(category)})">Change</button>
                <button class="delete-category-exercise-btn" onclick="deleteCategoryExercise(${jsAttr(ex.name)}, ${jsAttr(category)})" title="Delete exercise">×</button>
              </div>
            </li>
          `;
    }).join('')}
      </ul>
      <button class="btn-add-category-exercise" onclick="openAddExerciseToCategory(${jsAttr(category)})">+ Add Exercise</button>
    `;

    grid.appendChild(card);
  });
}

// Open the library modal pre-filled & locked to a specific category
function openAddExerciseToCategory(category) {
  updateCategoryDropdowns();

  const modal = document.getElementById('addLibraryExerciseModal');
  const catSelect = document.getElementById('libraryCategorySelect');
  const nameInput = document.getElementById('libraryExerciseName');
  const modalHeader = modal.querySelector('.modal-header');

  // Lock the category dropdown to the clicked card's category
  if (catSelect) {
    catSelect.value = category;
    catSelect.disabled = true;
    catSelect.dataset.lockedCategory = category;
  }
  if (modalHeader) modalHeader.textContent = `Add Exercise to "${category}"`;
  if (nameInput) nameInput.value = '';

  if (modal) modal.style.display = 'block';
  if (nameInput) setTimeout(() => nameInput.focus(), 0);
}

// Delete an exercise from the library and all sessions across all weeks
function deleteCategoryExercise(name, category) {
  if (!confirm(`Delete "${name}" from the ${category} category? This will also remove it from all sessions.`)) return;

  // Remove from exercise library
  if (workoutData.exerciseLibrary && workoutData.exerciseLibrary[category]) {
    workoutData.exerciseLibrary[category] = workoutData.exerciseLibrary[category].filter(n => n !== name);
  }

  // Remove from all sessions across all weeks
  workoutData.weeks.forEach(week => {
    Object.keys(week.sessions || {}).forEach(sessionKey => {
      week.sessions[sessionKey] = week.sessions[sessionKey].filter(ex => ex.name !== name);
    });
  });

  saveToLocalStorage();
  renderSessions();
  renderCategories();
}

// ---- Add to Session modal ----
let addToSessionExercise = { name: null, category: null };

function openAddToSessionModal(name, category) {
  addToSessionExercise = { name, category };

  // Populate title
  const title = document.getElementById('addToSessionTitle');
  if (title) title.textContent = `Add "${name}" to Sessions`;

  // Pre-fill sets/reps from last used stats
  const stats = getLastUsedExerciseStats(name);
  document.getElementById('addToSessionSets').value = stats && stats.sets ? stats.sets : 3;
  document.getElementById('addToSessionRepsMin').value = stats && stats.repsMin ? stats.repsMin : 8;
  document.getElementById('addToSessionRepsMax').value = stats && stats.repsMax ? stats.repsMax : 12;

  // Build session checkboxes
  const container = document.getElementById('addToSessionCheckboxes');
  container.innerHTML = '';
  const sessionsObj = workoutData.weeks[currentWeekIndex].sessions || {};
  Object.keys(sessionsObj).forEach(sessionKey => {
    const alreadyIn = sessionsObj[sessionKey].some(ex => ex.name === name);
    const label = document.createElement('label');
    label.style.cssText = 'display:flex; align-items:center; gap:8px; cursor:pointer; color:#ccc; font-size:0.95em;';
    label.innerHTML = `
      <input type="checkbox" value="${escapeHtml(sessionKey)}" ${alreadyIn ? 'checked disabled' : ''}
        style="width:16px; height:16px; accent-color:#D95D2E; cursor:pointer;">
      <span>Session ${escapeHtml(sessionKey)}${alreadyIn ? ' <em style="color:#888;font-size:0.85em;">(already added)</em>' : ''}</span>
    `;
    container.appendChild(label);
  });

  document.getElementById('addToSessionModal').style.display = 'block';
}

function getAllExercisesByCategory(category) {
  // Collect unique by name across ALL weeks (sessions) AND the exercise library
  const seen = new Set();
  const list = [];

  // First: pull from sessions (so we have real sets/reps data)
  workoutData.weeks.forEach(week => {
    Object.values(week.sessions || {}).forEach(session => {
      session.forEach(ex => {
        if (ex.category === category && !seen.has(ex.name)) {
          seen.add(ex.name);
          list.push(ex);
        }
      });
    });
  });

  // Second: also include library-only exercises (not yet in any session)
  const libraryList = (workoutData.exerciseLibrary && workoutData.exerciseLibrary[category]) || [];
  libraryList.forEach(name => {
    if (!seen.has(name)) {
      seen.add(name);
      list.push({ name, category, sets: 0, repsMin: 0, repsMax: 0 });
    }
  });

  return list;
}

function getCategoryVolume(category) {
  // Total sets for this category in the CURRENT week only
  let volume = 0;
  const sessionsObj = workoutData.weeks[currentWeekIndex].sessions || {};
  Object.values(sessionsObj).forEach(session => {
    session.forEach(ex => {
      if (ex.category === category) volume += parseInt(ex.sets) || 0;
    });
  });
  return volume;
}

function getExerciseVolume(exerciseName) {
  // Total sets for this exercise name in the CURRENT week only
  let volume = 0;
  const sessionsObj = workoutData.weeks[currentWeekIndex].sessions || {};
  Object.values(sessionsObj).forEach(session => {
    session.forEach(ex => {
      if (ex.name === exerciseName) volume += parseInt(ex.sets) || 0;
    });
  });
  return volume;
}

function ensureExerciseInLibrary(category, name) {
  if (!workoutData.exerciseLibrary[category]) workoutData.exerciseLibrary[category] = [];
  if (!workoutData.exerciseLibrary[category].includes(name)) {
    workoutData.exerciseLibrary[category].push(name);
    workoutData.exerciseLibrary[category].sort((a, b) => a.localeCompare(b));
  }
}

// Drag and drop
function addDragListeners() {
  const items = document.querySelectorAll('.exercise-item');
  const lists = document.querySelectorAll('.exercise-list');
  items.forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
  });
  lists.forEach(list => {
    list.addEventListener('dragover', handleDragOver);
    list.addEventListener('drop', handleDrop);
    list.addEventListener('dragenter', handleDragEnter);
    list.addEventListener('dragleave', handleDragLeave);
  });
}

let draggedElement = null;
function handleDragStart(e) {
  draggedElement = this;
  this.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}
function handleDragEnd() {
  this.classList.remove('dragging');
  document.querySelectorAll('.session-card').forEach(card => card.classList.remove('drag-over'));
}
function handleDragOver(e) {
  if (e.preventDefault) e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}
function handleDragEnter() {
  this.closest('.session-card').classList.add('drag-over');
}
function handleDragLeave(e) {
  if (e.target === this) this.closest('.session-card').classList.remove('drag-over');
}
function handleDrop(e) {
  if (e.stopPropagation) e.stopPropagation();
  const fromSession = draggedElement.dataset.session;
  const fromIndex = parseInt(draggedElement.dataset.index);
  const toSession = this.dataset.session;
  const sessionsObj = workoutData.weeks[currentWeekIndex].sessions;
  const exercise = sessionsObj[fromSession][fromIndex];
  sessionsObj[fromSession].splice(fromIndex, 1);
  sessionsObj[toSession].push(exercise);
  saveToLocalStorage();
  renderSessions();
  renderCategories();
  return false;
}

// Add exercise flow (picker)
function openAddExerciseModal(session) {
  currentSession = session;
  currentExerciseIndex = null;
  openExercisePicker();
}

function closeExercisePicker() {
  const modal = document.getElementById('exercisePickerModal');
  if (modal) modal.style.display = 'none';

  // Always unlock category dropdown and reset header when closing
  const pickerSelect = document.getElementById('pickerCategory');
  if (pickerSelect) pickerSelect.disabled = false;
  const pickerHeader = document.querySelector('#exercisePickerModal .modal-header');
  if (pickerHeader) pickerHeader.textContent = 'Choose Exercise';

  // Reset swap mode
  swapMode = false;
  swapExerciseIndex = null;
}

// Open picker in swap mode — locked to the exercise's category
function openSwapExercise(session, index) {
  const ex = workoutData.weeks[currentWeekIndex].sessions[session][index];
  currentSession = session;
  swapMode = true;
  swapExerciseIndex = index;

  const pickerSelect = document.getElementById('pickerCategory');
  const pickerSearch = document.getElementById('pickerSearch');
  if (pickerSearch) pickerSearch.value = '';

  if (pickerSelect) {
    pickerSelect.innerHTML = '';
    workoutData.categories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat; opt.textContent = cat; pickerSelect.appendChild(opt);
    });
    // Pre-select and lock to the exercise's category
    pickerSelect.value = ex.category;
    pickerSelect.disabled = true;
    renderExerciseTable(ex.category);
  }

  // Update picker header to communicate swap intent
  const pickerHeader = document.querySelector('#exercisePickerModal .modal-header');
  if (pickerHeader) pickerHeader.textContent = `Swap "${ex.name}" → choose replacement`;

  document.getElementById('exercisePickerModal').style.display = 'block';
}

function openAddLibraryExerciseModal(prefillCategory = '') {
  // Keep category list in sync (supports custom categories).
  updateCategoryDropdowns();

  const modal = document.getElementById('addLibraryExerciseModal');
  const catSelect = document.getElementById('libraryCategorySelect');
  const nameInput = document.getElementById('libraryExerciseName');
  const modalHeader = modal ? modal.querySelector('.modal-header') : null;

  // Always reset lock state when opened from header button
  if (catSelect) {
    catSelect.disabled = false;
    delete catSelect.dataset.lockedCategory;
  }
  if (modalHeader) modalHeader.textContent = 'Add New Exercise to Library';

  const pickerCategory = document.getElementById('pickerCategory');
  const desiredCategory = prefillCategory || (pickerCategory ? pickerCategory.value : '');

  if (catSelect && desiredCategory && workoutData.categories.includes(desiredCategory)) {
    catSelect.value = desiredCategory;
  }
  if (nameInput) nameInput.value = '';

  if (modal) modal.style.display = 'block';
  if (nameInput) setTimeout(() => nameInput.focus(), 0);
}
function openExercisePicker() {
  const pickerSelect = document.getElementById('pickerCategory');
  const pickerSearch = document.getElementById('pickerSearch');
  if (pickerSearch) pickerSearch.value = '';

  if (pickerSelect) {
    pickerSelect.innerHTML = '';
    workoutData.categories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat; opt.textContent = cat; pickerSelect.appendChild(opt);
    });
    renderExerciseTable(pickerSelect.value);
  }
  document.getElementById('exercisePickerModal').style.display = 'block';
}
function renderExerciseTable(category) {
  const tbody = document.getElementById('exerciseTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const searchInput = document.getElementById('pickerSearch');
  const filter = searchInput ? searchInput.value.toLowerCase().trim() : '';

  let results = [];

  if (filter) {
    // Search ALL categories
    Object.keys(workoutData.exerciseLibrary).forEach(cat => {
      const exercises = workoutData.exerciseLibrary[cat];
      exercises.forEach(name => {
        if (name.toLowerCase().includes(filter)) {
          results.push({ name, category: cat });
        }
      });
    });
    // Sort results by name
    results.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // Show only selected category
    const list = (workoutData.exerciseLibrary && workoutData.exerciseLibrary[category]) ? workoutData.exerciseLibrary[category] : [];
    results = list.map(name => ({ name, category }));
  }

  if (results.length === 0) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td style="padding:8px;">No exercises found.</td><td style="padding:8px; text-align:center;"><em>Add one from the header</em></td>`;
    tbody.appendChild(tr);
    return;
  }

  results.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="ex-name" style="padding:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="text-transform: capitalize;">${escapeHtml(item.name)}</span>
            <span style="color:#888; font-size:0.85em; font-style:italic; margin-left:10px;">${escapeHtml(item.category)}</span>
        </div>
      </td>
      <td style="padding:8px; text-align:center;">
        <button class="btn btn-primary btn-small" data-name="${escapeHtml(item.name)}" data-category="${escapeHtml(item.category)}">Select</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function getLastUsedExerciseStats(name) {
  // Search backwards from latest week
  for (let i = workoutData.weeks.length - 1; i >= 0; i--) {
    const week = workoutData.weeks[i];
    if (!week.sessions) continue;
    for (const sessionKey of Object.keys(week.sessions)) {
      const session = week.sessions[sessionKey];
      // Find last occurrence in this session? Actually any occurrence is fine, usually consistent.
      const ex = session.find(e => e.name === name);
      if (ex) {
        return { sets: ex.sets, repsMin: ex.repsMin, repsMax: ex.repsMax };
      }
    }
  }
  return null;
}

// Edit existing exercise (free-form modal reused)
function editExercise(session, index) {
  currentSession = session;
  currentExerciseIndex = index;
  const exercise = workoutData.weeks[currentWeekIndex].sessions[session][index];
  document.getElementById('modalTitle').textContent = 'Edit Exercise';
  document.getElementById('exerciseName').value = exercise.name;
  document.getElementById('exerciseCategory').value = exercise.category;
  document.getElementById('exerciseSets').value = exercise.sets;
  document.getElementById('exerciseRepsMin').value = exercise.repsMin;
  document.getElementById('exerciseRepsMax').value = exercise.repsMax;
  document.getElementById('exerciseModal').style.display = 'block';
}

function deleteExercise(session, index) {
  if (!confirm('Are you sure you want to delete this exercise?')) return;
  workoutData.weeks[currentWeekIndex].sessions[session].splice(index, 1);
  saveToLocalStorage();
  renderSessions();
  renderCategories();
}

function openCategoryModal(exerciseName, currentCategory) {
  currentExerciseName = exerciseName;
  document.getElementById('changeCategoryExercise').value = exerciseName;
  document.getElementById('newCategory').value = currentCategory;
  document.getElementById('categoryModal').style.display = 'block';
}

// Save from edit modal
const saveExerciseBtn = document.getElementById('saveExercise');
if (saveExerciseBtn) saveExerciseBtn.addEventListener('click', () => {
  const name = document.getElementById('exerciseName').value;
  const category = document.getElementById('exerciseCategory').value;
  const sets = parseInt(document.getElementById('exerciseSets').value);
  const repsMin = parseInt(document.getElementById('exerciseRepsMin').value);
  const repsMax = parseInt(document.getElementById('exerciseRepsMax').value);
  if (!name) { alert('Please fill in all fields'); return; }
  const validationError = validateExercise({ sets, repsMin, repsMax });
  if (validationError) { alert(validationError); return; }
  const exercise = { name, sets, repsMin, repsMax, category };
  if (currentExerciseIndex !== null) {
    workoutData.weeks[currentWeekIndex].sessions[currentSession][currentExerciseIndex] = exercise;
  } else {
    if (!workoutData.weeks[currentWeekIndex].sessions[currentSession]) workoutData.weeks[currentWeekIndex].sessions[currentSession] = [];
    workoutData.weeks[currentWeekIndex].sessions[currentSession].push(exercise);
  }
  ensureExerciseInLibrary(category, name);
  saveToLocalStorage();
  document.getElementById('exerciseModal').style.display = 'none';
  renderSessions();
  renderCategories();
});

const cancelExerciseBtn = document.getElementById('cancelExercise');
if (cancelExerciseBtn) cancelExerciseBtn.addEventListener('click', () => {
  document.getElementById('exerciseModal').style.display = 'none';
});

const saveCategoryBtn = document.getElementById('saveCategory');
if (saveCategoryBtn) saveCategoryBtn.addEventListener('click', () => {
  const newCategory = document.getElementById('newCategory').value;
  // Update all instances across all weeks
  workoutData.weeks.forEach(week => {
    Object.keys(week.sessions).forEach(session => {
      week.sessions[session].forEach(exercise => {
        if (exercise.name === currentExerciseName) exercise.category = newCategory;
      });
    });
  });
  // Update library membership for this exercise name
  Object.keys(workoutData.exerciseLibrary).forEach(cat => {
    workoutData.exerciseLibrary[cat] = workoutData.exerciseLibrary[cat].filter(n => n !== currentExerciseName);
  });
  ensureExerciseInLibrary(newCategory, currentExerciseName);
  saveToLocalStorage();
  document.getElementById('categoryModal').style.display = 'none';
  renderSessions();
  renderCategories();
});

const cancelCategoryBtn = document.getElementById('cancelCategory');
if (cancelCategoryBtn) cancelCategoryBtn.addEventListener('click', () => {
  document.getElementById('categoryModal').style.display = 'none';
});

// Session management
function addSession() {
  const sessions = Object.keys(workoutData.weeks[currentWeekIndex].sessions);
  let nextChar = 'A';
  if (sessions.length > 0) {
    const lastSession = sessions[sessions.length - 1];
    nextChar = String.fromCharCode(lastSession.charCodeAt(0) + 1);
  }
  if (workoutData.weeks[currentWeekIndex].sessions[nextChar]) {
    for (let i = 65; i < 91; i++) {
      const char = String.fromCharCode(i);
      if (!workoutData.weeks[currentWeekIndex].sessions[char]) { nextChar = char; break; }
    }
  }
  workoutData.weeks[currentWeekIndex].sessions[nextChar] = [];
  saveToLocalStorage();
  renderSessions();
}

function deleteSession(session) {
  if (!confirm(`Are you sure you want to delete Session ${session}?`)) return;
  delete workoutData.weeks[currentWeekIndex].sessions[session];
  saveToLocalStorage();
  renderSessions();
  renderCategories();
}

// Categories
function openAddCategoryModal() {
  document.getElementById('newCategoryName').value = '';
  document.getElementById('newCategoryModal').style.display = 'block';
}

function deleteCategory(category) {
  if (!confirm(`Are you sure you want to delete category \"${category}\"?`)) return;
  workoutData.categories = workoutData.categories.filter(c => c !== category);
  delete workoutData.exerciseLibrary[category];
  saveToLocalStorage();
  updateCategoryDropdowns();
  renderCategories();
}

function updateCategoryDropdowns() {
  const selects = ['exerciseCategory', 'newCategory', 'pickerCategory', 'libraryCategorySelect'];
  selects.forEach(id => {
    const select = document.getElementById(id);
    if (!select) return;
    const currentValue = select.value;
    select.innerHTML = '';
    workoutData.categories.forEach(cat => {
      const option = document.createElement('option');
      option.value = cat; option.textContent = cat; select.appendChild(option);
    });
    if (workoutData.categories.includes(currentValue)) select.value = currentValue;
  });
}

const saveNewCategoryBtn = document.getElementById('saveNewCategory');
if (saveNewCategoryBtn) saveNewCategoryBtn.addEventListener('click', () => {
  const name = document.getElementById('newCategoryName').value.trim().toLowerCase();
  if (!name) { alert('Please enter a category name'); return; }
  if (workoutData.categories.includes(name)) { alert('Category already exists'); return; }
  workoutData.categories.push(name);
  if (!workoutData.exerciseLibrary[name]) workoutData.exerciseLibrary[name] = [];
  saveToLocalStorage();
  updateCategoryDropdowns();
  renderCategories();
  document.getElementById('newCategoryModal').style.display = 'none';
});

const cancelNewCategoryBtn = document.getElementById('cancelNewCategory');
if (cancelNewCategoryBtn) cancelNewCategoryBtn.addEventListener('click', () => {
  document.getElementById('newCategoryModal').style.display = 'none';
});

// Weeks UI
function renderWeeksTabs() {
  const tabsContainer = document.getElementById('weeksTabs');
  if (!tabsContainer) return;
  tabsContainer.innerHTML = '';
  workoutData.weeks.forEach((w, idx) => {
    const btn = document.createElement('button');
    btn.className = 'week-tab' + (idx === currentWeekIndex ? ' active' : '');
    btn.textContent = `Week ${idx + 1}`;
    btn.addEventListener('click', () => {
      currentWeekIndex = idx;
      saveToLocalStorage();
      renderWeeksTabs();
      renderSessions();
      renderCategories();
    });
    tabsContainer.appendChild(btn);
  });
}

function newEmptyWeek() {
  // Create default 7 sessions (A-G)
  const sessions = {};
  const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  labels.forEach(l => sessions[l] = []);
  return { sessions };
}

function addWeek() {
  workoutData.weeks.push(newEmptyWeek());
  currentWeekIndex = workoutData.weeks.length - 1;
  saveToLocalStorage();
  renderWeeksTabs();
  renderSessions();
  renderCategories();
}

function duplicateLastWeek() {
  if (workoutData.weeks.length === 0) { addWeek(); return; }
  const lastWeek = workoutData.weeks[workoutData.weeks.length - 1];
  const clone = { sessions: {} };
  Object.keys(lastWeek.sessions || {}).forEach(key => {
    clone.sessions[key] = (lastWeek.sessions[key] || []).map(ex => ({ ...ex }));
  });
  workoutData.weeks.push(clone);
  currentWeekIndex = workoutData.weeks.length - 1;
  saveToLocalStorage();
  renderWeeksTabs();
  renderSessions();
  renderCategories();
}

function deleteCurrentWeek() {
  if (workoutData.weeks.length <= 1) {
    alert('At least one week must remain.');
    return;
  }
  if (!confirm(`Delete Week ${currentWeekIndex + 1}? This cannot be undone.`)) return;
  workoutData.weeks.splice(currentWeekIndex, 1);
  if (currentWeekIndex >= workoutData.weeks.length) {
    currentWeekIndex = workoutData.weeks.length - 1;
  }
  saveToLocalStorage();
  renderWeeksTabs();
  renderSessions();
  renderCategories();
}

// Export/Import CSV
function exportToCSV() {
  let csvContent = "Week,Session,Exercise,Sets,RepsMin,RepsMax,Category\n";
  workoutData.weeks.forEach((week, wIdx) => {
    Object.keys(week.sessions || {}).forEach(sessionKey => {
      (week.sessions[sessionKey] || []).forEach(ex => {
        const row = [
          wIdx + 1,
          sessionKey,
          `"${(ex.name || "").replace(/"/g, '""')}"`,
          ex.sets || 0,
          ex.repsMin || 0,
          ex.repsMax || 0,
          `"${(ex.category || "").replace(/"/g, '""')}"`
        ];
        csvContent += row.join(",") + "\n";
      });
    });
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = 'workout_split_plan.csv';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

function importFromCSV(input) {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const text = e.target.result;
      const lines = text.split(/\r?\n/).filter(line => line.trim() !== '');

      if (lines.length === 0) throw new Error("File is empty");

      const header = lines[0].toLowerCase();
      if (!header.includes("week") || !header.includes("session")) {
        throw new Error("Invalid CSV format. Please use the exported CSV format.");
      }

      const newWeeks = [];
      let skippedRows = 0;

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        const values = [];
        let inQuotes = false;
        let currentStr = "";
        for (let j = 0; j < line.length; j++) {
          const char = line[j];
          if (char === '"' && line[j + 1] === '"') {
            currentStr += '"';
            j++;
          } else if (char === '"') {
            inQuotes = !inQuotes;
          } else if (char === ',' && !inQuotes) {
            values.push(currentStr.trim());
            currentStr = "";
          } else {
            currentStr += char;
          }
        }
        values.push(currentStr.trim());

        if (values.length < 7) continue;

        const weekIdxStr = values[0].replace(/["']/g, "");
        const weekIdxMatches = weekIdxStr.match(/\d+/);
        const weekIdx = weekIdxMatches ? parseInt(weekIdxMatches[0]) - 1 : parseInt(weekIdxStr) - 1;

        const session = values[1].replace(/["']/g, "");
        const name = values[2].replace(/^"|"$/g, "");
        const sets = parseInt(values[3]);
        const repsMin = parseInt(values[4]);
        const repsMax = parseInt(values[5]);
        const category = values[6].replace(/^"|"$/g, "");

        if (isNaN(weekIdx) || weekIdx < 0) continue;

        while (newWeeks.length <= weekIdx) {
          const newWeek = { sessions: {} };
          newWeeks.push(newWeek);
        }

        if (!newWeeks[weekIdx].sessions[session]) {
          newWeeks[weekIdx].sessions[session] = [];
        }

        if (!name) { skippedRows++; continue; }
        const rowError = validateExercise({ sets, repsMin, repsMax });
        if (rowError) { skippedRows++; continue; }

        newWeeks[weekIdx].sessions[session].push({
          name, sets, repsMin, repsMax, category: category || 'Uncategorized'
        });
      }

      if (newWeeks.length > 0) {
        const suffix = skippedRows > 0 ? ` (${skippedRows} row${skippedRows === 1 ? '' : 's'} skipped due to invalid data)` : '';
        if (confirm('Import successful' + suffix + '. Override current split?')) {
          workoutData.weeks = newWeeks;

          let hasCategories = new Set(workoutData.categories);
          newWeeks.forEach(w => {
            Object.values(w.sessions).forEach(s => {
              s.forEach(ex => {
                if (!hasCategories.has(ex.category)) {
                  workoutData.categories.push(ex.category);
                  hasCategories.add(ex.category);
                }
              });
            });
          });

          currentWeekIndex = 0;
          initializeExerciseLibrary();
          saveToLocalStorage();
          renderWeeksTabs();
          renderSessions();
          renderCategories();
          updateCategoryDropdowns();
        }
      } else {
        alert('Could not parse workout data from CSV file.');
      }

    } catch (err) {
      console.error(err);
      alert('Error importing file: ' + err.message);
    }
    input.value = '';
  };
  reader.readAsText(file);
}

// Export (per week)
function exportToExcel() {
  let html = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <!--[if gte mso 9]>
      <xml>
        <x:ExcelWorkbook>
          <x:ExcelWorksheets>
            <x:ExcelWorksheet>
              <x:Name>Workout Split</x:Name>
              <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>
            </x:ExcelWorksheet>
          </x:ExcelWorksheets>
        </x:ExcelWorkbook>
      </xml>
      <![endif]-->
      <meta charset="UTF-8">
      <style>
        table { border-collapse: collapse; font-family: Arial, sans-serif; margin-bottom: 20px; table-layout: fixed; }
        th { background-color: #D95D2E; color: white; border: 1px solid #000000; padding: 10px; }
        .sub-header { background-color: #f0f0f0; font-weight: bold; border: 1px solid #000000; color: #333; }
        td { border: 1px solid #000000; padding: 6px; text-align: center; vertical-align: top; white-space: normal; word-wrap: break-word; overflow-wrap: anywhere; }
        .ex-name { text-align: left; white-space: normal; word-wrap: break-word; overflow-wrap: anywhere; }
        .total-row { background-color: #e6e6e6; font-weight: bold; border-top: 2px solid #000; }
        .section-title { font-size: 16pt; font-weight: bold; color: #D95D2E; border: none; text-align: left; padding: 10px 0; }
        .spacer { border: none !important; }
      </style>
    </head>
    <body>
  `;

  workoutData.weeks.forEach((week, wIdx) => {
    const sessions = Object.keys(week.sessions || {});
    let maxExercises = 0;
    const sessionVolumes = {};
    sessions.forEach(session => {
      if ((week.sessions[session] || []).length > maxExercises) maxExercises = week.sessions[session].length;
      sessionVolumes[session] = (week.sessions[session] || []).reduce((sum, ex) => sum + (parseInt(ex.sets) || 0), 0);
    });

    const categoryVolumes = {};
    workoutData.categories.forEach(cat => categoryVolumes[cat] = 0);
    Object.values(week.sessions || {}).forEach(sessionList => {
      sessionList.forEach(ex => {
        if (categoryVolumes[ex.category] !== undefined) categoryVolumes[ex.category] += (parseInt(ex.sets) || 0);
      });
    });

    html += `<div class="section-title">Week ${wIdx + 1}</div>`;

    // Sessions table
    html += `<table>`;
    // Define consistent column widths: per session 4 data cols + 1 spacer
    html += `<colgroup>`;
    sessions.forEach(() => {
      html += `<col style="width: 280px;">`; // Exercise name
      html += `<col style="width: 60px;">`;  // Sets
      html += `<col style="width: 80px;">`;  // Min Reps
      html += `<col style="width: 80px;">`;  // Max Reps
      html += `<col style="width: 12px;">`;  // Spacer
    });
    html += `</colgroup>`;
    html += `<thead>`;
    html += `<tr>`;
    sessions.forEach(session => { html += `<th colspan="4">SESSION ${session}</th><td class="spacer"></td>`; });
    html += `</tr>`;
    html += `<tr>`;
    sessions.forEach(() => {
      html += `
        <td class="sub-header" style="width: 200px;">Exercise</td>
        <td class="sub-header" style="width: 60px;">Sets</td>
        <td class="sub-header" style="width: 80px;">Min Reps</td>
        <td class="sub-header" style="width: 80px;">Max Reps</td>
        <td class="spacer"></td>
      `;
    });
    html += `</tr>`;
    html += `</thead><tbody>`;

    for (let i = 0; i < maxExercises; i++) {
      html += `<tr>`;
      sessions.forEach(session => {
        const ex = (week.sessions[session] || [])[i];
        if (ex) {
          html += `
            <td class="ex-name">${escapeHtml(ex.name)}</td>
            <td>${escapeHtml(ex.sets)}</td>
            <td>${escapeHtml(ex.repsMin)}</td>
            <td>${escapeHtml(ex.repsMax)}</td>
          `;
        } else {
          html += `<td></td><td></td><td></td><td></td>`;
        }
        html += `<td class="spacer"></td>`;
      });
      html += `</tr>`;
    }

    html += `<tr>`;
    sessions.forEach(session => {
      html += `
        <td class="total-row" style="text-align: right;">TOTAL SETS:</td>
        <td class="total-row">${sessionVolumes[session] || 0}</td>
        <td class="total-row" colspan="2"></td>
        <td class="spacer"></td>
      `;
    });
    html += `</tr>`;
    html += `</tbody></table>`;

    html += `<br>`;

    // Muscle group table
    html += `<table>`;
    html += `<colgroup><col style="width: 260px;"><col style="width: 100px;"></colgroup>`;
    html += `<thead><tr><th>Muscle Group</th><th>Total Sets</th></tr></thead><tbody>`;
    const sortedCategories = Object.keys(categoryVolumes).sort((a, b) => categoryVolumes[b] - categoryVolumes[a]);
    sortedCategories.forEach(cat => {
      if (categoryVolumes[cat] > 0) html += `<tr><td class="ex-name" style="text-transform: capitalize;">${escapeHtml(cat)}</td><td>${categoryVolumes[cat]}</td></tr>`;
    });
    html += `</tbody></table>`;

    if (wIdx < workoutData.weeks.length - 1) html += `<br><br>`; // empty row between weeks
  });

  html += `</body></html>`;

  const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = 'workout_split_plan.xls';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

function importFromExcel(input) {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const content = e.target.result;
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, 'text/html');

      const newWeeks = [];
      let skippedRows = 0;
      const titles = doc.querySelectorAll('.section-title');

      // If no titles found, maybe it's a single week or old format
      if (titles.length === 0) {
        // Try parsing as single week
        const sessionTable = doc.querySelector('table');
        if (sessionTable) {
          const parsed = parseWeekTable(sessionTable);
          newWeeks.push({ sessions: parsed.sessions });
          skippedRows += parsed.skipped || 0;
        } else {
          throw new Error("No session table found");
        }
      } else {
        titles.forEach(title => {
          // Find the table immediately following this title
          let sibling = title.nextElementSibling;
          while (sibling && sibling.tagName !== 'TABLE') {
            sibling = sibling.nextElementSibling;
          }
          if (sibling) {
            const parsed = parseWeekTable(sibling);
            newWeeks.push({ sessions: parsed.sessions });
            skippedRows += parsed.skipped || 0;
          }
        });
      }

      if (newWeeks.length > 0) {
        const suffix = skippedRows > 0 ? ` (${skippedRows} row${skippedRows === 1 ? '' : 's'} skipped due to invalid data)` : '';
        if (confirm(`Found ${newWeeks.length} weeks${suffix}. Import and overwrite current split?`)) {
          workoutData.weeks = newWeeks;
          // Reset categories to default if they seem messed up, or keep existing? 
          // Better to keep existing categories list, but ensure we categorize imported exercises.
          // Re-initialize library to catch any new custom exercises (mapped to Uncategorized if unknown)

          // Check for any "Uncategorized" exercises and add that category if needed
          let hasUncategorized = false;
          newWeeks.forEach(w => {
            Object.values(w.sessions).forEach(s => {
              s.forEach(ex => {
                if (ex.category === 'Uncategorized') hasUncategorized = true;
              });
            });
          });

          if (hasUncategorized && !workoutData.categories.includes('Uncategorized')) {
            workoutData.categories.push('Uncategorized');
          }

          currentWeekIndex = 0;
          initializeExerciseLibrary(); // Re-scan weeks to populate library
          saveToLocalStorage();
          renderWeeksTabs();
          renderSessions();
          renderCategories();
          updateCategoryDropdowns();
          alert('Import successful!');
        }
      } else {
        alert('Could not parse workout data from file.');
      }

    } catch (err) {
      console.error(err);
      alert('Error importing file: ' + err.message);
    }
    // Clear input so same file can be selected again
    input.value = '';
  };
  reader.readAsText(file);
}

function parseWeekTable(table) {
  const sessions = {};
  let skipped = 0;
  const rows = Array.from(table.querySelectorAll('tr'));

  // Row 0: Session Headers (SESSION A, SESSION B...)
  // We need to map column indices to Session Keys
  // The layout is: Session A (4 cols) | Spacer (1 col) | Session B (4 cols) ...

  const sessionMap = []; // [{ key: 'A', startCol: 0 }, { key: 'B', startCol: 5 } ...]

  const headerRow = rows.find(r => r.textContent.includes('SESSION'));
  if (!headerRow) return { sessions: {}, skipped: 0 };

  const headerCells = Array.from(headerRow.children);
  let colIndex = 0;

  headerCells.forEach(cell => {
    const text = cell.textContent.trim(); // "SESSION A"
    const colspan = parseInt(cell.getAttribute('colspan') || '1');

    if (text.startsWith('SESSION')) {
      const sessionKey = text.replace('SESSION', '').trim();
      sessionMap.push({ key: sessionKey, col: colIndex });
      sessions[sessionKey] = [];
    }
    colIndex += colspan;
    // The spacer is usually a separate td or implicit?
    // In export: <th colspan="4">...</th> <td class="spacer"></td>
    // The loop above iterates cells. spacer is a cell.
  });

  // Calculate distinct column indices based on the structure we know
  // Actually, simpler: iterate the known sessionMap locations in data rows.
  // Data starts after headers. Headers are usually 2 rows (SESSION X, then Subheaders).
  // Find first row with data: usually row index 2 (0-based) if 0 is Session, 1 is Subheader.

  let dataStartIndex = 0;
  rows.forEach((r, i) => {
    if (r.children[0] && r.children[0].textContent.includes('SESSION')) return;
    if (r.children[0] && r.children[0].textContent.includes('Exercise')) return; // subheader
    if (dataStartIndex === 0 && i > 0) dataStartIndex = i;
  });

  if (dataStartIndex === 0) dataStartIndex = 2; // fallback

  for (let i = dataStartIndex; i < rows.length; i++) {
    const row = rows[i];
    // Stop if we hit the "TOTAL SETS" row
    if (row.textContent.includes('TOTAL SETS')) break;

    const cells = Array.from(row.children);

    sessionMap.forEach(sess => {
      // For each session, we expect 4 columns at sess.col?
      // Wait, `headerCells` iteration above gave us the index in the *header row*.
      // In the data row, the colspan=4 is gone, so we have 4 individual cells per session + 1 spacer cell.
      // So Session A starts at index 0. Session B starts at index 5. Session C at 10.
      // Formula: index = sessIndex * 5

      // Let's re-calculate precise start index based on the map order
    });
  }

  // Re-map column indices for data rows
  // We know export format: 4 data cols + 1 spacer per session.
  const columnsPerSession = 5;

  sessionMap.forEach((sess, sessIdx) => {
    const startCol = sessIdx * columnsPerSession;

    for (let i = dataStartIndex; i < rows.length; i++) {
      const row = rows[i];
      if (row.textContent.includes('TOTAL SETS')) break;

      const cells = row.children;
      if (cells.length <= startCol + 3) continue;

      const name = cells[startCol].textContent.trim();
      const sets = parseInt(cells[startCol + 1].textContent);
      const repsMin = parseInt(cells[startCol + 2].textContent);
      const repsMax = parseInt(cells[startCol + 3].textContent);

      if (!name) continue;
      const cellError = validateExercise({ sets, repsMin, repsMax });
      if (cellError) { skipped++; continue; }

      // Lookup category
      let category = 'Uncategorized';

      // 1. Try existing library
      Object.keys(workoutData.exerciseLibrary).forEach(cat => {
        if (workoutData.exerciseLibrary[cat].includes(name)) category = cat;
      });

      // 2. Try default data (if library empty/reset)
      if (category === 'Uncategorized') {
        if (defaultWorkoutData.weeks) {
          defaultWorkoutData.weeks.forEach(w => Object.values(w.sessions).forEach(s => s.forEach(ex => {
            if (ex.name === name) category = ex.category;
          })));
        }
      }

      sessions[sess.key].push({ name, sets, repsMin, repsMax, category });
    }
  });

  return { sessions, skipped };
}

// --- New event listeners for modals ---
const pickerCancelBtn = document.getElementById('pickerCancel');
if (pickerCancelBtn) {
  pickerCancelBtn.addEventListener('click', () => {
    closeExercisePicker();
  });
}

const pickerCategorySelect = document.getElementById('pickerCategory');
if (pickerCategorySelect) {
  pickerCategorySelect.addEventListener('change', (e) => {
    renderExerciseTable(e.target.value);
  });
}

const pickerSearchInput = document.getElementById('pickerSearch');
if (pickerSearchInput) {
  pickerSearchInput.addEventListener('input', () => {
    renderExerciseTable(pickerCategorySelect ? pickerCategorySelect.value : '');
  });
}

const pickerCreateCustomBtn = document.getElementById('pickerCreateCustomBtn');
if (pickerCreateCustomBtn) {
  pickerCreateCustomBtn.addEventListener('click', () => {
    document.getElementById('exercisePickerModal').style.display = 'none';
    document.getElementById('modalTitle').textContent = 'Create Custom Exercise';
    document.getElementById('exerciseName').value = '';

    const catSelect = document.getElementById('exerciseCategory');
    if (catSelect && pickerCategorySelect) {
      catSelect.value = pickerCategorySelect.value;
    }

    document.getElementById('exerciseSets').value = '3';
    document.getElementById('exerciseRepsMin').value = '8';
    document.getElementById('exerciseRepsMax').value = '12';
    document.getElementById('exerciseModal').style.display = 'block';
  });
}

const libraryCancelBtn = document.getElementById('libraryCancelBtn');
if (libraryCancelBtn) {
  libraryCancelBtn.addEventListener('click', () => {
    const catInput = document.getElementById('libraryCategorySelect');
    if (catInput) {
      catInput.disabled = false;
      delete catInput.dataset.lockedCategory;
    }
    const modal = document.getElementById('addLibraryExerciseModal');
    const modalHeader = modal ? modal.querySelector('.modal-header') : null;
    if (modalHeader) modalHeader.textContent = 'Add New Exercise to Library';
    document.getElementById('addLibraryExerciseModal').style.display = 'none';
  });
}

const libraryAddBtn = document.getElementById('libraryAddBtn');
if (libraryAddBtn) {
  libraryAddBtn.addEventListener('click', () => {
    const catInput = document.getElementById('libraryCategorySelect');
    const nameInput = document.getElementById('libraryExerciseName');
    if (!catInput || !nameInput) return;

    const cat = catInput.value;
    const name = nameInput.value.trim();
    if (!cat) { alert('Please choose a muscle group'); return; }
    if (!name) { alert('Please enter an exercise name'); return; }

    ensureExerciseInLibrary(cat, name);
    saveToLocalStorage();

    // Unlock the category dropdown after saving
    catInput.disabled = false;
    delete catInput.dataset.lockedCategory;

    // Reset modal header
    const modal = document.getElementById('addLibraryExerciseModal');
    const modalHeader = modal ? modal.querySelector('.modal-header') : null;
    if (modalHeader) modalHeader.textContent = 'Add New Exercise to Library';

    modal.style.display = 'none';

    // Re-render categories to show the new exercise
    renderCategories();

    if (document.getElementById('exercisePickerModal').style.display === 'block') {
      renderExerciseTable(pickerCategorySelect ? pickerCategorySelect.value : cat);
    }
  });
}

// Close picker modal when clicking on backdrop
const pickerModal = document.getElementById('exercisePickerModal');
if (pickerModal) {
  pickerModal.addEventListener('click', (e) => {
    if (e.target === pickerModal) closeExercisePicker();
  });
}

const exerciseTableBody = document.getElementById('exerciseTableBody');
if (exerciseTableBody) {
  exerciseTableBody.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.classList.contains('btn-small')) {
      const name = e.target.dataset.name;
      const category = e.target.dataset.category;

      if (swapMode && swapExerciseIndex !== null) {
        // --- Swap mode: replace in-place, keep existing sets/reps ---
        const existing = workoutData.weeks[currentWeekIndex].sessions[currentSession][swapExerciseIndex];
        workoutData.weeks[currentWeekIndex].sessions[currentSession][swapExerciseIndex] = {
          name,
          category,
          sets: existing.sets,
          repsMin: existing.repsMin,
          repsMax: existing.repsMax
        };
        ensureExerciseInLibrary(category, name);
        saveToLocalStorage();
        renderSessions();
        renderCategories();

        // Reset picker state
        const pickerSelect = document.getElementById('pickerCategory');
        if (pickerSelect) pickerSelect.disabled = false;
        const pickerHeader = document.querySelector('#exercisePickerModal .modal-header');
        if (pickerHeader) pickerHeader.textContent = 'Choose Exercise';
        swapMode = false;
        swapExerciseIndex = null;
        document.getElementById('exercisePickerModal').style.display = 'none';

      } else {
        // --- Normal add mode: open configure modal ---
        const configName = document.getElementById('configExerciseName');
        const configCat = document.getElementById('configExerciseCategory');
        if (configName) configName.value = name;
        if (configCat) configCat.value = category;

        const stats = getLastUsedExerciseStats(name);
        const configSets = document.getElementById('configSets');
        const configRepsMin = document.getElementById('configRepsMin');
        const configRepsMax = document.getElementById('configRepsMax');

        if (configSets) configSets.value = stats && stats.sets ? stats.sets : 3;
        if (configRepsMin) configRepsMin.value = stats && stats.repsMin ? stats.repsMin : 8;
        if (configRepsMax) configRepsMax.value = stats && stats.repsMax ? stats.repsMax : 12;

        document.getElementById('exercisePickerModal').style.display = 'none';
        document.getElementById('configureExerciseModal').style.display = 'block';
      }
    }
  });
}

const configCancelBtn = document.getElementById('configCancel');
if (configCancelBtn) {
  configCancelBtn.addEventListener('click', () => {
    document.getElementById('configureExerciseModal').style.display = 'none';
    document.getElementById('exercisePickerModal').style.display = 'block';
  });
}

const configSaveBtn = document.getElementById('configSave');
if (configSaveBtn) {
  configSaveBtn.addEventListener('click', () => {
    const configName = document.getElementById('configExerciseName');
    const configCat = document.getElementById('configExerciseCategory');
    const configSets = document.getElementById('configSets');
    const configRepsMin = document.getElementById('configRepsMin');
    const configRepsMax = document.getElementById('configRepsMax');

    if (!configName || !configCat) return;

    const name = configName.value;
    const category = configCat.value;
    const sets = parseInt(configSets ? configSets.value : 3) || 3;
    const repsMin = parseInt(configRepsMin ? configRepsMin.value : 8) || 8;
    const repsMax = parseInt(configRepsMax ? configRepsMax.value : 12) || 12;

    const configError = validateExercise({ sets, repsMin, repsMax });
    if (configError) { alert(configError); return; }

    if (!workoutData.weeks[currentWeekIndex].sessions[currentSession]) {
      workoutData.weeks[currentWeekIndex].sessions[currentSession] = [];
    }

    workoutData.weeks[currentWeekIndex].sessions[currentSession].push({
      name, category, sets, repsMin, repsMax
    });

    saveToLocalStorage();
    renderSessions();
    renderCategories();

    document.getElementById('configureExerciseModal').style.display = 'none';
  });
}

const addToSessionSaveBtn = document.getElementById('addToSessionSaveBtn');
if (addToSessionSaveBtn) {
  addToSessionSaveBtn.addEventListener('click', () => {
    const sets = parseInt(document.getElementById('addToSessionSets').value) || 3;
    const repsMin = parseInt(document.getElementById('addToSessionRepsMin').value) || 8;
    const repsMax = parseInt(document.getElementById('addToSessionRepsMax').value) || 12;

    const addError = validateExercise({ sets, repsMin, repsMax });
    if (addError) { alert(addError); return; }

    const checkboxes = document.querySelectorAll('#addToSessionCheckboxes input[type="checkbox"]:not(:disabled):checked');
    if (checkboxes.length === 0) { alert('Please select at least one session.'); return; }

    checkboxes.forEach(cb => {
      const sessionKey = cb.value;
      if (!workoutData.weeks[currentWeekIndex].sessions[sessionKey]) return;
      workoutData.weeks[currentWeekIndex].sessions[sessionKey].push({
        name: addToSessionExercise.name,
        category: addToSessionExercise.category,
        sets, repsMin, repsMax
      });
    });

    ensureExerciseInLibrary(addToSessionExercise.category, addToSessionExercise.name);
    saveToLocalStorage();
    renderSessions();
    renderCategories();
    document.getElementById('addToSessionModal').style.display = 'none';
  });
}

const addToSessionCancelBtn = document.getElementById('addToSessionCancelBtn');
if (addToSessionCancelBtn) {
  addToSessionCancelBtn.addEventListener('click', () => {
    document.getElementById('addToSessionModal').style.display = 'none';
  });
}

// Initialize
initializeExerciseLibrary();
updateCategoryDropdowns();
renderWeeksTabs();
renderSessions();
renderCategories();
