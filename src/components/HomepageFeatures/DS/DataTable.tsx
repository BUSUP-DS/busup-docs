import React, { useState } from 'react';

// ─── Figma tokens (node 42:5381 — NEW-LIBRARY) ───────────────────────────────
// Header cell:  bg #ffffff, border 1px #c4c4c4, h 40px, px 12px py 8px
//               font 12px Bold #414141, borderRadius 4px top corners
// Table cell:   bg #ffffff (white row) | #f4f4f4 (grey row)
//               border 1px #c4c4c4, h 40px, font 12px Light #414141
// Cell presets:
//   Field:          inline tag, border 0.5px #989898, rounded 4px, 10px Light #414141
//   color tag:      bg #989898, rounded 8px, 10px Light white
//   Text+button:    text 12px + icon button (white, shadow-deep, rounded 20px, 24px)
//   Multiples btns: 2–4 icon buttons
// Checkbox cell: 18px checkbox, checked bg #00bf6f
// Toggle:        pill 40×20px + label 12px Regular #414141
// Pagination:    12px Regular #212121, disabled opacity 30%
// Scroll bar:    track #f4f4f4 rounded 4px, thumb #989898 h 10px rounded 8px

// ─── Shared styles ────────────────────────────────────────────────────────────
const BORDER = '1px solid #c4c4c4';

const cellBase: React.CSSProperties = {
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  padding: '8px 12px',
  borderLeft: BORDER,
  borderBottom: BORDER,
  boxSizing: 'border-box',
  flexShrink: 0,
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const SortIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0 }}>
    <path d="M5 2L8 6H2L5 2Z" fill="#989898" />
  </svg>
);

const ActionIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <circle cx="5" cy="2" r="1" fill="#414141" />
    <circle cx="5" cy="5" r="1" fill="#414141" />
    <circle cx="5" cy="8" r="1" fill="#414141" />
  </svg>
);

const EditIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M7 1.5l1.5 1.5L3 8.5H1.5V7L7 1.5z" stroke="#414141" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DeleteIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M2 3h6M4 3V2h2v1M4.5 5v2.5M5.5 5v2.5M3 3l.5 5h3L7 3H3z" stroke="#414141" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface HeaderCellProps {
  label: string;
  width?: number;
  first?: boolean;
  last?: boolean;
  sortable?: boolean;
}

const HeaderCell = ({ label, width = 160, first: _first, last, sortable = true }: HeaderCellProps) => (
  <div style={{
    ...cellBase,
    width,
    background: '#ffffff',
    borderRight: last ? BORDER : undefined,
    gap: '8px',
    justifyContent: 'space-between',
  }}>
    <span style={{
      fontFamily: 'var(--font-family-brand)',
      fontSize: '12px',
      fontWeight: 700,
      color: '#414141',
      lineHeight: 1.5,
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
    {sortable && <SortIcon />}
  </div>
);

interface TableCellProps {
  children: React.ReactNode;
  width?: number;
  grey?: boolean;
  last?: boolean;
  style?: React.CSSProperties;
}

const TableCell = ({ children, width = 160, grey, last, style }: TableCellProps) => (
  <div style={{
    ...cellBase,
    width,
    background: grey ? '#f4f4f4' : '#ffffff',
    borderRight: last ? '1px solid #c4c4c4' : undefined,
    ...style,
  }}>
    <span style={{
      fontFamily: 'var(--font-family-brand)',
      fontSize: '12px',
      fontWeight: 300,
      color: '#414141',
      lineHeight: 1.5,
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }}>
      {children}
    </span>
  </div>
);

// Field tag (editable-looking chip)
const FieldTag = ({ label, grey, width = 120 }: { label: string; grey?: boolean; width?: number }) => (
  <div style={{
    ...cellBase,
    background: grey ? '#f4f4f4' : '#ffffff',
    justifyContent: 'center',
    width,
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      padding: '2px 6px',
      border: '0.5px solid #989898',
      borderRadius: '4px',
      background: 'rgba(255,255,255,0.3)',
      flex: 1,
      overflow: 'hidden',
    }}>
      <span style={{
        fontFamily: 'var(--font-family-brand)',
        fontSize: '10px',
        fontWeight: 300,
        color: '#414141',
        lineHeight: 1.5,
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}>{label}</span>
      <svg width="6" height="6" viewBox="0 0 6 6" fill="none" style={{ flexShrink: 0 }}>
        <path d="M1 2l2 2 2-2" stroke="#989898" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  </div>
);

// Color tag chip
const ColorTag = ({ label, grey }: { label: string; grey?: boolean }) => (
  <div style={{
    ...cellBase,
    background: grey ? '#f4f4f4' : '#ffffff',
    justifyContent: 'center',
    width: 140,
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      padding: '2px 8px',
      background: '#989898',
      borderRadius: '8px',
      overflow: 'hidden',
    }}>
      <span style={{
        fontFamily: 'var(--font-family-brand)',
        fontSize: '10px',
        fontWeight: 300,
        color: '#ffffff',
        lineHeight: 1.5,
        whiteSpace: 'nowrap',
      }}>{label}</span>
    </div>
  </div>
);

// Icon button (24×24 in-cell variant)
const CellIconButton = ({ icon }: { icon: React.ReactNode }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px',
    background: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.16)',
    flexShrink: 0,
    cursor: 'pointer',
  }}>
    {icon}
  </div>
);

