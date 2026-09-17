// Tiny locale helper for the standalone game. Chinese remains the source locale;
// any non-Chinese browser language gets the full English UI.
const ZH = {
  appTitle: '涂鸦街区',
  appSubtitle: '一款涂鸦风生存射击游戏',
  startSolo: '开始游戏',
  startSoloHint: '单人 · 抵御一波波敌人',
  online: '在线对战',
  onlineHint: '自由混战 · 最多 10 名玩家',
  bestScore: '最高分：{0}',
  score: '分数',
  youPts: '你 (+{0})',
  wave: '波次',
  enemiesLeft: '个敌人待消灭',
  health: '生命',
  reloading: ' 换弹中…',
  combo: '连击 x',
  clickLock: '点击画面以锁定鼠标',
  musicOn: '音乐已开启',
  musicOff: '音乐已关闭',
  perfectParry: '完美招架',
  parry: '格挡成功',
  blockMelee: '格挡成功',
  fellOffPaper: '掉出纸面',
  redrawn: '已在起点重新绘制',
  outOfBreath: '喘不过气了 · 落地恢复体力',
  grappleCooldown: '抓钩需要缓口气',
  yanked: '拽翻',
  deflectedBack: '被弹回',
  deflectedAway: '被弹开',
  parried: '被格挡',
  ropeCut: '绳索切断',
  pinata: '皮纳塔',
  ammoPickup: '+弹药 · +手雷',
  healthPickup: '+35 生命',
  tacoPickup: '塔可 · +35 生命',
  modifierCaffeine: '咖啡因 · 移动更快',
  modifierHeavy: '重墨 · 打人更疼',
  modifierSwarm: '蜂群 · 数量更多、个体更脆',
  tip1: '按住 <b>{0}</b> 收绳 · 摆动途中再按一次即可松手',
  tip2: '用 <b>{0}</b> 格挡，部分子弹会反弹回去',
  tip3: '空中击杀得分更高 · 尽量别落地',
  tip4: '<b>{0}</b> 掷出手雷 · 拾取物可补充手雷',
  tip5: '在空中再按一次 <b>{0}</b> 可二段跳',
  bossDoodler: '涂鸦魔王',
  bossEraser: '橡皮魔王',
  bossInkblot: '墨渍魔王',
  waveStarted: '第 {0} 波',
  waveIntro: '它们正从纸面外爬进来',
  waveQuip0: '画得更用力些',
  waveQuip1: '继续涂涂画画',
  waveQuip2: '别待在地面上',
  waveQuip3: '挥刀上吧',
  waveQuip4: '把子弹弹回去',
  bossApproaching: '{0} 正在逼近',
  checkpoint: '检查点 · 第 {0} 波',
  nextWave: '下一波还有 {0} 秒',
  waveCleared: '第 {0} 波已清除',
  catchBreath: '喘口气 · +{0}',
  headshot: '爆头',
  slicedApart: '一刀两断',
  slashed: '斩落',
  executed: '处决',
  returned: '原路奉还',
  fellOut: '坠出纸面',
  airKill: ' · 空中击杀',
  focusReady: '<b>斩击就绪</b> · 按住 {0} 冲刺',
  dashBlocked: '被挡下 · 冲刺没能命中',
  respawnShield: '重生保护 · 2 秒',
  shieldBroken: '护盾击碎',
  rifle: '步枪',
  shotgun: '霰弹枪',
  sniper: '狙击枪',
  katana: '太刀',
  rifleHint: '全自动 · 让红点对准他们',
  shotgunHint: '泵动 · 近距离威力惊人',
  sniperHint: '栓动狙击 · 一枪一个擦除',
  katanaHint: '挥砍 · 按住瞄准格挡并反弹子弹',
  revolver: '左轮手枪',
  revolverHint: '手炮 · 爆头即擦除',
  grunt: '小兵',
  rusher: '冲锋怪',
  heavy: '重装怪',
  sniperEnemy: '狙击怪',
  shield: '盾牌怪',
  bomber: '墨水炸弹',
  flyer: '纸黄蜂',
  howRifle: '步枪',
  howShotgun: '霰弹枪',
  howSniper: '狙击枪',
  howKatana: '太刀',
  howGrenade: '手雷',
  howDeflect: '自己的子弹',
  erasedBy: '被 {0} 抹除{1}',
  erased: '被抹除',
  playerJoin: '{0} 加入了',
  playerLeave: '{0} 离开了',
  playerDisconnect: '{0} 连接中断',
  hostLeft: '房主离开了大厅',
  promotedHost: '现在由你担任房主',
  migratingHost: '正在迁往新房主…',
  hostFailed: '无法接管大厅',
  lobbyRestored: '大厅代码 {0} 已恢复',
  matchLost: '房主离开，对局已丢失',
  kicked: '被移出',
  stillThere: '还在吗？',
  idleWarning: '动一动吧，否则会因挂机被移出',
  lobbyClosedIdle: '大厅已关闭：全员挂机',
  idleKicked: '因挂机被移出',
  idleKickReason: '因挂机被移出',
  scoreboardHint: '按住 <b>{0}</b> 查看计分板',
  timerWaiting: '有玩家加入后开始计时',
  creatingLobby: '正在创建大厅…',
  connecting: '正在连接…',
  noOpenLobby: '暂无开放的大厅 · 正在为你开一个公开大厅…',
  errorGeneric: '出了点问题',
  errorNetLib: '无法加载联机库 · 请检查网络并刷新页面',
  errorSignaling: '无法连接匹配服务器 · 请检查你的网络',
  errorNoLobby: '找不到该代码对应的大厅 · 和朋友核对一下代码',
  errorNoAnswer: '找到了大厅但无法连接 · 你们中可能有人处于阻止直连的网络',
  errorFull: '该大厅已满 · 试试其他代码',
  errorLeaveFirst: '请先离开你当前的大厅',
  sensLabel: '鼠标灵敏度',
  language: '语言',
  langAuto: '自动',
  langEnglish: 'English',
  langChinese: '中文',
  invertLook: '反转垂直视角',
  musicLabel: '音乐',
  checkpoints: '检查点',
  checkpointWave: '第 {0} 波',
  map: '地图',
  mapDistrict: '涂鸦街区',
  mapDistrictBlurb: '街道、屋顶与消防梯',
  mapMexico: '涂鸦墨西哥',
  mapMexicoBlurb: '阳光烘烤的广场 · 皮纳塔、塔可和马里亚奇乐队',
  onlineTitle: '在线对战',
  onlineSubtitle: '自由混战 · 先到 {0} 杀 · 最多 10 名玩家',
  yourName: '你的昵称',
  quickMatch: '快速匹配',
  quickMatchHint: '自动加入开放的公开大厅；没有的话就为你开一个',
  or: '或',
  createLobby: '创建大厅',
  publicLobby: '公开',
  privateLobby: '私密 · 仅好友',
  haveCode: '有大厅代码？',
  codePlaceholder: '代码',
  join: '加入',
  publicLobbies: '公开大厅',
  refresh: '刷新',
  findingLobbies: '正在查找…',
  clickRefresh: '点击「刷新」查找开放的大厅',
  clickQuick: '点击「快速匹配」即可加入大厅',
  sHostLobby: '{0} 的大厅',
  inMatchSuffix: ' · 对战中',
  full: '已满',
  rejoin: '重新加入 {0}',
  back: '返回',
  lobbyTitle: '大厅',
  lobbySubtitle: '自由混战 · 先到 {0} 杀 · {1}/{2} 名玩家',
  code: '代码',
  publicLobbyHint: '该大厅为公开：任何人都可通过快速匹配或输入代码加入',
  privateLobbyHint: '私密大厅：好友在「在线对战 → 加入」中输入此代码',
  you: '你',
  youShort: '你',
  startMatch: '开始对战',
  leave: '离开',
  anyoneStart: '任何人都可以开始 · {0}',
  lateJoinHint: '开局后仍可中途加入',
  playersReady: '{0} 名玩家已就位',
  looking: '正在寻找开放的大厅…',
  foundLobbies: '找到 {0} 个开放大厅…',
  foundCount: '找到 {0} 个…',
  lobbySearchFailed: '查找失败：{0}',
  enterCode: '请输入好友给你的大厅代码',
  requestingHost: '正在请求房主开始…',
  menu: '菜单',
  matchLobby: '自由混战 · 大厅 {0}',
  leaveMatch: '离开对战',
  clickContinue: '点击任意位置（或按 {0}）继续游戏',
  paused: '已暂停',
  pauseStats: '第 {0} 波 · 得分 {1}',
  clickResume: '点击任意位置（或按 {0}）继续',
  matchStart: '对战开始',
  matchStartSub: '自由混战 · 先到 {0} 杀',
  clickToFight: '点击任意位置（或按 {0}）开始作战',
  erasedTitle: '被抹除',
  deathStats: '你撑过了 <b>{0}</b> 波 · <b>{1}</b> 次击杀 · 得分 <b>{2}</b>{3}',
  newRecord: ' · <b>新纪录</b>',
  best: ' · 最高分 {0}',
  redraw: '点击（或按 {0}）再画一次',
  mainMenu: '主菜单',
  freeForAll: '自由混战',
  joinedLate: '你加入了一场进行中的对战',
  matchIntro: '先到 {0} 杀 · {1} 分钟 · 人人都是目标',
  targetKills: '先到 {0} 杀',
  killsDeaths: '{0} 杀 · {1} 死',
  lobbyFooter: '先到 {0} 杀 · 还剩 {1} · 大厅 {2}',
  youWon: '你赢了',
  won: '{0} 获胜',
  backToLobby: '马上返回大厅…',
  respawnCount: '即将回到场上',
  spawnReady: '就绪',
  respawnPrompt: '按 {0} · 任意按键或点击即可重生',
  focusMeterLabel: '太刀',
  grappleMeterLabel: '抓钩',
  focusReadySign: '拔刀就绪',
  reloadKill: '+弹药 · +手雷',
  killFall: '坠出纸面 · 击杀 -1',
  killFallRemote: '{0} 坠出纸面 · -1',
  killTarget: '{0} 抹除了 {1}{2}',
  killFell: '{0} 坠出纸面',
  ropeCutTip: '你的绳索被割断了',
  kickedReason: '{0}',
  connected: '连接中断',
};

