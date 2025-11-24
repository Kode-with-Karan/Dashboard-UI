let navbar = document.querySelector('.navbar');
let links = navbar.querySelectorAll('a');
let count_num = document.querySelectorAll('.count_num');
let progress_persentage = document.querySelectorAll('.progress_persentage');





links.forEach(link => {
    link.addEventListener('click', function() {
        if (link.innerHTML != 'Dashboard') {
          links[0].style.paddingLeft = '20px';
          navbar.querySelectorAll('li')[7].style.marginRight = '20px';
        }
        if (link.innerHTML == 'Reviews') {
          navbar.querySelectorAll('li')[7].style.marginRight = '0px';
        }
        links.forEach(l => l.classList.remove('active_link'));
        this.classList.add('active_link');
    }); 
}); 

// let i = 1;
// setInterval(()=>{
//     if(i< 79){
//     count_num[0].innerHTML = i;
//     }
//         if(i < 57){
//     count_num[1].innerHTML = i;
//     }
//         if(i < 204){
//     count_num[2].innerHTML = i;
//     }
//     i++;
// }, 1)

// i = 1;
// setInterval(()=>{
//     if(i< 16){
//     progress_persentage[0].innerHTML = i+"%";
//     }
//         if(i < 16){
//     progress_persentage[1].innerHTML = i+"%";
//     }
//         if(i < 61){
//     progress_persentage[2].innerHTML = i+"%";
//     }
//         if(i < 11){
//     progress_persentage[3].innerHTML = i+"%";
//     }
//     i++;
// }, 100)



console.log(count_num)










// """
// adb_dcim_copy_hotkey.py

// Press Ctrl+Shift+Win+M to start copying DCIM subfolders from connected Android device one-by-one.
// Shows notifications for start/finish of each folder.

// Usage:
//     python adb_dcim_copy_hotkey.py --out "C:\Users\Karan\Pictures\DCIM_Backup"
//     python adb_dcim_copy_hotkey.py --serial R28A12345 --out ./dcim_backup
// """