// Actions cell (multiple buttons)
const ActionsCell = ({ grey }: { grey?: boolean }) => (
  <div style={{
    ...cellBase,
    background: grey ? '#f4f4f4' : '#ffffff',
    borderRight: BORDER,
    gap: '4px',
    width: 88,
    justifyContent: 'center',
  }}>
    <CellIconButton icon={<EditIcon />} />
    <CellIconButton icon={<DeleteIcon />} />
    <CellIconButton icon={<ActionIcon />} />
  </div>
);

// Checkbox cell
const CheckboxCell = ({ checked, onChange, grey, width = 36 }: { checked: boolean; onChange: () => void; grey?: boolean; width?: number }) => (
  <div style={{
    ...cellBase,
    background: grey ? '#f4f4f4' : '#ffffff',
    width,
    justifyContent: 'center',
    padding: '0 8px',
  }}>
    <div
      onClick={onChange}
      style={{
        width: '18px',
        height: '18px',
        border: checked ? 'none' : '1px solid #989898',
        borderRadius: '4px',
        background: checked ? '#00bf6f' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        flexShrink: 0,
      }}
    >
      {checked && (
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  </div>
);

// Toggle cell
const ToggleCell = ({ active, grey }: { active: boolean; grey?: boolean }) => (
  <div style={{
    ...cellBase,
    background: grey ? '#f4f4f4' : '#ffffff',
    width: 108,
    gap: '6px',
  }}>
    <div style={{
      width: '40px',
      height: '20px',
      borderRadius: '10px',
      background: active ? '#00bf6f' : '#c4c4c4',
      position: 'relative',
      flexShrink: 0,
      transition: 'background 0.2s',
    }}>
      <div style={{
        position: 'absolute',
        top: '2px',
        left: active ? '22px' : '2px',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        background: '#ffffff',
        transition: 'left 0.2s',
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
      }} />
    </div>
    <span style={{
      fontFamily: 'var(--font-family-brand)',
      fontSize: '12px',
      fontWeight: 400,
      color: '#414141',
      lineHeight: 1.5,
    }}>
      {active ? 'Yes' : 'No'}
    </span>
  </div>
);

// Status tag with semantic color
const StatusTag = ({ status, grey }: { status: 'active' | 'inactive' | 'pending'; grey?: boolean }) => {
  const colors = {
    active:   { bg: '#d7ffed', color: '#049157' },
    inactive: { bg: '#ebebeb', color: '#989898' },
    pending:  { bg: '#fff8e1', color: '#FFA000' },
  };
  const labels = { active: 'Active', inactive: 'Inactive', pending: 'Pending' };
  const c = colors[status];
  return (
    <div style={{
      ...cellBase,
      background: grey ? '#f4f4f4' : '#ffffff',
      width: 108,
      justifyContent: 'center',
    }}>
      <div style={{
        padding: '2px 10px',
        background: c.bg,
        borderRadius: '8px',
      }}>
        <span style={{
          fontFamily: 'var(--font-family-brand)',
          fontSize: '10px',
          fontWeight: 700,
          color: c.color,
          lineHeight: 1.5,
          whiteSpace: 'nowrap',
        }}>
          {labels[status]}
        </span>
      </div>
    </div>
  );
};

// Pagination nav arrow SVGs
const NavFirst  = ({ c }: { c: string }) => <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 2v8M9 2L5 6l4 4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const NavPrev   = ({ c }: { c: string }) => <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M8 2L4 6l4 4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const NavNext   = ({ c }: { c: string }) => <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const NavLast   = ({ c }: { c: string }) => <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M9 2v8M3 2l4 4-4 4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;

// Pagination
const Pagination = ({ total = 3, page = 1, perPage = 10, onPage, width }: {
  total?: number; page?: number; perPage?: number; onPage?: (p: number) => void; width?: number;
}) => {
  const lastPage = Math.ceil(total / perPage) || 1;
  const navBtns = [
    { icon: (c: string) => <NavFirst c={c} />,  disabled: page === 1,        onClick: () => onPage?.(1) },
    { icon: (c: string) => <NavPrev c={c} />,   disabled: page === 1,        onClick: () => onPage?.(page - 1) },
    { icon: (c: string) => <NavNext c={c} />,   disabled: page >= lastPage,  onClick: () => onPage?.(page + 1) },
    { icon: (c: string) => <NavLast c={c} />,   disabled: page >= lastPage,  onClick: () => onPage?.(lastPage) },
  ];
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 16px',
      borderTop: BORDER,
      background: '#ffffff',
      width: width ?? '100%',
      boxSizing: 'border-box' as const,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontFamily: 'var(--font-family-brand)', fontSize: '12px', fontWeight: 400, color: '#212121', lineHeight: 1.5 }}>
          Rows per page:
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <span style={{ fontFamily: 'var(--font-family-brand)', fontSize: '12px', fontWeight: 400, color: '#212121', lineHeight: 1.5 }}>{perPage}</span>
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
            <path d="M1 1l3 3 3-3" stroke="#212121" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span style={{ fontFamily: 'var(--font-family-brand)', fontSize: '12px', fontWeight: 400, color: '#212121', lineHeight: 1.5, marginLeft: '16px' }}>
          {page} of {lastPage}
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        {navBtns.map((btn, i) => {
          const col = btn.disabled ? '#c4c4c4' : '#212121';
          return (
            <button key={i} onClick={btn.onClick} disabled={btn.disabled} style={{
              width: '24px', height: '24px',
              background: 'transparent', border: 'none',
              cursor: btn.disabled ? 'default' : 'pointer',
              borderRadius: '4px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 0,
            }}>{btn.icon(col)}</button>
          );
        })}
      </div>
    </div>
  );
};

