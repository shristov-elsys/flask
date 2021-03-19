let data;
let a;
$(document).ready(function() {
    a = 0;
    createPage();
});

function createPage() {
    a = 1;
    $.when(
        loadData()
    ).then(function() {
        initComponent();
    });
    a = 4;
}

function loadData() {
    let deferred = $.Deferred();
    a = 2;
    $.ajax({
        url: "http://localhost:5000/experiment/posts",
        dataType: "json",
        type: "GET",
        success: function(result) {
            a = 5;
            data = result;
            deferred.resolve();
        },
        error: function() {
            data = [];
            deferred.resolve();
        }
    });
    a = 3;
    return deferred.promise();
};

function initComponent(){
  a = 6;
  $("#data").text('Result data: ' +  JSON.stringify(data));
}

function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
  var x = 10;
// Here x is 10
{
  var x = 2;
  // Here x is 2
}
// Here x is 2
}

