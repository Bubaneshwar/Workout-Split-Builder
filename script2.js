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
          { name: "EZ-Bar Curl", sets: 3, repsMin: 10, repsMax: 15, category: "biceps" }
        ],
        B: [
          { name: "RDL", sets: 3, repsMin: 5, repsMax: 8, category: "hamstrings" },
          { name: "Incline Machine Press", sets: 3, repsMin: 8, repsMax: 12, category: "chest" },
          { name: "Cable Fly", sets: 3, repsMin: 10, repsMax: 15, category: "chest" },
          { name: "Lying Leg Curls", sets: 2, repsMin: 10, repsMax: 15, category: "hamstrings" },
          { name: "Overhead Tricep Extension", sets: 2, repsMin: 10, repsMax: 15, category: "triceps" },
          { name: "Machine Lateral Raise", sets: 3, repsMin: 10, repsMax: 15, category: "side delts" }
        ],
        C: [
          { name: "Bulgarian Split Squats (Smith Machine)", sets: 3, repsMin: 8, repsMax: 12, category: "quads" },
          { name: "Wide-Grip Pulldown", sets: 3, repsMin: 8, repsMax: 12, category: "lats" },
          { name: "Machine Shoulder Press", sets: 3, repsMin: 8, repsMax: 12, category: "front delts" },
          { name: "Lat Prayer", sets: 2, repsMin: 10, repsMax: 15, category: "lats" },
          { name: "Hammer Curl", sets: 3, repsMin: 10, repsMax: 15, category: "biceps" }
        ],
        D: [
          { name: "Seated Leg Curl", sets: 3, repsMin: 8, repsMax: 12, category: "hamstrings" },
          { name: "Cable Row", sets: 3, repsMin: 8, repsMax: 12, category: "upper back" },
          { name: "Slight Incline Dumbbell Press", sets: 3, repsMin: 8, repsMax: 12, category: "chest" },
          { name: "Overhead Tricep Extension", sets: 2, repsMin: 8, repsMax: 12, category: "triceps" },
          { name: "Lateral Raise Machine", sets: 2, repsMin: 8, repsMax: 12, category: "side delts" }
        ],
        E: [
          { name: "Squat", sets: 3, repsMin: 6, repsMax: 8, category: "quads" },
          { name: "Close Grip Lat Pulldown", sets: 3, repsMin: 10, repsMax: 15, category: "lats" },
          { name: "Seated Dumbbell Press", sets: 2, repsMin: 10, repsMax: 15, category: "front delts" },
          { name: "Dumbbell Curl", sets: 3, repsMin: 8, repsMax: 12, category: "biceps" }
        ],
        F: [
          { name: "Back Extensions", sets: 2, repsMin: 10, repsMax: 15, category: "lower back" },
          { name: "Flat/Decline Machine Press", sets: 3, repsMin: 6, repsMax: 8, category: "chest" },
          { name: "Lying Leg Curl", sets: 3, repsMin: 8, repsMax: 12, category: "hamstrings" },
          { name: "Chest Supported Dumbbell Row", sets: 3, repsMin: 8, repsMax: 12, category: "upper back" },
          { name: "Overhead Tricep Extension", sets: 2, repsMin: 10, repsMax: 15, category: "triceps" },
          { name: "Dumbbell Lateral Raise", sets: 2, repsMin: 10, repsMax: 15, category: "side delts" }
        ]
      }
    }
  ],
  categories: ["front delts", "rear delts", "side delts", "triceps", "biceps", "hamstrings", "quads", "calves", "neck", "forearms", "chest", "lats", "upper back", "lower back"],
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

// Save to localStorage helper
function saveToLocalStorage() {
  localStorage.setItem('workoutSplitData', JSON.stringify(workoutData));
  localStorage.setItem('currentWeekIndex', String(currentWeekIndex));
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
    workoutData.exerciseLibrary[cat] = Array.from(setMap[cat]).sort((a,b)=>a.localeCompare(b));
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
        <div class="session-label">SESSION ${session} <span class="session-volume">${sessionVolume}</span></div>
        <div style="display: flex; align-items: center;">
          <button class="add-exercise-btn" onclick="openAddExerciseModal('${session}')">+ Add Exercise</button>
          <button class="btn-delete-session" onclick="deleteSession('${session}')" title="Delete Session">×</button>
        </div>
      </div>
      <ul class="exercise-list" data-session="${session}">
        ${sessionExercises.map((ex, idx) => `
          <li class="exercise-item" draggable="true" data-session="${session}" data-index="${idx}">
            <div class="exercise-content">
              <div class="exercise-name">${ex.name}</div>
              <div class="exercise-details"><span class="sets">${ex.sets} sets</span> × ${ex.repsMin}-${ex.repsMax} reps</div>
              <div class="exercise-category">${ex.category}</div>
            </div>
            <div class="exercise-controls">
              <button class="edit-btn" onclick="editExercise('${session}', ${idx})">Edit</button>
              <button class="delete-btn" onclick="deleteExercise('${session}', ${idx})">Delete</button>
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
          ${category}
          <button class="btn-delete-category" onclick="deleteCategory('${category}')" title="Delete Category">×</button>
        </div>
      </div>
      <ul class="category-exercises">
        ${exercises.map(ex => {
          const exerciseVolume = getExerciseVolume(ex.name);
          return `
            <li class="category-exercise-item">
              <div class="category-exercise-info">
                <span class="exercise-volume">${exerciseVolume}</span>
                <span>${ex.name}</span>
              </div>
              <button class="edit-category-btn" onclick="openCategoryModal('${ex.name.replace(/'/g, "\\'")}', '${category}')">Change</button>
            </li>
          `;
        }).join('')}
      </ul>
    `;

    grid.appendChild(card);
  });
}

