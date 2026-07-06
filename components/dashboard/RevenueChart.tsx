export default function RevenueChart() {
  return (
    <div className="rounded-[24px] border border-black/5 bg-gradient-to-br from-neutral-50 to-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-lg font-semibold">Revenue Trend</h4>
        <span className="text-sm text-emerald-600">+18.4%</span>
      </div>
      <div className="flex h-56 items-end gap-3">
        {[42,58,37,71,64,86,78,96].map((v,i)=>(
          <div key={i} className="flex-1 rounded-t-xl bg-black/90" style={{height:`${v}%`}} />
        ))}
      </div>
    </div>
  );
}
