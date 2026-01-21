# 3D Animation Quick Examples & Recipes

## 1. Change Scene Colors Quickly

### Hero Scene - Purple & Pink Theme

```tsx
// File: src/components/3D/HeroScene.tsx

export const HeroScene = () => {
  return (
    <Canvas className="w-full h-full" gl={{ antialias: true, alpha: true }}>
      {/* ... other code ... */}
      {/* Change these color values */}
      <FloatingIcosahedron speed={1} scale={1.5} color="#5227FF" />{" "}
      {/* Primary Purple */}
      <RotatingBox speed={0.8} scale={0.8} color="#FF9FFC" /> {/* Light Pink */}
      <FloatingParticles count={150} speed={0.6} color="#B19EEF" />{" "}
      {/* Pale Purple */}
      {/* Change light colors */}
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#5227FF" />
      <pointLight position={[0, 0, -10]} intensity={0.5} color="#FF9FFC" />
    </Canvas>
  );
};
```

### Service Scene - Cyan & Pink Theme

```tsx
// File: src/components/3D/ServiceScene.tsx

export const ServiceScene = () => {
  return (
    <Canvas className="w-full h-full" gl={{ antialias: true, alpha: true }}>
      {/* ... setup code ... */}
      <FloatingIcosahedron speed={1.2} scale={1.2} color="#00D9FF" />{" "}
      {/* Cyan */}
      <RotatingBox speed={1} scale={0.7} color="#FF6B9D" /> {/* Hot Pink */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-10, -10, 5]} intensity={0.8} color="#00D9FF" />
    </Canvas>
  );
};
```

## 2. Adjust Animation Speeds

### Faster Animations

```tsx
// Speed prop: 1 = normal, 2 = 2x faster, 0.5 = half speed

{
  /* Fast spinning */
}
<RotatingBox speed={1.5} rotationSpeed={0.008} />;

{
  /* Fast floating */
}
<FloatingIcosahedron speed={1.5} />;

{
  /* Fast particles */
}
<FloatingParticles count={100} speed={1.5} />;
```

### Slower, Calmer Animations

```tsx
{
  /* Slow spinning */
}
<RotatingBox speed={0.5} rotationSpeed={0.002} />;

{
  /* Slow floating */
}
<FloatingIcosahedron speed={0.5} />;

{
  /* Slow particles */
}
<FloatingParticles count={150} speed={0.3} />;
```

## 3. Optimize for Mobile

### Before (Desktop Only)

```tsx
const FAQScene = () => {
  return (
    <Canvas className="w-full h-full" gl={{ antialias: true, alpha: true }}>
      <AnimatedSphere speed={1.1} scale={1.3} color="#FFB800" />
      <FloatingParticles count={120} speed={0.7} color="#FF9FFC" />
    </Canvas>
  );
};
```

### After (Mobile Optimized)

```tsx
import { useMediaQuery } from "@/hooks/use-mobile"; // or your mobile hook

const FAQScene = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Canvas
      className="w-full h-full"
      gl={{
        antialias: !isMobile, // Disable AA on mobile
        alpha: true,
        dpr: isMobile ? 0.8 : 1, // Lower resolution on mobile
      }}
    >
      <OrbitControls
        autoRotate={!isMobile} // Disable auto-rotation on mobile
        enableDamping
      />

      <AnimatedSphere
        speed={isMobile ? 0.5 : 1.1} // Slower on mobile
        scale={1.3}
        color="#FFB800"
      />

      {/* Fewer particles on mobile */}
      <FloatingParticles
        count={isMobile ? 50 : 120}
        speed={0.7}
        color="#FF9FFC"
      />
    </Canvas>
  );
};
```

## 4. Create a Custom 3D Object

### Example: Rotating Torus

```tsx
// Create: src/components/3D/RotatingTorus.tsx

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface RotatingTorusProps {
  speed?: number;
  scale?: number;
  color?: string;
  tubeSize?: number;
}

export const RotatingTorus = ({
  speed = 1,
  scale = 1,
  color = "#FF6B9D",
  tubeSize = 0.4,
}: RotatingTorusProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001 * speed;
      meshRef.current.rotation.y += 0.003 * speed;
      meshRef.current.rotation.z += 0.0005 * speed;
    }
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <torusGeometry args={[1, tubeSize, 8, 100]} />
      <meshPhongMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        wireframe
      />
    </mesh>
  );
};
```

### Then use it in a scene:

```tsx
<RotatingTorus speed={1.2} scale={1.5} color="#00FF9F" tubeSize={0.5} />
```

## 5. Add Custom Lighting

### Dramatic Lighting

```tsx
{
  /* Dim ambient for drama */
}
<ambientLight intensity={0.3} />;

{
  /* Key light (bright) */
}
<pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />;

{
  /* Fill light (subtle) */
}
<pointLight position={[-10, -10, 5]} intensity={0.4} color="#5227FF" />;

{
  /* Rim light (back) */
}
<pointLight position={[0, 0, -20]} intensity={0.6} color="#FF9FFC" />;
```