function getAllExercisesByCategory(category) {
  // Collect unique by name across ALL weeks
  const seen = new Set();
  const list = [];
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
    workoutData.exerciseLibrary[category].sort((a,b)=>a.localeCompare(b));
  }
}

function getCategoryVolume(category) {
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
  let volume = 0;
  const sessionsObj = workoutData.weeks[currentWeekIndex].sessions || {};
  Object.values(sessionsObj).forEach(session => {
    session.forEach(ex => {
      if (ex.name === exerciseName) volume += parseInt(ex.sets) || 0;
    });
  });
  return volume;
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
    results.sort((a,b) => a.name.localeCompare(b.name));
  } else {
    // Show only selected category
    const list = (workoutData.exerciseLibrary && workoutData.exerciseLibrary[category]) ? workoutData.exerciseLibrary[category] : [];
    results = list.map(name => ({ name, category }));
  }

  if (results.length === 0) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td style="padding:8px;">No exercises found.</td><td style="padding:8px; text-align:center;"><em>Add one with the button above</em></td>`;
    tbody.appendChild(tr);
    return;
  }

  results.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="ex-name" style="padding:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="text-transform: capitalize;">${item.name}</span>
            <span style="color:#888; font-size:0.85em; font-style:italic; margin-left:10px;">${item.category}</span>
        </div>
      </td>
      <td style="padding:8px; text-align:center;">
        <button class="btn btn-primary btn-small" data-name="${item.name}" data-category="${item.category}">Select</button>
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
  if (!name || !sets || !repsMin || !repsMax) { alert('Please fill in all fields'); return; }
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
  const selects = ['exerciseCategory', 'newCategory', 'pickerCategory'];
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
  const labels = ['A','B','C','D','E','F','G'];
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
            <td class="ex-name">${ex.name}</td>
            <td>${ex.sets}</td>
            <td>${ex.repsMin}</td>
            <td>${ex.repsMax}</td>
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
    const sortedCategories = Object.keys(categoryVolumes).sort((a,b)=>categoryVolumes[b]-categoryVolumes[a]);
    sortedCategories.forEach(cat => {
      if (categoryVolumes[cat] > 0) html += `<tr><td class="ex-name" style="text-transform: capitalize;">${cat}</td><td>${categoryVolumes[cat]}</td></tr>`;
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
  reader.onload = function(e) {
    try {
      const content = e.target.result;
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, 'text/html');
      
      const newWeeks = [];
      const titles = doc.querySelectorAll('.section-title');
      
      // If no titles found, maybe it's a single week or old format
      if (titles.length === 0) {
        // Try parsing as single week
        const sessionTable = doc.querySelector('table');
        if (sessionTable) {
           newWeeks.push(parseWeekTable(sessionTable));
        } else {
           throw new Error("No session table found");
        }
      } else {
        titles.forEach(title => {
           // Find the table immediately following this title
           let sibling = title.nextElementSibling;
           while(sibling && sibling.tagName !== 'TABLE') {
             sibling = sibling.nextElementSibling;
           }
           if (sibling) {
             newWeeks.push(parseWeekTable(sibling));
           }
        });
      }

      if (newWeeks.length > 0) {
        if(confirm(`Found ${newWeeks.length} weeks. Import and overwrite current split?`)) {
           workoutData.weeks = newWeeks;
           // Reset categories to default if they seem messed up, or keep existing? 
           // Better to keep existing categories list, but ensure we categorize imported exercises.
           // Re-initialize library to catch any new custom exercises (mapped to Uncategorized if unknown)
           
           // Check for any "Uncategorized" exercises and add that category if needed
           let hasUncategorized = false;
           newWeeks.forEach(w => {
             Object.values(w.sessions).forEach(s => {
               s.forEach(ex => {
                 if(ex.category === 'Uncategorized') hasUncategorized = true;
               });
             });
           });
           
           if(hasUncategorized && !workoutData.categories.includes('Uncategorized')) {
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
  const rows = Array.from(table.querySelectorAll('tr'));
  
  // Row 0: Session Headers (SESSION A, SESSION B...)
  // We need to map column indices to Session Keys
  // The layout is: Session A (4 cols) | Spacer (1 col) | Session B (4 cols) ...
  
  const sessionMap = []; // [{ key: 'A', startCol: 0 }, { key: 'B', startCol: 5 } ...]
  
  const headerRow = rows.find(r => r.textContent.includes('SESSION'));
  if (!headerRow) return { sessions: {} };
  
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
        
        if (name && !isNaN(sets)) {
           // Lookup category
           let category = 'Uncategorized';
           
           // 1. Try existing library
           Object.keys(workoutData.exerciseLibrary).forEach(cat => {
              if (workoutData.exerciseLibrary[cat].includes(name)) category = cat;
           });
           
           // 2. Try default data (if library empty/reset)
           if (category === 'Uncategorized') {
             // scan defaults
             defaultWorkoutData.weeks[0].sessions.A.forEach(e => { if(e.name===name) category=e.category; }); // simple check
             // Actually, construct a flat map from default
             if(defaultWorkoutData.weeks) {
                defaultWorkoutData.weeks.forEach(w => Object.values(w.sessions).forEach(s => s.forEach(ex => {
                    if(ex.name === name) category = ex.category;
                })));
             }
           }

           sessions[sess.key].push({
              name,
              sets,
              repsMin,
              repsMax,
              category
           });
        }
     }
  });

  return { sessions };
}

// Initialize
initializeExerciseLibrary();
updateCategoryDropdowns();
renderWeeksTabs();
renderSessions();
renderCategories();
