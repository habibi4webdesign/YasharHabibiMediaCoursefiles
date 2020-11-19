// * سینتکس جاوااسکریپت
//  سینتکس یسری قوانینه، که یه زبان بر اساس اون ساخته شده
var x, y, z; // تعریف متغیر
x = 5;
y = 6; // نسبت دادن مقدار
z = x + y; // محاصبه مقادیر

// مقادیر جاوااسکریپت
// مقادیر ثابت
// مقادیر متغیر

//-----------------------------------------------------------

// * مقادیر ثابت
// ---------

//  اعداد
// با اعشار یا بدون اعشار
// 12.6;
// 2020;

// رشته ها
// رشته ها متونی هستن که با نقل قول تکی یا دوتایی نوشته میشن
// "Yashar Habibi"
// 'Yashar Habibi'

//-----------------------------------------------------------
// * مقادیر متغیر
// ---------
// تو زبانهای برنامه نویسی متغیر ها برای ذخیره داده ها استفاده میشن
// برای تعریف متغیر استفاده می کند var جاوااسکریپت از کلمه کلیدی
//از عملگر مساوی برای نسبت دادن قادیر استفاده می کند
//به عنوان متغیر تعریف شده x تو مثال زیر
//و سپس با علامت مساوی مقدار شش بهش نسبت داده شده
var x;
x = 6;
//-----------------------------------------------------------
// ( + - * /) جاوااسکریپت از عملگرهای ریاضی
// برای محاصبه مقادیر استفاده میکنه
(10 + 15) * 10;

//-----------------------------------------------------------
//  جاوااسکریپت از عملگر مساوی
// برای نسبت دادن مقادیر استفاده میکنه
var x, y;
x = 3;
y = 5;
//-----------------------------------------------------------
// عبارتهای جاوااسکریپت
// عبارتهای جاوااسکریپت از ترکیبی از مقادیر، متغیرها و
//  عملگرها تشکیل شدن که مقداری رو محاصبه می کنن
//  به عنوان مثال
6 * 10;
// یا
z * 10;
//-----------------------------------------------------------
//*  کامنت گذاری(توضیح) در جاوااسکریپت
// yashsarhabibimedia <---  slash کدهایی بعد از دوتا اسلش
/* yashsarhabibimedia */
// کامنتها در نظر گرفته نمیشن و در نتیجه اجرا نمی شدن
//-----------------------------------------------------------
//  متغیر ها نباید با عدد شروع بشن
// $ و حرف اول متغیر ها باید یا یه کاراکتر باشه  یا زیرخط(_) یا علامت
// var 3name ---> غلطه
// var _name یا var name یا var $name ----> درستن
//-----------------------------------------------------------
//  جاوااسکریپت به بزرگی و کوچیکی حروف حساسه
//  یعنی چی ؟ یعنی بین حروف بزرگ و کوچیک فرق میزاره
var lastname, lastName; // ----> اینا دوتا متغیر متفاوتن
lastName = 'Habibi';
lastname = 'Hamidi';
console.log(lastName); // ----> Habibi
console.log(lastname); // ----> Hamidi
//-----------------------------------------------------------
// روشهای معمول نامگذاری متغیر ها در جاوااسکریپت
//* Underscore
var last_name, first_name;

//*  Pascal Case
var FirstName, LastName;

//* Camel Case
var firstName, lastName;
