export type NutritionContent = {
  nav: string
  kicker: string
  title: string
  intro: string
  profileTitle: string
  profile: Array<{ label: string; value: string }>
  targetsTitle: string
  targetsNote: string
  targets: Array<{ label: string; value: string }>
  mealsTitle: string
  mealsIntro: string
  meals: Array<{ number: string; name: string; optional?: string; foods: string[] }>
  rulesTitle: string
  rules: string[]
  dayTitle: string
  trainingDay: { title: string; text: string }
  restDay: { title: string; text: string }
  disclaimer: string
}

export const nutritionContent: Record<'en' | 'ar', NutritionContent> = {
  en: {
    nav: 'Nutrition',
    kicker: 'Simple nutrition · Body recomposition',
    title: 'Eat to perform.\nBuild with patience.',
    intro: 'A straightforward starting point for building muscle and strength while slowly reducing body fat.',
    profileTitle: "Ahmed's estimated data",
    profile: [
      { label: 'Age', value: '18 years' }, { label: 'Height', value: '170 cm' },
      { label: 'Weight', value: '100 kg' }, { label: 'Goal', value: 'Body recomposition' },
    ],
    targetsTitle: 'Daily targets',
    targetsNote: 'Use these as a consistent starting range—not a test you must perfect every day.',
    targets: [
      { label: 'Calories', value: '2,200–2,400 kcal' }, { label: 'Protein', value: '160–190 g' },
      { label: 'Carbs', value: '200–260 g' }, { label: 'Fats', value: '60–80 g' },
      { label: 'Water', value: '3–4 L' },
    ],
    mealsTitle: 'Simple meal plan',
    mealsIntro: 'Choose the option that is easiest to repeat. Portions can be adjusted within the daily targets.',
    meals: [
      { number: '01', name: 'Breakfast', foods: ['3 eggs', '2 slices brown bread OR 80 g oats', '1 fruit', 'Black coffee or tea without sugar'] },
      { number: '02', name: 'Snack', foods: ['Greek yogurt OR cottage cheese', '1 banana', '10–15 almonds'] },
      { number: '03', name: 'Lunch', foods: ['180–220 g chicken breast OR lean meat OR fish', '150–200 g rice, pasta, or potatoes', 'Large salad', '1 tbsp olive oil'] },
      { number: '04', name: 'Pre-workout', foods: ['Banana OR dates', 'Coffee if needed', 'Optional whey protein if your protein target is low'] },
      { number: '05', name: 'Dinner', foods: ['180–220 g protein source', 'Vegetables', 'Small carb portion if it is a training day'] },
      { number: '06', name: 'Before bed', optional: 'Optional', foods: ['Greek yogurt OR cottage cheese OR milk'] },
    ],
    rulesTitle: 'Rules that matter',
    rules: ['Hit your protein target daily', 'Do not crash diet', 'Lose 0.5–1 kg per week maximum', 'Keep strength performance stable', 'Prefer grilled or baked food', 'Limit fried food, sugary drinks, and sweets', 'Track body weight 3 times per week', 'Adjust calories only if weight does not change for 2 weeks'],
    dayTitle: 'Training day vs rest day',
    trainingDay: { title: 'Training day', text: 'Eat more of your daily carbs around the workout to support performance and recovery.' },
    restDay: { title: 'Rest day', text: 'Use slightly fewer carbs while keeping protein at the same daily target.' },
    disclaimer: 'This guide is general information and is not medical advice. Speak with a qualified professional for individual medical or dietary needs.',
  },
  ar: {
    nav: 'التغذية',
    kicker: 'تغذية بسيطة · إعادة تكوين الجسم',
    title: 'كُل لتتمرّن أفضل.\nوابنِ جسمك بصبر.',
    intro: 'نقطة بداية عملية لبناء العضلات والقوة مع خفض الدهون تدريجيًا وبشكل هادئ.',
    profileTitle: 'بيانات أحمد التقديرية',
    profile: [
      { label: 'العمر', value: '١٨ سنة' }, { label: 'الطول', value: '١٧٠ سم' },
      { label: 'الوزن', value: '١٠٠ كجم' }, { label: 'الهدف', value: 'إعادة تكوين الجسم' },
    ],
    targetsTitle: 'الأهداف اليومية',
    targetsNote: 'استخدم هذه الأرقام كنطاق بداية ثابت، وليس اختبارًا يجب تحقيقه بدقة كل يوم.',
    targets: [
      { label: 'السعرات', value: '٢٢٠٠–٢٤٠٠ سعرة' }, { label: 'البروتين', value: '١٦٠–١٩٠ جم' },
      { label: 'الكربوهيدرات', value: '٢٠٠–٢٦٠ جم' }, { label: 'الدهون', value: '٦٠–٨٠ جم' },
      { label: 'الماء', value: '٣–٤ لتر' },
    ],
    mealsTitle: 'خطة وجبات بسيطة',
    mealsIntro: 'اختر الخيار الأسهل في التكرار، وعدّل الكميات داخل نطاق أهدافك اليومية.',
    meals: [
      { number: '٠١', name: 'الإفطار', foods: ['٣ بيضات', 'شريحتان خبز أسمر أو ٨٠ جم شوفان', 'ثمرة فاكهة', 'قهوة سادة أو شاي بدون سكر'] },
      { number: '٠٢', name: 'وجبة خفيفة', foods: ['زبادي يوناني أو جبنة قريش', 'موزة واحدة', '١٠–١٥ حبة لوز'] },
      { number: '٠٣', name: 'الغداء', foods: ['١٨٠–٢٢٠ جم صدور دجاج أو لحم قليل الدهن أو سمك', '١٥٠–٢٠٠ جم أرز أو مكرونة أو بطاطس', 'طبق سلطة كبير', 'ملعقة كبيرة زيت زيتون'] },
      { number: '٠٤', name: 'قبل التمرين', foods: ['موز أو تمر', 'قهوة عند الحاجة', 'واي بروتين اختياري إذا كان البروتين اليومي منخفضًا'] },
      { number: '٠٥', name: 'العشاء', foods: ['١٨٠–٢٢٠ جم من مصدر بروتين', 'خضروات', 'كمية كربوهيدرات صغيرة في يوم التمرين'] },
      { number: '٠٦', name: 'قبل النوم', optional: 'اختياري', foods: ['زبادي يوناني أو جبنة قريش أو حليب'] },
    ],
    rulesTitle: 'القواعد المهمة',
    rules: ['حقق هدف البروتين يوميًا', 'لا تتبع حمية قاسية', 'اخسر ٠٫٥–١ كجم أسبوعيًا كحد أقصى', 'حافظ على مستوى قوتك في التمرين', 'فضّل الطعام المشوي أو المخبوز', 'قلل المقليات والمشروبات السكرية والحلويات', 'قِس وزن الجسم ٣ مرات أسبوعيًا', 'عدّل السعرات فقط إذا لم يتغير الوزن لمدة أسبوعين'],
    dayTitle: 'يوم التمرين مقابل يوم الراحة',
    trainingDay: { title: 'يوم التمرين', text: 'ضع نسبة أكبر من كربوهيدراتك اليومية حول موعد التمرين لدعم الأداء والتعافي.' },
    restDay: { title: 'يوم الراحة', text: 'قلل الكربوهيدرات قليلًا مع الحفاظ على نفس هدف البروتين اليومي.' },
    disclaimer: 'هذا الدليل للمعلومات العامة وليس نصيحة طبية. استشر مختصًا مؤهلًا عند وجود احتياجات طبية أو غذائية خاصة.',
  },
}
