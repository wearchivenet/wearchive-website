/**
 * Cosmic Journey — single continuous WebGL scene.
 * One scene, one camera, one lighting system, one timeline.
 * Scroll drives a camera state machine; nothing ever hard-cuts.
 */
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/* shared scroll store — written by window listeners, read in useFrame */
const journey = { p: 0, mx: 0, my: 0 };

if (typeof window !== "undefined") {
  const update = () => {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    journey.p = Math.min(1, Math.max(0, window.scrollY / max));
  };
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  window.addEventListener("pointermove", (e) => {
    journey.mx = e.clientX / window.innerWidth - 0.5;
    journey.my = e.clientY / window.innerHeight - 0.5;
  });
  update();
}

/* ------------------------------------------------------ utilities */
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const smooth = (a: number, b: number, x: number) => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const lerp = THREE.MathUtils.lerp;

const GOLD = new THREE.Color("#c9a24b");
const GOLD_BRIGHT = new THREE.Color("#ffe3a1");

function glowTexture(inner: string, outer = "rgba(0,0,0,0)"): THREE.Texture {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, inner);
  g.addColorStop(0.4, inner.replace(/[\d.]+\)$/, "0.35)"));
  g.addColorStop(1, outer);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.needsUpdate = true;
  return t;
}

function labelTexture(text: string): THREE.Texture {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 128;
  const ctx = c.getContext("2d")!;
  ctx.font = "500 44px 'Cormorant Garamond', 'Noto Serif TC', serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "rgba(238, 220, 175, 0.92)";
  ctx.letterSpacing = "10px";
  ctx.fillText(text, 256, 64);
  const t = new THREE.CanvasTexture(c);
  t.needsUpdate = true;
  return t;
}