// ─── Demo data ────────────────────────────────────────────────────────────────
const ROWS = [
  { id: 1, name: 'C3 – Lagoon Park',    type: 'Commuting', company: 'Alsa',     status: 'active'   as const, enabled: true  },
  { id: 2, name: 'C5 – Beta Rise Exp.', type: 'Commuting', company: 'BUSUP ES', status: 'inactive' as const, enabled: false },
  { id: 3, name: 'R1 – Amazon HQ',      type: 'On Demand', company: 'Amazon',   status: 'pending'  as const, enabled: true  },
  { id: 4, name: 'S2 – Riverside Loop', type: 'Schools',   company: 'Alsa',     status: 'active'   as const, enabled: true  },
  { id: 5, name: 'D2D – North Campus',  type: 'D2D',       company: 'BUSUP PT', status: 'inactive' as const, enabled: false },
];

// ─── Search bar (above the table, right-aligned) ─────────────────────────────
// Figma node 238:10909: bg rgba(255,255,255,0.3), border 1px #989898, rounded 8px
// px 16px py 8px, w 242px, placeholder 12px Regular #c4c4c4
// icon button: bg white, shadow 0px 4px 6px rgba(0,0,0,0.16), rounded 20px, p 6px

const SearchBar = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '8px 16px',
    background: 'rgba(255,255,255,0.3)',
    border: '1px solid #989898',
    borderRadius: '8px',
    width: '242px',
    boxSizing: 'border-box',
  }}>
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Search"
      style={{
        border: 'none', outline: 'none', background: 'transparent',
        fontSize: '12px', fontWeight: 400, color: '#414141',
        lineHeight: 1.5, flex: 1, minWidth: 0,
      }}
    />
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#ffffff',
      boxShadow: '0px 4px 6px rgba(0,0,0,0.16)',
      borderRadius: '20px',
      padding: '6px',
      flexShrink: 0,
      cursor: 'pointer',
    }}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <circle cx="5.5" cy="5.5" r="3.5" stroke="#414141" strokeWidth="1.2" />
        <path d="M8 8l2.5 2.5" stroke="#414141" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </div>
  </div>
);

