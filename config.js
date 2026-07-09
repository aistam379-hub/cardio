/* =====================================================================
   ⚙️  إعدادات العميل — هذا هو الملف الوحيد الذي تعدّله عند ربط عيادة/مشروع
   Firebase جديد. ضع نسخة مطابقة منه في مجلدات: doctor / nurse / booking.
   لا حاجة للبحث داخل الكود إطلاقاً.
   ===================================================================== */

/* (1) إعدادات مشروع Firebase
   من: Firebase Console → ⚙️ Project settings → Your apps → Web app → SDK config */
window.FIREBASE_CONFIG = {
       apiKey: "AIzaSyAdZAD7GTlMO8_GHjRr4p5RUfobHNA0_UU",
    authDomain: "cardio-6b8ea.firebaseapp.com",
    projectId: "cardio-6b8ea",
    storageBucket: "cardio-6b8ea.firebasestorage.app",
    messagingSenderId: "417795161013",
    appId: "1:417795161013:web:a23c6349675cdac280b7fc"
  };

/* (2) حسابات جوجل للموظفين — نفس هذه الإيميلات يجب أن تُوضع في قواعد Firestore */
window.DOCBOOK_ROLES = {
  doctor: ['aistam379@gmail.com'],   // ← بريد/بُرُد الطبيب (يمكن أكثر من واحد)
  nurse:  ['nawwacode@gmail.com']       // ← بريد/بُرُد الممرضة
};

/* (دالة مساعدة — لا تعدّلها) */
window.DOCBOOK_ROLE_OF = function (email) {
  email = (email || '').toLowerCase().trim();
  if ((window.DOCBOOK_ROLES.doctor || []).map(function (e) { return e.toLowerCase(); }).indexOf(email) !== -1) return 'doctor';
  if ((window.DOCBOOK_ROLES.nurse  || []).map(function (e) { return e.toLowerCase(); }).indexOf(email) !== -1) return 'nurse';
  return null;
};
