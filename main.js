var student_array=[];

function Submit(){
    var name1 = document.getElementById("inputname_1").value;
    var name2 = document.getElementById("inputname_2").value;
    var name5 = document.getElementById("inputname_5").value;
    var name4 = document.getElementById("inputname_4").value;
    var name3 = document.getElementById("inputname_3").value;

    student_array.push(name1);
    student_array.push(name2);
    student_array.push(name3);
    student_array.push(name4);
    student_array.push(name5);

    console.log(student_array);

    document.getElementById("output").innerHTML= student_array;

    document.getElementById("button_submit").style.display="none";
    document.getElementById("button_sort").style.display="inline-block";

}

function Sort(){
    student_array.sort();
    
    document.getElementById("output").innerHTML= student_array;

}