const EN = {
  appTitle: 'Doodle District',
  appSubtitle: 'A doodle-style survival shooter',
  startSolo: 'Start Game',
  startSoloHint: 'Solo · survive wave after wave',
  online: 'Play Online',
  onlineHint: 'Free-for-all · up to 10 players',
  bestScore: 'Best score: {0}',
  score: 'Score',
  youPts: 'You (+{0})',
  wave: 'Wave',
  enemiesLeft: 'enemies left',
  health: 'Health',
  reloading: ' Reloading…',
  combo: 'Combo x',
  clickLock: 'Click the screen to lock your mouse',
  musicOn: 'Music on',
  musicOff: 'Music off',
  perfectParry: 'Perfect parry',
  parry: 'Parry',
  blockMelee: 'Blocked',
  fellOffPaper: 'Went off the page',
  redrawn: 'Redrawn at the start',
  outOfBreath: 'Out of breath · land to recover',
  grappleCooldown: 'The grapple needs a moment',
  yanked: 'Yanked',
  deflectedBack: 'Sent it back',
  deflectedAway: 'Deflected',
  parried: 'Parried',
  ropeCut: 'Rope cut',
  pinata: 'Piñata',
  ammoPickup: '+Ammo · +Grenade',
  healthPickup: '+35 Health',
  tacoPickup: 'Taco · +35 Health',
  modifierCaffeine: 'Caffeine · Faster',
  modifierHeavy: 'Heavy Ink · Hits harder',
  modifierSwarm: 'Swarm · More, but fragile',
  tip1: 'Hold <b>{0}</b> to reel in · press it again while swinging to let go',
  tip2: 'Block with <b>{0}</b> to deflect some bullets back',
  tip3: 'Air kills score more · try not to touch down',
  tip4: 'Throw grenades with <b>{0}</b> · pickups restore them',
  tip5: 'Press <b>{0}</b> again in midair for a double jump',
  bossDoodler: 'The Doodler',
  bossEraser: 'The Eraser',
  bossInkblot: 'The Inkblot',
  waveStarted: 'Wave {0}',
  waveIntro: 'They are crawling out of the page',
  waveQuip0: 'Draw harder',
  waveQuip1: 'Keep doodling',
  waveQuip2: 'Stay off the ground',
  waveQuip3: 'Draw your blade',
  waveQuip4: 'Send the bullets back',
  bossApproaching: '{0} is approaching',
  checkpoint: 'Checkpoint · Wave {0}',
  nextWave: 'Next wave in {0}s',
  waveCleared: 'Wave {0} cleared',
  catchBreath: 'Catch your breath · +{0}',
  headshot: 'Headshot',
  slicedApart: 'Cut in two',
  slashed: 'Slash',
  executed: 'Execute',
  returned: 'Sent back',
  fellOut: 'Fell off the page',
  airKill: ' · Air kill',
  focusReady: '<b>Execute ready</b> · hold {0} to dash',
  dashBlocked: 'Blocked · the dash missed',
  respawnShield: 'Respawn shield · 2 seconds',
  shieldBroken: 'Shield shattered',
  rifle: 'Rifle',
  shotgun: 'Shotgun',
  sniper: 'Sniper Rifle',
  katana: 'Katana',
  rifleHint: 'Full-auto · keep the red dot on them',
  shotgunHint: 'Pump-action · devastating up close',
  sniperHint: 'Bolt-action sniper · one shot erases',
  katanaHint: 'Slash · hold aim to block and deflect',
  revolver: 'Revolver',
  revolverHint: 'Hand cannon · erase with a headshot',
  grunt: 'Grunt',
  rusher: 'Rusher',
  heavy: 'Heavy',
  sniperEnemy: 'Sniper',
  shield: 'Shield Bearer',
  bomber: 'Ink Bomb',
  flyer: 'Paper Wasp',
  howRifle: 'Rifle',
  howShotgun: 'Shotgun',
  howSniper: 'Sniper Rifle',
  howKatana: 'Katana',
  howGrenade: 'Grenade',
  howDeflect: 'their own bullet',
  erasedBy: 'Erased by {0}{1}',
  erased: 'Erased',
  playerJoin: '{0} joined',
  playerLeave: '{0} left',
  playerDisconnect: '{0} connection lost',
  hostLeft: 'The host left the lobby',
  promotedHost: 'You are the host now',
  migratingHost: 'Moving to a new host…',
  hostFailed: 'Could not take over the lobby',
  lobbyRestored: 'Lobby code {0} restored',
  matchLost: 'The host left and the match was lost',
  kicked: 'Removed',
  stillThere: 'Still there?',
  idleWarning: 'Move around or you will be removed for being idle',
  lobbyClosedIdle: 'Lobby closed: everyone is idle',
  idleKicked: 'Removed for being idle',
  idleKickReason: 'Removed for inactivity',
  scoreboardHint: 'Hold <b>{0}</b> to see the scoreboard',
  timerWaiting: 'Timer starts when a second player joins',
  creatingLobby: 'Creating lobby…',
  connecting: 'Connecting…',
  noOpenLobby: 'No open lobbies · opening a public one for you…',
  errorGeneric: 'Something went wrong',
  errorNetLib: 'Could not load the networking library · check your connection and refresh',
  errorSignaling: 'Could not reach matchmaking · check your network',
  errorNoLobby: 'No lobby with that code · double-check it with your friend',
  errorNoAnswer: 'Found the lobby but could not connect · one of you may be behind a strict NAT',
  errorFull: 'That lobby is full · try another code',
  errorLeaveFirst: 'Leave your current lobby first',
  sensLabel: 'Mouse sensitivity',
  language: 'Language',
  langAuto: 'Auto',
  langEnglish: 'English',
  langChinese: '中文',
  invertLook: 'Invert vertical look',
  musicLabel: 'Music',
  checkpoints: 'Checkpoints',
  checkpointWave: 'Wave {0}',
  map: 'Map',
  mapDistrict: 'Doodle District',
  mapDistrictBlurb: 'Streets, rooftops and fire escapes',
  mapMexico: 'Doodle Mexico',
  mapMexicoBlurb: 'Sun-baked plaza · piñatas, tacos and mariachis',
  onlineTitle: 'Play Online',
  onlineSubtitle: 'Free-for-all · first to {0} kills · up to 10 players',
  yourName: 'Your name',
  quickMatch: 'Quick Match',
  quickMatchHint: 'Join an open public lobby, or open one for you',
  or: 'or',
  createLobby: 'Create Lobby',
  publicLobby: 'Public',
  privateLobby: 'Private · friends only',
  haveCode: 'Have a lobby code?',
  codePlaceholder: 'Code',
  join: 'Join',
  publicLobbies: 'Public lobbies',
  refresh: 'Refresh',
  findingLobbies: 'Searching…',
  clickRefresh: 'Click Refresh to find open lobbies',
  clickQuick: 'Use Quick Match to join a lobby',
  sHostLobby: "{0}'s lobby",
  inMatchSuffix: ' · in match',
  full: 'Full',
  rejoin: 'Rejoin {0}',
  back: 'Back',
  lobbyTitle: 'Lobby',
  lobbySubtitle: 'Free-for-all · first to {0} kills · {1}/{2} players',
  code: 'Code',
  publicLobbyHint: 'Public lobby: anyone can Quick Match or enter this code',
  privateLobbyHint: 'Private lobby: friends join through Online → Join with this code',
  you: 'You',
  youShort: 'You',
  startMatch: 'Start Match',
  leave: 'Leave',
  anyoneStart: 'Anyone can start · {0}',
  lateJoinHint: 'players can still join after it starts',
  playersReady: '{0} players ready',
  looking: 'Looking for an open lobby…',
  foundLobbies: 'Found {0} open lobbies…',
  foundCount: 'Found {0}…',
  lobbySearchFailed: 'Search failed: {0}',
  enterCode: 'Enter the lobby code from your friend',
  requestingHost: 'Asking the host to start…',
  menu: 'Menu',
  matchLobby: 'Free-for-all · lobby {0}',
  leaveMatch: 'Leave Match',
  clickContinue: 'Click anywhere (or press {0}) to continue',
  paused: 'Paused',
  pauseStats: 'Wave {0} · score {1}',
  clickResume: 'Click anywhere (or press {0}) to resume',
  matchStart: 'Match Start',
  matchStartSub: 'Free-for-all · first to {0} kills',
  clickToFight: 'Click anywhere (or press {0}) to fight',
  erasedTitle: 'Erased',
  deathStats: 'You survived <b>{0}</b> waves · <b>{1}</b> kills · score <b>{2}</b>{3}',
  newRecord: ' · <b>new record</b>',
  best: ' · best {0}',
  redraw: 'Click (or press {0}) to draw again',
  mainMenu: 'Main Menu',
  freeForAll: 'Free-for-all',
  joinedLate: 'You joined a match in progress',
  matchIntro: 'First to {0} kills · {1} minutes · everyone is a target',
  targetKills: 'First to {0} kills',
  killsDeaths: '{0} kills · {1} deaths',
  lobbyFooter: 'First to {0} kills · {1} left · lobby {2}',
  youWon: 'You Win',
  won: '{0} Wins',
  backToLobby: 'Returning to lobby…',
  respawnCount: 'Returning to the fight',
  spawnReady: 'Ready',
  respawnPrompt: 'Press {0} · any key or click to respawn',
  focusMeterLabel: 'Katana',
  grappleMeterLabel: 'Grapple',
  focusReadySign: 'EXECUTE READY',
  reloadKill: '+Ammo · +Grenade',
  killFall: 'Fell off the page · -1 kill',
  killFallRemote: '{0} fell off the page · -1',
  killTarget: '{0} erased {1}{2}',
  killFell: '{0} fell off the page',
  ropeCutTip: 'Your grapple line was cut',
  kickedReason: '{0}',
  connected: 'connection lost',
};

