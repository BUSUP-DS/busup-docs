import React, { useState } from 'react';

// ─── Welcome Header ───────────────────────────────────────────────────────────
// Figma node 83:9948
// Container: Primary_100 (#d7ffed) bg, padding 52px, rounded top corners
// Title: 29px Bold #414141  |  Subtitle: 20px Regular #414141

export const WelcomeHeader = ({
  name = 'Victória',
  subtitle = 'Ready for your trip?',
}: {
  name?: string;
  subtitle?: string;
}) => (
  <div style={{
    background: '#d7ffed',
    borderRadius: 16,
    padding: '28px 32px',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: '"Busup Sans", sans-serif',
    maxWidth: 320,
  }}>
    <p style={{
      fontSize: 29,
      fontWeight: 700,
      color: '#414141',
      lineHeight: 1.2,
      margin: 0,
    }}>
      Welcome {name}!
    </p>
    <p style={{
      fontSize: 20,
      fontWeight: 400,
      color: '#414141',
      lineHeight: 1.5,
      margin: 0,
    }}>
      {subtitle}
    </p>
  </div>
);

export const WelcomeHeaderDemo = () => (
  <div style={{ fontFamily: '"Busup Sans", sans-serif', padding: '8px 0' }}>
    <WelcomeHeader />
  </div>
);

// ─── Route Path ───────────────────────────────────────────────────────────────
// Figma node 83:9955
// 3 states per stop marker: not_started (grey), current (green + bus icon), completed (dark grey)
// Vertical track connecting stops

type StopState = 'not_started' | 'current' | 'completed';

type Stop = {
  name: string;
  scheduledTime: string;
  eta?: string;
  state: StopState;
};

const STOP_COLORS: Record<StopState, { dot: string; track: string }> = {
  not_started: { dot: '#c4c4c4', track: '#c4c4c4' },
  current:     { dot: '#00bf6f', track: '#00bf6f' },
  completed:   { dot: '#616161', track: '#616161' },
};

const BusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="1" y="2" width="12" height="9" rx="2" fill="#00bf6f" stroke="#ffffff" strokeWidth="0.8"/>
    <circle cx="3.5" cy="11.5" r="1.2" fill="#ffffff"/>
    <circle cx="10.5" cy="11.5" r="1.2" fill="#ffffff"/>
    <rect x="3" y="4" width="3.5" height="2.5" rx="0.5" fill="#ffffff"/>
    <rect x="7.5" y="4" width="3.5" height="2.5" rx="0.5" fill="#ffffff"/>
  </svg>
);

export const RoutePath = ({ stops }: { stops: Stop[] }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    fontFamily: '"Busup Sans", sans-serif',
    width: 240,
  }}>
    {stops.map((stop, i) => {
      const colors = STOP_COLORS[stop.state];
      const isLast = i === stops.length - 1;
      return (
        <div key={i} style={{ display: 'flex', gap: 12 }}>
          {/* Track + dot column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 20, flexShrink: 0 }}>
            <div style={{
              width: 12, height: 12, borderRadius: '50%',
              background: stop.state === 'current' ? '#00bf6f' : colors.dot,
              border: stop.state === 'current' ? '2px solid #00bf6f' : `2px solid ${colors.dot}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 1,
            }}>
              {stop.state === 'current' && (
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ffffff' }} />
              )}
            </div>
            {!isLast && (
              <div style={{
                width: 2, flex: 1, minHeight: 24,
                background: stop.state === 'completed' ? '#616161' : '#c4c4c4',
                margin: '2px 0',
              }} />
            )}
          </div>
          {/* Stop info */}
          <div style={{ paddingBottom: isLast ? 0 : 16, flex: 1 }}>
            <p style={{
              fontSize: 13, fontWeight: stop.state === 'current' ? 700 : 400,
              color: stop.state === 'not_started' ? '#989898' : '#212121',
              margin: 0, lineHeight: 1.4,
            }}>
              {stop.name}
            </p>
            <p style={{ fontSize: 11, color: '#989898', margin: 0, lineHeight: 1.4 }}>
              Scheduled: {stop.scheduledTime}
            </p>
            {stop.eta && (
              <p style={{ fontSize: 11, color: stop.state === 'completed' ? '#616161' : '#00bf6f', margin: 0, lineHeight: 1.4 }}>
                ETA: {stop.eta}
              </p>
            )}
            {stop.state === 'current' && (
              <div style={{ marginTop: 4, display: 'inline-flex', alignItems: 'center', gap: 4, background: '#d7ffed', borderRadius: 4, padding: '2px 6px' }}>
                <BusIcon />
                <span style={{ fontSize: 10, color: '#00bf6f', fontWeight: 700 }}>In progress</span>
              </div>
            )}
          </div>
        </div>
      );
    })}
  </div>
);