/* -------------------------------------------------- star catalog */
/* Yale Bright Star Catalog — all stars brighter than mag 3.6.      */
const BSC =
  "2.1,29.1,2.1;2.3,59.1,2.3;3.3,15.2,2.8;4.9,-8.8,3.6;6.4,-77.3,2.8;6.6,-42.3,2.4;9.8,30.9,3.3;10.1,56.5,2.2;10.9,-18,2;12.3,57.8,3.4;14.2,60.7,2.5;16.5,-46.7,3.3;17.1,-10.2,3.5;17.4,35.6,2.1;21,-8.2,3.6;21.5,60.2,2.7;38,89.3,2;22.1,-43.3,3.4;24.5,48.6,3.6;24.4,-57.2,0.5;26,-15.9,3.5;28.6,63.7,3.4;28.3,29.6,3.4;28.7,20.8,2.6;29.7,-61.6,2.9;31,42.3,2.3;31.8,23.5,2;32.4,35,3;34.1,-51.5,3.6;34.8,-3,3;40.8,3.2,3.5;44.6,-40.3,3.2;45.6,4.1,2.5;46.2,53.5,2.9;46.3,38.8,3.4;47,41,2.1;51.1,49.9,1.8;51.2,9,3.6;55.7,47.8,3;55.8,-9.8,3.5;56.9,24.1,2.9;58.5,31.9,2.9;56.8,-74.2,3.2;59.5,40,2.9;59.5,-13.5,3;60.2,12.5,3.5;63.6,-62.5,3.4;64.5,-33.8,3.6;67.2,19.2,3.5;67.2,15.9,3.4;69,16.5,0.8;68.5,-55,3.3;72.5,7,3.2;74.2,33.2,2.7;75.5,43.8,3;76.6,41.2,3.2;76.4,-22.4,3.2;77,-5.1,2.8;78.2,-16.2,3.3;79.2,46,0.1;78.6,-8.2,0.1;79.4,-6.8,3.6;81.1,-2.4,3.4;81.3,6.3,1.6;81.6,28.6,1.6;82.1,-20.8,2.8;83,-0.3,2.2;83.2,-17.8,2.6;83.8,9.9,3.5;83.9,-5.9,2.8;84.1,-1.2,1.7;84.4,21.1,3;85.2,-1.9,2;84.9,-34.1,2.6;86.1,-22.4,3.6;86.7,-14.8,3.5;86.9,-9.7,2.1;87.7,-35.8,3.1;88.8,7.4,0.5;89.9,44.9,1.9;89.9,37.2,2.6;93.7,22.5,3.3;95.1,-30.1,3;95.7,22.5,2.9;95.7,-18,2;96,-52.7,-0.7;99.4,16.4,1.9;99.4,-43.2,3.2;101,25.1,3;101.3,12.9,3.4;101.3,-16.7,-1.5;103.2,34,3.6;102,-61.9,3.3;102.5,-50.6,2.9;104.7,-29,1.5;105.4,-27.9,3.5;105.8,-23.8,3;107.1,-26.4,1.8;109.5,16.5,3.6;109.3,-37.1,2.7;110,22,3.5;111,-29.3,2.5;111.8,8.3,2.9;112.3,-43.3,3.3;113.6,31.9,2.9;113.6,31.9,2;114.8,5.2,0.4;116.1,24.4,3.6;116.3,28,1.1;117.3,-24.9,3.3;119.2,-53,3.5;120.9,-40,2.3;121.9,-24.3,2.8;122.4,-47.3,1.8;124.1,9.2,3.5;125.6,-59.5,1.9;127.6,60.7,3.4;131.7,6.4,3.4;131.2,-54.7,2;133.8,5.9,3.1;134.8,48,3.1;135.9,47.2,3.6;137,-43.4,2.2;137.7,-59,3.4;138.3,-69.7,1.7;139.3,-59.3,2.3;140.3,34.4,3.1;140.5,-55,2.5;141.9,-8.7,2;143.2,51.7,3.2;142.7,-40.5,3.6;142.8,-57,3.1;145.3,9.9,3.5;146.5,23.8,3;146.8,-65.1,3;149.2,-54.6,3.5;151.8,16.8,3.5;152.1,12,1.4;154.2,23.4,3.4;154.3,42.9,3.5;153.4,-70,3.3;154.3,-61.3,3.4;155,19.8,2.6;155.6,41.5,3;158,-61.7,3.3;160.7,-64.4,2.8;161.7,-49.4,2.7;162.4,-16.2,3.1;165.5,56.4,2.4;165.9,61.8,1.8;167.4,44.5,3;168.5,20.5,2.6;168.6,15.4,3.3;169.6,33.1,3.5;169.8,-14.8,3.6;173.3,-31.9,3.5;173.9,-63,3.1;177.3,14.6,2.1;178.5,53.7,2.4;182.1,-50.7,2.6;182.5,-22.6,3;183.8,-58.7,2.8;183.9,57,3.3;184,-17.5,2.6;185.3,-60.4,3.6;186.6,-63.1,1.3;186.7,-63.1,1.7;187.5,-16.5,3;187.8,-57.1,1.6;188.6,-23.4,2.6;189.3,-69.1,2.7;190.4,-49,2.2;191.6,-68.1,3;191.9,-59.7,1.3;193.5,56,1.8;193.9,3.4,3.4;194,38.3,2.9;195.5,11,2.8;199.7,-23.2,3;200.1,-36.7,2.8;201,54.9,2.3;201.3,-11.2,1;203.7,-0.6,3.4;205,-53.5,2.3;207.4,-41.7,3.4;206.9,49.3,1.9;207.4,-42.5,3;208.9,-47.3,2.5;208.7,18.4,2.7;211,-60.4,0.6;211.6,-26.7,3.3;211.7,-36.4,2.1;213.9,19.2,0;214.9,-46.1,3.5;218,30.4,3.6;218,38.3,3;218.9,-42.2,2.3;219.9,-60.8,0;219.9,-60.8,1.3;220.6,-65,3.2;220.5,-47.4,2.3;221.2,27.1,2.7;222.7,-16,2.8;222.7,74.2,2.1;224.6,-43.1,2.7;224.8,-42.1,3.1;225.5,40.4,3.5;226,-25.3,3.3;228.1,-52.1,3.4;229.7,-68.7,2.9;228.9,33.3,3.5;229.3,-9.4,2.6;230.3,-40.6,3.2;230.5,-36.3,3.6;230.7,-44.7,3.4;230.2,71.8,3;231.2,59,3.3;233.8,-41.2,2.8;233.7,26.7,2.2;234.3,-28.1,3.6;236.1,6.4,2.6;237.4,-3.4,3.5;238.8,-63.4,2.9;239.7,-26.1,2.9;240,-38.4,3.4;240.1,-22.6,2.3;239.9,25.9,2;241.4,-19.8,2.6;243.6,-3.7,2.7;244.6,-4.7,3.2;245.3,-25.6,2.9;246,61.5,2.7;247.4,-26.4,1;247.6,21.5,2.8;249,-28.2,2.8;249.3,-10.6,2.6;250.3,31.6,2.8;252.2,-69,1.9;250.7,38.9,3.5;252.5,-34.3,2.3;253,-38,3.1;253.1,-38,3.6;254.7,-56,3.1;254.4,9.4,3.2;257.6,-15.7,2.4;258,-43.2,3.3;257.2,65.7,3.2;258.7,14.4,3.5;258.8,24.8,3.1;258.8,36.8,3.2;260.5,-25,3.3;261.3,-55.5,2.9;261.3,-56.4,3.3;262.7,-37.3,2.7;263,-49.9,3;263.4,-37.1,1.6;262.6,52.3,2.8;264.3,-43,1.9;263.7,12.6,2.1;264.4,-15.4,3.5;265.6,-39,2.4;265.9,4.6,2.8;266.9,-40.1,3;266.6,27.7,3.4;267.5,-37,3.2;269.8,-9.8,3.3;269.2,51.5,2.2;271.5,-30.4,3;274.4,-36.8,3.1;275.2,-29.8,2.7;275.3,-2.9,3.3;276,-34.4,1.9;276.7,-46,3.5;277,-25.4,2.8;275.3,72.7,3.6;279.2,38.8,0;281.4,-27,3.2;282.5,33.4,3.5;283.8,-26.3,2;284.4,-21.1,3.5;284.7,32.7,3.2;285.7,-29.9,2.6;286.7,-27.7,3.3;286.4,13.9,3;286.6,-4.9,3.4;287.4,-21,2.9;288.1,67.7,3.1;291.4,3.1,3.4;292.7,28,3.1;296.6,10.6,2.7;296.2,45.1,2.9;297.7,8.9,0.8;299.7,19.5,3.5;302.2,-66.2,3.6;302.8,-0.8,3.2;304.5,-12.5,3.6;305.3,-14.8,3.1;306.4,-56.7,1.9;305.6,40.3,2.2;309.4,-47.3,3.1;311.2,-66.2,3.4;310.4,45.3,1.3;311.6,34,2.5;311.3,61.8,3.4;318.2,30.2,3.2;319.6,62.6,2.4;322.9,-5.6,2.9;322.2,70.6,3.2;326,9.9,2.4;326.8,-16.1,2.9;328.5,-37.4,3;331.4,-0.3,3;332.1,-47,1.7;332.6,6.2,3.5;332.7,58.2,3.4;334.6,-60.3,2.9;340.4,10.8,3.4;340.7,-46.9,2.1;340.8,30.2,2.9;342.1,-51.3,3.5;342.5,24.6,3.5;342.4,66.2,3.5;343.7,-15.8,3.3;344.4,-29.6,1.2;345.9,28.1,2.4;346.2,15.2,2.5;354.8,77.6,3.2";

