export default function Home() {
  const services = [
    {
      title: "طراحی اختصاصی",
      description:
        "از ایده تا اجرا کنار شما هستیم. طراحی سه‌بعدی، مشاوره انتخاب سنگ و ساخت رسوبی با جدیدترین تکنیک‌ها.",
      highlights: ["مدل‌سازی سه‌بعدی", "طراحی نام و امضا", "طلا و جواهر ست"],
    },
    {
      title: "ساخت و تعمیر تخصصی",
      description:
        "کارگاه مجهز بساژ با استفاده از دستگاه‌های لیزری و اساتید مجرب، ضمانت کیفیت و دقت را ارائه می‌دهد.",
      highlights: ["ریگیری دقیق", "خدمات لیزر", "پولیش و آبکاری"],
    },
    {
      title: "مشاوره سرمایه‌گذاری",
      description:
        "تحلیل روز بازار، پیشنهاد سبد سرمایه‌گذاری و اعلام لحظه‌ای نرخ طلا و سکه با گزارش‌های اختصاصی.",
      highlights: ["تحلیل هفتگی", "باشگاه مشتریان", "سیگنال خرید امن"],
    },
  ];

  const priceBoard = [
    {
      name: "طلای ۱۸ عیار",
      price: "۳,۴۹۵,۰۰۰",
      change: "+۰٫۸٪",
      trend: "up",
      update: "۱۵:۳۰",
    },
    {
      name: "سکه امامی",
      price: "۴۱,۲۰۰,۰۰۰",
      change: "−۰٫۴٪",
      trend: "down",
      update: "۱۵:۲۵",
    },
    {
      name: "انس جهانی",
      price: "۲,۳۷۸",
      change: "+۰٫۲٪",
      trend: "up",
      update: "۱۵:۲۰",
    },
    {
      name: "طلای دست‌ساز",
      price: "۳,۷۹۰,۰۰۰",
      change: "+۱٫۱٪",
      trend: "up",
      update: "۱۴:۵۵",
    },
  ] as const;

  const testimonials = [
    {
      name: "نازنین شریفی",
      city: "تهران",
      text: "طراحی سرویس نامزدی ما کاملاً اختصاصی بود. قبل از ساخت، مدل سه‌بعدی را دیدیم و دقیقا همان کیفیت تحویل گرفتیم.",
    },
    {
      name: "مانی ساجدی",
      city: "اصفهان",
      text: "برای سرمایه‌گذاری کوتاه‌مدت راهنمایی گرفتم. گزارش‌ها دقیق بود و در نوسان بازار ضرر نکردم.",
    },
    {
      name: "فائزه عظیمی",
      city: "شیراز",
      text: "کارگاه بساژ تعمیر النگوی قدیمی من را بی‌نقص انجام داد. آبکاری مجدد باعث شد مثل روز اول بدرخشد.",
    },
  ];

  const timeline = [
    {
      title: "جلسه کشف سلیقه",
      detail: "جلسه حضوری یا آنلاین برای بررسی ایده، بودجه و انتخاب سبک طراحی.",
    },
    {
      title: "طراحی دیجیتال",
      detail: "ارائه مدل سه‌بعدی و امکان اصلاح قبل از ساخت نهایی.",
    },
    {
      title: "ساخت در کارگاه",
      detail: "تولید با دستگاه‌های ریگیری دقیق، حکاکی لیزری و کنترل کیفیت چندمرحله‌ای.",
    },
    {
      title: "تحویل و ضمانت",
      detail: "بسته‌بندی ویژه، ارائه شناسنامه محصول و ضمانت خدمات پس از فروش.",
    },
  ];

  return (
    <main className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-[#f7c873]/30 via-transparent to-transparent blur-3xl opacity-70" />
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0e0b15]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#f7c873]/40 bg-white/5 text-xl font-semibold text-[#f7c873] shadow-[0_0_40px_rgba(247,200,115,0.35)]">
              ب
            </span>
            <div>
              <p className="text-lg font-semibold tracking-tight text-white/90">
                طلای بساژ
              </p>
              <p className="text-sm text-white/50">
                گالری و کارگاه تخصصی
              </p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a className="transition hover:text-[#f7c873]" href="#services">
              خدمات
            </a>
            <a className="transition hover:text-[#f7c873]" href="#prices">
              نرخ لحظه‌ای
            </a>
            <a className="transition hover:text-[#f7c873]" href="#process">
              فرایند ساخت
            </a>
            <a className="transition hover:text-[#f7c873]" href="#contact">
              ارتباط
            </a>
          </nav>
          <a
            href="#contact"
            className="hidden items-center justify-center rounded-full bg-[#f7c873] px-5 py-2 text-sm font-semibold text-[#2b1c08] shadow-[0_20px_45px_-20px_rgba(247,200,115,0.8)] transition hover:bg-[#ffd88e] md:flex"
          >
            رزرو مشاوره
          </a>
        </div>
      </header>

      <section className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 pb-24 pt-20 md:flex-row md:items-start md:gap-20">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-[#f7c873] opacity-80" />
              <span className="absolute inset-0 animate-ping rounded-full bg-[#f7c873]" />
            </span>
            نرخ به‌روزرسانی هر ۵ دقیقه
          </div>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            تجربه لوکس طلا و جواهر با طراحی اختصاصی و نرخ لحظه‌ای بازار
          </h1>
          <p className="text-lg leading-8 text-white/70">
            طلای بساژ ترکیبی از هنر دست، تکنولوژی ساخت و مشاوره حرفه‌ای است.
            از طرح اولیه تا تحویل نهایی، تیم ما سفری مطمئن و الهام‌بخش برای
            شما رقم می‌زند.
          </p>
          <div className="flex flex-col items-stretch gap-4 sm:flex-row">
            <a
              href="#prices"
              className="flex h-12 w-full items-center justify-center rounded-full bg-[#f7c873] text-sm font-semibold text-[#2d200d] shadow-[0_18px_40px_-20px_rgba(247,200,115,0.9)] transition hover:bg-[#ffdf9f] sm:w-auto sm:px-8"
            >
              مشاهده نرخ لحظه‌ای
            </a>
            <a
              href="#services"
              className="flex h-12 w-full items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-white/80 transition hover:border-[#f7c873]/60 hover:text-[#f7c873] sm:w-auto sm:px-8"
            >
              خدمات کارگاه
            </a>
          </div>
          <dl className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <div className="grid gap-1 sm:grid-cols-3 sm:gap-6">
              <div>
                <dt className="text-xs text-white/50">سابقه فعالیت</dt>
                <dd className="text-2xl font-semibold text-white">۱۵ سال</dd>
              </div>
              <div>
                <dt className="text-xs text-white/50">میانگین تحویل سفارش</dt>
                <dd className="text-2xl font-semibold text-white">۱۰ روز</dd>
              </div>
              <div>
                <dt className="text-xs text-white/50">رضایت مشتریان</dt>
                <dd className="text-2xl font-semibold text-white">۹۸٪</dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="flex-1 space-y-5">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-[0_35px_80px_-40px_rgba(0,0,0,0.8)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(247,200,115,0.25),transparent_60%),radial-gradient(circle_at_80%_0%,rgba(214,168,92,0.2),transparent_55%)]" />
            <div className="relative space-y-6">
              <h2 className="text-2xl font-semibold text-white">
                باشگاه طلای بساژ
              </h2>
              <p className="text-sm leading-6 text-white/70">
                لحظه‌ای از بازار عقب نمانید؛ با عضویت در باشگاه طلای بساژ، نرخ
                لحظه‌ای، تحلیل اختصاصی و پیشنهادهای ویژه خرید دریافت کنید.
              </p>
              <ul className="grid gap-4 text-sm text-white/70">
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#f7c873]">
                    ★
                  </span>
                  دسترسی به نمونه کارهای VIP
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#f7c873]">
                    ⌚
                  </span>
                  اعلان آنی تغییرات قیمت
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#f7c873]">
                    ⚒
                  </span>
                  تخفیف خدمات تعمیر و آبکاری
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-4 rounded-[28px] border border-white/10 bg-white/[0.02] p-6 shadow-[var(--shadow-card)] backdrop-blur">
            <h3 className="text-sm font-semibold text-white/70">
              ساعات کاری کارگاه
            </h3>
            <div className="flex items-center justify-between text-sm text-white/60">
              <span>شنبه تا چهارشنبه</span>
              <span className="font-semibold text-white/80">۱۰ تا ۱۹</span>
            </div>
            <div className="flex items-center justify-between text-sm text-white/60">
              <span>پنجشنبه</span>
              <span className="font-semibold text-white/80">۱۰ تا ۱۵</span>
            </div>
            <div className="flex items-center justify-between text-sm text-white/60">
              <span>پشتیبانی آنلاین</span>
              <span className="font-semibold text-white/80">۲۴ ساعته</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative mx-auto max-w-6xl space-y-12 px-6 pb-24"
      >
        <div className="absolute inset-x-12 top-0 -z-10 h-32 bg-gradient-to-b from-[#f7c873]/20 via-transparent to-transparent blur-2xl opacity-70" />
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#f7c873]/80">
              SERVICES
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              خدمات تخصصی گالری بساژ
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/60">
            هر پروژه با یک طراح اختصاصی و کارشناس بازار جلو می‌رود تا محصول
            نهایی دقیقاً مطابق سلیقه و هدف سرمایه‌گذاری شما باشد.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-8 transition hover:-translate-y-1 hover:border-[#f7c873]/40 hover:bg-white/[0.05]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_-20%,rgba(247,200,115,0.08),transparent)] opacity-0 transition group-hover:opacity-100" />
              <div className="relative space-y-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-lg text-[#f7c873]">
                  ✧
                </span>
                <h3 className="text-xl font-semibold text-white/90">
                  {service.title}
                </h3>
                <p className="text-sm leading-6 text-white/60">
                  {service.description}
                </p>
                <ul className="space-y-3 text-sm text-white/65">
                  {service.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-white/70"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#f7c873]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="prices"
        className="relative mx-auto max-w-6xl space-y-10 px-6 pb-24"
      >
        <div className="absolute inset-x-0 -top-16 -z-10 h-56 bg-[radial-gradient(circle_at_center,rgba(247,200,115,0.2),transparent_70%)] blur-3xl opacity-70" />
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f7c873]/80">
              MARKET
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              تابلوی نرخ لحظه‌ای طلا و سکه
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
            آخرین بروزرسانی: ۱۵:۳۲
          </span>
        </div>
        <div className="grid gap-6 lg:grid-cols-[3fr,2fr]">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div>
                <p className="text-sm text-white/50">تابلو فروش نقدی</p>
                <h3 className="text-lg font-semibold text-white/90">
                  نرخ بر اساس تومان
                </h3>
              </div>
              <span className="rounded-full bg-[#f7c873]/20 px-3 py-1 text-xs font-semibold text-[#f7c873]">
                بروزرسانی خودکار
              </span>
            </div>
            <div className="divide-y divide-white/5">
              {priceBoard.map((item) => (
                <div
                  key={item.name}
                  className="grid grid-cols-[1.6fr,1fr,1fr,auto] items-center gap-4 px-6 py-5 text-sm text-white/70 max-sm:grid-cols-1 max-sm:gap-2"
                >
                  <span className="font-semibold text-white">{item.name}</span>
                  <span className="text-lg font-semibold text-white">
                    {item.price}
                    {item.name !== "انس جهانی" ? " تومان" : " دلار"}
                  </span>
                  <span
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                      item.trend === "up"
                        ? "bg-emerald-400/10 text-emerald-300"
                        : "bg-rose-400/10 text-rose-300"
                    }`}
                  >
                    {item.trend === "up" ? "▲" : "▼"} {item.change}
                  </span>
                  <span className="text-xs text-white/40">
                    بروزرسانی {item.update}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#20130a] via-[#130d1a] to-[#0c0a16] p-6 shadow-[var(--shadow-card)]">
              <h3 className="text-sm font-semibold text-[#f7c873]">
                تحلیل کوتاه‌مدت
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/60">
                مقاومت مهم طلای ۱۸ عیار در کانال ۳٫۵ میلیون تومان قرار دارد. در
                صورت تثبیت بالای این سطح، احتمال صعود تا ۳٫۷۵ میلیون وجود دارد.
                گواهی سپرده سکه امامی همچنان با حباب ۷٪ معامله می‌شود.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-sm font-semibold text-white/80">
                سیگنال‌های ویژه امروز
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-white/65">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  خرید پله‌ای طلای آب‌شده در محدوده ۳٫۴۸ تا ۳٫۵۳ با حد ضرر ۳٫۴۰{" "}
                  میلیون تومان.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#f7c873]" />
                  تبدیل سکه امامی به نیم‌سکه برای کاهش ریسک نوسان در هفته
                  جاری.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                  استفاده از طرح اقساط خرید سرویس‌های دست‌ساز با سود صفر تا ۴
                  ماه.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="relative mx-auto max-w-6xl space-y-10 px-6 pb-24"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f7c873]/80">
              PROCESS
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              فرایند ساخت سفارش اختصاصی
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/60">
            تمام مراحل زیر با شفافیت کامل، فایل‌های تصویری و گزارش‌های مرحله‌ای
            به شما ارائه می‌شود.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {timeline.map((step, index) => (
            <div
              key={step.title}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] p-6"
            >
              <div className="absolute -top-24 right-0 h-48 w-48 -rotate-45 bg-[radial-gradient(circle_at_center,rgba(247,200,115,0.15),transparent_70%)]" />
              <div className="relative">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-semibold text-[#f7c873]">
                  ۰{index + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl space-y-10 px-6 pb-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f7c873]/80">
              STORIES
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              روایت مشتریان بساژ
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/60">
            بازخورد مشتریان و تجربه همکاری با کارگاه بساژ بهترین معرفی برای
            ماست.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(110%_110%_at_0%_0%,rgba(247,200,115,0.14),transparent)] opacity-80" />
              <div className="relative space-y-4">
                <blockquote className="text-sm leading-7 text-white/70">
                  “{item.text}”
                </blockquote>
                <figcaption className="flex items-center justify-between text-sm text-white/60">
                  <div>
                    <p className="font-semibold text-white/85">{item.name}</p>
                    <p>{item.city}</p>
                  </div>
                  <span className="rounded-full bg-[#f7c873]/20 px-3 py-1 text-xs font-semibold text-[#f7c873]">
                    مشتری ویژه
                  </span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="relative mx-auto max-w-6xl space-y-10 px-6 pb-32"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(100%_100%_at_50%_0%,rgba(247,200,115,0.18),transparent_70%)] opacity-80" />
        <div className="grid gap-10 rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_40px_80px_-45px_rgba(0,0,0,0.9)] lg:grid-cols-[1.25fr,1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">در تماس باشید</h2>
            <p className="text-sm leading-6 text-white/65">
              فرم زیر را تکمیل کنید تا کارشناسان ما ظرف ۲ ساعت کاری با شما
              تماس بگیرند. امکان رزرو جلسات حضوری و آنلاین وجود دارد.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs text-white/50">آدرس کارگاه</p>
                <p className="mt-2 text-sm text-white/80">
                  تهران، خیابان کریم‌خان زند، کوچه بساژ، پلاک ۱۲
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs text-white/50">شماره تماس</p>
                <p className="mt-2 text-sm text-white/80">۰۲۱-۴۳۷۲ ۹۰۰</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs text-white/50">واتس‌اپ</p>
                <p className="mt-2 text-sm text-white/80">۰۹۱۲ ۴۸۰ ۳۲۱۰</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs text-white/50">ساعات پاسخگویی</p>
                <p className="mt-2 text-sm text-white/80">
                  شنبه تا پنجشنبه ۱۰ تا ۱۸
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/60">
              ما را در شبکه‌های اجتماعی دنبال کنید:
              <div className="flex gap-3 text-[#f7c873]">
                <a href="https://instagram.com" className="hover:text-[#ffd88e]">
                  اینستاگرام
                </a>
                <span>•</span>
                <a href="https://telegram.org" className="hover:text-[#ffd88e]">
                  تلگرام
                </a>
                <span>•</span>
                <a href="https://whatsapp.com" className="hover:text-[#ffd88e]">
                  واتس‌اپ
                </a>
              </div>
            </div>
          </div>
          <form className="space-y-5 text-sm">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="space-y-2 text-white/70">
                <span>نام و نام خانوادگی</span>
                <input
                  required
                  type="text"
                  placeholder="مثال: نرگس آذری"
                  className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#f7c873]/60 focus:outline-none"
                />
              </label>
              <label className="space-y-2 text-white/70">
                <span>شماره تماس</span>
                <input
                  required
                  type="tel"
                  placeholder="۰۹۱۲..."
                  className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#f7c873]/60 focus:outline-none"
                />
              </label>
            </div>
            <label className="space-y-2 text-white/70">
              <span>موضوع سفارش</span>
              <select className="w-full appearance-none rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white focus:border-[#f7c873]/60 focus:outline-none">
                <option className="bg-[#0f0d19]" value="custom">
                  ساخت اختصاصی
                </option>
                <option className="bg-[#0f0d19]" value="repair">
                  تعمیر و آبکاری
                </option>
                <option className="bg-[#0f0d19]" value="invest">
                  مشاوره سرمایه‌گذاری
                </option>
                <option className="bg-[#0f0d19]" value="other">
                  سایر
                </option>
              </select>
            </label>
            <label className="space-y-2 text-white/70">
              <span>توضیحات بیشتر</span>
              <textarea
                rows={4}
                placeholder="ابعاد، بودجه یا توضیحات تکمیلی خود را بنویسید..."
                className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#f7c873]/60 focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-[#f7c873] px-6 py-3 font-semibold text-[#2b1c08] shadow-[0_18px_40px_-20px_rgba(247,200,115,0.9)] transition hover:bg-[#ffd785]"
            >
              ارسال درخواست
            </button>
            <p className="text-xs text-white/40">
              ارسال فرم به منزله تعهد به خرید نیست؛ کارشناسان برای نهایی‌سازی
              جزئیات با شما تماس می‌گیرند.
            </p>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0d0a16]/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} گالری طلای بساژ. تمامی حقوق محفوظ است.</p>
          <div className="flex gap-4">
            <a className="hover:text-[#f7c873]" href="#services">
              خدمات
            </a>
            <a className="hover:text-[#f7c873]" href="#prices">
              نرخ‌ها
            </a>
            <a className="hover:text-[#f7c873]" href="#contact">
              ارتباط
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
