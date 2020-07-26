$(function () {

    //current day and time
    const now = moment().format('LLLL');
    //display current day and time
    let displayMoment = document.getElementById('currentDay');
    displayMoment.innerText = now;

    ///////////////////task color//////////////////
    // function that changes task color css based on the time it is
    function taskColor() {
        $('.task-input').each(function () {
            let current = parseInt(moment().hour());
            let time = parseInt($(this).data("time"));
            // console.log(time, current);
            if (time < current) {
                $(this).addClass('past');
            } else if (time === current) {
                $(this).remove('past');
                $(this).addClass('present');
            } else {
                $(this).remove('past');
                $(this).remove('present');
                $(this).addClass('future');
            };
        });
    };

    ///////////////////task col- local storage////////////////////////////////
    // this is getting stored or empty array
    let taskObj = [];

    // save btn clicked store task
    $('.saveBtn').on('click', function () {
        $('.task-input').each(function (tasks, inputEl) {
            taskObj[tasks] = $(inputEl).val().trim();
        });
        storeTasks(taskObj);
    });

    // // save task to local storage (setItem)
    function storeTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    function init() {
        // Get stored tasks from localStorage (getItem)
        // Parsing the JSON string to an object
        let storedTasks = JSON.parse(localStorage.getItem('tasks'));
        //display stored tasks values in the addTaskEl row they were saved in
        for (let i = 0; i < 10; i++) {
            $('#addTaskEl' + (i + 9)).val(storedTasks[i]);
        };
        // If no tasks were in localStorage
        if (!storedTasks) {
            storedTasks = taskObj;
        };
    };
    //get local storage when page is loaded
    init();
    // function taskColor when page loads
    taskColor();

    //clear button
    // $('#clearBtn').on('click', function () {
    //     $('.task-input').each(function (tasks, inputEl) {
    //         taskObj[tasks] = $(inputEl).val();
    //     });
    //     clearTasks();
    // });

    // function clearTasks(tasks) {
    //     localStorage.clear('tasks', JSON.stringify(tasks));
    // };






    //end
});