/* ------------------------------------------------------ star dome */
function StarDome() {
  const geom = useMemo(() => {
    const R = 380;
    const pos: number[] = [];
    const size: number[] = [];
    for (const row of BSC.split(";")) {
      const [ra, dec, mag] = row.split(",").map(parseFloat);
      const raR = (ra * Math.PI) / 180;
      const decR = (dec * Math.PI) / 180;
      pos.push(R * Math.cos(decR) * Math.cos(raR), R * Math.sin(decR), R * Math.cos(decR) * Math.sin(raR));
      size.push((4 - mag) * 1.15);
    }
    // faint filler stars
    for (let i = 0; i < 1400; i++) {
      const v = new THREE.Vector3().randomDirection().multiplyScalar(390);
      pos.push(v.x, v.y, v.z);
      size.push(0.55 + Math.random() * 0.5);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute("aSize", new THREE.Float32BufferAttribute(size, 1));
    return g;
  }, []);

  const mat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { uOpacity: { value: 0.55 }, uTime: { value: 0 } },
        vertexShader: `
          attribute float aSize;
          varying float vSize;
          void main() {
            vSize = aSize;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = aSize * 2.4;
            gl_Position = projectionMatrix * mv;
          }`,
        fragmentShader: `
          uniform float uOpacity;
          varying float vSize;
          void main() {
            float d = distance(gl_PointCoord, vec2(0.5));
            float a = smoothstep(0.5, 0.05, d) * uOpacity;
            gl_FragColor = vec4(0.92, 0.95, 1.0, a);
          }`
      }),
    []
  );

  const ref = useRef<THREE.Points>(null);
  useFrame(() => {
    // stars breathe in as we enter the chart, dim slightly at the very start
    mat.uniforms.uOpacity.value = lerp(0.35, 0.95, smooth(0.12, 0.3, journey.p));
    if (ref.current) ref.current.rotation.y = journey.p * 0.6 + journey.mx * 0.03;
  });

  return <points ref={ref} geometry={geom} material={mat} />;
}

