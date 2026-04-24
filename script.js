const data = {
  categories: [
    {
      id: "hot-beverages",
      name: { en: "Hot Beverages", ar: "مشروبات ساخنة", ru: "Горячие напитки", de: "Heiße Getränke", it: "Bevande Calde" },
      image: "images/categories/hot-beverages.webp",
      products: [
        { name: { en: "Single Espresso", ar: "اسبريسو فردي", ru: "Один эспрессо", de: "Einzelner Espresso", it: "Espresso Singolo" }, desc: { en: "Strong black coffee", ar: "قهوة سوداء قوية", ru: "Крепкий черный кофе", de: "Starker schwarzer Kaffee", it: "Caffè nero forte" }, price: 25, image: "images/products/single-espresso.webp" },
        { name: { en: "Double Espresso", ar: "اسبريسو مزدوج", ru: "Двойной эспрессо", de: "Doppelter Espresso", it: "Espresso Doppio" }, desc: { en: "Double shot of espresso", ar: "جرعة مزدوجة من الاسبريسو", ru: "Двойная порция эспрессо", de: "Doppelter Espresso", it: "Doppio di espresso" }, price: 30, image: "images/products/double-espresso.webp" },
        { name: { en: "Espresso Macchiato", ar: "اسبريسو ماكياتو", ru: "Эспрессо маккиато", de: "Espresso Macchiato", it: "Espresso Macchiato" }, desc: { en: "Espresso stained with milk", ar: "اسبريسو مع لمسة حليب", ru: "Эспрессо с капелькой молока", de: "Espresso mit Milchfleck", it: "Espresso macchiato con latte" }, price: 28, image: "images/products/espresso-macchiato.webp" },
        { name: { en: "Double Espresso Macchiato", ar: "اسبريسو ماكياتو مزدوج", ru: "Двойной эспрессо маккиато", de: "Doppelter Espresso Macchiato", it: "Espresso Macchiato Doppio" }, desc: { en: "Double espresso with milk foam", ar: "اسبريسو مزدوج مع رغوة الحليب", ru: "Двойной эспрессо с молочной пеной", de: "Doppelter Espresso mit Milchschaum", it: "Doppio espresso con schiuma di latte" }, price: 33, image: "images/products/double-espresso-macchiato.webp" },
        { name: { en: "Espresso Affogato", ar: "اسبريسو أفوقاتو", ru: "Эспрессо аффогато", de: "Espresso Affogato", it: "Affogato al Caffè" }, desc: { en: "Espresso over vanilla ice cream", ar: "اسبريسو فوق آيس كريم فانيليا", ru: "Эспрессо с шариком ванильного мороженого", de: "Espresso über Vanilleeis", it: "Espresso su gelato alla vaniglia" }, price: 45, image: "images/products/affogato.webp" },
        { name: { en: "Latte", ar: "لاتيه", ru: "Латте", de: "Latte Macchiato", it: "Latte" }, desc: { en: "Smooth coffee with steamed milk", ar: "قهوة ناعمة مع حليب مبخر", ru: "Нежный кофе с вспененным молоком", de: "Kaffee mit aufgeschäumter Milch", it: "Caffè liscio con latte vaporizzato" }, price: 35, image: "images/products/latte.webp" },
        { name: { en: "Flavored Latte", ar: "لاتيه بنكهة", ru: "Латте с ароматизатором", de: "Latte mit Geschmack", it: "Latte Aromatizzato" }, desc: { en: "Latte with syrup", ar: "لاتيه مع شراب", ru: "Латте с сиропом", de: "Latte mit Sirup", it: "Latte con sciroppo" }, price: 40, image: "images/products/flavored-latte.webp" },
        { name: { en: "Cappuccino", ar: "كابتشينو", ru: "Капучино", de: "Cappuccino", it: "Cappuccino" }, desc: { en: "Coffee with thick foam", ar: "قهوة برغوة كثيفة", ru: "Кофе с густой пеной", de: "Kaffee mit dickem Schaum", it: "Caffè con schiuma densa" }, price: 35, image: "images/products/cappuccino.webp" },
        { name: { en: "Flat White", ar: "فلات وايت", ru: "Флэт уайт", de: "Flat White", it: "Flat White" }, desc: { en: "Smooth espresso with microfoam", ar: "اسبريسو ناعم مع مايكروفوم", ru: "Нежный эспрессо с микропеной", de: "Feiner Espresso mit Mikroschaum", it: "Espresso liscio con microschiuma" }, price: 38, image: "images/products/flat-white.jpg" },
        { name: { en: "Cortado", ar: "كورتادو", ru: "Кортадо", de: "Cortado", it: "Cortado" }, desc: { en: "Espresso cut with warm milk", ar: "اسبريسو ممزوج بحليب دافئ", ru: "Эспрессо с теплым молоком", de: "Espresso mit warmer Milch", it: "Espresso con latte caldo" }, price: 32, image: "images/products/cortado.webp" },
        { name: { en: "Single Turkish Coffee", ar: "قهوة تركية فردي", ru: "Турецкий кофе (один)", de: "Türkischer Kaffee (einzeln)", it: "Caffè Turco Singolo" }, desc: { en: "Traditional Turkish coffee", ar: "قهوة تركية تقليدية", ru: "Традиционный турецкий кофе", de: "Traditioneller türkischer Kaffee", it: "Caffè turco tradizionale" }, price: 25, image: "images/products/turkish-coffee.webp" },
        { name: { en: "Double Turkish Coffee", ar: "قهوة تركية مزدوج", ru: "Турецкий кофе (двойной)", de: "Türkischer Kaffee (doppelt)", it: "Caffè Turco Doppio" }, desc: { en: "Strong Turkish coffee", ar: "قهوة تركية قوية", ru: "Крепкий турецкий кофе", de: "Starker türkischer Kaffee", it: "Caffè turco forte" }, price: 30, image: "images/products/double-turkish.webp" },
        { name: { en: "Americano", ar: "أمريكانو", ru: "Американо", de: "Americano", it: "Americano" }, desc: { en: "Espresso with hot water", ar: "اسبريسو مع ماء ساخن", ru: "Эспрессо с горячей водой", de: "Espresso mit heißem Wasser", it: "Espresso con acqua calda" }, price: 28, image: "images/products/americano.webp" },
        { name: { en: "French Coffee", ar: "قهوة فرنسية", ru: "Французский кофе", de: "Französischer Kaffee", it: "Caffè Francese" }, desc: { en: "French style coffee", ar: "قهوة على الطريقة الفرنسية", ru: "Кофе по-французски", de: "Kaffee auf französische Art", it: "Caffè in stile francese" }, price: 32, image: "images/products/french-coffee.webp" },
        { name: { en: "Hazelnut Coffee", ar: "قهوة بالبندق", ru: "Кофе с фундуком", de: "Haselnusskaffee", it: "Caffè alla Nocciola" }, desc: { en: "Coffee with hazelnut flavor", ar: "قهوة بنكهة البندق", ru: "Кофе со вкусом фундука", de: "Kaffee mit Haselnussgeschmack", it: "Caffè al gusto di nocciola" }, price: 35, image: "images/products/hazelnut-coffee.webp" },
        { name: { en: "Hot Chocolate", ar: "شوكولاتة ساخنة", ru: "Горячий шоколад", de: "Heiße Schokolade", it: "Cioccolata Calda" }, desc: { en: "Rich hot chocolate", ar: "شوكولاتة ساخنة غنية", ru: "Насыщенный горячий шоколад", de: "Reichhaltige heiße Schokolade", it: "Cioccolata calda ricca" }, price: 30, image: "images/products/hot-chocolate.webp" },
        { name: { en: "Hot Cider", ar: "سايدر ساخن", ru: "Горячий сидр", de: "Heißer Cider", it: "Sidro Caldo" }, desc: { en: "Warm apple cider", ar: "سايدر تفاح دافئ", ru: "Теплый яблочный сидр", de: "Warmer Apfelcider", it: "Sidro di mele caldo" }, price: 28, image: "images/products/hot-cider.webp" },
        { name: { en: "Nescafé Classic", ar: "نسكافيه كلاسيك", ru: "Нескафе классик", de: "Nescafé Classic", it: "Nescafé Classic" }, desc: { en: "Classic instant coffee", ar: "قهوة سريعة التحضير كلاسيكية", ru: "Классический растворимый кофе", de: "Klassischer Instantkaffee", it: "Caffè solubile classico" }, price: 20, image: "images/products/nescafe-classic.webp" },
        { name: { en: "Nescafé Gold", ar: "نسكافيه جولد", ru: "Нескафе голд", de: "Nescafé Gold", it: "Nescafé Gold" }, desc: { en: "Premium instant coffee", ar: "قهوة سريعة التحضير فاخرة", ru: "Премиальный растворимый кофе", de: "Premium Instantkaffee", it: "Caffè solubile premium" }, price: 25, image: "images/products/nescafe-gold.webp" },
        { name: { en: "Anise", ar: "يانسون", ru: "Анис", de: "Anis", it: "Anice" }, desc: { en: "Hot anise drink", ar: "مشروب يانسون ساخن", ru: "Горячий напиток с анисом", de: "Heißes Anisgetränk", it: "Bevanda calda all'anice" }, price: 15, image: "images/products/anise.webp" },
        { name: { en: "Tea", ar: "شاي", ru: "Чай", de: "Tee", it: "Tè" }, desc: { en: "Hot tea", ar: "شاي ساخن", ru: "Горячий чай", de: "Heißer Tee", it: "Tè caldo" }, price: 15, image: "images/products/tea.webp" },
        { name: { en: "Green Tea", ar: "شاي أخضر", ru: "Зеленый чай", de: "Grüner Tee", it: "Tè Verde" }, desc: { en: "Green tea", ar: "شاي أخضر", ru: "Зеленый чай", de: "Grüner Tee", it: "Tè verde" }, price: 18, image: "images/products/green-tea.webp" },
        { name: { en: "Hibiscus", ar: "كركديه", ru: "Каркаде", de: "Hibiskus", it: "Ibisco" }, desc: { en: "Hibiscus tea", ar: "شاي الكركديه", ru: "Чай из гибискуса", de: "Hibiskustee", it: "Tè all'ibisco" }, price: 18, image: "images/products/hibiscus.webp" },
        { name: { en: "Mint", ar: "نعناع", ru: "Мята", de: "Minze", it: "Menta" }, desc: { en: "Hot mint tea", ar: "شاي نعناع ساخن", ru: "Горячий мятный чай", de: "Heiße Minztee", it: "Tè alla menta caldo" }, price: 15, image: "images/products/mint.webp" },
        { name: { en: "Ginger", ar: "زنجبيل", ru: "Имбирь", de: "Ingwer", it: "Zenzero" }, desc: { en: "Hot ginger drink", ar: "مشروب زنجبيل ساخن", ru: "Горячий имбирный напиток", de: "Heißes Ingwergetränk", it: "Bevanda calda allo zenzero" }, price: 18, image: "images/products/ginger.webp" },
        { name: { en: "Cinnamon", ar: "قرفة", ru: "Корица", de: "Zimt", it: "Cannella" }, desc: { en: "Hot cinnamon drink", ar: "مشروب قرفة ساخن", ru: "Горячий напиток с корицей", de: "Heißes Zimtgetränk", it: "Bevanda calda alla cannella" }, price: 18, image: "images/products/cinnamon.webp" },
        { name: { en: "Herbal Tea", ar: "شاي أعشاب", ru: "Травяной чай", de: "Kräutertee", it: "Tè alle erbe" }, desc: { en: "Mixed herbal tea", ar: "شاي أعشاب مشكل", ru: "Смешанный травяной чай", de: "Gemischter Kräutertee", it: "Tè alle erbe misto" }, price: 20, image: "images/products/herbal-tea.webp" }
      ]
    },
    {
      id: "iced-coffee",
      name: { en: "Iced Coffee", ar: "قهوة مثلجة", ru: "Кофе со льдом", de: "Eiskaffee", it: "Caffè Freddo" },
      image: "images/categories/iced-coffee.webp",
      products: [
        { name: { en: "Iced Latte", ar: "لاتيه مثلج", ru: "Латте со льдом", de: "Eis-Latte", it: "Latte Freddo" }, desc: { en: "Cold latte with ice", ar: "لاتيه بارد مع ثلج", ru: "Холодный латте со льдом", de: "Kalte Milchkaffee mit Eis", it: "Latte freddo con ghiaccio" }, price: 35, image: "images/products/iced-latte.webp" },
        { name: { en: "Iced Cappuccino", ar: "كابتشينو مثلج", ru: "Капучино со льдом", de: "Eis-Cappuccino", it: "Cappuccino Freddo" }, desc: { en: "Cold cappuccino", ar: "كابتشينو بارد", ru: "Холодный капучино", de: "Kalter Cappuccino", it: "Cappuccino freddo" }, price: 38, image: "images/products/iced-cappuccino.webp" },
        { name: { en: "Iced Americano", ar: "أمريكانو مثلج", ru: "Американо со льдом", de: "Eis-Americano", it: "Americano Freddo" }, desc: { en: "Cold americano", ar: "أمريكانو بارد", ru: "Холодный американо", de: "Kalter Americano", it: "Americano freddo" }, price: 30, image: "images/products/iced-americano.webp" },
        { name: { en: "Iced Mocha", ar: "موكا مثلج", ru: "Мокко со льдом", de: "Eis-Mokka", it: "Mocha Freddo" }, desc: { en: "Cold mocha coffee", ar: "قهوة موكا باردة", ru: "Холодный кофе мокко", de: "Kalter Mokka-Kaffee", it: "Caffè Mocha freddo" }, price: 40, image: "images/products/iced-mocha.webp" },
        { name: { en: "Iced Caramel Macchiato", ar: "كاراميل ماكياتو مثلج", ru: "Карамельный маккиато со льдом", de: "Eis-Karamell-Macchiato", it: "Macchiato al Caramello Freddo" }, desc: { en: "Cold caramel macchiato", ar: "كاراميل ماكياتو بارد", ru: "Холодный карамельный маккиато", de: "Kalter Karamell-Macchiato", it: "Macchiato al caramello freddo" }, price: 42, image: "images/products/iced-caramel-macchiato.webp" },
        { name: { en: "Classic Frappe", ar: "فرابيه كلاسيك", ru: "Классический фраппе", de: "Klassischer Frappé", it: "Frappé Classico" }, desc: { en: "Classic blended coffee", ar: "قهوة مخلوطة كلاسيكية", ru: "Классический кофе фраппе", de: "Klassischer Mixkaffee", it: "Caffè frullato classico" }, price: 38, image: "images/products/classic-frappe.webp" },
        { name: { en: "Mocha Frappe", ar: "فرابيه موكا", ru: "Фраппе мокко", de: "Mokka-Frappé", it: "Frappé al Mocha" }, desc: { en: "Mocha blended coffee", ar: "قهوة موكا مخلوطة", ru: "Кофе мокко фраппе", de: "Mokka-Mixkaffee", it: "Caffè frullato al mocha" }, price: 40, image: "images/products/mocha-frappe.webp" },
        { name: { en: "Caramel Ferbea", ar: "كاراميل فيربيا", ru: "Карамельная фербеа", de: "Karamell-Ferbea", it: "Ferbea al Caramello" }, desc: { en: "Caramel frozen coffee", ar: "قهوة مجمدة بالكراميل", ru: "Карамельный замороженный кофе", de: "Karamell-Gefrierkaffee", it: "Caffè congelato al caramello" }, price: 42, image: "images/products/caramel-ferbea.webp" }
      ]
    },
    {
      id: "fresh-juices",
      name: { en: "Fresh Juices", ar: "عصائر طازجة", ru: "Свежевыжатые соки", de: "Frische Säfte", it: "Succhi Freschi" },
      image: "images/categories/fresh-juices.webp",
      products: [
        { name: { en: "Orange", ar: "برتقال", ru: "Апельсин", de: "Orange", it: "Arancia" }, desc: { en: "Fresh orange juice", ar: "عصير برتقال طازج", ru: "Свежевыжатый апельсиновый сок", de: "Frischer Orangensaft", it: "Succo d'arancia fresco" }, price: 30, image: "images/products/orange.webp" },
        { name: { en: "Strawberry", ar: "فراولة", ru: "Клубника", de: "Erdbeere", it: "Fragola" }, desc: { en: "Fresh strawberry juice", ar: "عصير فراولة طازج", ru: "Свежевыжатый клубничный сок", de: "Frischer Erdbeersaft", it: "Succo di fragola fresco" }, price: 35, image: "images/products/strawberry.webp" },
        { name: { en: "Mango", ar: "مانجو", ru: "Манго", de: "Mango", it: "Mango" }, desc: { en: "Fresh mango juice", ar: "عصير مانجو طازج", ru: "Свежевыжатый сок манго", de: "Frischer Mangosaft", it: "Succo di mango fresco" }, price: 35, image: "images/products/mango.webp" },
        { name: { en: "Guava", ar: "جوافة", ru: "Гуава", de: "Guave", it: "Guava" }, desc: { en: "Fresh guava juice", ar: "عصير جوافة طازج", ru: "Свежевыжатый сок гуавы", de: "Frischer Guavensaft", it: "Succo di guava fresco" }, price: 30, image: "images/products/guava.webp" },
        { name: { en: "Guava Mint", ar: "جوافة بنعناع", ru: "Гуава с мятой", de: "Guave mit Minze", it: "Guava alla Menta" }, desc: { en: "Guava with mint", ar: "جوافة مع نعناع", ru: "Гуава с мятой", de: "Guave mit Minze", it: "Guava con menta" }, price: 32, image: "images/products/guava-mint.webp" },
        { name: { en: "Lemon", ar: "ليمون", ru: "Лимон", de: "Zitrone", it: "Limone" }, desc: { en: "Fresh lemon juice", ar: "عصير ليمون طازج", ru: "Свежевыжатый лимонный сок", de: "Frischer Zitronensaft", it: "Succo di limone fresco" }, price: 25, image: "images/products/lemon.webp" },
        { name: { en: "Lemon Mint", ar: "ليمون بنعناع", ru: "Лимон с мятой", de: "Zitrone mit Minze", it: "Limone e Menta" }, desc: { en: "Lemon juice with mint", ar: "عصير ليمون مع نعناع", ru: "Лимонный сок с мятой", de: "Zitronensaft mit Minze", it: "Succo di limone con menta" }, price: 28, image: "images/products/lemon-mint.webp" },
        { name: { en: "Watermelon", ar: "بطيخ", ru: "Арбуз", de: "Wassermelone", it: "Anguria" }, desc: { en: "Fresh watermelon juice", ar: "عصير بطيخ طازج", ru: "Свежевыжатый арбузный сок", de: "Frischer Wassermelonensaft", it: "Succo di anguria fresco" }, price: 25, image: "images/products/watermelon.webp" },
        { name: { en: "Kiwi", ar: "كيوي", ru: "Киви", de: "Kiwi", it: "Kiwi" }, desc: { en: "Fresh kiwi juice", ar: "عصير كيوي طازج", ru: "Свежевыжатый сок киви", de: "Frischer Kiwisaft", it: "Succo di kiwi fresco" }, price: 40, image: "images/products/kiwi.webp" },
        { name: { en: "Date", ar: "تمر", ru: "Финик", de: "Dattel", it: "Dattero" }, desc: { en: "Date juice", ar: "عصير تمر", ru: "Финиковый сок", de: "Dattelsaft", it: "Succo di dattero" }, price: 30, image: "images/products/date.webp" },
        { name: { en: "Banana", ar: "موز", ru: "Банан", de: "Banane", it: "Banana" }, desc: { en: "Fresh banana juice", ar: "عصير موز طازج", ru: "Свежевыжатый банановый сок", de: "Frischer Bananensaft", it: "Succo di banana fresco" }, price: 30, image: "images/products/banana.webp" }
      ]
    },
    {
      id: "yogurt",
      name: { en: "Yogurt", ar: "زبادي", ru: "Йогурт", de: "Joghurt", it: "Yogurt" },
      image: "images/categories/yogurt.webp",
      products: [
        { name: { en: "Classic Yogurt", ar: "زبادي كلاسيك", ru: "Классический йогурт", de: "Klassischer Joghurt", it: "Yogurt Classico" }, desc: { en: "Plain yogurt", ar: "زبادي عادي", ru: "Обычный йогурт", de: "Naturjoghurt", it: "Yogurt bianco" }, price: 35, image: "images/products/classic-yogurt.webp" },
        { name: { en: "Honey Yogurt", ar: "زبادي بالعسل", ru: "Йогурт с медом", de: "Joghurt mit Honig", it: "Yogurt al Miele" }, desc: { en: "Yogurt with honey", ar: "زبادي مع عسل", ru: "Йогурт с медом", de: "Joghurt mit Honig", it: "Yogurt con miele" }, price: 40, image: "images/products/honey-yogurt.webp" },
        { name: { en: "Mango Yogurt", ar: "زبادي مانجو", ru: "Манговый йогурт", de: "Mango-Joghurt", it: "Yogurt al Mango" }, desc: { en: "Yogurt with mango", ar: "زبادي مع مانجو", ru: "Йогурт с манго", de: "Joghurt mit Mango", it: "Yogurt con mango" }, price: 45, image: "images/products/mango-yogurt.webp" },
        { name: { en: "Strawberry Yogurt", ar: "زبادي فراولة", ru: "Клубничный йогурт", de: "Erdbeer-Joghurt", it: "Yogurt alla Fragola" }, desc: { en: "Yogurt with strawberry", ar: "زبادي مع فراولة", ru: "Йогурт с клубникой", de: "Joghurt mit Erdbeeren", it: "Yogurt con fragola" }, price: 45, image: "images/products/strawberry-yogurt.webp" },
        { name: { en: "Yogurt Mix", ar: "مزيج زبادي", ru: "Смешанный йогурт", de: "Joghurt-Mix", it: "Mix di Yogurt" }, desc: { en: "Mango, strawberry & banana", ar: "مانجو وفراولة وموز", ru: "Манго, клубника, банан", de: "Mango, Erdbeere & Banane", it: "Mango, fragola e banana" }, price: 50, image: "images/products/yogurt-mix.webp" },
        { name: { en: "Blueberry Yogurt", ar: "زبادي توت أزرق", ru: "Черничный йогурт", de: "Blaubeer-Joghurt", it: "Yogurt ai Mirtilli" }, desc: { en: "Yogurt with blueberry", ar: "زبادي مع توت أزرق", ru: "Йогурт с черникой", de: "Joghurt mit Blaubeeren", it: "Yogurt con mirtilli" }, price: 50, image: "images/products/blueberry-yogurt.webp" }
      ]
    },
    {
      id: "cocktails",
      name: { en: "Cocktails", ar: "كوكتيل", ru: "Коктейли", de: "Cocktails", it: "Cocktail" },
      image: "images/categories/cocktail.webp",
      products: [
        { name: { en: "Florida", ar: "فلوريدا", ru: "Флорида", de: "Florida", it: "Florida" }, desc: { en: "Mango + Strawberry + Guava", ar: "مانجو + فراولة + جوافة", ru: "Манго + клубника + гуава", de: "Mango + Erdbeere + Guave", it: "Mango + Fragola + Guava" }, price: 55, image: "images/products/florida.webp" },
        { name: { en: "Lady Blue", ar: "ليدي بلو", ru: "Леди Блю", de: "Lady Blue", it: "Lady Blue" }, desc: { en: "Watermelon + Strawberry + Banana + Blueberry", ar: "بطيخ + فراولة + موز + توت أزرق", ru: "Арбуз + клубника + банан + черника", de: "Wassermelone + Erdbeere + Banane + Blaubeere", it: "Anguria + Fragola + Banana + Mirtillo" }, price: 60, image: "images/products/lady-blue.webp" },
        { name: { en: "Pour the Avocado", ar: "بور ذا أفوكادو", ru: "Авокадо микс", de: "Avocado-Mix", it: "Mix di Avocado" }, desc: { en: "Avocado + banana + dates + ice cream", ar: "أفوكادو + موز + تمر + آيس كريم", ru: "Авокадо + банан + финики + мороженое", de: "Avocado + Banane + Datteln + Eis", it: "Avocado + banana + datteri + gelato" }, price: 65, image: "images/products/avocado.webp" },
        { name: { en: "Signature Blend", ar: "سيغنتشر بليند", ru: "Авторский микс", de: "Signature Blend", it: "Miscela Signature" }, desc: { en: "Banana + Guava + Vanilla Ice Cream + Fresh Mint", ar: "موز + جوافة + آيس كريم فانيليا + نعناع طازج", ru: "Банан + гуава + ванильное мороженое + свежая мята", de: "Banane + Guave + Vanilleeis + frische Minze", it: "Banana + Guava + Gelato alla vaniglia + Menta fresca" }, price: 65, image: "images/products/signature-blend.webp" },
        { name: { en: "Hawaii", ar: "هاواي", ru: "Гавайи", de: "Hawaii", it: "Hawaii" }, desc: { en: "Kiwi + Mango + Vanilla Ice Cream", ar: "كيوي + مانجو + آيس كريم فانيليا", ru: "Киви + манго + ванильное мороженое", de: "Kiwi + Mango + Vanilleeis", it: "Kiwi + Mango + Gelato alla vaniglia" }, price: 60, image: "images/products/hawaii.webp" },
        { name: { en: "Mojito", ar: "موخيتو", ru: "Мохито", de: "Mojito", it: "Mojito" }, desc: { en: "Mojito (non-alcoholic)", ar: "موخيتو (غير كحولي)", ru: "Мохито (безалкогольный)", de: "Mojito (alkoholfrei)", it: "Mojito (analcolico)" }, price: 45, image: "images/products/mojito.webp" },
        { name: { en: "Scotch Mint", ar: "سكوتش منت", ru: "Скотч минт", de: "Scotch Mint", it: "Scotch Mint" }, desc: { en: "Minty cocktail", ar: "كوكتيل بالنعناع", ru: "Мятный коктейль", de: "Minziger Cocktail", it: "Cocktail alla menta" }, price: 45, image: "images/products/scotch-mint.webp" },
        { name: { en: "Sunshine", ar: "سانشاين", ru: "Саншайн", de: "Sunshine", it: "Sunshine" }, desc: { en: "Sunshine fruit blend", ar: "مزيج فواكه مشمس", ru: "Солнечный фруктовый микс", de: "Sunshine-Fruchtmix", it: "Miscela di frutta Sunshine" }, price: 50, image: "images/products/sunshine.webp" }
      ]
    },
    {
      id: "milkshakes",
      name: { en: "Milkshakes", ar: "ميلك شيك", ru: "Молочные коктейли", de: "Milchshakes", it: "Frullati" },
      image: "images/categories/milkshakes.webp",
      products: [
        { name: { en: "Vanilla Milkshake", ar: "ميلك شيك فانيليا", ru: "Ванильный молочный коктейль", de: "Vanille-Milchshake", it: "Frullato alla Vaniglia" }, desc: { en: "Vanilla milkshake", ar: "ميلك شيك فانيليا", ru: "Ванильный молочный коктейль", de: "Vanille-Milchshake", it: "Frullato alla vaniglia" }, price: 40, image: "images/products/vanilla-milkshake.webp" },
        { name: { en: "Mango Milkshake", ar: "ميلك شيك مانجو", ru: "Манговый молочный коктейль", de: "Mango-Milchshake", it: "Frullato al Mango" }, desc: { en: "Mango milkshake", ar: "ميلك شيك مانجو", ru: "Манговый молочный коктейль", de: "Mango-Milchshake", it: "Frullato al mango" }, price: 45, image: "images/products/mango-milkshake.webp" },
        { name: { en: "Strawberry Milkshake", ar: "ميلك شيك فراولة", ru: "Клубничный молочный коктейль", de: "Erdbeer-Milchshake", it: "Frullato alla Fragola" }, desc: { en: "Strawberry milkshake", ar: "ميلك شيك فراولة", ru: "Клубничный молочный коктейль", de: "Erdbeer-Milchshake", it: "Frullato alla fragola" }, price: 45, image: "images/products/strawberry-milkshake.webp" },
        { name: { en: "Oreo Milkshake", ar: "ميلك شيك أوريو", ru: "Молочный коктейль с Oreo", de: "Oreo-Milchshake", it: "Frullato all'Oreo" }, desc: { en: "Oreo milkshake", ar: "ميلك شيك أوريو", ru: "Молочный коктейль с Oreo", de: "Oreo-Milchshake", it: "Frullato all'Oreo" }, price: 50, image: "images/products/oreo-milkshake.webp" },
        { name: { en: "Caramel Milkshake", ar: "ميلك شيك كراميل", ru: "Карамельный молочный коктейль", de: "Karamell-Milchshake", it: "Frullato al Caramello" }, desc: { en: "Caramel milkshake", ar: "ميلك شيك كراميل", ru: "Карамельный молочный коктейль", de: "Karamell-Milchshake", it: "Frullato al caramello" }, price: 48, image: "images/products/caramel-milkshake.webp" },
        { name: { en: "Lotus Milkshake", ar: "ميلك شيك لوتس", ru: "Молочный коктейль Lotus", de: "Lotus-Milchshake", it: "Frullato al Lotus" }, desc: { en: "Lotus biscoff milkshake", ar: "ميلك شيك لوتس بيسكوف", ru: "Молочный коктейль Lotus Biscoff", de: "Lotus Biscoff Milchshake", it: "Frullato Lotus Biscoff" }, price: 50, image: "images/products/lotus-milkshake.webp" }
      ]
    },
    {
      id: "soft-drinks",
      name: { en: "Soft Drinks", ar: "مشروبات غازية", ru: "Безалкогольные напитки", de: "Erfrischungsgetränke", it: "Bevande Analcoliche" },
      image: "images/categories/soft-drinks.png",
      products: [
        { name: { en: "Sprite", ar: "سبرايت", ru: "Спрайт", de: "Sprite", it: "Sprite" }, desc: { en: "Lemon-lime soda", ar: "صودا ليمون-لايم", ru: "Газировка с лимоном и лаймом", de: "Zitronen-Limetten-Limonade", it: "Gassosa al limone e lime" }, price: 15, image: "images/products/sprite.webp" },
        { name: { en: "Seven Up", ar: "سيفن أب", ru: "Севен Ап", de: "Seven Up", it: "Seven Up" }, desc: { en: "Lemon-lime soda", ar: "صودا ليمون-لايم", ru: "Газировка с лимоном и лаймом", de: "Zitronen-Limetten-Limonade", it: "Gassosa al limone e lime" }, price: 15, image: "images/products/sevenup.webp" },
        { name: { en: "Pepsi", ar: "بيبسي", ru: "Пепси", de: "Pepsi", it: "Pepsi" }, desc: { en: "Pepsi cola", ar: "بيبسي كولا", ru: "Пепси кола", de: "Pepsi Cola", it: "Pepsi Cola" }, price: 15, image: "images/products/pepsi.webp" },
        { name: { en: "Fayrouz", ar: "فيروز", ru: "Файруз", de: "Fayrouz", it: "Fayrouz" }, desc: { en: "Fayrouz non-alcoholic malt drink", ar: "مشروب مالت غير كحولي فيروز", ru: "Безалкогольный солодовый напиток", de: "Fayrouz alkoholfreies Malzgetränk", it: "Bevanda al malto analcolica Fayrouz" }, price: 18, image: "images/products/fayrouz.webp" },
        { name: { en: "Diet Pepsi", ar: "بيبسي دايت", ru: "Пепси лайт", de: "Diet Pepsi", it: "Pepsi Diet" }, desc: { en: "Diet Pepsi cola", ar: "بيبسي دايت", ru: "Диетическая пепси", de: "Diät-Pepsi Cola", it: "Pepsi Cola dietetica" }, price: 15, image: "images/products/diet-pepsi.webp" },
        { name: { en: "Birell", ar: "بيريل", ru: "Бирелль", de: "Birell", it: "Birell" }, desc: { en: "Non-alcoholic beer", ar: "بيرة غير كحولية", ru: "Безалкогольное пиво", de: "Alkoholfreies Bier", it: "Birra analcolica" }, price: 20, image: "images/products/birell.webp" },
        { name: { en: "Coca-Cola", ar: "كوكاكولا", ru: "Кока-кола", de: "Coca-Cola", it: "Coca-Cola" }, desc: { en: "Coca-Cola", ar: "كوكاكولا", ru: "Кока-кола", de: "Coca-Cola", it: "Coca-Cola" }, price: 15, image: "images/products/cocacola.webp" },
        { name: { en: "Coca-Cola Zero", ar: "كوكاكولا زيرو", ru: "Кока-кола зеро", de: "Coca-Cola Zero", it: "Coca-Cola Zero" }, desc: { en: "Zero sugar Coca-Cola", ar: "كوكاكولا بدون سكر", ru: "Кока-кола без сахара", de: "Coca-Cola ohne Zucker", it: "Coca-Cola senza zucchero" }, price: 15, image: "images/products/cocacola-zero.webp" },
        { name: { en: "Soda", ar: "صودا", ru: "Содовая", de: "Soda", it: "Soda" }, desc: { en: "Plain soda water", ar: "ماء صودا عادي", ru: "Обычная газированная вода", de: "Einfaches Sodawasser", it: "Acqua di soda naturale" }, price: 10, image: "images/products/soda.webp" },
        { name: { en: "Tonic", ar: "تونيك", ru: "Тоник", de: "Tonic", it: "Tonico" }, desc: { en: "Tonic water", ar: "ماء تونيك", ru: "Тонизирующая вода", de: "Tonic Water", it: "Acqua tonica" }, price: 12, image: "images/products/tonic.webp" },
        { name: { en: "Small Bottled Water", ar: "ماء زجاجة صغيرة", ru: "Маленькая бутылка воды", de: "Kleine Flasche Wasser", it: "Acqua in Bottiglia Piccola" }, desc: { en: "Small water bottle", ar: "زجاجة ماء صغيرة", ru: "Маленькая бутылка воды", de: "Kleine Wasserflasche", it: "Bottiglietta d'acqua" }, price: 8, image: "images/products/water-small.webp" },
        { name: { en: "Large Bottled Water", ar: "ماء زجاجة كبيرة", ru: "Большая бутылка воды", de: "Große Flasche Wasser", it: "Acqua in Bottiglia Grande" }, desc: { en: "Large water bottle", ar: "زجاجة ماء كبيرة", ru: "Большая бутылка воды", de: "Große Wasserflasche", it: "Bottiglia grande d'acqua" }, price: 12, image: "images/products/water-large.webp" }
      ]
    },
    {
      id: "desserts-icecream",
      name: { en: "Desserts & Ice Cream", ar: "حلويات ومثلجات", ru: "Десерты и мороженое", de: "Desserts & Eis", it: "Dessert e Gelato" },
      image: "images/categories/desserts.webp",
      products: [
        { name: { en: "Molten Cake", ar: "مولتن كيك", ru: "Шоколадный фондан", de: "Schmelzkuchen", it: "Torta al Cioccolato Fuso" }, desc: { en: "Warm chocolate cake", ar: "كيك شوكولاتة ساخن", ru: "Теплый шоколадный кекс", de: "Warmer Schokoladenkuchen", it: "Torta al cioccolato calda" }, price: 70, image: "images/products/molten.webp" },
        { name: { en: "Brownies", ar: "براونيز", ru: "Брауни", de: "Brownies", it: "Brownies" }, desc: { en: "Rich chocolate brownie", ar: "براونيز شوكولاتة غني", ru: "Насыщенный шоколадный брауни", de: "Reichhaltiger Schokoladen-Brownie", it: "Brownie al cioccolato ricco" }, price: 65, image: "images/products/brownies.webp" },
        { name: { en: "Kurawasu", ar: "كوراواسو", ru: "Куравасу", de: "Kurawasu", it: "Kurawasu" }, desc: { en: "Japanese dessert", ar: "حلوى يابانية", ru: "Японский десерт", de: "Japanisches Dessert", it: "Dessert giapponese" }, price: 60, image: "images/products/kurawasu.webp" },
        { name: { en: "Sweet Kurosu", ar: "سويت كوروسو", ru: "Сладкий куросу", de: "Süßer Kurosu", it: "Kurosu Dolce" }, desc: { en: "Sweet dessert", ar: "حلوى حلوة", ru: "Сладкий десерт", de: "Süßes Dessert", it: "Dessert dolce" }, price: 60, image: "images/products/sweet-kurosu.webp" },
        { name: { en: "Chocolate Ice Cream (3 scoops)", ar: "آيس كريم شوكولاتة (3 مغارف)", ru: "Шоколадное мороженое (3 шарика)", de: "Schokoladeneis (3 Kugeln)", it: "Gelato al Cioccolato (3 palline)" }, desc: { en: "3 scoops of chocolate ice cream", ar: "3 مغارف من آيس كريم الشوكولاتة", ru: "3 шарика шоколадного мороженого", de: "3 Kugeln Schokoladeneis", it: "3 palline di gelato al cioccolato" }, price: 50, image: "images/products/chocolate-icecream.webp" },
        { name: { en: "Mixed Ice Cream", ar: "آيس كريم مشكل", ru: "Ассорти мороженого", de: "Gemischtes Eis", it: "Gelato Misto" }, desc: { en: "Mixed flavors", ar: "نكهات مشكلة", ru: "Смешанные вкусы", de: "Gemischte Sorten", it: "Gusti misti" }, price: 45, image: "images/products/mixed-icecream.webp" },
        { name: { en: "1 Scoop Ice Cream", ar: "مغرفة آيس كريم", ru: "1 шарик мороженого", de: "1 Kugel Eis", it: "1 Pallina di Gelato" }, desc: { en: "Vanilla, Strawberry, Mango or Chocolate", ar: "فانيليا، فراولة، مانجو أو شوكولاتة", ru: "Ваниль, клубника, манго или шоколад", de: "Vanille, Erdbeere, Mango oder Schokolade", it: "Vaniglia, Fragola, Mango o Cioccolato" }, price: 25, image: "images/products/one-scoop.webp" },
        { name: { en: "2 Scoops Ice Cream", ar: "مغرفتان آيس كريم", ru: "2 шарика мороженого", de: "2 Kugeln Eis", it: "2 Palline di Gelato" }, desc: { en: "Vanilla, Strawberry, Mango or Chocolate", ar: "فانيليا، فراولة، مانجو أو شوكولاتة", ru: "Ваниль, клубника, манго или шоколад", de: "Vanille, Erdbeere, Mango oder Schokolade", it: "Vaniglia, Fragola, Mango o Cioccolato" }, price: 40, image: "images/products/two-scoops.webp" },
        { name: { en: "3 Scoops Ice Cream", ar: "ثلاث مغارف آيس كريم", ru: "3 шарика мороженого", de: "3 Kugeln Eis", it: "3 Palline di Gelato" }, desc: { en: "Vanilla, Strawberry, Mango or Chocolate", ar: "فانيليا، فراولة، مانجو أو شوكولاتة", ru: "Ваниль, клубника, манго или шоколад", de: "Vanille, Erdbeere, Mango oder Schokolade", it: "Vaniglia, Fragola, Mango o Cioccolato" }, price: 50, image: "images/products/three-scoops.webp" },
        { name: { en: "Oreo Lotus Ice Cream", ar: "آيس كريم أوريو ولوتس", ru: "Мороженое Oreo и Lotus", de: "Oreo Lotus Eis", it: "Gelato Oreo Lotus" }, desc: { en: "Oreo + Lotus + Chocolate", ar: "أوريو + لوتس + شوكولاتة", ru: "Oreo + Lotus + шоколад", de: "Oreo + Lotus + Schokolade", it: "Oreo + Lotus + Cioccolato" }, price: 55, image: "images/products/oreo-lotus.webp" }
      ]
    },
    {
      id: "goodbuns",
      name: { en: "SHAMS Technology", ar: "شمس تكنولوجي", ru: "Shams Технолоджи", de: "SHAMS Technologie", it: "SHAMS Tecnologia" },
      image: "images/categories/shams-cafe.png",
      products: [
        {
          name: { en: "Caramello", ar: "كاراميلو", ru: "Карамелло", de: "Caramello", it: "Caramello" },
          desc: { en: "Caramello 330 ml - Caramel flavored coffee drink", ar: "كاراميلو 330 مل - مشروب قهوة بنكهة الكراميل", ru: "Карамелло 330 мл - кофейный напиток со вкусом карамели", de: "Caramello 330 ml - Kaffeegetränk mit Karamellgeschmack", it: "Caramello 330 ml - bevanda al caffè aromatizzata al caramello" },
          price: 270,
          image: "images/products/caramello.webp"
        },
        {
          name: { en: "Mochaccino", ar: "موكاشينو", ru: "Моккачино", de: "Mochaccino", it: "Mochaccino" },
          desc: { en: "Mochaccino 330 ml - Mocha cappuccino drink", ar: "موكاشينو 330 مل - مشروب كابتشينو الموكا", ru: "Моккачино 330 мл - напиток мокка капучино", de: "Mochaccino 330 ml - Mokka-Cappuccino-Getränk", it: "Mochaccino 330 ml - bevanda cappuccino al moka" },
          price: 270,
          image: "images/products/mochaccino.webp"
        },
        {
          name: { en: "Noir Cream", ar: "نوار كريم", ru: "Нуар Крем", de: "Noir Cream", it: "Noir Cream" },
          desc: { en: "Noir Cream 330 ml - Dark chocolate cream coffee", ar: "نوار كريم 330 مل - قهوة كريمة الشوكولاتة الداكنة", ru: "Нуар Крем 330 мл - кофе с темным шоколадным кремом", de: "Noir Cream 330 ml - Kaffee mit dunkler Schokoladencreme", it: "Noir Cream 330 ml - caffè con crema al cioccolato fondente" },
          price: 280,
          image: "images/products/noir-cream.webp"
        },
        {
          name: { en: "Cappuccino Pini", ar: "كابوتشينو بيني", ru: "Капучино Пини", de: "Cappuccino Pini", it: "Cappuccino Pini" },
          desc: { en: "Cappuccino Pini 330 ml - Creamy cappuccino", ar: "كابوتشينو بيني 330 مل - كابتشينو كريمي", ru: "Капучино Пини 330 мл - сливочный капучино", de: "Cappuccino Pini 330 ml - Cremiger Cappuccino", it: "Cappuccino Pini 330 ml - cappuccino cremoso" },
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

function getBackText() {
  const texts = {
    en: "⬅ Back",
    ar: "رجوع ➡",
    ru: "⬅ Назад",
    de: "⬅ Zurück",
    it: "⬅ Indietro"
  };
  return texts[currentLang];
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
    ru: "Связаться с нами",
    de: "Kontakt",
    it: "Contattaci"
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
    },
    de: {
      title: "Kontakt",
      address: "Hurghada - El Kawther (Inter)",
      back: "⬅ Zurück"
    },
    it: {
      title: "Contattaci",
      address: "Hurghada - El Kawther (Inter)",
      back: "⬅ Indietro"
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
        <a href="https://www.facebook.com/Shams.coffee.hub" target="_blank">
          <i class="fa-brands fa-facebook"></i> Facebook
        </a>
        <a href="mailto:khedrabdelbasetkhedr@gmail.com">
          <i class="fa-solid fa-envelope"></i> Email
        </a>
      </div>
    </div>
  `;
}

function openCategory(id) {
  const cat = data.categories.find(c => c.id === id);
  currentCategory = cat;
  history.pushState({ categoryId: id }, "", "#" + id);

  app.innerHTML = `
    <div class="back-btn" onclick="renderHome()">${getBackText()}</div>
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

const siteTitle = document.getElementById("siteTitle");

function updateHeader() {
  const titles = {
    en: "SHAMS Coffee Hub",
    ar: "شمس كوفي هاب",
    ru: "SHAMS Coffee Hub",
    de: "SHAMS Coffee Hub",
    it: "SHAMS Coffee Hub"
  };
  siteTitle.innerText = titles[currentLang];
}

function updateFooter() {
  const text = {
    en: "SHAMS Coffee Hub — Brewed with passion ☕",
    ar: "شمس كوفي هاب — قهوة تُحضَّر بشغف ☕",
    ru: "SHAMS Coffee Hub — сварено с любовью ☕",
    de: "SHAMS Coffee Hub — Mit Leidenschaft gebrüht ☕",
    it: "SHAMS Coffee Hub — Preparato con passione ☕"
  };
  footer.innerText = text[currentLang];
}

// Add German and Italian options to language switcher dynamically
function initLanguageSwitcher() {
  const switcher = document.getElementById("languageSwitcher");
  if (switcher) {
    const existingValues = Array.from(switcher.options).map(opt => opt.value);
    if (!existingValues.includes("de")) {
      const deOption = document.createElement("option");
      deOption.value = "de";
      deOption.textContent = "Deutsch";
      switcher.appendChild(deOption);
    }
    if (!existingValues.includes("it")) {
      const itOption = document.createElement("option");
      itOption.value = "it";
      itOption.textContent = "Italiano";
      switcher.appendChild(itOption);
    }
    switcher.value = currentLang;
  }
}

document.getElementById("languageSwitcher").addEventListener("change", (e) => {
  currentLang = e.target.value;
  document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
  updateHeader();
  updateFooter();
  if (currentCategory) openCategory(currentCategory.id);
  else renderHome();
});

initLanguageSwitcher();
renderHome();
updateHeader();
updateFooter();