// البيانات الوهمية للكورسات
const mockCourses = [
  {
    id: 1,
    title: "تطوير تطبيقات الويب باستخدام React.js",
    description: "تعلم تطوير تطبيقات ويب احترافية باستخدام React.js، من الأساسيات وحتى المستويات المتقدمة.",
    instructor: "أحمد محمد",
    category: "web",
    level: "intermediate",
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.8,
    ratingCount: 1240,
    students: 2450,
    duration: "25 ساعة",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    badge: "الأكثر مبيعًا",
    featured: true
  },
  {
    id: 2,
    title: "JavaScript المتقدم - ES6 وما بعدها",
    description: "أتقن JavaScript الحديث مع ES6+ وتعلم المفاهيم المتقدمة مثل الـ Promises والـ Async/Await.",
    instructor: "سارة خالد",
    category: "web",
    level: "intermediate",
    price: 24.99,
    originalPrice: 39.99,
    rating: 4.7,
    ratingCount: 980,
    students: 1800,
    duration: "20 ساعة",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    badge: "الأكثر شعبية",
    featured: true
  },
  {
    id: 3,
    title: "تطوير Backend باستخدام Node.js و Express",
    description: "أنشئ تطبيقات خلفية قوية باستخدام Node.js وإطار Express، مع قواعد البيانات والمصادقة.",
    instructor: "محمد علي",
    category: "web",
    level: "intermediate",
    price: 34.99,
    originalPrice: 59.99,
    rating: 4.9,
    ratingCount: 850,
    students: 1500,
    duration: "30 ساعة",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    badge: "جديد",
    featured: true
  },
  {
    id: 4,
    title: "علم البيانات باستخدام Python",
    description: "احترف تحليل البيانات والتعلم الآلي باستخدام Python مع المكتبات مثل Pandas و NumPy و Scikit-learn.",
    instructor: "نورا أحمد",
    category: "data",
    level: "beginner",
    price: 39.99,
    originalPrice: 69.99,
    rating: 4.6,
    ratingCount: 720,
    students: 1200,
    duration: "35 ساعة",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    badge: "",
    featured: true
  },
  {
    id: 5,
    title: "تصميم واجهات المستخدم UX/UI",
    description: "تعلم مبادئ تصميم تجربة المستخدم وواجهات المستخدم الحديثة باستخدام Figma و Adobe XD.",
    instructor: "ليلى مصطفى",
    category: "design",
    level: "beginner",
    price: 27.99,
    originalPrice: 49.99,
    rating: 4.8,
    ratingCount: 650,
    students: 1100,
    duration: "22 ساعة",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    badge: "الأكثر طلبًا",
    featured: false
  },
  {
    id: 6,
    title: "تطوير تطبيقات iOS باستخدام Swift",
    description: "ابدأ في بناء تطبيقات iOS احترافية باستخدام لغة Swift وإطار العمل UIKit و SwiftUI.",
    instructor: "خالد سعيد",
    category: "mobile",
    level: "beginner",
    price: 32.99,
    originalPrice: 54.99,
    rating: 4.7,
    ratingCount: 580,
    students: 950,
    duration: "28 ساعة",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80",
    badge: "",
    featured: false
  },
  {
    id: 7,
    title: "التسويق الرقمي المتقدم",
    description: "إتقان استراتيجيات التسويق الرقمي الحديثة بما في ذلك SEO، وسائل التواصل الاجتماعي، وتحليل البيانات.",
    instructor: "عمر حسن",
    category: "marketing",
    level: "beginner",
    price: 22.99,
    originalPrice: 39.99,
    rating: 4.5,
    ratingCount: 490,
    students: 850,
    duration: "18 ساعة",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
    badge: "",
    featured: false
  },
  {
    id: 8,
    title: "إدارة المشاريع باستخدام Agile و Scrum",
    description: "تعلم منهجيات إدارة المشاريع الرشيقة وكيفية تطبيقها في فرق التطوير الحديثة.",
    instructor: "منى عبدالله",
    category: "business",
    level: "intermediate",
    price: 19.99,
    originalPrice: 34.99,
    rating: 4.6,
    ratingCount: 420,
    students: 780,
    duration: "15 ساعة",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    badge: "",
    featured: false
  },
  {
    id: 9,
    title: "Next.js - الإطار المتقدم لـ React",
    description: "تطوير تطبيقات ويب عالية الأداء باستخدام Next.js مع الخوادم الجانبية والتوليد الثابت.",
    instructor: "علي حسن",
    category: "web",
    level: "advanced",
    price: 34.99,
    originalPrice: null,
    rating: 4.9,
    ratingCount: 320,
    students: 600,
    duration: "26 ساعة",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    badge: "جديد",
    featured: false
  },
  {
    id: 10,
    title: "TypeScript للمطورين المتقدمين",
    description: "إتقان TypeScript لبناء تطبيقات أكثر موثوقية وقابلية للصيانة مع اكتشاف الأخطاء في وقت الترجمة.",
    instructor: "محمد خالد",
    category: "web",
    level: "advanced",
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.8,
    ratingCount: 450,
    students: 800,
    duration: "24 ساعة",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    badge: "الأكثر شعبية",
    featured: false
  },
  {
    id: 11,
    title: "تطوير تطبيقات Android باستخدام Kotlin",
    description: "بناء تطبيقات Android احترافية باستخدام Kotlin و Android Studio مع أفضل الممارسات.",
    instructor: "سامي رجب",
    category: "mobile",
    level: "intermediate",
    price: 31.99,
    originalPrice: 52.99,
    rating: 4.7,
    ratingCount: 380,
    students: 700,
    duration: "30 ساعة",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    badge: "",
    featured: false
  },
  {
    id: 12,
    title: "تحليل البيانات باستخدام SQL",
    description: "احترف كتابة استعلامات SQL المعقدة لتحليل البيانات واستخراج الرؤى من قواعد البيانات.",
    instructor: "ريم أحمد",
    category: "data",
    level: "beginner",
    price: 18.99,
    originalPrice: 34.99,
    rating: 4.6,
    ratingCount: 520,
    students: 900,
    duration: "16 ساعة",
    image: "https://images.unsplash.com/photo-1549074862-6173e20d02a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    badge: "",
    featured: false
  }
];

