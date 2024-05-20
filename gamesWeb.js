function movimenta NaveTeclado(tecla) {
    ctx.clearRect(x, 700-160, 160, 160); if (tecla == 37) { // Seta para esquerda
    x-= 50;
    x = Math.max(0, x);
    } else if (tecla == 39) { // Seta para direita
    × += 50;
    × = Math.min(canvas.width - 160, x);
    } else if (tecla = = 32) { // espaço
    disparaTiro(x+80, 700-160);
    }
    ctx.drawlmage(nave, x, 700-160);
    }
    function disparaTiro (col, lin) {
    if (lin > -6) {
    ctx.clearRect(col, lin, 2, 5); ctx.filIRect(col, lin-6, 2, 5);
    }
    setTimeout(function() { disparaTiro(col, lin-6) }, 1);
    function colldlut) (
        var largura = nave.width;
        var altura = nave.height;
        retum («Nave + largura) > xinimigo 6.6
        XNave < (xInimigo + largura) 6.6
        (yNave + altura) > yinimigo 66
        yNave < (yinimigo + altura)
         }