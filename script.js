function Trello() {

    return {
        tasks: [],
        newTask: {
            title: '',
            description: '',
            status: 'todo'
        },
        editingId: null,
        editingTask: {},
        deletingTask: {},
        searchQuery: '',
        filterStatus: 'all',

        ////
        init() {
            const saved = localStorage.getItem('trelloLocalStorage');
            if (saved) {
                this.tasks = JSON.parse(saved);
            }
        },

        // ajout task
        addTask() {
            const task = {
                id: Date.now(),
                title: this.newTask.title,
                description: this.newTask.description,
                status: this.newTask.status
            };
            this.tasks.push(task);
            this.saveTasks();


            this.newTask = { title: '', description: '', status: 'todo' };
            
            // fermer le prompt quand la tache est ajouté
            const addTaskPrompt = document.querySelector('.addTaskPrompt');
            if  (addTaskPrompt) {
                addTaskPrompt.style.display = 'none';
            }
        },

        // delete

        deleteTask(id) {
            this.tasks = this.tasks.filter(t =>t.id!==id);
            this.saveTasks();
        },

        startDelete(task) {
            // enregistrer la tache à sup
            this.deletingTask = {...task};
            
            // Ouvrir le prompt de suppression
            const deleteTaskPrompt = document.querySelector('.deleteTaskPrompt');
            if(deleteTaskPrompt) {
                deleteTaskPrompt.style.display = 'flex';
            }
        },

        confirmDelete() {
            // Si une tache est marqué comme à sup
            if(this.deletingTask.id) {
                this.deleteTask(this.deletingTask.id);
                this.cancelDelete();
            }
        },

        cancelDelete() {
            // reset
            this.deletingTask = {};
            
            // Fermer le prompt de suppression
            const deleteTaskPrompt = document.querySelector('.deleteTaskPrompt');
            if(deleteTaskPrompt) {
                deleteTaskPrompt.style.display = 'none';
            }
        },

        // edit

        startEdit(task) {
            this.editingId = task.id;
            this.editingTask = { ...task };
            
            // Ouvrir le prompt modif
            const editTaskPrompt = document.querySelector('.editTaskPrompt');
            if(editTaskPrompt) {
                editTaskPrompt.style.display = 'flex';
            }
        },

        saveEdit() {
            const index = this.tasks.findIndex(t => t.id === this.editingId);
            if (index !== -1) {
                this.tasks[index] = {...this.editingTask};
                this.saveTasks();
            }
            this.cancelEdit();
        },

        cancelEdit() {
            this.editingId = null;
            this.editingTask = {};
            
            //fermer prompt modif
            const editTaskPrompt = document.querySelector('.editTaskPrompt');
            if (editTaskPrompt) {
                editTaskPrompt.style.display = 'none';
            }
        },

        // save
        saveTasks() {
            localStorage.setItem('trelloLocalStorage', JSON.stringify(this.tasks));
        },

        filteredTasks() {
            return this.tasks.filter(task => {
                if (this.filterStatus !== 'all' && task.status!== this.filterStatus) {
                    return false;
                }
                if (this.searchQuery && !task.title.toLowerCase().includes(this.searchQuery.toLowerCase())) {
                    return false;
                }
                return true;
            });
        },

        /////
        getStatusLabel(status) {
            const labels = {
                'all': 'Tous les statuts',
                'todo': 'À faire',
                'inprogress': 'En cours',
                'done': 'Terminé'
            };
            return labels[status] || status;
        }
    }
}


// dom
document.addEventListener('DOMContentLoaded', function() {
    // Prompt ajout tache
    const addTaskPrompt = document.querySelector('.addTaskPrompt');
    const addTaskButton = document.getElementById('addTaskButton');
    const closeTaskPromptBtn = document.getElementById('closeTaskPromptBtn');
    const promptTaskCancelBtn = document.getElementById('promptTaskCancelBtn');

    addTaskButton.addEventListener('click', function() {
        addTaskPrompt.style.display = 'flex';
    });
    
    closeTaskPromptBtn.addEventListener('click', function() {
        addTaskPrompt.style.display = 'none';
    });

    promptTaskCancelBtn.addEventListener('click', function() {
        addTaskPrompt.style.display = 'none';
    });

    // Prompt credits
    const creditPrompt = document.querySelector('.creditPrompt');
    const creditsButton = document.querySelector('.creditsButton');
    const closeCreditPromptBtn = document.getElementById('closeCreditPromptBtn');
    const promptCreditCloseBtn = document.getElementById('promptCreditCloseBtn');

    creditsButton.addEventListener('click', function() {
        creditPrompt.style.display = 'flex';
    });

    closeCreditPromptBtn.addEventListener('click', function() {
        creditPrompt.style.display = 'none';
    });


    promptCreditCloseBtn.addEventListener('click', function() {
        creditPrompt.style.display = 'none';
    });
});