// البيانات الوهمية للمستخدمين
const mockUsers = [
  {
    id: 1,
    firstName: "أحمد",
    lastName: "محمد",
    email: "ahmed@example.com",
    password: "password123",
    phone: "0512345678",
    registeredCourses: [1, 2, 3],
    completedCourses: [1, 2],
    favorites: [4, 5]
  },
  {
    id: 2,
    firstName: "سارة",
    lastName: "خالد",
    email: "sara@example.com",
    password: "password123",
    phone: "0567890123",
    registeredCourses: [4, 5, 6],
    completedCourses: [4],
    favorites: [1, 3]
  }
];

// بيانات الكورسات المسجلة للمستخدم الحالي
const currentUser = mockUsers[0];

// بيانات الكورسات المفضلة للمستخدم الحالي
const userFavorites = mockCourses.filter(course => currentUser.favorites.includes(course.id));

// تهيئة الموقع
document.addEventListener('DOMContentLoaded', function() {
  // تعيين وضع العرض بناءً على التفضيلات المحفوظة
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  // تحديث أيقونة وضع العرض
  updateThemeIcon(savedTheme);
  
  // تهيئة التنقل الجوال
  initMobileNav();
  
  // تهيئة تبديل وضع العرض
  initThemeToggle();
  
  // تهيئة الأسئلة الشائعة
  initFAQs();
  
  // تهيئة الأكورديون
  initAccordion();
  
  // تهيئة علامات التبويب
  initTabs();
  
  // تهيئة نموذج تسجيل الدخول
  initLoginForm();
  
  // تهيئة نموذج التسجيل
  initRegisterForm();
  
  // تهيئة القائمة المنسدلة للمستخدم
  initUserDropdown();
  
  // تهيئة تسجيل الخروج
  initLogout();
  
  // تهيئة البحث المباشر (صفحة الكورسات)
  initLiveSearch();
  
  // تهيئة الفلاتر (صفحة الكورسات)
  initFilters();
  
  // عرض الكورسات المميزة (الصفحة الرئيسية)
  displayFeaturedCourses();
  
  // عرض جميع الكورسات (صفحة الكورسات)
  if (document.getElementById('coursesGrid')) {
    displayAllCourses();
  }
  
  // عرض تفاصيل الكورس (صفحة تفاصيل الكورس)
  if (document.getElementById('courseContent')) {
    displayCourseDetails();
  }
  
  // تهيئة إشعارات التحميل
  simulateLoading();
});

