// عبارت ها در جاوااسکریپت

var x, y, z; // عبارت 1
x = 5; // عبارت 2
y = 6; // عبارت 3
z = x + y; // عبارت 4

//* یه برنامه کامپیوتری یه لیستی از دستورالعمل‌هاست که توسط کامپیوتر اجرا میشن
// (statement) تو یه زبان برنامه نویسی به این دستورالعمل‌ها میگن عبارت
// یه برنامه جاوااسکریپت یه لیستی از همین عبارت‌هاست
// تو اچ تی ام البرنامه های جاوااسکریپت بوسیله مرورگر اجرا میشن

//*:عبارت‌های جاوااسکریپت تشکیل شده از
// مقادیر ، عملگرها ، عبارات ، کلمات کلیدی و توضیحات
//:این عبارت به مرورگر میگه که
// yaharhabibimedia بنویس (myId) تو یه المان اچ تی ام ال با آی دی

document.getElementById('myId').innerHTML =
  'yasharhabibimedia';

// اکثر برنامه های جاواساکریپت از کلی عبارت جاوااسکریپتی تشکیل شدن
// عبارت‌ها یک به یک به ترتیب از بالا به پایین اجرا میشن
//  معمولا به این عبارتها میگیم کد جاواساکریپت

//* سمی کالن ---> ;
// سمی‌کالن ها عبارتهای جاواساکریپت رو از هم جدا میکنن
// آخر هر عبارتی یه سمی‌کالن بزارید
var a, b, c;
a = 5;
b = 6;
c = a + b;

//* فواصل در جاوااسکریپت
// جاوااسکریپت از فواصل پشت سر میگذره و در نظر نمی گیردشون
// شما می تونید برای افزایش خوانایی کدتون بهش فاصله اضافه کنید
// این دوتا خط با هم یکی هستن فقط بالایی رو راحت تر میتونیم بخونیم

// var page = "yasharhabibimedia";
// var page="yasharhabibimedia";

//* یه چیزی که توصیه میشه اینه که دور عملگرها فاصله بزارید
var value = y + z;

//* برای خوانایی بهتر اغلب سعی میشه که طول خطوط برناممون از 80 کاراکتر بیشتر نشه
// اگر یه دستور جاوااسکریپت تو یه خط جا نشه بهترین جاواسه اینکه بریم خط بعد، بعد از یه عملگره
document.getElementById('myId').innerHTML =
  'yasharhabibimedia';

//* بلاک ها کد در جاوااسکریپت
// عبارتهای جاوااسکریپت میتونن باهم گروهی تو یه بلاک کد قرار بگیرن
// این بلاک با آکولاد باز و بسته شروع و بسته میشه
//  هدف اینه که این گروه از عبارتها با هم دیگه اجرا بشن
//  مثلا یکی از جاهایی که بلاک استفاده میشه تو فانکشن جاوااسکریپته

function myFunction() {
  document.getElementById('salam').innerHTML =
    'Salam';
  document.getElementById('halOAhval').innerHTML =
    'haletoon chetore?';
}


// عبارت‌ها معمولا با یه کلمه کلیدی شروع میشن که مشخص کنن جاوااسکریپت قراره چی کار کنه
// این یسری از کلمات کلیدی به عنوان نمونه:
// break	
// continue	
// debugger	
// do ... while	
// for	
// function
// if ...
// return	
// switch
// try ... 
// var