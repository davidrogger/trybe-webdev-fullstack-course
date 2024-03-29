# Redes de computadores, pacotes e protocolos

Redes são um conjunto de softwares e hardwares que permitem a comunicação entre diversos dispositivos sejam, computadores, celulares, sendo capazes de compartilhar e transmitir dados uns ao outros. As redes são compostas tanto de componentes físicos (hardware) como cabos, roteadores e switches, quando de sofwares que permitem o tráfego de informações.

Para trafegar uma informação em uma rede, essa informação é dividida em diversos pedaços que são chamados de pacotes ep ossuem diversos dados, além de informações de quem está enviando, qual seu destino, se alguma parte da informação se perdeu no caminho e se é necessário solicitar um reenvio, dentre outras funções.

Para determinar o modo como essas informações são enviadas, trafegadas e recebidas por outro dispositivos existem os protocolos, que são conjuntos de regras que fazem esse controle de como os dados são trocados. Dessa forma, é possível que ao enviar um dado atraǘes da rede, tenhamos a garantia de que os demais dispositivos da rede entenderão do que se trata e como lidar com ele.

# Modelo de Rede

Existem diversos protocolos, cada um é responsável por definir as regras para um objetivo específico. Cada protocolo se preocupa apenas com a parte pela qual ele é responsavel, e conforme a necessidade podemos utilizar combinações de protocolos.

Dividimos os protocolos em grupos, agrupando cada tipo no que é chamada de camadas.
Exemplo: Precisamos de uma camada para identificar quem está enviando a informação e para quem ela se destina, precisamos de outra camada para traduzir os dados a serem trafegados.

O conjunto dessas camadas forma o que chamamos de modelo. O modelo basicamente define quais são as camadas necessárias para a montagem de um pacote.

# Modelo ISO/OSI

Foi lançado com o objetivo de ser um padrão entre os diversos dispositivos de comunicação. Esse modelo divide as redes de computadores em 7 camadas: Aplicação, apresentação, sessão, transporte, rede, enlace e física.

- Cada camada é responsavel pela inserção de uma funcionalidade ao modelo, de forma que a informação passa por uma primeira camada, sendo formatada e tendo informações adicionadas de acordo com sua regra.

- Em seguida, o resultado desse primeiro encapsulamenteo é passado para a outra camada, onde a informação é novamente tratada e são adicionadas as informações pertinentes àquela camada. Esse processo é repetido por todas as camadas até que os dados estejam aptos para serem trafegados ao seu destino.

- Da maneira inversa, o destinatário realiza o desencapsulamento, compreendendo os dados de cada camada e então prosseguindo para a camada seguinte.

# Modelo Internet - TCP/IP

O modelo ISO/OSI define camadas abstratas a serem tratadas. É necessária uma implementação que desses conceitos. Uma das implementações é o TCP/IP, que é um conjunto de protocolos de comunicação: TCP (Transmission Control Protocol - Protocolo de Controle de Transmissão) e o IP (Internet Protocol - Protocolo de Internet).

O TCP/IP define 4 camadas mesclando as 7 do modelo OSI:

# Aplicação

A camada de aplicação contém os protocolos responsáveis por dar significado às informações, sendo a primeira camada passada para a mensagem.

Temos o SMTP(Simple Mail Transfer Protocol - Transmissão de e-mails), FTP (File Transfer Protocol - Transferência de arquivos) e o HTTP (Hypertext transfer protocol - comunicação WEB).

Ao subirmos um serviço web, esse processo é realizado utilizando HTTP o servidor ficará aguardando por um pedido de requisições HTTP. Quando acessamos aquele serviço pelo navegador, o navegador está fazendo uma chamada HTTP ao servidor, de modo que o servidor saberá como interpreta-lo, processa-lo e devolver a devida resposta. Essa resposta também seguirá as regras do protocolo, de modo que o navegador também saiba entender o que foi retornado e além do conteúdo das páginas, também são entregues as respostas outros dados do protocolo, como headers.

Dessa mesma forma, outros protocolos podem ser utilizados nessa camada: SMTP, FTP, DHCP, entre outros. Cada protocolo terá suas regras e padrões dem odo que ambos os lados, cliente e servidor, saibam interpretar as informações.

# DNS

Estamos falando constantemente de endereços IP, que toda máquina possui um endereço IP para poder se comunicar na rede e ao endereçar um pacote nós o utilizamos. Mas a realidade é que não costumamos ver muito esses números ao utilizar a internet.

É utilizado um sistema de nomes para identificar pontos de rede em vez de usar números, já que nomes são mais fáceis de serem utilizados por pessoas.

De maneira resumida, conseguimos atribuir um nome a um endereço IP especifico.

# Transporte

Responsável pela transferência de dados entre diferentes máquinas (seja um servidor ou um computador pessoal). Os principais protocolos dessa camada são o TCP e o UDP.