// تهيئة التنقل الجوال
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const closeNav = document.getElementById('closeNav');
  const mobileNav = document.getElementById('mobileNav');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      mobileNav.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }
  
  if (closeNav) {
    closeNav.addEventListener('click', function() {
      mobileNav.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }
  
  // إغلاق القائمة الجانبية عند النقر على رابط
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileNav.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });
}

// تهيئة تبديل وضع العرض
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      updateThemeIcon(newTheme);
      
      showToast(`تم التبديل إلى الوضع ${newTheme === 'light' ? 'الفاتح' : 'الداكن'}`, 'success');
    });
  }
}

// تحديث أيقونة وضع العرض
function updateThemeIcon(theme) {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'light') {
      icon.className = 'fas fa-moon';
    } else {
      icon.className = 'fas fa-sun';
    }
  }
}

// تهيئة الأسئلة الشائعة
function initFAQs() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const isActive = this.classList.contains('active');
      
      // إغلاق جميع الأسئلة الأخرى
      faqQuestions.forEach(q => {
        q.classList.remove('active');
        q.nextElementSibling.classList.remove('active');
      });
      
      // فتح/إغلاق السؤال الحالي
      if (!isActive) {
        this.classList.add('active');
        answer.classList.add('active');
      }
    });
  });
}

// تهيئة الأكورديون
function initAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const isActive = this.classList.contains('active');
      
      // إغلاق جميع الأقسام الأخرى
      accordionHeaders.forEach(h => {
        h.classList.remove('active');
        h.nextElementSibling.classList.remove('active');
      });
      
      // فتح/إغلاق القسم الحالي
      if (!isActive) {
        this.classList.add('active');
        content.classList.add('active');
      }
    });
  });
}

// تهيئة علامات التبويب
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // تحديث الأزرار النشطة
      tabBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // تحديث المحتوى النشط
      const tabPanes = document.querySelectorAll('.tab-pane');
      tabPanes.forEach(pane => pane.classList.remove('active'));
      document.getElementById(tabId).classList.add('active');
    });
  });
}

// تهيئة نموذج تسجيل الدخول
function initLoginForm() {
  const loginForm = document.getElementById('loginForm');
  const togglePassword = document.getElementById('togglePassword');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      const rememberMe = document.getElementById('rememberMe').checked;
      
      // التحقق من صحة البيانات
      let isValid = true;
      
      // التحقق من البريد الإلكتروني
      const emailError = document.getElementById('emailError');
      if (!validateEmail(email)) {
        emailError.textContent = 'الرجاء إدخال بريد إلكتروني صحيح';
        emailError.style.display = 'block';
        isValid = false;
      } else {
        emailError.style.display = 'none';
      }
      
      // التحقق من كلمة المرور
      const passwordError = document.getElementById('passwordError');
      if (password.length < 6) {
        passwordError.textContent = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
        passwordError.style.display = 'block';
        isValid = false;
      } else {
        passwordError.style.display = 'none';
      }
      
      if (isValid) {
        // محاكاة تسجيل الدخول
        const loginButton = document.getElementById('loginButton');
        const originalText = loginButton.textContent;
        
        loginButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري تسجيل الدخول...';
        loginButton.disabled = true;
        
        setTimeout(() => {
          // التحقق من بيانات المستخدم
          const user = mockUsers.find(u => u.email === email && u.password === password);
          
          if (user) {
            showToast('تم تسجيل الدخول بنجاح!', 'success');
            
            // حفظ حالة تسجيل الدخول
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUserId', user.id);
            
            // إعادة التوجيه إلى لوحة التحكم بعد تأخير بسيط
            setTimeout(() => {
              window.location.href = 'dashboard.html';
            }, 1500);
          } else {
            showToast('البريد الإلكتروني أو كلمة المرور غير صحيحة', 'error');
            loginButton.textContent = originalText;
            loginButton.disabled = false;
          }
        }, 1500);
      }
    });
  }
  
  if (togglePassword) {
    togglePassword.addEventListener('click', function() {
      const passwordInput = document.getElementById('loginPassword');
      const icon = this.querySelector('i');
      
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.className = 'far fa-eye-slash';
      } else {
        passwordInput.type = 'password';
        icon.className = 'far fa-eye';
      }
    });
  }
}

