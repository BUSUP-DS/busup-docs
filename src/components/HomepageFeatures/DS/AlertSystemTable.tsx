import React, { useState } from 'react';

// ─── Figma tokens (node 252:10714 — NEW-LIBRARY) ──────────────────────────────
// Header cell:  14px Bold #000000, padding 10px, height 41px
// Data badge:   12px Regular, padding 10px 8px, height 38px, border-radius 8px
// Direction arrow: inside Route name badge, right-aligned
// Row gap:      8px horizontal between cells, 8px vertical between rows
// Column widths: Local time 100 | Service time 112 | Route name 330 |
//                Site name 233 | Provider 190 | Priority 104 |
//                Agent 100 | Pending 100 | Closed 100 | Actions 64

// ─── Status config ────────────────────────────────────────────────────────────

export type ServiceStatus =
  | 'pending_creation'
  | 'pending_provider'
  | 'pending_assignment'
  | 'in_progress_issues'
  | 'pending_unsolved'
  | 'planned'
  | 'in_progress'
  | 'completed'
  | 'canceled'
  | 'finished_issues';

const STATUS: Record<ServiceStatus, { label: string; color: string; textColor: string }> = {
  pending_creation:   { label: 'Pending service creation',   color: '#ffffff',  textColor: '#212121' },
  pending_provider:   { label: 'Pending send to provider',   color: '#FFEB3B',  textColor: '#212121' },
  pending_assignment: { label: 'Pending assignment',          color: '#FF9800',  textColor: '#212121' },
  in_progress_issues: { label: 'In progress with issues',    color: '#E53935',  textColor: '#ffffff' },
  pending_unsolved:   { label: 'Pending unsolved issues',    color: '#EF9A9A',  textColor: '#212121' },
  planned:            { label: 'Planned',                    color: '#42A5F5',  textColor: '#ffffff' },
  in_progress:        { label: 'In progress',                color: '#00BF6F',  textColor: '#000000' },
  completed:          { label: 'Completed',                  color: '#BDBDBD',  textColor: '#212121' },
  canceled:           { label: 'Canceled',                   color: '#9C27B0',  textColor: '#ffffff' },
  finished_issues:    { label: 'Finished with issues',       color: '#212121',  textColor: '#ffffff' },
};

// ─── Column definitions ───────────────────────────────────────────────────────

const COLUMNS = [
  { key: 'localTime',    label: 'Local time',    width: 100 },
  { key: 'serviceTime',  label: 'Service time',  width: 112 },
  { key: 'routeName',    label: 'Route name',    width: 330 },
  { key: 'siteName',     label: 'Site name',     width: 233 },
  { key: 'provider',     label: 'Provider',      width: 190 },
  { key: 'priority',     label: 'Priority',      width: 104 },
  { key: 'agent',        label: 'Agent',         width: 100 },
  { key: 'pending',      label: 'Pending',       width: 100 },
  { key: 'closed',       label: 'Closed',        width: 100 },
];

// ─── Row data type ────────────────────────────────────────────────────────────

export type AlertRowData = {
  id: string;
  status: ServiceStatus;
  direction?: 'inbound' | 'outbound';
  localTime: string;
  serviceTime: string;
  routeName: string;
  siteName: string;
  provider: string;
  priority: string;
  agent: string;
  pending: string;
  closed: string;
};

// ─── Direction arrow ──────────────────────────────────────────────────────────

