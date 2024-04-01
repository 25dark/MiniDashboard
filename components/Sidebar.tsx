const SideBar = () => {
  return (
    <div className="flex flex-col w-[300px] min-w-[300px] border-r bg-slate-400 min-h-screen">
      <div>User Part</div>
      <div className="grow">Menu</div>
      <div>Settings / Notifications</div>
    </div>
  );
};

export default SideBar;
