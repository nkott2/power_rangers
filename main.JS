const guest_names_array = [];

function add_Guests() {
    boxvalue = document.getElementById('gname').value;
    guest_names_array.push(boxvalue);
    console.log(guest_names_array);
    document.getElementById('gname').value = "";
}

function show_Guests() {

    let text = "<ul>";
    guest_names_array.forEach(myFunction);
    text += "</ul>";
    document.getElementById("guest_list").innerHTML = text;

    function myFunction(value) {
        text += "<li>" + value + "</li>";
    }

}

function sort_Guests() {
    guest_names_array.sort();
    let text = "<ul>";
    guest_names_array.forEach(myFunction);
    text += "</ul>";
    document.getElementById("sorted_guest_list").innerHTML = text;

    function myFunction(value) {
        text += "<li>" + value + "</li>";
    }

}

function search_Guests() {
    const filtered_array = guest_names_array.filter(search_Name);

    document.getElementById("search_guest_list").innerHTML =filtered_array.length + " name(s) found for this search "  ;

    function search_Name(name) {
        return name == document.getElementById('sname').value;
    }

}