const ArrowIcon = ({ direction, color }: { direction: 'inbound' | 'outbound'; color: string }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
    {direction === 'outbound' ? (
      <path d="M10 7H4M4 7L6.5 4.5M4 7L6.5 9.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    ) : (
      <path d="M4 7H10M10 7L7.5 4.5M10 7L7.5 9.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    )}
  </svg>
);

// ─── Table Header ─────────────────────────────────────────────────────────────

export const AlertTableHeader = () => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
    {COLUMNS.map(col => (
      <div
        key={col.key}
        style={{
          width: col.width,
          flexShrink: 0,
          padding: '10px',
          fontSize: 14,
          fontWeight: 700,
          color: '#000000',
          lineHeight: '1.5',
          fontFamily: '"Busup Sans", sans-serif',
          boxSizing: 'border-box',
        }}
      >
        {col.label}
      </div>
    ))}
    <div style={{ width: 64, flexShrink: 0 }} />
  </div>
);

// ─── Alert Row ────────────────────────────────────────────────────────────────

type AlertRowProps = {
  row: AlertRowData;
  onClick?: (row: AlertRowData) => void;
  selected?: boolean;
};

export const AlertRow = ({ row, onClick, selected }: AlertRowProps) => {
  const { color, textColor } = STATUS[row.status];
  const isPendingCreation = row.status === 'pending_creation';

  return (
    <div
      onClick={() => onClick?.(row)}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        cursor: onClick ? 'pointer' : 'default',
        outline: selected ? '2px solid #00BF6F' : 'none',
        outlineOffset: 1,
        borderRadius: 8,
      }}
    >
      {COLUMNS.map(col => {
        const isRoute = col.key === 'routeName';
        return (
          <div
            key={col.key}
            style={{
              width: col.width,
              flexShrink: 0,
              height: 38,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 8px',
              background: color,
              borderRadius: 8,
              boxSizing: 'border-box',
              border: isPendingCreation ? '1px solid #c4c4c4' : 'none',
              boxShadow: '0px 2px 8px rgba(0,0,0,0.08)',
              gap: 4,
            }}
          >
            <span style={{
              fontSize: 12,
              fontWeight: 400,
              color: textColor,
              lineHeight: '1.5',
              fontFamily: '"Busup Sans", sans-serif',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              flex: 1,
            }}>
              {row[col.key as keyof AlertRowData] as string}
            </span>
            {isRoute && row.direction && (
              <ArrowIcon direction={row.direction} color={textColor} />
            )}
          </div>
        );
      })}

      {/* Action icons */}
      <div style={{ width: 64, flexShrink: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ cursor: 'pointer', flexShrink: 0 }}>
          <path d="M10 4C5.5 4 2 10 2 10s3.5 6 8 6 8-6 8-6-3.5-6-8-6z" stroke="#414141" strokeWidth="1.4" fill="none"/>
          <circle cx="10" cy="10" r="2.5" stroke="#414141" strokeWidth="1.4" fill="none"/>
        </svg>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ cursor: 'pointer', flexShrink: 0 }}>
          <rect x="3" y="4" width="14" height="10" rx="2" stroke="#E53935" strokeWidth="1.4" fill="none"/>
          <path d="M3 8h14" stroke="#E53935" strokeWidth="1.4"/>
          <circle cx="6.5" cy="15.5" r="1.5" stroke="#E53935" strokeWidth="1.2" fill="none"/>
          <circle cx="13.5" cy="15.5" r="1.5" stroke="#E53935" strokeWidth="1.2" fill="none"/>
          <path d="M7 4V3M13 4V3" stroke="#E53935" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
};

// ─── Status Legend ────────────────────────────────────────────────────────────

export const StatusLegend = () => (
  <div style={{
    background: '#ffffff',
    border: '1px solid #e0e0e0',
    borderRadius: 8,
    padding: '16px 20px',
    display: 'inline-flex',
    flexDirection: 'column',
    gap: 10,
    boxShadow: '0px 2px 8px rgba(0,0,0,0.08)',
  }}>
    {(Object.entries(STATUS) as [ServiceStatus, typeof STATUS[ServiceStatus]][]).map(([key, s]) => (
      <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 14, height: 14, borderRadius: '50%',
          background: s.color, flexShrink: 0,
          border: key === 'pending_creation' ? '1.5px solid #c4c4c4' : 'none',
        }} />
        <span style={{ fontSize: 13, color: '#212121', fontFamily: '"Busup Sans", sans-serif' }}>
          {s.label}
        </span>
      </div>
    ))}
  </div>
);

// ─── Demo ─────────────────────────────────────────────────────────────────────

