---
title: "ajustar estoque da nota de compra"
date: "2020-01-01"
---
somar ou subtrair, basta alterar a ultima linha com **sinal de + para somar ou - para diminuir**

<code>merge into produtos a
using(select d.id_produto, sum(d.quantidade) as quantidade from nota_compra_detalhe d
left join nota_compra c on c.id = d.id_nfe where c.nota = X
group by d.id_produto) b
on (a.id_produto = b.id_produto)
when matched then update set
a.estoque = a.estoque + b.quantidade
</code>