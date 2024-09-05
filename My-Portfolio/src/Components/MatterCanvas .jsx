import React, { useContext, useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import 'matter-wrap';
import 'matter-attractors';
import { ThemeContext } from '../ContextAPI/ContextAPI';

const MatterCanvas = () => {
  const canvasRef = useRef(null);
  const {themeChange} = useContext(ThemeContext);
  const renderRef = useRef(null); // Add a ref to keep track of the Matter.js render instance
  
  useEffect(() => {
    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    Matter.use('matter-attractors');
    Matter.use('matter-wrap');

    const Engine = Matter.Engine,
      Events = Matter.Events,
      Runner = Matter.Runner,
      Render = Matter.Render,
      World = Matter.World,
      Body = Matter.Body,
      Mouse = Matter.Mouse,
      Common = Matter.Common,
      Bodies = Matter.Bodies;

    const engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.1;

    const render = Render.create({
      element: canvasRef.current,
      engine: engine,
      options: {
        showVelocity: false,
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: themeChange ? "#ecf0f3" : "#111111",
      },
    });

    renderRef.current = render; // Save the render instance in the ref for future access

    const runner = Runner.create();
    const world = engine.world;
    world.gravity.scale = 0;

    const attractiveBody = Bodies.circle(
      render.options.width / 2,
      render.options.height / 2,
      Math.max(dimensions.width / 4, dimensions.height / 4) / 13,
      {
        render: {
          fillStyle: `white`,
          strokeStyle: `rgb(0,0,0)`,
          lineWidth: 0,
        },
        isStatic: true,
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                y: (bodyA.position.y - bodyB.position.y) * 1e-6,
              };
            },
          ],
        },
      }
    );

    World.add(world, attractiveBody);

    for (let i = 0; i < 60; i++) {
      let x = Common.random(0, render.options.width);
      let y = Common.random(0, render.options.height);
      let s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
      let poligonNumber = Common.random(3, 6);
      let body = Bodies.polygon(x, y, poligonNumber, s, {
        mass: s / 80,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: '#FFFFFF',
          strokeStyle: `#DDDDDD`,
          lineWidth: 2,
        },
      });
      World.add(world, body);

      let r = Common.random(0, 4);
      let circle1 = Bodies.circle(x, y, Common.random(2, 8), {
        mass: 0.1,
        friction: 0,
        frictionAir: 0.01,
        render: {
          fillStyle: r > 0.3 ? `#f55684` : `rgb(240,240,240)`,
          strokeStyle: `#E9202E`,
          lineWidth: 2,
        },
      });
      World.add(world, circle1);

      let circle2 = Bodies.circle(x, y, Common.random(2, 20), {
        mass: 6,
        friction: 0,
        frictionAir: 0,
        render: {
          fillStyle: r > 0.3 ? `#4267F8` : `rgb(240,240,240)`,
          strokeStyle: `#3257E8`,
          lineWidth: 4,
        },
      });
      World.add(world, circle2);

      let circle3 = Bodies.circle(x, y, Common.random(2, 30), {
        mass: 0.2,
        friction: 0.6,
        frictionAir: 0.8,
        render: {
          fillStyle: `rgb(237,237,237)`,
          strokeStyle: `#FFFFFF`,
          lineWidth: 3,
        },
      });
      World.add(world, circle3);
    }

    const mouse = Mouse.create(render.canvas);

    Events.on(engine, 'afterUpdate', function () {
      if (!mouse.position.x) return;
      Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });

    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    const resizeHandler = () => {
      dimensions.width = window.innerWidth;
      dimensions.height = window.innerHeight;
      render.canvas.width = dimensions.width;
      render.canvas.height = dimensions.height;
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  // This useEffect updates the background when themeChange changes
  useEffect(() => {
    if (renderRef.current) {
      renderRef.current.options.background = themeChange ? "#ecf0f3" : "#111111";
    }
  }, [themeChange]);

  return (
    <div
      ref={canvasRef}
      className='canvas inset-0'
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        overflow: 'hidden'
      }}
    />
  );
};

export default MatterCanvas;
