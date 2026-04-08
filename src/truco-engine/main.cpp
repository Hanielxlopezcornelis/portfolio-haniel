#include <iostream>
#include <string>
#include "Carta.h"
#include "EnumsTruco.h"
#include "Cartas.h"
#include "JugadorTruco.h"
#include "BotJugadorTruco.h"
#include "ContextoJuegoTruco.h"
#include "ManoTruco.h"

using std::string;
using std::cout;
using std::cin;
using std::endl;
using namespace UndavTrucoCartas;
using namespace UndavTrucoCarta;
using namespace UndavTrucoBotJugadorTruco;
using namespace UndavTrucoJugadorTruco;
using namespace UndavTrucoContextoJuegoTruco;
using namespace UndavTrucoManoTruco;
using namespace UndavTrucoPersona;

int CartaAJugar (JugadorTruco* jugador);
void MostrarCartas(JugadorTruco* jugador);
void Jugar(Cartas* cartasJugador1, Cartas* cartasJugador2);
void RepartirCartas(Cartas* mazoCartas, Cartas* cartasJugador1, Cartas* cartasJugador2);
void MostrarResultadoManoTruco(const ManoTruco * mano, TipoResultadoManoTruco resultado);
void MostrarTipoResultado(TipoResultadoManoTruco resultado);
void MostrarCarta(const Carta* carta);
void MostrarResultadoManoTruco(const ManoTruco * mano, TipoResultadoManoTruco resultado);

int main(int argc, char** argv) {
	Cartas* mazoCartas = CrearMazoTruco();
	Cartas* cartasJugador1 = CrearMazoVacio();
	Cartas* cartasJugador2 = CrearMazoVacio();
	RepartirCartas(mazoCartas, cartasJugador1, cartasJugador2);
	Jugar(cartasJugador1, cartasJugador2);
	DestruirCartas(mazoCartas);
	DestruirCartas(cartasJugador1);
	DestruirCartas(cartasJugador2);
	return 0;
}

void RepartirCartas(Cartas* mazoCartas, Cartas* cartasJugador1, Cartas* cartasJugador2){
	Mezclar(mazoCartas);
	for(int i=0; i<3;++i){
		AgregarComoUltimaCarta(cartasJugador1, QuitarPrimeraCarta(mazoCartas));
		AgregarComoUltimaCarta(cartasJugador2, QuitarPrimeraCarta(mazoCartas));
	}
}

