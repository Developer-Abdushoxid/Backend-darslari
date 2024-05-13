/*
OOP - Object Oriented Programming ya'ni Obyektga yo'naltirilgan dasturlash

 Obyektga yo'naltirilgan dasturlash bu sinflar va obyektlarga asoslangan dasturlash
 uslubi. Ushbu guruh ma'lumotlar(xususiyatlar) va usullar(harakatlar)
 ni o'z ichiga oladi OOP kodni yanada moslashuvchan va saqlashni osonlashtirish uchun
 ishlab chiqilgan

    Sinflar nima ?
Siz sinfni uyning rejasi kabi tasavvur qilishingiz mumkin ya'ni sinf haqiqiy obyekt emas
lekin biz sinfdan foydalanib obyekt yaratishimiz mumkin Bu obyekt uchun shablonga o'xshaydi
Biz Javascriptda sinflarni "class" yardamida yaratishimiz mumkin Sinflar o'z xususiyatlari va usullariga ega


   Obyekt nima ?

Obyekt sinfning namunasidir Endi sinf yordamida biz uy qurushimiz mumkin Biz bir xil
uy sinfi yordamida bir nechta uy qurishimiz mumkin

OOP ning 4 ta asosiy tamoyillari mavjud:
  
 1. Abstraksiya
 2. Inkapsulyatsiya
 3. Meros olish
 4. Polimorfizm

    Abstraksiya nima ? 

Abstaksiya foydalanuvchi uchun ahamiyatsiz bo'lgan ma'lum tavsilotlarni yashirishni va faqat muhim bo'lgan 
 xususiyatlar va funksiyalarni ko'rsatishni anglatadi Bunga uyali telfonni misol qilaylik yani biz foydalanuvchiga 
 verifyTemperature(), verifyVolt(), frontCamOn(), frontCamOff() va hokazolarni emas balki muhim bo'lgan kamera va volume larni 
 ko'rsatamiz

   Inkapsulyatsiya nima ?

   Inkapsulyatsiya obyektning ma'lumotlarini (data) va funktsiyalarini (methodlar) bir qatorda birlashtirishni ifodalaydi. 
   Bu, obyektning ichidagi ma'lumotlarga faqatgina obyektning
    o'zining metodlari orqali murojat qilinishi kerak. 
   Bunda, obyektlarning ichidagi ma'lumotlar "private" (maxfiy) bo'lishi mumkin

Inkapsulyatsiya sinf ichidagi xususiyatlar va usullarni maxfiy saqlashni anglatadi
Inkapsulyatsiyani "ma'lumotlar va funksiyalrni bitta komponentga to'plash" deb ta'riflasak ham bo'ladi

   OOP da meros nima ? 

Meros barcha xususiyatlar va usullarni bolalar sinfi uchun mavjud qiladi. Bu bizga umumiy 
 mantiqni qayta ishlatish va real munosabatlarni modellashtirish imkonini beradi.

   OOPda polimorfizm nima ?
  
Polimorfizm turli va ko'p shakllarga ega bo'lishni anglatadi. Biz ota-klassdan meros bo'lib qolgan
 usulni qayta yozishimiz mumkin.

 Javascrtda prototip merosini 3 xil yo'l bilan amalga oshiramiz 

  1. Konstruktor funksiyadan foydalanib
  2. ES6 sinflaridan foydalanib
  3. Object.create()dan foydalanib

  Setter va Getter nima ?

Bu qiymatni oladigan va o'rnatadigan sinflarning oddiy usulidir

 Getter - qiymatlarni olish uchun ya'ni o'qish uchun foydaniladi
  
 Setter - qiymatlarni o'zgartirish uchun foydaniladi

ximoyalangan xususiyatlar
 Agar biz (_) bundan foydalansak bu ximoyalangan xususiyatdir biz bu xususiyatga tashqaridan ham 
 kira olamiz

Xususiy mulklar
 Agar biz (#) bundan foydalansak bu xususiyatlar va usullarga tashqaridan kirish imkoniyati bo'lmaydi

 Xususiyatlar obyektlarning ma'lumotlarini ifodalaydi, usullar esa obyektlarning harakatlarini ifodalaydi.

Xususiyatlar obyektning holatini saqlash uchun, o'zgaruvchilarni (variables) ifodalaydi,

Usullar esa obyektning amallarini bajarish uchun xizmat qiladi.
 */