/* ------------------------------------------------------ nebulae */
function Nebulae() {
  const texA = useMemo(() => glowTexture("rgba(91,120,220,0.55)"), []);
  const texB = useMemo(() => glowTexture("rgba(140,110,220,0.4)"), []);
  const g = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!g.current) return;
    g.current.rotation.y = clock.elapsedTime * 0.004 + journey.p * 0.4;
    const o = lerp(0.35, 0.75, smooth(0.15, 0.45, journey.p));
    g.current.children.forEach((c) => {
      const m = (c as THREE.Sprite).material as THREE.SpriteMaterial;
      m.opacity = o * (c.userData.k as number);
    });
  });
  return (
    <group ref={g}>
      <sprite position={[-220, 90, -240]} scale={[300, 220, 1]} userData={{ k: 1 }}>
        <spriteMaterial map={texA} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </sprite>
      <sprite position={[240, -40, -260]} scale={[340, 260, 1]} userData={{ k: 0.7 }}>
        <spriteMaterial map={texB} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </sprite>
      <sprite position={[40, 200, -300]} scale={[260, 200, 1]} userData={{ k: 0.5 }}>
        <spriteMaterial map={texA} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </sprite>
    </group>
  );
}

/* ------------------------------------------------- the natal chart */
function circlePoints(r: number, n = 128): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r));
  }
  return pts;
}

function ChartFloor() {
  const group = useRef<THREE.Group>(null);
  const lineMat = useMemo(
    () => new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.75 }),
    []
  );
  const dimMat = useMemo(
    () => new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.28 }),
    []
  );

  const lines = useMemo(() => {
    const objs: { pts: THREE.Vector3[]; dim: boolean; loop: boolean }[] = [];
    [10, 8.4, 7, 3.2, 1.3].forEach((r, i) => objs.push({ pts: circlePoints(r), dim: i === 2 || i === 4, loop: true }));
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      objs.push({
        pts: [
          new THREE.Vector3(Math.cos(a) * 3.2, 0, Math.sin(a) * 3.2),
          new THREE.Vector3(Math.cos(a) * 10, 0, Math.sin(a) * 10)
        ],
        dim: true,
        loop: false
      });
    }
    const poly = (angles: number[], r: number) =>
      objs.push({
        pts: [...angles, angles[0]].map(
          (deg) => new THREE.Vector3(Math.cos((deg * Math.PI) / 180) * r, 0, Math.sin((deg * Math.PI) / 180) * r)
        ),
        dim: true,
        loop: false
      });
    poly([15, 135, 255], 7);
    poly([75, 195, 315], 7);
    poly([0, 60, 120, 180, 240, 300], 7);
    const chord = (a: number, b: number) =>
      objs.push({
        pts: [
          new THREE.Vector3(Math.cos((a * Math.PI) / 180) * 5, 0, Math.sin((a * Math.PI) / 180) * 5),
          new THREE.Vector3(Math.cos((b * Math.PI) / 180) * 5, 0, Math.sin((b * Math.PI) / 180) * 5)
        ],
        dim: true,
        loop: false
      });
    [[22, 170], [80, 250], [130, 300], [170, 340], [22, 130], [80, 340]].forEach(([a, b]) => chord(a, b));
    return objs;
  }, []);

  /* twelve house sectors that awaken one by one */
  const sectors = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const geo = new THREE.RingGeometry(8.4, 10, 24, 1, (i / 12) * Math.PI * 2, Math.PI / 6 - 0.02);
      geo.rotateX(-Math.PI / 2);
      const mat = new THREE.MeshBasicMaterial({
        color: GOLD_BRIGHT,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      return { geo, mat };
    });
  }, []);

  useFrame(({ clock }) => {
    if (group.current) group.current.rotation.y = clock.elapsedTime * 0.012;
    const p = journey.p;
    sectors.forEach(({ mat }, i) => {
      const t = smooth(0.3 + i * 0.012, 0.34 + i * 0.012, p);
      const fade = 1 - smooth(0.9, 0.98, p);
      mat.opacity = t * 0.22 * fade * (0.8 + 0.2 * Math.sin(clock.elapsedTime * 1.4 + i));
    });
    const awakened = smooth(0.28, 0.44, p);
    lineMat.opacity = lerp(0.7, 1, awakened) * (1 - smooth(0.92, 1, p));
    lineMat.color.lerpColors(GOLD, GOLD_BRIGHT, awakened);
    dimMat.opacity = lerp(0.26, 0.55, awakened) * (1 - smooth(0.92, 1, p));
  });

  return (
    <group ref={group}>
      {lines.map((l, i) => {
        const geo = new THREE.BufferGeometry().setFromPoints(l.pts);
        return <primitive key={i} object={new THREE.Line(geo, l.dim ? dimMat : lineMat)} />;
      })}
      {sectors.map(({ geo, mat }, i) => (
        <mesh key={`s${i}`} geometry={geo} material={mat} position={[0, 0.02, 0]} />
      ))}
    </group>
  );
}