function detectLang() {
  if (typeof location !== 'undefined') {
    const wanted = new URLSearchParams(location.search).get('lang');
    if (wanted === 'zh' || wanted === 'zh-CN' || wanted === 'zh_CN') return 'zh';
    if (wanted === 'en') return 'en';
  }
  if (typeof localStorage !== 'undefined') {
    try {
      const saved = localStorage.getItem('doodle_ui_lang');
      if (saved === 'zh' || saved === 'zh-CN' || saved === 'zh_CN') return 'zh';
      if (saved === 'en') return 'en';
    } catch { /* ignore storage failures */ }
  }
  if (typeof navigator === 'undefined') return 'en';
  const candidates = [navigator.language, ...(navigator.languages || [])];
  for (const raw of candidates) {
    const code = String(raw || '').toLowerCase();
    if (code === 'zh' || code.startsWith('zh-') || code.startsWith('zh_')) return 'zh';
  }
  return 'en';
}

export let lang = detectLang();
export let isZh = lang === 'zh';
export function setLang(next) {
  const wanted = next === 'zh' || next === 'zh-CN' || next === 'zh_CN' ? 'zh' : next === 'en' ? 'en' : 'auto';
  if (wanted === 'zh' || wanted === 'en') lang = wanted;
  else lang = detectLang();
  isZh = lang === 'zh';
}
export function currentLang() {
  return isZh ? 'zh' : 'en';
}
export const t = (key, vars = {}) => {
  const dict = isZh ? ZH : EN;
  let text = dict[key] ?? key;
  if (text.includes('{0}')) text = text.replace('{0}', String(Object.values(vars)[0] ?? '')).replace('{1}', String(Object.values(vars)[1] ?? '')).replace('{2}', String(Object.values(vars)[2] ?? '')).replace('{3}', String(Object.values(vars)[3] ?? ''));
  return text;
};
export const pick = (zhText, enText) => (isZh ? zhText : enText);

