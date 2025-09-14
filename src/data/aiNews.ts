export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  date: string;
  tags: string[];
  status?: 'analysis' | 'published';
}

/**
 * List of AI news items for 14 September 2025. Each news item summarises
 * a noteworthy development in the artificial intelligence landscape within the last 24-48 hours.
 */
export const aiNews: NewsItem[] = [
  {
    id: '2025-09-14-xai-layoffs',
    title: 'xAI’de işten çıkarma dalgası',
    summary: 'Elon Musk’ın xAI şirketi, yüzlerce veri etiketleyicisini işten çıkararak genelist tutor ekibinden alan uzmanı tutor ekibine geçiş sinyali verdi.',
    url: '',
    date: '2025-09-14',
    tags: ['xAI', 'işten çıkarma', 'veri etiketleme'],
    status: 'analysis',
  },
  {
    id: '2025-09-14-trump-ai-plan',
    title: 'Trump’ın AI planı MAGA içinde ayrışmaya neden oluyor',
    summary: 'Donald Trump’ın yapay zeka stratejisi hızlanma ve inovasyonu vurgularken taban, büyük teknoloji şirketlerine duyulan güvensizlik nedeniyle bölünmüş durumda.',
    url: '',
    date: '2025-09-14',
    tags: ['Trump', 'AI politika', 'MAGA'],
    status: 'analysis',
  },
  {
    id: '2025-09-14-apple-walker-departure',
    title: 'Apple’da Robby Walker ayrılığı',
    summary: 'Apple’ın AI ve arama biriminden sorumlu üst düzey yönetici Robby Walker’ın ayrılacağı açıklandı; bu durum Siri ve arama stratejisinde değişikliklerin habercisi olabilir.',
    url: '',
    date: '2025-09-14',
    tags: ['Apple', 'Robby Walker', 'AI yönetimi'],
    status: 'analysis',
  },
  {
    id: '2025-09-14-google-ai-plus',
    title: 'Google’dan yeni AI abonelik katmanı: AI Plus',
    summary: 'Google, Gemini 2.5 Pro modeline ve Veo 3 video üretimine erişim sağlayan AI Plus katmanını tanıttı; farklı bölgelerde AI Pro/Ultra paketleri de sunulacak.',
    url: '',
    date: '2025-09-14',
    tags: ['Google', 'Gemini', 'Veo 3', 'abone'],
    status: 'analysis',
  },
  {
    id: '2025-09-14-asml-mistral',
    title: 'ASML, Mistral AI’ye 1.3 milyar € yatırdı',
    summary: 'Hollandalı çip ekipmanı devi ASML, Avrupa merkezli girişim Mistral AI’ye 1.3 milyar € yatırım yaparak en büyük hissedar konumuna geldi.',
    url: '',
    date: '2025-09-14',
    tags: ['ASML', 'Mistral AI', 'yatırım'],
    status: 'analysis',
  },
  {
    id: '2025-09-14-anthropic-nyt-settlement',
    title: 'Anthropic ve New York Times arasında telif anlaşması',
    summary: 'Anthropic, içerik kullanımına dair telif hakkı davası kapsamında New York Times ile gizli bir anlaşmaya vardığını duyurdu; anlaşmanın nihai onayı mahkemeden beklenecek.',
    url: '',
    date: '2025-09-14',
    tags: ['Anthropic', 'New York Times', 'telif'],
    status: 'analysis',
  },
  {
    id: '2025-09-14-deepfake-risks',
    title: 'Derin sahte videolar artan bir tehdit oluşturuyor',
    summary: 'Uzmanlar, siyasi dezenformasyon ve dolandırıcılıkta kullanılan deepfake videoların giderek daha ikna edici hale geldiğini belirtiyor ve tespit/filigran teknolojileri için düzenleme çağrısı yapıyor.',
    url: '',
    date: '2025-09-14',
    tags: ['deepfake', 'dezenformasyon', 'güvenlik'],
    status: 'analysis',
  },
];
