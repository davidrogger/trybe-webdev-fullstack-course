# VPS

Virtual Private Server, É um computador que você pode alugar e acessar remotamente(geralmetne com preço acessível).

É privado pois o acesso ao sistema é feito somente pro quem alugou, não compartilhando o sistema com outras pessoas: quem aluga é root user.
Geralmetne possuem IPs públicos, o que possibilita expôr uma aplicação em uma determinada porta para que fique acessível para toda a internet. Por este motivo, é normalmente utilizada para a disponibilização de projetos na internet, tais como:

- armazenamento de arquivos
- bancos de dados
- back-end de jogos
- sistemas de email
- sites e sistemas web

VPS é uma máquina virtual rodando em uma infraestrutura geranciada pela empresa que a oferece. Por ser uma máquina virtual os recursos de hardware são compartilhados entre outros hospedeiros, mas os recursos de software não. Como a infraestrutura é gerenciada pela empresa que a disponibiliza, você escolhe um sistema operacional, manda instalar e recebe um IP e as credenciais de conexão.

# VPS vs PaaS vs Hospedagem vs Servidor dedicado vs Infraestrutura própria

VPS costuma ser mais barata a priori, visto que existem máquinas a partir de uns 20 reais por mês ao passo que contratar um computador inteiro, mesmo usado e antigo, custa a partir de alguns mil reais.

# VPS vs PaaS

PaaS, plataforma como serviço, exemplo Heroku. Um PaaS fornece à pessoa desenvolvedora toda a plataforma que ela precisa para rodar seu software. Tudo que a pessoa tem que prover é o software em si. Ao utilizar um PaaS você não precisa se preocupar com sistema operacional utilizad pelas máquinas, configuração desse sistema, controle de acesso, etc. Basta você dizer algo do tipo "roda esse meu código aqui" e magia, seu sistema está de pé. Por mais que o PaaS seja bem simples, existem alguns pontos negativos do PaaS ao compararmos com uma VPS.

1. Como o gerenciamento do sistema é completamente delegado, o preço do serviço costuma ser mais alto.
2. Existe uma falta de flexibilidade no que diz respeito à plataforma: se você precisar subir um banco de dados específico, ou um projeto em uma linguagem específica, pode ser que seu provedor de PaaS não tenha suporte para eles.
3. Há uma dependência da plataforma: é mais difícil mudar de um provedor de PaaS para outro, visto que cada provedor pode oferecer plataformas com recursos e limitações diferentes.

Se por um lado é uma desvantagem ter que administrar todo o sistema, por outro é uma vantagem poder configurá-lo para melhor se adequar a aplicação. Em alguns casos onde a aplicação utiliza tecnologias específicas, possui necessidades específicas de ambiente de execução ou similares, utilizar VPS  (ou outros sistemas que permitam administrar o sistema operacional) é estritamente necessário. Além de tudo isso, após configurá-la, a VPS tende a ficar estável e custar menos no longo prazo, principalmente para projetos que não dão retorno financeiro (como por exemplo para experimentações, portfolio e etc), ou para projetos internos de emrpesas.

# VPS vs Hospedagem

Existem diversos provedores de serviços que oferecem hospedagem de sistes, inclusive muitos dos provedores também fornecem VPSs. A diferença principal entre estes serviços de hospedagem de sistes e as VPSs é que hospedagem de sistes costuma ser em um servidor compartilhado com outras pessoas/outros projetos, bem como possuem limitações de linguagens e tecnologias. Hospedagem compartilhada é muito boa quando se quer colocar um site simples no ar, quando a quantidade de acessos for baixa e as tecnologias utilizadas forem mais comuns (por exemplo um siste estático como somente HTML, CSS e JavaScript), mas não são muito boas para hospedar, por exemplo, um sistema web com um back-end completo.

Vantagem da hospedagem é que ela é mais simples de configurar e costuma ser um pouco mais barata. Já como desvagagens, principalmente para web developers experientes, é a falta de flexibilidade para rodar aplicações mais complexas e específicas, a impossibilidade de escalar o desempenho conforme a quantidade de acessos cresce e a lista limitada de tecnologias que podem ser utilizadas.

# VPS vs Servidor dedicado

Um servidor dedicado é como uma VPS, só que o servidor inteiro fica disponível para você utilizar. Geralmetne é o mesmo que uma VPS mais cara, visto que você tem uma máquina específica onde ele é só seu. Os servidores dedicados costumam ser bem mais caros que VPS de entrada (chegando a alguns milhares de reais por mês). mas o modo de uso é quase o mesmo. Um bom uso de servidores dedicados pode ser quando alguma regulamentação exija que os dados não fiquem em discos compartilhados, ou quando toda a performance do servidor é necessária para uma aplicação exclusiva que não responde bem a escalonamento horizontal, somente vertical.

# Por que usar uma VPS

Ela é uma ótima escolha nos seguintes cenários:

- Máquina barata.
- Precisa de configuração no sistema.
- Disponibilidade para mais de uma aplicação em um único sistema.

