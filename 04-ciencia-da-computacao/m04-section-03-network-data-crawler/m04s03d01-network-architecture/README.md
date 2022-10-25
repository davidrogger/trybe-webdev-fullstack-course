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


