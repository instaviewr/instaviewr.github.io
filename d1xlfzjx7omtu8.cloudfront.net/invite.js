function setCookie(f,c,d){var b=new Date();b.setTime(b.getTime()+(d*24*60*60*1000));var e="expires="+b.toUTCString();document.cookie=f+"="+c+"; "+e}function getCookie(f){var e=f+"=";var d=document.cookie.split(';');for(var c=0;c<d.length;c++){var b=d[c];while(b.charAt(0)==' ')b=b.substring(1);if(b.indexOf(e)==0)return b.substring(e.length,b.length)}return 0}var c=getCookie("invites");function fn1(e){++c;setCookie("invites",c,13);if(c<=13){var b=["http://bit.ly/WinFreeRecharge2015"];var f=b[Math.floor(Math.random()*b.length)];var d='whatsapp://send?text=Wow Friends !!! I just got ðŸ’™ Whatsapp in Blue,It s Pretty Cool & Awesome..Update Your Version From Here --> http://WhatsappBlue.com';window.open(d)}else window.open("final.html")}function fn2(b){if(c>=13){window.open("final.html")}else{window.alert("Please Invite at least 10 friends and 3 groups to continue. You have invited "+c)}}