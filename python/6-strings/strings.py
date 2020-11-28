# # # رشته ها در پایتون بین علامت نقل قول دوتایی یا نقل قول تکی قرار می گیرند
# # # (دابل کوتیشن)تقل قول دوتایی ---> ""
# # # (سینگل کوتیشن)نقل قول تکی ---> ''
# # print("------------------ bakhshe aval ----------------------")
# # # استفاده کنید print برای نمایش رشته ها می تونید از
# # print("yasharhabibimedia")

# # # ----------------------------------------------------------

# # # میتونید یه رشته رو به یه متغیر نسبت بدید
# # a = "python"
# # print(a)

# # # -----------------------------------------------------------

# # # یه رشته تو پایتون مثل خیلی زبان های برنامه نویسی دیگه
# # # در اصل آرایه ای از کاراکترهاست

# # # آرایه ----> "salam" ---> s a l a m

# # # در نتیجه برای بدست آوردن یه کاراکتر خاص تو یه رشته می تونید
# # # با علامت براکت اینکار و انجام بدید

# # a = "yademoon bashe harchizi avalesh be nazar sakht miyad"
# # print(a[4])  # ---> m

# # # -----------------------------------------------------------

# # # استفاده می کنیم len برای بدست آوردن طول رشته ها از

# # a = "python"
# # print(len(a))  # ---> 6

# # # -----------------------------------------------------------
# # print("------------------ bakhshe dovom ---------------------")

# # برای اینکه یه بخشی از یه رشته رو برگردونیم
# # یا به عبارتی یه قسمت از رشتمون رو ببریم
# # از سینتکس اسلایس استفاده می کنیم


# b = "Hello, World!"

# # | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
# # | H | e | l | l | o | , |   | W | o | r |  l |  d |  ! |

# print(b[2:5])  # ---> llo

# # -----------------------------------------------------------

# # پاک کردن فاصله ها از ابتدا و انتهای رشته

# x = " yasharhabibimedia "
# print(x.strip())  # ---> "yasharhabibimedia"

# # -----------------------------------------------------------

# z = "YasharHabibiMedia"
# print(z.lower())  # ---> "yasharhabibimedia"

# # -----------------------------------------------------------

# c = "yasharhabibimedia"
# print(c.upper())  # ---> "YASHARHABIBIMEDIA"

# # -----------------------------------------------------------
# print("------------------ bakhshe sevvom ------------------")

# جایگزین کردن یه رشته با یه رشته دیگه
a = "yasharhabibimedia"
print(a.replace("y", "Y"))  # ---> Yasharhabibimedia

# -----------------------------------------------------------

# یه جداکننده بهش میدیم تو این مثال ویرگول "," و اگر این جدا کننده رو پیدا کنه
# رشته رو تقسیم میکنه. به ازای هر جدا کننده رشته تقسیم میشه یعنی اگر دو تا
# جدا کننده داشته باشیم رشته سه قسمت میشه و الی آخر
a = "doreye,amoozesh,python"
print(a.split(","))  # ---> ['doreye', 'amoozesh', 'python']

# -----------------------------------------------------------
# برای بررسی وجود یک عبارت یا کاراکتر خاص در یک رشته
# استفاده کنیم not in و in می توانیم از کلمات کلیدی
txt = "agar mikhay kodnevisi ro yad begiri bayad tamrin koni"
x = "yad" in txt
print(x)  # ---> true

x = "code" not in txt
print(x)  # ---> true

# -----------------------------------------------------------
# واسه ترکیب کردن چنتا تا رشته از عملگر + استفاده می کنیم
a = "yashar"
b = "habibi"
c = "media"
d = a + b + c
print(d)  # ---> yasharhabibimedia

# -----------------------------------------------------------
# واسه ترکیب یه عدد با یه رشته نمی تونیم اونا رو با + با هم ترکیب کنیم یعنی کد زیر اشتباست
# age = 38
# txt = "My name is Yashar, I am " + age  # خطا میده
# print(txt)

# درستش این طوریه
# استفاده می کنیم format برای ترکیب عدد با رشته از
# {} عددی رو که به فرمت می فرستیم به جای
# گذاشته میشه
age = 38
txt = "My name is Yashar, and I am {}"
print(txt.format(age))  # ---> My name is Yashar, and I am 38

one = 1
two = 2
txt = "number {} and number {}"
print(txt.format(one, two))  # ---> number 1 and number 2

# -----------------------------------------------------------
# برای استفاده از کارکترهایی که استفادشون توی رشته مجاز نیست
# استفاده میکنیم (scape) از کاراکتر فرار
# کاراکتر فرار ---> \
#  "" به عنوان مثال کاراکتر
# کاراکتر غیر مجازه چون ازش به عنوان عملگر رشته استفاده میشه


# txt = "this is "yasharhabibimedia" page." --> خطا میده
# درستش این جوریه
txt ="this is \"yasharhabibimedia\" page." 
# ----> this is "yasharhabibimedia" page.