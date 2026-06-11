import React from 'react';

// Static layout diagram — shows the Dashboard chrome zones with measurements.
// Not interactive; purpose is to document the spatial structure for designers building screens.

export const LayoutDemo = () => {
  const SCALE = 0.28; // scale down from 1942px wide original
  const W = Math.round(1942 * SCALE); // ~544px
  const H = Math.round(1096 * SCALE); // ~307px

  const SIDE_W  = Math.round(248  * SCALE); // ~69px
  const HDR_H   = Math.round(67   * SCALE); // ~19px
  const CONT_L  = Math.round(280  * SCALE); // ~78px
  const CONT_T  = Math.round(99   * SCALE); // ~28px
  const CONT_W  = W - CONT_L - Math.round(32 * SCALE);
  const CONT_H  = H - CONT_T - Math.round(32 * SCALE);

  const label: React.CSSProperties = {
    fontSize: '9px',
    fontWeight: 700,
    letterSpacing: '0.4px',
    textTransform: 'uppercase',
    lineHeight: 1.4,
  };

  const pill: React.CSSProperties = {
    display: 'inline-block',
    background: 'rgba(0,0,0,0.18)',
    borderRadius: '3px',
    padding: '1px 4px',
    fontSize: '8px',
    fontWeight: 600,
    color: '#fff',
    marginTop: '2px',
  };

  return (
    <div style={{ fontFamily: 'var(--font-family-brand, sans-serif)' }}>
      <div style={{
        position: 'relative',
        width: W,
        height: H,
        background: '#edf0f4',
        borderRadius: '6px',
        overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
      }}>

        {/* Side menu */}
        <div style={{
          position: 'absolute', left: 0, top: 0,
          width: SIDE_W, height: H,
          background: '#242d31',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 4,
        }}>
          <span style={{ ...label, color: '#ffffff' }}>Side menu</span>
          <span style={{ ...pill }}>248px · #242D31</span>
        </div>

        {/* Header */}
        <div style={{
          position: 'absolute', left: SIDE_W, top: 0,
          width: W - SIDE_W, height: HDR_H,
          background: '#00bf6f',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 4,
        }}>
          <span style={{ ...label, color: '#ffffff' }}>Header</span>
          <span style={{ ...pill }}>67px · #00BF6F</span>
        </div>

        {/* Content area */}
        <div style={{
          position: 'absolute',
          left: CONT_L, top: CONT_T,
          width: CONT_W, height: CONT_H,
          background: '#ffffff',
          borderRadius: 4,
          boxShadow: '0px 2px 8px rgba(0,0,0,0.08)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 4,
          border: '1.5px dashed #c4c4c4',
        }}>
          <span style={{ ...label, color: '#989898' }}>Content slot</span>
          <span style={{
            display: 'inline-block',
            background: 'rgba(196,196,196,0.3)',
            borderRadius: '3px',
            padding: '1px 4px',
            fontSize: '8px',
            fontWeight: 600,
            color: '#989898',
            marginTop: '2px',
          }}>
            rounded 8px · shadow-soft
          </span>
        </div>

        {/* Measurement callouts */}

        {/* Side menu width arrow */}
        <div style={{
          position: 'absolute', left: 0, bottom: 8,
          width: SIDE_W,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: '7px', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>← 248px →</span>
        </div>

        {/* Header height callout */}
        <div style={{
          position: 'absolute', right: 6, top: 0,
          height: HDR_H,
          display: 'flex', alignItems: 'center',
        }}>
          <span style={{ fontSize: '7px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, writingMode: 'vertical-rl' }}>67px</span>
        </div>

        {/* Gap callout — side menu to content */}
        <div style={{
          position: 'absolute',
          left: SIDE_W, top: CONT_T + 4,
          width: CONT_L - SIDE_W,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: '7px', color: '#989898', fontWeight: 600 }}>32</span>
        </div>

        {/* Gap callout — header to content */}
        <div style={{
          position: 'absolute',
          left: CONT_L + 4, top: HDR_H,
          height: CONT_T - HDR_H,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column',
        }}>
          <span style={{ fontSize: '7px', color: '#989898', fontWeight: 600 }}>32</span>
        </div>
      </div>

      {/* Spec table below */}
      <div style={{
        marginTop: 20,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 12,
      }}>
        {[
          { zone: 'Side menu', specs: ['Width: 248px', 'Height: 100vh', 'Background: #242D31'] },
          { zone: 'Header', specs: ['Height: 67px', 'Width: calc(100% − 248px)', 'Background: #00BF6F'] },
          { zone: 'Content slot', specs: ['Left offset: 280px (248 + 32)', 'Top offset: 99px (67 + 32)', 'bg white · rounded 8px · shadow-soft'] },
        ].map(({ zone, specs }) => (
          <div key={zone} style={{
            background: '#f4f4f4',
            borderRadius: 6,
            padding: '12px 14px',
          }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#212121', marginBottom: 6 }}>{zone}</div>
            {specs.map(s => (
              <div key={s} style={{ fontSize: '11px', color: '#414141', lineHeight: 1.6 }}>{s}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