/* ------------------------------------------------- zodiac objects */
const ZODIAC = ["ARIES", "TAURUS", "GEMINI", "CANCER", "LEO", "VIRGO", "LIBRA", "SCORPIO", "SAGITTARIUS", "CAPRICORN", "AQUARIUS", "PISCES"];

function ZodiacRing() {
  const glow = useMemo(() => glowTexture("rgba(255,227,161,0.9)"), []);
  const labels = useMemo(() => ZODIAC.map((z) => labelTexture(z)), []);
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const p = journey.p;
    group.current.rotation.y = clock.elapsedTime * 0.02;
    group.current.children.forEach((child, i) => {
      const rise = smooth(0.42 + i * 0.008, 0.5 + i * 0.008, p);
      const fade = 1 - smooth(0.9, 0.97, p);
      child.position.y = lerp(-0.5, 4.2 + Math.sin(clock.elapsedTime * 0.5 + i) * 0.25, rise);
      child.children.forEach((c) => {
        const m = (c as THREE.Sprite).material as THREE.SpriteMaterial;
        m.opacity = rise * fade * (c.userData.label ? 0.85 : 0.9);
      });
    });
  });

  return (
    <group ref={group}>
      {ZODIAC.map((_, i) => {
        const a = (i / 12) * Math.PI * 2 + Math.PI / 12;
        return (
          <group key={i} position={[Math.cos(a) * 9.2, -0.5, Math.sin(a) * 9.2]}>
            <sprite scale={[1.7, 1.7, 1]}>
              <spriteMaterial map={glow} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} />
            </sprite>
            <sprite position={[0, -1, 0]} scale={[3.4, 0.85, 1]} userData={{ label: true }}>
              <spriteMaterial map={labels[i]} transparent opacity={0} depthWrite={false} />
            </sprite>
          </group>
        );
      })}
    </group>
  );
}

/* ------------------------------------------------- planet objects */
const PLANETS: { name: string; r: number; dist: number; h: number; color: string }[] = [
  { name: "SUN", r: 1.05, dist: 4.6, h: 5.4, color: "#ffb45e" },
  { name: "MOON", r: 0.62, dist: 6.2, h: 6.6, color: "#cfd8ea" },
  { name: "MERCURY", r: 0.3, dist: 5.2, h: 4.4, color: "#b9b2a6" },
  { name: "VENUS", r: 0.5, dist: 7.4, h: 5.8, color: "#f2d3a0" },
  { name: "MARS", r: 0.42, dist: 8.6, h: 4.8, color: "#e08a5e" },
  { name: "JUPITER", r: 0.9, dist: 10.4, h: 6.8, color: "#e0b98a" },
  { name: "SATURN", r: 0.78, dist: 12, h: 5.6, color: "#d9c9a3" },
  { name: "URANUS", r: 0.5, dist: 13.4, h: 6.4, color: "#a8d8e0" },
  { name: "NEPTUNE", r: 0.48, dist: 14.6, h: 5.2, color: "#7fa8e8" },
  { name: "PLUTO", r: 0.24, dist: 15.8, h: 6, color: "#c0b4c8" }
];

