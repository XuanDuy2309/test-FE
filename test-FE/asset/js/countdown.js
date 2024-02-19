var timeStart = new Date("Mar 1,2024 00:00:00").getTime()
setInterval(function(){
    var noW = new Date().getTime()
    var D = timeStart - noW
    var days = Math.floor(D/(1000*60*60*24))
    var hours = Math.floor(D/(1000*60*60))
    var minutes = Math.floor(D/(1000*60))
    var seconds = Math.floor(D/(1000))

    hours %=24
    minutes %=60
    seconds %=60

    document.getElementById("days").innerText = days<10?"0"+days:days
    document.getElementById("hours").innerText = hours<10?"0"+hours:hours
    document.getElementById("minutes").innerText = minutes<10?"0"+minutes:minutes
    document.getElementById("seconds").innerText = seconds<10?"0"+seconds:seconds

},1000)