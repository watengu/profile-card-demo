// 共通処理（カードサイト用）：簡易クリック計測（端末内 localStorage）／いいね・お気に入り／画像フォールバック／ダッシュボード連動
// ※カードサイトは公開プロフィールのため年齢ゲートは付けない

// ---------- ユーティリティ ----------
function relTime(min) {
  if (min < 60) return min + "分前";
  if (min < 1440) return Math.floor(min / 60) + "時間前";
  return Math.floor(min / 1440) + "日前";
}
function starText(n) {
  var s = "";
  for (var i = 0; i < 5; i++) s += i < n ? "⭐" : "☆";
  return s;
}
function getStore(key, def) {
  try {
    var v = localStorage.getItem(key);
    return v === null ? def : JSON.parse(v);
  } catch (e) {
    return def;
  }
}
function setStore(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
}
// 外部リンクのクリック計測（中継URL方式の原型：端末内でカウント）
function countClick(personId, type) {
  var key = "clicks_" + personId + "_" + type;
  var n = getStore(key, 0) + 1;
  setStore(key, n);
  return n;
}
function toast(msg) {
  var t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(function () { t.classList.add("show"); }, 10);
  setTimeout(function () {
    t.classList.remove("show");
    setTimeout(function () { t.remove(); }, 300);
  }, 2200);
}

// ---------- 画像フォールバック（イニシャル＋色プレースホルダ） ----------
var PH_COLORS = {1: "#c96f4a", 2: "#7a9e7e", 3: "#5b7fa6", 4: "#a65b8f", 5: "#8f6a3d", 6: "#4a7a8c", 7: "#b0526b"};
function phColor(id) { return PH_COLORS[id] || "#999"; }
function imgFallback(img) {
  if (!img || img.dataset.fbDone) return;
  img.dataset.fbDone = "1";
  var span = document.createElement("span");
  span.className = "img-fallback";
  span.style.background = img.getAttribute("data-color") || "#999";
  span.textContent = (img.getAttribute("data-name") || img.alt || "？").charAt(0);
  img.replaceWith(span);
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) imgFallback(img);
  });
});
// ---------- ダッシュボード連動の状態（端末内保存） ----------
function getCardState(id) { return getStore("cardstate_" + id, null); }
