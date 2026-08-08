const CATEGORY_DATA = [
  { id: "bel-ve-boyun", title: "Bel ve Boyun", icon: "activity" },
  { id: "diz", title: "Diz", icon: "activity" },
  { id: "omuz-ve-kol", title: "Omuz ve Kol", icon: "activity" },
  { id: "ayak-ve-ayak-bilegi", title: "Ayak ve Ayak Bileği", icon: "activity" },
  { id: "omurga-ve-postur", title: "Omurga ve Postür", icon: "activity" },
  { id: "norolojik-rehabilitasyon", title: "Nörolojik Rehabilitasyon", icon: "activity" },
  { id: "spor-yaralanmalari", title: "Spor Yaralanmaları", icon: "activity" },
  { id: "romatolojik-problemler", title: "Romatolojik Problemler", icon: "activity" }
];

const DISEASE_DATA = [
  // ----------------------------------------------------
  // 1. BEL VE BOYUN (bel-ve-boyun)
  // ----------------------------------------------------
  {
    slug: "bel-fitigi",
    title: "Bel Fıtığı",
    category: "bel-ve-boyun",
    categoryTitle: "Bel ve Boyun",
    icon: "activity",
    metaTitle: "Bel Fıtığı Fizyoterapi | Aksaray - Ata Fizyoterapi",
    metaDescription: "Aksaray'da bel fıtığı fizyoterapi yaklaşımları. Kişiye özel değerlendirme ve egzersiz programları ile ağrılarınızı hafifletmeyi amaçlıyoruz.",
    heroDescription: "Bel bölgesindeki disklerin yapısının bozularak sinirlere baskı yapması durumudur.",
    nedir: "Bel fıtığı (Lomber Disk Hernisi), omurga kemikleri (omurlar) arasında yastıkçık görevi gören disklerin dış tabakasının yırtılarak, içindeki jölemsi maddenin dışarı taşmasıdır. Bu taşan kısım, omurilikten çıkan sinirlere baskı uygulayarak ağrı ve uyuşma gibi şikayetlere neden olabilir.",
    belirtileri: [
      "Belden kalçaya ve bacağa yayılan ağrı",
      "Bacak veya ayakta uyuşma, karıncalanma",
      "Kas zayıflığı veya güç kaybı",
      "Otururken, eğilirken veya öksürürken artan ağrı"
    ],
    nedenleri: [
      "Ağır yük kaldırma veya ters hareket yapma",
      "Aşırı kilo ve obezite",
      "Hareketsiz yaşam tarzı ve zayıf kas yapısı",
      "Yaşlanmaya bağlı olarak disklerde sıvı kaybı"
    ],
    fizyoterapiNasilYardimci: "Fizyoterapi süreci, bel çevresi kaslarını güçlendirerek omurgaya binen yükü azaltmayı hedefler. Aksaray Ata Fizyoterapi'de uygulanan kişiye özel yöntemlerle sinir üzerindeki baskının hafifletilmesi ve günlük yaşama daha rahat dönmeniz desteklenir.",
    tedaviYontemleri: [
      { name: "Manuel Terapi", description: "Eklemlerin ve dokuların hareketliliğini artırmak amacıyla uygulanan özel el teknikleridir." },
      { name: "Terapötik Egzersiz", description: "Bel, karın ve sırt kaslarını güçlendirerek omurga stabilitesini sağlamayı amaçlar." },
      { name: "Sıcak/Soğuk Uygulamalar", description: "Ağrıyı hafifletmek ve kas spazmlarını azaltmak için tercih edilebilir." },
      { name: "Kinesiyolojik Bantlama", description: "Bölgedeki kas yapılarını desteklemek amacıyla kullanılan bantlama yöntemidir." }
    ],
    tedaviSureci: "Detaylı bir değerlendirme sonrasında bireyin mevcut durumuna göre bir yol haritası çizilir. Uygulanan program, düzenli seanslar ve hastaya özel ev egzersizleri ile desteklenerek yaşam kalitesinin artırılmasına yardımcı olur.",
    sss: [
      { soru: "Bel fıtığı için ameliyat her zaman şart mıdır?", cevap: "Hayır. Vakaların büyük bir çoğunluğunda fizyoterapi ve koruyucu yaklaşımlarla belirtilerin hafifletilmesi hedeflenir." },
      { soru: "Fizyoterapi sürecinde ağrı hisseder miyim?", cevap: "Uygulamalar kişinin tolerans sınırları içinde yapılır, ağrı oluşturmak değil, mevcut ağrıyı azaltmak amaçlanır." },
      { soru: "Aksaray Ata Fizyoterapi'de değerlendirme ne kadar sürer?", cevap: "İlk değerlendirme genellikle 45-60 dakika civarında sürer ve size en uygun yaklaşım planlanır." }
    ]
  },
  {
    slug: "boyun-fitigi",
    title: "Boyun Fıtığı",
    category: "bel-ve-boyun",
    categoryTitle: "Bel ve Boyun",
    icon: "activity",
    metaTitle: "Boyun Fıtığı Fizyoterapi | Aksaray - Ata Fizyoterapi",
    metaDescription: "Aksaray'da boyun fıtığına yönelik kişiye özel fizyoterapi ve egzersiz programları. Boyun ve kol ağrılarınızı hafifletmek için yanınızdayız.",
    heroDescription: "Boyun omurları arasındaki disklerin zayıflayarak sinirlere baskı yapmasıyla oluşan rahatsızlıktır.",
    nedir: "Boyun fıtığı (Servikal Disk Hernisi), boyun bölgesindeki omurlar arasında bulunan disklerin dış yapısının yırtılması sonucu iç kısmın taşmasıdır. Bu taşma, kollara giden sinirlere veya omuriliğe baskı yaparak boyun, omuz ve kollarda çeşitli şikayetler ortaya çıkarabilir.",
    belirtileri: [
      "Boyun, omuz, kol veya ellere yayılan ağrı",
      "Kollarda ve ellerde uyuşma, karıncalanma",
      "El becerilerinde azalma veya kas zayıflığı",
      "Boyun hareketlerinde kısıtlılık"
    ],
    nedenleri: [
      "Uzun süre masa başında veya bilgisayar karşısında yanlış postürde çalışmak",
      "Boyun bölgesine alınan travmalar veya ani hareketler",
      "Yaşla birlikte omurga yapısında meydana gelen doğal dejenerasyon",
      "Sürekli telefonu başı öne eğerek kullanma alışkanlığı"
    ],
    fizyoterapiNasilYardimci: "Boyun fıtığında fizyoterapinin amacı, boyun çevresindeki kasları kuvvetlendirerek boyun stabilitesini artırmak ve postürü düzenlemektir. Aksaray Ata Fizyoterapi'de, sinir üzerindeki baskıyı hafifletmeye yardımcı olan yaklaşımlarla yaşam konforunuz hedeflenir.",
    tedaviYontemleri: [
      { name: "Eklem Mobilizasyonu", description: "Boyun eklemlerindeki kısıtlılıkları azaltmayı amaçlayan manuel tekniklerdir." },
      { name: "Postür Eğitimi", description: "Günlük yaşamda boyna binen yükü azaltmak için doğru duruş alışkanlıklarının kazandırılması." },
      { name: "Germe Egzersizleri", description: "Gerginleşen boyun ve omuz kaslarının esnekliğini artırmak için uygulanır." },
      { name: "IKN (Integrated Kinetic Neurology)", description: "Sinir sisteminin rahatlamasını ve nörolojik fonksiyonların desteklenmesini amaçlayan nörolojik rehabilitasyon tekniğidir." }
    ],
    tedaviSureci: "Kişinin günlük yaşam alışkanlıkları ve çalışma ortamı değerlendirilerek sürece başlanır. Manuel yaklaşımlar ve spesifik egzersizler birleştirilir, kişinin aktif katılımıyla iyileşme süreci yönetilir.",
    sss: [
      { soru: "Boyun fıtığı baş ağrısı yapar mı?", cevap: "Evet, boyun bölgesindeki kas gerginlikleri ve sinir baskıları kaynaklı gerilim tipi baş ağrılarına yol açabilir." },
      { soru: "Masa başı çalışanlar nelere dikkat etmeli?", cevap: "Ekran göz hizasında olmalı, sık sık mola verilmeli ve boyun kaslarını esnetici egzersizler yapılmalıdır." },
      { soru: "Aksaray'da boyun fıtığı seansları nasıl planlanıyor?", cevap: "Detaylı ön değerlendirme ile sizin durumunuza en uygun periyot belirlenir ve süreç birebir takip edilir." }
    ]
  },
  {
    slug: "bel-agrisi",
    title: "Bel Ağrısı",
    category: "bel-ve-boyun",
    categoryTitle: "Bel ve Boyun",
    icon: "activity",
    metaTitle: "Bel Ağrısı Fizyoterapi ve Egzersiz | Aksaray Ata Fizyoterapi",
    metaDescription: "Aksaray'da kronik veya akut bel ağrısı şikayetleri için kişiye özel fizyoterapi yaklaşımları. Sağlıklı bir omurga için destekliyoruz.",
    heroDescription: "Çeşitli kas, bağ veya eklem problemleri nedeniyle bel bölgesinde hissedilen rahatsızlıktır.",
    nedir: "Bel ağrısı, günümüzde en sık karşılaşılan kas-iskelet sistemi problemlerinden biridir. Sıklıkla kas zorlanmaları, bağ zedelenmeleri veya omurga yapısındaki mekanik problemlerden kaynaklanır. Çoğu zaman fıtık gibi spesifik bir nedene bağlı olmaksızın, duruş bozukluğu veya yorgunluk kökenli olabilir.",
    belirtileri: [
      "Bel bölgesinde künt veya keskin ağrı",
      "Sabahları belde tutukluk veya sertlik hissi",
      "Uzun süre ayakta kalma veya oturma ile artan rahatsızlık",
      "Hareket ederken kas spazmları oluşması"
    ],
    nedenleri: [
      "Duruş (postür) bozuklukları",
      "Ağır yük kaldırma ve ani hareketler",
      "Uzun süreli hareketsizlik veya stres",
      "Zayıf karın ve sırt kasları"
    ],
    fizyoterapiNasilYardimci: "Fizyoterapi, ağrıyı oluşturan mekanik nedeni bulmaya odaklanır. Kas dengesizliklerini gidermek, core (merkez) bölgesini güçlendirmek ve yanlış postür alışkanlıklarını düzeltmek hedeflenir. Aksaray'daki merkezimizde, yaşam kalitenizi artırmaya yönelik özel programlar uygulanmaktadır.",
    tedaviYontemleri: [
      { name: "Stabilizasyon Egzersizleri", description: "Bel ve karın kaslarını güçlendirerek omurganın dayanıklılığını artırır." },
      { name: "Miyofasyal Gevşetme", description: "Kas ve fasya dokusundaki gerginlikleri azaltmak için kullanılan manuel doku tekniğidir." },
      { name: "Kupa Terapi", description: "Kan dolaşımını artırarak kas spazmlarını hafifletmeyi destekleyebilir." },
      { name: "Kuvvetlendirme Egzersizleri", description: "Vücudun ağırlık merkezini destekleyen kasları aktif hale getirir." }
    ],
    tedaviSureci: "Akut dönemde ağrıyı hafifletici yaklaşımlar ön plandayken, ağrının kontrol altına alınmasıyla birlikte kuvvetlendirme ve koruyucu egzersizlere geçiş yapılır. Amaç, bel ağrısının tekrarlamasını önlemektir.",
    sss: [
      { soru: "Belim ağrırken hareket etmeli miyim?", cevap: "Uzun süreli yatak istirahati genellikle önerilmez. Ağrı sınırları içinde hafif hareketlilik iyileşmeyi destekleyebilir." },
      { soru: "Stres bel ağrısı yapar mı?", cevap: "Evet, stres kaslarda gerginliğe yol açarak mekanik bel ağrılarını tetikleyebilir." },
      { soru: "Evde yapabileceğim egzersizler var mı?", cevap: "Fizyoterapistiniz tarafından size özel verilen ev programını düzenli uygulamak sürecin önemli bir parçasıdır." }
    ]
  },
  {
    slug: "boyun-agrisi",
    title: "Boyun Ağrısı",
    category: "bel-ve-boyun",
    categoryTitle: "Bel ve Boyun",
    icon: "activity",
    metaTitle: "Boyun Ağrısı Çözümleri | Aksaray Fizyoterapi - Ata Fizyoterapi",
    metaDescription: "Boyun tutulması, gerginlik ve ağrı problemlerinde Aksaray Ata Fizyoterapi yanınızda. Postür analizi ve doğru egzersizlerle rahatlayın.",
    heroDescription: "Boyun kaslarındaki gerginlikler veya eklem problemleri sebebiyle oluşan rahatsızlık durumudur.",
    nedir: "Boyun ağrısı, modern yaşamın getirdiği hareketsizlik, stres ve yoğun teknoloji kullanımı gibi nedenlerle kasların aşırı yorulması veya zedelenmesi sonucu ortaya çıkar. Genellikle kas spazmları, bağ zorlanmaları veya eklem hareketlerindeki kısıtlılıklardan kaynaklanır.",
    belirtileri: [
      "Boyun ve omuz çevresinde sertlik, gerginlik",
      "Baş dönmesi veya gerilim tipi baş ağrıları",
      "Boynu sağa, sola veya geriye hareket ettirmede zorluk",
      "Kulak çınlaması (bazen kas gerginliğine eşlik edebilir)"
    ],
    nedenleri: [
      "Kötü çalışma ergonomisi ve uzun süreli masa başı işler",
      "Akıllı telefon kullanımında başın sürekli öne eğik tutulması (Text Neck)",
      "Yüksek veya yanlış yastık seçimi",
      "Fiziksel ve psikolojik stres"
    ],
    fizyoterapiNasilYardimci: "Boyun çevresindeki spazmları çözmek ve kısıtlı eklem hareketlerini açmak amaçlanır. Aksaray Ata Fizyoterapi olarak, sadece ağrıyı hafifletmeyi değil, ağrının kaynağı olan duruş bozukluklarını da düzeltmeye yardımcı olacak bütüncül bir yaklaşım benimsiyoruz.",
    tedaviYontemleri: [
      { name: "Graston Tekniği", description: "Özel aletler yardımıyla kas ve fasya dokusundaki yapışıklıkları açmayı hedefler." },
      { name: "Mobilizasyon", description: "Boyun omurlarındaki hareket kısıtlılıklarını gidermek için uygulanan hafif ritmik hareketlerdir." },
      { name: "Elektroterapi", description: "Kas gevşemesi ve ağrı kontrolü amacıyla TENS gibi akımlar kullanılabilir." },
      { name: "Denge ve Koordinasyon Egzersizleri", description: "Boyun-baş kontrolünü sağlayarak eklemlere binen yükü dengelemeye yardımcı olur." }
    ],
    tedaviSureci: "Detaylı değerlendirmede ağrının kaynağı belirlenir. Manuel uygulamalarla dokular rahatlatılır ve hastanın postür bilinci artırılarak kalıcı iyilik hali sağlamak amaçlanır.",
    sss: [
      { soru: "Boyun kütletmek zararlı mıdır?", cevap: "Bilinçsizce yapılan ani boyun kütletme hareketleri eklem bağlarına zarar verebilir. Bu tür uygulamalar sadece uzman kişilerce yapılmalıdır." },
      { soru: "Doğru yastık nasıl olmalıdır?", cevap: "Boyun kavisini destekleyen, ne çok yüksek ne de çok alçak, omurga hizasını koruyan yastıklar tercih edilmelidir." },
      { soru: "Boyun ağrısı için egzersizler ne sıklıkla yapılmalı?", cevap: "Fizyoterapistinizin önereceği sıklıkta, genellikle günlük rutine yayılarak yapılmalıdır." }
    ]
  },
  {
    slug: "siyatik",
    title: "Siyatik",
    category: "bel-ve-boyun",
    categoryTitle: "Bel ve Boyun",
    icon: "activity",
    metaTitle: "Siyatik Ağrısı Fizyoterapi | Aksaray Ata Fizyoterapi",
    metaDescription: "Siyatik sinir sıkışması, bacak ağrısı ve uyuşma problemlerinde fizyoterapi yaklaşımları. Aksaray'da yaşam kalitenizi artırmayı hedefliyoruz.",
    heroDescription: "Siyatik sinirinin baskı altında kalması veya tahriş olması sonucu bacağa yayılan ağrı durumudur.",
    nedir: "Siyatik, vücudun en uzun ve en kalın siniri olan siyatik siniri güzergahı boyunca hissedilen ağrıdır. Genellikle bel fıtığı, kemik çıkıntıları veya piriformis kasının siniri sıkıştırması sonucu meydana gelir. Ağrı, belden başlayarak kalça içinden bacağın arka kısmına doğru yayılır.",
    belirtileri: [
      "Belden başlayıp kalça ve bacak arkasına yayılan şiddetli ağrı",
      "Bacakta veya ayakta uyuşma, yanma hissi",
      "Etkilenen bacakta kuvvet kaybı",
      "Otururken veya uzun süre ayakta kalırken ağrının şiddetlenmesi"
    ],
    nedenleri: [
      "Bel fıtığı (sinir köküne baskı yapması)",
      "Piriformis sendromu (kalça kasının siniri sıkıştırması)",
      "Omurga kanalında daralma (spinal stenoz)",
      "Kas spazmları ve pelvik bölge asimetrileri"
    ],
    fizyoterapiNasilYardimci: "Siyatik ağrısında temel hedef, siyatik siniri üzerindeki baskıyı veya tahrişi azaltmaktır. Aksaray Ata Fizyoterapi merkezimizde, sinir mobilizasyonu ve kalça kaslarının esnekliğini artıran uygulamalar ile ağrının hafifletilmesi desteklenir.",
    tedaviYontemleri: [
      { name: "Nöromusküler Eğitim", description: "Sinir ve kas sisteminin koordineli çalışmasını teşvik eder." },
      { name: "Sinir Mobilizasyonu", description: "Siyatik sinirinin dokular arasındaki kayma hareketini artırarak rahatlamasını sağlayan özel tekniklerdir." },
      { name: "Germe Egzersizleri", description: "Özellikle piriformis ve hamstring kaslarındaki gerginliği azaltmayı hedefler." },
      { name: "Kinesiyolojik Bantlama", description: "Bölgedeki basıncı hafifletmek ve dolaşımı desteklemek amacıyla kullanılabilir." }
    ],
    tedaviSureci: "Değerlendirmede sinirin nerede sıkıştığı tespit edilir (bel veya kalça bölgesi). Ardından o bölgeye yönelik spesifik rahatlatıcı teknikler ve hastaya özel germe programı oluşturularak süreç takip edilir.",
    sss: [
      { soru: "Siyatik ağrısı tamamen geçer mi?", cevap: "Altta yatan nedene yönelik doğru fizyoterapi ve yaşam tarzı değişiklikleri ile siyatik ağrıları büyük oranda kontrol altına alınabilir." },
      { soru: "Sıcak mı yoksa soğuk mu uygulamalıyım?", cevap: "Akut ve şiddetli dönemlerde soğuk uygulama, daha kronik kas gerginliklerinde sıcak uygulama rahatlatıcı olabilir. En doğrusu fizyoterapistinizin yönlendirmesidir." },
      { soru: "Yürüyüş yapmak siyatiğe iyi gelir mi?", cevap: "Hafif tempolu ve ağrı sınırları içerisindeki yürüyüşler faydalı olabilir ancak ağrıyı artırıyorsa zorlanmamalıdır." }
    ]
  },

  // ----------------------------------------------------
  // 2. DİZ (diz)
  // ----------------------------------------------------
  {
    slug: "diz-kireclenmesi",
    title: "Diz Kireçlenmesi (Osteoartrit)",
    category: "diz",
    categoryTitle: "Diz",
    icon: "activity",
    metaTitle: "Diz Kireçlenmesi Tedavisi | Aksaray Ata Fizyoterapi",
    metaDescription: "Diz kireçlenmesi (osteoartrit) için Aksaray'da kişiye özel egzersiz ve fizyoterapi. Ağrısız yürüyüş ve daha iyi eklem hareketliliği için destekliyoruz.",
    heroDescription: "Diz eklemindeki kıkırdak yapının aşınması ve yıpranması sonucu oluşan ilerleyici bir eklem problemidir.",
    nedir: "Diz kireçlenmesi (Gonartroz), diz eklemini oluşturan kemiklerin yüzeyini kaplayan kıkırdak dokusunun zamanla incelmesi, aşınması ve bozulmasıdır. Kıkırdak aşındıkça kemikler birbirine sürtünmeye başlar, bu da iltihaplanma, ağrı ve eklem hareketlerinde kısıtlılığa yol açar.",
    belirtileri: [
      "Yürürken, merdiven inip çıkarken dizde ağrı",
      "Diz ekleminde şişlik ve hassasiyet",
      "Sabahları veya uzun süre oturduktan sonra dizde sertlik hissi",
      "Dizi bükerken veya açarken tıkırtı (krepitasyon) sesleri"
    ],
    nedenleri: [
      "Yaşlanma ve doğal eklem aşınması",
      "Aşırı kilo (ekleme binen yükün artması)",
      "Geçmişte yaşanmış diz travmaları veya kırıkları",
      "Genetik yatkınlık ve kas zayıflığı"
    ],
    fizyoterapiNasilYardimci: "Kireçlenmede kıkırdak kaybını geri getirmek mümkün olmasa da, diz çevresindeki kasları güçlendirerek ekleme binen yükü azaltmak mümkündür. Aksaray Ata Fizyoterapi'de, ağrınızı hafifletmek ve yürüme kapasitenizi artırmak için hedefe yönelik egzersiz programları uygulanır.",
    tedaviYontemleri: [
      { name: "Kuvvetlendirme Egzersizleri", description: "Özellikle üst bacak (quadriceps) kaslarını güçlendirerek diz eklemini korumayı hedefler." },
      { name: "Eklem Mobilizasyonu", description: "Diz ekleminin hareket açıklığını artırmak ve dokuları beslemek için uygulanan tekniklerdir." },
      { name: "Elektroterapi", description: "Ağrı kontrolü ve kasları uyarmak amacıyla cihaz destekli uygulamalar yapılabilir." },
      { name: "Proprioseptif Eğitim", description: "Eklemin pozisyon hissini ve dengeyi geliştirerek düşme riskini azaltmaya yardımcı olur." }
    ],
    tedaviSureci: "Süreç boyunca eklemi zorlamadan kasları güçlendirmek esastır. Fazla kiloların verilmesi süreci hızlandırır. Hastalara, günlük yaşamda eklemi nasıl koruyacakları (örneğin merdiven çıkma teknikleri) öğretilir.",
    sss: [
      { soru: "Diz kireçlenmesi olanlar yürüyüş yapabilir mi?", cevap: "Evet, ancak düz zeminde, uygun ayakkabıyla ve aşırıya kaçmadan yapılan yürüyüşler tercih edilmelidir." },
      { soru: "Kireçlenme tamamen iyileşir mi?", cevap: "Yapısal değişiklikler geri döndürülemez ancak fizyoterapi ile ağrı kontrolü sağlanıp günlük yaşam konforu büyük ölçüde artırılabilir." },
      { soru: "Dizime protez takılmadan fizyoterapi işe yarar mı?", cevap: "Erken ve orta evrelerde fizyoterapi, cerrahiye gidiş sürecini yavaşlatabilir ve yaşam kalitesini artırabilir." }
    ]
  },
  {
    slug: "meniskus-yaralanmasi",
    title: "Menisküs Yaralanması",
    category: "diz",
    categoryTitle: "Diz",
    icon: "activity",
    metaTitle: "Menisküs Yırtığı ve Tedavisi | Aksaray Ata Fizyoterapi",
    metaDescription: "Aksaray'da menisküs yaralanmalarına yönelik ameliyatsız fizyoterapi ve ameliyat sonrası rehabilitasyon hizmetleri.",
    heroDescription: "Diz eklemindeki yükü emen kıkırdak dokuların (menisküslerin) yırtılması veya zedelenmesidir.",
    nedir: "Menisküsler, diz ekleminde uyluk kemiği ile kaval kemiği arasında yer alan, şok emici özellikteki C şeklindeki kıkırdak yapılardır. Ani dönme hareketleri, aşırı zorlanma veya yaşa bağlı doku zayıflaması sonucu menisküslerde yırtıklar meydana gelebilir.",
    belirtileri: [
      "Diz içinde ani batma hissi veya ağrı",
      "Dizde şişlik ve gerginlik",
      "Dizin kilitlenmesi veya takılması hissi",
      "Dizi tam olarak düzleştirememe veya bükememe"
    ],
    nedenleri: [
      "Spor sırasında dizin sabitken gövdenin aniden dönmesi",
      "Çömelerek veya diz çökerek uzun süre çalışma",
      "Dize alınan doğrudan darbeler",
      "Yaşlanmaya bağlı menisküs dokusunun zayıflaması (dejeneratif yırtıklar)"
    ],
    fizyoterapiNasilYardimci: "Birçok menisküs yırtığı ameliyatsız fizyoterapi ile yönetilebilir. Amacımız diz çevresi kaslarını güçlendirip eklem içi makaslama kuvvetlerini azaltmaktır. Aksaray Ata Fizyoterapi, hem konservatif (ameliyatsız) süreçte hem de cerrahi sonrasında diz fonksiyonlarınızı kazanmanız için yanınızdadır.",
    tedaviYontemleri: [
      { name: "Fonksiyonel Egzersizler", description: "Dizin günlük yaşamdaki yük taşıma kapasitesini artırmaya yönelik dinamik egzersizlerdir." },
      { name: "Kinesiyolojik Bantlama", description: "Dizde güven hissi oluşturmak ve ödem kontrolüne yardımcı olmak için kullanılır." },
      { name: "Manuel Terapi", description: "Eklem mekaniğini düzeltmek ve takılma hissini azaltmak için uygulanır." },
      { name: "Stabilizasyon Egzersizleri", description: "Diz ekleminin hareket sırasında doğru hizada kalmasını sağlamayı hedefler." }
    ],
    tedaviSureci: "İlk aşamada ödem ve ağrı kontrol altına alınır. Ardından dizin hareket açıklığı tam olarak kazanılmaya çalışılır. Son aşamada ise kasa dayanıklılık ve spora/gündelik hayata dönüş eğitimleri verilir.",
    sss: [
      { soru: "Her menisküs yırtığı ameliyat gerektirir mi?", cevap: "Hayır. Yırtığın tipi, yeri, hastanın yaşı ve yaşam tarzına göre birçok vakada fizyoterapi ilk seçenektir." },
      { soru: "Menisküs ameliyatı sonrası fizyoterapi ne zaman başlar?", cevap: "Genellikle cerrahın onayına bağlı olarak ameliyattan hemen sonraki günlerde hafif egzersizlerle başlanabilir." },
      { soru: "Tedavi ne kadar sürer?", cevap: "Konservatif süreç 4-6 hafta sürebilir. Cerrahi sonrası rehabilitasyon ise yapılan işleme göre 6-12 haftayı bulabilir." }
    ]
  },
  {
    slug: "on-capraz-bag-yaralanmasi",
    title: "Ön Çapraz Bağ (ACL) Yaralanması",
    category: "diz",
    categoryTitle: "Diz",
    icon: "activity",
    metaTitle: "Ön Çapraz Bağ (ACL) Rehabilitasyonu | Aksaray Fizyoterapi",
    metaDescription: "Aksaray'da Ön Çapraz Bağ (ACL) yaralanmaları ve ameliyat sonrası rehabilitasyon süreçleriniz için profesyonel destek.",
    heroDescription: "Diz ekleminin stabilitesini sağlayan en önemli bağlardan birinin zedelenmesi veya kopmasıdır.",
    nedir: "Ön çapraz bağ (ACL), dizin içinde çapraz olarak yer alan ve uyluk kemiği ile kaval kemiğini birbirine bağlayan ana bağdır. Dizin öne doğru kaymasını ve aşırı dönmesini engeller. Sıklıkla spor aktiviteleri sırasında bağın esneme kapasitesini aşan ani hareketler sonucu kopar veya zedelenir.",
    belirtileri: [
      "Yaralanma anında duyulan 'kopma/patlama' (pop) sesi",
      "Kısa süre içinde gelişen şiddetli diz şişliği",
      "Diz üzerine ağırlık verildiğinde boşalma ve güvensizlik hissi",
      "Şiddetli ağrı ve hareket kısıtlılığı"
    ],
    nedenleri: [
      "Koşarken aniden durma veya yön değiştirme",
      "Sıçrama sonrası yere hatalı veya dengesiz inme",
      "Dizin dış kısımdan şiddetli darbe alması",
      "Ayak sabitken gövdenin diz üzerinde aniden dönmesi"
    ],
    fizyoterapiNasilYardimci: "Ameliyat planlanmasa da, ameliyat öncesi veya ameliyat sonrası süreçte fizyoterapi kritik öneme sahiptir. Aksaray Ata Fizyoterapi'de, diz stabilitesini kaslarla sağlamak, ödemi azaltmak ve spora güvenli dönüşünüzü planlamak üzere özel protokoller uygulanır.",
    tedaviYontemleri: [
      { name: "Proprioseptif Eğitim", description: "Dizin boşalma hissini yenmek ve eklemin pozisyon algısını geliştirmek için denge tahtası vb. ekipmanlarla yapılan eğitimdir." },
      { name: "Kuvvetlendirme Egzersizleri", description: "Özellikle arka bacak (hamstring) ve ön bacak kaslarını kuvvetlendirerek bağın görevini kaslara devretmeyi amaçlar." },
      { name: "Nöromusküler Eğitim", description: "Kasların kasılma zamanlamasını ve refleks reaksiyonlarını iyileştirir." },
      { name: "Elektroterapi", description: "Ameliyat sonrası kas atrofisini (erimesini) engellemek için kas stimulasyonu yapılabilir." }
    ],
    tedaviSureci: "Cerrahi uygulanacaksa; öncesinde diz hareket açıklığının ve kuvvetin belli bir seviyeye getirilmesi (pre-hab) önemlidir. Cerrahi sonrasında ise, doku iyileşme süreleri dikkate alınarak aşama aşama spora dönüşü hedefleyen aylar süren kapsamlı bir rehabilitasyon süreci yürütülür.",
    sss: [
      { soru: "Ameliyatsız iyileşmek mümkün mü?", cevap: "Sporcu olmayan, daha durağan yaşantısı olan bireylerde güçlü kaslarla ameliyatsız yaşam mümkündür. Ancak spora dönüş hedefi olan gençlerde sıklıkla cerrahi önerilir." },
      { soru: "Ameliyat sonrası sahaya/spora dönüş ne kadar sürer?", cevap: "Kişinin durumuna ve rehabilitasyon sürecine bağlı olarak genellikle 6 ile 9 ay arasında sürer." },
      { soru: "Fizyoterapi sürecini aksatmak nelere yol açar?", cevap: "Dizde kalıcı sertlik, kas erimesi, eklem kireçlenmesi ve tekrar yaralanma riskinin artmasına yol açabilir." }
    ]
  },
  {
    slug: "diz-agrisi",
    title: "Diz Ağrısı (Patellofemoral Ağrı vb.)",
    category: "diz",
    categoryTitle: "Diz",
    icon: "activity",
    metaTitle: "Diz Ağrısı Nedenleri ve Fizyoterapi | Aksaray Ata Fizyoterapi",
    metaDescription: "Aksaray'da merdiven inip çıkarken veya otururken hissettiğiniz diz kapağı ağrılarına (Patellofemoral Ağrı) özel fizyoterapi çözümleri.",
    heroDescription: "Diz kapağının altında veya çevresinde hissedilen, günlük aktiviteleri zorlaştıran mekanik kökenli ağrılardır.",
    nedir: "Genel diz ağrısı, sıklıkla diz kapağının (patella) uyluk kemiği üzerindeki olukta doğru hareket edememesinden kaynaklanır. 'Koşucu dizi' olarak da bilinen patellofemoral ağrı sendromu, genç ve aktif bireylerde sık görülen, çömelme veya merdiven inip çıkma ile artan bir problemdir.",
    belirtileri: [
      "Diz kapağının etrafında, altında veya arkasında sızlayıcı ağrı",
      "Uzun süre diz bükülü oturunca artan ağrı (sinema belirtisi)",
      "Merdiven inerken ağrının daha şiddetli olması",
      "Diz hareketleri sırasında sürtünme hissi veya çıtırtı sesleri"
    ],
    nedenleri: [
      "Kalça ve diz çevresi kaslarındaki kuvvet dengesizlikleri",
      "Düz tabanlık veya yanlış ayakkabı kullanımı nedeniyle bacak diziliminin bozulması",
      "Aktivite düzeyinde aniden yapılan yoğun artışlar",
      "Diz kapağının yapısal olarak yüksekte veya dışa dönük olması"
    ],
    fizyoterapiNasilYardimci: "Amaç, diz kapağının doğru rotada hareket etmesini sağlamaktır. Aksaray Ata Fizyoterapi olarak, sadece dizi değil, ayak bileği ve kalça mekaniğini de değerlendirerek sorunun kaynağını bulmayı ve kas dengesini kurmayı amaçlıyoruz.",
    tedaviYontemleri: [
      { name: "Kinesiyolojik Bantlama", description: "Diz kapağının doğru hizada kalmasına yardımcı olmak ve ağrıyı azaltmak için uygulanır." },
      { name: "Terapötik Egzersiz", description: "Kalça dış rotatorları, quadriceps'in iç kısmı ve core kaslarını hedefleyen spesifik güçlendirme." },
      { name: "Miyofasyal Gevşetme", description: "Dizin dış kısmındaki gergin bağ ve kasları (IT bandı gibi) esneterek diz kapağına olan çekme kuvvetini azaltır." },
      { name: "Postür ve Yürüyüş Eğitimi", description: "Yanlış basma ve yürüyüş alışkanlıklarını düzelterek dize binen yükü dengeler." }
    ],
    tedaviSureci: "Öncelikle hastanın günlük aktivitelerinde dize binen yükü nasıl azaltacağı öğretilir. Kalça ve diz kasları arasındaki denge sağlanana kadar kuvvetlendirme ve germe egzersizleri bir arada yürütülür.",
    sss: [
      { soru: "Diz ağrısı için dizlik takmak faydalı mı?", cevap: "Kısa süreli rahatlama sağlayabilir ancak sürekli dizlik kullanımı kasların zayıflamasına yol açabileceği için fizyoterapist kontrolünde kullanılmalıdır." },
      { soru: "Merdiven inmek neden çıkmaktan daha ağrılıdır?", cevap: "Merdiven inerken vücut ağırlığının çok daha büyük bir kısmı diz kapağı eklemine bindiği için baskı artar." },
      { soru: "Spora ara vermeli miyim?", cevap: "Ağrıyı tetikleyen zıplama ve koşu gibi sporlara geçici bir süre ara verilmesi veya modifiye edilmesi önerilir." }
    ]
  },

  // ----------------------------------------------------
  // 3. OMUZ VE KOL (omuz-ve-kol)
  // ----------------------------------------------------
  {
    slug: "omuz-sikisma-sendromu",
    title: "Omuz Sıkışma Sendromu",
    category: "omuz-ve-kol",
    categoryTitle: "Omuz ve Kol",
    icon: "activity",
    metaTitle: "Omuz Sıkışma Sendromu Fizyoterapi | Aksaray Ata Fizyoterapi",
    metaDescription: "Kolu yukarı kaldırırken omuzda batma ve ağrı hissediyorsanız Aksaray Ata Fizyoterapi'de sıkışma sendromu fizyoterapi programlarıyla rahatlayın.",
    heroDescription: "Omuz eklemindeki tendonların ve keseciklerin omuz çatısı altındaki dar alanda sıkışarak tahriş olmasıdır.",
    nedir: "Omuz sıkışma sendromu (İmpingement), kolu havaya kaldırırken döndürücü kılıf (rotator manşet) tendonlarının veya bursa (sıvı keseciği) adlı yapının, omuzdaki köprücük kemiği altındaki kemik yapı arasında sıkışması durumudur. Sıklıkla baş üstü aktiviteler yapanlarda görülür.",
    belirtileri: [
      "Kolu baş seviyesine veya yana kaldırırken omuzda keskin ağrı",
      "Özellikle geceleri etkilenen omuz üzerine yatıldığında artan ağrı",
      "Omuzdan dirseğe doğru inen sızı",
      "Kolda güçsüzlük ve hareket kısıtlılığı"
    ],
    nedenleri: [
      "Tekrarlayan baş üstü hareketler (boya yapma, yüzme, voleybol vb.)",
      "Kötü postür, özellikle omuzların öne yuvarlak ve çökük olması",
      "Omuz çatısını oluşturan kemiklerde yapısal farklılıklar",
      "Rotator manşet kaslarının zayıflığı ve dengesizliği"
    ],
    fizyoterapiNasilYardimci: "Omuz mekaniğini düzelterek sıkışan alanı genişletmeyi amaçlarız. Aksaray Ata Fizyoterapi'de omuz ve kürek kemiği kaslarının uyumlu çalışmasını sağlayarak tendonlar üzerindeki baskıyı ve inflamasyonu azaltmayı hedefliyoruz.",
    tedaviYontemleri: [
      { name: "Manuel Terapi", description: "Omuz ekleminin ve kürek kemiğinin doğru pozisyonlanmasını sağlamak için mobilizasyon teknikleri." },
      { name: "Postür Eğitimi", description: "Omuzların öne yuvarlanmasını engelleyecek sırt kaslarını güçlendirme çalışmaları." },
      { name: "Stabilizasyon Egzersizleri", description: "Kürek kemiği çevresi kaslarını aktive ederek kol hareketleri sırasında omuz çatısının açılmasını destekler." },
      { name: "Sıcak/Soğuk Uygulamalar", description: "Ödemi ve akut ağrıyı baskılamak için tercih edilir." }
    ],
    tedaviSureci: "İlk etapta omuz seviyesi üzerindeki zorlayıcı hareketlerden kaçınılır. Ağrı hafifledikçe kürek kemiği stabilizatörleri ve rotator manşet kasları sistemli bir şekilde güçlendirilerek normal fonksiyona dönülür.",
    sss: [
      { soru: "Ağrı varken kolumu kullanmalı mıyım?", cevap: "Ağrı sınırını aşmadan ve zorlayıcı baş üstü hareketlerden kaçınarak günlük aktivitelerinize devam etmeniz omuzun donmasını engeller." },
      { soru: "Duruş bozukluğu omuzu etkiler mi?", cevap: "Kesinlikle. Kambur duruş (kifoz), omuz çatısını daraltarak sıkışma riskini ciddi oranda artırır." },
      { soru: "Fizyoterapi ile tamamen geçer mi?", cevap: "Erken teşhis ve uygun egzersiz programı ile büyük çoğunlukla kalıcı olarak iyileşme hedeflenir." }
    ]
  },
  {
    slug: "donuk-omuz",
    title: "Donuk Omuz",
    category: "omuz-ve-kol",
    categoryTitle: "Omuz ve Kol",
    icon: "activity",
    metaTitle: "Donuk Omuz Tedavisi | Aksaray Fizyoterapi - Ata Fizyoterapi",
    metaDescription: "Omuz hareketlerinde şiddetli kısıtlanma ve ağrı ile seyreden donuk omuz problemi için Aksaray'da kişiye özel fizyoterapi yaklaşımları.",
    heroDescription: "Omuz eklemini çevreleyen kapsülün kalınlaşarak yapışması sonucu omzun hareket yeteneğini kaybetmesidir.",
    nedir: "Donuk omuz (Adezif Kapsülit), omuz eklem kapsülünün bilinmeyen bir nedenle iltihaplanması, daralması ve fibrotik bantlar (yapışıklıklar) oluşturması durumudur. Omuz adeta 'donmuş' gibi her yöne, özellikle dışa doğru hareket kısıtlılığı yaşar. Genellikle sinsi başlar ve aylar süren evreleri vardır.",
    belirtileri: [
      "Omuzda sürekli, sızlayıcı ve geceleri uykudan uyandıran ağrı",
      "Kolu yana ve arkaya (örn: cüzdan almak, sütyen kopçası iliklemek) götürmede ciddi zorluk",
      "Günlük yaşam aktivitelerinde (saç tarama, giyinme) kısıtlılık",
      "Omuz hareketlerinde kademeli olarak artan sertlik"
    ],
    nedenleri: [
      "Kesin nedeni tam bilinmemekle birlikte diyabet, tiroid veya kalp hastalıkları ile ilişkili olabilir",
      "Omuz yaralanması veya ameliyatı sonrası omzun uzun süre hareketsiz kalması",
      "Hormonal değişimler ve otoimmün reaksiyonlar"
    ],
    fizyoterapiNasilYardimci: "Donuk omuzun fizyoterapisi, hastalığın bulunduğu evreye (ağrı evresi, donma evresi, çözülme evresi) göre değişiklik gösterir. Aksaray Ata Fizyoterapi'de ağrıyı kontrol altına alıp, eklem kapsülünü dikkatlice esneterek omuz hareketlerini geri kazanmanızı destekliyoruz.",
    tedaviYontemleri: [
      { name: "Eklem Mobilizasyonu", description: "Eklem kapsülünü nazikçe esnetmek ve hareket açıklığını artırmak için fizyoterapist tarafından uygulanan teknikler." },
      { name: "Germe Egzersizleri", description: "Kısalmış dokuları uzatmak için hastanın toleransına uygun, uzun süreli ve hafif şiddette germeler." },
      { name: "Elektroterapi", description: "Özellikle ağrılı evrede hastayı rahatlatmak ve kas spazmlarını kırmak için destekleyici olarak kullanılır." },
      { name: "Fonksiyonel Egzersizler", description: "Çözülme evresinde günlük yaşam aktivitelerini yeniden kazanmaya yönelik çalışmalar." }
    ],
    tedaviSureci: "Süreç uzun soluklu olabilir ve sabır gerektirir. İlk evrelerde zorlayıcı hareketlerden kaçınılarak ağrı yönetilirken, sonraki evrelerde hareket açıklığını artırmaya odaklanılır. Hastanın ev egzersizlerine uyumu tedavinin başarısında kilit roldedir.",
    sss: [
      { soru: "Donuk omuz seanslarında çok ağrı olur mu?", cevap: "Bizim yaklaşımımızda 'acı yoksa kazanç yok' mantığı geçerli değildir. Ağrı eşiğinize saygı duyularak dokular uygun dozda esnetilir." },
      { soru: "İyileşme süreci ne kadar sürer?", cevap: "Donuk omuz doğası gereği inatçıdır. Tam toparlanma kişiden kişiye değişmekle birlikte 6 ay ile 2 yıl arasında bir sürece yayılabilir." },
      { soru: "Şeker hastası olmam süreci etkiler mi?", cevap: "Evet, diyabetik hastalarda donuk omuz hem daha sık görülür hem de süreç biraz daha dirençli olabilir." }
    ]
  },
  {
    slug: "rotator-manset-problemleri",
    title: "Rotator Manşet Problemleri",
    category: "omuz-ve-kol",
    categoryTitle: "Omuz ve Kol",
    icon: "activity",
    metaTitle: "Rotator Manşet Yırtığı ve Rehabilitasyon | Aksaray Ata Fizyoterapi",
    metaDescription: "Omuzda güç kaybı ve ağrıya neden olan rotator manşet yırtıkları ve tendinit problemlerinde Aksaray'da etkili fizyoterapi çözümleri.",
    heroDescription: "Omuzu stabilize eden ve döndüren kas-tendon grubundaki yırtıklar veya iltihaplanmalardır.",
    nedir: "Rotator manşet, omuz eklemini yerinde tutan ve kolun çeşitli yönlere dönmesini sağlayan dört adet kastan oluşur. Bu kasların tendonlarında aşırı kullanıma, yaşlanmaya veya travmalara bağlı olarak zedelenme, iltihaplanma (tendinit) veya yırtıklar oluşabilir.",
    belirtileri: [
      "Kolu kaldırırken veya döndürürken belirli bir açıda ağrı",
      "Omuz kaslarında zayıflık, ağırlık kaldıramama",
      "Geceleri ağrı nedeniyle uykuya dalmada zorluk",
      "Kol hareketleri sırasında omuzdan klik veya sürtünme sesi gelmesi"
    ],
    nedenleri: [
      "Düşme veya ağır kaldırma gibi ani travmalar",
      "Yaşla birlikte tendon dokusunun dejenerasyonu (yıpranması)",
      "Tekrarlayan baş üstü hareketler veya ağır işlerde çalışma",
      "Omuz sıkışma sendromunun uzun süre tedavi edilmemesi"
    ],
    fizyoterapiNasilYardimci: "Kısmi yırtıklarda veya tendinitlerde fizyoterapi, kasları güçlendirerek omzun stabilitesini yeniden sağlamayı hedefler. Tam kat yırtıklarda ise ameliyat gerekebilir. Aksaray Ata Fizyoterapi'de, hem konservatif (ameliyatsız) süreçte hem de ameliyat sonrası toparlanma döneminde detaylı rehabilitasyon programları uygularız.",
    tedaviYontemleri: [
      { name: "Kuvvetlendirme Egzersizleri", description: "Özellikle zedelenmemiş kas liflerini ve kürek kemiği çevresi kasları kuvvetlendirerek telafi mekanizması oluşturur." },
      { name: "Graston Tekniği", description: "Tendon üzerindeki yapışıklıkları ve skar dokusunu özel aletlerle mobilize etmeyi amaçlar." },
      { name: "Manuel Terapi", description: "Omuz mekaniğini düzeltmek ve eklem içi gerginlikleri azaltmak için uygulanır." },
      { name: "Proprioseptif Eğitim", description: "Omuz ekleminin hareket kontrolünü artırarak tekrarlayan zedelenmeleri önler." }
    ],
    tedaviSureci: "Zedelenen dokunun iyileşmesi için zamana ihtiyaç vardır. Ağrı azaldıkça spesifik izometrik ve izotonik kuvvetlendirme egzersizlerine geçilir. Hasta düzenli egzersizlerle kolunu eski işlevselliğine kavuşturmaya çalışır.",
    sss: [
      { soru: "Her rotator manşet yırtığı ameliyatlık mıdır?", cevap: "Hayır. Yırtığın boyutu, hastanın yaşı ve günlük aktivite beklentisine göre pek çok hasta fizyoterapi ile ameliyatsız ağrısız ve fonksiyonel bir hayata dönebilir." },
      { soru: "Kortizon iğnesi sonrası fizyoterapiye ne zaman başlamalıyım?", cevap: "İğnenin etkisini göstermesi beklendikten sonra, genellikle doktorunuzun onayıyla 1-2 hafta içinde başlanabilir." },
      { soru: "Ameliyat oldum, fizyoterapi şart mı?", cevap: "Kesinlikle şarttır. Ameliyat onarımı sağlasa da, hareketin geri kazanılması ve kasların kuvvetlendirilmesi tamamen fizyoterapinin alanıdır." }
    ]
  },
  {
    slug: "omuz-agrisi",
    title: "Omuz Ağrısı",
    category: "omuz-ve-kol",
    categoryTitle: "Omuz ve Kol",
    icon: "activity",
    metaTitle: "Omuz Ağrısı İçin Fizyoterapi | Aksaray Ata Fizyoterapi",
    metaDescription: "Aksaray'da günlük yaşamınızı etkileyen belirsiz veya travmatik omuz ağrıları için postür analizi ve doğru fizyoterapi yöntemleri.",
    heroDescription: "Çeşitli kas, eklem veya boyun kaynaklı nedenlerle omuz bölgesinde hissedilen genel ağrı durumudur.",
    nedir: "Omuz, vücudun en hareketli ve dolayısıyla yaralanmaya en açık eklemidir. Omuz ağrısı sadece omuz ekleminin kendisinden kaynaklanmayabilir; boyun fıtıkları, duruş bozuklukları veya sırt kaslarındaki gerginlikler de omuza ağrı yansıtabilir.",
    belirtileri: [
      "Omuzun ön, yan veya arka kısmında sızıntı şeklinde ağrı",
      "Kolu belli yönlere hareket ettirmede zorluk veya ağrı",
      "Sırt ve boyun ile omuz arasındaki kaslarda (trapez) spazm ve sertlik",
      "Omuzda yanma, ağırlık hissi veya yorgunluk"
    ],
    nedenleri: [
      "Boyun fıtıkları veya kireçlenmelerinin omuza yansıması",
      "Kötü çalışma postürü ve aşırı bilgisayar kullanımı",
      "Kas spazmları ve miyofasyal tetik noktalar (kulunçlar)",
      "Eklem zorlanmaları veya bağlardaki hafif esnemeler"
    ],
    fizyoterapiNasilYardimci: "Omuz ağrısında en kritik nokta ağrının gerçek kaynağını (omuz mu, boyun mu, postür mü?) doğru tespit etmektir. Aksaray Ata Fizyoterapi'de bütüncül bir değerlendirme yapılarak, sadece ağrıyan bölgeye değil, ağrının kaynağına yönelik kalıcı çözümler üretilmesi hedeflenir.",
    tedaviYontemleri: [
      { name: "Miyofasyal Gevşetme", description: "Omuz çevresindeki tetik noktaları (kulunçları) ve kas gerginliklerini rahatlatır." },
      { name: "Postür Eğitimi", description: "Beden farkındalığı yaratarak günlük aktivitelerde doğru duruşun sağlanması." },
      { name: "Kupa Terapi", description: "Bölgesel kan akışını hızlandırarak dokuların beslenmesine ve spazmların çözülmesine destek olur." },
      { name: "Mobilizasyon", description: "Omurga ve kürek kemiği hareketliliğini artırarak omuz yükünü hafifletir." }
    ],
    tedaviSureci: "Ağrının kaynağına göre boyun veya omuz odaklı bir program çizilir. Kas dengesizlikleri tespit edilerek gergin kaslar esnetilir, zayıf kaslar güçlendirilir. Bütüncül bir duruş iyileştirmesi amaçlanır.",
    sss: [
      { soru: "Ağrım boynumdan mı omuzumdan mı kaynaklanıyor nasıl anlarım?", cevap: "Ağrı genellikle dirsekten aşağı iniyorsa veya boyun hareketleriyle tetikleniyorsa boyun kaynaklı olma ihtimali yüksektir. Detaylı değerlendirmede özel testlerle bunu ayırt ediyoruz." },
      { soru: "Omuz ağrısı için yatış pozisyonum nasıl olmalı?", cevap: "Ağrılı omuz üzerine yatmaktan kaçınılmalı, sırtüstü veya sağlam taraf üzerine, kollar yastıkla desteklenerek yatılmalıdır." },
      { soru: "Sıcak uygulama iyi gelir mi?", cevap: "Kas spazmı kaynaklı ağrılarda sıcak uygulama bölgeyi gevşeterek iyi gelebilir." }
    ]
  },
  {
    slug: "tenisci-dirsegi",
    title: "Tenisçi Dirseği",
    category: "omuz-ve-kol",
    categoryTitle: "Omuz ve Kol",
    icon: "activity",
    metaTitle: "Tenisçi Dirseği Tedavisi | Aksaray Ata Fizyoterapi",
    metaDescription: "Dirsek dış kısmında ağrıya neden olan Tenisçi Dirseği (Lateral Epikondilit) rahatsızlığı için Aksaray'da etkili fizyoterapi ve egzersiz programları.",
    heroDescription: "Dirseğin dış kısmındaki tendonların aşırı kullanım sonucu zedelenmesi ve ağrıması durumudur.",
    nedir: "Tenisçi dirseği (Lateral Epikondilit), el bileğini ve parmakları geriye doğru büken kasların, dirseğin dış tarafındaki kemik çıkıntısına (epikondil) yapıştığı tendonlarda mikroyırtıklar ve iltihaplanma oluşmasıdır. Sadece tenisçilerde değil, el bileğini tekrarlayan şekilde kullanan herkeste görülebilir.",
    belirtileri: [
      "Dirseğin dış kısmında dokunmakla veya hareketle artan hassasiyet ve ağrı",
      "Kavanoz açma, kapı kolu çevirme, bez sıkma veya tokalaşma sırasında ağrı",
      "Kavrama gücünde azalma (örneğin çaydanlık veya bardak kaldırırken zorlanma)",
      "Ağrının dirsekten ön kola ve el bileğine doğru yayılması"
    ],
    nedenleri: [
      "Bilgisayar faresi veya klavyeyi yanlış açıda ve uzun süreli kullanmak",
      "Boyacı, marangoz, ev hanımı gibi tekrarlayan el bileği hareketi yapan meslekler",
      "Yanlış teknikle raket sporları oynamak",
      "Ağır poşetler veya yükler taşımak"
    ],
    fizyoterapiNasilYardimci: "Tendonun iyileşme kapasitesini artırmak ve zedelenen dokuya binen yükü azaltmak esastır. Aksaray Ata Fizyoterapi merkezimizde, iyileşmeyen mikroyırtıkların kanlanmasını destekleyici manuel ve cihaz destekli yaklaşımlar uygulayarak günlük işlerinize ağrısız dönmenizi hedefleriz.",
    tedaviYontemleri: [
      { name: "Graston Tekniği", description: "Tendon üzerindeki hasarlı dokuyu yeniden modellemek ve iyileşmeyi tetiklemek için özel ekipmanlarla uygulanan bir sürtünme masajı türüdür." },
      { name: "Kinesiyolojik Bantlama", description: "Tendon yapışma yerine binen yükü hafifletmek için dirsek ve ön kola uygulanan destek bantlamasıdır." },
      { name: "Eksantrik Kuvvetlendirme", description: "Kas kasılırken uzamasına odaklanan ve tendon iyileşmesinde en etkili olduğu kanıtlanmış egzersiz türüdür." },
      { name: "Germe Egzersizleri", description: "Gergin ön kol kaslarını esneterek tendon üzerindeki sürekli gerilimi azaltmayı amaçlar." }
    ],
    tedaviSureci: "Akut dönemde ağrıyı tetikleyen aktiviteler modifiye edilir veya kısıtlanır. Dirseklik kullanımı önerilebilir. Ağrı azaldıkça ön kol kaslarına yönelik özel germe ve eksantrik kuvvetlendirme programı ile dokunun dayanıklılığı artırılır.",
    sss: [
      { soru: "Tenisçi dirseği bandı/dirsekliği nasıl kullanılmalı?", cevap: "Bant, ağrılı noktanın (kemik çıkıntısının) 2-3 parmak altına, kas gövdesi üzerine sıkıca ama kan dolaşımını kesmeyecek şekilde takılmalıdır." },
      { soru: "Kortizon iğnesi kesin çözüm mü?", cevap: "Kortizon geçici olarak ağrıyı kesse de, tendondaki mekanik problemi çözmez. Hatta tekrarlayan iğneler tendonu zayıflatabilir, bu yüzden fizyoterapi ve egzersiz kalıcı çözüm için şarttır." },
      { soru: "Sadece dinlenerek geçer mi?", cevap: "Dinlenmek ağrıyı yatıştırır ancak tendonun yük taşıma kapasitesi düzelmediği için aktiviteye dönüldüğünde ağrı sıklıkla tekrarlar." }
    ]
  },
  {
    slug: "karpal-tunel-sendromu",
    title: "Karpal Tünel Sendromu",
    category: "omuz-ve-kol",
    categoryTitle: "Omuz ve Kol",
    icon: "activity",
    metaTitle: "Karpal Tünel Sendromu Fizyoterapi | Aksaray Ata Fizyoterapi",
    metaDescription: "Ellerde uyuşma ve ağrıya neden olan karpal tünel sendromu (sinir sıkışması) rahatsızlığı için Aksaray'da ameliyatsız fizyoterapi yaklaşımları.",
    heroDescription: "El bileğindeki dar bir kanaldan geçen medyan sinirin sıkışması sonucu elde uyuşma ve ağrı oluşmasıdır.",
    nedir: "Karpal tünel sendromu, el bileğinin iç kısmında yer alan, kemikler ve bağlardan oluşan tünelin (karpal tünel) içindeki medyan sinirin baskı altında kalmasıdır. Bu sinir, başparmak ve işaret parmağı başta olmak üzere elde his ve hareketi sağlar; sıkıştığında çeşitli sinirsel belirtilere yol açar.",
    belirtileri: [
      "Başparmak, işaret parmağı ve orta parmakta uyuşma, karıncalanma",
      "Geceleri ellerde uyuşukluk hissiyle uyanma ve elleri sallama ihtiyacı",
      "Eşyaları tutarken veya kavrarken elden düşürme, beceriksizlik",
      "El bileğinden kola veya omuza doğru yayılan ağrı"
    ],
    nedenleri: [
      "Klavyede yazı yazma veya örgü örme gibi tekrarlayan el bileği hareketleri",
      "El bileğini uzun süre bükülü pozisyonda tutmak (özellikle uyurken)",
      "Hamilelik veya tiroid problemleri gibi durumlarda vücutta sıvı tutulumu (ödem)",
      "Karpal tünelin doğuştan dar olması veya el bileği travmaları"
    ],
    fizyoterapiNasilYardimci: "Erken ve orta evrelerde amaç, tünel içindeki basıncı azaltmak ve sinirin beslenmesini desteklemektir. Aksaray Ata Fizyoterapi olarak, sinir mobilizasyonları ve özel egzersizlerle ameliyata gerek kalmadan yaşam konforunuzu artırmayı hedefliyoruz.",
    tedaviYontemleri: [
      { name: "Sinir Mobilizasyonu (Kaydırma Egzersizleri)", description: "Medyan sinirin dokular arasında rahatça kaymasını sağlayarak sıkışmayı ve yapışıklıkları azaltan özel tekniklerdir." },
      { name: "Manuel Terapi", description: "El bileği kemikleri arasındaki hareketliliği artırarak tüneli genişletmeye yardımcı olur." },
      { name: "Terapötik Egzersiz", description: "Bilek ve parmak tendonlarını esneten, el içi kaslarını güçlendiren egzersizler." },
      { name: "Elektroterapi", description: "Bölgedeki ödemi ve inflamasyonu azaltmak, sinir iyileşmesini desteklemek için kullanılabilir." }
    ],
    tedaviSureci: "Hastanın günlük yaşam modifikasyonları (gece ateli kullanımı, ergonomik çalışma alanı) düzenlenir. Manuel terapi ve sinir kaydırma teknikleri düzenli seanslarla uygulanır, şikayetler hafifledikçe kas dayanıklılığını artıracak çalışmalara geçilir.",
    sss: [
      { soru: "Gece ateli kullanmak neden önemli?", cevap: "Uyurken farkında olmadan el bileğimizi bükeriz, bu da sinir üzerindeki baskıyı artırır. Atel, bileği düz (nötral) pozisyonda tutarak gece uyuşmalarını büyük ölçüde engeller." },
      { soru: "Ameliyat olmam gerekiyor mu?", cevap: "İleri derecede kas erimesi ve kalıcı duyu kaybı yoksa, vakaların çoğu uygun fizyoterapi ve koruyucu yaklaşımlarla iyileşebilir." },
      { soru: "Evde ellerimi sıcak suda bekletmeli miyim?", cevap: "Sıcak uygulama kan damarlarını genişletip bölgedeki ödemi artırabileceği için genellikle akut sinir sıkışmalarında önerilmez, soğuk uygulama daha iyi gelebilir." }
    ]
  },

  // ----------------------------------------------------
  // 4. AYAK VE AYAK BİLEĞİ (ayak-ve-ayak-bilegi)
  // ----------------------------------------------------
  {
    slug: "ayak-bilegi-burkulmasi",
    title: "Ayak Bileği Burkulması",
    category: "ayak-ve-ayak-bilegi",
    categoryTitle: "Ayak ve Ayak Bileği",
    icon: "activity",
    metaTitle: "Ayak Bileği Burkulması Tedavisi | Aksaray Ata Fizyoterapi",
    metaDescription: "Ayak bileği burkulmaları sonrası şişlik, ağrı ve kronik dengesizlik problemleri için Aksaray'da kişiye özel rehabilitasyon ve fizyoterapi.",
    heroDescription: "Ayak bileği bağlarının ani ve ters bir hareket sonucu aşırı esnemesi veya yırtılması durumudur.",
    nedir: "Ayak bileği burkulması, genellikle ayağın dışa veya içe doğru ani şekilde dönmesiyle meydana gelen çok yaygın bir yaralanmadır. En sık ayağın içe döndüğü, dış yan bağların zedelendiği 'inversiyon' burkulmaları görülür. Yırtığın derecesine göre hafif ödemden, şiddetli ağrı ve basamamaya kadar değişen tablolar oluşturur.",
    belirtileri: [
      "Ayak bileğinin özellikle dış kısmında şiddetli ağrı",
      "Hızlı gelişen şişlik ve morarma",
      "Üzerine basmada veya yürümekte zorluk, topallama",
      "Bilek hareketlerinde kısıtlılık ve hassasiyet"
    ],
    nedenleri: [
      "Düzensiz zeminlerde yürümek veya koşmak",
      "Spor sırasında ani yön değiştirme veya sıçrama sonrası yere kötü inme",
      "Uygun olmayan veya topuklu ayakkabı kullanımı",
      "Geçmişte iyi tedavi edilmemiş burkulmalar sonucu zayıf kalan bağlar"
    ],
    fizyoterapiNasilYardimci: "Pek çok kişi burkulmayı önemsemese de, tam iyileşmeyen bağlar ileride kronik ayak bileği dengesizliğine (sürekli burkulmalara) yol açar. Aksaray Ata Fizyoterapi'de bağların sağlıklı onarılması, ödemin atılması ve denge duyusunun (propriosepsiyon) geri kazanılması için kapsamlı bir süreç yürütürüz.",
    tedaviYontemleri: [
      { name: "Proprioseptif Eğitim", description: "Bozulan denge ve pozisyon hissini denge tahtası ve stabilizasyon egzersizleriyle yeniden kazandırır." },
      { name: "Manuel Lenf Drenajı", description: "Bölgede biriken ödemin (şişliğin) lenf sistemine yönlendirilerek daha hızlı atılmasını sağlar." },
      { name: "Kinesiyolojik Bantlama", description: "Erken dönemde ödemi azaltmak, ilerleyen dönemde ise eklemi desteklemek amaçlı kullanılır." },
      { name: "Kuvvetlendirme Egzersizleri", description: "Zayıflayan ayak çevresi kaslarını (özellikle peroneal kasları) güçlendirerek eklemi destekler." }
    ],
    tedaviSureci: "Akut dönemde RICE (Dinlenme, Buz, Kompresyon, Yükseklik) protokolü ve ödem kontrolü önceliklidir. Ağrı azaldıkça eklem hareket açıklığı egzersizlerine ve ardından spora/günlük yaşama güvenli dönüşü sağlayacak zorlu denge çalışmalarına geçilir.",
    sss: [
      { soru: "Burkulmadan hemen sonra sıcak su tutmak iyi gelir mi?", cevap: "Kesinlikle hayır. İlk 48-72 saat sıcak uygulama şişliği ve kanamayı artırır; buz (soğuk) uygulaması yapılmalıdır." },
      { soru: "Ayağım sürekli burkuluyor, ne yapmalıyım?", cevap: "Bu, kronik instabilite (dengesizlik) göstergesidir. Bağlar esnemiş ve kaslar denge hissini kaybetmiştir; yoğun bir stabilizasyon ve denge fizyoterapisi şarttır." },
      { soru: "Alçı veya atel ne zaman gerekli?", cevap: "Bağ kopuklarında veya eşlik eden kırık şüphesinde doktor tavsiyesiyle gerekebilir, ancak hafif/orta derece burkulmalarda erken hareketlilik iyileşmeyi hızlandırır." }
    ]
  },
  {
    slug: "asil-tendinopatisi",
    title: "Aşil Tendinopatisi",
    category: "ayak-ve-ayak-bilegi",
    categoryTitle: "Ayak ve Ayak Bileği",
    icon: "activity",
    metaTitle: "Aşil Tendiniti Tedavisi | Aksaray Fizyoterapi - Ata Fizyoterapi",
    metaDescription: "Topuk arkasında ağrıya neden olan Aşil tendinopatisi / tendiniti problemi için Aksaray'da özel germe ve eksantrik kuvvetlendirme programları.",
    heroDescription: "Vücudun en büyük tendonu olan Aşil tendonunun aşırı yüklenme sonucu yıpranması ve ağrılı hale gelmesidir.",
    nedir: "Aşil tendinopatisi (tendinit/tendinozis), baldır kaslarını topuk kemiğine bağlayan tendonun tekrarlayan stres veya aniden artan aktivite nedeniyle mikro düzeyde hasar görmesidir. İltihaplı (akut) dönemden ziyade dokunun kalitesinin bozulduğu kronik yıpranma tablosu daha sık görülür.",
    belirtileri: [
      "Topuğun arkasında veya tendon boyunca sabahları belirginleşen tutukluk ve ağrı",
      "Spor veya yürüyüş sonrası tendon üzerinde hassasiyet",
      "Aşil tendonu üzerinde kalınlaşma veya şişlik (nodül) oluşumu",
      "Parmak ucuna yükselirken veya merdiven çıkarken ağrı"
    ],
    nedenleri: [
      "Koşu mesafesini, hızını veya sıklığını aniden artırmak",
      "Gergin ve kısa baldır (calf) kaslarına sahip olmak",
      "Yanlış ayakkabı seçimi veya sert zeminde koşu yapmak",
      "Düz tabanlık gibi biyomekanik problemler"
    ],
    fizyoterapiNasilYardimci: "Tendon problemlerinde istirahat tek başına yeterli değildir; tendonun yük taşıma kapasitesinin artırılması gerekir. Aksaray Ata Fizyoterapi'de, doku iyileşmesini uyaran teknikler ve aşamalı yüklenme egzersizleriyle tendonun eski gücüne kavuşmasını hedefliyoruz.",
    tedaviYontemleri: [
      { name: "Eksantrik Egzersiz Eğitimi", description: "Kas boyunun uzayarak kasıldığı (örneğin basamaktan topuğu yavaşça aşağı indirme) ve tendon iyileşmesini tetikleyen özel çalışmalardır." },
      { name: "Miyofasyal Gevşetme", description: "Aşil tendonuna binen gerilimi azaltmak için baldır kaslarındaki yapışıklıkların manuel olarak açılması." },
      { name: "Graston Tekniği", description: "Kronikleşmiş tendon zedelenmelerinde skar dokusunu parçalamak ve kanlanmayı artırmak için uygulanır." },
      { name: "Sıcak/Soğuk Uygulamalar", description: "Aktivite sonrası ağrıyı yönetmek için buz, kronik dokularda dolaşımı artırmak için ısı tercih edilebilir." }
    ],
    tedaviSureci: "Süreç genellikle tendonun tepkisine göre ilerler. Aktivite modifikasyonu (koşunun azaltılması vb.) ile başlanır, ağrı izin verdikçe izometrik, eksantrik ve ardından dinamik sıçrama egzersizlerine doğru aşamalı bir program yürütülür.",
    sss: [
      { soru: "Aşil tendiniti için topuk yükseltici (kama) takmak işe yarar mı?", cevap: "Akut ağrılı dönemde tendona binen gerilimi azaltmak için geçici süre kullanılabilir, ancak sürekli kullanım baldır kasını kısaltacağı için önerilmez." },
      { soru: "Ağrı varken spora devam edebilir miyim?", cevap: "Tendon iyileşmesi için tamamen hareketsizlik iyi değildir, ancak ağrıyı provoke eden aktiviteler (koşu, zıplama) modifiye edilmelidir." },
      { soru: "İyileşme süreci ne kadardır?", cevap: "Tendon dokusunun kanlanması zayıf olduğundan süreç 3 ila 6 ay gibi uzun bir zaman dilimine yayılabilir, sabır ve düzenli egzersiz şarttır." }
    ]
  },
  {
    slug: "plantar-fasiit",
    title: "Plantar Fasiit (Topuk Dikeni Öncesi Tablo)",
    category: "ayak-ve-ayak-bilegi",
    categoryTitle: "Ayak ve Ayak Bileği",
    icon: "activity",
    metaTitle: "Plantar Fasiit ve Topuk Dikeni Fizyoterapi | Aksaray",
    metaDescription: "Sabahları ilk adımlarda topukta şiddetli ağrı oluşturan plantar fasiit için Aksaray Ata Fizyoterapi'de etkin çözüm yolları.",
    heroDescription: "Ayak tabanını destekleyen kalın bağ dokusunun (plantar fasya) zedelenmesi ve iltihaplanmasıdır.",
    nedir: "Plantar fasiit, topuk kemiğinden başlayıp ayak parmaklarına kadar uzanan yay şeklindeki fasya dokusunun aşırı gerilmesi sonucu mikroyırtıklar oluşması durumudur. Uzun süre tedavi edilmediğinde, bedenin bu bölgeyi koruma çabası sonucu topuk kemiğinde kalsiyum birikmesiyle 'Topuk Dikeni' oluşumuna zemin hazırlayabilir.",
    belirtileri: [
      "Özellikle sabah yataktan kalkıp atılan ilk adımlarda bıçak saplanır tarzda topuk ağrısı",
      "Uzun süre oturduktan sonra ayağa kalkınca hissedilen ağrı",
      "Ağrının yürümeye başladıktan birkaç dakika sonra hafiflemesi",
      "Uzun süre ayakta kalındığında günün ilerleyen saatlerinde artan künt sızı"
    ],
    nedenleri: [
      "Düz tabanlık (pes planus) veya yüksek kavisli ayak yapısı",
      "Aşırı kilo veya gebelik (ayak tabanına binen yükün artması)",
      "Sert zeminlerde uzun süre ayakta kalmayı gerektiren meslekler",
      "Baldır kaslarının ve Aşil tendonunun esneklik kaybı"
    ],
    fizyoterapiNasilYardimci: "Fasya üzerindeki gerilimi azaltmak ve dokunun elastikiyetini geri kazandırmak amaçlanır. Aksaray Ata Fizyoterapi'de sadece ayak tabanına odaklanmakla kalmıyor, arka bacak kasları ve ayak bileği mekaniğini de ele alan kapsamlı bir fizyoterapi programı uyguluyoruz.",
    tedaviYontemleri: [
      { name: "Germe Egzersizleri", description: "Hem ayak tabanı (plantar fasya) hem de baldır kaslarına yönelik spesifik, uzun süreli esnemeler." },
      { name: "Manuel Terapi ve Masaj", description: "Ayak tabanındaki gergin dokunun elle yumuşatılması ve eklem mobilizasyonları." },
      { name: "Kinesiyolojik Bantlama", description: "Ayağın kavisini destekleyerek plantar fasyaya binen yükü hafifletir." },
      { name: "Soğuk Uygulama ve Masaj", description: "Dondurulmuş bir su şişesini ayak altında yuvarlayarak yapılan etkili ev egzersizidir." }
    ],
    tedaviSureci: "İlk aşamada ağrı kontrolü ve dokuyu korumak için tabanlık kullanımı veya bantlama yapılır. Sabah ağrılarını kırmak için uyandıktan hemen sonra yapılacak yatak içi germeler öğretilir. Fasyanın dayanıklılığını artıracak ayak içi kaslarını güçlendirme çalışmaları eklenir.",
    sss: [
      { soru: "Topuk dikeni kırmak diye bir şey var mı?", cevap: "Kemik çıkıntısını (dikeni) kırmak veya yok etmek fizyoterapinin değil cerrahinin konusudur ancak ağrıya neden olan diken değil, oradaki iltihaplı fasya dokusudur. Fasyadaki gerginlik çözüldüğünde diken kalsa bile ağrı biter." },
      { soru: "Yürüyüş yapmak iyi gelir mi?", cevap: "Akut ve ağrılı dönemde uzun yürüyüşler fasyayı daha fazla zedeleyebilir, istirahat ve doğru ayakkabı/tabanlık önemlidir." },
      { soru: "Silikon topukluk tek başına işe yarar mı?", cevap: "Topuğa binen darbeyi emerek geçici rahatlama sağlar ancak ayak mekaniğini veya kas gerginliğini düzeltmediği için kalıcı çözüm sağlamaz." }
    ]
  },
  {
    slug: "topuk-agrisi",
    title: "Genel Topuk Ağrısı",
    category: "ayak-ve-ayak-bilegi",
    categoryTitle: "Ayak ve Ayak Bileği",
    icon: "activity",
    metaTitle: "Topuk Ağrısı Nedenleri ve Fizyoterapi | Aksaray Ata Fizyoterapi",
    metaDescription: "Aksaray'da çeşitli nedenlerle oluşan topuk bölgesi ağrılarına yönelik kişiye özel değerlendirme ve rehabilitasyon yaklaşımları.",
    heroDescription: "Plantar fasiit, yağ yastıkçığı atrofisi veya sinir sıkışması gibi farklı etkenlerle topuk bölgesinde gelişen ağrı şikayetleridir.",
    nedir: "Topuk ağrısı en sık plantar fasiit veya aşil tendiniti kaynaklı olsa da, topuğun altındaki yağ dokusunun incelmesi (yağ yastıkçığı atrofisi), tarsal tünel sendromu (sinir sıkışması) veya stres kırıkları gibi farklı nedenlerle de ortaya çıkabilir. Doğru teşhis tedavinin en önemli adımıdır.",
    belirtileri: [
      "Topuğun tam altında veya arkasında yaygın veya noktasal ağrı",
      "Çıplak ayakla sert zemine basamama",
      "Topukta yanma, uyuşma veya karıncalanma hissi (sinir kökenliyse)",
      "Gün boyu süren sızı veya zonklama"
    ],
    nedenleri: [
      "Yaşla birlikte topuk altındaki koruyucu yağ dokusunun incelmesi",
      "Aşırı kullanım veya yanlış ayakkabı (özellikle sert tabanlı olanlar)",
      "Ayak bileği iç kısmından geçen sinirin sıkışması (Tarsal Tünel Sendromu)",
      "Aşırı kiloya bağlı artan mekanik stres"
    ],
    fizyoterapiNasilYardimci: "Ağrının biyomekanik mi, yapısal mı yoksa sinirsel mi olduğu tespit edilir. Aksaray Ata Fizyoterapi olarak, ayak postürünü desteklemek, şok emilimini artırmak ve çevre kasları kuvvetlendirmek üzere bireyselleştirilmiş yöntemler sunuyoruz.",
    tedaviYontemleri: [
      { name: "Eklem Mobilizasyonu", description: "Ayak bileği ve küçük ayak kemiklerinin doğru biyomekanik ile çalışmasını sağlar." },
      { name: "Tabanlık ve Ayakkabı Önerileri", description: "Topuğa binen basıncı dağıtmak için uygun modifikasyonların belirlenmesi." },
      { name: "Nöromobilizasyon", description: "Eğer problem sinir kökenliyse, sinirin geçtiği tünellerde rahatlamasını sağlayacak teknikler." },
      { name: "Denge Egzersizleri", description: "Ayağın yere temasında ağırlığın homojen dağılmasını sağlayan proprioseptif çalışmalar." }
    ],
    tedaviSureci: "Uygulanacak süreç tamamen ağrının asıl nedenine (yağ yastığı zedelenmesi mi, fasya mı, sinir mi?) göre şekillenir. Koruma fazı ile başlayıp, ayak mekaniğinin düzeltilmesiyle devam eder.",
    sss: [
      { soru: "Evde çıplak ayakla gezmek topuk ağrısını artırır mı?", cevap: "Evet, özellikle sert zeminlerde çıplak ayakla yürümek topuğun şok emme mekanizmasını zorlar, ev içi destekleyici bir terlik kullanılmalıdır." },
      { soru: "Ağrım topuğumda yanma şeklinde, nedeni ne olabilir?", cevap: "Yanma ve karıncalanma hissi genellikle sinir sıkışmasını (Tarsal Tünel Sendromu) işaret edebilir, özel testlerle değerlendirilmesi gerekir." },
      { soru: "Soğuk uygulama her topuk ağrısına iyi gelir mi?", cevap: "İltihabi süreçlerde ve fasyal zorlanmalarda faydalıdır, ancak yağ yastıkçığı problemlerinde silikon topuk destekleri daha önceliklidir." }
    ]
  },

  // ----------------------------------------------------
  // 5. OMURGA VE POSTÜR (omurga-ve-postur)
  // ----------------------------------------------------
  {
    slug: "skolyoz",
    title: "Skolyoz",
    category: "omurga-ve-postur",
    categoryTitle: "Omurga ve Postür",
    icon: "activity",
    metaTitle: "Skolyoz Tedavisi ve Egzersizleri | Aksaray Ata Fizyoterapi",
    metaDescription: "Aksaray'da skolyoz (omurga eğriliği) için Schroth yöntemi temelinde üç boyutlu egzersizler ve kişiye özel fizyoterapi uygulamaları.",
    heroDescription: "Omurganın göğüs veya bel bölgesinde sağa, sola doğru eğilmesi ve kendi etrafında dönmesi ile karakterize üç boyutlu bir deformitedir.",
    nedir: "Skolyoz, arkadan bakıldığında düz olması gereken omurganın 'C' veya 'S' şeklini almasıdır. Sadece yana doğru bir eğilme değil, aynı zamanda omurların kendi ekseni etrafında dönmesini (rotasyon) de içerir. En sık büyüme çağındaki çocuk ve ergenlerde (idiopatik) görülür, ancak yetişkinlerde de duruş bozukluğuna veya kireçlenmeye bağlı ortaya çıkabilir.",
    belirtileri: [
      "Omuzlardan veya kürek kemiklerinden birinin diğerinden yüksek olması",
      "Öne eğilince sırtta veya belde tek taraflı tümsek (kamburluk) oluşması (Adams testi)",
      "Bel çukurlarındaki asimetri ve bir kalçanın daha yüksek durması",
      "İleri derecelerde sırt ve bel ağrısı, nefes darlığı"
    ],
    nedenleri: [
      "Büyük bir kısmının (%80) nedeni kesin olarak bilinmemektedir (İdiopatik skolyoz).",
      "Doğuştan omurga anormallikleri (Konjenital skolyoz).",
      "Kas ve sinir hastalıkları (Serebral palsi, kas distrofisi vb.).",
      "İleri yaşta omurga dejenerasyonu (Yetişkin skolyozu)."
    ],
    fizyoterapiNasilYardimci: "Skolyoz tedavisinde fizyoterapinin amacı; eğriliğin ilerlemesini durdurmak, asimetrik postürü düzeltmek, ağrıyı azaltmak ve solunum kapasitesini artırmaktır. Aksaray Ata Fizyoterapi olarak, skolyoza özel üç boyutlu egzersiz yaklaşımları uyguluyor ve çocukların büyüme sürecini yakından takip ediyoruz.",
    tedaviYontemleri: [
      { name: "Üç Boyutlu Skolyoz Egzersizleri (Schroth vb. prensipler)", description: "Omurganın asimetrik yapısını solunum teknikleri ve özel kas kasılmaları ile düzeltmeye odaklanan spesifik bir yöntemdir." },
      { name: "Asimetrik Kuvvetlendirme", description: "Omurganın zayıf ve uzamış tarafındaki kasları güçlendirmek." },
      { name: "Miyofasyal Gevşetme", description: "Kısalmış ve gergin olan iç bükey (konkav) taraf dokularının esnetilmesi." },
      { name: "Postür Farkındalık Eğitimi", description: "Bireyin günlük hayatta doğru omurga dizilimini korumayı öğrenmesi." }
    ],
    tedaviSureci: "Skolyoz derecesine (Cobb açısı) göre plan yapılır. Ergenlik döneminde kemik büyümesi devam ettiği için süreç yoğun egzersiz, duruş alışkanlıklarının değişimi ve gerekirse korse kullanımı ile birlikte multidisipliner yürütülür.",
    sss: [
      { soru: "Ağır çanta taşımak skolyoz yapar mı?", cevap: "Yanlış duruş veya ağır çanta taşımak yapısal skolyoz nedeni değildir, ancak var olan bir asimetriyi veya bel ağrılarını tetikleyebilir." },
      { soru: "Skolyoz tamamen düzelir mi?", cevap: "Amaç öncelikle eğriliğin büyüme dönemi bitene kadar artmasını engellemektir; egzersizlerle eğrilik derecesinde düzelmeler ve estetik görünümde ciddi iyileşmeler sağlanabilir." },
      { soru: "Korse kullanırken egzersiz yapılmalı mı?", cevap: "Kesinlikle evet. Korse omurgayı pasif olarak tutarken, korse içindeyken veya korse çıkarıldığında kasların güçlü kalması için fizyoterapi şarttır." }
    ]
  },
  {
    slug: "kifoz",
    title: "Kifoz (Kamburluk)",
    category: "omurga-ve-postur",
    categoryTitle: "Omurga ve Postür",
    icon: "activity",
    metaTitle: "Kifoz (Kamburluk) Egzersizleri | Aksaray Ata Fizyoterapi",
    metaDescription: "Sırt bölgesinde artmış kamburluk (kifoz) için Aksaray'da postür analizi, manuel terapi ve özel egzersiz programları.",
    heroDescription: "Omurganın sırt bölgesinde normalden fazla öne doğru eğilmesi, kambur bir görünüm almasıdır.",
    nedir: "Kifoz (kamburluk), sırt omurgasının fizyolojik eğriliğinin aşırı artmasıdır. En sık kötü duruşa bağlı (postüral kifoz) gelişirken, ergenlikte büyüme kıkırdaklarının etkilenmesiyle (Scheuermann kifozu) veya ileri yaşta kemik erimesine bağlı çökme kırıklarıyla da ortaya çıkabilir.",
    belirtileri: [
      "Sırt bölgesinde gözle görülür kamburlaşma ve omuzların öne çökmesi",
      "Sırt, boyun ve omuzlarda kronik yorgunluk ve kas ağrısı",
      "Uzun süre ayakta kalma veya oturma sonrası artan sızı",
      "İleri derecelerde nefes alıp vermede zorluk (göğüs kafesi baskısı)"
    ],
    nedenleri: [
      "Sürekli masa başında, bilgisayar/telefon ekranına eğilerek çalışmak",
      "Göğüs kaslarının (pektoral) gergin ve kısa, sırt kaslarının zayıf olması",
      "Gelişimsel omurga anormallikleri (Scheuermann hastalığı)",
      "Osteoporoz (kemik erimesi) ve yaşlanma"
    ],
    fizyoterapiNasilYardimci: "Duruşa bağlı postüral kifozda doğru egzersizlerle tam düzelme sağlanabilir. Yapısal kifozda ise esnekliği artırmak ve ilerlemeyi durdurmak amaçlanır. Aksaray Ata Fizyoterapi'de, kaslardaki 'gergin-zayıf' dengesizliğini çözerek omurganızı dikleştirmeyi hedefliyoruz.",
    tedaviYontemleri: [
      { name: "Postür Eğitimi", description: "Bedenin uzaydaki pozisyon algısını geliştirerek doğru oturma ve ayakta durma alışkanlıkları kazandırmak." },
      { name: "Germe Egzersizleri", description: "Özellikle omuzları öne çeken kısa göğüs (pektoral) ve ön boyun kaslarını esnetmek." },
      { name: "Kuvvetlendirme Egzersizleri", description: "Sırt, kürek kemiği çevresi ve core (merkez) kaslarını güçlendirerek omurgayı arkadan desteklemek." },
      { name: "Mobilizasyon", description: "Sırt omurlarının (torakal bölge) hareket yeteneğini artırarak katılığı kırmak." }
    ],
    tedaviSureci: "Detaylı analizle problemin yapısal mı postüral mi olduğu belirlenir. Süreç klinikte yapılan manuel uygulamalar, göğüs kafesi solunum egzersizleri ve hastanın günlük rutinine entegre edilen dik duruş egzersizleriyle ilerler.",
    sss: [
      { soru: "Dik durma korseleri işe yarar mı?", cevap: "Sürekli korse kullanımı sırt kaslarını tembelleştirebilir. Biz pasif korseler yerine 'kendi kaslarınızdan oluşan bir korse' yaratmanızı öneriyoruz." },
      { soru: "Kamburluk tamamen geçer mi?", cevap: "Duruş bozukluğuna bağlı kifoz fizyoterapi ve egzersizle tamamen düzelebilir; yapısal durumlarda ise maksimum kapasite ve ağrısızlık hedeflenir." },
      { soru: "Kaç seans gereklidir?", cevap: "Kasların yeniden programlanması zaman alır, gözle görülür kalıcı sonuçlar için genellikle haftalar süren düzenli bir çaba gereklidir." }
    ]
  },
  {
    slug: "postur-bozukluklari",
    title: "Postür Bozuklukları",
    category: "omurga-ve-postur",
    categoryTitle: "Omurga ve Postür",
    icon: "activity",
    metaTitle: "Postür Bozukluğu Düzeltme | Aksaray Fizyoterapi",
    metaDescription: "Boyun düzleşmesi, kamburluk, öne baş postürü gibi duruş bozukluklarını Aksaray Ata Fizyoterapi'de kişiye özel analiz ve egzersizle düzeltin.",
    heroDescription: "Vücut kısımlarının ideal diziliminden uzaklaşması sonucu oluşan kas-iskelet sistemi dengesizlikleridir.",
    nedir: "Postür (duruş) bozukluğu, yerçekimine karşı vücudu destekleyen kasların ve bağların dengesini yitirmesiyle omurganın doğal eğriliklerinin bozulmasıdır. En sık karşılaşılanları; başın öne gitmesi (forward head), omuzların yuvarlaklaşması, bel çukurunun artması (hiperlordoz) ve düzleşmelerdir.",
    belirtileri: [
      "Boyun, sırt ve belde sık sık yaşanan tutulmalar ve ağrılar",
      "Aynaya bakıldığında asimetrik omuz seviyeleri veya çökük göğüs",
      "Erken yorulma, düşük enerji ve kas gerginliği",
      "Baş ağrıları ve çene eklemi problemleri"
    ],
    nedenleri: [
      "Sedanter (hareketsiz) yaşam tarzı ve egzersiz eksikliği",
      "Ergonomik olmayan çalışma alanları ve uzun süreli ekran kullanımı",
      "Yanlış yatak ve yastık seçimi",
      "Büyüme dönemindeki hızlı boy uzaması veya psikolojik faktörler (içe kapanıklık)"
    ],
    fizyoterapiNasilYardimci: "İdeal postürü sağlamak sadece dik durmaya çalışmakla olmaz; kısa kasların uzatılması ve uzun/zayıf kasların kuvvetlendirilmesi gerekir. Aksaray Ata Fizyoterapi'de, detaylı postür analizi sonrası kas gruplarınızdaki dengesizlikleri haritalandırıp size özel bir yeniden programlama uyguluyoruz.",
    tedaviYontemleri: [
      { name: "Miyofasyal Gevşetme", description: "Yanlış duruş nedeniyle spazmda kalmış kas ve fasya dokusunu rahatlatır." },
      { name: "Klinik Pilates ve Stabilizasyon", description: "Vücudun güç merkezini (core) aktive ederek omurgaya içsel destek sağlar." },
      { name: "Kinesiyolojik Bantlama", description: "Vücuda doğru duruşu hatırlatıcı (proprioseptif) geri bildirim vermek amacıyla uygulanır." },
      { name: "Ergonomi Eğitimi", description: "İş yeri ve ev ortamında vücut mekaniğine uygun düzenlemeler yapılması." }
    ],
    tedaviSureci: "Değerlendirme sonucunda sorunlu bölgeler belirlenir. Süreç, farkındalık eğitimi ile başlar. Klinik uygulamaların yanı sıra evde/işte yapılacak kısa molalı esneme hareketleri tedavi planının ayrılmaz bir parçasıdır.",
    sss: [
      { soru: "Kendi kendime dik durarak düzelebilir miyim?", cevap: "Eğer kaslarınızda kısalık ve zayıflık oluşmuşsa sadece zihinsel eforla dik durmak uzun sürmez ve sırt ağrısı yapar, profesyonel egzersiz şarttır." },
      { soru: "Postür bozukluğu fıtığa neden olur mu?", cevap: "Evet. Bozulan dizilim diskler üzerine orantısız yük bindirerek uzun vadede boyun ve bel fıtıklarına zemin hazırlar." },
      { soru: "Hangi sporlar postüre iyi gelir?", cevap: "Pilates, yüzme ve yoga gibi vücut farkındalığını ve core stabilitesini artıran branşlar çok faydalıdır." }
    ]
  },

  // ----------------------------------------------------
  // 6. NÖROLOJİK REHABİLİTASYON (norolojik-rehabilitasyon)
  // ----------------------------------------------------
  {
    slug: "inme-felc",
    title: "İnme / Felç (Hemipleji)",
    category: "norolojik-rehabilitasyon",
    categoryTitle: "Nörolojik Rehabilitasyon",
    icon: "activity",
    metaTitle: "İnme ve Felç Rehabilitasyonu | Aksaray Ata Fizyoterapi",
    metaDescription: "İnme (felç) sonrası hareket, denge ve yürüyüş fonksiyonlarını yeniden kazanmak için Aksaray'da kapsamlı nörolojik rehabilitasyon.",
    heroDescription: "Beyne giden kan akışının kesilmesi veya beyin kanaması sonucu vücudun bir yarısında hareket ve duyu kaybı oluşmasıdır.",
    nedir: "İnme (Hemipleji), beyin damarlarının tıkanması veya kanaması nedeniyle beyin dokusunun hasar görmesiyle ortaya çıkar. Genellikle vücudun sağ veya sol yarısında kol ve bacak kaslarında güçsüzlük, spastisite (kas sertliği), konuşma veya yutma bozuklukları gibi belirtilerle seyreder.",
    belirtileri: [
      "Vücudun tek tarafında ani güç kaybı veya tam hareketsizlik",
      "Yüzde asimetri (bir tarafa kayma)",
      "Konuşmada bozulma, denge kaybı ve yürüme güçlüğü",
      "Etkilenen tarafta duyu azalması ve sonrasında gelişen kas kasılmaları (spastisite)"
    ],
    nedenleri: [
      "Beyin damarı tıkanıklığı (İskemik inme)",
      "Beyin kanaması (Hemorajik inme)",
      "Yüksek tansiyon, diyabet, ritim bozuklukları ve kolesterol",
      "Sigara kullanımı ve aşırı stres"
    ],
    fizyoterapiNasilYardimci: "İnme tedavisinde zaman kritiktir; beynin 'nöroplastisite' (kendini yeniden organize etme) yeteneği sayesinde kaybolan fonksiyonlar diğer beyin hücreleri tarafından öğrenilebilir. Aksaray Ata Fizyoterapi'de hastalarımızın yeniden bağımsız oturabilmesi, ayakta durabilmesi ve yürüyebilmesi için yoğun rehabilitasyon programları uygularız.",
    tedaviYontemleri: [
      { name: "Nöromusküler Eğitim (Bobath, PNF vb.)", description: "Beyin ve kaslar arasındaki iletişimi yeniden kurmaya yönelik özel teknikler." },
      { name: "Denge ve Koordinasyon Egzersizleri", description: "Oturma, ayakta durma ve yürüme aşamalarında gövde kontrolünü sağlamak." },
      { name: "Spastisite Yönetimi", description: "Aşırı kasılan kasları gevşetmek için germe, doğru pozisyonlama ve gerektiğinde cihaz uygulamaları." },
      { name: "Yürüyüş Eğitimi", description: "Doğru yürüme paternini (şeklini) kazandırmak için destekli veya desteksiz uygulamalar." }
    ],
    tedaviSureci: "Hastanın hayati tehlikeyi atlatmasının hemen ardından yatak içi egzersizlerle (pasif hareketler, dönme) başlanır. Ardından oturma dengesi, ayağa kalkma, ağırlık aktarma ve en son yürüme safhalarına geçilir. Bu süreç aylar sürebilir ve ailenin sürece katılımı çok önemlidir.",
    sss: [
      { soru: "Fizyoterapiye ne zaman başlanmalı?", cevap: "Tıbbi durum stabilize olduktan (genellikle ilk birkaç gün içinde) hemen sonra erken rehabilitasyona başlanması iyileşme potansiyelini artırır." },
      { soru: "Eski halime dönebilir miyim?", cevap: "Bu hasarın büyüklüğüne ve rehabilitasyona ne kadar erken/yoğun başlandığına bağlıdır. Hedefimiz her zaman hastayı olabilecek en bağımsız seviyeye getirmektir." },
      { soru: "Evde fizyoterapi hizmeti veriyor musunuz?", cevap: "Kliniğe gelemeyecek durumdaki inme hastaları için süreç, koşullara bağlı olarak ev ortamında da planlanabilmektedir." }
    ]
  },
  {
    slug: "parkinson",
    title: "Parkinson Hastalığı",
    category: "norolojik-rehabilitasyon",
    categoryTitle: "Nörolojik Rehabilitasyon",
    icon: "activity",
    metaTitle: "Parkinson Fizyoterapisi | Aksaray Ata Fizyoterapi",
    metaDescription: "Parkinson hastalarında denge, titreme (tremor) ve hareket yavaşlığına karşı bağımsızlığı destekleyen Aksaray fizyoterapi programları.",
    heroDescription: "Beyinde dopamin üreten hücrelerin kaybı sonucu hareketlerde yavaşlama, titreme ve kas sertliği ile giden ilerleyici bir hastalıktır.",
    nedir: "Parkinson hastalığı, sinir sistemini etkileyen kronik nörolojik bir hastalıktır. Hareketlerin kontrolünden sorumlu dopamin eksikliği nedeniyle vücut hareketleri giderek yavaşlar (bradikinezi), istirahat halindeyken elde titremeler başlar ve kaslarda dişli çark benzeri katılıklar oluşur.",
    belirtileri: [
      "Ellerde, kollarda veya çenede istirahat halindeyken titreme (tremor)",
      "Hareketleri başlatmada zorluk ve genel yavaşlık",
      "Küçük adımlarla, öne eğik pozisyonda sürtünerek yürüme",
      "Mimiklerde azalma (maske yüz) ve denge kayıpları"
    ],
    nedenleri: [
      "Beynin substantia nigra bölgesindeki dopamin üreten nöronların ölümü",
      "Genetik faktörler ve çevresel toksinlere maruziyet",
      "İleri yaş (Genellikle 60 yaş sonrası başlar)"
    ],
    fizyoterapiNasilYardimci: "İlaç tedavisi belirtileri kontrol ederken, fizyoterapi kas esnekliğini korur, yürüyüş kalitesini artırır ve düşmeleri engeller. Aksaray Ata Fizyoterapi'de büyük genlikli hareketler ve ritmik uyarılar kullanarak beyin-kas bağlantısını daha akıcı hale getirmeyi hedefliyoruz.",
    tedaviYontemleri: [
      { name: "Büyük Genlikli Egzersizler (örn: LSVT BIG prensipleri)", description: "Hareketlerin küçülmesini engellemek için büyük, abartılı ve hızlı hareket etmeyi öğreten spesifik çalışmalardır." },
      { name: "Ritmik İşitsel Uyarı", description: "Metronom veya müzik eşliğinde yürüyüş ritmini düzelterek adımların donmasını engeller." },
      { name: "Denge Egzersizleri", description: "Postür reflekslerini geliştirerek düşme riskini minimuma indirir." },
      { name: "Germe ve Esneklik", description: "Sertleşen (rijit) gövde ve uzuv kaslarını uzatarak hareket açıklığını korur." }
    ],
    tedaviSureci: "Hastalık ilerleyici olduğu için, fizyoterapi dönemsel bir tedavi değil, bir yaşam tarzı olmalıdır. Hastanın bağımsızlık seviyesini (giyinme, kalkma, yürüme) koruyacak günlük bir egzersiz rutini oluşturulur ve klinikte sistemli olarak geliştirilir.",
    sss: [
      { soru: "Fizyoterapi titremeyi (tremor) geçirir mi?", cevap: "Titreme daha çok ilaçlarla kontrol edilir; fizyoterapinin asıl gücü hareket yavaşlığını kırmak, dengeyi sağlamak ve duruşu düzeltmektir." },
      { soru: "Parkinson hastaları ne tür egzersizler yapmalı?", cevap: "Büyük adımlar atma, gövdeyi çevirme, ritmik yürüyüşler ve dans gibi bedeni geniş açılarda kullandıran egzersizler çok faydalıdır." },
      { soru: "Yürüken donup kalıyorum (freezing), ne yapmalıyım?", cevap: "Bu durum için yerde çizgiler hayal etme veya ritmik komutlarla ('1-2-3 adım at') adım atma stratejileri hastalarımıza öğrettiğimiz pratik çözümlerdendir." }
    ]
  },
  {
    slug: "multiple-skleroz",
    title: "Multiple Skleroz (MS)",
    category: "norolojik-rehabilitasyon",
    categoryTitle: "Nörolojik Rehabilitasyon",
    icon: "activity",
    metaTitle: "MS (Multiple Skleroz) Fizyoterapisi | Aksaray Ata Fizyoterapi",
    metaDescription: "Multiple Skleroz (MS) hastalığında kas gücünü korumak, yorgunluğu yönetmek ve dengeyi artırmak için Aksaray'da kişiye özel egzersizler.",
    heroDescription: "Bağışıklık sisteminin beyin ve omurilikteki sinir kılıflarına zarar vermesiyle ortaya çıkan kronik bir sinir sistemi hastalığıdır.",
    nedir: "Multiple Skleroz (MS), sinir hücrelerinin etrafını saran ve iletimi hızlandıran miyelin kılıfının zedelenmesi (demiyelinizasyon) sonucu ortaya çıkar. Sinir iletimi yavaşladığı veya koptuğu için hastadan hastaya değişen görme kaybı, uyuşma, güçsüzlük ve denge sorunları ataklar halinde veya ilerleyici şekilde görülebilir.",
    belirtileri: [
      "Çabuk yorulma (MS yorgunluğu) ve enerji düşüklüğü",
      "Kollarda ve bacaklarda güçsüzlük, uyuşma veya karıncalanma",
      "Denge ve koordinasyon kayıpları (ataksi)",
      "Kaslarda istemsiz kasılmalar (spastisite)"
    ],
    nedenleri: [
      "Otoimmün reaksiyon (vücudun kendi dokularına saldırması)",
      "Genetik yatkınlık ve çevresel tetikleyiciler (D vitamini eksikliği, bazı virüsler)"
    ],
    fizyoterapiNasilYardimci: "MS'te fizyoterapinin en büyük rolü, fonksiyonel kapasiteyi korumak, spastisiteyi yönetmek ve MS yorgunluğu ile başa çıkmayı öğretmektir. Aksaray Ata Fizyoterapi'de, yorgunluk eşiğinizi aşmadan maksimum verim alabileceğiniz serin ortam egzersizleri ve enerji koruma teknikleri uyguluyoruz.",
    tedaviYontemleri: [
      { name: "Kuvvetlendirme ve Aerobik Egzersiz", description: "Hafif-orta şiddette yapılarak dayanıklılığı artırır ve MS yorgunluğunu paradoksal olarak azaltır." },
      { name: "Koordinasyon Egzersizleri", description: "Bozulan hareket uyumunu sağlamak için frenkel egzersizleri gibi spesifik tekrarlı hareketler." },
      { name: "Spastisite Yönetimi", description: "Kasılmaları hafifletmek için soğuk uygulama destekli germe teknikleri." },
      { name: "Pelvik Taban Rehabilitasyonu", description: "Sık görülen mesane/bağırsak kontrol problemlerini yönetmek için kullanılabilir." }
    ],
    tedaviSureci: "Süreç atak (alevlenme) ve remisyon (sakinleşme) dönemlerine göre değişir. Atak dönemlerinde daha hafif esnemeler uygulanırken, sakin dönemlerde kas kuvvetini ve kardiyovasküler kapasiteyi artırıcı düzenli bir program izlenir.",
    sss: [
      { soru: "Egzersiz yaparsam daha çok yorulmaz mıyım?", cevap: "Tam tersine, doğru dozda (kişiyi bitkin düşürmeyen) düzenli aerobik egzersizin MS yorgunluğunu azalttığı bilimsel olarak kanıtlanmıştır." },
      { soru: "Sıcak hava MS'i etkiler mi?", cevap: "Evet, sıcak su veya sıcak hava ortamı sinir iletimini daha da yavaşlatarak belirtileri geçici olarak kötüleştirebilir. Egzersizler serin ortamda yapılmalıdır." },
      { soru: "Atak geçirirken fizyoterapi yapılır mı?", cevap: "Akut atak döneminde genellikle yoğun egzersiz önerilmez, doktorun tıbbi müdahalesi beklenir ve istirahat edilir." }
    ]
  },
  {
    slug: "serebral-palsi",
    title: "Serebral Palsi (CP)",
    category: "norolojik-rehabilitasyon",
    categoryTitle: "Nörolojik Rehabilitasyon",
    icon: "activity",
    metaTitle: "Serebral Palsi Rehabilitasyonu | Aksaray Ata Fizyoterapi",
    metaDescription: "Serebral Palsi'li çocuklar ve bireyler için motor gelişim, postür kontrolü ve kas dengesine yönelik Aksaray nörolojik fizyoterapi.",
    heroDescription: "Bebeklik veya erken çocukluk döneminde gelişmekte olan beyindeki bir hasara bağlı oluşan kalıcı hareket ve postür bozukluğudur.",
    nedir: "Serebral Palsi (CP), doğum öncesi, sırası veya sonrasında (oksijensiz kalma, enfeksiyon, kanama vb. nedenlerle) beyinde meydana gelen zedelenmedir. Beyin hasarı ilerleyici değildir, ancak buna bağlı ortaya çıkan kas kısalıkları, eklem deformiteleri ve hareket güçlükleri zamanla değişebilir veya ilerleyebilir.",
    belirtileri: [
      "Motor gelişim aşamalarında (baş tutma, oturma, yürüme) gecikme",
      "Kas tonusunda anormallikler (aşırı sertlik - spastik veya aşırı gevşeklik - hipotonik)",
      "Normal olmayan refleksler ve anormal duruş pozisyonları",
      "Denge ve yürüme bozuklukları (örneğin parmak ucu yürüyüşü)"
    ],
    nedenleri: [
      "Erken doğum ve düşük doğum ağırlığı",
      "Doğum sırasında bebeğin oksijensiz kalması",
      "Anne karnında geçirilen enfeksiyonlar",
      "Doğum sonrası sarılık, menenjit veya kafa travmaları"
    ],
    fizyoterapiNasilYardimci: "CP yönetiminde fizyoterapi yaşam boyu süren bir gereksinimdir. Çocuğun potansiyeline ulaşmasını sağlamak temel amaçtır. Aksaray Ata Fizyoterapi olarak; oyun temelli yaklaşımlarla gövde kontrolünü artırmak, kasılmaları önlemek ve bağımsız hareket yeteneğini geliştirmek üzerine çalışıyoruz.",
    tedaviYontemleri: [
      { name: "Nörogelişimsel Tedavi (Bobath)", description: "Anormal hareket paternlerini engellemek ve normal hareket hissini öğretmek amacıyla özel tutuş teknikleri." },
      { name: "Uzay Terapisi / Askı Sistemleri", description: "Yerçekimine karşı destek sağlayarak bağımsız hareket ve denge çalışmalarını kolaylaştırır." },
      { name: "Cihazlama ve Ortez Takibi", description: "Eklem bozulmalarını önlemek için uygun splint/ortez (AFO vb.) kullanımının planlanması." },
      { name: "Germe ve Ağırlık Aktarımı", description: "Spastik kasları rahatlatmak ve kemik gelişimini desteklemek amaçlı çalışmalar." }
    ],
    tedaviSureci: "Çocuğun yaşına ve motor seviyesine (GMFCS) göre gerçekçi hedefler (destekli oturma, yürüme veya tekerlekli sandalye transferleri) belirlenir. Aileye yoğun eğitim verilerek fizyoterapinin sadece klinikte değil, günlük yaşamda da (beslenme, taşıma, giydirme) devam etmesi sağlanır.",
    sss: [
      { soru: "Serebral Palsi tamamen iyileşir mi?", cevap: "Beyindeki hasar tamamen geçmez ancak uygun fizyoterapi, cihazlama ve gerektiğinde cerrahi müdahalelerle çocuğun fonksiyonel kapasitesi büyük ölçüde geliştirilebilir." },
      { soru: "Aileler evde neye dikkat etmeli?", cevap: "Çocuğun evdeki oturma pozisyonuna dikkat edilmeli, fizyoterapistin öğrettiği şekilde kasları uzatacak pozisyonlamalar günlük rutine alınmalıdır." },
      { soru: "Botoks uygulaması sonrası fizyoterapi şart mı?", cevap: "Kesinlikle. Botoks kası geçici olarak gevşetir; bu fırsatı değerlendirip kası germek ve karşıt kası kuvvetlendirmek ancak fizyoterapi ile mümkündür." }
    ]
  },
  {
    slug: "denge-bozukluklari",
    title: "Denge Bozuklukları (Vertigo vb.)",
    category: "norolojik-rehabilitasyon",
    categoryTitle: "Nörolojik Rehabilitasyon",
    icon: "activity",
    metaTitle: "Denge ve Vertigo Rehabilitasyonu | Aksaray Fizyoterapi",
    metaDescription: "Baş dönmesi, sersemlik ve yaşlılığa bağlı denge kayıpları (Vertigo, Vestibüler bozukluklar) için Aksaray'da vestibüler rehabilitasyon.",
    heroDescription: "İç kulak, gözler veya sinir sistemindeki problemler kaynaklı baş dönmesi, sersemlik ve düşme korkusu durumudur.",
    nedir: "Denge; iç kulak (vestibüler sistem), gözler ve eklemlerden (propriosepsiyon) gelen bilgilerin beyinde işlenmesiyle sağlanır. Bu sistemlerden herhangi birindeki aksaklık (kristal oynaması, sinir iltihabı veya nörolojik hastalıklar) kişide etraf dönüyor hissi (vertigo) veya sürekli bir dengesizlik ve düşme riski oluşturur.",
    belirtileri: [
      "Baş hareketleriyle veya pozisyon değiştirmekle artan şiddetli baş dönmesi",
      "Sersemlik, havada yürüyor gibi hissetme",
      "Gözlerde istemsiz sıçramalar (nistagmus)",
      "Bulantı, kusma ve kalabalık ortamlarda dengeyi sağlayamama"
    ],
    nedenleri: [
      "İç kulak kristalleri oynaması (BPPV - İyi Huylu Pozisyonel Vertigo)",
      "İç kulak siniri iltihabı veya Meniere hastalığı",
      "İnme, Parkinson veya MS gibi santral sinir sistemi hastalıkları",
      "Yaşlanmaya bağlı duyusal ve kassal kayıplar"
    ],
    fizyoterapiNasilYardimci: "Özellikle iç kulak kaynaklı baş dönmelerinde vestibüler rehabilitasyon en etkili yöntemdir. Aksaray Ata Fizyoterapi'de, kristalleri yerine oturtan özel manevralar ve beyin ile denge organı arasındaki uyumu yeniden kuran adaptasyon egzersizleri ile güvende hissetmenizi sağlıyoruz.",
    tedaviYontemleri: [
      { name: "Repozisyon Manevraları (Epley, Semont vb.)", description: "BPPV vakalarında iç kulakta yerinden oynayan kristalleri anatomik olarak ait oldukları yere geri göndermek için yapılan baş-gövde çevirme teknikleridir." },
      { name: "Gaze Stabilizasyon Egzersizleri", description: "Baş hareket ederken gözlerin bir noktaya odaklanmasını sağlayarak baş dönmesini azaltan adaptasyon egzersizleri." },
      { name: "Proprioseptif ve Denge Eğitimi", description: "Yumuşak zeminlerde veya gözler kapalı şekilde çalışarak eklemlerden gelen denge sinyallerini güçlendirir." },
      { name: "Alışma (Habitüasyon) Egzersizleri", description: "Baş dönmesini tetikleyen hareketleri kontrollü bir şekilde tekrarlayarak beyni bu duruma duyarsızlaştırmak." }
    ],
    tedaviSureci: "Kristal oynamasına (BPPV) bağlı vertigoda genellikle 1-2 seanslık manevralar büyük ölçüde iyileşme sağlar. Sinir zedelenmesi veya yaşlılığa bağlı denge kayıplarında ise sistemin yeniden eğitilmesi haftalar süren vestibüler egzersizleri gerektirir.",
    sss: [
      { soru: "Kristal oynaması manevra ile kesin düzelir mi?", cevap: "Doğru teşhis edildiğinde (hangi kanalda kristal olduğu bulunursa), uygun manevra ile %80-90 oranında anında rahatlama sağlanır." },
      { soru: "Denge egzersizleri midemi bulandırır mı?", cevap: "Başlangıçta hafif baş dönmesi ve bulantı yaratabilir, bu beynin adaptasyon süreci için beklenen bir durumdur; egzersizler tolere edilebilir sınırlarda tutulur." },
      { soru: "Yaşlılarda düşmeyi engellemek mümkün mü?", cevap: "Evet, vestibüler egzersizlere eklenen kas güçlendirme programları ile yaşlı bireylerin düşme riski ciddi oranda azaltılabilir." }
    ]
  },

  // ----------------------------------------------------
  // 7. SPOR YARALANMALARI (spor-yaralanmalari)
  // ----------------------------------------------------
  {
    slug: "kas-yirtiklari",
    title: "Kas Yırtıkları (Kramp/Çekme)",
    category: "spor-yaralanmalari",
    categoryTitle: "Spor Yaralanmaları",
    icon: "activity",
    metaTitle: "Kas Yırtığı Tedavisi | Aksaray Spor Fizyoterapisi",
    metaDescription: "Sporda ani hareket veya aşırı yüklenme sonucu oluşan kas yırtıkları (çekmeleri) için Aksaray'da hızlı ve güvenilir rehabilitasyon.",
    heroDescription: "Kas liflerinin kapasitesini aşan ani bir gerilmeye veya kasılmaya maruz kalarak kısmen veya tamamen kopmasıdır.",
    nedir: "Halk arasında 'kas çekmesi' olarak da bilinen kas yırtıkları, genellikle uyluk arkası (hamstring), baldır (calf) veya kasık (groin) bölgelerinde görülür. Yırtığın şiddeti; sadece mikroskobik hasar (1. derece) ile kasın tamamen kopması (3. derece) arasında değişebilir.",
    belirtileri: [
      "Yaralanma anında ani, keskin ve batıcı bir ağrı",
      "Kas kasılırken veya esnerken şiddetli acı hissi",
      "Hasar gören bölgede şişlik, morarma ve dokunmakla hassasiyet",
      "İleri derece yırtıklarda kas gövdesinde gözle görülür bir boşluk"
    ],
    nedenleri: [
      "Spora veya aktiviteye yeterince ısınmadan başlamak",
      "Kasta var olan esneklik eksikliği ve yorgunluk",
      "Ani hızlanma, sıçrama veya aniden durma hareketleri",
      "Antrenman şiddetinin gereğinden hızlı artırılması"
    ],
    fizyoterapiNasilYardimci: "Kas yırtıklarında sadece dinlenmek skar (nedbe) dokusu oluşumuna ve kasın esnekliğini kaybederek tekrar yırtılmasına neden olur. Aksaray Ata Fizyoterapi'de, iyileşen dokunun güçlü ve esnek bir şekilde örülmesini sağlayarak sizi en kısa sürede spora döndürmeyi hedefleriz.",
    tedaviYontemleri: [
      { name: "Yumuşak Doku Mobilizasyonu", description: "İyileşme dokusunun (skar) düzensiz yapışmasını engellemek ve kanlanmayı artırmak için elle uygulanan masaj ve mobilizasyonlar." },
      { name: "İzometrik ve İzotonik Kuvvetlendirme", description: "Eklem hareket etmeden başlanan kasılmalardan, dinamik güçlendirmeye doğru ilerleyen aşamalı egzersizler." },
      { name: "Kinesiyolojik Bantlama", description: "Hasarlı kas grubunu desteklemek ve ödemi azaltmak için bölgeye uygulanır." },
      { name: "Soğuk ve Sıcak Uygulama", description: "İlk 72 saat ödem kontrolü için soğuk, ilerleyen dönemlerde esnekliği artırmak için sıcak uygulamalar." }
    ],
    tedaviSureci: "Koruma ve ödem kontrolü (RICE) ile başlanır. Ağrı izin verdiğinde kas liflerinin doğru yönde iyileşmesi için pasif ve aktif germelere başlanır. Son aşamada ise spora özgü patlayıcı kuvvet (sıçrama, yön değiştirme) çalışmaları eklenerek tekrar yaralanma riski sıfırlanmaya çalışılır.",
    sss: [
      { soru: "Yırtık olan kasımı esnetmeli miyim?", cevap: "Akut dönemde (ilk birkaç gün) esnetme yırtığı büyütebilir; ancak 3-4 gün sonra ağrı sınırında hafif germelere başlanması sağlıklı iyileşme için şarttır." },
      { soru: "Spora ne zaman dönebilirim?", cevap: "Dereceye bağlı olarak 2 hafta ile 3 ay arasında değişir. Kas gücü ve esnekliği sağlam bacağın %90'ına ulaşmadan spora dönüş önerilmez." },
      { soru: "Tekrar aynı yerden yırtılır mı?", cevap: "Eğer fizyoterapi görmeden sadece dinlenerek iyileşmesi beklenirse, oluşan kaba nedbe dokusu nedeniyle aynı yerden tekrar yırtılma riski çok yüksektir." }
    ]
  },
  {
    slug: "hamstring-yaralanmalari",
    title: "Hamstring Yaralanmaları",
    category: "spor-yaralanmalari",
    categoryTitle: "Spor Yaralanmaları",
    icon: "activity",
    metaTitle: "Hamstring Yaralanması Fizyoterapi | Aksaray Ata Fizyoterapi",
    metaDescription: "Koşucu ve futbolcularda sık görülen arka bacak (hamstring) yırtıkları ve gerilmeleri için Aksaray'da uzman spor fizyoterapisi.",
    heroDescription: "Uyluk arka kısmındaki kas grubunun aşırı gerilme veya patlayıcı kasılma sonucu zedelenmesidir.",
    nedir: "Hamstring kasları, kalçadan dizin arkasına kadar uzanan ve hem diz bükmeyi hem de kalçayı geriye almayı sağlayan üçlü bir kas grubudur. Özellikle sprint (hızlı koşu) atan sporcularda, bacağın öne doğru hızla savrulduğu anlarda kasın kapasitesini aşmasıyla yırtıklar oluşur.",
    belirtileri: [
      "Koşu anında arka bacakta duyulan ani kopma/çekilme hissi",
      "Etkilenen bacağın üzerine basmada zorluk",
      "Dizi düzleştirirken veya öne eğilirken uyluk arkasında şiddetli ağrı",
      "Birkaç gün içinde bacağın arka kısmında aşağı doğru inen morarma"
    ],
    nedenleri: [
      "Ön bacak (quadriceps) ve arka bacak (hamstring) kasları arasındaki güç dengesizliği",
      "Kısa ve gergin hamstring kaslarına sahip olmak",
      "Yetersiz ısınma ve yetersiz soğuma rutinleri",
      "Geçmiş hamstring yaralanmalarının tam iyileşmeden spora dönülmesi"
    ],
    fizyoterapiNasilYardimci: "Hamstring yaralanmaları tekrarlamaya çok müsaittir. Aksaray Ata Fizyoterapi'de amacımız sadece yırtığı iyileştirmek değil, kasın esneme hızına ve yük taşıma kapasitesine dayanıklılığını artırmaktır. Core bölgesinden kalçaya kadar biyomekanik bir değerlendirme yaparız.",
    tedaviYontemleri: [
      { name: "Eksantrik Egzersizler (Nordic Hamstring vb.)", description: "Kasın uzarken kuvvet üretebilme kapasitesini artıran ve tekrar yaralanmayı en iyi önleyen özel egzersizlerdir." },
      { name: "Lumbo-Pelvik Stabilizasyon", description: "Leğen kemiğinin (pelvis) doğru açıda durmasını sağlayarak hamstring üzerindeki stresi azaltan core egzersizleri." },
      { name: "Graston ve Miyofasyal Gevşetme", description: "Kas kılıfları arasındaki kaymayı sağlayarak esnekliği artırır." },
      { name: "Çeviklik ve Spora Özgü Eğitim", description: "Saha içi yön değiştirme ve sprint koşularını simüle eden son aşama rehabilitasyon." }
    ],
    tedaviSureci: "Akut dinlenme evresinden sonra hafif köprü kurma egzersizleri ile başlanır. Doku iyileştikçe kas boyu uzatılarak esneklik kazanılır. Son evrelerde, kasın en çok zorlandığı 'koşu anındaki savurma' mekaniğini destekleyen patlayıcı kuvvet çalışmaları yapılır.",
    sss: [
      { soru: "Hamstring yırtığı için ameliyat gerekir mi?", cevap: "Kasın kemiğe yapıştığı yerden tamamen kopması durumları dışında genellikle iyi bir fizyoterapi programı ile ameliyatsız iyileşir." },
      { soru: "Nordic hamstring egzersizi nedir?", cevap: "Dizler üzerinde dururken gövdenin kontrollü bir şekilde öne doğru yere bırakılmasıyla arka bacağı çok güçlü çalıştıran altın standart bir egzersizdir." },
      { soru: "Daha hızlı nasıl iyileşirim?", cevap: "Erken dönemde ödemi kontrol altında tutmak ve fizyoterapistinizin çizdiği aşamalı yüklenme programına harfiyen uymak en hızlı yoldur." }
    ]
  },
  {
    slug: "sporcu-yaralanmalari",
    title: "Genel Sporcu Yaralanmaları",
    category: "spor-yaralanmalari",
    categoryTitle: "Spor Yaralanmaları",
    icon: "activity",
    metaTitle: "Sporcu Yaralanmaları Rehabilitasyonu | Aksaray Fizyoterapi",
    metaDescription: "Burkulma, incinme, omuz çıkığı veya kasık ağrısı gibi spora özgü tüm yaralanmalarda Aksaray Ata Fizyoterapi ile sahalara güçlü dönün.",
    heroDescription: "Amatör veya profesyonel spor aktiviteleri sırasında kas-iskelet sistemine binen akut veya kronik aşırı yüklenmeler sonucu oluşan çeşitli hasarlardır.",
    nedir: "Spor yaralanmaları akut (çarpışma, düşme, burkulma gibi anlık travmalar) veya aşırı kullanım (overuse - sürekli aynı hareketin tekrarlanması sonucu zamanla oluşan stres kırıkları, tendinitler) olmak üzere ikiye ayrılır. Eklem bağ zedelenmeleri, kıkırdak problemleri, çıkıklar veya kasık bölgesi (groin) ağrılarını kapsar.",
    belirtileri: [
      "Aktivite sırasında aniden gelişen şiddetli ağrı veya fonksiyon kaybı",
      "Antrenman sonraları veya sabahları artan kronik sızılar",
      "Eklemlerde şişlik, boşalma, kilitlenme veya güvensizlik hissi",
      "Spor performansında, sıçrama veya koşu kapasitesinde düşüş"
    ],
    nedenleri: [
      "Yanlış antrenman teknikleri veya kötü spor ekipmanları",
      "Vücut biyomekaniğindeki bozukluklar (düz tabanlık, bacak boyu eşitsizliği)",
      "Yetersiz dinlenme ve 'overtraining' (aşırı antrenman) sendromu",
      "Dengesiz beslenme ve yetersiz sıvı alımı"
    ],
    fizyoterapiNasilYardimci: "Spor fizyoterapisi sadece hasarı tedavi etmekle kalmaz, sporcunun biyomekaniğini analiz ederek yaralanmanın kök nedenini bulur. Aksaray Ata Fizyoterapi'de amacımız, sporcuyu sadece günlük hayata değil, kendi branşının gerektirdiği yüksek performansa 'eskisinden daha güçlü' şekilde hazırlamaktır.",
    tedaviYontemleri: [
      { name: "Biyomekanik Analiz ve Düzeltme", description: "Sporcunun koşu, sıçrama veya atış mekaniğini video ile analiz edip hatalı postürü düzeltmek." },
      { name: "Spora Özgü Rehabilitasyon (Plyometrikler)", description: "Güç ve hızı birleştiren, kasın reaksiyon süresini geliştiren patlayıcı egzersizler." },
      { name: "Fonksiyonel Bantlama (Rijit ve Kinesio)", description: "Maç veya antrenman sırasında eklemi korumak için uygulanan özel destek bantlamaları." },
      { name: "Recovery (Toparlanma) Uygulamaları", description: "Yoğun antrenman dönemlerinde masaj, kupa veya kompresyon gibi yöntemlerle kaslardaki laktik asit atımını desteklemek." }
    ],
    tedaviSureci: "Akut dönem yönetimi sonrası, eklem açıklığı ve temel kuvvet sağlanır. Sonrasında kapalı kinetik zincir ve açık kinetik zincir egzersizleri harmanlanır. Hastanın sahaya dönebilmesi için spora özgü çeviklik testlerini (hop test vb.) ağrısız ve sağlam tarafa yakın değerlerde geçmesi beklenir.",
    sss: [
      { soru: "Ağrı kesici içip maça çıkmak doğru mu?", cevap: "Kesinlikle hayır. Ağrı vücudun 'bir şeyler yanlış' sinyalidir. Ağrıyı baskılayıp dokuyu zorlamak çok daha büyük yırtıklara neden olur." },
      { soru: "Sadece profesyoneller mi spor fizyoterapisi alabilir?", cevap: "Hayır, halı saha oyuncularından hafta sonu koşucularına kadar spor yapan herkes, spora güvenli dönüş için bu hizmeti almalıdır." },
      { soru: "Yaralanmadan korunmak için ne yapmalıyım?", cevap: "Düzenli ısınma/soğuma rutinleri, core stabilizasyonu, branşa özgü güçlendirme çalışmaları ve yeterli uyku koruyucu fizyoterapinin temelleridir." }
    ]
  },
  {
    slug: "tendon-yaralanmalari",
    title: "Tendon Yaralanmaları",
    category: "spor-yaralanmalari",
    categoryTitle: "Spor Yaralanmaları",
    icon: "activity",
    metaTitle: "Tendon Yaralanması Rehabilitasyonu | Aksaray Ata Fizyoterapi",
    metaDescription: "Kasları kemiklere bağlayan tendonların iltihaplanması veya kopması (Aşil, Patellar tendon vb.) durumlarında Aksaray'da uzman destek.",
    heroDescription: "Kasların ürettiği gücü kemiklere ileten güçlü bağ dokularının (tendonların) aşırı stres veya travma sonucu zedelenmesi veya kopmasıdır.",
    nedir: "Tendonlar kanlanması kaslara göre daha az olan sağlam yapılardır. Tekrarlayan zorlamalarla tendon kılıfında iltihap (tendinit) veya tendon yapısında hücresel bozulma (tendinozis) gelişebilir. Ani ve çok yüksek kuvvetlerde ise tendon tamamen kopabilir (örn. Aşil tendonu rüptürü).",
    belirtileri: [
      "Tendon üzerinde şişlik, kalınlaşma ve dokunmakla ağrı",
      "Sabahları tendon bölgesinde aşırı sertlik ve yürümeye başlarken zorlanma",
      "Kası kullanırken, özellikle direnç uygulandığında artan sızı",
      "Kopmalarda bölgede ani bir boşluk hissi ve fonksiyon kaybı"
    ],
    nedenleri: [
      "Antrenman zemininde değişiklik (çimden sert betona geçiş gibi)",
      "Antibiyotik (bazı gruplar) veya steroid kullanımı sonrası zayıflayan yapı",
      "Mekanik sürtünmeler (örneğin ayakkabı arkasının Aşil'e sürtmesi)",
      "Yaşlanmaya bağlı tendon esnekliğinin ve kanlanmasının azalması"
    ],
    fizyoterapiNasilYardimci: "Tendon iyileşmesi mekanik yüklemeye (stressiz kasılmalara) ihtiyaç duyar. Tam dinlenme tendonu zayıflatır. Aksaray Ata Fizyoterapi'de, dokuya doğru dozda yük vererek kolajen liflerinin düzenli ve güçlü bir şekilde yeniden yapılanmasını (remodeling) sağlıyoruz.",
    tedaviYontemleri: [
      { name: "Aşamalı Yükleme Programı", description: "İzometrik kasılmalardan başlayıp, eksantrik (uzayarak) ve ağır-yavaş direnç eğitimine kadar uzanan spesifik egzersizler." },
      { name: "Sürtünme (Friction) Masajı", description: "Tendon üzerine çaprazlama uygulanan ve kanlanmayı artırarak iyileşmeyi tetikleyen derin masaj tekniği." },
      { name: "Elektroterapi (Ultrason vb.)", description: "Derin dokuları ısıtarak hücresel metabolizmayı hızlandırmak için." },
      { name: "Biyomekanik Düzeltmeler", description: "Tendona dengesiz yük bindiren ayak basış bozukluklarını veya kas kısalıklarını gidermek." }
    ],
    tedaviSureci: "Cerrahi onarım gerektirmeyen durumlarda ağrı yönetimi ile başlanır. Tendon problemleri inatçıdır; iyileşme genellikle ağrının yavaş yavaş azalması şeklinde değil, 'inişli çıkışlı' bir grafik izler. Ameliyat edilen tendonlarda ise protokol çok daha katıdır ve haftalar süren koruma fazını içerir.",
    sss: [
      { soru: "Tendon iyileşmesi neden kaslardan daha uzun sürer?", cevap: "Tendonların kan damarı ağı kaslara göre çok daha zayıftır. Besin ve oksijen daha yavaş ulaştığı için hücresel onarım süreci ayları bulabilir." },
      { soru: "Kortizon iğnesi tendon kopmasına yol açar mı?", cevap: "Direkt tendon içine yapılan tekrarlayan kortizon enjeksiyonlarının tendon yapısını zayıflatarak kopma riskini artırdığı bilinmektedir." },
      { soru: "Germe yapmak tendona iyi gelir mi?", cevap: "Akut reaktif (çok ağrılı) tendinitlerde germe yapmak tendonun kemiğe yapışma yerine bası yaparak durumu kötüleştirebilir; izometrik (hareketsiz) kasılmalar tercih edilmelidir." }
    ]
  },

  // ----------------------------------------------------
  // 8. ROMATOLOJİK PROBLEMLER (romatolojik-problemler)
  // ----------------------------------------------------
  {
    slug: "fibromiyalji",
    title: "Fibromiyalji",
    category: "romatolojik-problemler",
    categoryTitle: "Romatolojik Problemler",
    icon: "activity",
    metaTitle: "Fibromiyalji Fizyoterapisi | Aksaray Ata Fizyoterapi",
    metaDescription: "Yaygın kas ağrıları, kronik yorgunluk ve uyku bozukluklarıyla seyreden fibromiyalji için Aksaray'da bütüncül egzersiz ve rahatlama yaklaşımları.",
    heroDescription: "Vücutta yaygın kas-eklem ağrısı, yorgunluk ve vücudun belirli noktalarında hassasiyet ile karakterize kronik bir ağrı sendromudur.",
    nedir: "Fibromiyalji (yumuşak doku romatizması), belirgin bir doku hasarı olmamasına rağmen beyin ve sinir sisteminin ağrı sinyallerini olduğundan çok daha şiddetli algılaması durumudur. Kaslarda yaygın sızı, sabah tutukluğu, uyku bozuklukları, zihinsel sis (fibro-fog) ve bağırsak problemleri sık görülür.",
    belirtileri: [
      "Vücudun hem sağ/sol hem de alt/üst yarısında 3 aydan uzun süren yaygın ağrı",
      "Boyun, omuz, sırt ve kalçada belirli noktalara (tetik noktalar) dokunmakla aşırı hassasiyet",
      "Uyandıktan sonra dinlenmemiş hissetme (uyku kalitesinin düşüklüğü)",
      "Depresif ruh hali, stres ve çabuk yorulma"
    ],
    nedenleri: [
      "Kesin nedeni bilinmemekle birlikte santral sinir sisteminin ağrı işleme mekanizmasının bozulması",
      "Geçirilmiş ağır fiziksel veya duygusal travmalar (stres, kaza, enfeksiyon)",
      "Genetik yatkınlık ve hormonal dengesizlikler",
      "Hareketsiz yaşam tarzı ve uyku bozuklukları"
    ],
    fizyoterapiNasilYardimci: "Fibromiyalji tedavisinde amaç ağrıyı tamamen sıfırlamak değil, ağrı yönetimi becerilerini geliştirip yaşam kalitesini artırmaktır. Aksaray Ata Fizyoterapi'de, sinir sistemini sakinleştirecek hafif egzersizler, miyofasyal rahatlama teknikleri ve solunum çalışmalarıyla bedenin stres yükünü hafifletmeyi amaçlıyoruz.",
    tedaviYontemleri: [
      { name: "Aerobik Egzersiz Eğitimi", description: "Hafif tempolu yürüyüş, yüzme veya bisiklet gibi düşük şiddetli kardiyo çalışmaları endorfin salgısını artırarak ağrıyı azaltır." },
      { name: "Miyofasyal Gevşetme ve Kupa Terapi", description: "Gergin kas bantlarını ve hassas noktaları gevşeterek bölgesel dolaşımı artırmak." },
      { name: "Klinik Pilates ve Yoga Temelli Egzersizler", description: "Kasları yormadan esnetmeyi ve zihin-beden farkındalığını artırmayı hedefler." },
      { name: "Diyafram Solunumu ve Gevşeme", description: "Otonom sinir sistemini (savaş veya kaç modunu) sakinleştirerek kaslardaki kronik gerginliği düşürmek." }
    ],
    tedaviSureci: "En önemli kural 'Start low, go slow' (Düşük dozla başla, yavaş yavaş artır) kuralıdır. Hastalar egzersize çok hassas olduğu için zorlayıcı antrenmanlar ağrıyı alevlendirebilir. Hastanın toleransına göre uyarlanmış, günlük yaşamına entegre edebileceği rutinler oluşturulur.",
    sss: [
      { soru: "Fibromiyalji için sıcak mı soğuk mu daha iyidir?", cevap: "Genellikle fibromiyalji hastaları soğuğa karşı aşırı hassastır ve sıcak uygulamalar (sıcak paketler, ılık su banyosu) kas gevşemesine daha iyi yardımcı olur." },
      { soru: "Fibromiyalji psikolojik bir hastalık mıdır?", cevap: "Hayır, yaşanan ağrılar tamamen gerçektir. Ancak stres ve psikolojik durum ağrı eşiğini düşürdüğü için belirtileri şiddetlendirir." },
      { soru: "Egzersiz sonrası ağrılarım artıyor, bırakmalı mıyım?", cevap: "Aşırı yüklenme sonucu ağrı artabilir, bu durumda egzersizi bırakmak yerine şiddeti ve süresi fizyoterapist eşliğinde yeniden düzenlenmelidir." }
    ]
  },
  {
    slug: "romatoid-artrit",
    title: "Romatoid Artrit",
    category: "romatolojik-problemler",
    categoryTitle: "Romatolojik Problemler",
    icon: "activity",
    metaTitle: "Romatoid Artrit (İltihaplı Romatizma) Fizyoterapisi | Aksaray",
    metaDescription: "Eklemlerde iltihaplanma, şişlik ve şekil bozukluğu yapan Romatoid Artrit hastalığı için Aksaray'da eklem koruma ve fizyoterapi yaklaşımları.",
    heroDescription: "Bağışıklık sisteminin kendi eklemlerine saldırarak iltihaplanma, ağrı ve zamanla şekil bozukluğuna yol açtığı kronik otoimmün bir hastalıktır.",
    nedir: "Romatoid Artrit (İltihaplı Romatizma), sıklıkla el ve ayak bileği gibi küçük eklemleri simetrik (her iki taraflı) olarak tutan bir hastalıktır. Eklem zarını (sinovya) hedef alan iltihaplanma, tedavi edilmezse zamanla kıkırdak ve kemik yıkımına, eklemlerde kalıcı deformitelere (şekil bozukluklarına) neden olur.",
    belirtileri: [
      "Özellikle el ve ayak eklemlerinde şişlik, kızarıklık, sıcaklık ve ağrı",
      "Sabahları veya uzun süre hareketsiz kaldıktan sonra 1 saatten uzun süren eklem sertliği (tutukluğu)",
      "Zamanla el parmaklarında dışa doğru eğilme gibi kalıcı şekil bozuklukları",
      "Halsizlik, hafif ateş ve genel yorgunluk hissi"
    ],
    nedenleri: [
      "Otoimmün reaksiyon (Bağışıklık sisteminin kendi dokularını yabancı algılaması)",
      "Genetik yatkınlık (Aile öyküsü)",
      "Sigara kullanımı ve çevresel faktörler (Tetikleyici olarak görülür)"
    ],
    fizyoterapiNasilYardimci: "Tıbbi (ilaç) tedavisi iltihabı baskılarken, fizyoterapi eklem fonksiyonlarını korumayı, kas erimesini önlemeyi ve eklem deformitelerinin önüne geçmeyi hedefler. Aksaray Ata Fizyoterapi'de, hastalığın alevlenme ve sönme dönemlerine uygun spesifik egzersiz ve koruma yöntemleri uygulanır.",
    tedaviYontemleri: [
      { name: "Eklem Koruma Teknikleri ve Ortezleme", description: "Eklem üzerine binen stresi azaltmak için istirahat atelleri (gece kullanımı için) ve günlük işlerin nasıl ağrısız yapılacağının eğitimi." },
      { name: "Eklem Hareket Açıklığı Egzersizleri", description: "Eklemlerin donmasını önlemek için iltihaplı dönemlerde bile zorlamadan yapılan aktif ve pasif hareketler." },
      { name: "Kuvvetlendirme", description: "Eklemi destekleyen kasları güçlendirerek ekleme binen yükü azaltmak (İltihabın sönük olduğu dönemlerde)." },
      { name: "Soğuk Uygulama", description: "Aktif iltihap (alevlenme) dönemlerinde eklemdeki şişliği, sıcaklığı ve ağrıyı azaltmak için tercih edilir." }
    ],
    tedaviSureci: "Fizyoterapi programı hastalığın aktif olup olmadığına göre değişir. Eklem sıcak ve şişken (aktif evre) istirahat, buz ve sadece hafif hareket açıklığı egzersizleri verilir. İltihap baskılandığında ise su içi egzersizler, kas kuvvetlendirme ve aerobik kapasiteyi artırma hedeflenir.",
    sss: [
      { soru: "Eklemim şişken sıcak su torbası koyabilir miyim?", cevap: "Hayır. Eklemin kızarık, şiş ve sıcak olduğu akut iltihap dönemlerinde sıcak uygulama iltihabı artırır; bu dönemde soğuk uygulama yapılmalıdır." },
      { soru: "Hangi sporlar romatoid artrit için uygundur?", cevap: "Eklemlere darbe bindirmeyen yüzme, su içi egzersizler, bisiklet ve uygun modifikasyonlarla klinik pilates en güvenli seçeneklerdir." },
      { soru: "Parmaklarımdaki eğilme egzersizle düzelir mi?", cevap: "Oluşmuş yapısal deformiteler egzersizle tamamen geri döndürülemez ancak uygun ateller ve kas dengesi çalışmalarıyla ilerlemesi durdurulabilir ve fonksiyonellik korunabilir." }
    ]
  },
  {
    slug: "ankilozan-spondilit",
    title: "Ankilozan Spondilit (AS)",
    category: "romatolojik-problemler",
    categoryTitle: "Romatolojik Problemler",
    icon: "activity",
    metaTitle: "Ankilozan Spondilit Egzersizleri | Aksaray Ata Fizyoterapi",
    metaDescription: "Omurgada hareket kısıtlılığı ve iltihaplı bel ağrısı yapan Ankilozan Spondilit (AS) hastaları için omurga esnekliğini koruyan Aksaray fizyoterapi hizmeti.",
    heroDescription: "Özellikle omurgayı ve leğen kemiği eklemlerini etkileyen, zamanla omurların birbirine kaynamasına yol açabilen iltihaplı bir romatizmadır.",
    nedir: "Ankilozan Spondilit (AS), ağırlıklı olarak genç yetişkin erkeklerde görülen, omurga (spondil) ve sakroiliak (leğen) eklemlerinde kronik iltihaplanma ile seyreden bir hastalıktır. İltihap iyileşirken vücut yeni kemik dokusu oluşturur ve bu durum omurların birleşerek bambu kamışı gibi kaskatı bir hal almasına (ankiloz) neden olabilir.",
    belirtileri: [
      "Sabahları yataktan kalkmayı zorlaştıran, yarım saatten uzun süren bel ve sırt tutukluğu",
      "Dinlenmekle artan, ancak hareket ettikçe ve egzersizle hafifleyen inflamatuar bel ağrısı",
      "Göğüs kafesi eklemlerinin etkilenmesi sonucu derin nefes alırken ağrı veya nefes darlığı",
      "Zamanla postürün öne eğilmesi, kambur (kifotik) duruşun gelişmesi"
    ],
    nedenleri: [
      "Genetik faktörler (HLA-B27 geni taşıyıcılığı hastaların büyük kısmında pozitiftir)",
      "Bağışıklık sisteminin omurga eklemlerine saldırması"
    ],
    fizyoterapiNasilYardimci: "AS hastaları için egzersiz 'ilaç kadar' önemlidir. Omurganın hareket yeteneğini kaybetmesini engellemek ve dik bir duruşu korumak hayati önem taşır. Aksaray Ata Fizyoterapi'de, omurganızı tüm yönlere hareket ettirerek göğüs kafesi kapasitenizi koruyan spesifik rutinler öğretiyoruz.",
    tedaviYontemleri: [
      { name: "Omurga Mobilizasyon ve Germe Egzersizleri", description: "Omurganın öne, arkaya ve yanlara doğru esnekliğini korumaya yönelik dinamik germeler." },
      { name: "Solunum Egzersizleri", description: "Göğüs kafesi eklemlerinin kireçlenip donmasını engellemek için diyafram ve derin göğüs kafesi solunum çalışmaları." },
      { name: "Postür ve Ekstansiyon Egzersizleri", description: "Öne eğilme (kamburluk) eğilimini kırmak için sırtı geriye doğru büken (ekstansiyon) ve dikliği sağlayan güçlendirme çalışmaları." },
      { name: "Su İçi Egzersizler", description: "Yerçekiminin etkisini azaltarak ağrısız bir şekilde omurgayı hareket ettirme imkanı sunar." }
    ],
    tedaviSureci: "Hastalık ömür boyu sürdüğü için fizyoterapi değerlendirmesinden sonra hastanın kendi kendine her gün yapacağı bir yaşam rutini belirlenir. Yüzüstü yatma alışkanlığı kazandırmak, sert yatak seçimi ve günlük omurga açma egzersizleri sürecin temelleridir.",
    sss: [
      { soru: "Belim ağrıyorken dinlenmeli miyim?", cevap: "Mekanik bel fıtığının aksine, AS'te ağrı istirahatle artar. Ağrılı dönemlerde bile zorlamadan yapılan hafif hareketler (yürüyüş vb.) ağrıyı azaltır." },
      { soru: "Hastalık kesin kamburluk yapar mı?", cevap: "Hayır. Erken teşhis, düzenli ilaç kullanımı ve en önemlisi her gün yapılan duruş ve esneklik egzersizleriyle omurganın dikliği hayat boyu korunabilir." },
      { soru: "Yatış pozisyonum nasıl olmalı?", cevap: "Mümkünse sert bir yatakta, ince bir yastıkla sırtüstü veya günde 20-30 dakika yastıksız yüzüstü yatarak omurganın öne eğilmesini engellemek önerilir." }
    ]
  },
  {
    slug: "osteoartrit",
    title: "Osteoartrit (Eklem Kireçlenmesi)",
    category: "romatolojik-problemler",
    categoryTitle: "Romatolojik Problemler",
    icon: "activity",
    metaTitle: "Kireçlenme (Osteoartrit) Egzersiz ve Fizyoterapi | Aksaray",
    metaDescription: "Diz, kalça, el ve omurgada görülen kireçlenme (osteoartrit) problemleri için eklem fonksiyonlarını koruyucu Aksaray Ata Fizyoterapi yaklaşımları.",
    heroDescription: "Eklemlerdeki kıkırdak dokunun zamanla yıpranması, incelmesi ve aşınması ile seyreden, en sık görülen eklem hastalığıdır.",
    nedir: "Osteoartrit, halk arasındaki adıyla 'kireçlenme', inflamatuar (iltihaplı) romatizmalardan farklı olarak biyomekanik ve yaşa bağlı hücresel aşınma sürecidir. Kıkırdak inceldikçe eklem boşluğu daralır, kemik kenarlarında yeni kemik çıkıntıları (osteofitler) oluşur. En çok yük taşıyan diz, kalça ve omurganın yanı sıra el parmaklarını da etkiler.",
    belirtileri: [
      "Hareket ettikçe ve günün ilerleyen saatlerinde artan, istirahatle azalan eklem ağrısı",
      "Sabahları veya uzun süre oturduktan sonra 15-30 dakika süren kısa süreli eklem tutukluğu",
      "Hareket sırasında eklemlerden gelen tıkırtı veya sürtünme (krepitasyon) sesleri",
      "Zamanla eklem hareket açıklığında azalma ve kemiksi şişlikler (ellerde nodüller)"
    ],
    nedenleri: [
      "İleri yaş (Kıkırdak onarım kapasitesinin azalması)",
      "Obezite (Özellikle diz ve kalçaya binen mekanik yükün artması)",
      "Önceki eklem travmaları veya kırıkları (menisküs yırtığı vb.)",
      "Tekrarlayan eklem hareketleri gerektiren ağır işler ve genetik yatkınlık"
    ],
    fizyoterapiNasilYardimci: "Aşınmış bir kıkırdağı eski haline getirmek fizyoterapi ile mümkün olmasa da, eklemi saran kasların güçlendirilmesiyle kemiklerin birbirine sürtmesi ve ekleme binen basınç büyük oranda azaltılabilir. Aksaray Ata Fizyoterapi'de ağrısız ve aktif bir yaşam sürmeniz için size özel destekleyici tedaviler sunulur.",
    tedaviYontemleri: [
      { name: "Spesifik Kuvvetlendirme", description: "Diz kireçlenmesinde üst bacak, kalça kireçlenmesinde kalça kaslarını güçlendirerek eklemin 'süspansiyon' (şok emici) sistemini geliştirmek." },
      { name: "Elektroterapi (TENS vb.) ve Sıcak Uygulamalar", description: "Eklem çevresindeki kas spazmlarını çözmek ve kronik ağrıyı kontrol altına almak." },
      { name: "Eklem Mobilizasyonu", description: "Sertleşen eklem kapsülünü esneterek hareket kabiliyetini artırmak." },
      { name: "Kilo Kontrolü ve Aktivite Modifikasyonu Eğitimi", description: "Eklemi zorlayan hareketlerin (sürekli merdiven inmek, çömelmek) düzenlenmesi." }
    ],
    tedaviSureci: "Amaç ağrıyı yöneterek fonksiyonelliği maksimumda tutmaktır. Eklemi zorlamayan (düşük etkili) egzersizler (bisiklet, izometrik kasılmalar) tercih edilir. Cerrahi (protez) gerektiren durumlarda ise hem ameliyat öncesi hazırlık hem de ameliyat sonrası hareketin geri kazanımı için rehabilitasyon planlanır.",
    sss: [
      { soru: "Kireçlenen eklem hareket ettirilmeli mi?", cevap: "Kesinlikle evet. Kıkırdak dokusu kan damarı içermez, beslenmesi eklem sıvısının hareketle pompalanmasıyla olur. Hareketsizlik kireçlenmeyi hızlandırır." },
      { soru: "Merdiven çıkmak zararlı mı?", cevap: "Özellikle diz ve kalça kireçlenmelerinde merdiven inip çıkmak ekleme aşırı yük bindirir. Ağrılı dönemlerde asansör kullanımı veya adımları teker teker basarak (sağlam bacak önce çıkıp, ağrılı bacak önce inerek) atmak önerilir." },
      { soru: "Kireçlenme için hangi destek ürünleri faydalıdır?", cevap: "Baston kullanımı (ağrılı bacağın zıt tarafındaki elde) ekleme binen yükü %20-30 oranında azaltarak yürüme konforunu çok ciddi şekilde artırır." }
    ]
  }
];
