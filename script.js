
/* script.js */

const data = {
  categories: [
    {
      id: "hot-beverages",
      name: { en: "Hot Beverages", ar: "مشروبات ساخنة", ru: "Горячие напитки" },
      image: "images/categories/hot-beverages.webp",
      products: [
        { name: { en: "Single Espresso", ar: "اسبريسو فردي", ru: "Один эспрессо" }, desc: { en: "Strong black coffee", ar: "قهوة سوداء قوية", ru: "Крепкий черный кофе" }, price: 25, image: "images/products/single-espresso.webp" },
        { name: { en: "Double Espresso", ar: "اسبريسو مزدوج", ru: "Двойной эспрессо" }, desc: { en: "Double shot of espresso", ar: "جرعة مزدوجة من الاسبريسو", ru: "Двойная порция эспрессо" }, price: 30, image: "images/products/double-espresso.webp" },
        { name: { en: "Espresso Macchiato", ar: "اسبريسو ماكياتو", ru: "Эспрессо маккиато" }, desc: { en: "Espresso stained with milk", ar: "اسبريسو مع لمسة حليب", ru: "Эспрессо с капелькой молока" }, price: 28, image: "images/products/espresso-macchiato.webp" },
        { name: { en: "Double Espresso Macchiato", ar: "اسبريسو ماكياتو مزدوج", ru: "Двойной эспрессо маккиато" }, desc: { en: "Double espresso with milk foam", ar: "اسبريسو مزدوج مع رغوة الحليب", ru: "Двойной эспрессо с молочной пеной" }, price: 33, image: "images/products/double-espresso-macchiato.webp" },
        { name: { en: "Espresso Affogato", ar: "اسبريسو أفوقاتو", ru: "Эспрессо аффогато" }, desc: { en: "Espresso over vanilla ice cream", ar: "اسبريسو فوق آيس كريم فانيليا", ru: "Эспрессо с шариком ванильного мороженого" }, price: 45, image: "images/products/affogato.webp" },
        { name: { en: "Latte", ar: "لاتيه", ru: "Латте" }, desc: { en: "Smooth coffee with steamed milk", ar: "قهوة ناعمة مع حليب مبخر", ru: "Нежный кофе с вспененным молоком" }, price: 35, image: "images/products/latte.webp" },
        { name: { en: "Flavored Latte", ar: "لاتيه بنكهة", ru: "Латте с ароматизатором" }, desc: { en: "Latte with syrup", ar: "لاتيه مع شراب", ru: "Латте с сиропом" }, price: 40, image: "images/products/flavored-latte.webp" },
        { name: { en: "Cappuccino", ar: "كابتشينو", ru: "Капучино" }, desc: { en: "Coffee with thick foam", ar: "قهوة برغوة كثيفة", ru: "Кофе с густой пеной" }, price: 35, image: "images/products/cappuccino.webp" },
        { name: { en: "Flat White", ar: "فلات وايت", ru: "Флэт уайт" }, desc: { en: "Smooth espresso with microfoam", ar: "اسبريسو ناعم مع مايكروفوم", ru: "Нежный эспрессо с микропеной" }, price: 38, image: "images/products/flat-white.webp" },
        { name: { en: "Cortado", ar: "كورتادو", ru: "Кортадо" }, desc: { en: "Espresso cut with warm milk", ar: "اسبريسو ممزوج بحليب دافئ", ru: "Эспрессо с теплым молоком" }, price: 32, image: "images/products/cortado.webp" },
        { name: { en: "Single Turkish Coffee", ar: "قهوة تركية فردي", ru: "Турецкий кофе (один)" }, desc: { en: "Traditional Turkish coffee", ar: "قهوة تركية تقليدية", ru: "Традиционный турецкий кофе" }, price: 25, image: "images/products/turkish-coffee.webp" },
        { name: { en: "Double Turkish Coffee", ar: "قهوة تركية مزدوج", ru: "Турецкий кофе (двойной)" }, desc: { en: "Strong Turkish coffee", ar: "قهوة تركية قوية", ru: "Крепкий турецкий кофе" }, price: 30, image: "images/products/double-turkish.webp" },
        { name: { en: "Americano", ar: "أمريكانو", ru: "Американо" }, desc: { en: "Espresso with hot water", ar: "اسبريسو مع ماء ساخن", ru: "Эспрессо с горячей водой" }, price: 28, image: "images/products/americano.webp" },
        { name: { en: "French Coffee", ar: "قهوة فرنسية", ru: "Французский кофе" }, desc: { en: "French style coffee", ar: "قهوة على الطريقة الفرنسية", ru: "Кофе по-французски" }, price: 32, image: "images/products/french-coffee.webp" },
        { name: { en: "Hazelnut Coffee", ar: "قهوة بالبندق", ru: "Кофе с фундуком" }, desc: { en: "Coffee with hazelnut flavor", ar: "قهوة بنكهة البندق", ru: "Кофе со вкусом фундука" }, price: 35, image: "images/products/hazelnut-coffee.webp" },
        { name: { en: "Hot Chocolate", ar: "شوكولاتة ساخنة", ru: "Горячий шоколад" }, desc: { en: "Rich hot chocolate", ar: "شوكولاتة ساخنة غنية", ru: "Насыщенный горячий шоколад" }, price: 30, image: "images/products/hot-chocolate.webp" },
        { name: { en: "Hot Cider", ar: "سايدر ساخن", ru: "Горячий сидр" }, desc: { en: "Warm apple cider", ar: "سايدر تفاح دافئ", ru: "Теплый яблочный сидр" }, price: 28, image: "images/products/hot-cider.webp" },
        { name: { en: "Nescafé Classic", ar: "نسكافيه كلاسيك", ru: "Нескафе классик" }, desc: { en: "Classic instant coffee", ar: "قهوة سريعة التحضير كلاسيكية", ru: "Классический растворимый кофе" }, price: 20, image: "images/products/nescafe-classic.webp" },
        { name: { en: "Nescafé Gold", ar: "نسكافيه جولد", ru: "Нескафе голд" }, desc: { en: "Premium instant coffee", ar: "قهوة سريعة التحضير فاخرة", ru: "Премиальный растворимый кофе" }, price: 25, image: "images/products/nescafe-gold.webp" },
        { name: { en: "Anise", ar: "يانسون", ru: "Анис" }, desc: { en: "Hot anise drink", ar: "مشروب يانسون ساخن", ru: "Горячий напиток с анисом" }, price: 15, image: "images/products/anise.webp" },
        { name: { en: "Tea", ar: "شاي", ru: "Чай" }, desc: { en: "Hot tea", ar: "شاي ساخن", ru: "Горячий чай" }, price: 15, image: "images/products/tea.webp" },
        { name: { en: "Green Tea", ar: "شاي أخضر", ru: "Зеленый чай" }, desc: { en: "Green tea", ar: "شاي أخضر", ru: "Зеленый чай" }, price: 18, image: "images/products/green-tea.webp" },
        { name: { en: "Hibiscus", ar: "كركديه", ru: "Каркаде" }, desc: { en: "Hibiscus tea", ar: "شاي الكركديه", ru: "Чай из гибискуса" }, price: 18, image: "images/products/hibiscus.webp" },
        { name: { en: "Mint", ar: "نعناع", ru: "Мята" }, desc: { en: "Hot mint tea", ar: "شاي نعناع ساخن", ru: "Горячий мятный чай" }, price: 15, image: "images/products/mint.webp" },
        { name: { en: "Ginger", ar: "زنجبيل", ru: "Имбирь" }, desc: { en: "Hot ginger drink", ar: "مشروب زنجبيل ساخن", ru: "Горячий имбирный напиток" }, price: 18, image: "images/products/ginger.webp" },
        { name: { en: "Cinnamon", ar: "قرفة", ru: "Корица" }, desc: { en: "Hot cinnamon drink", ar: "مشروب قرفة ساخن", ru: "Горячий напиток с корицей" }, price: 18, image: "images/products/cinnamon.webp" },
        { name: { en: "Herbal Tea", ar: "شاي أعشاب", ru: "Травяной чай" }, desc: { en: "Mixed herbal tea", ar: "شاي أعشاب مشكل", ru: "Смешанный травяной чай" }, price: 20, image: "images/products/herbal-tea.webp" }
      ]
    },
    {
      id: "iced-coffee",
      name: { en: "Iced Coffee", ar: "قهوة مثلجة", ru: "Кофе со льдом" },
      image: "images/categories/iced-coffee.webp",
      products: [
        { name: { en: "Iced Latte", ar: "لاتيه مثلج", ru: "Латте со льдом" }, desc: { en: "Cold latte with ice", ar: "لاتيه بارد مع ثلج", ru: "Холодный латте со льдом" }, price: 35, image: "images/products/iced-latte.webp" },
        { name: { en: "Iced Cappuccino", ar: "كابتشينو مثلج", ru: "Капучино со льдом" }, desc: { en: "Cold cappuccino", ar: "كابتشينو بارد", ru: "Холодный капучино" }, price: 38, image: "images/products/iced-cappuccino.webp" },
        { name: { en: "Iced Americano", ar: "أمريكانو مثلج", ru: "Американо со льдом" }, desc: { en: "Cold americano", ar: "أمريكانو بارد", ru: "Холодный американо" }, price: 30, image: "images/products/iced-americano.webp" },
        { name: { en: "Iced Mocha", ar: "موكا مثلج", ru: "Мокко со льдом" }, desc: { en: "Cold mocha coffee", ar: "قهوة موكا باردة", ru: "Холодный кофе мокко" }, price: 40, image: "images/products/iced-mocha.webp" },
        { name: { en: "Iced Caramel Macchiato", ar: "كاراميل ماكياتو مثلج", ru: "Карамельный маккиато со льдом" }, desc: { en: "Cold caramel macchiato", ar: "كاراميل ماكياتو بارد", ru: "Холодный карамельный маккиато" }, price: 42, image: "images/products/iced-caramel-macchiato.webp" },
        { name: { en: "Classic Frappe", ar: "فرابيه كلاسيك", ru: "Классический фраппе" }, desc: { en: "Classic blended coffee", ar: "قهوة مخلوطة كلاسيكية", ru: "Классический кофе фраппе" }, price: 38, image: "images/products/classic-frappe.webp" },
        { name: { en: "Mocha Frappe", ar: "فرابيه موكا", ru: "Фраппе мокко" }, desc: { en: "Mocha blended coffee", ar: "قهوة موكا مخلوطة", ru: "Кофе мокко фраппе" }, price: 40, image: "images/products/mocha-frappe.webp" },
        { name: { en: "Caramel Ferbea", ar: "كاراميل فيربيا", ru: "Карамельная фербеа" }, desc: { en: "Caramel frozen coffee", ar: "قهوة مجمدة بالكراميل", ru: "Карамельный замороженный кофе" }, price: 42, image: "images/products/caramel-ferbea.webp" }
      ]
    },
    {
      id: "fresh-juices",
      name: { en: "Fresh Juices", ar: "عصائر طازجة", ru: "Свежевыжатые соки" },
      image: "images/categories/fresh-juices.webp",
      products: [
        { name: { en: "Orange", ar: "برتقال", ru: "Апельсин" }, desc: { en: "Fresh orange juice", ar: "عصير برتقال طازج", ru: "Свежевыжатый апельсиновый сок" }, price: 30, image: "images/products/orange.webp" },
        { name: { en: "Strawberry", ar: "فراولة", ru: "Клубника" }, desc: { en: "Fresh strawberry juice", ar: "عصير فراولة طازج", ru: "Свежевыжатый клубничный сок" }, price: 35, image: "images/products/strawberry.webp" },
        { name: { en: "Mango", ar: "مانجو", ru: "Манго" }, desc: { en: "Fresh mango juice", ar: "عصير مانجو طازج", ru: "Свежевыжатый сок манго" }, price: 35, image: "images/products/mango.webp" },
        { name: { en: "Guava", ar: "جوافة", ru: "Гуава" }, desc: { en: "Fresh guava juice", ar: "عصير جوافة طازج", ru: "Свежевыжатый сок гуавы" }, price: 30, image: "images/products/guava.webp" },
        { name: { en: "Guava Mint", ar: "جوافة بنعناع", ru: "Гуава с мятой" }, desc: { en: "Guava with mint", ar: "جوافة مع نعناع", ru: "Гуава с мятой" }, price: 32, image: "images/products/guava-mint.webp" },
        { name: { en: "Lemon", ar: "ليمون", ru: "Лимон" }, desc: { en: "Fresh lemon juice", ar: "عصير ليمون طازج", ru: "Свежевыжатый лимонный сок" }, price: 25, image: "images/products/lemon.webp" },
        { name: { en: "Lemon Mint", ar: "ليمون بنعناع", ru: "Лимон с мятой" }, desc: { en: "Lemon juice with mint", ar: "عصير ليمون مع نعناع", ru: "Лимонный сок с мятой" }, price: 28, image: "images/products/lemon-mint.webp" },
        { name: { en: "Watermelon", ar: "بطيخ", ru: "Арбуз" }, desc: { en: "Fresh watermelon juice", ar: "عصير بطيخ طازج", ru: "Свежевыжатый арбузный сок" }, price: 25, image: "images/products/watermelon.webp" },
        { name: { en: "Kiwi", ar: "كيوي", ru: "Киви" }, desc: { en: "Fresh kiwi juice", ar: "عصير كيوي طازج", ru: "Свежевыжатый сок киви" }, price: 40, image: "images/products/kiwi.webp" },
        { name: { en: "Date", ar: "تمر", ru: "Финик" }, desc: { en: "Date juice", ar: "عصير تمر", ru: "Финиковый сок" }, price: 30, image: "images/products/date.webp" },
        { name: { en: "Banana", ar: "موز", ru: "Банан" }, desc: { en: "Fresh banana juice", ar: "عصير موز طازج", ru: "Свежевыжатый банановый сок" }, price: 30, image: "images/products/banana.webp" }
      ]
    },
    {
      id: "yogurt",
      name: { en: "Yogurt", ar: "زبادي", ru: "Йогурт" },
      image: "images/categories/yogurt.webp",
      products: [
        { name: { en: "Classic Yogurt", ar: "زبادي كلاسيك", ru: "Классический йогурт" }, desc: { en: "Plain yogurt", ar: "زبادي عادي", ru: "Обычный йогурт" }, price: 35, image: "images/products/classic-yogurt.webp" },
        { name: { en: "Honey Yogurt", ar: "زبادي بالعسل", ru: "Йогурт с медом" }, desc: { en: "Yogurt with honey", ar: "زبادي مع عسل", ru: "Йогурт с медом" }, price: 40, image: "images/products/honey-yogurt.webp" },
        { name: { en: "Mango Yogurt", ar: "زبادي مانجو", ru: "Манговый йогурт" }, desc: { en: "Yogurt with mango", ar: "زبادي مع مانجو", ru: "Йогурт с манго" }, price: 45, image: "images/products/mango-yogurt.webp" },
        { name: { en: "Strawberry Yogurt", ar: "زبادي فراولة", ru: "Клубничный йогурт" }, desc: { en: "Yogurt with strawberry", ar: "زبادي مع فراولة", ru: "Йогурт с клубникой" }, price: 45, image: "images/products/strawberry-yogurt.webp" },
        { name: { en: "Yogurt Mix", ar: "مزيج زبادي", ru: "Смешанный йогурт" }, desc: { en: "Mango, strawberry & banana", ar: "مانجو وفراولة وموز", ru: "Манго, клубника, банан" }, price: 50, image: "images/products/yogurt-mix.webp" },
        { name: { en: "Blueberry Yogurt", ar: "زبادي توت أزرق", ru: "Черничный йогурт" }, desc: { en: "Yogurt with blueberry", ar: "زبادي مع توت أزرق", ru: "Йогурт с черникой" }, price: 50, image: "images/products/blueberry-yogurt.webp" }
      ]
    },
    {
      id: "cocktails",
      name: { en: "Cocktails", ar: "كوكتيل", ru: "Коктейли" },
      image: "images/categories/cocktail.webp",
      products: [
        { name: { en: "Florida", ar: "فلوريدا", ru: "Флорида" }, desc: { en: "Mango + Strawberry + Guava", ar: "مانجو + فراولة + جوافة", ru: "Манго + клубника + гуава" }, price: 55, image: "images/products/florida.webp" },
        { name: { en: "Lady Blue", ar: "ليدي بلو", ru: "Леди Блю" }, desc: { en: "Watermelon + Strawberry + Banana + Blueberry", ar: "بطيخ + فراولة + موز + توت أزرق", ru: "Арбуз + клубника + банан + черника" }, price: 60, image: "images/products/lady-blue.webp" },
        { name: { en: "Pour the Avocado", ar: "بور ذا أفوكادو", ru: "Авокадо микс" }, desc: { en: "Avocado + banana + dates + ice cream", ar: "أفوكادو + موز + تمر + آيس كريم", ru: "Авокадо + банан + финики + мороженое" }, price: 65, image: "images/products/avocado.webp" },
        { name: { en: "Signature Blend", ar: "سيغنتشر بليند", ru: "Авторский микс" }, desc: { en: "Banana + Guava + Vanilla Ice Cream + Fresh Mint", ar: "موز + جوافة + آيس كريم فانيليا + نعناع طازج", ru: "Банан + гуава + ванильное мороженое + свежая мята" }, price: 65, image: "images/products/signature-blend.webp" },
        { name: { en: "Hawaii", ar: "هاواي", ru: "Гавайи" }, desc: { en: "Kiwi + Mango + Vanilla Ice Cream", ar: "كيوي + مانجو + آيس كريم فانيليا", ru: "Киви + манго + ванильное мороженое" }, price: 60, image: "images/products/hawaii.webp" },
        { name: { en: "Mojito", ar: "موخيتو", ru: "Мохито" }, desc: { en: "Mojito (non-alcoholic)", ar: "موخيتو (غير كحولي)", ru: "Мохито (безалкогольный)" }, price: 45, image: "images/products/mojito.webp" },
        { name: { en: "Scotch Mint", ar: "سكوتش منت", ru: "Скотч минт" }, desc: { en: "Minty cocktail", ar: "كوكتيل بالنعناع", ru: "Мятный коктейль" }, price: 45, image: "images/products/scotch-mint.webp" },
        { name: { en: "Sunshine", ar: "سانشاين", ru: "Саншайн" }, desc: { en: "Sunshine fruit blend", ar: "مزيج فواكه مشمس", ru: "Солнечный фруктовый микс" }, price: 50, image: "images/products/sunshine.webp" }
      ]
    },
    {
      id: "milkshakes",
      name: { en: "Milkshakes", ar: "ميلك شيك", ru: "Молочные коктейли" },
      image: "images/categories/milkshakes.webp",
      products: [
        { name: { en: "Vanilla Milkshake", ar: "ميلك شيك فانيليا", ru: "Ванильный молочный коктейль" }, desc: { en: "Vanilla milkshake", ar: "ميلك شيك فانيليا", ru: "Ванильный молочный коктейль" }, price: 40, image: "images/products/vanilla-milkshake.webp" },
        { name: { en: "Mango Milkshake", ar: "ميلك شيك مانجو", ru: "Манговый молочный коктейль" }, desc: { en: "Mango milkshake", ar: "ميلك شيك مانجو", ru: "Манговый молочный коктейль" }, price: 45, image: "images/products/mango-milkshake.webp" },
        { name: { en: "Strawberry Milkshake", ar: "ميلك شيك فراولة", ru: "Клубничный молочный коктейль" }, desc: { en: "Strawberry milkshake", ar: "ميلك شيك فراولة", ru: "Клубничный молочный коктейль" }, price: 45, image: "images/products/strawberry-milkshake.webp" },
        { name: { en: "Oreo Milkshake", ar: "ميلك شيك أوريو", ru: "Молочный коктейль с Oreo" }, desc: { en: "Oreo milkshake", ar: "ميلك شيك أوريو", ru: "Молочный коктейль с Oreo" }, price: 50, image: "images/products/oreo-milkshake.webp" },
        { name: { en: "Caramel Milkshake", ar: "ميلك شيك كراميل", ru: "Карамельный молочный коктейль" }, desc: { en: "Caramel milkshake", ar: "ميلك شيك كراميل", ru: "Карамельный молочный коктейль" }, price: 48, image: "images/products/caramel-milkshake.webp" },
        { name: { en: "Lotus Milkshake", ar: "ميلك شيك لوتس", ru: "Молочный коктейль Lotus" }, desc: { en: "Lotus biscoff milkshake", ar: "ميلك شيك لوتس بيسكوف", ru: "Молочный коктейль Lotus Biscoff" }, price: 50, image: "images/products/lotus-milkshake.webp" }
      ]
    },
    {
      id: "soft-drinks",
      name: { en: "Soft Drinks", ar: "مشروبات غازية", ru: "Безалкогольные напитки" },
      image: "images/categories/soft-drinks.webp",
      products: [
        { name: { en: "Sprite", ar: "سبرايت", ru: "Спрайт" }, desc: { en: "Lemon-lime soda", ar: "صودا ليمون-لايم", ru: "Газировка с лимоном и лаймом" }, price: 15, image: "images/products/sprite.webp" },
        { name: { en: "Seven Up", ar: "سيفن أب", ru: "Севен Ап" }, desc: { en: "Lemon-lime soda", ar: "صودا ليمون-لايم", ru: "Газировка с лимоном и лаймом" }, price: 15, image: "images/products/sevenup.webp" },
        { name: { en: "Pepsi", ar: "بيبسي", ru: "Пепси" }, desc: { en: "Pepsi cola", ar: "بيبسي كولا", ru: "Пепси кола" }, price: 15, image: "images/products/pepsi.webp" },
        { name: { en: "Fayrouz", ar: "فيروز", ru: "Файруз" }, desc: { en: "Fayrouz non-alcoholic malt drink", ar: "مشروب مالت غير كحولي فيروز", ru: "Безалкогольный солодовый напиток" }, price: 18, image: "images/products/fayrouz.webp" },
        { name: { en: "Diet Pepsi", ar: "بيبسي دايت", ru: "Пепси лайт" }, desc: { en: "Diet Pepsi cola", ar: "بيبسي دايت", ru: "Диетическая пепси" }, price: 15, image: "images/products/diet-pepsi.webp" },
        { name: { en: "Birell", ar: "بيريل", ru: "Бирелль" }, desc: { en: "Non-alcoholic beer", ar: "بيرة غير كحولية", ru: "Безалкогольное пиво" }, price: 20, image: "images/products/birell.webp" },
        { name: { en: "Coca-Cola", ar: "كوكاكولا", ru: "Кока-кола" }, desc: { en: "Coca-Cola", ar: "كوكاكولا", ru: "Кока-кола" }, price: 15, image: "images/products/cocacola.webp" },
        { name: { en: "Coca-Cola Zero", ar: "كوكاكولا زيرو", ru: "Кока-кола зеро" }, desc: { en: "Zero sugar Coca-Cola", ar: "كوكاكولا بدون سكر", ru: "Кока-кола без сахара" }, price: 15, image: "images/products/cocacola-zero.webp" },
        { name: { en: "Soda", ar: "صودا", ru: "Содовая" }, desc: { en: "Plain soda water", ar: "ماء صودا عادي", ru: "Обычная газированная вода" }, price: 10, image: "images/products/soda.webp" },
        { name: { en: "Tonic", ar: "تونيك", ru: "Тоник" }, desc: { en: "Tonic water", ar: "ماء تونيك", ru: "Тонизирующая вода" }, price: 12, image: "images/products/tonic.webp" },
        { name: { en: "Small Bottled Water", ar: "ماء زجاجة صغيرة", ru: "Маленькая бутылка воды" }, desc: { en: "Small water bottle", ar: "زجاجة ماء صغيرة", ru: "Маленькая бутылка воды" }, price: 8, image: "images/products/water-small.webp" },
        { name: { en: "Large Bottled Water", ar: "ماء زجاجة كبيرة", ru: "Большая бутылка воды" }, desc: { en: "Large water bottle", ar: "زجاجة ماء كبيرة", ru: "Большая бутылка воды" }, price: 12, image: "images/products/water-large.webp" }
      ]
    },
    {
      id: "desserts-icecream",
      name: { en: "Desserts & Ice Cream", ar: "حلويات ومثلجات", ru: "Десерты и мороженое" },
      image: "images/categories/desserts.webp",
      products: [
        { name: { en: "Molten Cake", ar: "مولتن كيك", ru: "Шоколадный фондан" }, desc: { en: "Warm chocolate cake", ar: "كيك شوكولاتة ساخن", ru: "Теплый шоколадный кекс" }, price: 70, image: "images/products/molten.webp" },
        { name: { en: "Brownies", ar: "براونيز", ru: "Брауни" }, desc: { en: "Rich chocolate brownie", ar: "براونيز شوكولاتة غني", ru: "Насыщенный шоколадный брауни" }, price: 65, image: "images/products/brownies.webp" },
        { name: { en: "Kurawasu", ar: "كوراواسو", ru: "Куравасу" }, desc: { en: "Japanese dessert", ar: "حلوى يابانية", ru: "Японский десерт" }, price: 60, image: "images/products/kurawasu.webp" },
        { name: { en: "Sweet Kurosu", ar: "سويت كوروسو", ru: "Сладкий куросу" }, desc: { en: "Sweet dessert", ar: "حلوى حلوة", ru: "Сладкий десерт" }, price: 60, image: "images/products/sweet-kurosu.webp" },
        { name: { en: "Chocolate Ice Cream (3 scoops)", ar: "آيس كريم شوكولاتة (3 مغارف)", ru: "Шоколадное мороженое (3 шарика)" }, desc: { en: "3 scoops of chocolate ice cream", ar: "3 مغارف من آيس كريم الشوكولاتة", ru: "3 шарика шоколадного мороженого" }, price: 50, image: "images/products/chocolate-icecream.webp" },
        { name: { en: "Mixed Ice Cream", ar: "آيس كريم مشكل", ru: "Ассорти мороженого" }, desc: { en: "Mixed flavors", ar: "نكهات مشكلة", ru: "Смешанные вкусы" }, price: 45, image: "images/products/mixed-icecream.webp" },
        { name: { en: "1 Scoop Ice Cream", ar: "مغرفة آيس كريم", ru: "1 шарик мороженого" }, desc: { en: "Vanilla, Strawberry, Mango or Chocolate", ar: "فانيليا، فراولة، مانجو أو شوكولاتة", ru: "Ваниль, клубника, манго или шоколад" }, price: 25, image: "images/products/one-scoop.webp" },
        { name: { en: "2 Scoops Ice Cream", ar: "مغرفتان آيس كريم", ru: "2 шарика мороженого" }, desc: { en: "Vanilla, Strawberry, Mango or Chocolate", ar: "فانيليا، فراولة، مانجو أو شوكولاتة", ru: "Ваниль, клубника, манго или шоколад" }, price: 40, image: "images/products/two-scoops.webp" },
        { name: { en: "3 Scoops Ice Cream", ar: "ثلاث مغارف آيس كريم", ru: "3 шарика мороженого" }, desc: { en: "Vanilla, Strawberry, Mango or Chocolate", ar: "فانيليا، فراولة، مانجو أو شوكولاتة", ru: "Ваниль, клубника, манго или шоколад" }, price: 50, image: "images/products/three-scoops.webp" },
        { name: { en: "Oreo Lotus Ice Cream", ar: "آيس كريم أوريو ولوتس", ru: "Мороженое Oreo и Lotus" }, desc: { en: "Oreo + Lotus + Chocolate", ar: "أوريو + لوتس + شوكولاتة", ru: "Oreo + Lotus + шоколад" }, price: 55, image: "images/products/oreo-lotus.webp" }
      ]
    },

    {
      id: "goodbuns",
      name: { en: "SHAMS Technology", ar: "شمس تكنولوجي", ru: "Shams Технолоджи" },
      image: "images/categories/shams-cafe.png",
      products: [
        {
          name: { en: "Caramello", ar: "كاراميلو", ru: "Карамелло" },
          desc: { en: "Caramello 330 ml - Caramel flavored coffee drink", ar: "كاراميلو 330 مل - مشروب قهوة بنكهة الكراميل", ru: "Карамелло 330 мл - кофейный напиток со вкусом карамели" },
          price: 270,
          image: "images/products/caramello.webp"
        },
        {
          name: { en: "Mochaccino", ar: "موكاشينو", ru: "Моккачино" },
          desc: { en: "Mochaccino 330 ml - Mocha cappuccino drink", ar: "موكاشينو 330 مل - مشروب كابتشينو الموكا", ru: "Моккачино 330 мл - напиток мокка капучино" },
          price: 270,
          image: "images/products/mochaccino.webp"
        },
        {
          name: { en: "Noir Cream", ar: "نوار كريم", ru: "Нуар Крем" },
          desc: { en: "Noir Cream 330 ml - Dark chocolate cream coffee", ar: "نوار كريم 330 مل - قهوة كريمة الشوكولاتة الداكنة", ru: "Нуар Крем 330 мл - кофе с темным шоколадным кремом" },
          price: 280,
          image: "images/products/noir-cream.webp"
        },
        {
          name: { en: "Cappuccino Pini", ar: "كابوتشينو بيني", ru: "Капучино Пини" },
          desc: { en: "Cappuccino Pini 330 ml - Creamy cappuccino", ar: "كابوتشينو بيني 330 مل - كابتشينو كريمي", ru: "Капучино Пини 330 мл - сливочный капучино" },
          price: 290,
          image: "images/products/cappuccino-pini.webp"
        }
      ]
    }
  ]
};