// ─── Main demo component ──────────────────────────────────────────────────────
export const DataTableDemo = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const filteredRows = ROWS.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase()) ||
    r.company.toLowerCase().includes(search.toLowerCase())
  );

  const toggle = (id: number) =>
    setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);

  const allChecked = selected.length === filteredRows.length && filteredRows.length > 0;
  const toggleAll = () => setSelected(allChecked ? [] : filteredRows.map(r => r.id));

  // Column widths — must sum exactly to TABLE_W
  const W = { chk: 36, num: 36, name: 148, type: 120, company: 108, status: 108, enabled: 108, actions: 88 };
  const TABLE_W = 36 + 36 + 148 + 120 + 108 + 108 + 108 + 88; // 752

  return (
    <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
      <div style={{ display: 'inline-flex', flexDirection: 'column', width: TABLE_W }}>
        {/* Search bar — right-aligned above the table */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {/* Header row */}
        <div style={{ display: 'flex', width: TABLE_W, borderTop: BORDER, borderRadius: '4px 4px 0 0', overflow: 'hidden' }}>
          {/* Checkbox header */}
          <div style={{
            ...cellBase,
            width: W.chk,
            background: '#ffffff',
            justifyContent: 'center',
            padding: '0 8px',
          }}>
            <div onClick={toggleAll} style={{
              width: '18px', height: '18px',
              border: allChecked ? 'none' : '1px solid #989898',
              borderRadius: '4px',
              background: allChecked ? '#00bf6f' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', flexShrink: 0,
            }}>
              {allChecked && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          </div>
          <HeaderCell label="#" width={W.num} sortable={false} />
          <HeaderCell label="Route name" width={W.name} />
          <HeaderCell label="Type" width={W.type} />
          <HeaderCell label="Company" width={W.company} />
          <HeaderCell label="Status" width={W.status} />
          <HeaderCell label="Enabled" width={W.enabled} />
          <HeaderCell label="Actions" width={W.actions} last sortable={false} />
        </div>

        {/* Body rows */}
        {filteredRows.map((row, i) => {
          const grey = i % 2 !== 0;
          const checked = selected.includes(row.id);
          return (
            <div key={row.id} style={{ display: 'flex', width: TABLE_W }}>
              <CheckboxCell checked={checked} onChange={() => toggle(row.id)} grey={grey} width={W.chk} />
              <TableCell width={W.num} grey={grey}>{String(row.id)}</TableCell>
              <TableCell width={W.name} grey={grey}>{row.name}</TableCell>
              <FieldTag label={row.type} grey={grey} width={W.type} />
              <TableCell width={W.company} grey={grey}>{row.company}</TableCell>
              <StatusTag status={row.status} grey={grey} />
              <ToggleCell active={row.enabled} grey={grey} />
              <ActionsCell grey={grey} />
            </div>
          );
        })}

        {/* Scroll bar */}
        <div style={{
          background: '#f4f4f4',
          padding: '6px 8px',
          marginTop: '8px',
          borderRadius: '4px',
          border: BORDER,
          width: TABLE_W,
          boxSizing: 'border-box',
        }}>
          <div style={{
            height: '10px',
            background: '#989898',
            borderRadius: '8px',
            width: '35%',
            boxShadow: '0px 4px 12px rgba(0,0,0,0.16)',
          }} />
        </div>

        {/* Pagination */}
        <Pagination total={ROWS.length} page={page} perPage={10} onPage={setPage} width={TABLE_W} />
      </div>
    </div>
  );
};
