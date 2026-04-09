**UNIVERSIDADE NOVE DE JULHO**  
**DIRETORIA DOS CURSOS DE INFORMÁTICA**

 **FELIPE DIASSIS DA SILVA \- RA 3025105875**  
**GABRIEL OLIANI MARIANO \- RA 3026100030**  
**JOÃO VICTOR DA SILVA FERREIRA DOS SANTOS \- RA 3026103874**  
**JULIA ZEZILIA RODRIGUES \- RA 3026105026**  
**MARCELO FLORIANO DA SILVA FILHO \- RA 3026101271**  
**MATHEUS DE LUCA PEREIRA DO VALE \- RA 3026100090**  
**MATHEUS LEVY AFONSO \- RA 3022107569**  
**MYLLENA VITORIA DOS SANTOS DIONISIO \- RA 3026102899**  
**PEDRO MONTEIRO SAVASSA \- RA 3026101384**  
**RENAN VITOR MARCOLINO DE SOUSA \- RA 3126102134**

**PROJETO DE EXTENSÃO EM DESENVOLVIMENTO DE SOFTWARE:**  
**VÓRTEX MOTORS**

**SÃO PAULO**   
**2026**  
 **FELIPE DIASSIS DA SILVA \- RA 3025105875**  
**GABRIEL OLIANI MARIANO \- RA 3026100030**  
**JOÃO VICTOR DA SILVA FERREIRA DOS SANTOS \- RA 3026103874**  
**JULIA ZEZILIA RODRIGUES \- RA 3026105026**  
**MARCELO FLORIANO DA SILVA FILHO \- RA 3026101271**  
**MATHEUS DE LUCA PEREIRA DO VALE \- RA 3026100090**  
**MATHEUS LEVY AFONSO \- RA 3022107569**  
**MYLLENA VITORIA DOS SANTOS DIONISIO \- RA 3026102899**  
**PEDRO MONTEIRO SAVASSA \- RA 3026101384**  
**RENAN VITOR MARCOLINO DE SOUSA \- RA 3126102134**

**PROJETO DE EXTENSÃO EM DESENVOLVIMENTO DE SOFTWARE:**   
**VÓRTEX MOTORS**

Trabalho apresentado à Universidade Nove de Julho, UNINOVE, em cumprimento parcial às exigências da disciplina de PROJETO DE EXTENSÃO EM DESENVOLVIMENTO DE SOFTWARE, sob orientação da Prof. **Priscilla Cunha**

**SÃO PAULO**  
**2026**

**RESUMO**

	Desenvolver um sistema web para comercialização de veículos e paças automotivas, com o propósito de facilitar a divulgação, busca e negociação do mesmo, utilizando tecnologias como HTML, CSS, linguagem C e SQL, garantindo uma plataforma funcional, organizada e eficiente tanto para usuários quanto para administradores do sistema.

**Palavras-chave:** Carro, Compra de veículos, Carros esportivos, Peças de carro

**SUMÁRIO**

