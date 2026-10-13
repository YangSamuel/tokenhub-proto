/* ============================================================
 * 模型价格公共数据层 —— model-config.html / model-price.html 共用
 * 单一数据源，避免两页面数据不同步
 * ============================================================ */

/* 各模型供应商上游成本（分时：ic/oc/cc 闲时；ic_peak/oc_peak/cc_peak 高峰） */
// Vendor cost data per model (avoids JSON-in-onclick escaping issues)
var PP_VENDOR_DB = {
  'M001': [{name:'OpenAI', ic:'—', ic_peak:'—', oc:'—', oc_peak:'—', cc:'—', cc_peak:'—', weight:100}],
  'M002': [{name:'OpenAI', ic:'—', ic_peak:'—', oc:'—', oc_peak:'—', cc:'—', cc_peak:'—', weight:100}],
  'M003': [{name:'Anthropic', ic:'20.0', ic_peak:'—', oc:'60.0', oc_peak:'—', cc:'8.0', cc_peak:'—', weight:'100'}],
  'M004': [{name:'Anthropic', ic:'—', ic_peak:'—', oc:'—', oc_peak:'—', cc:'—', cc_peak:'—', weight:100}],
  'M005': [{name:'DeepSeek', ic:'1.5', ic_peak:'—', oc:'6.0', oc_peak:'—', cc:'0.5', cc_peak:'—', weight:'60'}, {name:'火山引擎', ic:'1.2', ic_peak:'—', oc:'4.0', oc_peak:'—', cc:'0.6', cc_peak:'—', weight:'40'}],
  'M006': [{name:'DeepSeek', ic:'—', ic_peak:'—', oc:'—', oc_peak:'—', cc:'—', cc_peak:'—', weight:100}],
  'M007': [{name:'阿里云', ic:'—', ic_peak:'—', oc:'—', oc_peak:'—', cc:'—', cc_peak:'—', weight:100}],
  'M008': [{name:'阿里云', ic:'—', ic_peak:'—', oc:'—', oc_peak:'—', cc:'—', cc_peak:'—', weight:100}],
  'M009': [{name:'Google', ic:'—', ic_peak:'—', oc:'—', oc_peak:'—', cc:'—', cc_peak:'—', weight:100}],
  'M010': [{name:'Meta', ic:'—', ic_peak:'—', oc:'—', oc_peak:'—', cc:'—', cc_peak:'—', weight:100}],
  'M011': [{name:'OpenAI', ic:'—', ic_peak:'—', oc:'—', oc_peak:'—', cc:'—', cc_peak:'—', weight:100}],
  'M012': [{name:'智谱AI', ic:'2.6', ic_peak:'—', oc:'11.7', oc_peak:'—', cc:'0.65', cc_peak:'—', weight:'100'}],
  'M013': [{name:'智谱AI', ic:'1.6', ic_peak:'—', oc:'7.8', oc_peak:'—', cc:'0.9', cc_peak:'—', weight:'100'}],
  'M014': [{name:'智谱AI', ic:'3.2', ic_peak:'—', oc:'13.5', oc_peak:'—', cc:'1.0', cc_peak:'—', weight:'100'}],
  'M015': [{name:'字节跳动', ic:'1.6', ic_peak:'—', oc:'8.0', oc_peak:'—', cc:'0.32', cc_peak:'—', weight:'100'}],
  'M016': [{name:'阿里云', ic:'1.4', ic_peak:'—', oc:'5.8', oc_peak:'—', cc:'—', cc_peak:'—', weight:'100'}],
  'M017': [{name:'火山引擎', ic:'—', ic_peak:'—', oc:'—', oc_peak:'—', cc:'—', cc_peak:'—', weight:'100'}],
  'M018': [{name:'火山引擎', ic:'—', ic_peak:'—', oc:'—', oc_peak:'—', cc:'—', cc_peak:'—', weight:'100'}],
  'M019': [{name:'海艺AI', ic:'—', ic_peak:'—', oc:'—', oc_peak:'—', cc:'—', cc_peak:'—', weight:'100'}],
  'M020': [{name:'阿里云', ic:'—', ic_peak:'—', oc:'—', oc_peak:'—', cc:'—', cc_peak:'—', weight:'100'}],
  'M021': [{name:'火山引擎', ic:'—', ic_peak:'—', oc:'—', oc_peak:'—', cc:'—', cc_peak:'—', weight:'100'}],
  'M022': [{name:'火山引擎', ic:'—', ic_peak:'—', oc:'—', oc_peak:'—', cc:'—', cc_peak:'—', weight:'100'}],
  'M023': [{name:'火山引擎', ic:'—', ic_peak:'—', oc:'—', oc_peak:'—', cc:'—', cc_peak:'—', weight:'100'}],
  'M024': [{name:'快手', ic:'—', ic_peak:'—', oc:'—', oc_peak:'—', cc:'—', cc_peak:'—', weight:'100'}],
  'M025': [{name:'阿里云', ic:'—', ic_peak:'—', oc:'—', oc_peak:'—', cc:'—', cc_peak:'—', weight:'100'}],
  'M026': [{name:'DeepSeek', ic:'0.8', ic_peak:'1.6', oc:'2.5', oc_peak:'5.0', cc:'0.05', cc_peak:'0.1', weight:'100'}],
  'M027': [{name:'DeepSeek', ic:'2.5', ic_peak:'5.0', oc:'7.0', oc_peak:'14.0', cc:'0.15', cc_peak:'0.3', weight:'100'}],
  'M028': [{name:'MiniMax', ic:'—', ic_peak:'—', oc:'—', oc_peak:'—', cc:'—', cc_peak:'—', weight:'100'}]
};

