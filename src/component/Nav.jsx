export default function Nav({ setHandleModal, setShowSidebar }) {
  function showModal() {
    setHandleModal(true);
  }
  function openSidebar() {
    setShowSidebar(true);
  }
  return (
    <>
      <nav className="flex justify-between bg-violet-300">
        <button onClick={openSidebar} className="text-2xl md:hidden">
          ☰
        </button>
        <h1 className="font-semibold text-2xl">ToDo</h1>
        <button className="text-2xl" onClick={showModal}>
          ➕
        </button>
      </nav>
    </>
  );
}
