
var images =
[ "Family.jpeg",
 "Me.jpeg",
 "Family Image 2.jpeg",
 "Family Image 3.jpeg" , 
 "Family Image 4.jpeg" ,
 "Family Image 5.jpeg", 
 "Family Image 1.jpeg"
];


 var i = 0;
 function update()
 {
    i++;
    var number_of_family_members_in_an_array = 6;
    if ( i > number_of_family_members_in_an_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    document.getElementById("Family_members_images").src = updatedImage;
 }