// تهيئة نموذج التسجيل
function initRegisterForm() {
  const registerForm = document.getElementById('registerForm');
  const toggleRegisterPassword = document.getElementById('toggleRegisterPassword');
  const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
  const registerPassword = document.getElementById('registerPassword');
  const passwordStrength = document.getElementById('passwordStrength');
  const strengthBar = passwordStrength ? passwordStrength.querySelector('.strength-bar') : null;
  const strengthText = document.getElementById('strengthText');
  
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('registerEmail').value;
      const password = document.getElementById('registerPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const phone = document.getElementById('phone').value;
      const termsAgreement = document.getElementById('termsAgreement').checked;
      
      // التحقق من صحة البيانات
      let isValid = true;
      
      // التحقق من الاسم الأول
      const firstNameError = document.getElementById('firstNameError');
      if (firstName.trim() === '') {
        firstNameError.textContent = 'الرجاء إدخال الاسم الأول';
        firstNameError.style.display = 'block';
        isValid = false;
      } else {
        firstNameError.style.display = 'none';
      }
      
      // التحقق من الاسم الأخير
      const lastNameError = document.getElementById('lastNameError');
      if (lastName.trim() === '') {
        lastNameError.textContent = 'الرجاء إدخال الاسم الأخير';
        lastNameError.style.display = 'block';
        isValid = false;
      } else {
        lastNameError.style.display = 'none';
      }
      
      // التحقق من البريد الإلكتروني
      const emailError = document.getElementById('registerEmailError');
      if (!validateEmail(email)) {
        emailError.textContent = 'الرجاء إدخال بريد إلكتروني صحيح';
        emailError.style.display = 'block';
        isValid = false;
      } else {
        emailError.style.display = 'none';
      }
      
      // التحقق من كلمة المرور
      const passwordError = document.getElementById('registerPasswordError');
      const passwordStrengthValue = checkPasswordStrength(password);
      
      if (passwordStrengthValue < 2) {
        passwordError.textContent = 'كلمة المرور ضعيفة جدًا. الرجاء استخدام مزيج من الأحرف والأرقام والرموز';
        passwordError.style.display = 'block';
        isValid = false;
      } else {
        passwordError.style.display = 'none';
      }
      
      // التحقق من تأكيد كلمة المرور
      const confirmPasswordError = document.getElementById('confirmPasswordError');
      if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'كلمة المرور غير متطابقة';
        confirmPasswordError.style.display = 'block';
        isValid = false;
      } else {
        confirmPasswordError.style.display = 'none';
      }
      
      // التحقق من الموافقة على الشروط
      if (!termsAgreement) {
        showToast('يجب الموافقة على شروط الاستخدام وسياسة الخصوصية', 'warning');
        isValid = false;
      }
      
      if (isValid) {
        // محاكاة إنشاء حساب
        const registerButton = document.getElementById('registerButton');
        const originalText = registerButton.textContent;
        
        registerButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري إنشاء الحساب...';
        registerButton.disabled = true;
        
        setTimeout(() => {
          // التحقق من عدم وجود مستخدم بنفس البريد الإلكتروني
          const existingUser = mockUsers.find(u => u.email === email);
          
          if (existingUser) {
            showToast('هذا البريد الإلكتروني مستخدم بالفعل', 'error');
            registerButton.textContent = originalText;
            registerButton.disabled = false;
          } else {
            showToast('تم إنشاء الحساب بنجاح!', 'success');
            
            // حفظ حالة تسجيل الدخول
            localStorage.setItem('isLoggedIn', 'true');
            
            // إنشاء مستخدم جديد
            const newUser = {
              id: mockUsers.length + 1,
              firstName,
              lastName,
              email,
              password,
              phone,
              registeredCourses: [],
              completedCourses: [],
              favorites: []
            };
            
            // إعادة التوجيه إلى لوحة التحكم بعد تأخير بسيط
            setTimeout(() => {
              window.location.href = 'dashboard.html';
            }, 1500);
          }
        }, 1500);
      }
    });
  }
  
  // التحقق من قوة كلمة المرور أثناء الكتابة
  if (registerPassword) {
    registerPassword.addEventListener('input', function() {
      const strength = checkPasswordStrength(this.value);
      updatePasswordStrength(strength);
    });
  }
  
  if (toggleRegisterPassword) {
    toggleRegisterPassword.addEventListener('click', function() {
      const passwordInput = document.getElementById('registerPassword');
      const icon = this.querySelector('i');
      
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.className = 'far fa-eye-slash';
      } else {
        passwordInput.type = 'password';
        icon.className = 'far fa-eye';
      }
    });
  }
  
  if (toggleConfirmPassword) {
    toggleConfirmPassword.addEventListener('click', function() {
      const passwordInput = document.getElementById('confirmPassword');
      const icon = this.querySelector('i');
      
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.className = 'far fa-eye-slash';
      } else {
        passwordInput.type = 'password';
        icon.className = 'far fa-eye';
      }
    });
  }
  
  // تحديث عرض قوة كلمة المرور
  function updatePasswordStrength(strength) {
    if (!strengthBar || !strengthText) return;
    
    let width = 0;
    let text = '';
    let color = '';
    
    switch (strength) {
      case 0:
        width = 20;
        text = 'ضعيفة جدًا';
        color = '#f94144';
        break;
      case 1:
        width = 40;
        text = 'ضعيفة';
        color = '#f8961e';
        break;
      case 2:
        width = 60;
        text = 'متوسطة';
        color = '#f9c74f';
        break;
      case 3:
        width = 80;
        text = 'قوية';
        color = '#90be6d';
        break;
      case 4:
        width = 100;
        text = 'قوية جدًا';
        color = '#43aa8b';
        break;
    }
    
    strengthBar.style.width = `${width}%`;
    strengthBar.style.backgroundColor = color;
    strengthText.textContent = text;
  }
}

