var topic=[
    "物聯網導論",
    "樹莓派結構",
    "微軟IoT Suite",
    "AWS IoT",
    "感測器實務",
    "xxx"
];

var startDate=new Date();

function setMonthAnDay(startMonth,startDay)
{
    console.log("[setMonthAndDay]");
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

//setMonthAnDay(2,28);
