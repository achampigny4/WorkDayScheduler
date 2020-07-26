$(function () {

    //current day and time
    const now = moment().format('LLLL');
    //display current day and time
    let displayMoment = document.getElementById('currentDay');
    displayMoment.textContent = now;

    ////task col- local storage////////////////////////////////
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
    // javascript runs top to bottom
    //get local storage when page is loaded
    init();

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

    ///////////////////task color//////////////////
    //get a moment and set a moment //could build with + hour off of base hour of 9am
    // let hour = moment().format('hh:mm A');

    // console.log(moment().hour());

    function taskColor() {
        $('.task-input').each(function () {
            if (('#time') == moment().hour()); {
                $(this).addClass('present');
                // console.log('#time');
            };
            if (('#time') < moment().hour()); {
                $(this).addClass('past');
            };
            if (('.hour') > moment().hour()); {
                $(this).addClass('future');
            };
        });
    };

    // function taskColor() {
    //     var time = $(".hour").val();
    //     $('.task-input').each(function () {
    //         if (time == moment().hour()); {
    //             $(this).addClass('present');
    //             // console.log(time);
    //         };
    //         if (('#time') < moment().hour()); {
    //             $(this).addClass('past');
    //         };
    //         if (('.hour') > moment().hour()); {
    //             $(this).addClass('future');
    //         };
    //     });
    // };

    // function taskColor() {
    //     if ($(data) == moment().hour())
    //         $('.task-input').addClass('display, present');
    //     console.log(data);
    // };

    // function taskColor() {
    //     $('.hour').each(function () {
    //         if ($(this).html) == moment().hour())
    //             $('.task-input').addClass('display, present');
    //         // console.log();
    //     });
    // };

    taskColor();




    //end
});