function PlanetField() {
  const group = useRef<THREE.Group>(null);
  const glows = useMemo(() => PLANETS.map((p) => glowTexture(`rgba(${new THREE.Color(p.color).toArray().map((v) => Math.round(v * 255)).join(",")},0.75)`)), []);
  const labels = useMemo(() => PLANETS.map((p) => labelTexture(p.name)), []);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const p = journey.p;
    group.current.rotation.y = clock.elapsedTime * 0.015;
    group.current.children.forEach((child, i) => {
      const rise = smooth(0.52 + i * 0.01, 0.62 + i * 0.01, p);
      const fade = 1 - smooth(0.92, 0.99, p);
      const def = PLANETS[i];
      child.position.y = lerp(-0.6, def.h + Math.sin(clock.elapsedTime * 0.4 + i * 1.3) * 0.3, rise);
      child.visible = rise > 0.001;
      child.children.forEach((c) => {
        const obj = c as THREE.Object3D & { material?: THREE.Material & { opacity: number } };
        if (obj.material) obj.material.opacity = rise * fade * (obj.userData.label ? 0.8 : obj.userData.glow ? 0.85 : 1);
      });
    });
  });

  return (
    <group ref={group}>
      {PLANETS.map((def, i) => {
        const a = (i / PLANETS.length) * Math.PI * 2 + 0.7;
        return (
          <group key={def.name} position={[Math.cos(a) * def.dist, -0.6, Math.sin(a) * def.dist]}>
            <mesh>
              <sphereGeometry args={[def.r, 32, 32]} />
              <meshStandardMaterial
                color={def.color}
                emissive={def.color}
                emissiveIntensity={0.55}
                roughness={0.6}
                transparent
              />
            </mesh>
            <sprite scale={[def.r * 6, def.r * 6, 1]} userData={{ glow: true }}>
              <spriteMaterial map={glows[i]} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} />
            </sprite>
            <sprite position={[0, -def.r - 0.75, 0]} scale={[3.1, 0.78, 1]} userData={{ label: true }}>
              <spriteMaterial map={labels[i]} transparent opacity={0} depthWrite={false} />
            </sprite>
          </group>
        );
      })}
    </group>
  );
}

/* -------------------------------------------------- rising particles */
function Particles({ count = 700 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const data = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const speed = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = Math.sqrt(Math.random()) * 11;
      const a = Math.random() * Math.PI * 2;
      pos[i * 3] = Math.cos(a) * r;
      pos[i * 3 + 1] = Math.random() * 9;
      pos[i * 3 + 2] = Math.sin(a) * r;
      speed[i] = 0.14 + Math.random() * 0.5;
    }
    return { pos, speed };
  }, [count]);

  const tex = useMemo(() => glowTexture("rgba(255,224,150,0.9)"), []);
  const mat = useMemo(
    () =>
      new THREE.PointsMaterial({
        size: 0.09,
        map: tex,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      }),
    [tex]
  );

  useFrame((_, dt) => {
    const p = journey.p;
    mat.opacity = smooth(0.3, 0.42, p) * (1 - smooth(0.9, 0.98, p)) * 0.8;
    if (mat.opacity <= 0.001 || !ref.current) return;
    const arr = (ref.current.geometry.getAttribute("position") as THREE.BufferAttribute).array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += data.speed[i] * dt;
      if (arr[i * 3 + 1] > 9) arr[i * 3 + 1] = 0;
    }
    ref.current.geometry.getAttribute("position").needsUpdate = true;
  });

  return (
    <points ref={ref} material={mat}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[data.pos, 3]} />
      </bufferGeometry>
    </points>
  );
}

