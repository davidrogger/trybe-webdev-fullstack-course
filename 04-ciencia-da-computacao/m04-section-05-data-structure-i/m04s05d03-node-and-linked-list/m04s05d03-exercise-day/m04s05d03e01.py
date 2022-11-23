# Exercício 1:
# Aprimorando a classe Lista: nossa classe Lista atende as principais
# operações que essa TAD nos oferece, mas que tal melhorarmos? Para isso,
# você deve adicionar os seguintes métodos:

# a. A operação clear nos permite remover todos os Nodes da lista;

# b. A operação __get_node_at nos permite acessar o Node em qualquer posição
# da lista.

# Após criada as operações anteriores, refatore os seguintes métodos para que
# utilizem a __get_node_at ante iterações:

# insert_at;

# insert_last;

# remove_last;

# remove_at;

# get_element_at.

# ⚠️ Faça a análise de complexidade da sua solução.

# get node, como percorre toda lista, tem complexidade O(n)
# insert_at tem complexidade O(n) pois acaba percorrendo a lista até encontrar
# o indice necessário
# remove_last, O(n) pois percorre toda list para chegar ao ultimo elemento
# remove_at, O(n) pois percorre a lista até encontra o indice
# get_element, O(n) também percorre a lista até encontrar a posição.