[1\.	OBJETIVO DO PROJETO	5](#objetivo-do-projeto)  
[2\.	DEFINIÇÃO DA EQUIPE, DIVISÃO DE PAPÉIS E TAREFAS, CRONOGRAMA DE DESENVOLVIMENTO	6](#definição-da-equipe,-divisão-de-papéis-e-tarefas,-cronograma-de-desenvolvimento)  
[3\.	ESTRUTURA ORGANIZACIONAL	8](#estrutura-organizacional)  
[4\.	DESCRIÇÃO DO SITE	10](#descrição-do-site)  
[5\.	DESCRIÇÃO DO SISTEMA (LINGUAGEM C)	13](#descrição-do-sistema-\(linguagem-c\))  
[6\.	MODELAGEM E DESCRIÇÃO DO BANCO DE DADOS	16](#modelagem-e-descrição-do-banco-de-dados)  
[7\.	CONCLUSÃO	19](#conclusão)  
[8\.	ANEXOS	20](#anexos)  
[9\.	REFERÊNCIAS BIBLIOGRÁFICAS	21](#referências-bibliográficas)

1. # **OBJETIVO DO PROJETO** {#objetivo-do-projeto}

O presente projeto consiste no desenvolvimento de um sistema web voltado a comercialização de veículos peças para veículos, com o objetivo de facilitar a divulgação, busca e gerenciamento do mesmo. O site é desenvolvido utilizando HTML e CSS, proporcionando uma interface simples e intuitiva ao usuário.

	A lógica do sistema é implementada em linguagem C, garantindo o funcionamento das operações, enquanto o armazenamento de dados é realizado por meio de um banco de dados em SQL, estruturado para assegurar integridade e eficiência das informações. O sistema permite cadastro, consulta, edição e exclusão de veículos, além de funcionalidades de busca e filtragem.

O projeto é organizado com base em um cronograma e estrutura organizacional definidos, integrando diferentes tecnologias para oferecer uma solução funcional e prática, aplicando conhecimentos de desenvolvimento de sistemas e banco de dados.

2. # **DEFINIÇÃO DA EQUIPE, DIVISÃO DE PAPÉIS E TAREFAS, CRONOGRAMA DE DESENVOLVIMENTO** {#definição-da-equipe,-divisão-de-papéis-e-tarefas,-cronograma-de-desenvolvimento}

| Membro | Função | Responsabilidades | Linguagens ou métodos |
| :---: | :---: | :---: | :---: |
| **Matheus Levy** | Scrum Master | Planejamento, cronograma e controle do projeto | Scrum |
| **Myllena** | Product Owner | Definir requisitos e funcionalidades   a serem desenvolvidas | Scrum |
| **Pedro, João** | Desenvolvedor Front-End | Criação da interface do site | HTML e CSS |
| **Felipe, Marcelo** | Desenvolvedor Back-End | Implementação lógica do sistema | C |
| **Renan, Gabriel, Julia** | Desenvolvedor Banco de dados | Modelagem e implementação do banco de dados | SQL |
| **Matheus de Luca** | Analista de sistemas | Levantar requisitos, documentar o sistema e alinhar necessidades | Scrum |

|  | ATIVIDADES / DATA | 01/03 | 08/03 | 15/03 | 22/03 | 29/03 | 05/04 | 12/04 | 19/04 | 26/04 | 01/05 | 08/05 | 15/05 | 22/05 | 29/05 |
| :---- | :---- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **1** | **Levantamento de requisitos** | X | X |  |  |  |  |  |  |  |  |  |  |  |  |
| **2** | **Planejamento do projeto** | X |  |  |  |  |  |  |  |  |  |  |  |  |  |
| **3** | **Modelagem do banco de dados** |  | X | X |  |  |  |  |  |  |  |  |  |  |  |
| **4** | **Estrutura do sistema em C** |  | X | X |  |  |  |  |  |  |  |  |  |  |  |
| **5** | **Desenvolvimento Front-End** |  |  | X | X | X | X |  |  |  |  |  |  |  |  |
| **6** | **Integração sistema \+ banco** |  |  |  |  | X | X | X |  |  |  |  |  |  |  |
| **7** | **Implementação de funcionalidades** |  |  |  | X | X | X | X | X |  |  |  |  |  |  |
| **8** | **Testes e validações** |  |  |  |  | X | X | X | X | X | X | X | X | X |  |
| **9** | **Ajustes e melhorias** |  |  |  |  |  |  |  | X | X | X | X | X | X |  |
| **10** | **Documentação final** |  |  |  |  |  | X | X | X | X |  |  |  |  |  |
| **11** | **Entrega do projeto** |  |  |  |  |  |  |  |  |  |  |  |  |  | X |

3. # **ESTRUTURA ORGANIZACIONAL** {#estrutura-organizacional}

No seu projeto, a parte de empresa e estrutura organizacional deve dar um panorama rápido e claro de:

* Descrição da empresa						  
* Missão da empresa			 				  
* Visão da empresa							  
* Valores da empresa 						  
* Estrutura organizacional da empresa 				

**Sobre a Empresa**

A Empresa XPTO é uma empresa fictícia criada para este projeto, especializada em soluções de gestão e análise de dados empresariais. Seu objetivo é ajudar pequenas e médias empresas a transformar dados em informações estratégicas para aumentar eficiência, melhorar o controle financeiro e ampliar presença digital.

**Principais áreas de atuação:**

* Ciência de Dados e Business Intelligence.  
* Consultoria em Controle Financeiro para TI.  
* Marketing Digital e Gestão de Redes Sociais.  
* Treinamento e desenvolvimento de equipes (People Management Skills).  
* Consultoria em Estratégia Empresarial e Sustentabilidade.

**Estrutura Organizacional**

A empresa adota uma estrutura matricial para permitir integração entre áreas técnicas e de gestão.

Organograma proposto: 

* Descrever qual organograma está utilizando.  
* Mostre o organograma em formato visual (caixas e setas).  
* Descreva em 1 a 2 frases a função de cada cargo.  
* Se o projeto for em grupo, associe cada função a um integrante da equipe.

**(Alterar o texto – incluir o texto de acordo com o projeto da equipe)**

4. # **DESCRIÇÃO DO SITE** {#descrição-do-site}

Neste item, a equipe deverá desenvolver um site institucional que represente a empresa criada no capítulo anterior. O objetivo desta etapa é aplicar os conhecimentos da disciplina Desenvolvimento para Internet, utilizando HTML e CSS para estruturar e estilizar páginas web.  
O site deverá apresentar informações claras sobre a empresa, seus produtos ou serviços e formas de contato, simulando a presença digital de um negócio real.  
O desenvolvimento deverá contemplar **estruturação adequada das páginas, organização do conteúdo e aplicação de estilos utilizando CSS**.

Para o desenvolvimento do site deverão ser utilizadas exclusivamente as seguintes tecnologias:

* **HTML** para estruturação das páginas  
* **CSS** para estilização e layout

Não é obrigatório o uso de **JavaScript**, sendo o foco desta etapa a construção do **front-end estático**, mas o uso do mesmo será considerado um plus no projeto.  
O projeto deverá ser versionado e disponibilizado em um repositório no **GitHub**, cujo link deverá ser incluído aqui no trabalho escrito.

O site deverá possuir **no mínimo 5 páginas**, devidamente interligadas por meio de um **menu de navegação**.  
**Página Inicial (Home)**  
A página inicial deverá apresentar uma visão geral da empresa e deverá conter, no mínimo:

* Nome da empresa  
* Logotipo (pode ser criado pelo grupo ou ilustrativo)  
* Breve apresentação da empresa  
* Destaque dos principais produtos ou serviços  
* Menu de navegação para as demais páginas do site  
* Rodapé com informações básicas

**Página "Sobre a Empresa"**  
Esta página deverá apresentar informações institucionais sobre a empresa, incluindo:

* História ou contexto de criação da empresa  
* Missão, visão e valores  
* Área de atuação  
* Diferenciais da empresa

**Página de Produtos ou Serviços**  
Nesta página deverão ser apresentados os **principais produtos ou serviços oferecidos pela empresa**.  
A página deverá conter:

* Lista ou catálogo de produtos/serviços  
* Nome de cada produto/serviço  
* Breve descrição  
* Imagem ilustrativa (opcional, mas recomendado)

A organização pode ser feita em **cards, listas ou seções**, conforme o layout escolhido pelo grupo.

**Página de Contato**  
A página de contato deverá conter informações que permitam que um cliente entre em contato com a empresa.  
Deverá incluir, no mínimo:

* Telefone ou WhatsApp  
* E-mail  
* Endereço (real ou fictício)  
* Formulário de contato contendo:  
  * Nome  
  * E-mail  
  * Mensagem

**Página de Portfólio, Clientes ou Projetos (ou equivalente)**  
Esta página deverá apresentar exemplos de trabalhos realizados, clientes atendidos ou projetos desenvolvidos pela empresa.  
Pode incluir:

* Breve descrição de projetos  
* Imagens ilustrativas  
* Depoimentos fictícios de clientes (opcional)

O objetivo é demonstrar **credibilidade e atuação da empresa**.

**Requisitos de Estrutura e Organização**  
O site deverá atender aos seguintes requisitos técnicos:

* Utilização correta das **tags HTML**  
* Separação entre **estrutura (HTML)** e **estilo (CSS)**  
* Utilização de **arquivo CSS externo**  
* Presença de **menu de navegação funcional entre as páginas**  
* Organização adequada de **pastas e arquivos**  
* Estrutura visual minimamente organizada  
    
  **Aqui no trabalho escrito, o grupo deverá apresentar:**  
* Breve explicação do objetivo do site  
* Estrutura de páginas desenvolvidas  
* Descrição de cada página do site  
* Prints (capturas de tela) das páginas desenvolvidas  
* Explicação das principais decisões de layout e organização  
* Link da pasta do site no GitHub.  
* Link do Pitch (explicação no capítulo 6\)

5. # **DESCRIÇÃO DO SISTEMA (LINGUAGEM C)** {#descrição-do-sistema-(linguagem-c)}

Nesta etapa do projeto, a equipe deverá desenvolver um **programa em linguagem C** que simule alguma funcionalidade relacionada à empresa criada pelo grupo.  
O objetivo desta atividade é aplicar, de forma prática, os conceitos trabalhados na disciplina de **Algoritmos e Práticas de Programação**, incluindo manipulação de variáveis, operadores, estruturas de decisão, estruturas de repetição e estruturas de dados como vetores e matrizes.  
O programa deverá ser desenvolvido em linguagem **C** e deverá ser executado em **modo console**.

O programa deverá representar **uma funcionalidade do negócio da empresa desenvolvida pelo grupo**, simulando alguma operação que poderia existir no funcionamento da empresa.  
Exemplos:

* Cadastro de clientes  
* Cadastro de produtos  
* Controle de pedidos  
* Sistema simples de agendamento  
* Controle de estoque  
* Registro de vendas  
* Cadastro de serviços  
* Reajuste de preços

O grupo poderá definir a funcionalidade mais adequada de acordo com o tipo de empresa criada.

O programa desenvolvido deverá conter obrigatoriamente os seguintes elementos de lógica de programação:  
**Uso de Variáveis e Constantes**  
O sistema deverá utilizar variáveis para armazenamento de dados e, quando pertinente, constantes para representar valores fixos utilizados no programa.

**Uso de Operadores**  
O programa deverá utilizar operadores aritméticos, relacionais e lógicos para realização de cálculos e validações.

**Estruturas de Decisão**  
O sistema deverá utilizar **estruturas condicionais**, tais como:

* if  
* else  
* switch (opcional)

Essas estruturas deverão ser utilizadas para tomada de decisões dentro do programa.

**Estruturas de Repetição**  
O programa deverá utilizar **estruturas de repetição**, tais como:

* for  
* while  
* do...while

Essas estruturas deverão ser utilizadas para permitir execução repetida de operações no sistema.

**Uso de Vetores ou Matrizes**  
O sistema deverá utilizar **vetores ou matrizes** para armazenamento de conjuntos de dados.  
Exemplos de utilização:

* Lista de clientes  
* Lista de produtos  
* Registro de pedidos  
* Agenda de serviços

**Menu Interativo**  
O programa deverá possuir um **menu principal interativo**, permitindo que o usuário selecione diferentes funcionalidades do sistema.  
Exemplo de estrutura de menu:  
1 \- Cadastrar cliente  
2 \- Listar clientes  
3 \- Registrar venda  
4 \- Consultar produtos  
0 \- Sair  
O menu deverá permanecer em execução até que o usuário escolha a opção de saída.

O código desenvolvido deverá apresentar:

* Identificação do grupo no início do código  
* Comentários explicando as principais partes do programa  
* Organização adequada das variáveis e estruturas utilizadas  
* Identação adequada para facilitar a leitura do código

  **Aqui no trabalho escrito, o grupo deverá apresentar:**

* Descrição da funcionalidade escolhida para o programa  
* Explicação do funcionamento do sistema  
* Estrutura geral do algoritmo desenvolvido  
* Prints do código e da execução do programa   
* Link da pasta do site no GitHub.  
* Link do Pitch (explicação no capítulo 6\)

6. # **MODELAGEM E DESCRIÇÃO DO BANCO DE DADOS** {#modelagem-e-descrição-do-banco-de-dados}

Nesta etapa do projeto, a equipe deverá realizar a **modelagem e implementação de um banco de dados** que represente as informações necessárias para o funcionamento da empresa criada pelo grupo.

O objetivo desta atividade é aplicar os conceitos estudados nas disciplinas de **Modelagem de Banco de Dados** e **Desenvolvimento em Banco de Dados**, contemplando desde a etapa de modelagem conceitual até a implementação do banco.

Embora o banco de dados represente informações da empresa criada no projeto, **não será necessário integrar o banco de dados ao site ou ao programa desenvolvido em lógica de programação**, pois as disciplinas são trabalhadas de forma independente neste momento.

Inicialmente, o grupo deverá desenvolver o **Diagrama Entidade-Relacionamento (DER)** representando as principais entidades e relacionamentos necessários para o funcionamento do sistema da empresa.  
O modelo deverá incluir, no mínimo:

* **5 entidades (tabelas)**  
* Atributos de cada entidade  
* Identificação das **chaves primárias**  
* Identificação das **chaves estrangeiras**  
* Representação dos **relacionamentos entre as entidades**  
* Cardinalidades dos relacionamentos

As entidades deverão estar relacionadas ao contexto da empresa criada pelo grupo.  
Exemplos de entidades que podem aparecer no modelo (dependendo do tipo de empresa):

* Clientes  
* Produtos  
* Pedidos  
* Funcionários  
* Serviços  
* Fornecedores  
* Pagamentos

O diagrama deverá ser apresentado de forma clara e organizada.

Após a modelagem conceitual, o grupo deverá implementar o banco de dados SQL utilizando o sistema gerenciador de banco de dados que achar mais adequado (Oracle, SQLServer, MySQL, LiveSQL, FreeSQL, etc.).

A implementação deverá incluir:

* Criação das tabelas  
* Definição de chaves primárias  
* Definição de chaves estrangeiras  
* Definição de tipos de dados apropriados  
* Criação dos relacionamentos entre as tabelas

Essa implementação deverá ser realizada por meio de **scripts SQL**.

Além da criação da estrutura do banco, o grupo deverá inserir **dados de exemplo** nas tabelas para demonstrar o funcionamento do banco de dados.

Deverão ser apresentados:

* Comandos de **inserção de dados (INSERT)**  
* Consultas utilizando **SELECT**  
* Pelo menos **3 consultas relevantes**, por exemplo:  
  * listagem de clientes  
  * consulta de produtos ou serviços  
  * consulta de pedidos ou registros

Essas consultas devem demonstrar o relacionamento entre tabelas quando aplicável.

**Aqui no trabalho escrito, o grupo deverá apresentar:**

* Explicação do contexto do banco de dados criado  
* O Diagrama Entidade-Relacionamento (DER)  
* Explicação das entidades e seus atributos  
* Explicação dos relacionamentos entre as tabelas  
* Scripts SQL utilizados na criação das tabelas  
* Exemplos de inserção de dados  
* Exemplos de consultas realizadas  
* Capturas de tela da execução no banco de dados  
* Link da pasta do site no GitHub

  O repositório deverá conter:

  * Scripts de criação do banco de dados  
  * Scripts de inserção de dados  
  * Scripts de consultas  
* Link do Pitch

Além disso, cada equipe deverá gravar um **vídeo de apresentação (pitch)** demonstrando uma visão geral da empresa criada e das soluções desenvolvidas nas diferentes disciplinas, demonstrando a aplicação prática dos conteúdos estudados. O vídeo deverá ser publicado na plataforma **YouTube**, configurado como **não listado ou restrito**, de forma que apenas pessoas com o link possam visualizá-lo.  
O vídeo deverá ter **duração de aproximadamente 10 minutos** e deverá apresentar de forma clara e objetiva os principais aspectos do projeto.  
Durante o pitch, recomenda-se que a equipe apresente:

* Apresentação da empresa;  
* Apresentação do site;  
* Apresentação do programa em linguagem C;  
* Apresentação do DER e da implementação do banco de dados;  
* Explicação geral sobre como a equipe estruturou e desenvolveu o projeto.

O objetivo do vídeo é permitir a **demonstração prática do sistema**, evidenciando o funcionamento das funcionalidades e a compreensão da equipe sobre o projeto desenvolvido.

7. # **CONCLUSÃO** {#conclusão}

Segundo Severino (2002 p. 83), "a conclusão é a síntese para a qual caminha o trabalho. Será breve e visará recapitular sinteticamente os resultados" e completa dizendo que "o autor manifestará seu ponto de vista sobre os resultados obtidos, sobre o alcance dos mesmos". 

8. # **ANEXOS** {#anexos}

Este item só é incluído caso haja necessidade de juntar ao projeto algum documento que venha dar algum tipo de esclarecimento ao texto. A inclusão, ou não, fica a critério do autor do projeto.

Itens que podemos anexar:

* *Curriculum Vitae* dos principais sócios/gerentes e referências profissionais.

* Atas de todas as reuniões/orientações.

* Se houver estudos de mercado, se houver publicações pertinentes.

9. #  **REFERÊNCIAS BIBLIOGRÁFICAS** {#referências-bibliográficas}

ANJOS, Mercia Leal dos. **Site Administradores. Planejamento estratégico**. Disponível em: \<http://www.administradores.com.br/mobile/artigos/marketing /planejamento-estrategico/55734/\>. Acessado em 22 de maio de 2017\.

ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 6023: Informação e documentação**: referências: elaboração. Rio de Janeiro, 2002. 

\_\_\_\_\_\_\_\_\_\_\_. **NBR 6028: Informação e documentação: resumo: apresentação**. Rio de Janeiro, 2003. 

CHIAVENATO, Idalberto. **Empreendedorismo: dando asas ao espírito empreendedor**. São Paulo: Saraiva, 2005\.

DEITEL, Harvey M. Sistemas operacionais. São Paulo: Pearson Prentice Hall, 2008.

DORNELAS, José Carlos Assis. **Empreendedorismo: Transformando ideias em negócios**. 3ª Edição. Rio de Janeiro: Elsevier, 2008\.

DORNELAS, José Carlos Assis. Site Jose Dornelas. **Artigos de PN Como Fazer \- Descrição da Empresa**. Disponível em: \<http://www.josedornelas.com.br/wp-content/uploads/2014/02/Artigos-de-PN-Como-Fazer-Descri%C3%A7ao-da-empresa.pdf\>. Acessado em 03 de agosto de 2015\.

LAKATOS, Eva Maria; MARCONI, Marina de Andrade. **Metodologia do trabalho científico: procedimentos básicos; pesquisa bibliográfica, projeto e relatórios; publicações e trabalhos científicos**. 5\. ed. São Paulo: Atlas, 2001\.

LAKATOS, Eva Maria; MARCONI, Marina de Andrade. **Fundamentos de metodologia científica**. 6\. ed. São Paulo: Atlas, 2008\.

NEUMANN, Clóvis. SCALICE, Régis Kovacs. **Projeto de fábrica e layout**. Rio de Janeiro: Editora Elsevier, 2015\.

NORTON, Peter. **Introdução à informática***.* São Paulo: Makron, 2004\.

SEVERINO, Antonio Joaquim. **Metodologia do trabalho científico***.* 22. ed. rev. ampl. São Paulo: Cortez, 2002\.

SISTEMA DE BIBLIOTECAS PROF. JOSÉ STORÓPOLI. Universidade Nove de Julho. **Manual para Elaboração de Trabalhos Acadêmicos de acordo com ABNT**. Disponível em: \<[http://docs.uninove.br/arte/pdfs/Manual-Elaboracao-de-Trabahos-ABNT.pdf](http://docs.uninove.br/arte/pdfs/Manual-Elaboracao-de-Trabahos-ABNT.pdf)\>. Acesso em 30 de setembro de 2016\.

SOUSA, Lindeberg Barros de. **Projetos e implementação de redes: fundamentos, arquiteturas, soluções e planejamento**. São Paulo: Érica, 2009\.

As referências dos documentos consultados para a elaboração do projeto é um item obrigatório. Nela normalmente constam os documentos e qualquer fonte de informação consultada no levantamento de literatura. Exemplos: livros, artigos de revistas, dicionários, normas, sites, entre outros. **Seguir padrão ABNT**.

Link para o MANUAL DE ORIENTAÇÕES PARA APRESENTAÇÃO DE TRABALHOS ACADÊMICOS disponível na página da biblioteca UNINOVE:

[http://docs.uninove.br/arte/pdfs/Manual-Elaboracao-de-Trabahos-ABNT.pdf](http://docs.uninove.br/arte/pdfs/Manual-Elaboracao-de-Trabahos-ABNT.pdf)

