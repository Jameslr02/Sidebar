const clientht = document.documentElement.clientHeight;
const height1 = window.innerHeight;
const width1 = window.innerWidth;
let navcontainerelems = document.getElementsByClassName('navcontainer');
const realreact = navcontainerelems[0].getBoundingClientRect();
let togglebool = false;
 function showSubmenu(element){
if(!togglebool){
const rect = element.getBoundingClientRect();
var y = rect.top + window.scrollY;
var w = rect.width;
var h = rect.height;
var y2 = 100 * (y/height1);
var w1 = 100 * (w/width1);
var h1 = 100 * (h/height1);
let menu = element.children[3];
menu.style.left = w1 + 'vw';
menu.style.top = y2 + 'vh';
menu.style.width =  w1 + 'vw';
menu.style.display = 'block';
}
else if(togglebool){
    let tg = document.getElementsByClassName('sidenavcontainer');
    const togglerect = tg[0].getBoundingClientRect();
    const rect2 = element.getBoundingClientRect();
    const realreact = navcontainerelems[0]
    var y = rect2.top + window.scrollY;
    var y2 = 100 * (y/height1);
    var x = togglerect.width;
    var x1 = 100 * (x/width1);
    let menu = element.children[3];
    menu.style.left = x1 + 'vw';
    menu.style.top = y2 + 'vh';
    menu.style.display = 'block';
}
};
function hidechildren(element){
    let menu = element.children[3];
    menu.style.display = 'none';
};
function togglesidemenu() {
    togglebool = !togglebool;
    let sidenav = document.getElementById('sidenav');
    let navcontainerelems = document.getElementsByClassName('navcontainer');
    let logoimg = document.getElementById('sidebarlogoimg');
    let hamburgericon = document.getElementsByClassName('iconbutton');
    let logo = document.getElementById('sidebarlogo');
    let sidebarnav = document.getElementsByClassName('sidenavcontainer');
    let sidearrow = document.getElementsByClassName('sidearrowicon');
    if (togglebool)
    {
    logo.style.opacity = "0";
    logo.style.visibility = "hidden";
    logoimg.style.opacity = "0";
    logoimg.style.visibility = "hidden";
        logo.style.display = "none";
    for (i = 0; i < sidearrow.length; i++)
    {
        let temparrow = sidearrow[i];
        temparrow.style.opacity = 0;
        temparrow.style.visibility = 'hidden';
    }
    for(i = 0; i < sidearrow.length; i++)
    {
        let temparrow = sidearrow[i];
        let arrect = temparrow.getBoundingClientRect();
        
        var arrtop = arrect.top + window.scrollY;      
        var vharrtop = 100 * (arrtop/height1);              
        temparrow.style.left = 3 - 0.5 + "vw";
        temparrow.style.top = vharrtop + 2.1 + "vh";
        temparrow.style.position = 'absolute';
        console.log(temparrow.style.left);
        console.log(temparrow.style.top);
    }
    setTimeout(function()
        {
            for (i = 0; i < sidearrow.length; i++)
             {
                 let temparrow = sidearrow[i];
                 temparrow.style.opacity = 1;
                 temparrow.style.visibility = 'visible';
             }
            
        },1000);
    sidebarnav[0].style.width = "3vw";
    sidenav.style.overflow = "hidden";
    console.log('clicked');
    }
    else if(!togglebool)
    { 
        logoimg.style.width = "auto";
        setTimeout(function(){
            logo.style.display = "revert";
                },1000);
        setTimeout(function(){
            logo.style.opacity = "1";
        logo.style.visibility = "visible";
        logoimg.style.opacity = "1";
        logoimg.style.visibility = "visible";
                },1300);
        for(i = 0; i < sidearrow.length; i++)
        {
            let temparrow = sidearrow[i];
            temparrow.style.position = 'inherit';
            temparrow.style.left = 0;
            temparrow.style.top = 0;
        }
        sidebarnav[0].style.width = "14.5vw";
    }
}