const HUD_ZH = `
      <div class="scope" id="scope"><div class="mask"></div><div class="ring"></div><div class="cx"></div><div class="cy"></div><div class="dot"></div></div>
      <div class="focus-meter" id="focusmeter"><div class="fm-label">太刀</div><div class="fm-tube"><div class="fm-fill" id="fmfill"></div><i class="fm-f1"></i><i class="fm-f2"></i><i class="fm-f3"></i></div><div class="fm-ready" id="fmready">拔刀就绪</div></div>
      <div class="focus-mark" id="focusmark"><i></i><i></i><i></i><i></i></div>
      <div class="crosshair" id="crosshair"><i class="ch-t"></i><i class="ch-b"></i><i class="ch-l"></i><i class="ch-r"></i><i class="ch-dot"></i></div>
      <div class="grapple-ret" id="gret"></div><div class="gstam" id="gstam" hidden><i id="gstamfill"></i></div>
      <div class="hitmarker" id="hitmarker"><i></i><i></i></div>
      <div class="dmg-ind" id="dmg"></div>
      <div class="hud-tl"><div class="score">分数 <b id="score">0</b></div><div class="combo" id="combo"></div></div>
      <div class="hud-tr"><div class="wave">波次 <b id="wave">1</b></div><div class="modifier" id="modifier"></div><div class="left"><b id="left">0</b> 个敌人待消灭</div><div class="timer" id="timer"></div><div class="pvpscore" id="pvpscore" hidden></div></div><div class="board" id="board" hidden></div>
      <div class="bossbar" id="bossbar"><div class="bossname" id="bossname"></div><div class="bar big"><div class="fill red" id="bossfill"></div></div></div>
      <div class="hud-bl">
        <div class="health"><span>生命</span><div class="bar"><div class="fill" id="hpfill"></div></div><span id="hpnum">100</span></div>
        <div class="ammo"><b id="mag">30</b><span id="reserve">/120</span><span class="reloading" id="reloading"></span><span class="nades" id="nades" title="手雷"></span></div>
        <div class="tally" id="tally"></div>
      </div>
      <div class="hud-br"><div class="slots" id="slots"></div><div class="weapon" id="weapon">步枪</div><div class="hint" id="hint"></div></div>
      <div class="tip" id="tip"></div>
      <div class="message"><div class="msg-main" id="msg"></div><div class="msg-sub" id="msgsub"></div></div>
      <div class="killfeed" id="killfeed"></div>
      <div class="screen" id="screen"><div class="panel" id="panel"></div></div>`;

