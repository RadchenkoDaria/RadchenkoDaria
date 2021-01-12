 let PrevBtn = document.getElementById('click-prev');
 let NextBtn = document.getElementById('click-next');
 let slideImg = document.getElementById('slider-img');

 PrevBtn.addEventListener('click', onPrevBtnClick);
 NextBtn.addEventListener('click', onNextBtnClick);

 let imgUrl = [];
 imgUrl.push('https://cdn.pixabay.com/photo/2017/10/06/09/49/colorful-2822453_960_720.jpg');
 imgUrl.push('https://cdn.pixabay.com/photo/2017/09/28/08/43/arrangement-2794724_960_720.jpg');
 imgUrl.push('https://cdn.pixabay.com/photo/2016/07/21/15/35/arrangement-1532817_960_720.jpg');
 imgUrl.push('https://cdn.pixabay.com/photo/2016/07/21/15/30/arrangement-1532798_960_720.jpg');
 imgUrl.push('https://cdn.pixabay.com/photo/2019/08/21/02/55/arrangement-4420041_960_720.jpg');

 let currentIndexImg = 0;
 slideImg.src = imgUrl[0];
 PrevBtn.disabled = true;

 function onPrevBtnClick(){
     currentIndexImg --;
     slideImg.src = imgUrl[currentIndexImg];
     NextBtn.disabled = false;

     if(currentIndexImg === 0){
         PrevBtn.disabled = true;
     }
 }

 function onNextBtnClick(){
     currentIndexImg ++;
     slideImg.src = imgUrl[currentIndexImg];
     PrevBtn.disabled = false;

     if(currentIndexImg === (imgUrl.length -1)){
         NextBtn.disabled = true;
     }
 }