// التحقق من قوة كلمة المرور
function checkPasswordStrength(password) {
  let strength = 0;
  
  // طول كلمة المرور
  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;
  
  // وجود أحرف كبيرة وصغيرة
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
  
  // وجود أرقام
  if (/\d/.test(password)) strength++;
  
  // وجود رموز خاصة
  if (/[^a-zA-Z0-9]/.test(password)) strength++;
  
  // الحد الأقصى للقوة هو 4
  return Math.min(strength, 4);
}

// تهيئة القائمة المنسدلة للمستخدم
function initUserDropdown() {
  const userDropdown = document.getElementById('userDropdown');
  const userToggle = userDropdown ? userDropdown.querySelector('.user-toggle') : null;
  
  if (userToggle) {
    userToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      const dropdownMenu = userDropdown.querySelector('.dropdown-menu');
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
    
    // إغلاق القائمة المنسدلة عند النقر خارجها
    document.addEventListener('click', function() {
      const dropdownMenu = userDropdown.querySelector('.dropdown-menu');
      dropdownMenu.style.display = 'none';
    });
  }
}

// تهيئة تسجيل الخروج
function initLogout() {
  const logoutButtons = document.querySelectorAll('#logoutButton, #logoutButtonMobile');
  
  logoutButtons.forEach(button => {
    if (button) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // محاكاة تسجيل الخروج
        showToast('تم تسجيل الخروج بنجاح', 'success');
        
        // حذف حالة تسجيل الدخول
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUserId');
        
        // إعادة التوجيه إلى الصفحة الرئيسية بعد تأخير بسيط
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1500);
      });
    }
  });
}

// تهيئة البحث المباشر
function initLiveSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  
  if (searchInput && searchButton) {
    // البحث عند النقر على زر البحث
    searchButton.addEventListener('click', function() {
      performSearch(searchInput.value);
    });
    
    // البحث أثناء الكتابة (مع تأخير)
    let searchTimeout;
    searchInput.addEventListener('input', function() {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        performSearch(this.value);
      }, 500);
    });
  }
}

// تهيئة الفلاتر
function initFilters() {
  const categoryFilter = document.getElementById('categoryFilter');
  const levelFilter = document.getElementById('levelFilter');
  const priceFilter = document.getElementById('priceFilter');
  const sortFilter = document.getElementById('sortFilter');
  const clearFilters = document.getElementById('clearFilters');
  
  // تطبيق الفلاتر عند التغيير
  [categoryFilter, levelFilter, priceFilter, sortFilter].forEach(filter => {
    if (filter) {
      filter.addEventListener('change', applyFilters);
    }
  });
  
  // إعادة تعيين الفلاتر
  if (clearFilters) {
    clearFilters.addEventListener('click', function() {
      if (categoryFilter) categoryFilter.value = 'all';
      if (levelFilter) levelFilter.value = 'all';
      if (priceFilter) priceFilter.value = 'all';
      if (sortFilter) sortFilter.value = 'popular';
      
      applyFilters();
      showToast('تم إعادة تعيين الفلاتر', 'info');
    });
  }
}

