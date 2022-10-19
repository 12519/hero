document.addEventListener("DOMContentLoaded", function () {
    var e = document.getElementById("calendar"),
        a = new FullCalendar.Calendar(e, {
            plugins: ["interaction", "dayGrid", "timeGrid"],
            header: {
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay"
            },
            defaultDate: new Date(),
            navLinks: !0,
            selectable: !0,
            selectMirror: !0,
            select: function (e) {
                var DateString = e.start.getFullYear() + "-" + String(e.start.getMonth() + 1).padStart(2, '0') + "-" + String(e.start.getDate()).padStart(2, '0');
                $('#MeetingInfo_StartDate').val(DateString);
                clearModalData();
                $('.bs-example-modal-lg').modal('show');
            },
            editable: !0,
            eventLimit: !0,
            eventClick: function (info) {
                window.open("Agenda?Id=" + info.event.extendedProps.MeetingPId,"_self");
            },
            events: function (start, callback) {
                var callbackFn = callback;
                $.ajax({
                    url: 'GetCalendarData',
                    type: "GET",
                    dataType: "JSON",

                    success: function (result) {
                        var newevent = [];
                        if (result) {
                            for (var i = 0; i < result.length; i++) {
                                var data = result[i];
                                if (data.meetingType == 1) {
                                    data.eventName = "Advantage Plus Meeting"
                                }
                                if (data.meetingType == 2) {
                                    data.eventName = "Advantage Plus Executive Office Meeting"
                                }
                                var color = getColor();
                                newevent.push(
                                    {
                                        title: data.eventName,
                                        description: "",
                                        allDay: false,
                                        start: new Date(new Date(moment(data.startDate).format('YYYY-MM-DD')).setHours(new Date(data.startTime).getHours())).setMinutes(new Date(data.startTime).getMinutes()),
                                        end: new Date(new Date(moment(data.startDate).format('YYYY-MM-DD')).setHours(new Date(data.endTime).getHours())).setMinutes(new Date(data.endTime).getMinutes()),
                                        MeetingId: data.meetingGUID,
                                        MeetingPId: data.meetingId,
                                        backgroundColor: color,
                                        borderColor: color
                                    });
                            }
                        }
                        callbackFn(newevent);
                    }
                });
            },
        });
    a.render()
});
function getColor() {
    return "hsl(" + 360 * Math.random() + ',' +
        (25 + 70 * Math.random()) + '%,' +
        (85 + 10 * Math.random()) + '%)'
}

function clearModalData() {
    $("#MeetingInfo_StartTime").val("");
    $("#MeetingInfo_EndTime").val("");
    $("#TxtOfflineModeOfMeetingText").val("");
    $("#TxtOnlineModeOfMeetingText").val("");

    $("input:radio[name='IsOffline']").each(function (values) {
        $("input[name=IsOffline][value='1']").prop('checked', true);
    });

    $('input[name="MeetingInfo.ModeOfMeeting"]').prop('checked', false);
    $("#MeetingAttendeeTypeId_MeetingAttendeeTypeId").prop("selectedIndex", 0);
    $("#MeetingInfo_MeetingType").prop("selectedIndex", 0);
    $("#AgendaList_0__Agenda_TypeOfAgenda").prop("selectedIndex", 0);
    $("#AgendaList_0__Agenda_TopicName").val("");
    $(".clsExtraAdded").remove();
    setMeetingMode()
}