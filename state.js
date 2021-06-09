$(document).ready(function()
{
    console.log("loaded");
    var state =$("#stateDropdown");


    $.ajax({
        url:"https://cdn-api.co-vin.in/api/v2/admin/location/states",
        success:function(results){
            console.log(results.name);
            
            $.each(results.states, function(key,value){
                state.append('<option value=' + value.state_id + '>' + value.state_name + '</option>');
            });


        }
    });

    $("#stateDropdown").change(function(){
        var stateId=$(this).val();
        console.log("stateId :"+stateId);
    

    var districts = $("#distDropdown");
    $.ajax({
        url:"https://cdn-api.co-vin.in/api/v2/admin/location/districts/"+stateId,
        success:function(results){
            console.log(results.districts);
            //$districts.empty();

            $.each(results.districts, function(key,value){
                districts.append('<option value=' + value.district_id + '>' + value.district_name + '</option>');
            });


        }
    });

    
$(".tt").click(function(){
    $("#part2").show()
});

});
var sessions = $("#hospitals");
    $.ajax({
        url:"https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=512&date=31-03-2021",
        success:function(results){
            console.log(results.sessions);
            //$districts.empty();

            $.each(results.sessions, function(key,value){
                sessions.append('<option value=' + value.name + '>' + value.name + '</option>');
            });


        }
    });
});