// تطبيق الفلاتر والبحث
function applyFilters() {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
  const category = document.getElementById('categoryFilter') ? document.getElementById('categoryFilter').value : 'all';
  const level = document.getElementById('levelFilter') ? document.getElementById('levelFilter').value : 'all';
  const price = document.getElementById('priceFilter') ? document.getElementById('priceFilter').value : 'all';
  const sort = document.getElementById('sortFilter') ? document.getElementById('sortFilter').value : 'popular';
  
  // تصفية الكورسات
  let filteredCourses = mockCourses.filter(course => {
    // البحث
    const matchesSearch = searchTerm === '' || 
      course.title.toLowerCase().includes(searchTerm) ||
      course.description.toLowerCase().includes(searchTerm) ||
      course.instructor.toLowerCase().includes(searchTerm);
    
    // التصنيف
    const matchesCategory = category === 'all' || course.category === category;
    
    // المستوى
    const matchesLevel = level === 'all' || course.level === level;
    
    // السعر
    const matchesPrice = price === 'all' || 
      (price === 'free' && course.price === 0) ||
      (price === 'paid' && course.price > 0);
    
    return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
  });
  
  // ترتيب النتائج
  switch (sort) {
    case 'newest':
      filteredCourses.sort((a, b) => b.id - a.id);
      break;
    case 'rating':
      filteredCourses.sort((a, b) => b.rating - a.rating);
      break;
    case 'price-low':
      filteredCourses.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredCourses.sort((a, b) => b.price - a.price);
      break;
    case 'popular':
    default:
      filteredCourses.sort((a, b) => b.students - a.students);
      break;
  }
  
  // عرض النتائج
  displayFilteredCourses(filteredCourses);
}

// تنفيذ البحث
function performSearch(searchTerm) {
  applyFilters();
}

// عرض الكورسات المصفاة
function displayFilteredCourses(courses) {
  const coursesGrid = document.getElementById('coursesGrid');
  const noResults = document.getElementById('noResults');
  const coursesCount = document.getElementById('coursesCount');
  
  if (!coursesGrid) return;
  
  // إخفاء الهيكل العظمي للتحميل
  const skeletonLoading = document.getElementById('loadingSkeleton');
  if (skeletonLoading) {
    skeletonLoading.style.display = 'none';
  }
  
  // تحديث عدد الكورسات
  if (coursesCount) {
    coursesCount.textContent = `(${courses.length})`;
  }
  
  // مسح الشبكة الحالية
  coursesGrid.innerHTML = '';
  
  // عرض رسالة إذا لم توجد نتائج
  if (courses.length === 0) {
    if (noResults) {
      noResults.style.display = 'block';
    }
    return;
  } else {
    if (noResults) {
      noResults.style.display = 'none';
    }
  }
  
  // عرض الكورسات المصفاة
  courses.forEach(course => {
    const courseElement = createCourseElement(course);
    coursesGrid.appendChild(courseElement);
  });
  
  // تهيئة الترقيم
  initPagination(courses);
}

// إنشاء عنصر كورس
function createCourseElement(course) {
  const courseElement = document.createElement('div');
  courseElement.className = 'course-card';
  courseElement.setAttribute('data-id', course.id);
  
  // حساب الخصم إذا كان موجودًا
  const discount = course.originalPrice ? 
    Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100) : 0;
  
  courseElement.innerHTML = `
    <div class="course-image">
      <img src="${course.image}" alt="${course.title}">
      ${course.badge ? `<div class="course-badge">${course.badge}</div>` : ''}
    </div>
    <div class="course-content">
      <h3 class="course-title">${course.title}</h3>
      <p class="course-instructor">${course.instructor}</p>
      <div class="course-rating">
        <i class="fas fa-star"></i>
        <span>${course.rating}</span>
        <span>(${course.ratingCount} تقييم)</span>
      </div>
      <div class="course-price">
        <span class="current-price">$${course.price.toFixed(2)}</span>
        ${course.originalPrice ? `<span class="original-price">$${course.originalPrice.toFixed(2)}</span>` : ''}
        ${discount > 0 ? `<span class="discount">${discount}% خصم</span>` : ''}
      </div>
      <button class="btn btn-primary btn-block enroll-btn" data-id="${course.id}">سجل الآن</button>
    </div>
  `;
  
  // إضافة حدث النقر على زر التسجيل
  const enrollBtn = courseElement.querySelector('.enroll-btn');
  enrollBtn.addEventListener('click', function() {
    const courseId = parseInt(this.getAttribute('data-id'));
    enrollInCourse(courseId);
  });
  
  // إضافة حدث النقر على الكورس للذهاب إلى صفحة التفاصيل
  courseElement.addEventListener('click', function(e) {
    if (!e.target.closest('.enroll-btn')) {
      window.location.href = `course-details.html?id=${course.id}`;
    }
  });
  
  return courseElement;
}