/* 模型主数据（价格/标签/角标/规格） */
var MODEL_DB = {
  M001: { name:'GPT-4o', type:'text', period_enabled:false, is:'15', is_peak:'—', os:'60', os_peak:'—', cs:'7.5', cs_peak:'—', tags:'Tools,Vision,Files,128K' },
  M002: { name:'GPT-4o-mini', type:'text', period_enabled:false, is:'0.15', is_peak:'—', os:'0.6', os_peak:'—', cs:'0.075', cs_peak:'—', tags:'Tools,Vision,128K' },
  M003: { name:'Claude 3.5 Sonnet', type:'text', period_enabled:false, is:'3', is_peak:'—', os:'15', os_peak:'—', cs:'1.5', cs_peak:'—', tags:'Tools,Vision,200K,Files' },
  M004: { name:'Claude 3 Haiku', type:'text', period_enabled:false, is:'0.25', is_peak:'—', os:'1.25', os_peak:'—', cs:'0.1', cs_peak:'—', tags:'Vision,200K' },
  M005: { name:'DeepSeek-V3', type:'text', period_enabled:false, is:'1', is_peak:'—', os:'2', os_peak:'—', cs:'0.5', cs_peak:'—', tags:'64K,中文优化,流式', badge:'9折', badgeType:'promo' },
  M006: { name:'DeepSeek-R1', type:'text', period_enabled:false, is:'1', is_peak:'—', os:'4', os_peak:'—', cs:'0.5', cs_peak:'—', tags:'推理,CoT,64K' },
  M007: { name:'Qwen2.5-72B', type:'text', period_enabled:false, is:'4', is_peak:'—', os:'12', os_peak:'—', cs:'2', cs_peak:'—', tags:'Tools,128K,中文' },
  M008: { name:'Qwen2.5-7B', type:'text', period_enabled:false, is:'0.5', is_peak:'—', os:'1', os_peak:'—', cs:'0.2', cs_peak:'—', tags:'32K,中文' },
  M009: { name:'Gemini 2.0 Flash', type:'text', period_enabled:false, is:'0.1', is_peak:'—', os:'0.4', os_peak:'—', cs:'0.025', cs_peak:'—', tags:'Vision,1M,多模态' },
  M010: { name:'Llama 3.1 405B', type:'text', period_enabled:false, is:'2', is_peak:'—', os:'6', os_peak:'—', cs:'0', cs_peak:'—', tags:'128K,开源,多语言' },
  M011: { name:'DALL·E 3', type:'image', imageTiers:[{spec:'1024×1024 · 标准', cost:0.08, sell:0.08}, {spec:'1792×1024 · 高清', cost:0.12, sell:0.12}], tags:'文生图,1792x1024' },
  M012: { name:'GLM-5', type:'text', tiered:true, is:4, is_peak:'—', os:18, os_peak:'—', cs:1, cs_peak:'—', tiers:[{cond:'≤32K', is_:4, is_peak_:'—', os_:18, os_peak_:'—', cs_:1, cs_peak_:'—'}, {cond:'>32K', is_:6, is_peak_:'—', os_:22, os_peak_:'—', cs_:1.5, cs_peak_:'—'}], modelId:'glm-5', tags:'128K,推理,工具调用,阶梯计费', badge:'旗舰', badgeType:'quality' },
  M013: { name:'GLM-5-Turbo', type:'text', tiered:true, is:5, is_peak:'—', os:22, os_peak:'—', cs:1.2, cs_peak:'—', tiers:[{cond:'≤32K', is_:5, is_peak_:'—', os_:22, os_peak_:'—', cs_:1.2, cs_peak_:'—'}, {cond:'>32K', is_:7, is_peak_:'—', os_:26, os_peak_:'—', cs_:1.8, cs_peak_:'—'}], modelId:'glm-5-turbo', tags:'128K,高速,工具调用,阶梯计费' },
  M014: { name:'GLM-5.1', type:'text', tiered:true, is:6, is_peak:'—', os:24, os_peak:'—', cs:1.3, cs_peak:'—', tiers:[{cond:'≤32K', is_:6, is_peak_:'—', os_:24, os_peak_:'—', cs_:1.3, cs_peak_:'—'}, {cond:'>32K', is_:8, is_peak_:'—', os_:28, os_peak_:'—', cs_:2, cs_peak_:'—'}], modelId:'glm-5.1', tags:'128K,推理,工具调用,阶梯计费' },
  M015: { name:'Seed-2.0-Pro', type:'text', tiered:true, is:3.2, is_peak:'—', os:16, os_peak:'—', cs:0.64, cs_peak:'—', tiers:[{cond:'输入长度 [0, 32K]', is_:3.2, is_peak_:'—', os_:16, os_peak_:'—', cs_:0.64, cs_peak_:'—'}, {cond:'输入长度 (32K, 128K]', is_:4.8, is_peak_:'—', os_:24, os_peak_:'—', cs_:0.96, cs_peak_:'—'}, {cond:'输入长度 (128K, 256K]', is_:9.6, is_peak_:'—', os_:48, os_peak_:'—', cs_:1.92, cs_peak_:'—'}], modelId:'doubao-seed-2.0-pro', tags:'推理,长文本,阶梯计费', badge:'NEW', badgeType:'new' },
  M016: { name:'Qwen3.7-Plus', type:'text', tiered:true, is:2.4, is_peak:'—', os:9.6, os_peak:'—', cs:'—', cs_peak:'—', tiers:[{cond:'0 ~ 32K', is_:2.4, is_peak_:'—', os_:9.6, os_peak_:'—', cs_:'—', cs_peak_:'—'}, {cond:'32K ~ 128K', is_:3.12, is_peak_:'—', os_:12.48, os_peak_:'—', cs_:'—', cs_peak_:'—'}, {cond:'128K ~ 256K', is_:4.32, is_peak_:'—', os_:17.28, os_peak_:'—', cs_:'—', cs_peak_:'—'}], modelId:'Qwen3.7-Plus', tags:'256K,中文,推理,阶梯计费' },
  M017: { name:'Seedream 5.0', type:'image', imageTiers:[{spec:'1K×1K · 标准', cost:0.2, sell:0.2}, {spec:'1K×1K · 高清', cost:0.3, sell:0.3}, {spec:'2K×2K · 标准', cost:0.35, sell:0.35}, {spec:'2K×2K · 高清', cost:0.5, sell:0.5}], modelId:'doubao-seedream-5-0-260128', tags:'文生图,2K高清,按张计费' },
  M018: { name:'Seedream 5.0 Pro', type:'image', imageTiers:[{spec:'单图生成 · ≤261万像素', cost:0.3, sell:0.3}, {spec:'单图生成 · >261万像素', cost:0.6, sell:0.6}, {spec:'图层拆分 · ≤261万像素', cost:0.15, sell:0.15}, {spec:'图层拆分 · >261万像素', cost:0.3, sell:0.3}], modelId:'doubao-seedream-5-0-pro-260628', tags:'文生图,4K超清,按规格计费' },
  M019: { name:'HY-Image 3.0', type:'image', imageTiers:[{spec:'标准 · 1024px', cost:0.3, sell:0.3}, {spec:'高清 · 1536px', cost:0.55, sell:0.55}, {spec:'2K · 2048px', cost:0.8, sell:0.8}], modelId:'hy-image-v3.0', tags:'文生图,艺术风格,按张计费' },
  M020: { name:'Qwen-Image 3.0 Pro', type:'image', imageTiers:[{spec:'标准 · 1328px', cost:0.35, sell:0.35}, {spec:'高清 · 1664px', cost:0.6, sell:0.6}, {spec:'2K 高清 · 2560px', cost:0.95, sell:0.95}], modelId:'qwen-image-3.0-pro', tags:'文生图,中英双语,按张计费' },
  M021: { name:'Seedance 2.0 mini', type:'video', videoToken:true, videoTiers:[{spec:'含视频输入（/M tokens）', cost:5.6, sell:5.6}, {spec:'不含视频输入（/M tokens）', cost:9.2, sell:9.2}], modelId:'doubao-seedance-2-0-mini-260615', tags:'文生视频,720p,按 Token 计费', contextWindow:'256K', maxInputTokens:'256K', maxOutputTokens:'64K', maxTPM:'600000', maxRPM:'600', inputType:'文本/图片/视频/音频', outputType:'视频' },
  M022: { name:'Seedance 2.0 fast', type:'video', videoTiers:[{spec:'480p · 5秒', cost:2, sell:2}, {spec:'720p · 5秒', cost:4, sell:4}, {spec:'1080p · 5秒', cost:8, sell:8}, {spec:'1080p · 10秒', cost:16, sell:16}], modelId:'doubao-seedance-2-0-fast-260128', tags:'文生视频,1080p,按条计费' },
  M023: { name:'Seedance 2.0', type:'video', videoToken:true, videoTiers:[{spec:'含视频输入（/M tokens）', cost:28, sell:28}, {spec:'不含视频输入（/M tokens）', cost:46, sell:46}], modelId:'doubao-seedance-2-0-260128', tags:'文生视频,4K,旗舰,按 Token 计费', contextWindow:'256K', maxInputTokens:'256K', maxOutputTokens:'64K', maxTPM:'1000000', maxRPM:'600', inputType:'文本/图片/视频/音频', outputType:'视频' },
  M024: { name:'HappyHorse 1.1', type:'video', videoTiers:[{spec:'480p · 5秒', cost:1.5, sell:1.5}, {spec:'720p · 5秒', cost:3, sell:3}, {spec:'720p · 10秒', cost:6, sell:6}], modelId:'happyhorse-1.1-t2v', tags:'文生视频,动画,按条计费' },
  M025: { name:'Wan 3.0 Video', type:'video', videoTiers:[{spec:'480p · 5秒', cost:2.5, sell:2.5}, {spec:'720p · 5秒', cost:5, sell:5}, {spec:'1080p · 5秒', cost:10, sell:10}, {spec:'1080p · 10秒', cost:20, sell:20}], modelId:'wan3.0-video', tags:'文生视频,1080p,按条计费' },
  M026: { name:'DeepSeek-V4-Flash 0731', type:'text', period_enabled:true, is:'1.5', is_peak:'3', os:'4.5', os_peak:'9', cs:'0.05', cs_peak:'0.1', modelId:'deepseek-v4-flash-0731', tags:'1024K,文本生成,高峰分时,中文优化', contextWindow:'1024K', maxInputTokens:'1024K', maxOutputTokens:'384K', maxTPM:'1000000', maxRPM:'60', inputType:'文本', outputType:'文本', specs:[{name:'知识截止', value:'2026-06'},{name:'流式输出', value:'支持'},{name:'并发友好', value:'高吞吐'}] },
  M027: { name:'DeepSeek-V4-Pro 0813', type:'text', period_enabled:true, is:'4.5', is_peak:'9', os:'13.5', os_peak:'27', cs:'0.15', cs_peak:'0.3', modelId:'deepseek-v4-pro-0813', tags:'1024K,推理,高峰分时,中文优化,增强', contextWindow:'1024K', maxInputTokens:'1024K', maxOutputTokens:'384K', maxTPM:'1000000', maxRPM:'60', inputType:'文本', outputType:'文本' },
  M028: { name:'MiniMax-Video-H3', type:'video', videoTiers:[{spec:'768P · 输入¥0.5/秒 + 输出¥0.5/秒（参考生视频：前5张输入图片免费，第6张起¥0.2/张）', cost:0.5, sell:0.5}, {spec:'2K · 输入¥0.8/秒 + 输出¥0.8/秒（参考生视频：前5张输入图片免费，第6张起¥0.2/张）', cost:0.8, sell:0.8}], modelId:'minimax-video-h3', tags:'文生视频,图生视频,按规格计费' }
};

