#include<stdio.h>
#include<locale.h>  //IMPORTEI 2 BLIBLIOTECAS
#include <string.h>

#define PESSOAS 100
#define TAM_NOME 50  // CRIAÇÃO DE CONSTANTES PARA AJUDAR NAS MATRIZES
#define TAM_SENHA 10
#define TAM_CPF 20

/* ### Integrantes -- VORTEX MOTORS --- ###

Matheus Levy Afonso - R.A: 3022107569

Felipe Diassis da Silva - R.A: 3025105875

Gabriel Oliani Mariano - R.A: 3026100030

João Victor da Silva Ferreira dos santos - R.A: 3026103874

Julia Zezilia Rodrigues - R.A: 3026105026

Marcelo Floriano da Silva Filho - R.A: 3026101271

Matheus de Luca Pereira do Vale - R.A: 3026100090

Pedro Monteiro Savassa - R.A: 3026101384
 */

int main () {
	setlocale(LC_ALL, "Portuguese"); /*permite leitura dos ascentos -- está ligado com o lacale.h */


	char cpf [PESSOAS][TAM_CPF];
	char nome [PESSOAS][TAM_NOME];
	char nascimento [PESSOAS][20];  // DEFINIMOS MATRIZES E VETORES AQUI PARA AULIZAR NO CÓDIGO
	char email [PESSOAS][100];
	char endereco [PESSOAS][100];
	char senha[PESSOAS][TAM_SENHA];
	int opcao;
	int i = 0;  // CONTADOR PARA O SISTEMA GUARDAR MAIS DE UM CADASTRO


	do { //"do" faz com que execute o bloco primeiro antes do laço de repetição. No fim do código coloquei um "while" que execulta o bloco de cadastro caso,
		// o usuário deseje corrigir algum dado.
		printf("### Bem vindo(a) á VORTEX MOTORS ### \n");
		printf("\n Digite seu nome completo: ");
		fgets(nome [i], TAM_NOME , stdin);
		printf("\n Digite seu CPF (sem pontuação): ");
		fgets(cpf[i] , TAM_CPF , stdin);
		printf("\n Digite sua data de nascimento (ex: dd/mm/aaaa): ");  //AQUI, O CLIENTE INSERE AS INFORMAÇÕES NECESSÁRIAS PARA O CADASTRO, o [i] está
		fgets(nascimento[i] ,20,stdin);									  // guardando no sistema
		printf("\n Digite seu Email: ");
		fgets(email[i], 100 , stdin);
		printf("\n Crie uma senha: ");
		fgets(senha[i] , TAM_SENHA, stdin);


		char senhaLogin[10];
		int tentativas = 3;

		printf("\n ### CONFIRMAÇÃO DE SENHA ### \n");

		while (tentativas > 0) {

			printf("Digite sua senha para continuar: ");
			// limpa buffer
			fgets(senhaLogin, TAM_SENHA, stdin);

			if (strcmp(senha[i], senhaLogin) == 0) {
				printf("Acesso liberado!\n");
				break;
			} else {
				tentativas--;
				printf("\n Senha incorreta! Tentativas restantes: %d\n", tentativas);
			}
		}

		if (tentativas == 0) {
			printf(" Acesso bloqueado!\n");
			return 0;
		}

		printf("\n---------------------------------------------------\n");
		printf("\n ### DADOS INFORMADOS ### \n");
		printf( "Nome: %s" , nome[i]);
		printf( "CPF: %s" , cpf[i]);
		printf( "Nascimento: %s" , nascimento[i]);		// aqui, o sistema lê os dados informados
		printf( "Email: %s \n" , email[i]);


		i++; // usamos esse incremento para o sistema entender, que todo fim de cadastro, ele slave e passe para a próxima posição
		printf("\n---------------------------------------------------\n");
		printf("\n ### LISTA DE CLIENTES CADASTRADOS ### \n");
		for(int j = 0; j < i; j++) {
			printf("Cliente %d: \n", j + 1);
			printf("Nome: %s", nome[j]);
			printf("CPF: %s", cpf[j]);
			printf("Nascimento: %s", nascimento[j]);
			printf("Email: %s\n", email[j]);
		}

		printf("### Confirma os dados enviados? ###");
		printf("\n Digite 1 para sim, e 2 para Não:");  // O cliente tem a possibilidade de corrigir os dados do início se desejar, ou continuar.
		scanf("%d" , &opcao);

		if (opcao == 1) {
			printf("\n Dados enviados com sucesso! \n");

			int servicos; 		/* No html, quando o cliente clica em cadastrar depois de preencher todos os dados necessários, ele é encaminhado
							   para a página de serviços, onde ele vai escolher a sua necessidade*/
			printf("\n---------------------------------------------------\n");
			printf("\n ### Selecione o serviço que deseja solicitar ###\n");
			printf(" \n 1 - Troca de peças \n");
			printf(" \n 2 - Carregamento \n ");
			printf(" \n 3 - Entrega Rápida \n ");
			printf(" \n 4 - SAIR \n");
			scanf("%d" , &servicos);

			switch (servicos) { //usamos switch pois são varias opções, o que abre a possibilidade de deixar o código mais completo.

				case 1:

					int pecas;
					char modelo[50];
					char opcaoServ;
					char info[100];

					printf("\n---------------------------------------------------\n");
					printf("\n ### TROCA DE PEÇAS ### \n");
					printf("\n Qual modelo do veiculo:  ");
					getchar();
					fgets(modelo, 50 , stdin);
					printf("\n Deseja apenas compra da peça ou compra + Instalação: \n");
					printf("\n Digite A para a primera opcao ou B para a segunda: " );
					scanf(" %c" , &opcaoServ);

					if(opcaoServ == 'A' || opcaoServ == 'a') {
						printf("\n---------------------------------------------------\n"); //  usamos if para não ficar muitos switch no código, como é uma parte básica, ele vai ajudar também.
						printf("\n ### APENAS COMPRA ### \n"); // se o usuário digitar a letra A, seja maiuscula ou minuscula, ele entende, e execulta o bloco.
						// usei o incremento " || " que siginifica, se opcao for a OU A, execute. Se aplica também se a opção for b OU B.
						printf("\n Selecione a peça desejada: \n");
						printf("\n 1 - BATERIA");
						printf("\n 2 - MOTOR ELÉTRICO");
						printf("\n 3 - INVERSOR");
						printf("\n 4 - CARREGADOR");
						printf("\n 5 - SISTEMA DE FREIO");
						printf("\n 6 - SUSPENSÃO");
						printf("\n 7 - OUTRO");
						scanf("%d" , &pecas);

						switch(pecas) {
							case 1:
								printf("\n---------------------------------------------------\n");
								printf(" Você selecionou: BATERIA " );
								printf(" \n Digite observações necessárias: ");
								getchar();
								fgets(info , 100 , stdin); // uso o fgets, pois ele lê a linha toda, até se tiver espaço. O scanf, só lê o caractere.
								printf("Peça solicitada! Se direcione a loja mais próxima para reealizar a retirada");
								break;

							case 2:
								printf("\n---------------------------------------------------\n");
								printf(" Você selecionou: MOTOR ELÉTRICO " );
								printf(" \n Digite observações necessárias: ");
								getchar();
								fgets(info , 100 , stdin);
								printf("Peça solicitada! Se direcione a loja mais próxima para reealizar a retirada");
								break;

							case 3:
								printf("\n---------------------------------------------------\n");
								printf(" Você selecionou: INVERSOR " );
								printf(" \n Digite observações necessárias: ");
								getchar();
								fgets(info , 100 , stdin);
								printf("Peça solicitada! Se direcione a loja mais próxima para reealizar a retirada");
								break;

							case 4:
								printf("\n---------------------------------------------------\n");
								printf(" Você selecionou: CARREGADOR " );
								printf(" \n Digite observações necessárias: ");
								getchar();
								fgets(info , 100 , stdin);
								printf("Peça solicitada! Se direcione a loja mais próxima para reealizar a retirada");
								break;

							case 5:
								printf("\n---------------------------------------------------\n");
								printf(" Você selecionou: SISTEMA DE FREIO " );
								printf(" \n Digite observações necessárias: ");
								getchar();
								fgets(info , 100 , stdin);
								printf("Peça solicitada! Se direcione a loja mais próxima para reealizar a retirada");
								break;

							case 6:
								printf("\n---------------------------------------------------\n");
								printf(" Você selecionou: SUSPENSÃO " );
								printf(" \n Digite observações necessárias: ");
								getchar();
								fgets(info , 100 , stdin);
								printf("Peça solicitada! Se direcione a loja mais próxima para reealizar a retirada");
								break;

							case 7:
								printf("\n---------------------------------------------------\n");
								printf(" Você selecionou: OUTRO " );
								printf(" \n Digite a peça desejada e observações necessárias: ");
								getchar();
								fgets(info , 100 , stdin);
								printf("Peça solicitada! Se direcione a loja mais próxima para reealizar a retirada");
								break;
						}


					} else if(opcaoServ == 'B'|| opcaoServ == 'b') {

						int pecas2;
						printf("\n---------------------------------------------------\n");
						printf("\n ### COMPRA + INSTALAÇÃO \n ");

						printf("\n Selecione a peça desejada: \n");
						printf("\n 1 - BATERIA");
						printf("\n 2 - MOTOR ELÉTRICO");
						printf("\n 3 - INVERSOR");
						printf("\n 4 - CARREGADOR");
						printf("\n 5 - SISTEMA DE FREIO");
						printf("\n 6 - SUSPENSÃO");
						printf("\n 7 - OUTRO");
						scanf("%d" , &pecas2);

						switch(pecas2) {
							case 1:
								printf("\n---------------------------------------------------\n");
								printf(" Você selecionou: BATERIA " );
								printf(" \n Digite observações necessárias: ");
								getchar();
								fgets(info , 100 , stdin);
								printf("Peça solicitada! Se direcione a loja mais próxima para reealizar a retirada e instalação");
								break;

							case 2:
								printf("\n---------------------------------------------------\n");
								printf(" Você selecionou: MOTOR ELÉTRICO " );
								printf(" \n Digite observações necessárias: ");
								getchar();
								fgets(info , 100 , stdin);
								printf("Peça solicitada! Se direcione a loja mais próxima para reealizar a retirada e instalação");
								break;

							case 3:
								printf("\n---------------------------------------------------\n");
								printf(" Você selecionou: INVERSOR" );
								printf(" \n Digite observações necessárias: ");
								getchar();
								fgets(info , 100 , stdin);
								printf("Peça solicitada! Se direcione a loja mais próxima para reealizar a retirada e instalação");
								break;

							case 4:
								printf("\n---------------------------------------------------\n");
								printf(" Você selecionou: CARREGADOR " );
								printf(" \n Digite observações necessárias: ");
								getchar();
								fgets(info , 100 , stdin);
								printf("Peça solicitada! Se direcione a loja mais próxima para reealizar a retirada e instalação");
								break;

							case 5:
								printf("\n---------------------------------------------------\n");
								printf(" Você selecionou: SISTEMA DE FREIO " );
								printf(" \n Digite observações necessárias: ");
								getchar();
								fgets(info , 100 , stdin);
								printf("Peça solicitada! Se direcione a loja mais próxima para reealizar a retirada e instalação");
								break;

							case 6:
								printf("\n---------------------------------------------------\n");
								printf(" Você selecionou: SUSPENSÃO " );
								printf(" \n Digite observações necessárias: ");
								getchar();
								fgets(info , 100 , stdin);
								printf("Peça solicitada! Se direcione a loja mais próxima para reealizar a retirada e instalação");
								break;

							case 7:
								printf("\n---------------------------------------------------\n");
								printf(" Você selecionou: OUTRO " );
								printf(" \n Digite a peça e observações necessárias: ");
								getchar();
								fgets(info , 100 , stdin);
								printf("Peça solicitada! Se direcione a loja mais próxima para reealizar a retirada e instalação");
								break;
						}


					} else {
						printf("\n OPÇÃO INVÁLIDA ");  // o else está aqui, pois se o usuário não digitar as opções que foram apresentadas, apareça a mensagem de inválido.
					}
					break;



				case 2:

					char placa[10];
					char cep[20];
					printf("\n---------------------------------------------------\n");
					printf("\n ### CARREGAMENTO ### \n");

					printf("\n Digite seu CPF (sem pontuação): ");
					getchar();
					fgets(cpf[i] , TAM_CPF , stdin);
					/* aqui, é outra opção da empresa, onde o sistema solicita dados para que
					o usuário encontre o ponto de carregamento mais próximo de sua residência*/
					printf("\n Digite a placa do veículo: ");
					fgets(placa , 20 , stdin);

					printf("\n Digite se CEP para localizarmos o ponto de carregamento mais próximo: ");
					fgets(cep , 10 , stdin);

					printf("\n Ponto de carregamento localizado, será enviado o endereço ao seu email cadastrado. \n");
					break;

				case 3:

					int peca3;
					printf("\n---------------------------------------------------\n");
					printf(" \n ###  ENTREGA RÁPIDA ### \n");
					/* Mais uma opção,  onde o sistema solicita dados para que
					o usuário consiga receber peças de seu veículo em sua residência*/

					printf("\n Digite seu CPF (sem pontuação): ");
					getchar();
					fgets(cpf[i] , TAM_CPF , stdin);

					printf("\n Digite a placa do veículo: ");
					fgets(placa , 10 , stdin);

					printf("\n Digite se CEP para entrega: ");
					fgets(cep , 20, stdin);

					printf("Selecione a peça desejada: \n");
					printf("\n 1 - BATERIA");
					printf("\n 2 - MOTOR ELÉTRICO");
					printf("\n 3 - INVERSOR");
					printf("\n 4 - CARREGADOR");
					printf("\n 5 - SISTEMA DE FREIO");
					printf("\n 6 - SUPENSÃO");
					scanf("%d" , &peca3);

					switch(peca3) {
						case 1:
							printf("\n Entrega solicitada!, será enviado a confirmação ao seu email cadastrado. \n");
							break;

						case 2:
							printf("\n Entrega solicitada!, será enviado a confirmação ao seu email cadastrado. \n");
							break;

						case 3:
							printf("\n Entrega solicitada!, será enviado a confirmação ao seu email cadastrado. \n");
							break;

						case 4:
							printf("\n Entrega solicitada!, será enviado a confirmação ao seu email cadastrado. \n");
							break;

						case 5:
							printf("\n Entrega solicitada!, será enviado a confirmação ao seu email cadastrado. \n");
							break;

						case 6:
							printf("\n Entrega solicitada!, será enviado a confirmação ao seu email cadastrado. \n");
							break;
					}
					break;

				case 4:
					printf("\n---------------------------------------------------\n");
					printf("\n Sistema encerrado \n");


					break;


			}
		}

	} while (opcao == 2 && i < PESSOAS); // Se lá no começo, quando for perguntado se o usuário deseja corrigir os dados de cadastro, ele executa o bloco,
	// Solicitando novamente os dados.
}



