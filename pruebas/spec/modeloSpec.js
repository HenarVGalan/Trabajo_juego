describe("Este absurdo juego", function() {
  var juego;


  beforeEach(function() {
    juego = crearJuego();
  });

  it("juego no debe ser null", function() {
    
    expect(juego).toBeDefined();


  });

  it ("juego debe tener un mundo",function(){
    expect(juego.mundo).toBeDefined();

  });

   it ("juego debe tener unas dimensiones",function(){
    expect(juego.mundo.ancho).toBeDefined();
    expect(juego.mundo.ancho).toBeGreaterThan(0);

    expect(juego.mundo.alto).toBeDefined();
    expect(juego.mundo.alto).toBeGreaterThan(0);

  });
  it ("juego debe tener una nave",function(){
    expect(juego.nave).toBeDefined();

  });
    })