// تهيئة الترقيم
function initPagination(courses) {
  const pagination = document.getElementById('pagination');
  if (!pagination) return;
  
  pagination.innerHTML = '';
  
  // حساب عدد الصفحات
  const itemsPerPage = 9;
  const pageCount = Math.ceil(courses.length / itemsPerPage);
  
  if (pageCount <= 1) return;
  
  // إنشاء أزرار الترقيم
  for (let i = 1; i <= pageCount; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', function() {
      // تحديث الكورسات المعروضة للصفحة المحددة
      const startIndex = (i - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const pageCourses = courses.slice(startIndex, endIndex);
      
      // تحديث عرض الكورسات
      const coursesGrid = document.getElementById('coursesGrid');
      coursesGrid.innerHTML = '';
      
      pageCourses.forEach(course => {
        const courseElement = createCourseElement(course);
        coursesGrid.appendChild(courseElement);
      });
      
      // تحديث الأزرار النشطة
      const paginationButtons = pagination.querySelectorAll('button');
      paginationButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
    
    if (i === 1) button.classList.add('active');
    pagination.appendChild(button);
  }
}

// عرض الكورسات المميزة
function displayFeaturedCourses() {
  const featuredCoursesGrid = document.getElementById('featuredCoursesGrid');
  if (!featuredCoursesGrid) return;
  
  // الحصول على الكورسات المميزة فقط
  const featuredCourses = mockCourses.filter(course => course.featured);
  
  // عرض الكورسات المميزة
  featuredCourses.forEach(course => {
    const courseElement = createCourseElement(course);
    featuredCoursesGrid.appendChild(courseElement);
  });
}

// عرض جميع الكورسات
function displayAllCourses() {
  // عرض جميع الكورسات مع الفلاتر الافتراضية
  applyFilters();
}

// عرض تفاصيل الكورس
function displayCourseDetails() {
  // الحصول على معرف الكورس من عنوان URL
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('id') || 1;
  
  // العثور على الكورس
  const course = mockCourses.find(c => c.id === parseInt(courseId)) || mockCourses[0];
  
  // تحديث البيانات في الصفحة
  document.getElementById('courseTitleText').textContent = course.title;
  document.getElementById('courseDescription').textContent = course.description;
  document.getElementById('courseInstructor').textContent = course.instructor;
  document.getElementById('courseDuration').textContent = course.duration;
  document.getElementById('courseLevel').textContent = course.level === 'beginner' ? 'مبتدئ' : 
                                                     course.level === 'intermediate' ? 'متوسط' : 'متقدم';
  document.getElementById('courseStudents').textContent = `${course.students.toLocaleString()} طالب`;
  document.getElementById('courseRating').textContent = `${course.rating} (${course.ratingCount.toLocaleString()} تقييم)`;
  document.getElementById('coursePrice').textContent = `$${course.price.toFixed(2)}`;
  
  // تحديث السعر الأصلي والخصم إذا كان موجودًا
  if (course.originalPrice) {
    const discount = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);
    document.getElementById('courseOriginalPrice').textContent = `$${course.originalPrice.toFixed(2)}`;
    document.getElementById('courseDiscount').textContent = `${discount}% خصم`;
  } else {
    document.getElementById('courseOriginalPrice').style.display = 'none';
    document.getElementById('courseDiscount').style.display = 'none';
  }
  
  // تحديث الصورة
  document.getElementById('courseImage').querySelector('img').src = course.image;
  document.getElementById('courseImage').querySelector('img').alt = course.title;
  
  // تحديث الشارة
  const badgeElement = document.getElementById('courseBadge');
  if (course.badge) {
    badgeElement.textContent = course.badge;
    badgeElement.style.display = 'block';
  } else {
    badgeElement.style.display = 'none';
  }
  
  // إخفاء حالة التحميل وإظهار المحتوى
  setTimeout(() => {
    document.getElementById('courseLoading').style.display = 'none';
    document.getElementById('courseContent').style.display = 'block';
  }, 1000);
  
  // إضافة أحداث للأزرار
  const enrollButton = document.getElementById('enrollButton');
  const addToCartButton = document.getElementById('addToCartButton');
  const wishlistButton = document.getElementById('wishlistButton');
  
  if (enrollButton) {
    enrollButton.addEventListener('click', function() {
      enrollInCourse(course.id);
    });
  }
  
  if (addToCartButton) {
    addToCartButton.addEventListener('click', function() {
      addToCart(course.id);
    });
  }
  
  if (wishlistButton) {
    wishlistButton.addEventListener('click', function() {
      toggleWishlist(course.id, wishlistButton);
    });
  }
  
  // تحديث الكورسات المقترحة
  displayRelatedCourses(course.id);
}

