$(function () {
    //current day and time
    const now = moment().format('LLLL');
    // console.log(now);
    //display current day and time
    let displayMoment = document.getElementById('currentDay');
    displayMoment.textContent = now;

    ///////////////////////////////////////////////
    //what time it is ... goal to display time rows and to apply past present future colors
    let time = moment().format('hh:mm A');
    // console.log(time);
    // let timeEl = document.getElementById('hour');
    // timeEl.textContent = time;

    /////////////////task col////////////////////////////////
    //task empty array
    let tasks = [];
    //get local storage when page is loaded
    init();
    // //function handles event where save button is clicked it displays the task in the addText col
    // //and saves task to local storage
    $('addTask').on('click', function (event) {
        event.preventDefault();
        let task = $('addTask').val().trim();
        tasks.push(task);
        storeTasks();
        displayTask();
    });

    // //displays task in add task col
    function displayTask() {
        $('addTask').empty();
        let taskEl = $('addTask').textContent(task).append(taskEl);
    };

    // save btn clicked store task
    $('.saveBtn').on('click', function (event) {
        event.storeTasks();
    });

    //save task to local storage
    function storeTasks() {
        localStorage.setItem('task', JSON.stringify(task));
    };

    function init() {
        // Get stored tasks from localStorage
        // Parsing the JSON string to an object
        var storedTasks = JSON.parse(localStorage.getItem('task'));
        // If tasks were retrieved from localStorage
        if (storedTodos !== null) {
            tasks = storedTasks;
        };

        ///////////////////////////////////////////////////////////
        // setting time of hour class
        let timeEl = document.createAttribute('time');
        timeEl.innerText = time;

        // time = moment('LT')
        // if (moment('LT').isSame('LT').textContent.hour

        // const startTime = moment('09:00 +LT', 'HH:mm Z'); // 9:00 am
        // const endTime = moment('17:00 +LT', 'HH:mm Z'); // 5:00 pm
        // console.log(startTime , endTime);
        // let TimeRange = 

        // add plugin to use range  
        // const moment = extendMoment(Moment);
        // const startTime = moment('09:00 +LT', 'HH:mm Z'); // 9:00 am
        // const endTime = moment('17:00 +LT', 'HH:mm Z'); // 5:00 pm
        // let timeRange = moment.range(startTime, endTime);
        // console.log(TimeRanges);
        // function isWithin(timeRange, when) {
        //     return (when.within(timeRange).format('HH:mm Z'));
        // }
        // check if now is within time range 
        // let when = moment('LT');
        // console.log(isWithin(timeRange, when));

        ////////////////////display rows and col /////////////////////////

        ///////////////////display colors///////////////////
        //is before and after method from moment
        // if (moment('LT').isSame('LT').textContent.hour
        // let hourEl = $('hour').css('display', 'present')
        //     if (time == moment());
        // console.log(hourEl)
        //if time <= moment().css('display', 'future');
        // if time >= moment().css('display', 'past');

        //get a moment and set a moment //could build with + hour off of base hour of 9am
        //local storage

    });