void Jugar(Cartas* cartasJugador1, Cartas* cartasJugador2){
    char apodo[10];
    cout<<"Escriba su apodo:";
    cin>>apodo;
    bool trucoCantado = false;
    bool trucoAceptado = false;
	JugadorTruco* jugador1 = CrearJugadorTruco(apodo, cartasJugador1);
	BotJugadorTruco* jugador2 = CrearBot(CrearJugadorTruco("truquini", cartasJugador2), Conservador);
	ContextoJuegoTruco* contextoJuego = CrearContextoJuegoTruco(jugador1, ObtenerJugadorTruco(jugador2));
	bool juegaPrimeroJugador1 = true;
    while (!JuegoTerminado(contextoJuego)) {
        string decision;
        cout << "\nTus cartas actuales:\n";
        MostrarCartas(jugador1);

        if (!trucoCantado) {
            cout << "Se canta TRUCO? (s/n): ";
            cin >> decision;

            if (decision == "s" || decision == "S") {
                // El HUMANO canta Truco
                trucoCantado = true;
                if (ResponderTruco(jugador2, contextoJuego)) {
                    trucoAceptado = true;
                    cout << "La maquina acepta el TRUCO\n";
                } else {
                    cout << "La maquina rechazo el TRUCO\nGANADOR "<<ObtenerApodo(ObtenerPersona(jugador1))<<"\n";
                    return;
                }
            } else {
                // Si el humano dice que no, vemos si el BOT quiere cantar Truco
                if (CantarTruco(jugador2, contextoJuego)) {
                    cout << "La maquina canta TRUCO. ¿Aceptar? (QUIERO / NO QUIERO): ";
                    cin >> decision;

                    while (decision != "QUIERO" && decision != "NO QUIERO") {
                        cout << "Respuesta invalida. Escribí QUIERO o NO QUIERO: ";
                        cin >> decision;
                    }

                    if (decision == "NO QUIERO") {
                        cout << "GANADOR: truquini\n";
                        return;
                    } else {
                        trucoCantado = true;
                        trucoAceptado = true;
                        cout << "Aceptaste el TRUCO!\n";
                    }
                }
            }
        }

        int NumeroCartaAJugar = CartaAJugar(jugador1);
		Carta* cartaJugador1 = JugarCarta(jugador1, (TipoCartaJugador)NumeroCartaAJugar);
		Carta* cartaBot = (juegaPrimeroJugador1) ? JugarCarta(jugador2, contextoJuego, cartaJugador1) : JugarCarta(jugador2, contextoJuego, NULL);
		ManoTruco* mano = CrearManoTruco(cartaJugador1, cartaBot);
		TipoResultadoManoTruco resultadoManoTruco = Jugar(mano);
		MostrarResultadoManoTruco(mano, resultadoManoTruco);
		AgregarResultadoManoTruco(contextoJuego, resultadoManoTruco);
		juegaPrimeroJugador1 = (resultadoManoTruco == GANO_JUGADOR1 || resultadoManoTruco == EMPATE);
		DestruirManoTruco(mano);
	}
	if (ObtenerCantidadManosGanadasJugador1(contextoJuego) == 2){
        cout<<"GANADOR: "<<ObtenerApodo(ObtenerPersona(jugador1))<<" (Jugador 1)"<<endl;
	}
	else if (ObtenerCantidadManosGanadasJugador2(contextoJuego) == 2){
        cout<<" GANADOR: truquini (Jugador 2)"<<endl;
	}
	else{
        cout<<"JUEGO EMPATADO"<<endl;
	}
}

void MostrarResultadoManoTruco(const ManoTruco * mano, TipoResultadoManoTruco resultado){
	Carta* carta1 = ObtenerCartaJugador1(mano);
	Carta* carta2 = ObtenerCartaJugador2(mano);
	MostrarCarta(carta1);
	cout<<" VS ";
	MostrarCarta(carta2);
	cout<<" GANO: ";
	MostrarTipoResultado(resultado);
	cout<<endl;
}

void MostrarTipoResultado(TipoResultadoManoTruco resultado){
	switch(resultado){
		case EMPATE:
			cout<<"Empate";
			break;
		case GANO_JUGADOR1:
			cout<<"Jugador 1";
			break;
		case GANO_JUGADOR2:
			cout<<"Jugador 2";
			break;
		default:
			break;
	}
	cout<<endl;
}

void MostrarCarta(const Carta* carta){
	cout<<ObtenerValor(carta)<<ObtenerStringPalo(carta);
}

void MostrarCartas(JugadorTruco* jugador){
    for (int i = 0; i < 3; ++i) {
        Carta* carta = ObtenerCarta(jugador, (TipoCartaJugador)(i));
        cout<<i+1<<": ";
        if (carta != nullptr) {
            MostrarCarta(carta);
        }
        else {
            cout<<"[jugada]";
        }
        cout<<", ";
    }
    cout<<endl<<endl;
    return;
}

int CartaAJugar (JugadorTruco* jugador){
    int NumeroCartaAJugar;
    cout<<"Cartas en mano: ";
    MostrarCartas(jugador);
    cout<<endl;
    cout<<"seleccione del 1 al 3 la carta a jugar: ";
    cin>>NumeroCartaAJugar;
    while (NumeroCartaAJugar < 1 || NumeroCartaAJugar > 3 || ObtenerCarta(jugador,(TipoCartaJugador)(NumeroCartaAJugar-1)) == nullptr){
        cout<<"carta invalida, elija otra"<<endl;
        MostrarCartas(jugador);
        cout<<endl;
        cout<<"seleccione del 1 al 3 la carta a jugar: ";
        cin>>NumeroCartaAJugar;
    }
    NumeroCartaAJugar--;
    return NumeroCartaAJugar;
}
