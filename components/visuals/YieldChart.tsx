"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';

const data = [
  {
    name: 'Legacy Waterfall',
    Revenue: 1.20,
    fill: 'hsl(220,15%,80%)',
  },
  {
    name: 'Unified Auction',
    Revenue: 3.50,
    fill: 'hsl(258,85%,62%)',
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border p-3 rounded-lg shadow-xl">
        <p className="text-foreground font-mono text-xs uppercase tracking-widest mb-1">{label}</p>
        <p className="text-brand-primary font-bold text-lg">
          ${payload[0].value.toFixed(2)} eCPM
        </p>
      </div>
    );
  }
  return null;
};

export function YieldChart() {
  return (
    <div className="w-full h-[400px] border border-gray-200 rounded-2xl bg-white p-6 flex flex-col shadow-sm">
      <div className="mb-6">
        <h3 className="text-sm font-mono tracking-widest text-muted-foreground uppercase">Revenue Comparison</h3>
        <p className="text-2xl font-bold mt-1 text-foreground">
          +191% <span style={{ color: "hsl(258,85%,62%)" }}>eCPM Uplift</span>
        </p>
      </div>
      
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            barSize={60}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'var(--muted-foreground)', fontSize: 12, fontFamily: 'monospace' }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'var(--muted-foreground)', fontSize: 12, fontFamily: 'monospace' }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip />} />
            <Bar dataKey="Revenue" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