const HUD_EN = `
      <div class="scope" id="scope"><div class="mask"></div><div class="ring"></div><div class="cx"></div><div class="cy"></div><div class="dot"></div></div>
      <div class="focus-meter" id="focusmeter"><div class="fm-label">Katana</div><div class="fm-tube"><div class="fm-fill" id="fmfill"></div><i class="fm-f1"></i><i class="fm-f2"></i><i class="fm-f3"></i></div><div class="fm-ready" id="fmready">EXECUTE READY</div></div>
      <div class="focus-mark" id="focusmark"><i></i><i></i><i></i><i></i></div>
      <div class="crosshair" id="crosshair"><i class="ch-t"></i><i class="ch-b"></i><i class="ch-l"></i><i class="ch-r"></i><i class="ch-dot"></i></div>
      <div class="grapple-ret" id="gret"></div><div class="gstam" id="gstam" hidden><i id="gstamfill"></i></div>
      <div class="hitmarker" id="hitmarker"><i></i><i></i></div>
      <div class="dmg-ind" id="dmg"></div>
      <div class="hud-tl"><div class="score">Score <b id="score">0</b></div><div class="combo" id="combo"></div></div>
      <div class="hud-tr"><div class="wave">Wave <b id="wave">1</b></div><div class="modifier" id="modifier"></div><div class="left"><b id="left">0</b>enemies left</div><div class="timer" id="timer"></div><div class="pvpscore" id="pvpscore" hidden></div></div><div class="board" id="board" hidden></div>
      <div class="bossbar" id="bossbar"><div class="bossname" id="bossname"></div><div class="bar big"><div class="fill red" id="bossfill"></div></div></div>
      <div class="hud-bl">
        <div class="health"><span>Health</span><div class="bar"><div class="fill" id="hpfill"></div></div><span id="hpnum">100</span></div>
        <div class="ammo"><b id="mag">30</b><span id="reserve">/120</span><span class="reloading" id="reloading"></span><span class="nades" id="nades" title="Grenades"></span></div>
        <div class="tally" id="tally"></div>
      </div>
      <div class="hud-br"><div class="slots" id="slots"></div><div class="weapon" id="weapon">Rifle</div><div class="hint" id="hint"></div></div>
      <div class="tip" id="tip"></div>
      <div class="message"><div class="msg-main" id="msg"></div><div class="msg-sub" id="msgsub"></div></div>
      <div class="killfeed" id="killfeed"></div>
      <div class="screen" id="screen"><div class="panel" id="panel"></div></div>`;

