$(function () {

    //current day and time
    const now = moment().format('LLLL');
    //display current day and time
    let displayMoment = document.getElementById('currentDay');
    displayMoment.textContent = now;

    /////////////////task col- local storage////////////////////////////////

    //task empty array
    let tasks = [];

    //get local storage when page is loaded
    init();

    // //function handles event where save button is clicked it displays the task in the addText col
    // //and saves task to local storage
    $('#addTaskEl').on('click', function (event) {
        event.preventDefault(); //display input where it is and not sumbit to somewhere else?
        let taskInput = $('#addTaskEl').val().trim(); //input
        displayTask(taskInput); //display input
        // console.log(taskInput);
    });

    //displays task in add task col
    function displayTask(taskInput) {
        $('addTaskEl').empty();
        $('addTaskEl').text(taskInput).append(tasks);
    };

    // save btn clicked store task
    $('.saveBtn').on('click', function () { //////not saving to local storage?
        let taskObj = {};
        $('.task-input').each(function(i, inputEl){
            let input = $(inputEl);
            console.log(i);
            console.log(input.attr('data-time'));
        taskObj.i = $(".task-input").val().trim();
        });
        storeTasks(taskObj);
    });


    // save task to local storage (setItem)
    function storeTasks(tasks) {
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    function init() {
        // Get stored tasks from localStorage (getItem)
        // Parsing the JSON string to an object
        var storedTasks = JSON.parse(localStorage.getItem('tasks'));
        // If no tasks were retrieved from localStorage
        if (storedTasks !== null) {
            tasks = storedTasks;
        };
    };



    ///////////////////task color//////////////////




    //end
});
