$(function () {
    //current day and time
    const now = moment().format('LLLL');
    // console.log(now);
    //display current day and time
    let displayMoment = document.getElementById('currentDay');
    displayMoment.textContent = now;

    /////////////////task col////////////////////////////////
    //task empty array
    let tasks = [];
    //get local storage when page is loaded
    init();
    // //function handles event where save button is clicked it displays the task in the addText col
    // //and saves task to local storage
    $('addTaskEl').on('click', function (event) {
        event.preventDefault();
        let task = $('addTaskEl').val().trim();
        tasks.push(task);
        storeTasks();
        displayTask();
    });

    // //displays task in add task col
    function displayTask() {
        $('addTaskEl').empty();
        let taskEl = $('addTaskEl').textContent(task).append(taskEl);
    };

    // save btn clicked store task
    $('saveBtnEl').on('click', function () { //////not saving to local storage
        storeTasks();
    });

    //save task to local storage
    function storeTasks() {
        localStorage.setItem('task', JSON.stringify(tasks));
    };

    function init() {
        // Get stored tasks from localStorage
        // Parsing the JSON string to an object
        var storedTasks = JSON.parse(localStorage.getItem('task'));
        // If tasks were retrieved from localStorage
        if (storedTasks !== null) {
            tasks = storedTasks;
        };
    };

    ///////////////////////////////////////////////////////////
    // setting time of hour class
    ///////////////////////////////////////////////
    //get a moment and set a moment //could build with + hour off of base hour of 9am
    //what time it is ... goal to display time rows and to apply past present future colors
    let hour = moment().format('hh:mm A');
    // console.log(time);
    let timeEl = document.getElementById('hourEl');
    timeEl.textContent = hour;

    // if (moment('LT').isSame('LT').textContent.hour
    // function isWithin(timeRange, when) {
    //     return (when.within(timeRange).format('HH:mm Z'));
    // }
    // check if now is within time range 
    // let when = moment('LT');
    // console.log(isWithin(timeRange, when));

    ////////////////////display rows and col /////////////////////////
    //add more for 9-5pm

    ///////////////////display colors///////////////////
    //is before and after method from moment
    // if (moment('LT').isSame('LT').textContent.hour
    // let hourEl = $('hour').css('display', 'present')
    //     if (time == moment());
    // console.log(hourEl)
    //if time <= moment().css('display', 'future');
    // if time >= moment().css('display', 'past');

});