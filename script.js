
 const menuItems=[
     {
         id:1,
         item:"Food Item1",
         oneliner:"One:Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
         img:"images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
         hotel:"Hotel1 name1",
         desc:"One:Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

     },
     {
        id:2,
        item:"Food Item2",
        oneliner:"One:Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img:"images/davide-cantelli-jpkfc5_d-DI-unsplash.jpg",
        hotel:"Hotel1 name1",
        desc:"One:Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    },
    {
        id:3,
        item:"Food Item3",
        oneliner:"One:Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img:"images/pexels-jonathan-borba-2983101.jpg",
        hotel:"Hotel1 name1",
        desc:"One:Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    },
    {
        id:4,
        item:"Food Item4",
        oneliner:"One:Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img:"images/pexels-sebastian-coman-photography-3590401.jpg",
        hotel:"Hotel1 name1",
        desc:"One:Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    }
 ]

 const item=document.getElementById('item');
 const oneliner=document.getElementById('oneLiner');
 const img=document.getElementById('img');
 const hotel=document.getElementById('hotel');
 const desc=document.getElementById('desc');
 const prev=document.getElementById('prev');
 const random=document.getElementById('random');
 const next=document.getElementById('next');

 let currentMenu=0;

 window.addEventListener('DOMContentLoaded',function(){
    //  let menu=menuItems[currentMenu];
    //  item.textContent=menu.item;
    //  oneliner.textContent=menu.oneliner;
    //  img.src=menu.img;
    //  hotel.textContent=menu.hotel;
    //  desc.textContent=menu.desc;
    allMenu(currentMenu);
 });

 const allMenu=()=>{
     let menu=menuItems[currentMenu];
     item.textContent=menu.item;
     oneliner.textContent=menu.oneliner;
     img.src=menu.img;
     hotel.textContent=menu.hotel;
     desc.textContent=menu.desc;
 }

// rendom
random.addEventListener('click',()=>{
    currentMenu=Math.floor(Math.random()*menuItems.length);
    //console.log(currentMenu);
     allMenu(currentMenu);
})


// prev
prev.addEventListener('click',()=>{
    currentMenu--;
    if(currentMenu<0){
        currentMenu=menuItems.length-1;
    }
    allMenu(currentMenu);
});

// next
next.addEventListener('click',()=>{
    currentMenu++;
    if(currentMenu>menuItems.length-1){
        currentMenu=0;
    }
       
    allMenu(currentMenu);
})