export function hudHTML() { return isZh ? HUD_ZH : HUD_EN; }

const CONTROLS_ZH = `
<div class="cols">
  <div><div class="colhead">鼠标 + 键盘</div>
    <div><b>WASD</b> 移动 &nbsp; <b>鼠标</b> 视角 &nbsp; <b>Shift</b> 疾跑</div>
    <div><b>LMB</b> 开火 / 挥砍 &nbsp; <b>RMB</b> 开镜瞄准 / 格挡</div>
    <div><b>Space</b> 跳跃（在墙上再按 = 蹬墙跳）</div>
    <div>空中再按 <b>Space</b> = 二段跳</div>
    <div><b>C / Ctrl</b> 地面滑铲 · 空中冲刺</div>
    <div><b>Q / E</b> 抓钩：点按摆荡，长按收绳，跳跃起飞</div>
    <div><b>F</b> 太刀快速挥砍 &nbsp; <b>R</b> 换弹 &nbsp; <b>M</b> 音乐</div>
    <div><b>G</b> 手雷 · 按住可扔得更远</div>
    <div><b>Tab</b> 计分板（联机） &nbsp; <b>Esc</b> 暂停</div>
    <div><b>左右键同按</b> 能量满后施展冲刺斩</div>
    <div><b>1-4 / 滚轮</b> 步枪 · 霰弹枪 · 狙击枪 · 太刀</div>
  </div>
  <div><div class="colhead">PS5 手柄</div>
    <div><b>左摇杆</b> 移动 &nbsp; <b>右摇杆</b> 视角 &nbsp; <b>L3</b> 疾跑</div>
    <div><b>R2</b> 开火 / 挥砍 &nbsp; <b>L2</b> 瞄准 / 格挡</div>
    <div><b>✕</b> 跳跃 &nbsp; <b>○</b> 滑铲 · 空中冲刺</div>
    <div><b>L1</b> 抓钩（长按收绳，✕ 起飞）</div>
    <div><b>L2 + R2</b> 太刀能量满后施展冲刺斩</div>
    <div><b>R1</b> 太刀快速挥砍，随后自动切回枪械</div>
    <div><b>□</b> 换弹 &nbsp; <b>△</b> 下一把武器</div>
    <div><b>R3 / 十字键上</b> 手雷 · 按住可扔得更远</div>
    <div><b>Create</b> 计分板（联机） &nbsp; <b>Options</b> 暂停</div>
  </div>
</div>`;

