$(function () {

    //current day and time
    const now = moment().format('LLLL');
    //display current day and time
    let displayMoment = document.getElementById('currentDay');
    displayMoment.textContent = now;

    // moment(date).hour

    ////task col- local storage////
    // this is getting stored or empty array
    let taskObj = [];
    // let taskObj = JSON.parse(localStorage.getItem('tasks')) || [];
    // console.log(taskObj);

    // save btn clicked store task
    $('.saveBtn').on('click', function () {
        $('.task-input').each(function (tasks, inputEl) {
            taskObj[tasks] = $(inputEl).val().trim();
        });
        storeTasks(taskObj);
    });

    // // save task to local storage (setItem)
    function storeTasks(tasks) {
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    function init() {
        // Get stored tasks from localStorage (getItem)
        // Parsing the JSON string to an object
        let storedTasks = JSON.parse(localStorage.getItem('tasks'));
        // If no tasks were retrieved from localStorage
        if (storedTasks !== null) {
            for (let i = 0; i < 10; i++) {
                $('#addTaskEl' + (i + 9)).text(storedTasks[i]);
            };
        };
    };
    // javascript runs top to bottom
    //get local storage when page is loaded
    init();

    ///////////////////task color//////////////////




    //end
});