// عرض الكورسات المقترحة
function displayRelatedCourses(currentCourseId) {
  const relatedCoursesGrid = document.getElementById('relatedCoursesGrid');
  if (!relatedCoursesGrid) return;
  
  // الحصول على الكورسات المقترحة (نفس الفئة، باستثناء الكورس الحالي)
  const currentCourse = mockCourses.find(c => c.id === currentCourseId);
  const relatedCourses = mockCourses
    .filter(c => c.id !== currentCourseId && c.category === currentCourse.category)
    .slice(0, 3);
  
  // عرض الكورسات المقترحة
  relatedCoursesGrid.innerHTML = '';
  relatedCourses.forEach(course => {
    const courseElement = createCourseElement(course);
    relatedCoursesGrid.appendChild(courseElement);
  });
}

// التسجيل في كورس
function enrollInCourse(courseId) {
  // التحقق من تسجيل الدخول
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (!isLoggedIn) {
    showToast('يجب تسجيل الدخول أولاً', 'warning');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1500);
    return;
  }
  
  // محاكاة عملية التسجيل في الكورس
  showToast('جاري التسجيل في الكورس...', 'info');
  
  setTimeout(() => {
    // التحقق مما إذا كان المستخدم مسجلاً بالفعل في الكورس
    if (currentUser.registeredCourses.includes(courseId)) {
      showToast('أنت مسجل بالفعل في هذا الكورس', 'info');
    } else {
      // إضافة الكورس إلى قائمة الكورسات المسجلة
      currentUser.registeredCourses.push(courseId);
      showToast('تم التسجيل في الكورس بنجاح!', 'success');
    }
  }, 1000);
}

// إضافة إلى السلة
function addToCart(courseId) {
  // التحقق من تسجيل الدخول
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (!isLoggedIn) {
    showToast('يجب تسجيل الدخول أولاً', 'warning');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1500);
    return;
  }
  
  // محاكاة إضافة الكورس إلى السلة
  showToast('تم إضافة الكورس إلى سلة التسوق', 'success');
}

// تبديل المفضلة
function toggleWishlist(courseId, button) {
  // التحقق من تسجيل الدخول
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (!isLoggedIn) {
    showToast('يجب تسجيل الدخول أولاً', 'warning');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1500);
    return;
  }
  
  const icon = button.querySelector('i');
  
  // التحقق مما إذا كان الكورس في المفضلة
  const isInWishlist = currentUser.favorites.includes(courseId);
  
  if (isInWishlist) {
    // إزالة من المفضلة
    currentUser.favorites = currentUser.favorites.filter(id => id !== courseId);
    icon.className = 'far fa-heart';
    showToast('تمت إزالة الكورس من المفضلة', 'info');
  } else {
    // إضافة إلى المفضلة
    currentUser.favorites.push(courseId);
    icon.className = 'fas fa-heart';
    showToast('تم إضافة الكورس إلى المفضلة', 'success');
  }
}

// محاكاة التحميل
function simulateLoading() {
  // محاكاة تحميل البيانات في صفحة الكورسات
  const skeletonLoading = document.getElementById('loadingSkeleton');
  if (skeletonLoading) {
    setTimeout(() => {
      skeletonLoading.style.display = 'none';
      applyFilters();
    }, 1500);
  }
}

// التحقق من صحة البريد الإلكتروني
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// إظهار الإشعارات
function showToast(message, type = 'info') {
  const toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) return;
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = 'info-circle';
  switch (type) {
    case 'success':
      icon = 'check-circle';
      break;
    case 'error':
      icon = 'exclamation-circle';
      break;
    case 'warning':
      icon = 'exclamation-triangle';
      break;
  }
  
  toast.innerHTML = `
    <i class="fas fa-${icon}"></i>
    <span>${message}</span>
  `;
  
  toastContainer.appendChild(toast);
  
  // إزالة الإشعار بعد 5 ثوانٍ
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 5000);
    }