/* 分润组 + 模型归属映射 */
var PROFIT_GROUPS = [
  { id:'G001', name:'默认分润组', l1:5, l2:4, l3:3, bonus:[0,1,2,3,4], multiplier:1.0, status:'enabled' },
  { id:'G002', name:'豆包即梦组', l1:20, l2:8, l3:5, bonus:[0,2,4,6,8], multiplier:1.0, status:'enabled' }
];
var MODEL_GROUP_MAP = {
  'M001':'G001',
  'M002':'G001',
  'M003':'G001',
  'M004':'G001',
  'M005':'G001',
  'M006':'G001',
  'M007':'G001',
  'M008':'G001',
  'M009':'G001',
  'M010':'G001',
  'M011':'G001',
  'M012':'G001',
  'M013':'G001',
  'M014':'G001',
  'M015':'G001',
  'M016':'G001',
  'M017':'G001',
  'M018':'G001',
  'M019':'G001',
  'M020':'G001',
  'M021':'G001',
  'M022':'G001',
  'M023':'G001',
  'M024':'G001',
  'M025':'G001',
  'M026':'G001',
  'M027':'G001',
  'M028':'G001'
};

/* 角标样式库（与伙伴平台 model-market BADGE_STYLES 一致） */
// 角标样式库（与伙伴平台 model-market BADGE_STYLES 完全一致：类型决定图标与渐变配色）
var BADGE_STYLES = {
  promo: {
    grad: 'linear-gradient(135deg,#fb923c,#ef4444)',
    shadow: '0 2px 6px rgba(239,68,68,.30)',
    icon: '<svg width="8" height="11" viewBox="0 0 8 10" fill="#fff"><path d="M4 0C4 2.1 6.1 2.6 6.1 5c0 1-.6 1.8-1.4 2.2.4-1.3-.8-1.5-1.4-2.7C2.9 5.5 3.5 6.6 4.5 7.2 2.7 7 1 5.4 1 3.2 1 1.4 2.4 0 4 0z"/></svg>'
  },
  new: {
    grad: 'linear-gradient(135deg,#34d399,#0d9488)',
    shadow: '0 2px 6px rgba(13,148,136,.28)',
    icon: '<svg width="9" height="11" viewBox="0 0 9 11" fill="#fff"><path d="M5.8 0L1.2 6.2h2.9L2.9 11 8.4 4.6H5.4L5.8 0z"/></svg>'
  },
  quality: {
    grad: 'linear-gradient(135deg,#a855f7,#6366f1)',
    shadow: '0 2px 6px rgba(99,102,241,.30)',
    icon: '<svg width="11" height="10" viewBox="0 0 11 10" fill="#fff"><path d="M5.5 0L6.9 2.9 10 3.4 7.8 5.6 8.3 8.7 5.5 7.3 2.7 8.7 3.2 5.6 1 3.4 4.1 2.9 5.5 0z"/></svg>'
  }
};
function badgeStyle(type) {
  return BADGE_STYLES[type] || BADGE_STYLES.promo;
}

