$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms

    createPlatform(450, 600, 100, 20, "purple");
    createBadPlatform(1000, 600, 100, 20, "purple");
    createPlatform(850, 500, 100, 20, "purple");
    createPlatform(650, 550, 100, 20, "purple");
    createPlatform(200, 700, 100, 20, "purple");
    createPlatform(1150, 500, 100, 20, "purple");
    createPlatform(1000, 390, 100, 20, "purple");
    createPlatform(800, 300, 100, 20, "purple");
    createPlatform(650, 250, 100, 20, "purple");

    // TODO 3 - Create Collectables
    createCollectable("steve", 500, 550);
    createCollectable("steve", 900, 450);
    createCollectable("steve", 700, 200);
    // TODO 4 - Create Cannons
    createCannon("top", 300, 1000);
    createCannon("right", 350, 3000);
    createCannon("right", 650, 2000);


    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
