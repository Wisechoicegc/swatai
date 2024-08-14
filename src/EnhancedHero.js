import React, { useEffect, useState } from 'react';
import './EnhancedHero.css';
import SplineComponent from './SplineComponent'; // Import the Spline component

const EnhancedHero = () => {
  const [spotlightVisible, setSpotlightVisible] = useState(false);
  const [mountainsVisible, setMountainsVisible] = useState(true); // Initially show mountains
  const [splineVisible, setSplineVisible] = useState(false); // Initially hide the spline

  useEffect(() => {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    let particleCount = calculateParticleCount();

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.fadeDelay = Math.random() * 600 + 100;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() / 5 + 0.1;
        this.opacity = 1;
        this.fadeDelay = Math.random() * 600 + 100;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
      }

      update() {
        this.y -= this.speed;
        if (this.y < 0) {
          this.reset();
        }

        if (!this.fadingOut && Date.now() > this.fadeStart) {
          this.fadingOut = true;
        }

        if (this.fadingOut) {
          this.opacity -= 0.008;
          if (this.opacity <= 0) {
            this.reset();
          }
        }
      }

      draw() {
        ctx.fillStyle = `rgba(${255 - (Math.random() * 255 / 2)}, 255, 255, ${this.opacity})`;
        ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1);
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    function calculateParticleCount() {
      return Math.floor((canvas.width * canvas.height) / 6000);
    }

    function onResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particleCount = calculateParticleCount();
      initParticles();
    }

    window.addEventListener('resize', onResize);

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const toggleSpotlight = () => {
    setSpotlightVisible(!spotlightVisible);
    setMountainsVisible(!mountainsVisible); // Toggle mountains visibility
    setSplineVisible(!splineVisible); // Toggle spline visibility
  };

  return (
    <>
      <div className="header">
        <div className="mid-spot" onClick={toggleSpotlight}>
          <div className="circle">
            <span className="circle-text">W</span>
          </div>
        </div>
        <div className={`spotlight ${spotlightVisible ? 'visible' : ''}`}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <canvas id="particleCanvas"></canvas>

      {mountainsVisible && (
        <div className="mountains">
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}

      {splineVisible && (
        <div className="spline-container">
          <SplineComponent />
        </div>
      )}

      <div className="heroSubP">
        <p>Introducing</p>
      </div>
      <div className="hero">
        <div className="heroT">
          <h2>Wise Choice</h2>
          <h2>Wise Choice</h2>
        </div>
      </div>
      <p className="heroP">The World's Top Choice For Home Contracting.</p>

      <div className="hero-spacer"></div>

      <div className="content-section">
        <div className="content-acc">
          <div></div>
          <div></div>
        </div>
        <p className="subt">Revolutionary by design</p>
        <h3 className="title">Harness. Empower.<br />Unmatched Versatility.</h3>
        <p className="subp">We are the core of construction</p>
      </div>
    </>
  );
};

export default EnhancedHero;