function getGroupName(gid){ for(var i=0;i<PROFIT_GROUPS.length;i++){ if(PROFIT_GROUPS[i].id===gid) return PROFIT_GROUPS[i].name; } return '—'; }

/* 默认高峰时段 */
// === 多段时间段（默认 2 段：9-12、14-18）===
function defaultPPRanges() {
  return [
    { start: '09:00', end: '12:00' },
    { start: '14:00', end: '18:00' }
  ];
}

/* 价格数值解析：兼容 ¥ 前缀与空值 */
function parsePriceVal(v) {
  var x = parseFloat(String(v === undefined || v === null ? '' : v).replace(/[¥,\s]/g, ''));
  return isNaN(x) ? null : x;
}
/* 供应商加权平均成本 */
function weightedAvgCost(vendors, key) {
  if (!vendors || !vendors.length) return null;
  var tw = 0, ts = 0;
  vendors.forEach(function(v){
    var w = parseFloat(v.weight) || 0;
    var c = parsePriceVal(v[key]);
    if (c === null) return;
    tw += w; ts += c * w;
  });
  return tw > 0 ? (ts / tw) : null;
}

/* ------------------------------------------------------------
 * 原型态持久化：模型价格页保存后写入 sessionStorage，
 * 返回列表页时合并回内存，保证跳转前后数据状态一致
 * ------------------------------------------------------------ */
var MP_STORE_KEY = 'tokenhub_model_price_store_v1';
function mpLoadStore() {
  try { var raw = sessionStorage.getItem(MP_STORE_KEY); return raw ? JSON.parse(raw) : null; }
  catch (e) { return null; }
}
function mpSaveStore(obj) {
  try { sessionStorage.setItem(MP_STORE_KEY, JSON.stringify(obj)); } catch (e) {}
}
function mpClearStore() { try { sessionStorage.removeItem(MP_STORE_KEY); } catch (e) {} }
function mpMerge(dst, src) {
  if (!src) return;
  Object.keys(src).forEach(function(k){
    if (dst[k] && typeof dst[k] === 'object' && !Array.isArray(dst[k]) && typeof src[k] === 'object' && !Array.isArray(src[k])) {
      dst[k] = Object.assign({}, dst[k], src[k]);
    } else { dst[k] = src[k]; }
  });
}
function mpApplyStore() {
  var st = mpLoadStore();
  if (!st) return;
  mpMerge(MODEL_DB, st.MODEL_DB);
  mpMerge(PP_VENDOR_DB, st.PP_VENDOR_DB);
  mpMerge(MODEL_GROUP_MAP, st.MODEL_GROUP_MAP);
}
mpApplyStore();