const CONTROLS_EN = `
<div class="cols">
  <div><div class="colhead">Mouse + Keyboard</div>
    <div><b>WASD</b> Move &nbsp; <b>Mouse</b> Look &nbsp; <b>Shift</b> Sprint</div>
    <div><b>LMB</b> Fire / Slash &nbsp; <b>RMB</b> Aim / Block</div>
    <div><b>Space</b> Jump (press against a wall again = wall jump)</div>
    <div>Press <b>Space</b> again in midair = double jump</div>
    <div><b>C / Ctrl</b> Slide on ground · dash in air</div>
    <div><b>Q / E</b> Grapple: tap to swing, hold to reel, jump to launch</div>
    <div><b>F</b> Quick katana slash &nbsp; <b>R</b> Reload &nbsp; <b>M</b> Music</div>
    <div><b>G</b> Grenade · hold for a longer throw</div>
    <div><b>Tab</b> Scoreboard (online) &nbsp; <b>Esc</b> Pause</div>
    <div><b>LMB + RMB</b> Focus execution when charged</div>
    <div><b>1-4 / Wheel</b> Rifle · Shotgun · Sniper · Katana</div>
  </div>
  <div><div class="colhead">PS5 Controller</div>
    <div><b>L stick</b> Move &nbsp; <b>R stick</b> Look &nbsp; <b>L3</b> Sprint</div>
    <div><b>R2</b> Fire / Slash &nbsp; <b>L2</b> Aim / Block</div>
    <div><b>✕</b> Jump &nbsp; <b>○</b> Slide · air dash</div>
    <div><b>L1</b> Grapple (hold to reel, ✕ to launch)</div>
    <div><b>L2 + R2</b> Katana focus execution when charged</div>
    <div><b>R1</b> Quick katana slash, then switch back</div>
    <div><b>□</b> Reload &nbsp; <b>△</b> Next weapon</div>
    <div><b>R3 / D-pad up</b> Grenade · hold for a longer throw</div>
    <div><b>Create</b> Scoreboard (online) &nbsp; <b>Options</b> Pause</div>
  </div>
</div>`;

export function controlsHTML() { return isZh ? CONTROLS_ZH : CONTROLS_EN; }

// Export the tables for lightweight testing and tooling only.
export { ZH, EN };
export const _dict = { ZH, EN };