const SAMPLE_ROWS: AlertRowData[] = [
  { id: '1',  status: 'in_progress',        direction: 'outbound', localTime: '05:00h', serviceTime: '05:00h SPA', routeName: 'LV11 IDA: CASTELLAR DEL VALLÈS - SENTMENAT...', siteName: 'Amazon GRU5', provider: 'Omnitur', priority: 'High',   agent: 'J. Silva',   pending: '3', closed: '1' },
  { id: '2',  status: 'in_progress',        direction: 'inbound',  localTime: '05:00h', serviceTime: '05:00h SPA', routeName: 'LV11 IDA: CASTELLAR DEL VALLÈS - SENTMENAT...', siteName: 'Amazon GRU5', provider: 'Omnitur', priority: 'High',   agent: 'J. Silva',   pending: '2', closed: '1' },
  { id: '3',  status: 'planned',            direction: 'outbound', localTime: '06:00h', serviceTime: '06:00h SPA', routeName: 'LV11 IDA: CASTELLAR DEL VALLÈS - SENTMENAT...', siteName: 'Site B',      provider: 'Movelia', priority: 'Medium', agent: 'M. Costa',   pending: '2', closed: '0' },
  { id: '4',  status: 'pending_provider',   direction: 'outbound', localTime: '07:00h', serviceTime: '07:00h SPA', routeName: 'LV11 IDA: CASTELLAR DEL VALLÈS - SENTMENAT...', siteName: 'Site C',      provider: 'Alsa',    priority: 'Low',    agent: '—',          pending: '1', closed: '0' },
  { id: '5',  status: 'in_progress_issues', direction: 'inbound',  localTime: '07:30h', serviceTime: '07:30h SPA', routeName: 'LV11 IDA: CASTELLAR DEL VALLÈS - SENTMENAT...', siteName: 'Site C',      provider: 'Alsa',    priority: 'High',   agent: 'R. Pereira', pending: '4', closed: '0' },
  { id: '6',  status: 'pending_unsolved',   direction: 'outbound', localTime: '08:00h', serviceTime: '08:00h SPA', routeName: 'LV11 IDA: CASTELLAR DEL VALLÈS - SENTMENAT...', siteName: 'Amazon GRU5', provider: 'Omnitur', priority: 'Low',    agent: 'R. Pereira', pending: '0', closed: '4' },
  { id: '7',  status: 'pending_assignment', direction: 'inbound',  localTime: '08:30h', serviceTime: '08:30h SPA', routeName: 'LV11 IDA: CASTELLAR DEL VALLÈS - SENTMENAT...', siteName: 'Site D',      provider: 'Alsa',    priority: 'Medium', agent: '—',          pending: '1', closed: '0' },
  { id: '8',  status: 'completed',          direction: 'outbound', localTime: '09:00h', serviceTime: '09:00h SPA', routeName: 'LV11 IDA: CASTELLAR DEL VALLÈS - SENTMENAT...', siteName: 'Site D',      provider: 'Alsa',    priority: 'Low',    agent: 'M. Costa',   pending: '0', closed: '2' },
  { id: '9',  status: 'canceled',           direction: 'inbound',  localTime: '09:30h', serviceTime: '09:30h SPA', routeName: 'LV11 IDA: CASTELLAR DEL VALLÈS - SENTMENAT...', siteName: 'Site E',      provider: 'Movelia', priority: '—',      agent: '—',          pending: '0', closed: '0' },
  { id: '10', status: 'finished_issues',    direction: 'outbound', localTime: '10:00h', serviceTime: '10:00h SPA', routeName: 'LV11 IDA: CASTELLAR DEL VALLÈS - SENTMENAT...', siteName: 'Site D',      provider: 'Alsa',    priority: 'High',   agent: 'M. Costa',   pending: '0', closed: '2' },
  { id: '11', status: 'pending_creation',                          localTime: '10:30h', serviceTime: '10:30h SPA', routeName: 'LV11 IDA: CASTELLAR DEL VALLÈS - SENTMENAT...', siteName: 'Site E',      provider: '—',       priority: '—',      agent: '—',          pending: '0', closed: '0' },
];

export const AlertSystemDemo = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showLegend, setShowLegend] = useState(false);

  return (
    <div style={{ fontFamily: '"Busup Sans", sans-serif', overflowX: 'auto' }}>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12, position: 'relative' }}>
        <button
          onClick={() => setShowLegend(v => !v)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
          title="Status legend"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="#414141" strokeWidth="1.5" fill="none"/>
            <circle cx="10" cy="6.5" r="1" fill="#414141"/>
            <path d="M10 9v5" stroke="#414141" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        {showLegend && (
          <div style={{ position: 'absolute', top: 28, right: 0, zIndex: 10 }}>
            <StatusLegend />
          </div>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <AlertTableHeader />
        {SAMPLE_ROWS.map(row => (
          <AlertRow
            key={row.id}
            row={row}
            selected={selected === row.id}
            onClick={r => setSelected(prev => prev === r.id ? null : r.id)}
          />
        ))}
      </div>

      {selected && (
        <div style={{
          marginTop: 16,
          padding: '12px 16px',
          background: 'rgba(0,191,111,0.08)',
          borderRadius: 8,
          fontSize: 13,
          color: '#049157',
          fontWeight: 600,
        }}>
          Row {selected} selected — Service Detail Modal would open here
        </div>
      )}
    </div>
  );
};
