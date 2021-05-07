function addEntryToTable() {

    var description = document.getElementById("description").value;
    var title = document.getElementById("title").value;
    var availability = document.getElementById("availability").value;
    var level = document.getElementById("level").value;
    var author = document.getElementById("author").value;

    if (description=="" | title=="" | availability=="" | level=="" | author==""){
        document.getElementById("error").style.visibility = "visible";
    }
    else{
        document.getElementById("error").style.visibility = "hidden";

        //Tabla lortu
        var table = document.getElementById("tabla");

        var totalRows = table.rows.length;
        var row = table.insertRow(totalRows);
        row.className += " td";
        var cell1 = row.insertCell(0);
        cell1.className += " title";
        var cell2 = row.insertCell(1);
        cell2.className += " description";

        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
    
        //Jasotako testua hutsuneen arabera zatitu
        var zatitua = description.split("\n");
        var i;
        var balioa = "";
        for (i = 0; i < zatitua.length; i++) {
            if(zatitua[i].startsWith("-")){
                if(i == 0){
                    balioa += "<ul>";
                }
                else if (zatitua[i-1].startsWith("-") == false){
                    balioa += "<ul>"; 
                }
                balioa += "<li>" + zatitua[i].substring(1); + "</li>"
                if (i == zatitua.length-1){
                    balioa += "</ul>";
                }
                else if (zatitua[i+1].startsWith("-") == false){
                    balioa += "</ul>";
                }
            }
            else{
                balioa += "<span>" + zatitua[i] + "</span>" + "<br>";
            }
        
        }
        cell1.innerHTML = title;
        cell2.innerHTML = balioa;
        cell3.innerHTML = availability;
        cell4.innerHTML = level;
        cell5.innerHTML = author;
    }
}