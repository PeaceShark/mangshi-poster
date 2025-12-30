import React, { useState } from 'react';
import { Camera, Utensils, MapPin, Clock, Music, Coffee, Moon, Sun, ArrowRight, Plane, Sparkles } from 'lucide-react';

const ItineraryPoster = () => {
  const [activeDay, setActiveDay] = useState(0);

  const days = [
    { date: '12.31', title: '跨年·初见芒市', sub: 'Arrival & New Year Eve' },
    { date: '01.01', title: '朝圣·金塔日落', sub: 'Golden Pagoda & Relax' }, // 01.01 不动
    { date: '01.02', title: '珍奇·异域乐园', sub: 'Rare Garden & Night Market' }, // 仅改：下午去珍奇园
    { date: '01.03', title: '告别·雨林咖啡', sub: 'Coffee & Departure' },
  ];

  const scheduleData = {
    '12.31': [
      {
        time: '17:00–19:10',
        type: 'arrival',
        title: '抵达芒市',
        desc: '我们先入住丽枫酒店，把行李放好、换一套“出片友好”的衣服。第一张照片就从酒店门口/电梯镜子开始，给这趟旅行一个开场。',
        location: '丽枫酒店·芒市金孔雀大街机场店',
        photo: '"到达照"开场镜头（镜子/门口路牌/牵手背影）',
        search: ['高德 丽枫酒店 芒市金孔雀大街机场店'],
        tags: ['酒店']
      },
      {
        time: '19:00–20:00',
        type: 'food',
        title: '第一顿晚餐（就近快出餐）',
        desc: '我们这顿的目标是：出餐快、口味稳、还能拍出“第一顿”的仪式感。想吃得更全面、桌面更好拍，就选【梦幻德宏】（撒撇/手抓饭/泡鲁达一站式）；更在意效率、想少排队快吃快走，就选【爱华手抓饭老店】。',
        location: '梦幻德宏（胞波路46号） 或 爱华手抓饭老店（阔时路27号）',
        photo: '桌拍高饱和（簸箕+蘸水+泡鲁达拉近）',
        search: ['大众点评 梦幻德宏', '大众点评 爱华手抓饭老店', '小红书 芒市 手抓饭 撒撇 泡鲁达'],
        tags: ['本地美食', '正餐']
      },
      {
        time: '20:00–22:30',
        type: 'highlight',
        title: '跨年主仪式：芒市广场民族演出',
        desc: '这是我们跨年的“主镜头”：傣族舞台、鼓点、灯光和人群倒数。我们站在人群边缘，既好拍舞台也方便撤离去清吧。',
        location: '芒市广场',
        photo: '人群背影+舞台灯光；半侧脸被灯光勾边',
        search: ['公众号 芒市 跨年 傣族 文艺表演', '小红书 芒市广场 跨年'],
        tags: ['必选', '跨年']
      },
      {
        time: '22:30–24:00',
        type: 'night',
        title: '微醺倒数（清吧/音乐现场二选一）',
        desc: '我们把“倒数这一下”留给酒精和氛围：想更安静、适合聊天和拍霓虹门头，就去【黑森林酒吧】；想更热闹、现场感更强，就去【芒LIVEHOUSE】。23:50 前找好位置，00:00 碰杯倒数。',
        location: '黑森林酒吧(白象街898号) 或 芒LIVEHOUSE(新华路82号)',
        photo: '门头霓虹+微醺侧脸；00:00 碰杯近景',
        search: ['大众点评 黑森林酒吧 芒市', '大众点评 芒LIVEHOUSE 芒市', '小红书 芒市 清吧 跨年'],
        tags: ['必选', '清吧', '跨年']
      },
    ],

    '01.01': [
      {
        time: '上午',
        type: 'relax',
        title: '睡到自然醒（慢慢来）',
        desc: '我们不设闹钟，醒了再出门。想补点能量，就在酒店附近随缘买杯咖啡/果汁，给新年一个“慢启动”。',
        location: '酒店周边',
        photo: '窗边光线下的“慵懒感”抓拍',
        search: ['高德 芒市 咖啡 近金孔雀大街'],
        tags: ['休息']
      },
      {
        time: '12:30–14:00',
        type: 'food',
        title: '活螃蟹正餐（稳妥不踩空）',
        desc: '我们午餐要的是“现点现做的鲜活螃蟹”，并且不赌午间是否营业：主选【天然活螃蟹（南蚌路店）】；如果我们想把活蟹留到更有夜宵氛围的时间，就把【瑞丽活螃蟹（兴昌商业广场）】留作晚餐/宵夜备选。',
        location: '天然活螃蟹（南蚌路75-29号·金塔水乡） 或（晚餐/宵夜备选）瑞丽活螃蟹（兴昌商业广场4-15~16号）',
        photo: '螃蟹特写+蘸料；剥蟹手部动作特写',
        search: ['大众点评 天然活螃蟹 南蚌路', '大众点评 瑞丽活螃蟹 芒市', '小红书 芒市 活螃蟹'],
        tags: ['必选', '正餐', '海鲜']
      },
      {
        time: '15:30–18:10',
        type: 'highlight',
        title: '勐焕大金塔（卡日落）',
        desc: '我们把“新年的金色仪式感”留给这里：下午上山不晒、逆光更柔，金塔自带反光，出片率非常稳定。',
        location: '勐焕大金塔',
        photo: '金色中轴对称构图；台阶中段拍“人物+塔尖”同框',
        search: ['小红书 勐焕大金塔 日落 机位', '高德 勐焕大金塔'],
        tags: ['地标', '出片']
      },
      {
        time: '18:30–20:00',
        type: 'food',
        title: '晚餐（二选一：德宏本地代表作 / 东南亚约会餐）',
        desc: '我们按“今晚想要的氛围”选：如果想吃到最德宏、最有辨识度的味型（撒撇/手抓饭），就选【岳氏撒撇总店】或【梦幻德宏】；如果想更约会、更异域、更好拍环境，就选【阿古吉缅甸茶餐厅】（菜单丰富、适合桌拍）。',
        location: '岳氏撒撇总店（丙午街4号） 或 梦幻德宏（胞波路46号） / 阿古吉缅甸茶餐厅（大众点评可导航）',
        photo: '入座-上菜-碰杯-蘸水特写',
        search: ['大众点评 岳氏撒撇总店', '大众点评 梦幻德宏', '大众点评 阿古吉 缅甸茶餐厅'],
        tags: ['正餐', '约会', '二选一']
      },
      {
        time: '21:30–23:00',
        type: 'relax',
        title: '傣式/缅式洗头（放松收尾）',
        desc: '我们把今天的疲劳交给“洗头+肩颈背放松”。优先去【白云洗头屋】；如果排队，就直接转去同街附近的【容容家洗头】当备选，保证不浪费夜间时间。',
        location: '白云洗头屋（芒市大街73附2号） 或 容容家洗头（芒市大街87号）',
        photo: '门头/牵手背影；结束后路灯下“松弛感”抓拍',
        search: ['小红书 芒市 缅式洗头', '大众点评 白云洗头屋', '大众点评 容容家洗头'],
        tags: ['必选', '放松']
      }
    ],

    '01.02': [
      {
        time: '上午',
        type: 'food',
        title: '市井早餐（两种风格二选一）',
        desc: '醒了再决定：想吃最烟火的就去【烂路早点】；想坐下来慢慢吃、味道更稳定，就去【林氏圆子】这类本地店。',
        location: '烂路早点（备选） 或 林氏圆子（胞波路149号）',
        photo: '蒸汽氛围+手拿早餐的街拍',
        search: ['大众点评 烂路早点 芒市', '大众点评 林氏圆子 芒市'],
        tags: ['早餐']
      },
      {
        time: '13:30–14:40',
        type: 'food',
        title: '午餐（正餐稳妥 / 民族风桌拍 二选一）',
        desc: '我们午餐要的是：坐下来吃一顿、别太重口影响下午出片。如果想稳妥吃正餐，就去【六阿太餐厅】；如果想把“民族风环境+小吃组合”一起打包、桌拍更丰富，就去【可哆咪小吃店】（手抓饭/拌菜/泡鲁达更适合拍）。',
        location: '六阿太餐厅（大众点评可导航） 或 可哆咪小吃店（胞波路141号）',
        photo: '香料系桌拍（甩粑粑/拌菜/泡鲁达）',
        search: ['大众点评 六阿太餐厅 芒市', '大众点评 可哆咪小吃 芒市', '小红书 芒市 泡鲁达 甩粑粑'],
        tags: ['本地美食', '正餐']
      },

      // ✅ 仅改这里：把 01.02 下午换成 勐巴娜西珍奇园
      {
        time: '15:30–18:10',
        type: 'highlight',
        title: '勐巴娜西珍奇园（下午主场）',
        desc: '我们把下午留给珍奇园：它的看点密度高，门口牌坊、园内热带植物、雕塑/民俗元素都很适合拍照。节奏上不赶路，按“走10分钟停一次拍一组”的方式慢慢逛，刚好接上晚餐与夜市。',
        location: '勐巴娜西珍奇园',
        photo: '珍奇园大门广角；热带植物前景虚化+人像；雕塑与人物同框',
        search: ['高德 勐巴娜西珍奇园', '大众点评 勐巴娜西珍奇园', '小红书 勐巴娜西珍奇园 出片 机位'],
        tags: ['必选', '地标', '出片']
      },

      {
        time: '18:40–20:10',
        type: 'food',
        title: '夜市前先吃饱（但别吃撑）',
        desc: '我们这顿的策略是“垫住底、不把胃吃满”，因为后面夜市还要继续逛继续拍。想炭火氛围更直接，就选【牛少爷烧烤】；想坐得更舒服、菜更像一顿完整晚餐，就选【圣亚庄园】。',
        location: '牛少爷烧烤店（华侨商贸城店） 或 圣亚庄园（人保路5号）',
        photo: '炭火氛围+串串近景；两人对坐剪影',
        search: ['大众点评 牛少爷烧烤 华侨商贸城', '大众点评 圣亚庄园 芒市'],
        tags: ['晚餐', '夜市前']
      },
      {
        time: '20:30–23:30',
        type: 'night',
        title: '新玩厂夜市（逛吃+霓虹出片）',
        desc: '我们按“先逛后吃”：先拍园区霓虹/涂鸦/复古厂房，再用小吃补齐味蕾。想喝一杯或找个舒服的落脚点，就把【叙也·Bistro】当夜间锚点。',
        location: '新玩厂（河东路55号）/ 叙也·Bistro（新玩厂A5栋）',
        photo: '霓虹门头+涂鸦墙；复古厂房走廊对称构图',
        search: ['高德 新玩厂 芒市', '小红书 新玩厂 夜市 出片', '大众点评 叙也 Bistro 芒市'],
        tags: ['必选', '夜市']
      }
    ],

    '01.03': [
      {
        time: '上午',
        type: 'relax',
        title: '睡到自然醒 + 收拾行李',
        desc: '我们把节奏放慢：先整理行李、把伴手礼空位留出来，退房时间心里有数就行。',
        location: '酒店',
        photo: '行李箱平铺“旅行收尾感”',
        search: ['高德 丽枫酒店 芒市'],
        tags: ['返程']
      },
      {
        time: '12:30–14:00',
        type: 'food',
        title: '收官午餐（指定二选一）',
        desc: '我们把“最后一顿正餐”吃得很像收官：如果更想稳妥、上菜快、口味覆盖全面，就选【梦幻德宏】；如果更在意环境氛围和摆盘出片，就选【小瓦碴厨房】（建议给它多留一点时间）。',
        location: '小瓦碴厨房 或 梦幻德宏（胞波路46号）',
        photo: '环境+菜品细节（近景拍食物，远景拍氛围）',
        search: ['大众点评 小瓦碴厨房 芒市', '大众点评 梦幻德宏'],
        tags: ['二选一', '正餐']
      },
      {
        time: '14:30–15:45',
        type: 'coffee',
        title: '东南亚风咖啡（收官出片）',
        desc: '我们用一杯咖啡把这趟旅行“慢慢收尾”：想更城市、更方便衔接后面的扫街，就选【青境咖啡馆】；想更雨林、绿植更密、画面更“度假”，就选【森活野社雨林咖啡】。',
        location: '青境咖啡馆（河东巷29号） 或 森活野社雨林咖啡（大众点评/高德可导航）',
        photo: '窗边逆光半身；绿植前景虚化；两杯咖啡碰杯',
        search: ['小红书 芒市 东南亚风 咖啡馆', '大众点评 青境咖啡馆 芒市', '小红书 森活野社 雨林咖啡 芒市'],
        tags: ['必选', '下午茶']
      },
      {
        time: '15:50–16:50',
        type: 'walk',
        title: 'City Walk（伴手礼扫货路线）',
        desc: '我们不再“随缘逛”，而是走一条更高命中率的伴手礼路线：先去【树包塔】补拍，然后直奔【小匡（德宏特产超市）】集中买“体面又好带”的礼物；最后到【红星街】补干巴/果脯等更本地的东西。',
        location: '树包塔 → 小匡（德宏特产超市，胞波路177号）→ 红星街',
        photo: '树包塔广角收尾；特产店“成堆礼物”桌拍',
        search: ['高德 树包塔 芒市', '大众点评 小匡 德宏特产超市', '小红书 芒市 红星街 干巴'],
        tags: ['伴手礼', 'CityWalk']
      },
      {
        time: '16:50–17:20',
        type: 'arrival',
        title: '回酒店取行李',
        desc: '我们把节奏放慢，留出“回酒店取行李+最后检查”的缓冲，避免临走前手忙脚乱。',
        location: '丽枫酒店',
        photo: '酒店门口“旅行ending镜头”',
        search: ['高德 丽枫酒店 芒市'],
        tags: ['缓冲']
      },
      {
        time: '17:20–19:10',
        type: 'arrival',
        title: '前往机场',
        desc: 'Travel Ending：把最后几张照片留给路牌、登机口、牵手背影。',
        location: '芒市机场',
        photo: '路牌/登机口/牵手背影',
        search: ['高德 德宏芒市机场'],
        tags: ['再见']
      }
    ]
  };



  const currentItems = scheduleData[days[activeDay].date];

  const getTypeColor = (type) => {
    switch (type) {
      case 'food': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'highlight': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'night': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'relax': return 'bg-blue-50 text-blue-700 border-blue-100';
      case 'coffee': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default: return 'bg-stone-100 text-stone-600 border-stone-200';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'food': return <Utensils size={16} />;
      case 'highlight': return <Sparkles size={16} />;
      case 'night': return <Moon size={16} />;
      case 'relax': return <Sun size={16} />;
      case 'coffee': return <Coffee size={16} />;
      case 'walk': return <MapPin size={16} />;
      case 'arrival': return <Plane size={16} />;
      default: return <Clock size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans selection:bg-emerald-200 text-stone-800 flex flex-col items-center py-8 px-4 sm:px-6">
      
      {/* Poster Container */}
      <div className="w-full max-w-md bg-white shadow-2xl overflow-hidden rounded-xl border border-stone-100 relative">
        
        {/* Decorative Top Pattern */}
        <div className="h-4 w-full bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-400"></div>

        {/* Header Section */}
        <div className="bg-[#0F4C3A] text-[#FDFCF8] p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="leaf" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M20 40c0-11-9-20-20-20 11 0 20-9 20-20 0 11 9 20 20 20-11 0-20 9-20 20z" fill="#FFF"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#leaf)"/>
             </svg>
          </div>
          
          <h3 className="text-emerald-300 tracking-[0.3em] text-xs uppercase mb-2 font-bold">Travel Itinerary</h3>
          <h1 className="text-4xl font-black tracking-tight mb-2 font-serif">芒市·慢生活</h1>
          <p className="text-emerald-100/80 text-sm font-light">12.31 — 01.03 跨年指南</p>
          
          <div className="mt-6 flex justify-center gap-2">
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs border border-white/20">🌴 热带风情</span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs border border-white/20">🍲 傣味美食</span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs border border-white/20">📷 极致出片</span>
          </div>
        </div>

        {/* Date Tabs */}
        <div className="flex overflow-x-auto bg-[#F5F5F0] border-b border-stone-200 sticky top-0 z-10 scrollbar-hide">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`flex-1 min-w-[25%] py-4 px-2 text-center transition-all duration-300 relative group ${
                activeDay === index 
                  ? 'bg-white text-[#0F4C3A]' 
                  : 'text-stone-400 hover:text-stone-600'
              }`}
            >
              <div className={`text-xl font-bold font-serif ${activeDay === index ? 'scale-110' : 'scale-100'} transition-transform`}>
                {day.date}
              </div>
              <div className="text-[10px] uppercase tracking-wider mt-1 opacity-80 truncate px-1">
                {day.date === '12.31' ? '跨年' : day.date === '01.01' ? '金塔' : day.date === '01.02' ? '异域' : '老街'}
              </div>
              {activeDay === index && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-400"></div>
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-6 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] bg-repeat">
          
          {/* Day Header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#0F4C3A] font-serif">{days[activeDay].title}</h2>
              <p className="text-stone-500 text-sm">{days[activeDay].sub}</p>
            </div>
            <div className="text-amber-500">
               {activeDay === 0 && <Sparkles size={24} />}
               {activeDay === 1 && <Sun size={24} />}
               {activeDay === 2 && <MapPin size={24} />}
               {activeDay === 3 && <Coffee size={24} />}
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6 relative pl-4 border-l-2 border-dashed border-stone-200">
            {currentItems.map((item, idx) => (
              <div key={idx} className="relative pl-6 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                
                {/* Timeline Dot */}
                <div className={`absolute -left-[21px] top-0 p-1.5 rounded-full border-2 border-white shadow-sm z-10 ${getTypeColor(item.type).split(' ')[0]}`}>
                  <div className={`text-${item.type === 'arrival' ? 'stone' : item.type}-700`}>
                     {getTypeIcon(item.type)}
                  </div>
                </div>

                {/* Time */}
                <div className="text-xs font-bold text-stone-400 mb-1 font-mono tracking-tight flex items-center gap-2">
                  {item.time}
                  {item.tags.includes('必选') && (
                    <span className="bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded-sm">MUST</span>
                  )}
                </div>

                {/* Card */}
                <div className="bg-white rounded-lg shadow-sm border border-stone-100 p-4 transition-all hover:shadow-md hover:border-emerald-100 group">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-stone-800 text-lg leading-tight group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-stone-600 mb-3 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="space-y-2.5">
                    {/* Location */}
                    <div className="flex items-start gap-2 text-xs text-stone-500">
                      <MapPin size={12} className="mt-0.5 shrink-0 text-emerald-600" />
                      <span>{item.location}</span>
                    </div>

                    {/* Photo Op */}
                    {item.photo && (
                      <div className="flex items-start gap-2 text-xs bg-stone-50 p-2 rounded border border-stone-100">
                        <Camera size={12} className="mt-0.5 shrink-0 text-amber-500" />
                        <span className="text-stone-600 italic">
                          <span className="font-semibold text-amber-600 not-italic mr-1">机位:</span>
                          {item.photo}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={`text-[10px] px-2 py-0.5 rounded-full border ${getTypeColor(item.type)}`}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* End of Day */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-stone-300 text-xs uppercase tracking-widest">
              <span>Day {activeDay + 1} Ends</span>
              <div className="h-px w-8 bg-stone-200"></div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#F5F5F0] p-4 text-center border-t border-stone-200">
           <p className="text-xs text-stone-400 mb-1">Generated for your Mangshi Trip</p>
           <p className="text-[10px] text-stone-300 font-mono">ENJOY YOUR HOLIDAY</p>
        </div>
      </div>
    </div>
  );
};

export default ItineraryPoster;
