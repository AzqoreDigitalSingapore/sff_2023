function shareLink(e){navigator.share?(console.log(`Previously visited page URL: ${e}`),navigator.share({title:document.title,text:"DISCOVER THE CR\xc9DIT AGRICOLE GROUP",url:e}).then(()=>console.log("Successful share")).catch(t=>console.log("Error sharing:",t))):console.log("sharing not allowed")}function initImgModal(){initLocationImg(),initBoothImg()}function initLocationImg(){var e=document.getElementById("myModal"),t=document.getElementById("locationImg"),n=document.getElementById("img01"),i=document.getElementById("caption");t&&(t.onclick=function(){console.log(t),e.style.display="block",n.src=this.src,i.innerHTML=this.alt});var o=document.getElementsByClassName("close")[0];o&&(o.onclick=function(){e.style.display="none"})}function initBoothImg(){var e=document.getElementById("myModal"),t=document.getElementById("boothImg"),n=document.getElementById("img01"),i=document.getElementById("caption");t&&(t.onclick=function(){console.log(t),e.style.display="block",n.src=this.src,i.innerHTML=this.alt});var o=document.getElementsByClassName("close")[0];o&&(o.onclick=function(){e.style.display="none"})}function initCalBtn(e,t,n,i,o,a){const c={name:e,description:t,startDate:n,startTime:i,endDate:o,endTime:a,timeZone:"Asia/Singapore",location:"Credit Agricole Booth @ SFF Expo Hall 2",availability:"busy",options:["Apple","Google","iCal","Outlook.com","Yahoo","Microsoft365"],pastDateHandling:"disable"},l=document.getElementById("cal-btn");l&&l.addEventListener("click",()=>atcb_action(c,l))}