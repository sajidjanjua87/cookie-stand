var timearray =['06 AM','07 AM','08 AM','09 AM','10 AM','11 AM','12 PM','01 PM','02 PM','03 PM','04 PM','05 PM','06 PM','07 PM'];

//Seatle cookie sale
var seatle = {
    min: 23,
    max: 65,
    avgsale: 6.3,
    //CPH - Customers per hour
    CPH: function(min,max){
        var range = max-min;
        var random = (Math.random() * range) + min;
        return Math.ceil(random);
    }
}

var seatlelist = document.createElement('ul');
var contentarea = document.getElementById('content-area');
seatlelist.textContent= 'Seatle Cookie Sales';
contentarea.appendChild(seatlelist);
var cookiesale= new Array();
var totalcookies = 0;

for (var i=0; i<15; i++){
    var numberofcustomers= seatle.CPH(seatle.min,seatle.max);
    cookiesale[i]= numberofcustomers * seatle.avgsale;

    var bullets = document.createElement('li');
    bullets.textContent = 'Time : '+ timearray[i] +' | Number of customers : ' + numberofcustomers + ' | Cookies sold : ' + Math.ceil(cookiesale[i]);

    seatlelist.appendChild(bullets);
    totalcookies += Math.ceil(cookiesale[i]);
}
bullets.textContent= 'Total cookies sold : ' + totalcookies; 
seatlelist.appendChild(bullets);

//Tokyo cookie sale
var tokyo = {
    min: 3,
    max: 24,
    avgsale: 1.2,
    //CPH -Customers per hour
    CPH: function(min, max){
        var range= max-min;
        var random = (Math.random() * range) + min;
        return Math.ceil(random);
    }
}

var tokyolist = document.createElement('ul');
var contentarea = document.getElementById('content-area');
tokyolist.textContent= 'Tokyo Cookie Sales';
contentarea.appendChild(tokyolist);
var cookiesale= new Array();
var totalcookies = 0;

for (var i=0; i<15; i++){
    var numberofcustomers= tokyo.CPH(tokyo.min,tokyo.max);
    cookiesale[i]= numberofcustomers * tokyo.avgsale;

    var bullets = document.createElement('li');
    bullets.textContent = 'Time : '+ timearray[i] +' | Number of customers : ' + numberofcustomers + ' | Cookies sold : ' + Math.ceil(cookiesale[i]);

    tokyolist.appendChild(bullets);
    totalcookies += Math.ceil(cookiesale[i]);
}
bullets.textContent= 'Total cookies sold : ' + totalcookies; 
tokyolist.appendChild(bullets); 


//Dubai cookie sale
var dubai = {
    min: 11,
    max: 38,
    avgsale: 3.7,
    //CPH -Customers per hour
    CPH: function(min, max){
        var range= max-min;
        var random = (Math.random() * range) + min;
        return Math.ceil(random);
    }
}

var dubailist = document.createElement('ul');
var contentarea = document.getElementById('content-area');
dubailist.textContent= 'Dubai Cookie Sales';
contentarea.appendChild(dubailist);
var cookiesale= new Array();
var totalcookies = 0;

for (var i=0; i<15; i++){
    var numberofcustomers= dubai.CPH(dubai.min,dubai.max);
    cookiesale[i]= numberofcustomers * dubai.avgsale;

    var bullets = document.createElement('li');
    bullets.textContent = 'Time : '+ timearray[i] +' | Number of customers : ' + numberofcustomers + ' | Cookies sold : ' + Math.ceil(cookiesale[i]);

    dubailist.appendChild(bullets);
    totalcookies += Math.ceil(cookiesale[i]);
}
bullets.textContent= 'Total cookies sold : ' + totalcookies; 
dubailist.appendChild(bullets);

//Paris cookie sale
var paris = {
    min: 20,
    max: 38,
    avgsale: 2.3,
    //CPH -Customers per hour
    CPH: function(min, max){
        var range= max-min;
        var random = (Math.random() * range) + min;
        return Math.ceil(random);
    }
}

var parislist = document.createElement('ul');
var contentarea = document.getElementById('content-area');
parislist.textContent= 'Paris Cookie Sales';
contentarea.appendChild(parislist);
var cookiesale= new Array();
var totalcookies = 0;

for (var i=0; i<15; i++){
    var numberofcustomers= paris.CPH(paris.min,paris.max);
    cookiesale[i]= numberofcustomers * paris.avgsale;

    var bullets = document.createElement('li');
    bullets.textContent = 'Time : '+ timearray[i] +' | Number of customers : ' + numberofcustomers + ' | Cookies sold : ' + Math.ceil(cookiesale[i]);

    parislist.appendChild(bullets);
    totalcookies += Math.ceil(cookiesale[i]);
}
bullets.textContent= 'Total cookies sold : ' + totalcookies; 
parislist.appendChild(bullets); 


//Lima cookie sale
var lima = {
    min: 2,
    max: 16,
    avgsale: 4.6,
    //CPH -Customers per hour
    CPH: function(min, max){
        var range= max-min;
        var random = (Math.random() * range) + min;
        return Math.ceil(random);
    }
}

var limalist = document.createElement('ul');
var contentarea = document.getElementById('content-area');
limalist.textContent= 'Lima Cookie Sales';
contentarea.appendChild(limalist);
var cookiesale= new Array();
var totalcookies = 0;

for (var i=0; i<15; i++){
    var numberofcustomers= lima.CPH(lima.min,lima.max);
    cookiesale[i]= numberofcustomers * lima.avgsale;

    var bullets = document.createElement('li');
    bullets.textContent = 'Time : '+ timearray[i] +' | Number of customers : ' + numberofcustomers + ' | Cookies sold : ' + Math.ceil(cookiesale[i]);

    limalist.appendChild(bullets);
    totalcookies += Math.ceil(cookiesale[i]);
}
bullets.textContent= 'Total cookies sold : ' + totalcookies; 
limalist.appendChild(bullets); 