let currentLang = "en";
let currentCategory = null;

const app = document.getElementById("app");
const footer = document.getElementById("footer");

function formatPrice(price) {
  if (currentLang === "ar") return price + " جنيه";
  if (currentLang === "ru") return price + " фунтов";
  return price + " EGP";
}

function renderHome() {
  currentCategory = null;

  history.pushState({ home: true }, "", "#home");

  app.innerHTML = `
    <div class="grid">
      ${data.categories.map(cat => `
        <div class="card" onclick="openCategory('${cat.id}')">
          <img src="${cat.image}">
          <h3>${cat.name[currentLang]}</h3>
        </div>
      `).join('')}

      <div class="card contact-card" onclick="openContact()">
  <i class="fa-solid fa-headset contact-icon"></i>
  <h3>${getContactText()}</h3>
</div>
    </div>
  `;

  updateFooter();
}

function getContactText() {
  const text = {
    en: "Contact Us",
    ar: "اتصل بنا",
    ru: "Связаться с нами"
  };
  return text[currentLang];
}

function openContact() {
  history.pushState({ contact: true }, "", "#contact");

  const content = {
    en: {
      title: "Contact Us",
      address: "Hurghada - El Kawther (Inter)",
      back: "⬅ Back"
    },
    ar: {
      title: "اتصل بنا",
      address: "الغردقة - منطقة الانتر",
      back: "رجوع ➡"
    },
    ru: {
      title: "Связаться с нами",
      address: "Хургада - район Интер",
      back: "⬅ Назад"
    }
  };

  const t = content[currentLang];

  app.innerHTML = `
    <div class="back-btn" onclick="renderHome()">${t.back}</div>

    <div class="contact-page">
      <h2>${t.title}</h2>
      <p>${t.address}</p>

      <iframe 
        src="https://www.google.com/maps?q=Hurghada%20Inter&output=embed"
        width="100%" 
        height="250" 
        style="border:0; border-radius:15px;"
        loading="lazy">
      </iframe>

      <div class="contact-links">

        <a href="tel:+201122203111" target="_blank">
          <i class="fa-solid fa-phone"></i> Call
        </a>

        <a href="https://wa.me/201122203111" target="_blank">
          <i class="fa-brands fa-whatsapp"></i> WhatsApp
        </a>

        <a href="https://instagram.com/yourusername" target="_blank">
          <i class="fa-brands fa-instagram"></i> Instagram
        </a>

        <a href="https://t.me/yourusername" target="_blank">
          <i class="fa-brands fa-telegram"></i> Telegram
        </a>

        <a href="https://www.facebook.com/profile.php?id=61569006413184" target="_blank">
          <i class="fa-brands fa-facebook"></i> Facebook
        </a>

        <a href="mailto:info@shamscoffee.com">
          <i class="fa-solid fa-envelope"></i> Email
        </a>

      </div>
    </div>
  `;
}

