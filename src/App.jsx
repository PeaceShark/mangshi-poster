import React, { useState } from 'react';
import { Camera, Utensils, MapPin, Clock, Music, Coffee, Moon, Sun, ArrowRight, Plane, Sparkles } from 'lucide-react';

const ItineraryPoster = () => {
  const [activeDay, setActiveDay] = useState(0);

  const days = [
    { date: '12.31', title: '跨年·初见芒市', sub: 'Arrival & New Year Eve' },
    { date: '01.01', title: '朝圣·金塔日落', sub: 'Golden Pagoda & Relax' },
    { date: '01.02', title: '市井·漫步老城', sub: 'City Walk & Night Market' },
    { date: '01.03', title: '告别·雨林咖啡', sub: 'Coffee & Departure' },
  ];

  const scheduleData = {
    '12.31': [
      {
        time: '17:00–19:10',
        type: 'arrival',
        title: '抵达芒市',
        desc: '入住丽枫酒店，换装准备出发',
        location: '丽枫酒店·芒市金孔雀大街机场店',
        photo: '"到达照"开场镜头',
        tags: ['酒店']
      },
      {
        time: '19:10–20:20',
        type: 'food',
        title: '第一顿晚餐',
        desc: '别久等，赶演出！',
        location: '梦幻德宏 或 爱华手抓饭老店',
        photo: '桌拍高饱和（手抓饭簸箕/撒撇蘸水）',
        tags: ['本地美食']
      },
      {
        time: '20:00–22:30',
        type: 'highlight',
        title: '跨年主仪式',
        desc: '芒市广场看傣族文艺表演',
        location: '芒市广场',
        photo: '人群背影+舞台灯光',
        tags: ['必选', '跨年']
      },
      {
        time: '22:45–00:30',
        type: 'night',
        title: '微醺倒数',
        desc: '00:00 碰杯倒数，新年快乐',
        location: '芒LIVEHOUSE 或 南风巷天台酒吧',
        photo: '门头霓虹+微醺侧脸',
        tags: ['必选', '清吧']
      }
    ],
    '01.01': [
      {
        time: '上午',
        type: 'relax',
        title: '睡到自然醒',
        desc: '养精蓄锐，开启新的一年',
        location: '酒店',
        photo: '',
        tags: ['休息']
      },
      {
        time: '12:30–14:00',
        type: 'food',
        title: '特色火锅',
        desc: '下锅沸腾的烟火气',
        location: '许府牛火锅 或 鼎金野生菌火锅',
        photo: '热气+食材特写短视频',
        tags: ['必选', '正餐']
      },
      {
        time: '15:30–18:10',
        type: 'highlight',
        title: '勐焕大金塔',
        desc: '卡日落时分，金光璀璨',
        location: '勐焕大金塔',
        photo: '金色中轴大片（对称构图）',
        tags: ['地标']
      },
      {
        time: '18:30–19:40',
        type: 'food',
        title: '民族风味晚餐',
        desc: '满满的仪式感',
        location: '盈黎手抓饭 或 爱华手抓饭',
        photo: '手部特写（捏饭团/蘸水）',
        tags: ['手抓饭']
      },
      {
        time: '21:15–22:45',
        type: 'relax',
        title: '傣式/缅式洗头',
        desc: '极度放松的本地体验',
        location: '市区洗头店',
        photo: '门头/牵手背影',
        tags: ['必选', '放松']
      }
    ],
    '01.02': [
      {
        time: '上午',
        type: 'food',
        title: '市井早餐',
        desc: '可选烂路早点，感受烟火气',
        location: '烂路早点（备选）',
        photo: '市井早餐氛围',
        tags: ['早餐']
      },
      {
        time: '13:30–14:40',
        type: 'food',
        title: '缅味/傣味午餐',
        desc: '换个口味尝尝鲜',
        location: '六阿太餐厅 或 阿古吉缅甸茶餐厅',
        photo: '香料系桌拍（甩粑粑/泡鲁达）',
        tags: ['异域风情']
      },
      {
        time: '15:30–18:20',
        type: 'walk',
        title: '老城扫街',
        desc: '市井+购物+出片',
        location: '团结大街 / 菩提街 / 树包塔',
        photo: '棕榈树斑马线 / 彩墙',
        tags: ['必选', 'CityWalk']
      },
      {
        time: '18:40–20:10',
        type: 'food',
        title: '先吃饱再去夜市',
        desc: '不赶时间的晚餐',
        location: '牛少爷烧烤店 或 圣亚庄园',
        photo: '炭火氛围+串串特写',
        tags: ['烧烤']
      },
      {
        time: '20:30–23:30',
        type: 'night',
        title: '新玩厂夜市',
        desc: '霓虹灯下的夜生活',
        location: '新玩厂',
        photo: '霓虹门头+涂鸦墙',
        tags: ['必选', '夜市']
      }
    ],
    '01.03': [
      {
        time: '上午',
        type: 'relax',
        title: '收拾行李',
        desc: '从容整理，睡到自然醒',
        location: '酒店',
        photo: '',
        tags: ['返程']
      },
      {
        time: '12:30–14:00',
        type: 'food',
        title: '收官午餐',
        desc: '最后一次正餐',
        location: '小瓦碴厨房 或 梦幻德宏',
        photo: '环境+菜品细节',
        tags: ['二选一']
      },
      {
        time: '14:30–16:30',
        type: 'coffee',
        title: '东南亚风咖啡',
        desc: '收官出片',
        location: '森活野社雨林咖啡',
        photo: '雨林绿植+窗边逆光',
        tags: ['必选', '下午茶']
      },
      {
        time: '16:30–19:10',
        type: 'arrival',
        title: '前往机场',
        desc: 'Travel Ending',
        location: '芒市机场',
        photo: '酒店门口/路牌/登机口',
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
                {day.date === '12.31' ? '跨年' : day.date === '01.01' ? '金塔' : day.date === '01.02' ? '老城' : '返程'}
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
