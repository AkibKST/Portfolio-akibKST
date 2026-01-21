# 3D Animation Implementation Guide

## Overview

This portfolio now features professional 3D animations powered by React Three Fiber (R3F) and Three.js. Each major section has its own unique 3D scene with interactive elements.

## What's Been Added

### 1. **Dependencies Installed**

```bash
@react-three/fiber@9.5.0
@react-three/drei@10.7.7
@react-three/postprocessing@3.0.4
```

### 2. **3D Components Created**

#### Core 3D Objects

- **FloatingIcosahedron** - Rotating wireframe icosahedron with floating animation
- **RotatingBox** - Animated cube with dynamic rotation and bobbing motion
- **AnimatedSphere** - Pulsating sphere with scaling effects
- **FloatingParticles** - Particle system with floating animation

#### Scene Components

- **HeroScene** - Hero section with multiple 3D objects, stars, and orbital controls
- **ServiceScene** - Compact scene with icosahedron and rotating box
- **FAQScene** - Scene with animated sphere and particles
- **TestimonialScene** - Scene with icosahedron and sphere interaction
- **ContactScene** - Multi-object scene with rich 3D elements

#### Utility

- **Canvas3D** - Wrapper component for consistent styling of 3D scenes

### 3. **Updated Sections**

#### Hero Section (`src/components/modules/homepage/HeroSection.tsx`)

- Integrated HeroScene with interactive 3D animation
- Stars, floating objects, and orbital controls
- Fallback to traditional profile image (optional)

#### Service Section (`src/components/modules/homepage/ServiceSection.tsx`)

- Replaced static images with 3D scenes
- Two ServiceScene instances for service cards
- Maintains responsive design

#### FAQ Section (`src/components/modules/homepage/FaqSection.tsx`)

- Added 3D scene alongside accordion
- Two-column layout (desktop) / single column (mobile)
- FAQScene with pulsating sphere

#### Testimonials Section (`src/components/modules/homepage/TestimonialsSection.tsx`)

- 3D animation on left, testimonial content on right
- Responsive grid layout
- TestimonialScene with floating elements

#### Contact Section (`src/components/modules/homepage/ContactSection.tsx`)

- 3D scene with contact cards grid
- Three-column layout on desktop
- ContactScene with multiple animated objects

## Customization Guide

### Changing Colors

Edit individual scene files to customize colors:

```tsx
// Example from HeroScene.tsx
<FloatingIcosahedron speed={1} scale={1.5} color="#5227FF" />
<RotatingBox speed={0.8} scale={0.8} color="#FF9FFC" rotationSpeed={0.004} />
<FloatingParticles count={150} speed={0.6} color="#B19EEF" />
```

### Available Colors (Used)

- Purple: `#5227FF`, `#B19EEF`
- Pink: `#FF9FFC`, `#FF6B9D`
- Cyan: `#00D9FF`
- Yellow: `#FFB800`
- Green: `#00FF9F`

### Adjusting Animation Speed

- `speed` prop controls overall animation speed (0.5 - 2)
- `autoRotateSpeed` in OrbitControls controls camera rotation
- `rotationSpeed` in RotatingBox controls mesh rotation

### Scaling Objects

- `scale` prop controls object size (default 1)
- Adjust in each 3D component as needed

### Particle Count

```tsx
<FloatingParticles count={150} speed={0.6} color="#B19EEF" />
//                     ↑ change this number
```

## Performance Considerations

### Optimization Tips

1. **Reduce particle count** if experiencing lag:

   ```tsx
   <FloatingParticles count={75} /> // Instead of 150
   ```

2. **Lower scene resolution** in Canvas:

   ```tsx
   <Canvas gl={{ antialias: true, alpha: true, dpr: window.devicePixelRatio / 2 }}>
   ```

3. **Disable auto-rotation** on mobile:

   ```tsx
   <OrbitControls
     autoRotate={!isMobile}
     // ...
   />
   ```

4. **Use Suspense with reasonable fallback**:
   ```tsx
   <Canvas3D>
     <Suspense fallback={<LoadingSpinner />}>
       <HeroScene />
     </Suspense>
   </Canvas3D>
   ```

### Browser Support

- Chrome/Edge: Excellent
- Firefox: Excellent
- Safari: Good
- Mobile: Good (may need optimization)

## Switching Between 3D and Traditional Content

### Hero Section Example

The HeroSection includes a commented-out option to use a traditional profile image:

```tsx
{/* Option 1: 3D Animation (Currently active) */}
<Canvas3D height="h-96">
  <Suspense fallback={...}>
    <HeroScene />
  </Suspense>
</Canvas3D>

{/* Option 2: Traditional Profile Image (Uncomment to use)
<div className="relative">
  <div className="relative w-48 sm:w-64 md:w-80 lg:w-96...">
    <img src="/src/assets/image/19199517.jpg" alt="Profile" />
    ...
  </div>
</div>
*/}
```

To switch, uncomment Option 2 and remove/comment Option 1.

## Creating Custom 3D Objects

### Simple Example - Rotating Torus

```tsx
// Create new file: src/components/3D/RotatingTorus.tsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface RotatingTorusProps {
  speed?: number;
  scale?: number;
  color?: string;
}

export const RotatingTorus = ({
  speed = 1,
  scale = 1,
  color = "#FF6B9D",
}: RotatingTorusProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001 * speed;
      meshRef.current.rotation.y += 0.003 * speed;
    }
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <torusGeometry args={[1, 0.4, 8, 100]} />
      <meshPhongMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
};
```

Then use it in any scene:

```tsx
<RotatingTorus speed={1.2} scale={1} color="#FF6B9D" />
```

## Troubleshooting

### Issues & Solutions

1. **Canvas appears blank**
   - Check browser console for errors
   - Ensure Suspense fallback is visible
   - Verify Suspense wraps the 3D scene component

2. **Performance lag on mobile**
   - Reduce particle count
   - Lower canvas resolution
   - Disable auto-rotation
   - Use WebGL v1 instead of WebGL v2

3. **3D objects not visible**
   - Check camera position in Canvas
   - Verify object scale isn't too small
   - Check light intensity (should be > 0.5)

4. **White/blank Canvas**
   - Camera position might be inside object
   - Check PerspectiveCamera `position` prop
   - Verify geometry is being rendered (add console.log)

## File Structure

```
src/components/3D/
├── FloatingIcosahedron.tsx
├── RotatingBox.tsx
├── FloatingParticles.tsx
├── AnimatedSphere.tsx
├── Canvas3D.tsx
├── HeroScene.tsx
├── ServiceScene.tsx
├── FAQScene.tsx
├── TestimonialScene.tsx
└── ContactScene.tsx
```

## Next Steps

1. **Fine-tune colors** to match your brand
2. **Adjust animation speeds** for your preference
3. **Test on mobile** devices for performance
4. **Create custom 3D objects** for unique effects
5. **Add interactions** with mouse events if desired

## Resources

- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber/)
- [Three.js Documentation](https://threejs.org/docs/)
- [Drei Components](https://github.com/pmndrs/drei)

## Additional Enhancement Ideas

1. **Mouse tracking** - Make objects follow cursor
2. **Click interactions** - Add interactivity on click
3. **Scroll animations** - Sync 3D with page scroll
4. **Mobile fallbacks** - Use static images on low-end devices
5. **Custom geometries** - Create complex shapes from models
6. **Post-processing effects** - Add bloom, noise, distortion
7. **Physics simulation** - Add gravity and collisions
8. **Model loading** - Import GLTF/GLB models

Enjoy your enhanced 3D portfolio! 🎉
