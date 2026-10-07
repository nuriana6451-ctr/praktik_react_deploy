/*
  Pemandangan di luar jendela: langit, bintang, matahari, awan, bukit, dan pohon.
  Semua perubahan malam -> pagi diatur lewat CSS (class "wd-open" di induk).
*/
export default function WindowScene() {
  return (
    <div className="wd-sky">
      <div className="wd-stars" />
      <div className="wd-sun" />
      <div className="wd-cloud" style={{ top: 60, width: 90 }} />
      <div className="wd-cloud" style={{ top: 300, width: 64, animationDelay: "-14s" }} />
      <div className="wd-hill b" />
      <div className="wd-hill" />
      <div className="wd-tree" style={{ left: "12%" }} />
      <div className="wd-tree" style={{ left: "20%", height: 42, bottom: 50 }} />
      <div className="wd-tree" style={{ right: "14%" }} />
    </div>
  );
}