/*
 O sistema desenvolvido em linguagem C simula o funcionamento de uma empresa de serviços automotivos elétricos (Vortex Motors),
 permitindo o cadastro de clientes e a escolha de serviços por meio de um menu interativo no console.


 -- CADASTRO DO USUÁRIO --
Ao iniciar o sistema, o usuário é solicitado a inserir:
Nome completo,
CPF,
Data de nascimento,
E-mail,
Senha;

logo depois de digitar a senha, o sistema passa por uma validação da mesma, onde o usuário
precisa digitar novamente para confirmaçõa. Tendo 3 tentativas. Caso erra, o sistema encerra,
caso acerte, o sistema prossegue.

Esses dados são armazenados em matrizes, onde cada posição representa um cliente.

Após o preenchimento:

O sistema exibe todos os dados digitados,
Em seguida, mostra a lista de clientes cadastrados até o momento (FOR).

 -- CONFIRMAÇÃO DOS DADOS INSERIDOS --

 O sistema pergunta:

Digite 1 ?  Para Confirmar
Digite 2 ?  Para Corrigir

 Se o usuário digitar 2:
O sistema volta ao início
Permite refazer o cadastro.
Os dados anteriores não são considerados válidos.

 Se o usuário digitar 1:
O sistema confirma o cadastro
Exibe mensagem de sucesso
Avança para o menu de serviços.


	-- MENU DE SERIVÇOS --

O usuário escolhe uma das opções:

1 - Troca de peças
2 - Carregamento
3 - Entrega rápida
5 - Sair

Essa escolha é tratada com switch.

 -- FUNCIONAMENTO DAS OPÇÕES --

 Opção 1 – Troca de peças


 O Sistema Solicita o modelo do veículo e pergunta:
Digite A para Apenas compra
Digite B para Compra + instalação

Se escolher A (apenas compra):
O usuário seleciona uma peça (menu de 1 a 5)
O sistema:
Identifica a peça escolhida
Solicita observações adicionais
Confirma o pedido

 Resultado:

"Peça solicitada, retirada na loja"

Se escolher B (compra + instalação):
O usuário escolhe a peça
O sistema:
Solicita observações
Confirma o pedido

Resultado:

"Peça + instalação agendada na loja"

Se digitar algo inválido:
O sistema exibe:

“OPÇÃO INVÁLIDA”



Opção 2 – Carregamento



O sistema solicita:

CPF,
Placa do veículo,
CEP,

Depois disso:

Simula a busca por um ponto de carregamento
Retorna mensagem de sucesso

Resultado:

"Endereço do ponto será enviado por e-mail"



Opção 3 – Entrega rápida



O sistema solicita:

CPF,
Placa do veículo,
CEP de entrega;

Depois:

O usuário escolhe a peça (menu de 1 a 5)

O sistema:

Processa o pedido
Confirma a entrega

Resultado:

"Entrega solicitada com confirmação por e-mail"



Opção 4 – Sair

se o usuário digitar a opção, o sistema imprime a mensagem:

"Sistema encerrado"


    -- Repetição do sistema --

O sistema utiliza:

do...while (opcao == 2 && i < PESSOAS);

Isso significa que
Se o usuário escolher corrigir (opção 2):
O cadastro recomeça
O sistema também limita o número de usuários cadastrados.


*/