const DEMO_STOPS: Stop[] = [
  { name: 'Santarém (Santa Casa da Misericórdia)', scheduledTime: '07:45', eta: 'Completed', state: 'completed' },
  { name: 'Parque das Nações', scheduledTime: '08:00', state: 'current' },
  { name: 'Oriente (Terminal Fluvial)', scheduledTime: '08:15', state: 'not_started' },
  { name: 'Alameda (Metro)', scheduledTime: '08:30', state: 'not_started' },
];

export const RoutePathDemo = () => (
  <div style={{ fontFamily: '"Busup Sans", sans-serif', padding: '8px 0' }}>
    <RoutePath stops={DEMO_STOPS} />
  </div>
);

// ─── Incidence Modal ──────────────────────────────────────────────────────────
// Figma node 93:7835
// 2 variants: Comment (free text), Type_Select (dropdown)

type IncidenceVariant = 'comment' | 'type_select';

const INCIDENCE_OPTIONS = [
  'Defeito mecânico',
  'Defeito elétrico',
  'Via obstruída',
  'Acidente na via',
];

const IncidenceModal = ({
  variant,
  onClose,
}: {
  variant: IncidenceVariant;
  onClose: () => void;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState<string>('');
  const [comment, setComment] = useState('');

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'rgba(70,70,70,0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: 8,
        boxShadow: '0px 4px 12px rgba(0,0,0,0.16)',
        width: 320,
        padding: '24px 20px 16px',
        fontFamily: '"Busup Sans", sans-serif',
      }}>
        {/* Title */}
        <p style={{ fontSize: 16, fontWeight: 700, color: '#212121', textAlign: 'center', margin: '0 0 12px' }}>
          Feedback
        </p>

        {/* Comment textarea */}
        {variant === 'comment' && (
          <textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Add a comment…"
            style={{
              width: '100%', boxSizing: 'border-box',
              height: 80, border: '1px solid #dbdbdb', borderRadius: 8,
              padding: '8px 12px', fontSize: 13, color: '#212121',
              fontFamily: '"Busup Sans", sans-serif', resize: 'none',
              outline: 'none', marginBottom: 16,
            }}
          />
        )}

        {/* Type dropdown */}
        {(variant === 'type_select') && (
          <div style={{ position: 'relative', marginBottom: 16 }}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                width: '100%', padding: '10px 12px',
                border: '1px solid #dbdbdb', borderRadius: 8,
                background: '#ffffff', fontSize: 13, color: selected ? '#212121' : '#989898',
                fontFamily: '"Busup Sans", sans-serif', textAlign: 'left', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}
            >
              <span>{selected || 'Select type…'}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d={dropdownOpen ? 'M2 8l4-4 4 4' : 'M2 4l4 4 4-4'} stroke="#989898" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {dropdownOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: 0, right: 0,
                background: '#ffffff', border: '1px solid #dbdbdb', borderRadius: 8,
                boxShadow: '0px 4px 12px rgba(0,0,0,0.16)', zIndex: 10,
                overflow: 'hidden',
              }}>
                {INCIDENCE_OPTIONS.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => { setSelected(opt); setDropdownOpen(false); }}
                    style={{
                      display: 'block', width: '100%', textAlign: 'left',
                      padding: '10px 12px', background: selected === opt ? '#f4f4f4' : '#ffffff',
                      border: 'none', cursor: 'pointer', fontSize: 13,
                      color: '#212121', fontFamily: '"Busup Sans", sans-serif',
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={onClose}
            style={{
              flex: 1, height: 36, borderRadius: 20,
              background: '#ffffff', border: '1px solid #00bf6f',
              fontSize: 13, fontWeight: 700, color: '#00bf6f',
              cursor: 'pointer', fontFamily: '"Busup Sans", sans-serif',
            }}
          >
            Cancel
          </button>
          <button
            style={{
              flex: 1, height: 36, borderRadius: 20,
              background: '#00bf6f',
              border: 'none',
              fontSize: 13, fontWeight: 700, color: '#ffffff',
              cursor: 'pointer', fontFamily: '"Busup Sans", sans-serif',
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export const IncidenceModalDemo = () => {
  const [open, setOpen] = useState<IncidenceVariant | null>(null);
  return (
    <div style={{ fontFamily: '"Busup Sans", sans-serif', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {(['comment', 'type_select'] as IncidenceVariant[]).map(v => (
        <button
          key={v}
          onClick={() => setOpen(v)}
          style={{
            padding: '8px 20px', background: '#ffffff', border: 'none',
            borderRadius: 20, fontSize: 13, fontWeight: 700, color: '#00bf6f',
            cursor: 'pointer', boxShadow: '0px 4px 12px rgba(0,0,0,0.16)',
          }}
        >
          {v === 'comment' ? 'Comment' : 'Type select'}
        </button>
      ))}
      {open && <IncidenceModal variant={open} onClose={() => setOpen(null)} />}
    </div>
  );
};

// ─── Passenger Information ────────────────────────────────────────────────────
// Figma node 93:5894
// Row: avatar + name + pax count | status badge (Pending / Boarding / Boarded)

type PaxStatus = 'pending' | 'boarding' | 'boarded' | 'absent';

const PAX_BADGE: Record<PaxStatus, { label: string; bg: string; color: string }> = {
  pending:  { label: 'Pending',  bg: '#fde6e3', color: '#b33522' },
  boarding: { label: 'Boarding', bg: '#fff4c5', color: '#bb5202' },
  boarded:  { label: 'Boarded',  bg: '#e3f5e3', color: '#358439' },
  absent:   { label: 'Absent',   bg: '#f4f4f4', color: '#414141' },
};

const AvatarIcon = ({ initials }: { initials: string }) => (
  <div style={{
    width: 32, height: 32, borderRadius: '50%',
    background: '#d7ffed', display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 12, fontWeight: 700, color: '#00bf6f', flexShrink: 0,
    fontFamily: '"Busup Sans", sans-serif',
  }}>
    {initials}
  </div>
);

type PassengerRowProps = {
  name: string;
  paxCount: number;
  status: PaxStatus;
};

export const PassengerRow = ({ name, paxCount, status }: PassengerRowProps) => {
  const badge = PAX_BADGE[status];
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '8px 12px', borderBottom: '1px solid #f4f4f4',
      fontFamily: '"Busup Sans", sans-serif',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <AvatarIcon initials={initials} />
        <div>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#212121', margin: 0 }}>{name}</p>
          <p style={{ fontSize: 11, color: '#989898', margin: 0 }}>{paxCount} passenger{paxCount !== 1 ? 's' : ''}</p>
        </div>
      </div>
      <span style={{
        fontSize: 11, fontWeight: 400, color: badge.color,
        background: badge.bg, borderRadius: 4, padding: '3px 8px',
      }}>
        {badge.label}
      </span>
    </div>
  );
};

const DEMO_PASSENGERS: PassengerRowProps[] = [
  { name: 'Bea Santos',     paxCount: 1, status: 'pending' },
  { name: 'Carlos Lima',    paxCount: 2, status: 'boarding' },
  { name: 'Ana Ferreira',   paxCount: 1, status: 'boarded' },
  { name: 'João Rodrigues', paxCount: 1, status: 'absent' },
];

export const PassengerInformationDemo = () => (
  <div style={{
    fontFamily: '"Busup Sans", sans-serif',
    border: '1px solid #dbdbdb', borderRadius: 8,
    overflow: 'hidden', maxWidth: 360,
  }}>
    {DEMO_PASSENGERS.map((p, i) => <PassengerRow key={i} {...p} />)}
  </div>
);

// ─── Manual Boarding Control ──────────────────────────────────────────────────
// Figma node 93:6118
// Container: #989898 bg, border-radius 30px, 279×141px
// Minus + Plus: white icon buttons, shadow-deep, border-radius 16px
// Counter: white semi-transparent circle, 35px Bold white
// Label: "Boarding" 14px Regular white, bottom center
// Disabled: 30% opacity

type BoardingControlProps = { disabled?: boolean };

export const ManualBoardingControl = ({ disabled = false }: BoardingControlProps) => {
  const [count, setCount] = useState(0);
  return (
    <div style={{
      position: 'relative',
      width: 279, height: 141,
      background: '#989898', borderRadius: 30,
      opacity: disabled ? 0.3 : 1,
      flexShrink: 0,
      overflow: 'hidden',
    }}>
      {/* Label */}
      <p style={{
        position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
        fontSize: 14, fontWeight: 400, color: '#ffffff', margin: 0,
        fontFamily: '"Busup Sans", sans-serif', whiteSpace: 'nowrap',
      }}>
        Boarding
      </p>

      {/* Minus */}
      <button
        onClick={() => !disabled && setCount(c => Math.max(0, c - 1))}
        style={{
          position: 'absolute', left: 17, top: 30,
          width: 44, height: 44, borderRadius: 16,
          background: '#ffffff', border: 'none',
          boxShadow: '0px 4px 6px rgba(0,0,0,0.16)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: disabled ? 'default' : 'pointer',
        }}
      >
        <svg width="20" height="4" viewBox="0 0 20 4">
          <rect y="1" width="20" height="2" rx="1" fill="#00bf6f"/>
        </svg>
      </button>

      {/* Counter */}
      <div style={{
        position: 'absolute', left: '50%', top: 15, transform: 'translateX(-50%)',
        width: 56, height: 56, borderRadius: '50%',
        background: 'rgba(255,255,255,0.2)',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{
          fontSize: 35, fontWeight: 700, color: '#ffffff', lineHeight: 1.2,
          fontFamily: '"Busup Sans", sans-serif',
          textShadow: '0px 4px 12px rgba(0,0,0,0.16)',
        }}>
          {count}
        </span>
      </div>

      {/* Plus */}
      <button
        onClick={() => !disabled && setCount(c => c + 1)}
        style={{
          position: 'absolute', right: 17, top: 30,
          width: 44, height: 44, borderRadius: 16,
          background: '#ffffff', border: 'none',
          boxShadow: '0px 4px 6px rgba(0,0,0,0.16)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: disabled ? 'default' : 'pointer',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20">
          <rect y="9" width="20" height="2" rx="1" fill="#00bf6f"/>
          <rect x="9" width="2" height="20" rx="1" fill="#00bf6f"/>
        </svg>
      </button>
    </div>
  );
};

export const ManualBoardingControlDemo = () => (
  <div style={{ fontFamily: '"Busup Sans", sans-serif', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
    <div>
      <p style={{ fontSize: 12, color: '#989898', margin: '0 0 8px', fontFamily: '"Busup Sans", sans-serif' }}>Default</p>
      <ManualBoardingControl />
    </div>
    <div>
      <p style={{ fontSize: 12, color: '#989898', margin: '0 0 8px', fontFamily: '"Busup Sans", sans-serif' }}>Disabled</p>
      <ManualBoardingControl disabled />
    </div>
  </div>
);

// ─── On Demand Control ────────────────────────────────────────────────────────
// Figma node 93:7784
// Container: bg #f4f4f4, border 1px solid rgba(0,191,111,0.3), border-radius 12px, px 21px py 9px, w 355px
// Title: 16px Bold #414141  |  Subtitle: 12px Regular #989898
// Toggle: green (ON) / grey (OFF) — uses system toggle visuals

type OnDemandControlProps = { defaultOn?: boolean };

export const OnDemandControl = ({ defaultOn = false }: OnDemandControlProps) => {
  const [on, setOn] = useState(defaultOn);
  return (
    <div style={{
      background: '#f4f4f4',
      border: '1px solid rgba(0,191,111,0.3)',
      borderRadius: 12,
      padding: '9px 21px',
      width: 355,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: '"Busup Sans", sans-serif',
      boxShadow: '0px 1px 1px rgba(0,0,0,0.05)',
    }}>
      <div style={{ flex: 1, minWidth: 0, paddingRight: 12 }}>
        <p style={{ fontSize: 16, fontWeight: 700, color: '#414141', margin: 0, lineHeight: '28px' }}>
          On-Demand Rides
        </p>
        <p style={{ fontSize: 12, color: '#989898', margin: 0, lineHeight: 1.5 }}>
          {on
            ? 'You are accepting ride requests'
            : 'You are off-duty. Turn this ON to start receiving ride requests.'}
        </p>
      </div>
      {/* Toggle */}
      <button
        onClick={() => setOn(v => !v)}
        style={{
          width: 44, height: 24, borderRadius: 12,
          background: on ? '#00bf6f' : '#c4c4c4',
          border: 'none', cursor: 'pointer', position: 'relative',
          transition: 'background 0.2s', flexShrink: 0,
        }}
      >
        <div style={{
          position: 'absolute', top: 3,
          left: on ? 23 : 3,
          width: 18, height: 18, borderRadius: '50%',
          background: '#ffffff',
          transition: 'left 0.2s',
          boxShadow: '0px 1px 3px rgba(0,0,0,0.2)',
        }} />
      </button>
    </div>
  );
};

export const OnDemandControlDemo = () => (
  <div style={{ fontFamily: '"Busup Sans", sans-serif', display: 'flex', flexDirection: 'column', gap: 12 }}>
    <div>
      <p style={{ fontSize: 12, color: '#989898', margin: '0 0 6px', fontFamily: '"Busup Sans", sans-serif' }}>ON state</p>
      <OnDemandControl defaultOn />
    </div>
    <div>
      <p style={{ fontSize: 12, color: '#989898', margin: '0 0 6px', fontFamily: '"Busup Sans", sans-serif' }}>OFF state</p>
      <OnDemandControl />
    </div>
  </div>
);
