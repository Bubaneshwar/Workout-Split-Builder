        // Initial workout data (Default Template)
        const defaultWorkoutData = {
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
            },
            categories: ["front delts", "rear delts", "side delts", "triceps", "biceps", "hamstrings", "quads", "calves", "neck", "forearms", "chest", "lats", "upper back", "lower back"]
        };

        // Load from localStorage or use default
        let workoutData = JSON.parse(localStorage.getItem('workoutSplitData')) || JSON.parse(JSON.stringify(defaultWorkoutData));

        let currentSession = null;
        let currentExerciseIndex = null;
        let currentExerciseName = null;

        // Save to localStorage helper
        function saveToLocalStorage() {
            localStorage.setItem('workoutSplitData', JSON.stringify(workoutData));
        }

        // Add Reset Function
        function resetToDefault() {
            if(confirm('This will erase all your custom changes and restore the default template. Are you sure?')) {
                workoutData = JSON.parse(JSON.stringify(defaultWorkoutData));
                saveToLocalStorage();
                renderSessions();
                renderCategories();
                updateCategoryDropdowns();
            }
        }

        function renderSessions() {
            const grid = document.getElementById('sessionsGrid');
            grid.innerHTML = '';
            
            Object.keys(workoutData.sessions).forEach(session => {
                const sessionExercises = workoutData.sessions[session];
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
            const exercises = [];
            Object.values(workoutData.sessions).forEach(session => {
                session.forEach(ex => {
                    if (ex.category === category && !exercises.find(e => e.name === ex.name)) {
                        exercises.push(ex);
                    }
                });
            });
            return exercises;
        }

        function getCategoryVolume(category) {
            let volume = 0;
            Object.values(workoutData.sessions).forEach(session => {
                session.forEach(ex => {
                    if (ex.category === category) {
                        volume += parseInt(ex.sets) || 0;
                    }
                });
            });
            return volume;
        }

        function getExerciseVolume(exerciseName) {
            let volume = 0;
            Object.values(workoutData.sessions).forEach(session => {
                session.forEach(ex => {
                    if (ex.name === exerciseName) {
                        volume += parseInt(ex.sets) || 0;
                    }
                });
            });
            return volume;
        }

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

        function handleDragEnd(e) {
            this.classList.remove('dragging');
            document.querySelectorAll('.session-card').forEach(card => {
                card.classList.remove('drag-over');
            });
        }

        function handleDragOver(e) {
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.dataTransfer.dropEffect = 'move';
            return false;
        }

        function handleDragEnter(e) {
            this.closest('.session-card').classList.add('drag-over');
        }

        function handleDragLeave(e) {
            if (e.target === this) {
                this.closest('.session-card').classList.remove('drag-over');
            }
        }

        function handleDrop(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            
            const fromSession = draggedElement.dataset.session;
            const fromIndex = parseInt(draggedElement.dataset.index);
            const toSession = this.dataset.session;
            
            const exercise = workoutData.sessions[fromSession][fromIndex];
            
            workoutData.sessions[fromSession].splice(fromIndex, 1);
            workoutData.sessions[toSession].push(exercise);
            
            saveToLocalStorage(); // Save changes
            renderSessions();
            renderCategories();
            
            return false;
        }

        function openAddExerciseModal(session) {
            currentSession = session;
            currentExerciseIndex = null;
            document.getElementById('modalTitle').textContent = 'Add Exercise';
            document.getElementById('exerciseName').value = '';
            document.getElementById('exerciseCategory').value = 'chest';
            document.getElementById('exerciseSets').value = '';
            document.getElementById('exerciseRepsMin').value = '';
            document.getElementById('exerciseRepsMax').value = '';
            document.getElementById('exerciseModal').style.display = 'block';
        }

        function editExercise(session, index) {
            currentSession = session;
            currentExerciseIndex = index;
            const exercise = workoutData.sessions[session][index];
            
            document.getElementById('modalTitle').textContent = 'Edit Exercise';
            document.getElementById('exerciseName').value = exercise.name;
            document.getElementById('exerciseCategory').value = exercise.category;
            document.getElementById('exerciseSets').value = exercise.sets;
            document.getElementById('exerciseRepsMin').value = exercise.repsMin;
            document.getElementById('exerciseRepsMax').value = exercise.repsMax;
            document.getElementById('exerciseModal').style.display = 'block';
        }

        function deleteExercise(session, index) {
            if (confirm('Are you sure you want to delete this exercise?')) {
                workoutData.sessions[session].splice(index, 1);
                saveToLocalStorage(); // Save changes
                renderSessions();
                renderCategories();
            }
        }

        function openCategoryModal(exerciseName, currentCategory) {
            currentExerciseName = exerciseName;
            document.getElementById('changeCategoryExercise').value = exerciseName;
            document.getElementById('newCategory').value = currentCategory;
            document.getElementById('categoryModal').style.display = 'block';
        }

        document.getElementById('saveExercise').addEventListener('click', () => {
            const name = document.getElementById('exerciseName').value;
            const category = document.getElementById('exerciseCategory').value;
            const sets = parseInt(document.getElementById('exerciseSets').value);
            const repsMin = parseInt(document.getElementById('exerciseRepsMin').value);
            const repsMax = parseInt(document.getElementById('exerciseRepsMax').value);
            
            if (!name || !sets || !repsMin || !repsMax) {
                alert('Please fill in all fields');
                return;
            }
            
            const exercise = {
                name: name,
                sets: sets,
                repsMin: repsMin,
                repsMax: repsMax,
                category: category
            };
            
            if (currentExerciseIndex !== null) {
                workoutData.sessions[currentSession][currentExerciseIndex] = exercise;
            } else {
                workoutData.sessions[currentSession].push(exercise);
            }
            
            saveToLocalStorage(); // Save changes
            document.getElementById('exerciseModal').style.display = 'none';
            renderSessions();
            renderCategories();
        });

        document.getElementById('cancelExercise').addEventListener('click', () => {
            document.getElementById('exerciseModal').style.display = 'none';
        });

        document.getElementById('saveCategory').addEventListener('click', () => {
            const newCategory = document.getElementById('newCategory').value;
            
            // Update all instances of this exercise across all sessions
            Object.keys(workoutData.sessions).forEach(session => {
                workoutData.sessions[session].forEach(exercise => {
                    if (exercise.name === currentExerciseName) {
                        exercise.category = newCategory;
                    }
                });
            });
            
            saveToLocalStorage(); // Save changes
            document.getElementById('categoryModal').style.display = 'none';
            renderSessions();
            renderCategories();
        });

        document.getElementById('cancelCategory').addEventListener('click', () => {
            document.getElementById('categoryModal').style.display = 'none';
        });

        function addSession() {
            const sessions = Object.keys(workoutData.sessions);
            // Simple auto-increment letter logic. 
            // If we run out of letters (Z), we could start using AA etc, but for now single letters are fine.
            let nextChar = 'A';
            if (sessions.length > 0) {
                const lastSession = sessions[sessions.length - 1];
                nextChar = String.fromCharCode(lastSession.charCodeAt(0) + 1);
            }
            
            if (workoutData.sessions[nextChar]) {
                // Find first available gap or append
                for (let i = 65; i < 91; i++) {
                    const char = String.fromCharCode(i);
                    if (!workoutData.sessions[char]) {
                        nextChar = char;
                        break;
                    }
                }
            }

            workoutData.sessions[nextChar] = [];
            saveToLocalStorage(); // Save changes
            renderSessions();
        }

        function deleteSession(session) {
            if (confirm(`Are you sure you want to delete Session ${session}?`)) {
                delete workoutData.sessions[session];
                saveToLocalStorage(); // Save changes
                renderSessions();
                renderCategories(); // Update because exercises are gone
            }
        }

        function openAddCategoryModal() {
            document.getElementById('newCategoryName').value = '';
            document.getElementById('newCategoryModal').style.display = 'block';
        }

        function deleteCategory(category) {
            if (confirm(`Are you sure you want to delete category "${category}"?`)) {
                workoutData.categories = workoutData.categories.filter(c => c !== category);
                saveToLocalStorage(); // Save changes
                updateCategoryDropdowns();
                renderCategories();
            }
        }

        function updateCategoryDropdowns() {
            const selects = ['exerciseCategory', 'newCategory'];
            selects.forEach(id => {
                const select = document.getElementById(id);
                if (!select) return;
                const currentValue = select.value;
                select.innerHTML = '';
                workoutData.categories.forEach(cat => {
                    const option = document.createElement('option');
                    option.value = cat;
                    option.textContent = cat;
                    select.appendChild(option);
                });
                // Restore value if it still exists, otherwise default to first
                if (workoutData.categories.includes(currentValue)) {
                    select.value = currentValue;
                }
            });
        }
        
        document.getElementById('saveNewCategory').addEventListener('click', () => {
            const name = document.getElementById('newCategoryName').value.trim().toLowerCase();
            if (!name) {
                alert('Please enter a category name');
                return;
            }
            if (workoutData.categories.includes(name)) {
                alert('Category already exists');
                return;
            }
            
            workoutData.categories.push(name);
            saveToLocalStorage(); // Save changes
            updateCategoryDropdowns();
            renderCategories();
            document.getElementById('newCategoryModal').style.display = 'none';
        });

        document.getElementById('cancelNewCategory').addEventListener('click', () => {
            document.getElementById('newCategoryModal').style.display = 'none';
        });

        function exportToExcel() {
            // 1. Calculate dimensions & Volumes
            const sessions = Object.keys(workoutData.sessions);
            let maxExercises = 0;
            const sessionVolumes = {};
            
            sessions.forEach(session => {
                if (workoutData.sessions[session].length > maxExercises) {
                    maxExercises = workoutData.sessions[session].length;
                }
                // Calculate Total Session Volume
                sessionVolumes[session] = workoutData.sessions[session].reduce((sum, ex) => sum + (parseInt(ex.sets) || 0), 0);
            });

            // Calculate Category Volumes
            const categoryVolumes = {};
            workoutData.categories.forEach(cat => categoryVolumes[cat] = 0);
            
            Object.values(workoutData.sessions).forEach(sessionList => {
                sessionList.forEach(ex => {
                    if (categoryVolumes[ex.category] !== undefined) {
                        categoryVolumes[ex.category] += (parseInt(ex.sets) || 0);
                    }
                });
            });

            // 2. Build HTML Table for Excel
            let html = `
                <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
                <head>
                    <!--[if gte mso 9]>
                    <xml>
                        <x:ExcelWorkbook>
                            <x:ExcelWorksheets>
                                <x:ExcelWorksheet>
                                    <x:Name>Workout Split</x:Name>
                                    <x:WorksheetOptions>
                                        <x:DisplayGridlines/>
                                    </x:WorksheetOptions>
                                </x:ExcelWorksheet>
                            </x:ExcelWorksheets>
                        </x:ExcelWorkbook>
                    </xml>
                    <![endif]-->
                    <meta charset="UTF-8">
                    <style>
                        table { border-collapse: collapse; font-family: Arial, sans-serif; margin-bottom: 40px; }
                        th { background-color: #D95D2E; color: white; border: 1px solid #000000; padding: 10px; }
                        .sub-header { background-color: #f0f0f0; font-weight: bold; border: 1px solid #000000; color: #333; }
                        td { border: 1px solid #000000; padding: 5px; text-align: center; }
                        .ex-name { text-align: left; }
                        .total-row { background-color: #e6e6e6; font-weight: bold; border-top: 2px solid #000; }
                        .section-title { font-size: 18pt; font-weight: bold; color: #D95D2E; border: none; text-align: left; padding: 20px 0 10px 0; }
                    </style>
                </head>
                <body>
                    <!-- WORKOUT SPLIT TABLE -->
                    <table>
                        <thead>
            `;

            // Row 1: Session Headers
            html += `<tr>`;
            sessions.forEach(session => {
                html += `<th colspan="4" style="background-color: #D95D2E; color: white; font-size: 14pt;">SESSION ${session}</th>`;
                html += `<td style="border: none;"></td>`; 
            });
            html += `</tr>`;

            // Row 2: Column Headers
            html += `<tr>`;
            sessions.forEach(() => {
                html += `
                    <td class="sub-header" style="width: 200px;">Exercise</td>
                    <td class="sub-header" style="width: 60px;">Sets</td>
                    <td class="sub-header" style="width: 80px;">Min Reps</td>
                    <td class="sub-header" style="width: 80px;">Max Reps</td>
                    <td style="border: none;"></td> 
                `;
            });
            html += `</tr>`;
            html += `</thead><tbody>`;

            // Row 3+: Exercises Data
            for (let i = 0; i < maxExercises; i++) {
                html += `<tr>`;
                sessions.forEach(session => {
                    const ex = workoutData.sessions[session][i];
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
                    html += `<td style="border: none;"></td>`; 
                });
                html += `</tr>`;
            }

            // Final Row: Total Session Volume
            html += `<tr>`;
            sessions.forEach(session => {
                html += `
                    <td class="total-row" style="text-align: right;">TOTAL SETS:</td>
                    <td class="total-row">${sessionVolumes[session]}</td>
                    <td class="total-row" colspan="2"></td>
                    <td style="border: none;"></td>
                `;
            });
            html += `</tr>`;

            html += `</tbody></table>`;

            // Spacer Row between tables
            html += `<br><br>`;

            // SECOND TABLE: VOLUME PER MUSCLE GROUP
            html += `
                <table>
                    <thead>
                        <tr>
                            <th style="width: 200px;">Muscle Group</th>
                            <th style="width: 100px;">Total Sets</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            // Sort categories by volume (highest to lowest) for better readability
            const sortedCategories = Object.keys(categoryVolumes).sort((a, b) => categoryVolumes[b] - categoryVolumes[a]);

            sortedCategories.forEach(cat => {
                // Only show categories that have volume
                if (categoryVolumes[cat] > 0) {
                    html += `
                        <tr>
                            <td class="ex-name" style="text-transform: capitalize;">${cat}</td>
                            <td>${categoryVolumes[cat]}</td>
                        </tr>
                    `;
                }
            });

            html += `</tbody></table></body></html>`;

            // 3. Trigger Download
            const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
            const url = URL.createObjectURL(blob);
            const downloadLink = document.createElement("a");
            downloadLink.href = url;
            downloadLink.download = "workout_split_plan.xls";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }

        // Initialize
        updateCategoryDropdowns();
        renderSessions();
        renderCategories();
