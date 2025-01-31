import { useState, useEffect } from 'react';
import HALO from 'vanta/dist/vanta.halo.min';
import * as THREE from 'three';

window.THREE = THREE;

const Halo = ({ myRef }) => {
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(HALO({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        size: 1.3,
        amplitudeFactor: .5,
        baseColor: 0xe67e22,
        backgroundColor: 0x34495e,
        xOffset: .15,
        yOffset: .1,
        THREE: THREE
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, myRef]);

  return null; // No additional JSX needed here; handled by ref
};

export default Halo;