function openCategory(id) {
  const cat = data.categories.find(c => c.id === id);
  currentCategory = cat;

  history.pushState({ categoryId: id }, "", "#" + id); // 👈 مهم

  app.innerHTML = `
    <div class="back-btn" onclick="renderHome()">⬅ Back</div>
    <div class="grid">
      ${cat.products.map(p => `
        <div class="card">
          <img src="${p.image}">
          <h3>${p.name[currentLang]}</h3>
          <p>${p.desc[currentLang]}</p>
          <strong>${formatPrice(p.price)}</strong>
        </div>
      `).join('')}
    </div>
  `;
}

window.addEventListener("popstate", (event) => {
  if (event.state && event.state.categoryId) {
    openCategory(event.state.categoryId);
  } else {
    renderHome();
  }
});
/* function updateFooter() {
  const text = {
    en: "All prices include VAT",
    ar: "جميع الأسعار شاملة الضريبة",
    ru: "Все цены включают НДС"
  };
  footer.innerText = text[currentLang];
} */
const siteTitle = document.getElementById("siteTitle");

function updateHeader() {
  const titles = {
    en: "SHAMS Coffee Hub",
    ar: "شمس كوفي هاب",
    ru: "SHAMS Coffee Hub"
  };

  siteTitle.innerText = titles[currentLang];
}

function updateFooter() {
  const text = {
    en: "SHAMS Coffee Hub — Brewed with passion ☕",
    ar: "شمس كوفي هاب — قهوة تُحضَّر بشغف ☕",
    ru: "SHAMS Coffee Hub — сварено с любовью ☕"
  };
  footer.innerText = text[currentLang];
}
document.getElementById("languageSwitcher").addEventListener("change", (e) => {
  currentLang = e.target.value;
  document.body.dir = currentLang === "ar" ? "rtl" : "ltr";

  updateHeader();   // 👈 ضيف دي
  updateFooter();

  if (currentCategory) openCategory(currentCategory.id);
  else renderHome();
});

renderHome();
updateHeader();
updateFooter();