### Soft, Even Lighting

```tsx
{/* Higher ambient for even coverage */}
<ambientLight intensity={0.7} />

{/* Multiple soft lights */}
<pointLight position={[15, 15, 15]} intensity={0.8} />
<pointLight position={[-15, -15, 15]} intensity={0.8} />
<pointLight position={[15, -15, 15]} intensity={0.8} />
```

## 6. Control Camera Behavior

### Interactive Camera (Default)

```tsx
<OrbitControls
  enableZoom={true}          {/* User can zoom */}
  enablePan={true}           {/* User can pan */}
  autoRotate={true}          {/* Auto-rotate when idle */}
  autoRotateSpeed={2}        {/* Rotation speed */}
  enableDamping={true}       {/* Smooth movement */}
  dampingFactor={0.05}       {/* Damping amount */}
/>
```

### Static Camera (Focus Content)

```tsx
<OrbitControls
  enableZoom={false}         {/* No zoom */}
  enablePan={false}          {/* No pan */}
  autoRotate={true}          {/* Always rotating */}
  autoRotateSpeed={1}        {/* Slow rotation */}
  enableDamping={true}
  dampingFactor={0.08}
/>
```

## 7. Performance Monitoring

### Check Frame Rate in Browser Console

```javascript
// In your browser DevTools console:
let fps = 0;
let lastTime = Date.now();
const checkFPS = () => {
  fps++;
  const now = Date.now();
  if (now - lastTime >= 1000) {
    console.log(`FPS: ${fps}`);
    fps = 0;
    lastTime = now;
  }
  requestAnimationFrame(checkFPS);
};
checkFPS();
```

### Lower Load if FPS < 30

```tsx
const isMobile = useMediaQuery("(max-width: 768px)");
const lowPerformance = // check device
  (
    <Canvas
      gl={{
        antialias: !lowPerformance,
        dpr: lowPerformance ? 0.5 : 1,
      }}
    >
      {/* Further optimize scenes for low performance */}
    </Canvas>
  );
```

## 8. Responsive Canvas Sizing

### Full-screen Canvas

```tsx
<Canvas className="w-full h-full absolute inset-0">
  {/* Your 3D content */}
</Canvas>
```

### Fixed Height Canvas

```tsx
<Canvas className="w-full h-96 rounded-lg overflow-hidden">
  {/* Your 3D content */}
</Canvas>
```

### With Custom Container

```tsx
<div className="relative w-full aspect-square rounded-lg overflow-hidden">
  <Canvas>{/* Your 3D content */}</Canvas>
</div>
```

## 9. Loading States

### Suspense Fallback

```tsx
<Canvas3D height="h-96">
  <Suspense
    fallback={
      <div className="w-full h-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
      </div>
    }
  >
    <HeroScene />
  </Suspense>
</Canvas3D>
```

### Custom Loading Component

```tsx
const LoadingSpinner = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm">
    <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent mb-4"></div>
    <p className="text-primary text-sm">Initializing 3D scene...</p>
  </div>
);

<Suspense fallback={<LoadingSpinner />}>
  <HeroScene />
</Suspense>;
```

## 10. Color Palette Reference

### Brand Colors

```
Primary Purple:    #5227FF
Light Purple:      #B19EEF
Accent Pink:       #FF9FFC
Hot Pink:          #FF6B9D
Cyan:              #00D9FF
Yellow:            #FFB800
Green:             #00FF9F
```

### Use in Scenes

```tsx
// Complementary color pairs
<FloatingIcosahedron color="#5227FF" />      // with
<RotatingBox color="#FFB800" />              // Yellow

// Monochromatic theme
<FloatingIcosahedron color="#5227FF" />      // Dark purple
<RotatingBox color="#B19EEF" />              // Light purple
<FloatingParticles color="#FF9FFC" />        // Pink

// Modern tech theme
<FloatingIcosahedron color="#00D9FF" />      // Cyan
<RotatingBox color="#FF6B9D" />              // Hot pink
<FloatingParticles color="#5227FF" />        // Purple
```

---

## Quick Copy-Paste Examples

### Fastest Setup (Copy & Use)

```tsx
// Replace color values and copy to your scene
<FloatingIcosahedron speed={1} scale={1.5} color="#5227FF" />
<RotatingBox speed={0.8} scale={0.8} color="#FF9FFC" rotationSpeed={0.004} />
<FloatingParticles count={150} speed={0.6} color="#B19EEF" />

// Always add these
<ambientLight intensity={0.5} />
<pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
<pointLight position={[-10, -10, 10]} intensity={0.5} color="#5227FF" />
```

Happy animating! 🎉
