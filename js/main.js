var menuItems = [  
   {  
      "type":"Appetizers",
      "item":"Fried Mozzarella Cheese",
      "price":"$5.95",
      "description":"5 sticks served with marinara sauce"
   },
   {  
      "type":"Appetizers",
      "item":"Meatball Casserole",
      "price":"$8.95",
      "description":"Baked in marinara and melted mozzarella cheese"
   },
   {  
      "type":"Appetizers",
      "item":"Fried Calamari",
      "price":"$8.95",
      "description":"Fried to a golden brown and served with marinara sauce"
   },
   {  
      "type":"Appetizers",
      "item":"Shrimp Napeoloene",
      "price":"$8.95",
      "description":"Jumbo Shrimp sauced in butter, brandy wine, garlic, fresh basil, shallots"
   },
   {  
      "type":"Appetizers",
      "item":"Sliced Italian Sausage",
      "price":"$5.95",
      "description":"Sauteed in olive oil, garlic, shallots, sherry wine, and marinara"
   },
   {  
      "type":"Appetizers",
      "item":"Mussels Marinara",
      "price":"$7.95",
      "description":"Sauteed mussels in olive oil, garlic, shallots, sherry wine, and marinara"
   },
   {  
      "type":"Homemade Baked Pastas",
      "item":"Baked Ziti",
      "price":"$8.95",
      "description":"Penne pasta ricotta cheese and marinara sauce topped with mozzarella cheese"
   },
   {  
      "type":"Homemade Baked Pastas",
      "item":"Manicotti",
      "price":"$8.95",
      "description":"Pasta stuffed and rolled with ricotta cheese, stuffed with marinara and mozzarella cheese"
   },
   {  
      "type":"Homemade Baked Pastas",
      "item":"Cheese or Meat Ravioli",
      "price":"$8.95",
      "description":"Stuffed ravioli pasta, topped with marinara and mozzarella cheese, served with a small side of spaghetti marinara"
   },
   {  
      "type":"Entrees",
      "item":"Tortollini Alla Panna",
      "price":"$10.95",
      "description":"Cheese tortellini sauteed in cream sauce and a touch of marinara"
   },
   {  
      "type":"Entrees",
      "item":"Tortollini Pesto",
      "price":"$10.95",
      "description":"Cheese tortellini sauteed in a pesto sauce"
   },
   {  
      "type":"Entrees",
      "item":"Spaghetti The Works",
      "price":"$11.95",
      "description":"Spaghetti with meatballs, meat sauce, mushrooms, and sausage"
   }
];

var html = "<table>";
html+="<th> Name </th>";
html+="<th> Category </th>";
html+="<th> Price </th>";
html+="<th> Description </th>";
for (var i = 0; i < menuItems.length; i++) {

  html+="<tr>";
  html+="<td>"+menuItems[i].item+"</td>";
  html+="<td>"+menuItems[i].type+"</td>";
  html+="<td>"+menuItems[i].price+"</td>";
  html+="<td>"+menuItems[i].description+"</td>"; 
  html+="</tr>";
}
html+="</table>";
document.getElementById("menu-data").innerHTML = html;

function initMap(){
      var location = {lat: 36.13,lng:-97.07};

      var map = new google.maps.Map(document.getElementById('map'),{
      center: location,
      zoom: 8
      });
      var marker = new google.maps.Marker({
      position: location,
      map: map
      });
}

function sendMessage() {
      var name = $('#name').val();
      var email = $('#email').val();
      var comment = $('#comment').val();

      if(comment == ''){
         alert("Write a  valid comment.")
         return false;
      }
      if(name == ''){
         alert("Write a valid name.")
         return false;
      }
      if(email == '' || email.indexOf("@") == -1){
         alert("Write a valid email.")
         return false;
      }
      else{
      $.ajax({
         type: "POST",
         url: 'contact.php',
         data: "name=" + name + "&email=" + email + "&comment=" + comment        
      })
      event.preventDefault();
      alert("Thank you for submitting your form.");
      window.location
      return true;
   }
}