/* -------------------------------------------------- camera rig */
const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);

/** piecewise camera path: [progress, position, lookAt] */
const PATH: [number, THREE.Vector3, THREE.Vector3][] = [
  [0.0, V(0, 46, 0.01), V(0, 0, 0)], // scene 1: top-down
  [0.12, V(0, 26, 13), V(0, 0, 0)], // scene 2: descending
  [0.24, V(0, 3.4, 12.5), V(0, 1.6, 0)], // scene 3: standing inside
  [0.4, V(0, 3.1, 10.5), V(0, 2.2, 0)], // scene 4: awakening
  [0.52, V(0, 4.2, 12), V(0, 3.4, 0)], // scene 5: zodiac risen
  [0.64, V(0, 5, 13.5), V(0, 4.4, 0)], // scene 6: planets
  [0.74, V(0, 3.4, 7.5), V(0, 30, -6)], // scene 7: looking up
  [0.86, V(0, 6, 13), V(0, 4, 0)], // scene 8: orbit begins
  [1.0, V(0, 7, 13), V(0, 3.5, 0)] // stays orbiting through services → end
];

function CameraRig() {
  const { camera } = useThree();
  const pos = useMemo(() => new THREE.Vector3(), []);
  const look = useMemo(() => new THREE.Vector3(), []);
  const cur = useMemo(() => new THREE.Vector3(0, 46, 0.01), []);
  const curLook = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ clock }) => {
    const p = journey.p;
    let i = 0;
    while (i < PATH.length - 2 && p > PATH[i + 1][0]) i++;
    const [pa, posA, lookA] = PATH[i];
    const [pb, posB, lookB] = PATH[i + 1];
    const t = smooth(pa, pb, p);
    pos.lerpVectors(posA, posB, t);
    look.lerpVectors(lookA, lookB, t);

    // scene 8+: slow luxurious orbit around the center
    const orbit = smooth(0.78, 0.86, p) * (1 - smooth(0.96, 1, p));
    if (orbit > 0) {
      const ang = clock.elapsedTime * 0.06;
      const radius = pos.length() * 0.9;
      pos.x = Math.sin(ang) * radius * orbit + pos.x * (1 - orbit);
      pos.z = Math.cos(ang) * radius * orbit + pos.z * (1 - orbit);
    }

    // final scene: converge gently toward the heart of the chart
    const converge = smooth(0.95, 1, p);
    if (converge > 0) {
      pos.lerp(V(0, 2.4, 4.5), converge * 0.9);
      look.lerp(V(0, 2, 0), converge);
    }

    // subtle hand-held drift + mouse parallax
    pos.x += Math.sin(clock.elapsedTime * 0.14) * 0.18 + journey.mx * 1.1;
    pos.y += Math.cos(clock.elapsedTime * 0.1) * 0.12 - journey.my * 0.7;

    cur.lerp(pos, 0.06);
    curLook.lerp(look, 0.06);
    camera.position.copy(cur);
    camera.lookAt(curLook);
  });

  return null;
}

/* -------------------------------------------------- root scene */
function SceneRoot() {
  const root = useRef<THREE.Group>(null);
  useFrame(() => {
    if (!root.current) return;
    // final convergence: the universe folds back toward the self
    const c = smooth(0.95, 1, journey.p);
    const s = lerp(1, 0.55, c);
    root.current.scale.setScalar(s);
  });
  return (
    <group ref={root}>
      <ambientLight intensity={0.35} />
      <pointLight position={[0, 14, 0]} intensity={90} color="#ffe3b0" />
      <pointLight position={[18, 6, 12]} intensity={40} color="#9db8ff" />
      <StarDome />
      <Nebulae />
      <ChartFloor />
      <ZodiacRing />
      <PlanetField />
      <Particles />
    </group>
  );
}

/* -------------------------------------------------- export */
export default function JourneyCanvas() {
  const coarse = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: !coarse, powerPreference: "high-performance", alpha: true }}
      camera={{ fov: 42, near: 0.1, far: 900, position: [0, 46, 0.01] }}
      style={{ position: "fixed", inset: 0, zIndex: -1, background: "transparent" }}
    >
      <CameraRig />
      <SceneRoot />
    </Canvas>
  );
}
