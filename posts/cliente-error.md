---
title: "remover o vinculo do cliente em vendas no nfce"
date: "2020-01-01"
---
geralmente utilizado quando apresenta erro em relatório de vendas após excluir clientes na base de dados.
<code>update nfce set id_cliente = null
where id_cliente not in (select clientes.id_cliente from clientes)
</code>