Os protocolos possuem diferentes aplicabilidades. Exemplo: para criarmos um servidor para servir uma página web não podemos ter perda de informações, caso contrário a página não chegará por completo a quem pediu. Da mesma forma que, ao construirmos uma API, temos que garantir que os dados enviados, como o conteúdo de um formulário de cadastro, cheguei até o servidor, assim como garantir que os dados respondidos em uma consulta feita ao servidor, por exemplo, sejam entregues por inteiro ao cliente que fez essa solicitação. Nesses casos o TCP é o protocolo mais adequado.

Por outro lado, ao assistirmos uma live ou jogarmos algum jogo online, alguns dados podem ser perdidos ao perdermos parte da transmissão do vídeo, de maneira que perceberemos apenas uma oscilação na transmissão. Nesse caso, o UDP é mais indicado, ja que com TCP, caso essa perda de pacote ocorra, será necessário aguardar o reenvio para dar continuidade ao processo. Além disso, o UDP permitirá uma maior velocidade na transmissão e também que o conteúdo seja transmitido para diversos clientes ao mesmo tempo, dando a oportunidade de várias pessoas assistirem conteúdo em tempo real.

# Rede

O principal protocolo utilizado nessa camada é o IP - Internet Protocol, que inclusive dá nome ao modelo. Outras opções de protocolos dessa camada são o ICMP, NAT, ARP. Todos eles lidam com o endereçamento da comunicação.

A camada TCP/IP é usada para identificar o remetente e o destinatário para que o pacote possa ser transmitido na rede.

# Interface / Acesso ao meio

Camada física ou abstração do hardware, também chamada de camada de interface ou acesso ao meio.

A principal função dessa camada é realizar a interface do modelo TCP/IP com os diversos modelos de rede. Por exemplo o protocolo Ethernet, que transmite os dados atráves dos meios físicos, encontrando e  transmitindo tudo pelo melhor caminho possível. Esta camada lida com os meios de comunicação e corresponde ao nível de hardware, ou meio físico, que trata dos sinais eletrônicos, conector, pinagem, níveis de tensão, dimensão físicas, características mecânicas e elétricas...

# Protocolos Seguros

## SSL/TLS e HTTPS

SSL (Secure Sockets Layer) quanto TLS (Transport Layer Security) são protocolos que implementam uma camada (layer) de segurança na rede, sendo o TLS o sucessor do SSL (simplificando).

Já o HTTPS (Hyper Text Transfer Protocol Secure) nada mais é do que o protocolo HTTP, que vimos anteriormente, com uma camada adicional de segurança utilizando o protocolo SSL/TLS.

Quando falamos de segurança nas redes, conceitos muito presentes são o de criptografia e o de cerficados de segurança.

Utilizando certificados de segurança com os protocolos HTTPS e TLS, conseguimos fornecer um ambiente muito mais seguro para publicar nossas aplicações na internet, transmitindo confiança às pessoas que as utilizarão e aumentando sua segurança. Com esses protocolos conseguimos garantir que somos quem somos e também que estamos de fato nos comunicando com quem queremos, evitando que alguém se passe por um dos lados da comunicação ou intercepte nossas conexções. Graças ao avanços que tivemos a partir dos estudos dos algoritmos de criptografia, hoje conseguimos realizar diversos tipos de transações com segurança na internet. Outro exemplo legal de utilização desses protocolos ocorre em nosso dia-a-dia ao clonarmos um respositório do git. Quando queremos trocar dados em nossa máquina e o servidor, podemos fazê-lo tanto via HTTPS como atráves de SSH, utilizando as chaves SSH.

# Ataques cibernéticos

## DoS / DDoS

Quando as aplicações estão expostas de forma publica, qualquer pessoa pode ter acesso a ela, e as vezes podemos ter pessoasl mal intecionadas, que pode acabar realizando diversos acessos simultâneos com intensão de ataque, isso é chamado de DDoS (Distributed Denil of Service) ou ataque distribuído de negação de serviço, tendo como objetivo tirar o serviço do ar, tornando-o temporariamente indisponível.

Precisamos ter atenção contra esse tipo de atque. Provavelmente não teremos que lidar com ataques de terabits, porém aplicações menores utilizam máquinas menores. Assim sendo, nesses cenários há menos capacidade para enfrentar esse tipo de ataque, tendo a possibilidade de ficarem indisponíveis com ataques de escala bem menores.

## Brute Force

Um outro ataque ao qual podemos estar vulneráveis é o conhecido como "brute force", no qual indivíduos, robôs ou escripts maliciosos tentam diversas combinações de usuário e senha, com o objetivo de encontrar as combinações corretas e acessar indevidamente um sistema. Existem diversos métodos de tornar esse ataque mais efetivo, como o uso de listas de palavras com senhar e usuários comuns, tal como usuário "admin" e senha "123456".

Para mitigar essas vulnerabilidades devemos utilizar senhar fortes e outros métodos de segurança pessoais com o nossos logins, como o uso de segundo fator de autenticação e outros cuidados com as senhas.
# Firewall e Proxy

## O que são firewalls?

Em uma tradução mais livre, significa muro de fogo, ou porta corta fogo, que são portas de escada, utilizadas para evitar a passagem de fogo em caso incêndios. De maneira semelhante, os firewalls são responsáveis por impedir ou permitir a passagem de terminados tráfegos em uma rede, seja de entrada ou saída.

# Iptables e Netfilter

Na maioria dos sistemas operacionais existem subsistemas de filtragem de pacotes e ferramentas para gerenciamento de firewall. O sistema padrão para filtragem de pacotes do linux é o Netfilter. Existe uma ferramenta utilizada para configurar o Netfilter chamada Iptables, que opera nas camadas 2 e 3 do modelo OSI. O Iptables é, então o firewall padrão do linux e está presente na maioria das distros.

## Como funciona o Iptables?

Ele compara o tráfego de rede que recebe ou envia com um conjunto de regras preestabalecidas. Essas regras definem as caracterísiticas que um pacote deve possuir e a ação que deve ser tomada para esse tipo de pacote. Podemos criar regras por protocolo, porta de origem/destino, endereço IP, entre outros. Quando ocorre a correspondência de um pacote a uma característica estabelecida em uma regra é então tomada a ação, que pode ser, por exemplo, se aquele pacote será aceito, rejeitado ou registrado em um arquivo de log.
Como diz o próprio nome, a arquitetura do Iptables é formada por "tabelas". Essas tabelas também são conhecidas como cadeias e cada uma possui tipos de regras específicas. Por exemplo, a cadeia "filter", que possui todas as políticas (regras) responsáveis por controlar o tráfego que entra ou sai do computador.

# Fail2ban

É um IPS(Intrusion Prevention System). Essa ferramenta monitora os logs da rede e cria regras no iptables ao detectar compotamento suspeitos, como diversas requisições de um mesmo IP ou diversas tentativas de login SSH, de modo a rejeitar aquele endereço de IP específico por determinado tempo.

# Proxy

Outro componente que pode fornecer mais uma camada de segurança quando falamos de redes é o proxy. Ele provém uma camada a mais de controle entre a internet e os dispositivos da rede, e pode ser utilizado para diversos fins.

Um uso comum dos proxies é como uma espécie de filtro, que atráves de características de uma conexão ou tráfego consegue determinar se esse tráfego deve ser feito ou não.
Por exemplo, para evitar acessos a rede sociais em escritórios o proxy pode ser utilizado para reconhecer palavras-chave em URLs e então recusá-las. Além disso, eles podem impedir que pessoas usuários acessem sites com conteúdos impróprios ou com potencial de ser uma página maliciosa.

# cURL

É uma ferramenta para transferir dados de um servidor, usando um dos protocolos suportados. Normalmente é usado o HTTP, tendo acesso também ao FTP, GOPHER e IMAP e LDAP.
O navegador realiza requisições web, recebe respostas, lê/escreve e renderiza a página. Com o cURL é realizado isso, execeto a renderização.
Oferece uma infinidade de funções úteis como realização de autenticação, interação com API's, preenchimento de formulários, download de arquivose e páginas HTML, entre muito mais...

- `curl <address>` mostra o conteudo do endereço no terminal, caso seja o endereço tenha alguma redirecionamento ele não é realizado automáticamente.
- `curl -L <address>` flag `-L` é realizado a auto redirecionamento
- `curl -i <address>` flag `-i` mostra o cabeçalho do endereço juntamente com seu conteúdo
- `curl -I <address>` flag `-I` ignora o conteudo da página monstrando somente o cabeçalho

## Fazendo download de arquivos

- `curl -o <address>` flag `-0` inicia o download do endereço fornecido
- `curl -s -o <address>` adicionando a flag `-s` esconde informações de progresso
- `curl -# -o <address>` adicionando a flag `-#` deixa a barra de progresso simples.
- `curl -C - -o <address>` flag `-C` continua o download de um download interrompido. Hífen entre as flags indica ao curl para descobrir automaticamente onde continuar o download.

# Interagindo com API's com get e POST

Usando uma API local com porta 3001:

#
Por padrão o curl usa método HTTP GET para realizar as requisições, para realizar um get da rota localhost:3001 basta usar o comando `curl localhost:3001` retornando `{"ok":true}%`
Para especificar o metodo que vai ser usado é usada a flag `-X`, `curl -X GET <address>`.

[Fonte](https://www.alura.com.br/artigos/curl-como-usar)